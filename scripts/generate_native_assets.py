import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

def make_round(img):
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
    result = Image.new('RGBA', img.size, (0, 0, 0, 0))
    result.paste(img.convert('RGBA'), (0, 0), mask)
    return result

def center_crop_resize(img, target_w, target_h):
    orig_w, orig_h = img.size
    orig_ratio = orig_w / orig_h
    target_ratio = target_w / target_h
    
    if orig_ratio > target_ratio:
        # Source is wider, crop sides
        new_w = int(orig_h * target_ratio)
        offset_x = (orig_w - new_w) // 2
        crop_box = (offset_x, 0, offset_x + new_w, orig_h)
    else:
        # Source is taller, crop top/bottom
        new_h = int(orig_w / target_ratio)
        offset_y = (orig_h - new_h) // 2
        crop_box = (0, offset_y, orig_w, offset_y + new_h)
        
    cropped = img.crop(crop_box)
    return cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

def create_adaptive_foreground(src_img, size):
    # Adaptive icon foreground is size x size, but active safe zone is central 66% (circle)
    # The emblem should sit comfortably inside the central 66% with transparent background
    fg = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    emblem_size = int(size * 0.72)
    resized_emblem = src_img.convert('RGBA').resize((emblem_size, emblem_size), Image.Resampling.LANCZOS)
    
    # Optional rounded corner for emblem inside foreground
    mask = Image.new('L', (emblem_size, emblem_size), 0)
    d = ImageDraw.Draw(mask)
    corner_radius = int(emblem_size * 0.22)
    d.rounded_rectangle((0, 0, emblem_size, emblem_size), radius=corner_radius, fill=255)
    
    offset = (size - emblem_size) // 2
    fg.paste(resized_emblem, (offset, offset), mask)
    return fg

def main():
    print("Generating Android Native Assets & Store Graphics...")
    
    app_icon_path = 'public/app_icon.jpg'
    splash_path = 'public/splash_screen.jpg'
    
    if not os.path.exists(app_icon_path):
        raise FileNotFoundError(f"Missing {app_icon_path}")
    if not os.path.exists(splash_path):
        raise FileNotFoundError(f"Missing {splash_path}")
        
    master_icon = Image.open(app_icon_path)
    master_splash = Image.open(splash_path)
    
    # 1. Master Store Assets
    os.makedirs('assets/store', exist_ok=True)
    
    # Apple App Store 1024x1024 (no alpha according to Apple guidelines)
    app_store_1024 = master_icon.convert('RGB').resize((1024, 1024), Image.Resampling.LANCZOS)
    app_store_1024.save('assets/store/apple_app_store_1024x1024.png', 'PNG')
    app_store_1024.save('assets/icon.png', 'PNG')
    
    # Google Play Store 512x512
    play_store_512 = master_icon.convert('RGBA').resize((512, 512), Image.Resampling.LANCZOS)
    play_store_512.save('assets/store/google_play_icon_512x512.png', 'PNG')
    play_store_512.save('public/icon-512.png', 'PNG')
    
    # Google Play Feature Graphic 1024x500
    feature_graphic = center_crop_resize(master_splash, 1024, 500)
    feature_graphic.convert('RGB').save('assets/store/google_play_feature_graphic_1024x500.jpg', 'JPEG', quality=95)
    
    # 2. Android Mipmaps
    mipmap_specs = {
        'mipmap-mdpi': {'icon': 48, 'fg': 108},
        'mipmap-hdpi': {'icon': 72, 'fg': 162},
        'mipmap-xhdpi': {'icon': 96, 'fg': 216},
        'mipmap-xxhdpi': {'icon': 144, 'fg': 324},
        'mipmap-xxxhdpi': {'icon': 192, 'fg': 432},
    }
    
    res_base = 'android/app/src/main/res'
    for bucket, dims in mipmap_specs.items():
        bucket_dir = os.path.join(res_base, bucket)
        os.makedirs(bucket_dir, exist_ok=True)
        
        # Standard square/squircle icon
        icon_size = dims['icon']
        icon_square = master_icon.convert('RGBA').resize((icon_size, icon_size), Image.Resampling.LANCZOS)
        # Apply gentle rounded corner
        mask = Image.new('L', (icon_size, icon_size), 0)
        d = ImageDraw.Draw(mask)
        d.rounded_rectangle((0, 0, icon_size, icon_size), radius=max(4, int(icon_size * 0.18)), fill=255)
        clean_square = Image.new('RGBA', (icon_size, icon_size), (0, 0, 0, 0))
        clean_square.paste(icon_square, (0, 0), mask)
        clean_square.save(os.path.join(bucket_dir, 'ic_launcher.png'), 'PNG')
        
        # Round icon
        round_icon = make_round(icon_square)
        round_icon.save(os.path.join(bucket_dir, 'ic_launcher_round.png'), 'PNG')
        
        # Adaptive foreground
        fg = create_adaptive_foreground(master_icon, dims['fg'])
        fg.save(os.path.join(bucket_dir, 'ic_launcher_foreground.png'), 'PNG')
        print(f"Generated {bucket}: icon={icon_size}x{icon_size}, fg={dims['fg']}x{dims['fg']}")

    # 3. Android Splash Screens
    splash_specs = {
        'drawable': (480, 320),
        'drawable-land-mdpi': (480, 320),
        'drawable-land-hdpi': (800, 480),
        'drawable-land-xhdpi': (1280, 720),
        'drawable-land-xxhdpi': (1600, 960),
        'drawable-land-xxxhdpi': (1920, 1280),
        'drawable-port-mdpi': (320, 480),
        'drawable-port-hdpi': (480, 800),
        'drawable-port-xhdpi': (720, 1280),
        'drawable-port-xxhdpi': (960, 1600),
        'drawable-port-xxxhdpi': (1280, 1920),
    }
    
    for bucket, (w, h) in splash_specs.items():
        bucket_dir = os.path.join(res_base, bucket)
        os.makedirs(bucket_dir, exist_ok=True)
        splash_img = center_crop_resize(master_splash, w, h)
        splash_img.convert('RGB').save(os.path.join(bucket_dir, 'splash.png'), 'PNG')
        print(f"Generated splash {bucket}: {w}x{h}")
        
    print("\nAll native assets generated successfully!")

if __name__ == '__main__':
    main()
