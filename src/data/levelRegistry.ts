import type { Level, Difference } from '../types/game';
import { SAGA_MILESTONES_120 } from './sagaLore';
import { getCredibleLevelStory } from './levelNarratives';
import { generateStageScene, getStageDifferences } from './svgScenes';
import { assetUrl } from '../utils/assetUrl';

export function generateAll120Levels(): Level[] {
  const levels: Level[] = [];
  const TOTAL_LEVELS = 120;

  for (let id = 1; id <= TOTAL_LEVELS; id++) {
    const stageIndex = Math.floor((id - 1) / 10); // 0 to 11 (12 stages)
    const stageNumber = stageIndex + 1;
    const levelNumberInStage = ((id - 1) % 10) + 1; // 1 to 10
    const milestone = SAGA_MILESTONES_120[stageIndex];

    let difficulty: 'Facile' | 'Normale' | 'Esperto';
    if (id <= 30) {
      difficulty = 'Facile';
    } else if (id <= 70) {
      difficulty = 'Normale';
    } else {
      difficulty = 'Esperto';
    }

    const isMilestoneLevel = id % 10 === 0;
    const isLevelOne = id === 1;
    const isLevelTwo = id === 2;
    const isLevelThree = id === 3;
    const isLevelFour = id === 4;
    const isLevelFive = id === 5;
    const isLevelSix = id === 6;
    const isLevelSeven = id === 7;
    const isLevelEight = id === 8;
    const isLevelNine = id === 9;
    const isLevelTen = id === 10;
    const isLevelEleven = id === 11;
    const isLevelTwelve = id === 12;
    const isLevelThirteen = id === 13;
    const isLevelFourteen = id === 14;
    const isLevelFifteen = id === 15;
    const isLevelSixteen = id === 16;
    const isLevelSeventeen = id === 17;
    const isLevelEighteen = id === 18;
    const isLevelNineteen = id === 19;
    const isLevelTwenty = id === 20;
    const isLevelTwentyOne = id === 21;
    const isLevelTwentyTwo = id === 22;
    const isLevelTwentyThree = id === 23;
    const isLevelTwentyFour = id === 24;
    const isLevelTwentyFive = id === 25;
    const isLevelTwentySix = id === 26;
    const isLevelTwentySeven = id === 27;
    const isLevelTwentyEight = id === 28;
    const isLevelTwentyNine = id === 29;
    const isLevelThirty = id === 30;
    const isLevelThirtyOne = id === 31;
    const isLevelThirtyTwo = id === 32;
    const isLevelThirtyThree = id === 33;
    const isLevelThirtyFour = id === 34;
    const isLevelThirtyFive = id === 35;
    const isLevelThirtySix = id === 36;
    const isLevelThirtySeven = id === 37;
    const isLevelThirtyEight = id === 38;
    const isLevelThirtyNine = id === 39;
    const isLevelForty = id === 40;
    const isLevelFortyOne = id === 41;
    const isLevelFortyTwo = id === 42;
    const isLevelFortyThree = id === 43;
    const isLevelFortyFour = id === 44;
    const isLevelFortyFive = id === 45;
    const isLevelFortySix = id === 46;
    const isLevelFortySeven = id === 47;
    const isLevelFortyEight = id === 48;
    const isLevelFortyNine = id === 49;
    const isLevelFifty = id === 50;
    const isLevelFiftyOne = id === 51;
    const isLevelFiftyTwo = id === 52;
    const isLevelFiftyThree = id === 53;
    const isLevelFiftyFour = id === 54;
    const isLevelFiftyFive = id === 55;
    const isLevelFiftySix = id === 56;
    const isLevelFiftySeven = id === 57;
    const isLevelFiftyEight = id === 58;
    const isLevelFiftyNine = id === 59;
    const isLevelSixty = id === 60;
    const isLevelSixtyOne = id === 61;
    const isLevelSixtyTwo = id === 62;
    const isLevelSixtyThree = id === 63;
    const isLevelSixtyFour = id === 64;
    const isLevelSixtyFive = id === 65;
    const isLevelSixtySix = id === 66;
    const isLevelSixtySeven = id === 67;
    const isLevelSixtyEight = id === 68;
    const isLevelSixtyNine = id === 69;
    const isLevelSeventy = id === 70;
    const isLevelSeventyOne = id === 71;
    const isLevelSeventyTwo = id === 72;
    const isLevelSeventyThree = id === 73;
    const isLevelSeventyFour = id === 74;
    const isLevelSeventyFive = id === 75;
    const isLevelSeventySix = id === 76;
    const isLevelSeventySeven = id === 77;
    const isLevelSeventyEight = id === 78;
    const isLevelSeventyNine = id === 79;
    const isLevelEighty = id === 80;
    const isLevelEightyOne = id === 81;
    const isLevelEightyTwo = id === 82;
    const isLevelEightyThree = id === 83;
    const isLevelEightyFour = id === 84;
    const isLevelEightyFive = id === 85;
    const isLevelEightySix = id === 86;
    const isLevelEightySeven = id === 87;
    const isLevelEightyEight = id === 88;
    const isLevelEightyNine = id === 89;
    const isLevelNinety = id === 90;
    const isLevelNinetyOne = id === 91;
    const isLevelNinetyTwo = id === 92;
    const isLevelNinetyThree = id === 93;
    const isLevelNinetyFour = id === 94;
    const isLevelNinetyFive = id === 95;
    const isLevelNinetySix = id === 96;
    const isLevelNinetySeven = id === 97;
    const isLevelNinetyEight = id === 98;
    const isLevelNinetyNine = id === 99;
    const isLevelOneHundred = id === 100;
    const isLevelOneHundredOne = id === 101;
    const isLevelOneHundredTwo = id === 102;
    const isLevelOneHundredThree = id === 103;
    const isLevelOneHundredFour = id === 104;
    const isLevelOneHundredFive = id === 105;
    const isLevelOneHundredSix = id === 106;
    const isLevelOneHundredSeven = id === 107;
    const isLevelOneHundredEight = id === 108;
    const isLevelOneHundredNine = id === 109;
    const isLevelOneHundredTen = id === 110;
    const isLevelOneHundredEleven = id === 111;
    const isLevelOneHundredTwelve = id === 112;
    const isLevelOneHundredThirteen = id === 113;
    const isLevelOneHundredFourteen = id === 114;
    const isLevelOneHundredFifteen = id === 115;
    const isLevelOneHundredSixteen = id === 116;
    const isLevelOneHundredSeventeen = id === 117;
    const isLevelOneHundredEighteen = id === 118;
    const isLevelOneHundredNineteen = id === 119;
    const isLevelOneHundredTwenty = id === 120;
    const isStageOne = stageNumber === 1 || id === 1;
    const isStageTwo = stageNumber === 2;
    const isStageThree = stageNumber === 3;
    const isStageFour = stageNumber === 4;
    const isStageFive = stageNumber === 5 || id === 5;
    const isStageSix = stageNumber === 6 || id === 6;
    const isStageSeven = stageNumber === 7 || id === 7;
    const isStageEight = stageNumber === 8 || id === 8;
    const isStageNine = stageNumber === 9 || id === 9;
    const isStageTen = stageNumber === 10 || id === 10;
    const isStageEleven = stageNumber === 11 || id === 11;
    const isStageTwelve = stageNumber === 12 || id === 12;

    // Realistic masterwork photographs for all levels in Stages 1 to 12
    const imageA = isLevelTwo
      ? '/stage2_crypt_A.jpg?v=8'
      : isLevelThree
      ? '/levels/stage1_lvl3_A.jpg?v=2'
      : isLevelFour
      ? '/levels/stage1_lvl4_A.jpg?v=2'
      : isLevelFive
      ? '/levels/stage1_lvl5_A.jpg?v=2'
      : isLevelSix
      ? '/levels/stage1_lvl6_A.jpg?v=2'
      : isLevelSeven
      ? '/levels/stage1_lvl7_A.jpg?v=2'
      : isLevelEight
      ? '/levels/stage1_lvl8_A.jpg?v=2'
      : isLevelNine
      ? '/levels/stage1_lvl9_A.jpg?v=2'
      : isLevelTen
      ? '/levels/stage1_lvl10_A.jpg?v=2'
      : isLevelEleven
      ? '/levels/stage2_lvl11_A.jpg?v=2'
      : isLevelTwelve
      ? '/levels/stage2_lvl12_A.jpg?v=2'
      : isLevelThirteen
      ? '/levels/stage2_lvl13_A.jpg?v=2'
      : isLevelFourteen
      ? '/levels/stage2_lvl14_A.jpg?v=2'
      : isLevelFifteen
      ? '/levels/stage2_lvl15_A.jpg?v=2'
      : isLevelSixteen
      ? '/levels/stage2_lvl16_A.jpg?v=2'
      : isLevelSeventeen
      ? '/levels/stage2_lvl17_A.jpg?v=2'
      : isLevelEighteen
      ? '/levels/stage2_lvl18_A.jpg?v=2'
      : isLevelNineteen
      ? '/levels/stage2_lvl19_A.jpg?v=2'
      : isLevelTwenty
      ? '/levels/stage2_lvl20_A.jpg?v=2'
      : isLevelTwentyOne
      ? '/levels/stage3_lvl21_A.jpg?v=2'
      : isLevelTwentyTwo
      ? '/levels/stage3_lvl22_A.jpg?v=2'
      : isLevelTwentyThree
      ? '/levels/stage3_lvl23_A.jpg?v=2'
      : isLevelTwentyFour
      ? '/levels/stage3_lvl24_A.jpg?v=2'
      : isLevelTwentyFive
      ? '/levels/stage3_lvl25_A.jpg?v=2'
      : isLevelTwentySix
      ? '/levels/stage3_lvl26_A.jpg?v=2'
      : isLevelTwentySeven
      ? '/levels/stage3_lvl27_A.jpg?v=2'
      : isLevelTwentyEight
      ? '/levels/stage3_lvl28_A.jpg?v=2'
      : isLevelTwentyNine
      ? '/levels/stage3_lvl29_A.jpg?v=2'
      : isLevelThirty
      ? '/levels/stage3_lvl30_A.jpg?v=2'
      : isLevelThirtyOne
      ? '/levels/stage4_lvl31_A.jpg?v=2'
      : isLevelThirtyTwo
      ? '/levels/stage4_lvl32_A.jpg?v=2'
      : isLevelThirtyThree
      ? '/levels/stage4_lvl33_A.jpg?v=2'
      : isLevelThirtyFour
      ? '/levels/stage4_lvl34_A.jpg?v=2'
      : isLevelThirtyFive
      ? '/levels/stage4_lvl35_A.jpg?v=2'
      : isLevelThirtySix
      ? '/levels/stage4_lvl36_A.jpg?v=2'
      : isLevelThirtySeven
      ? '/levels/stage4_lvl37_A.jpg?v=2'
      : isLevelThirtyEight
      ? '/levels/stage4_lvl38_A.jpg?v=2'
      : isLevelThirtyNine
      ? '/levels/stage4_lvl39_A.jpg?v=2'
      : isLevelForty
      ? '/levels/stage4_lvl40_A.jpg?v=2'
      : isLevelFortyOne
      ? '/levels/stage5_lvl41_A.jpg?v=2'
      : isLevelFortyTwo
      ? '/levels/stage5_lvl42_A.jpg?v=2'
      : isLevelFortyThree
      ? '/levels/stage5_lvl43_A.jpg?v=2'
      : isLevelFortyFour
      ? '/levels/stage5_lvl44_A.jpg?v=2'
      : isLevelFortyFive
      ? '/levels/stage5_lvl45_A.jpg?v=2'
      : isLevelFortySix
      ? '/levels/stage5_lvl46_A.jpg?v=2'
      : isLevelFortySeven
      ? '/levels/stage5_lvl47_A.jpg?v=2'
      : isLevelFortyEight
      ? '/levels/stage5_lvl48_A.jpg?v=2'
      : isLevelFortyNine
      ? '/levels/stage5_lvl49_A.jpg?v=2'
      : isLevelFifty
      ? '/levels/stage5_lvl50_A.jpg?v=2'
      : isLevelFiftyOne
      ? '/levels/stage6_lvl51_A.jpg?v=2'
      : isLevelFiftyTwo
      ? '/levels/stage6_lvl52_A.jpg?v=2'
      : isLevelFiftyThree
      ? '/levels/stage6_lvl53_A.jpg?v=2'
      : isLevelFiftyFour
      ? '/levels/stage6_lvl54_A.jpg?v=2'
      : isLevelFiftyFive
      ? '/levels/stage6_lvl55_A.jpg?v=2'
      : isLevelFiftySix
      ? '/levels/stage6_lvl56_A.jpg?v=2'
      : isLevelFiftySeven
      ? '/levels/stage6_lvl57_A.jpg?v=2'
      : isLevelFiftyEight
      ? '/levels/stage6_lvl58_A.jpg?v=2'
      : isLevelFiftyNine
      ? '/levels/stage6_lvl59_A.jpg?v=2'
      : isLevelSixty
      ? '/levels/stage6_lvl60_A.jpg?v=2'
      : isLevelSixtyOne
      ? '/levels/stage7_lvl61_A.jpg?v=2'
      : isLevelSixtyTwo
      ? '/levels/stage7_lvl62_A.jpg?v=2'
      : isLevelSixtyThree
      ? '/levels/stage7_lvl63_A.jpg?v=2'
      : isLevelSixtyFour
      ? '/levels/stage7_lvl64_A.jpg?v=2'
      : isLevelSixtyFive
      ? '/levels/stage7_lvl65_A.jpg?v=2'
      : isLevelSixtySix
      ? '/levels/stage7_lvl66_A.jpg?v=2'
      : isLevelSixtySeven
      ? '/levels/stage7_lvl67_A.jpg?v=2'
      : isLevelSixtyEight
      ? '/levels/stage7_lvl68_A.jpg?v=2'
      : isLevelSixtyNine
      ? '/levels/stage7_lvl69_A.jpg?v=2'
      : isLevelSeventy
      ? '/levels/stage7_lvl70_A.jpg?v=2'
      : isLevelSeventyOne
      ? '/levels/stage8_lvl71_A.jpg?v=2'
      : isLevelSeventyTwo
      ? '/levels/stage8_lvl72_A.jpg?v=2'
      : isLevelSeventyThree
      ? '/levels/stage8_lvl73_A.jpg?v=2'
      : isLevelSeventyFour
      ? '/levels/stage8_lvl74_A.jpg?v=2'
      : isLevelSeventyFive
      ? '/levels/stage8_lvl75_A.jpg?v=2'
      : isLevelSeventySix
      ? '/levels/stage8_lvl76_A.jpg?v=2'
      : isLevelSeventySeven
      ? '/levels/stage8_lvl77_A.jpg?v=2'
      : isLevelSeventyEight
      ? '/levels/stage8_lvl78_A.jpg?v=2'
      : isLevelSeventyNine
      ? '/levels/stage8_lvl79_A.jpg?v=2'
      : isLevelEighty
      ? '/levels/stage8_lvl80_A.jpg?v=2'
      : isLevelEightyOne
      ? '/levels/stage9_lvl81_A.jpg'
      : isLevelEightyTwo
      ? '/levels/stage9_lvl82_A.jpg'
      : isLevelEightyThree
      ? '/levels/stage9_lvl83_A.jpg'
      : isLevelEightyFour
      ? '/levels/stage9_lvl84_A.jpg'
      : isLevelEightyFive
      ? '/levels/stage9_lvl85_A.jpg'
      : isLevelEightySix
      ? '/levels/stage9_lvl86_A.jpg'
      : isLevelEightySeven
      ? '/levels/stage9_lvl87_A.jpg'
      : isLevelEightyEight
      ? '/levels/stage9_lvl88_A.jpg'
      : isLevelEightyNine
      ? '/levels/stage9_lvl89_A.jpg'
      : isLevelNinety
      ? '/levels/stage9_lvl90_A.jpg'
      : isLevelNinetyOne
      ? '/levels/stage10_lvl91_A.jpg'
      : isLevelNinetyTwo
      ? '/levels/stage10_lvl92_A.jpg'
      : isLevelNinetyThree
      ? '/levels/stage10_lvl93_A.jpg'
      : isLevelNinetyFour
      ? '/levels/stage10_lvl94_A.jpg'
      : isLevelNinetyFive
      ? '/levels/stage10_lvl95_A.jpg'
      : isLevelNinetySix
      ? '/levels/stage10_lvl96_A.jpg'
      : isLevelNinetySeven
      ? '/levels/stage10_lvl97_A.jpg'
      : isLevelNinetyEight
      ? '/levels/stage10_lvl98_A.jpg'
      : isLevelNinetyNine
      ? '/levels/stage10_lvl99_A.jpg'
      : isLevelOneHundred
      ? '/levels/stage10_lvl100_A.jpg'
      : isLevelOneHundredOne
      ? '/levels/stage11_lvl101_A.jpg'
      : isLevelOneHundredTwo
      ? '/levels/stage11_lvl102_A.jpg'
      : isLevelOneHundredThree
      ? '/levels/stage11_lvl103_A.jpg'
      : isLevelOneHundredFour
      ? '/levels/stage11_lvl104_A.jpg'
      : isLevelOneHundredFive
      ? '/levels/stage11_lvl105_A.jpg'
      : isLevelOneHundredSix
      ? '/levels/stage11_lvl106_A.jpg'
      : isLevelOneHundredSeven
      ? '/levels/stage11_lvl107_A.jpg'
      : isLevelOneHundredEight
      ? '/levels/stage11_lvl108_A.jpg'
      : isLevelOneHundredNine
      ? '/levels/stage11_lvl109_A.jpg'
      : isLevelOneHundredTen
      ? '/levels/stage11_lvl110_A.jpg'
      : isLevelOneHundredEleven
      ? '/levels/stage12_lvl111_A.jpg'
      : isLevelOneHundredTwelve
      ? '/levels/stage12_lvl112_A.jpg'
      : isLevelOneHundredThirteen
      ? '/levels/stage12_lvl113_A.jpg'
      : isLevelOneHundredFourteen
      ? '/levels/stage12_lvl114_A.jpg'
      : isLevelOneHundredFifteen
      ? '/levels/stage12_lvl115_A.jpg'
      : isLevelOneHundredSixteen
      ? '/levels/stage12_lvl116_A.jpg'
      : isLevelOneHundredSeventeen
      ? '/levels/stage12_lvl117_A.jpg'
      : isLevelOneHundredEighteen
      ? '/levels/stage12_lvl118_A.jpg'
      : isLevelOneHundredNineteen
      ? '/levels/stage12_lvl119_A.jpg'
      : isLevelOneHundredTwenty
      ? '/levels/stage12_lvl120_A.jpg'
      : isLevelSeventyOne
      ? '/levels/stage8_lvl71_A.jpg?v=2'
      : isLevelSeventyTwo
      ? '/levels/stage8_lvl72_A.jpg?v=2'
      : isLevelSeventyThree
      ? '/levels/stage8_lvl73_A.jpg?v=2'
      : isLevelSeventyFour
      ? '/levels/stage8_lvl74_A.jpg?v=2'
      : isLevelSeventyFive
      ? '/levels/stage8_lvl75_A.jpg?v=2'
      : isLevelSeventySix
      ? '/levels/stage8_lvl76_A.jpg?v=2'
      : isLevelSeventySeven
      ? '/levels/stage8_lvl77_A.jpg?v=2'
      : isLevelSeventyEight
      ? '/levels/stage8_lvl78_A.jpg?v=2'
      : isLevelSeventyNine
      ? '/levels/stage8_lvl79_A.jpg?v=2'
      : isLevelEighty
      ? '/levels/stage8_lvl80_A.jpg?v=2'
      : isStageOne
      ? '/oxford_study_A.jpg?v=5'
      : isStageTwo
      ? '/stage2_crypt_A.jpg?v=3'
      : isStageThree
      ? '/stage3_venice_A.jpg'
      : isStageFour
      ? '/stage4_crete_A.jpg'
      : isStageFive
      ? '/stage5_alexandria_A.jpg'
      : isStageSix
      ? '/stage6_luxor_A.jpg'
      : isStageSeven
      ? '/stage7_siwa_A.jpg'
      : isStageEight
      ? '/stage8_petra_A.jpg'
      : isStageNine
      ? '/stage9_iguazu_A.jpg'
      : isStageTen
      ? '/stage10_nazca_A.jpg'
      : isStageEleven
      ? '/stage11_machupicchu_A.jpg'
      : isStageTwelve
      ? '/stage12_paititi_A.jpg'
      : generateStageScene(stageNumber, levelNumberInStage, 'A');
    const imageB = isLevelTwo
      ? '/stage2_crypt_B.jpg?v=8'
      : isLevelThree
      ? '/levels/stage1_lvl3_B.jpg?v=2'
      : isLevelFour
      ? '/levels/stage1_lvl4_B.jpg?v=2'
      : isLevelFive
      ? '/levels/stage1_lvl5_B.jpg?v=2'
      : isLevelSix
      ? '/levels/stage1_lvl6_B.jpg?v=2'
      : isLevelSeven
      ? '/levels/stage1_lvl7_B.jpg?v=2'
      : isLevelEight
      ? '/levels/stage1_lvl8_B.jpg?v=2'
      : isLevelNine
      ? '/levels/stage1_lvl9_B.jpg?v=2'
      : isLevelTen
      ? '/levels/stage1_lvl10_B.jpg?v=2'
      : isLevelEleven
      ? '/levels/stage2_lvl11_B.jpg?v=2'
      : isLevelTwelve
      ? '/levels/stage2_lvl12_B.jpg?v=2'
      : isLevelThirteen
      ? '/levels/stage2_lvl13_B.jpg?v=2'
      : isLevelFourteen
      ? '/levels/stage2_lvl14_B.jpg?v=2'
      : isLevelFifteen
      ? '/levels/stage2_lvl15_B.jpg?v=2'
      : isLevelSixteen
      ? '/levels/stage2_lvl16_B.jpg?v=2'
      : isLevelSeventeen
      ? '/levels/stage2_lvl17_B.jpg?v=2'
      : isLevelEighteen
      ? '/levels/stage2_lvl18_B.jpg?v=2'
      : isLevelNineteen
      ? '/levels/stage2_lvl19_B.jpg?v=2'
      : isLevelTwenty
      ? '/levels/stage2_lvl20_B.jpg?v=2'
      : isLevelTwentyOne
      ? '/levels/stage3_lvl21_B.jpg?v=2'
      : isLevelTwentyTwo
      ? '/levels/stage3_lvl22_B.jpg?v=2'
      : isLevelTwentyThree
      ? '/levels/stage3_lvl23_B.jpg?v=2'
      : isLevelTwentyFour
      ? '/levels/stage3_lvl24_B.jpg?v=2'
      : isLevelTwentyFive
      ? '/levels/stage3_lvl25_B.jpg?v=2'
      : isLevelTwentySix
      ? '/levels/stage3_lvl26_B.jpg?v=2'
      : isLevelTwentySeven
      ? '/levels/stage3_lvl27_B.jpg?v=2'
      : isLevelTwentyEight
      ? '/levels/stage3_lvl28_B.jpg?v=2'
      : isLevelTwentyNine
      ? '/levels/stage3_lvl29_B.jpg?v=2'
      : isLevelThirty
      ? '/levels/stage3_lvl30_B.jpg?v=2'
      : isLevelThirtyOne
      ? '/levels/stage4_lvl31_B.jpg?v=2'
      : isLevelThirtyTwo
      ? '/levels/stage4_lvl32_B.jpg?v=2'
      : isLevelThirtyThree
      ? '/levels/stage4_lvl33_B.jpg?v=2'
      : isLevelThirtyFour
      ? '/levels/stage4_lvl34_B.jpg?v=2'
      : isLevelThirtyFive
      ? '/levels/stage4_lvl35_B.jpg?v=2'
      : isLevelThirtySix
      ? '/levels/stage4_lvl36_B.jpg?v=2'
      : isLevelThirtySeven
      ? '/levels/stage4_lvl37_B.jpg?v=2'
      : isLevelThirtyEight
      ? '/levels/stage4_lvl38_B.jpg?v=2'
      : isLevelThirtyNine
      ? '/levels/stage4_lvl39_B.jpg?v=2'
      : isLevelForty
      ? '/levels/stage4_lvl40_B.jpg?v=2'
      : isLevelFortyOne
      ? '/levels/stage5_lvl41_B.jpg?v=2'
      : isLevelFortyTwo
      ? '/levels/stage5_lvl42_B.jpg?v=2'
      : isLevelFortyThree
      ? '/levels/stage5_lvl43_B.jpg?v=2'
      : isLevelFortyFour
      ? '/levels/stage5_lvl44_B.jpg?v=2'
      : isLevelFortyFive
      ? '/levels/stage5_lvl45_B.jpg?v=2'
      : isLevelFortySix
      ? '/levels/stage5_lvl46_B.jpg?v=2'
      : isLevelFortySeven
      ? '/levels/stage5_lvl47_B.jpg?v=2'
      : isLevelFortyEight
      ? '/levels/stage5_lvl48_B.jpg?v=2'
      : isLevelFortyNine
      ? '/levels/stage5_lvl49_B.jpg?v=2'
      : isLevelFifty
      ? '/levels/stage5_lvl50_B.jpg?v=2'
      : isLevelFiftyOne
      ? '/levels/stage6_lvl51_B.jpg?v=2'
      : isLevelFiftyTwo
      ? '/levels/stage6_lvl52_B.jpg?v=2'
      : isLevelFiftyThree
      ? '/levels/stage6_lvl53_B.jpg?v=2'
      : isLevelFiftyFour
      ? '/levels/stage6_lvl54_B.jpg?v=2'
      : isLevelFiftyFive
      ? '/levels/stage6_lvl55_B.jpg?v=2'
      : isLevelFiftySix
      ? '/levels/stage6_lvl56_B.jpg?v=2'
      : isLevelFiftySeven
      ? '/levels/stage6_lvl57_B.jpg?v=2'
      : isLevelFiftyEight
      ? '/levels/stage6_lvl58_B.jpg?v=2'
      : isLevelFiftyNine
      ? '/levels/stage6_lvl59_B.jpg?v=2'
      : isLevelSixty
      ? '/levels/stage6_lvl60_B.jpg?v=2'
      : isLevelSixtyOne
      ? '/levels/stage7_lvl61_B.jpg?v=2'
      : isLevelSixtyTwo
      ? '/levels/stage7_lvl62_B.jpg?v=2'
      : isLevelSixtyThree
      ? '/levels/stage7_lvl63_B.jpg?v=2'
      : isLevelSixtyFour
      ? '/levels/stage7_lvl64_B.jpg?v=2'
      : isLevelSixtyFive
      ? '/levels/stage7_lvl65_B.jpg?v=2'
      : isLevelSixtySix
      ? '/levels/stage7_lvl66_B.jpg?v=2'
      : isLevelSixtySeven
      ? '/levels/stage7_lvl67_B.jpg?v=2'
      : isLevelSixtyEight
      ? '/levels/stage7_lvl68_B.jpg?v=2'
      : isLevelSixtyNine
      ? '/levels/stage7_lvl69_B.jpg?v=2'
      : isLevelSeventy
      ? '/levels/stage7_lvl70_B.jpg?v=2'
      : isLevelSeventyOne
      ? '/levels/stage8_lvl71_B.jpg?v=2'
      : isLevelSeventyTwo
      ? '/levels/stage8_lvl72_B.jpg?v=2'
      : isLevelSeventyThree
      ? '/levels/stage8_lvl73_B.jpg?v=2'
      : isLevelSeventyFour
      ? '/levels/stage8_lvl74_B.jpg?v=2'
      : isLevelSeventyFive
      ? '/levels/stage8_lvl75_B.jpg?v=2'
      : isLevelSeventySix
      ? '/levels/stage8_lvl76_B.jpg?v=2'
      : isLevelSeventySeven
      ? '/levels/stage8_lvl77_B.jpg?v=2'
      : isLevelSeventyEight
      ? '/levels/stage8_lvl78_B.jpg?v=2'
      : isLevelSeventyNine
      ? '/levels/stage8_lvl79_B.jpg?v=2'
      : isLevelEighty
      ? '/levels/stage8_lvl80_B.jpg?v=2'
      : isLevelEightyOne
      ? '/levels/stage9_lvl81_B.jpg'
      : isLevelEightyTwo
      ? '/levels/stage9_lvl82_B.jpg'
      : isLevelEightyThree
      ? '/levels/stage9_lvl83_B.jpg'
      : isLevelEightyFour
      ? '/levels/stage9_lvl84_B.jpg'
      : isLevelEightyFive
      ? '/levels/stage9_lvl85_B.jpg'
      : isLevelEightySix
      ? '/levels/stage9_lvl86_B.jpg'
      : isLevelEightySeven
      ? '/levels/stage9_lvl87_B.jpg'
      : isLevelEightyEight
      ? '/levels/stage9_lvl88_B.jpg'
      : isLevelEightyNine
      ? '/levels/stage9_lvl89_B.jpg'
      : isLevelNinety
      ? '/levels/stage9_lvl90_B.jpg'
      : isLevelNinetyOne
      ? '/levels/stage10_lvl91_B.jpg'
      : isLevelNinetyTwo
      ? '/levels/stage10_lvl92_B.jpg'
      : isLevelNinetyThree
      ? '/levels/stage10_lvl93_B.jpg'
      : isLevelNinetyFour
      ? '/levels/stage10_lvl94_B.jpg'
      : isLevelNinetyFive
      ? '/levels/stage10_lvl95_B.jpg'
      : isLevelNinetySix
      ? '/levels/stage10_lvl96_B.jpg'
      : isLevelNinetySeven
      ? '/levels/stage10_lvl97_B.jpg'
      : isLevelNinetyEight
      ? '/levels/stage10_lvl98_B.jpg'
      : isLevelNinetyNine
      ? '/levels/stage10_lvl99_B.jpg'
      : isLevelOneHundred
      ? '/levels/stage10_lvl100_B.jpg'
      : isLevelOneHundredOne
      ? '/levels/stage11_lvl101_B.jpg'
      : isLevelOneHundredTwo
      ? '/levels/stage11_lvl102_B.jpg'
      : isLevelOneHundredThree
      ? '/levels/stage11_lvl103_B.jpg'
      : isLevelOneHundredFour
      ? '/levels/stage11_lvl104_B.jpg'
      : isLevelOneHundredFive
      ? '/levels/stage11_lvl105_B.jpg'
      : isLevelOneHundredSix
      ? '/levels/stage11_lvl106_B.jpg'
      : isLevelOneHundredSeven
      ? '/levels/stage11_lvl107_B.jpg'
      : isLevelOneHundredEight
      ? '/levels/stage11_lvl108_B.jpg'
      : isLevelOneHundredNine
      ? '/levels/stage11_lvl109_B.jpg'
      : isLevelOneHundredTen
      ? '/levels/stage11_lvl110_B.jpg'
      : isLevelOneHundredEleven
      ? '/levels/stage12_lvl111_B.jpg'
      : isLevelOneHundredTwelve
      ? '/levels/stage12_lvl112_B.jpg'
      : isLevelOneHundredThirteen
      ? '/levels/stage12_lvl113_B.jpg'
      : isLevelOneHundredFourteen
      ? '/levels/stage12_lvl114_B.jpg'
      : isLevelOneHundredFifteen
      ? '/levels/stage12_lvl115_B.jpg'
      : isLevelOneHundredSixteen
      ? '/levels/stage12_lvl116_B.jpg'
      : isLevelOneHundredSeventeen
      ? '/levels/stage12_lvl117_B.jpg'
      : isLevelOneHundredEighteen
      ? '/levels/stage12_lvl118_B.jpg'
      : isLevelOneHundredNineteen
      ? '/levels/stage12_lvl119_B.jpg'
      : isLevelOneHundredTwenty
      ? '/levels/stage12_lvl120_B.jpg'
      : isLevelSeventyOne
      ? '/levels/stage8_lvl71_B.jpg?v=2'
      : isLevelSeventyTwo
      ? '/levels/stage8_lvl72_B.jpg?v=2'
      : isLevelSeventyThree
      ? '/levels/stage8_lvl73_B.jpg?v=2'
      : isLevelSeventyFour
      ? '/levels/stage8_lvl74_B.jpg?v=2'
      : isLevelSeventyFive
      ? '/levels/stage8_lvl75_B.jpg?v=2'
      : isLevelSeventySix
      ? '/levels/stage8_lvl76_B.jpg?v=2'
      : isLevelSeventySeven
      ? '/levels/stage8_lvl77_B.jpg?v=2'
      : isLevelSeventyEight
      ? '/levels/stage8_lvl78_B.jpg?v=2'
      : isLevelSeventyNine
      ? '/levels/stage8_lvl79_B.jpg?v=2'
      : isLevelEighty
      ? '/levels/stage8_lvl80_B.jpg?v=2'
      : isStageOne
      ? '/oxford_study_B.jpg?v=5'
      : isStageTwo
      ? '/stage2_crypt_B.jpg?v=3'
      : isStageThree
      ? '/stage3_venice_B.jpg'
      : isStageFour
      ? '/stage4_crete_B.jpg'
      : isStageFive
      ? '/stage5_alexandria_B.jpg'
      : isStageSix
      ? '/stage6_luxor_B.jpg'
      : isStageSeven
      ? '/stage7_siwa_B.jpg'
      : isStageEight
      ? '/stage8_petra_B.jpg'
      : isStageNine
      ? '/stage9_iguazu_B.jpg'
      : isStageTen
      ? '/stage10_nazca_B.jpg'
      : isStageEleven
      ? '/stage11_machupicchu_B.jpg'
      : isStageTwelve
      ? '/stage12_paititi_B.jpg'
      : generateStageScene(stageNumber, levelNumberInStage, 'B');

    // Narrative sabotage clues left by the Mano Oscura
    let diffsForLevel: Difference[];
    if (isLevelOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 76.47,
          y: 22.49,
          radius: 12.0,
          clueType: 'torn_evidence',
          name: "Mappa del Mondo del 1512",
          loreClue: "La grande carta nautica a doppio emisfero è stata strappata via dalla boiserie: la Mano Oscura ha reciso i fili di rame per cancellare la rotta atlantica."
        },
        {
          id: `lvl${id}_d2`,
          x: 30.77,
          y: 37.40,
          radius: 11.0,
          clueType: 'stolen_relic',
          name: "Reliquia Solare nella Campana di Vetro",
          loreClue: "La campana di cristallo è stata spaccata e l'antico ostensorio d'oro con l'Idolo Solare è stato strappato dal piedistallo."
        },
        {
          id: `lvl${id}_d3`,
          x: 72.57,
          y: 45.52,
          radius: 10.0,
          clueType: 'sabotage',
          name: "Lampada da Banchiere Smeraldo",
          loreClue: "La lampada da tavolo in ottone e vetro smeraldo è stata divelta per gettare lo studio nell'oscurità."
        },
        {
          id: `lvl${id}_d4`,
          x: 65.67,
          y: 57.04,
          radius: 10.0,
          clueType: 'dark_seal',
          name: "Calamaio e Macchia d'Inchiostro",
          loreClue: "Il calamaio in peltro è stato rovesciato di proposito per nascondere con una pozza d'inchiostro nero i passaggi chiave del manoscritto."
        },
        {
          id: `lvl${id}_d5`,
          x: 27.42,
          y: 84.84,
          radius: 11.0,
          clueType: 'sabotage',
          name: "Cuscino di Velluto e Cocci di Vetro",
          loreClue: "Il cuscino in velluto bordeaux è cosparso di frammenti di vetro affilati: il sigillo cerimoniale in oro che vi poggiava è stato asportato."
        },
        {
          id: `lvl${id}_d6`,
          x: 58.33,
          y: 76.23,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Chiave d'Oro nella Serratura del Cassetto",
          loreClue: "La chiave d'ottone che custodiva il cassetto segreto delle mappe di Paititi è stata trafugata, lasciando la toppa della serratura spalancata."
        },
      ];
    } else if (isLevelTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 74.83,
          y: 52.58,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Teschio nella Nicchia di Pietra",
          loreClue: "L'antico teschio umano custodito nella nicchia di pietra è stato asportato: i profanatori cercavano il codice segreto inciso sull'osso occipitale."
        },
        {
          id: `lvl${id}_d2`,
          x: 61.38,
          y: 72.60,
          radius: 11.5,
          clueType: 'stolen_relic',
          name: "Il Calice Sacro in Pietra",
          loreClue: "L'antico calice cerimoniale in pietra arenaria che troneggiava al centro del tavolo è stato asportato per i suoi simboli esoterici."
        },
        {
          id: `lvl${id}_d3`,
          x: 87.11,
          y: 70.39,
          radius: 12.5,
          clueType: 'sabotage',
          name: "Il Piccone da Scavo sul Muro",
          loreClue: "Il pesante piccone da scavo archeologico appoggiato alla parete di pietra è stato sottratto per forzare le cripte inferiori."
        },
        {
          id: `lvl${id}_d4`,
          x: 36.36,
          y: 71.19,
          radius: 9.5,
          clueType: 'sabotage',
          name: "La Fiamma della Lanterna a Olio",
          loreClue: "La fiamma viva all'interno della lanterna d'ottone è stata soffocata con violenza per far piombare la sala nell'oscurità."
        },
        {
          id: `lvl${id}_d5`,
          x: 27.89,
          y: 78.07,
          radius: 9.5,
          clueType: 'stolen_relic',
          name: "Il Secondo Rotolo di Pergamena",
          loreClue: "Il secondo rotolo di pergamena miniata sul ripiano in pietra è stato sfilato via dal legaccio di cuoio e trafugato."
        },
        {
          id: `lvl${id}_d6`,
          x: 67.95,
          y: 80.32,
          radius: 9.0,
          clueType: 'stolen_relic',
          name: "Le Boccette Alchemiche sul Tavolo",
          loreClue: "Le fiale di reagenti e tinture alchemiche con tappo in sughero sono state trafugate dal piano di pietra accanto al tomo."
        },
      ];
    } else if (isLevelThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 41.89,
          y: 25.47,
          radius: 9.5,
          clueType: 'sabotage',
          name: "La Lampadina a Filamento dal Soffitto",
          loreClue: "La lampada a sospensione sopra il banco di lavoro è stata spenta per impedire l'osservazione delle luminescenze chimiche sulla pergamena."
        },
        {
          id: `lvl${id}_d2`,
          x: 60.77,
          y: 64.90,
          radius: 11.5,
          clueType: 'stolen_relic',
          name: "Il Mortaio e i Campioni dell'Archeometra",
          loreClue: "Il mortaio in porcellana bianca e le provette dei campioni di cinabro peruviano sono stati asportati dal banco sotto gli occhi dello studioso."
        },
        {
          id: `lvl${id}_d3`,
          x: 38.42,
          y: 73.66,
          radius: 10.0,
          clueType: 'stolen_relic',
          name: "Il Grande Rastrello Portaprovette",
          loreClue: "Il massiccio rastrello in quercia con le provette graduate dei reagenti alchemici è stato trafugato dal banco in primo piano per distruggere le prove."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.73,
          y: 47.20,
          radius: 9.0,
          clueType: 'stolen_relic',
          name: "La Serie di Pesi Milligrammetrici d'Ottone",
          loreClue: "La serie di cilindri micrometrici in ottone della bilancia analitica è stata sottratta: serviva a dosare le polveri alchemiche con precisione assoluta."
        },
        {
          id: `lvl${id}_d5`,
          x: 22.19,
          y: 56.46,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Fiamma del Becco Bunsen sotto il Matraccio",
          loreClue: "Il rubinetto del gas del becco Bunsen è stato chiuso con violenza: la fiamma che riscaldava il solvente sotto il matraccio è stata spenta."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.56,
          y: 36.30,
          radius: 9.0,
          clueType: 'stolen_relic',
          name: "Il Flacone di Reagente 'Alum' sullo Scaffale",
          loreClue: "Il prezioso barattolo di allume di rocca è stato svuotato e trafugato: è il mordenzante chimico fondamentale per far reagire l'inchiostro simpatico della mappa."
        },
      ];
    } else if (isLevelFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.51,
          y: 48.61,
          radius: 13.0,
          clueType: 'sabotage',
          name: "La Cancellata della Cripta Forzata e Aperta",
          loreClue: "La pesante cancellata gotica in ferro battuto che sigillava i meandri inferiori dell'ossario è stata forzata e spalancata verso i tunnel segreti."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.35,
          y: 60.86,
          radius: 10.0,
          clueType: 'stolen_relic',
          name: "La Spada Medievale sulla Tomba",
          loreClue: "L'antica spada da cavaliere che giaceva scolpita al fianco di Sir Arthur Harrington è stata trafugata dai profanatori per il suo pomo cifrato."
        },
        {
          id: `lvl${id}_d3`,
          x: 67.54,
          y: 67.09,
          radius: 9.5,
          clueType: 'sabotage',
          name: "La Fiamma della Lanterna sul Plinto",
          loreClue: "La fiamma viva all'interno della lanterna a petrolio sul basamento di pietra è stata soffocata per far piombare la cripta nel buio."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.19,
          y: 76.07,
          radius: 10.5,
          clueType: 'stolen_relic',
          name: "Il Grande Tomo d'Archivio sulla Pietra",
          loreClue: "Il registro di spedizione aperto con i rilievi della meridiana tombale è stato asportato dal blocco di pietra."
        },
        {
          id: `lvl${id}_d5`,
          x: 71.05,
          y: 80.17,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calibro in Ottone da Rilievo",
          loreClue: "Il calibro di precisione in ottone utilizzato per misurare i rilievi astronomici della lastra tombale è scomparso."
        },
        {
          id: `lvl${id}_d6`,
          x: 84.43,
          y: 86.24,
          radius: 9.0,
          clueType: 'stolen_relic',
          name: "Il Metro Pieghevole in Legno",
          loreClue: "L'antico metro a snodi da muratore in bosso poggiato sul blocco è stato sottratto per impedire la ricostruzione delle proporzioni."
        },
      ];
    } else if (isLevelFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 24.71,
          y: 41.74,
          radius: 9.5,
          clueType: 'stolen_relic',
          name: "La Cassetta d'Archivio sul Bancone",
          loreClue: "La cassetta in rovere con le schede d'inventario delle monete coloniali è stata asportata dal bancone sotto la finestra."
        },
        {
          id: `lvl${id}_d2`,
          x: 16.62,
          y: 79.02,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "I Grandi Pesi d'Ottone nel Cofanetto",
          loreClue: "I pesi calibratori in ottone per la tara dei metalli preziosi sono stati trafugati dal cofanetto foderato in velluto."
        },
        {
          id: `lvl${id}_d3`,
          x: 32.30,
          y: 72.20,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "I Due Dobloni d'Oro di Potosí",
          loreClue: "I due rari dobloni coloniali recanti il punzone segreto del Serpente a Due Teste sono stati sottratti dal vassoio di velluto."
        },
        {
          id: `lvl${id}_d4`,
          x: 41.92,
          y: 78.63,
          radius: 5.0,
          clueType: 'stolen_relic',
          name: "Il Calamaio di Cristallo Nero",
          loreClue: "Il calamaio d'archivio a coperchio ribaltabile contenente l'inchiostro al ferro-gallico è scomparso dal tavolo."
        },
        {
          id: `lvl${id}_d5`,
          x: 51.17,
          y: 80.25,
          radius: 5.0,
          clueType: 'stolen_relic',
          name: "La Cannuccia con Pennino d'Acciaio",
          loreClue: "L'antico strumento da scrittura in ebano posato davanti al registro di catalogazione è stato asportato."
        },
        {
          id: `lvl${id}_d6`,
          x: 95.71,
          y: 86.00,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Tazza in Porcellana con Piattino",
          loreClue: "La tazza da tè della perita numismatica è stata tolta dal piano in mogano lasciando solo il legno lucidato."
        },
      ];
    } else if (isLevelSix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 79.71,
          y: 51.00,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Sfera Armillare in Ottone",
          loreClue: "Il prezioso strumento astronomico a cerchi concentrici per il calcolo delle coordinate equatoriali è stato asportato dal tavolino."
        },
        {
          id: `lvl${id}_d2`,
          x: 94.08,
          y: 73.77,
          radius: 9.0,
          clueType: 'stolen_relic',
          name: "I Registri delle Osservazioni sulla Scrivania",
          loreClue: "I fascicoli con i calcoli dell'azimut stellare e le tabelle di declinazione sono stati sottratti dalla scrivania."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.50,
          y: 62.83,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lampada Ministeriale Spenta",
          loreClue: "La lampada da lavoro con paralume in vetro verde è stata spenta dagli intrusi per occultare la loro fuga nel crepuscolo."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.71,
          y: 32.98,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Pendolo d'Ottone dell'Orologio a Parete",
          loreClue: "Il disco oscillante in ottone del regolatore a pendolo astronomico è stato smontato per falsare il calcolo del tempo sidereo."
        },
        {
          id: `lvl${id}_d5`,
          x: 28.00,
          y: 51.34,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Manopola di Fuoco del Telescopio",
          loreClue: "La manopola micrometrica in ottone per la messa a fuoco del rifrattore è stata svitata dal tubo ottico."
        },
        {
          id: `lvl${id}_d6`,
          x: 65.54,
          y: 35.77,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Maniglia in Ferro della Bifora Gotica",
          loreClue: "La maniglia a cricchetto in ferro battuto che bloccava l'anta della finestra è stata scardinata per consentire l'accesso."
        },
      ];
    } else if (isLevelSeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 26.00,
          y: 78.01,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Lo Sgabello in Legno sotto il Tavolo Sinistro",
          loreClue: "Lo sgabello ligneo riposto sotto il grande tavolo da consultazione sinistro è stato asportato lasciando il pavimento sgombro."
        },
        {
          id: `lvl${id}_d2`,
          x: 74.04,
          y: 78.18,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Lo Sgabello in Legno sotto il Tavolo Destro",
          loreClue: "Lo sgabello da lettura sotto il tavolo destro è stato sottratto dagli intrusi durante la perquisizione dei carteggi."
        },
        {
          id: `lvl${id}_d3`,
          x: 32.50,
          y: 55.80,
          radius: 6.5,
          clueType: 'stolen_relic',
          name: "La Targa d'Archivio sulla Scaffalatura",
          loreClue: "La targa sagomata d'archivio in ottone e rovere che catalogava le carte di Francis Drake è stata rimossa."
        },
        {
          id: `lvl${id}_d4`,
          x: 6.29,
          y: 24.55,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "Il Dipinto ad Olio del Rettore",
          loreClue: "Il dipinto ad olio in cornice nera del rettore accademico è stato staccato dalla boiserie di sinistra."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 23.30,
          radius: 6.5,
          clueType: 'sabotage',
          name: "La Rosetta Centrale della Trave Maestra",
          loreClue: "Il rosone d'intaglio ligneo al centro dell'arco trionfale è stato asportato per celare un vano segreto nella trave."
        },
        {
          id: `lvl${id}_d6`,
          x: 85.50,
          y: 49.60,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "I Volumi di Consultazione sulla Scaffalatura",
          loreClue: "I tomi in cuoio legati a mano del settore nautico sono stati trafugati dal ripiano della libreria destra."
        },
      ];
    } else if (isLevelEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 7.00,
          y: 60.49,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lampada Murale in Bronzo Sinistra",
          loreClue: "Il braccio portalampada in bronzo brunito fissato al pilastro gotico sinistro è stato divelto per spegnere la luce."
        },
        {
          id: `lvl${id}_d2`,
          x: 92.71,
          y: 60.49,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lampada Murale in Bronzo Destra",
          loreClue: "La monumentale lampada murale sul pilastro destro è stata smontata per far piombare la navata nell'oscurità."
        },
        {
          id: `lvl${id}_d3`,
          x: 39.50,
          y: 78.46,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Leggio Cerimoniale in Quercia Sinistro",
          loreClue: "Il pesante leggio cerimoniale in massello di quercia del banco senatorio sinistro è stato asportato."
        },
        {
          id: `lvl${id}_d4`,
          x: 61.00,
          y: 78.46,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Leggio Cerimoniale in Quercia Destro",
          loreClue: "Lo scrittoio cerimoniale in rovere intagliato sul fondo destro della navata è stato sottratto per i codici intarsiati nel legno."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.00,
          y: 12.50,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "Il Pendaglio della Chiave di Volta Centrale",
          loreClue: "Il prezioso pendant lierne scolpito a merletto nella pietra calcarea della volta a ventaglio è stato scalpellato via."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.00,
          y: 88.00,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lastra Sepolcrale della Navata",
          loreClue: "La lastra tombale in pietra scura incassata nel pavimento della navata è stata rimossa per accedere al cunicolo inferiore."
        },
      ];
    } else if (isLevelNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 29.00,
          y: 86.50,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Pomello Terminale della Balaustra Sinistra",
          loreClue: "Il puntale terminale tornito in quercia scura della balaustra del ballatoio è stato svitato per accedere all'intercapedine."
        },
        {
          id: `lvl${id}_d2`,
          x: 62.00,
          y: 45.98,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Scala d'Accesso ai Palchetti Superiori",
          loreClue: "La scala a pioli in legno massello utilizzata per raggiungere i tomi inaccessibili dei palchetti alti è stata rimossa."
        },
        {
          id: `lvl${id}_d3`,
          x: 74.00,
          y: 22.00,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Lo Stemma dei Fondatori del Cassettone Destro",
          loreClue: "Il pannello ligneo policromo con l'insegna araldica dei fondatori della biblioteca è stato asportato dal soffitto."
        },
        {
          id: `lvl${id}_d4`,
          x: 92.50,
          y: 94.42,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tomo in Pergamena sullo Scaffale Basso",
          loreClue: "Il raro in-folio con legatura in pelle chiara contenente la cronaca della spedizione andina è stato trafugato dal ripiano basso."
        },
        {
          id: `lvl${id}_d5`,
          x: 49.50,
          y: 47.99,
          radius: 7.0,
          clueType: 'sabotage',
          name: "La Traversa del Ballatoio sul Fondo",
          loreClue: "Il montante protettivo in legno del ballatoio sospeso in fondo alla galleria è stato segato per facilitare la fuga."
        },
        {
          id: `lvl${id}_d6`,
          x: 23.00,
          y: 15.00,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "Il Blasone Accademico del Cassettone Sinistro",
          loreClue: "Il cartiglio araldico dipinto con il motto latino 'Dominus Illuminatio Mea' è stato sottratto dal cassettonato sinistro."
        },
      ];
    } else if (isLevelTen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 66.50,
          y: 86.05,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Statua in Marmo del Naturalista",
          loreClue: "La scultura in marmo bianco del celebre naturalista che custodiva la chiave della teca peruviana è stata rimossa dal piedistallo."
        },
        {
          id: `lvl${id}_d2`,
          x: 58.50,
          y: 56.47,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Fossile del Grande Scheletro",
          loreClue: "Il teschio preistorico dello scheletro fossile monumentale è stato asportato: tra i denti fossilizzati era incastonato il Sigillo d'Oro!"
        },
        {
          id: `lvl${id}_d3`,
          x: 11.83,
          y: 51.00,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tabellone Entomologico a Sinistra",
          loreClue: "La teca con la collezione di lepidotteri amazzonici è stata svuotata: la disposizione degli insetti celava la prima mappa stellare."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.50,
          y: 50.00,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Riquadro Zoologico a Destra",
          loreClue: "Il tabellone scientifico sul pilastro destro con gli studi sulla fauna andina è stato trafugato dagli agenti della Mano Oscura."
        },
        {
          id: `lvl${id}_d5`,
          x: 41.50,
          y: 81.03,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Banco Espositivo in Legno Centrale",
          loreClue: "Il massiccio tavolo di lavoro centrale con i registri di classificazione dei fossili è stato rovesciato e sgomberato."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.50,
          y: 72.88,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Vetrina dei Fossili Andini a Sinistra",
          loreClue: "La teca espositiva in mogano contenente i minerali d'argento e i fossili raccolti nel vicereame del Perù è stata asportata."
        },
      ];
    } else if (isStageOne) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 69.33, y: 36.83, radius: 5.5, name: "Il Quadro Botanico Inclinato", loreClue: "Il quadro botanico è inclinato di 12 gradi: qualcuno lo ha urtato frugando dietro la boiserie!" },
        { id: `lvl${id}_d2`, x: 71.67, y: 60.83, radius: 5.0, name: "Il Vapore della Tazza di Tè", loreClue: "In A la tazza fuma di vapore caldo; in B il vapore è svanito: sono trascorse ore dalla fuga." },
        { id: `lvl${id}_d3`, x: 75.42, y: 14.17, radius: 5.5, name: "Il Casco da Esploratore Rimosso", loreClue: "Il casco coloniale di sughero è scomparso dal chiodo: Bellini lo ha preso con sé prima della fuga." },
        { id: `lvl${id}_d4`, x: 53.17, y: 60.83, radius: 5.0, name: "La Piuma d'Oca nel Calamaio", loreClue: "Una grande piuma bianca è intinta nel calamaio: il professore stava cifrando la rotta per Paititi." },
        { id: `lvl${id}_d5`, x: 10.58, y: 71.43, radius: 5.0, name: "Il Tomo Mancante dalla Libreria", loreClue: "Uno spazio vuoto tra i libri sullo scaffale: il volume di archeologia andina è stato sottratto." },
        { id: `lvl${id}_d6`, x: 50.42, y: 75.00, radius: 5.5, name: "L'Angolo Ripiegato della Mappa", loreClue: "L'angolo inferiore della pergamena è stato ripiegato all'insù per indicare le coordinate del Rio delle Amazzoni." },
        { id: `lvl${id}_d7`, x: 20.83, y: 90.96, radius: 5.5, name: "Il Documento Sotto il Tappeto", loreClue: "Un lembo di manoscritto cifrato spunta da sotto la pesante bordura del tappeto persiano!" },
        { id: `lvl${id}_d8`, x: 64.17, y: 63.06, radius: 5.0, name: "La Lente d'Ingrandimento sulla Scrivania", loreClue: "Il manico della lente d'ingrandimento in ottone è stato ruotato, puntando dritto verso la mappa del Perù." },
        { id: `lvl${id}_d9`, x: 38.33, y: 64.73, radius: 5.0, name: "Il Sestante Nautico della Spedizione", loreClue: "L'alidada del sestante è stata regolata di 22 gradi per calcolare la latitudine delle Ande." },
        { id: `lvl${id}_d10`, x: 75.58, y: 29.17, radius: 5.0, name: "Il Sigillo di Ceralacca sulla Mappa", loreClue: "Un sigillo di ceralacca rosso cremisi dell'Ordine di Santiago è stato impresso sulla mappa del mondo!" },
      ];
    } else if (isLevelEleven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 65.42,
          y: 42.02,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L'Arazzo della Rosa Templare",
          loreClue: "Il prezioso drappo ricamato con la rosa a otto punte dei cavalieri è stato staccato dalla parete di boiserie."
        },
        {
          id: `lvl${id}_d2`,
          x: 72.29,
          y: 81.19,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Piccone da Minatore contro la Parete",
          loreClue: "L'attrezzo da scavo pesante usato dagli infiltrati per forzare l'accesso al pozzo di ventilazione è stato asportato."
        },
        {
          id: `lvl${id}_d3`,
          x: 55.58,
          y: 87.95,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Tomo Rilegato in Pelle Nera",
          loreClue: "L'antico codice miniato dei Templari con le mappe idrauliche della Senna è stato sottratto dal tavolo."
        },
        {
          id: `lvl${id}_d4`,
          x: 19.33,
          y: 86.44,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "I Rotoli della Topografia Sotterranea",
          loreClue: "I rotoli di pergamena con i rilievi delle gallerie sotto Sainte-Geneviève sono scomparsi dal ripiano."
        },
        {
          id: `lvl${id}_d5`,
          x: 17.33,
          y: 44.08,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Torcia sul Pilastro Sinistro",
          loreClue: "La torcia a staffa in ferro battuto è stata divelta dal pilastro per lasciare il corridoio d'accesso nel buio."
        },
        {
          id: `lvl${id}_d6`,
          x: 62.08,
          y: 58.31,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Teschio con Crittogramma nella Nicchia",
          loreClue: "Il teschio sacro recante l'incisione del primo glifo parigino è stato asportato dalla nicchia muraria."
        },
      ];
    } else if (isLevelTwelve) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.00,
          y: 12.50,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Lampadario Sospeso della Navata Sinistra",
          loreClue: "Il candeliere pensile in ottone che illuminava l'inizio della linea gnomonica è stato rimosso dalla volta."
        },
        {
          id: `lvl${id}_d2`,
          x: 84.50,
          y: 12.50,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Lampadario Sospeso della Navata Destra",
          loreClue: "La lampada a sospensione destra è stata smontata per impedire la lettura dell'obelisco all'equinozio."
        },
        {
          id: `lvl${id}_d3`,
          x: 26.50,
          y: 64.96,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L'Applique in Ferro del Pilastro Sinistro",
          loreClue: "Il braccio portalampada sul pilastro sinistro è stato divelto dal marmo della cappella."
        },
        {
          id: `lvl${id}_d4`,
          x: 73.00,
          y: 64.51,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L'Applique in Bronzo del Pilastro Destro",
          loreClue: "L'applique liturgica in bronzo lungo la navata destra è stata strappata dalla muratura."
        },
        {
          id: `lvl${id}_d5`,
          x: 35.00,
          y: 38.50,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Rilievo del Capitello Corinzio Sinistro",
          loreClue: "Il cespo d'acanto scolpito a rilievo sul pilastro d'imposta è stato scalpellato per estrarre la pergamena."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.00,
          y: 65.51,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Croce Monumentale dell'Altar Maggiore",
          loreClue: "Il crocifisso dorato cesellato collocato al centro del tabernacolo monumentale è stato prelevato."
        },
      ];
    } else if (isLevelThirteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 8.50,
          y: 71.99,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Basamento di Tibie della Croce Sinistra",
          loreClue: "La base sagomata di ossa sovrapposte sotto la croce murale è stata colmata di pietrisco per mascherare il passaggio."
        },
        {
          id: `lvl${id}_d2`,
          x: 53.50,
          y: 60.49,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Mediano dell'Ossario Centrale",
          loreClue: "Il cranio incastonato al centro della monumentale catasta di femori è stato asportato per i simboli incisi."
        },
        {
          id: `lvl${id}_d3`,
          x: 92.00,
          y: 35.04,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Parete di Destra",
          loreClue: "Il cranio incassato nel muro di contenimento laterale è scomparso tra le ossa compatte."
        },
        {
          id: `lvl${id}_d4`,
          x: 37.00,
          y: 89.51,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Cranio Basale della Facciata Sinistra",
          loreClue: "Il cranio d'angolo al basamento del muro d'ossa è stato rimosso rivelando la botola segreta."
        },
        {
          id: `lvl${id}_d5`,
          x: 44.00,
          y: 12.05,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Fenditura nella Volta di Calcare Sinistra",
          loreClue: "La fessura nella volta di calcare lutetiano è stata puntellata con cunei di legno per evitare crolli."
        },
        {
          id: `lvl${id}_d6`,
          x: 63.00,
          y: 89.51,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Basale della Facciata Destra",
          loreClue: "Uno dei grandi teschi alla base del contrafforte osseo a destra è stato rimosso dalla fila."
        },
      ];
    } else if (isLevelFourteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 86.75,
          y: 73.33,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Piccone da Scavo d'Acciaio",
          loreClue: "Il pesante piccone d'acciaio appoggiato al muro è stato asportato per sfondare la camera sepolcrale."
        },
        {
          id: `lvl${id}_d2`,
          x: 89.29,
          y: 30.64,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Fiamma della Torcia Murale Superiore",
          loreClue: "La fiamma viva all'interno del braciere di pietra è stata soffocata con un panno umido."
        },
        {
          id: `lvl${id}_d3`,
          x: 52.33,
          y: 86.27,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Lente d'Ingrandimento sul Diario",
          loreClue: "La lente d'ingrandimento in ottone posata sui fogli di rilievo archeologico è scomparsa dal blocco."
        },
        {
          id: `lvl${id}_d4`,
          x: 52.12,
          y: 53.63,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Medaglione Templare in Bronzo",
          loreClue: "L'antico medaglione in bronzo con la croce patente templare è stato strappato dalla mensola."
        },
        {
          id: `lvl${id}_d5`,
          x: 70.83,
          y: 92.58,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Bussola Marinaresca d'Ottone",
          loreClue: "La bussola tascabile in ottone con quadrante a 32 punti è stata sottratta davanti alla mappa."
        },
        {
          id: `lvl${id}_d6`,
          x: 26.38,
          y: 79.19,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Rotolo di Pergamena con Sigillo",
          loreClue: "Il rotolo di pergamena sigillato da nastro rosso contenente i rilievi delle cripte è stato trafugato."
        },
      ];
    } else if (isLevelFifteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 48.50,
          y: 63.50,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio al Piede della Grande Croce",
          loreClue: "Il teschio alla base del fusto della croce monumentale è stato rimosso per celare la chiave di drenaggio."
        },
        {
          id: `lvl${id}_d2`,
          x: 49.00,
          y: 44.98,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio all'Incrocio della Grande Croce",
          loreClue: "Il cranio centrale all'intersezione dei bracci d'ossa è stato prelevato per i suoi segni rituali."
        },
        {
          id: `lvl${id}_d3`,
          x: 7.00,
          y: 43.53,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Fascia Murale Sinistra",
          loreClue: "Uno dei teschi sentinella sulla parete sinistra dell'ossario è stato asportato dal paramento."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.00,
          y: 56.47,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio sul Pilastro Laterale Destro",
          loreClue: "Il teschio della fascia marcapiano destra è scomparso rivelando la fessura della roccia."
        },
        {
          id: `lvl${id}_d5`,
          x: 65.00,
          y: 82.03,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore della Campata Destra",
          loreClue: "Il teschio allineato sulla zoccolatura inferiore destra è stato prelevato dagli intrusi."
        },
        {
          id: `lvl${id}_d6`,
          x: 75.00,
          y: 12.05,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Sommitale Destro della Muraglia",
          loreClue: "Il cranio posto alla sommità del muro d'ossa è stato rimosso svelando l'argano dell'acqua."
        },
      ];
    } else if (isLevelSixteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.50,
          y: 92.97,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L'Angolo Scolpito del Basamento Sinistro",
          loreClue: "Lo zoccolo a gradoni della base lapidea del sarcofago è stato frantumato con una mazza."
        },
        {
          id: `lvl${id}_d2`,
          x: 43.00,
          y: 19.36,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Targa Marmorea con l'Iscrizione Latina",
          loreClue: "La formella di marmo con il motto inciso è stata scalpellata per nascondere il messaggio."
        },
        {
          id: `lvl${id}_d3`,
          x: 81.50,
          y: 93.08,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L'Angolo del Basamento a Terra Destro",
          loreClue: "Il profilo a gola dello zoccolo d'appoggio destro del sepolcro è stato spianato a filo pavimento."
        },
        {
          id: `lvl${id}_d4`,
          x: 95.00,
          y: 59.43,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Dente d'Incastro del Coperchio Destro",
          loreClue: "Il risvolto ad angolo retto del massiccio coperchio monolitico è stato tagliato per forzare la tomba."
        },
        {
          id: `lvl${id}_d5`,
          x: 26.50,
          y: 26.40,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Stele Funeraria con Simboli Solari",
          loreClue: "La lastra incisa con il simbolo solare dell'Ordine è stata staccata dal montante sinistro."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 77.29,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "L'Iscrizione Funeraria sul Basamento Centrale",
          loreClue: "I caratteri romani scolpiti sul basamento orizzontale in arenaria sono stati scalpellati."
        },
      ];
    } else if (isLevelSeventeen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.50,
          y: 66.52,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Ritratto Monumentale nella Campata Destra",
          loreClue: "Il dipinto a olio incorniciato nella boiserie della parete destra è stato asportato."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.00,
          y: 67.52,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Ritratto Storico nella Campata Sinistra",
          loreClue: "La tela seicentesca con l'effigie del custode delle catacombe è scomparsa dal pannello."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.25,
          y: 17.52,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Dorato Centrale del Soffitto",
          loreClue: "Il grande medaglione dorato scolpito sul vertice della volta a botte è stato rimosso."
        },
        {
          id: `lvl${id}_d4`,
          x: 96.50,
          y: 67.97,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Fregio ad Arabesco della Vetrata Destra",
          loreClue: "I racemi in ferro dorato alla base della vetrata monumentale sono stati divelti."
        },
        {
          id: `lvl${id}_d5`,
          x: 3.50,
          y: 49.55,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Dorato della Parasta Sinistra",
          loreClue: "Il sontuoso capitello composito intarsiato a rilievo d'oro è stato staccato dal pilastro."
        },
        {
          id: `lvl${id}_d6`,
          x: 77.00,
          y: 38.50,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Cariatide Dorata della Lunetta Destra",
          loreClue: "La cariatide cesellata di sostegno sulla trabeazione superiore destra è stata asportata."
        },
      ];
    } else if (isLevelEighteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.00,
          y: 75.45,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore del Pilastro Sinistro",
          loreClue: "Il teschio alla quota inferiore della parete sinistra è scomparso lasciando visibile una cavità."
        },
        {
          id: `lvl${id}_d2`,
          x: 75.50,
          y: 67.97,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore della Campata Destra",
          loreClue: "Il teschio incastonato alla base del muretto d'ossa destro è svanito rivelando un vano segreto."
        },
        {
          id: `lvl${id}_d3`,
          x: 33.50,
          y: 71.99,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Zoccolatura Centrale",
          loreClue: "Il cranio che scandiva la fascia marcapiano d'angolo è stato asportato dal muro."
        },
        {
          id: `lvl${id}_d4`,
          x: 30.50,
          y: 32.48,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Seconda Fila a Sinistra",
          loreClue: "Il teschio sentinella della fila superiore sinistra è stato rimosso dalla catasta funeraria."
        },
        {
          id: `lvl${id}_d5`,
          x: 81.00,
          y: 35.49,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Modanatura d'Ossa Destra",
          loreClue: "Il cranio allineato lungo la cornice superiore destra è stato sottratto dagli inseguitori."
        },
        {
          id: `lvl${id}_d6`,
          x: 10.50,
          y: 26.45,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Estremo del Cantone Sinistro",
          loreClue: "Il teschio che segna l'angolo della galleria mineraria sinistra è stato asportato."
        },
      ];
    } else if (isLevelNineteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.00,
          y: 45.98,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto delle Carte Nautiche a Sinistra",
          loreClue: "La grande veduta cartografica incorniciata nella lunetta sinistra è stata staccata."
        },
        {
          id: `lvl${id}_d2`,
          x: 62.50,
          y: 77.01,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Ringhiera in Ottone del Banco da Disegno",
          loreClue: "Il corrimano tubolare in ottone massiccio che proteggeva il tavolo da disegno è stato tolto."
        },
        {
          id: `lvl${id}_d3`,
          x: 94.00,
          y: 4.46,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Rosone di Cristallo Superiore a Destra",
          loreClue: "Il lampadario emisferico in cristallo e bronzo dorato calato dalla volta è stato rimosso."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 45.98,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto Paesaggistico della Parete Destra",
          loreClue: "La veduta costiera incorniciata in foglia d'oro sulla parete destra è stata asportata."
        },
        {
          id: `lvl${id}_d5`,
          x: 48.00,
          y: 46.54,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Grande Lampadario di Cristallo Centrale",
          loreClue: "Il maestoso lampadario a gocce di cristallo al centro dello studio è scomparso per operare al buio."
        },
        {
          id: `lvl${id}_d6`,
          x: 61.54,
          y: 16.52,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "L'Angelo Tutelare in Stucco dell'Arcone",
          loreClue: "La figura scultorea in stucco dorato che sormontava l'arcone monumentale è stata staccata."
        },
      ];
    } else if (isLevelTwenty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.00,
          y: 93.97,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua del Cavaliere Custode a Sinistra",
          loreClue: "La scultura in marmo del cavaliere templare che vegliava sul lato sinistro dell'altare è stata rimossa."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.50,
          y: 93.97,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua del Gran Priore a Destra",
          loreClue: "La figura monumentale scolpita in pietra d'Angers alla destra del santuario è stata tolta dal plinto."
        },
        {
          id: `lvl${id}_d3`,
          x: 26.50,
          y: 70.98,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Lampadario Gotico Sospeso a Sinistra",
          loreClue: "La corona di fiamme a sesto acuto calata sulla navata sinistra è stata divelta per nascondere la fuga."
        },
        {
          id: `lvl${id}_d4`,
          x: 71.50,
          y: 70.98,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Lampadario Gotico Sospeso a Destra",
          loreClue: "Il pesante lampadario pensile dorato sopra gli stalli di destra è stato smontato."
        },
        {
          id: `lvl${id}_d5`,
          x: 94.50,
          y: 18.53,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Candelabro Monumentale della Parete Destra",
          loreClue: "Il grande candelabro liturgico in ottone ancorato al fascio di colonnine è scomparso dal muro."
        },
        {
          id: `lvl${id}_d6`,
          x: 5.00,
          y: 18.53,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Candelabro Monumentale della Parete Sinistra",
          loreClue: "Il portalampada in bronzo dorato fissato sul montante gotico sinistro è stato strappato dalla pietra."
        },
      ];
    } else if (isStageTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 87.14, y: 71.46, radius: 5.0, name: "Il Piccone da Scavo Rimosso", loreClue: "Il piccone d'acciaio è scomparso dalla parete: qualcuno è sceso nella cripta prima di noi per forzare il passaggio segreto." },
        { id: `lvl${id}_d2`, x: 89.14, y: 31.00, radius: 5.0, name: "La Fiamma della Torcia Superiore Spenta", loreClue: "La torcia in alto a destra è spenta: la brezza dal cunicolo ha soffocato il fuoco lasciando il braciere vuoto." },
        { id: `lvl${id}_d3`, x: 51.84, y: 53.39, radius: 5.0, name: "La Frattura Tettonica sul Pilastro", loreClue: "Una fessura geologica attraversa i conci di pietra del pilastro centrale, segno degli assestamenti dell'antico ossario." },
        { id: `lvl${id}_d4`, x: 68.66, y: 55.12, radius: 5.0, name: "Il Medaglione Templare accanto al Teschio", loreClue: "Un pesante medaglione di bronzo cesellato con la croce dell'Ordine Templare è posato sulla mensola accanto al teschio." },
        { id: `lvl${id}_d5`, x: 78.44, y: 57.62, radius: 4.5, name: "Il Sigillo di Pietra sulla Mensola", loreClue: "Un'antica tavoletta votiva in pietra calcarea è stata posata sull'angolo destro della mensola dell'altare." },
        { id: `lvl${id}_d6`, x: 34.76, y: 70.79, radius: 5.0, name: "Lo Stoppino della Lanterna d'Ottone", loreClue: "La fiamma viva all'interno della lanterna è stata smorzata, diffondendo una fioca luminescenza sul tavolo di pietra." },
        { id: `lvl${id}_d7`, x: 52.29, y: 85.34, radius: 5.0, name: "La Lente d'Ingrandimento sul Diario", loreClue: "Una lente d'ingrandimento in ottone con impugnatura cesellata è stata adagiata sulle annotazioni di scavo del diario." },
        { id: `lvl${id}_d8`, x: 26.23, y: 78.82, radius: 5.0, name: "Il Nastro di Seta Cremisi sulle Pergamene", loreClue: "Il rotolo di pergamena è stretto da un elegante nastro di seta rosso cardinalizio anziché dal comune spago grezzo." },
        { id: `lvl${id}_d9`, x: 70.61, y: 92.54, radius: 5.0, name: "La Bussola Marinaresca d'Ottone sul Tavolo", loreClue: "Una bussola tascabile in ottone con quadrante a rosa dei venti e coperchio aperto è posata davanti alla mappa." },
        { id: `lvl${id}_d10`, x: 68.16, y: 83.46, radius: 5.0, name: "La Fiala Alchemica Sottratta", loreClue: "La piccola fiala di vetro con tappo di sughero in primo piano è stata prelevata dal gruppo di reagenti chimici." },
      ];
    } else if (isLevelTwentyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 56.12,
          y: 77.51,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Compasso Nautico sulla Mappa del Catai",
          loreClue: "Il compasso in ottone a punte aperte sulla rotta di Marco Polo è svanito: gli intrusi volevano celare la rotta verso Oriente."
        },
        {
          id: `lvl${id}_d2`,
          x: 94.38,
          y: 72.04,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Candeliere di Bronzo sul Tavolo",
          loreClue: "Il pesante candeliere in bronzo con il cero acceso è stato ribaltato e sottratto per operare nell'ombra."
        },
        {
          id: `lvl${id}_d3`,
          x: 75.25,
          y: 68.36,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calamaio di Pietra con Penna d'Oca",
          loreClue: "Il calamaio in pietra nera e la penna da calligrafo con cui il viaggiatore tracciava i diari sono scomparsi."
        },
        {
          id: `lvl${id}_d4`,
          x: 28.21,
          y: 72.54,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Taccuino di Viaggio in Cuoio",
          loreClue: "Il diario rilegato in cuoio brunito contenente i crittogrammi della Via della Seta è stato trafugato."
        },
        {
          id: `lvl${id}_d5`,
          x: 76.21,
          y: 13.00,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Clessidra Marinaresca sullo Scaffale",
          loreClue: "La clessidra d'ottone e cristallo posata sullo scaffale alto della biblioteca è stata asportata."
        },
        {
          id: `lvl${id}_d6`,
          x: 38.79,
          y: 66.57,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Boccetta di Spezie Orientali",
          loreClue: "La boccetta farmaceutica in vetro ambrato con i pigmenti alchemici cinesi è stata sottratta dal banco."
        },
      ];
    } else if (isLevelTwentyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.00,
          y: 89.84,
          radius: 7.5,
          clueType: 'sabotage',
          name: "I Banchi Lignei dei Patrizi al Centro",
          loreClue: "Gli scranni cerimoniali in noce intagliato dei patrizi al centro della sala sono stati rimossi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.00,
          y: 25.11,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Ghirlanda Superiore della Sala Ducale",
          loreClue: "I festoni dorati in stucco sopra l'arcone monumentale sono stati staccati dalla trabeazione."
        },
        {
          id: `lvl${id}_d3`,
          x: 79.17,
          y: 8.37,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cassettone Dorato della Volta Destra",
          loreClue: "I racemi d'oro intagliati sul comparto ligneo destro del soffitto sono stati asportati."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.83,
          y: 8.37,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cassettone Dorato della Volta Sinistra",
          loreClue: "Il fregio dorato a rilievo nel cassettonato a sinistra è stato piallato lasciando il fondo scuro."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.00,
          y: 7.25,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Grande Medaglione Centrale del Veronese",
          loreClue: "La figura allegorica centrale del soffitto monumentale svanisce nel fondo bruno della tela."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.00,
          y: 58.04,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto delle Vittorie Navali a Sinistra",
          loreClue: "Il grande telerio storico raffigurante la battaglia navale di Lepanto appare oscurato."
        },
      ];
    } else if (isLevelTwentyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 17.50,
          y: 13.95,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Mosaico Dorato dell'Arco Sinistro",
          loreClue: "Le tessere d'oro e pasta vitrea della volta sinistra sono state scalpellate via dagli intrusi."
        },
        {
          id: `lvl${id}_d2`,
          x: 87.50,
          y: 55.25,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Bizantino del Pilastro Destro",
          loreClue: "Le foglie d'acanto traforate a trapano sul pilastro destro appaiono levigate a filo muro."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.50,
          y: 55.25,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Bizantino del Pilastro Sinistro",
          loreClue: "Il capitello a nido d'ape scolpito nel marmo proconnesio sinistro è stato scalpellato."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.00,
          y: 71.99,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Colonna di Verde Antico Destra",
          loreClue: "La colonna in marmo verde tessalico a destra è stata rimossa durante i lavori clandestini."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.00,
          y: 71.99,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Colonna di Porfido Rosso Sinistra",
          loreClue: "Il fusto monolitico in prezioso porfido egizio della navata sinistra è scomparso dal plinto."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.50,
          y: 13.95,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Mosaico Dorato dell'Arco Destro",
          loreClue: "Il motivo bizantino a tessere auree sull'arcata destra è stato asportato per celare i simboli."
        },
      ];
    } else if (isLevelTwentyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 56.92,
          y: 69.25,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Gondola con Passaggeri in Transito",
          loreClue: "La gondola veneziana con il ferro di prua in primo piano è svanita dalla superficie del canale."
        },
        {
          id: `lvl${id}_d2`,
          x: 31.04,
          y: 82.65,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Grandi Pali d'Ormeggio a Bande Blu",
          loreClue: "I massicci pali lignei d'approdo dipinti di blu conficcati sul fondale della laguna sono stati rimossi."
        },
        {
          id: `lvl${id}_d3`,
          x: 59.04,
          y: 29.07,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Grata Traforata della Finestra Destra",
          loreClue: "Il prezioso reticolo marmoreo traforato della finestra destra del ponte è stato scardinato."
        },
        {
          id: `lvl${id}_d4`,
          x: 45.92,
          y: 29.07,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Grata Traforata della Finestra Sinistra",
          loreClue: "La grata in pietra a traforo floreale della finestra sinistra sul Rio di Palazzo è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 46.71,
          y: 9.82,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Grande Voluta del Fastigio Superiore",
          loreClue: "La monumentale voluta a spirale in pietra d'Istria sul cornicione del ponte è stata asportata."
        },
        {
          id: `lvl${id}_d6`,
          x: 54.25,
          y: 17.35,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua della Giustizia sul Timpano",
          loreClue: "Il bassorilievo della Giustizia assisa in trono sul frontone monumentale è stato rimosso."
        },
      ];
    } else if (isLevelTwentyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.00,
          y: 7.25,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Rosone Centrale in Foglia d'Oro",
          loreClue: "La sontuosa corona di stucchi dorati al centro del soffitto del teatro è scomparsa."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.00,
          y: 17.30,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Palchetto Superiore d'Angolo Sinistro",
          loreClue: "Il parapetto in legno dorato e damasco serico dell'ultimo ordine è stato rimosso."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.00,
          y: 17.30,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Palchetto Superiore d'Angolo Destro",
          loreClue: "I rilievi dorati a lira del loggione superiore destro svaniscono nella parete."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.00,
          y: 73.10,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Settore Centrale delle Poltrone di Platea",
          loreClue: "Le poltrone in velluto rosso cremisi al centro della platea sono state sgomberate."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.50,
          y: 67.52,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Parapetto in Velluto del Palco Destro",
          loreClue: "I festoni in foglia d'oro del parapetto di proscenio destro sono stati asportati."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.00,
          y: 93.08,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Buca dell'Orchestra sotto il Palcoscenico",
          loreClue: "Il leggio monumentale del maestro concertatore nella fossa d'orchestra è scomparso."
        },
      ];
    } else if (isLevelTwentySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.00,
          y: 90.96,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "I Banchi di Lettura in Noce della Navata",
          loreClue: "Il monumentale banco da consultazione con leggio intarsiato in primo piano è scomparso."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.00,
          y: 66.41,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tavolo di Studio dei Manoscritti Greci",
          loreClue: "La grande postazione in noce dove erano esposti i codici marciani è stata rimossa."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.00,
          y: 26.23,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Cornice a Festoni Dorati del Sansovino",
          loreClue: "I rilievi in stucco dorato attorno all'arcone centrale della sala sono stati staccati."
        },
        {
          id: `lvl${id}_d4`,
          x: 90.00,
          y: 41.85,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua Antica nella Nicchia Destra",
          loreClue: "La scultura in marmo pario sul pilastro destro della sala dei filosofi è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.00,
          y: 8.37,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Centrale dei Filosofi sul Soffitto",
          loreClue: "La composizione pittorica rinascimentale a olio al centro della volta appare velata."
        },
        {
          id: `lvl${id}_d6`,
          x: 21.67,
          y: 10.60,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Dipinto del Soffitto a Sinistra",
          loreClue: "La tela a olio di Paolo Veronese nel riquadro dorato sinistro è stata asportata."
        },
      ];
    } else if (isLevelTwentySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.00,
          y: 92.08,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Pavimento in Seminato Veneziano Policromo",
          loreClue: "I marmi rossi e bianchi intarsiati nel terrazzo veneziano appaiono uniformati e grigi."
        },
        {
          id: `lvl${id}_d2`,
          x: 11.67,
          y: 51.90,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Busto in Marmo del Patrizio a Sinistra",
          loreClue: "La scultura in marmo di Carrara sul piedistallo di diaspro a sinistra è stata tolta."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.00,
          y: 28.46,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Grande Lampadario di Murano a Ciocca",
          loreClue: "Il sontuoso lampadario a bracci floreali in vetro soffiato policromo di Murano è scomparso."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.33,
          y: 77.57,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Poltrona Rococò Rivestita in Seta Sinistra",
          loreClue: "La poltrona dorata intagliata a foglia d'acanto a sinistra è assente dal portego."
        },
        {
          id: `lvl${id}_d5`,
          x: 13.33,
          y: 11.72,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Trave Maestra Dipinta alla Sansovina",
          loreClue: "I racemi policromi della trave dipinta a sinistra appaiono piallati a legno nudo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.00,
          y: 6.14,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "L'Affresco Barocco del Tiepolo al Centro",
          loreClue: "La figura allegorica della Nobiltà al vertice del soffitto è svanita nell'intonaco."
        },
      ];
    } else if (isLevelTwentyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 43.33,
          y: 90.96,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Palo d'Ormeggio a Spirale Azzurra",
          loreClue: "Il palo da gondola dipinto a spirale bianca e azzurra in primo piano è scomparso dalla laguna."
        },
        {
          id: `lvl${id}_d2`,
          x: 87.92,
          y: 47.43,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lanterna Navale del Battello di Linea",
          loreClue: "Il faro di navigazione in ottone a babordo sul battello di linea è scomparso."
        },
        {
          id: `lvl${id}_d3`,
          x: 76.67,
          y: 75.33,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Ferro di Poppa della Gondola nel Bacino",
          loreClue: "Il ricciolo metallico posteriore dell'imbarcazione in transito è assente sull'acqua."
        },
        {
          id: `lvl${id}_d4`,
          x: 40.00,
          y: 65.29,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Briccola Tripla d'Ormeggio sul Canale",
          loreClue: "La briccola in massicci tronchi di rovere piantata nel fondale del canale è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 55.00,
          y: 52.46,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Cupola Maggiore Ottagonale della Salute",
          loreClue: "La grande lanterna sommitale con la statua della Vergine svanisce dal profilo celeste."
        },
        {
          id: `lvl${id}_d6`,
          x: 63.42,
          y: 25.11,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Cupola Minore della Basilica della Salute",
          loreClue: "La cupola secondaria del capolavoro del Longhena è scomparsa dal profilo monumentale."
        },
      ];
    } else if (isLevelTwentyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 58.33,
          y: 55.80,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Colonna Dorica Destra di Porta Magna",
          loreClue: "La colonna marmorea rinascimentale del portale trionfale è sostituita da muratura liscia."
        },
        {
          id: `lvl${id}_d2`,
          x: 16.67,
          y: 55.80,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Merlo Ghibellino della Torre Sinistra",
          loreClue: "Il merlo a coda di rondine sulla cinta muraria merlata è scomparso dal profilo della fortezza."
        },
        {
          id: `lvl${id}_d3`,
          x: 33.33,
          y: 82.59,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Pilastro della Cancellata in Ferro Battuto",
          loreClue: "La colonnina in pietra con sfera sommitale che regge la cancellata storica è stata tolta."
        },
        {
          id: `lvl${id}_d4`,
          x: 75.00,
          y: 46.88,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua di Santa Giustina sul Fastigio",
          loreClue: "La scultura marmorea della patrona della battaglia di Lepanto è assente dal frontone."
        },
        {
          id: `lvl${id}_d5`,
          x: 66.67,
          y: 73.66,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Carronata d'Artiglieria Navale a Terra",
          loreClue: "L'affusto in legno di rovere del cannone navale ormeggiato sul piazzale è scomparso."
        },
        {
          id: `lvl${id}_d6`,
          x: 75.00,
          y: 29.02,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Bassorilievo del Leone Alato Marciano",
          loreClue: "Il rilievo del Leone alato con il libro aperto sull'architrave trionfale è stato rimosso."
        },
      ];
    } else if (isLevelThirty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 66.67,
          y: 46.88,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Bottega d'Oreficeria sulla Rampa del Ponte",
          loreClue: "La bottega d'oreficeria in cui era custodito il cofanetto segreto di Marco Polo è stata svuotata."
        },
        {
          id: `lvl${id}_d2`,
          x: 58.33,
          y: 73.66,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Tendalino Bianco della Gondola dei Nobili",
          loreClue: "Il caratteristico felze o copertura in tela dell'imbarcazione nobiliare scompare sull'acqua."
        },
        {
          id: `lvl${id}_d3`,
          x: 33.33,
          y: 55.80,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Ferro di Prua Pettinato della Gondola",
          loreClue: "Il rostro d'argento pettinato a sei denti della gondola in transito è stato strappato."
        },
        {
          id: `lvl${id}_d4`,
          x: 25.00,
          y: 29.02,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Rilievo dell'Arcangelo Gabriele sull'Arco",
          loreClue: "La scultura in pietra d'Istria dell'Annunciazione sul fianco dell'arco di Rialto è stata tolta."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.00,
          y: 37.95,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L'Arco Centrale a Tutto Sesto di Rialto",
          loreClue: "Il grande rilievo della chiave di volta del ponte monumentale è stato scalpellato."
        },
        {
          id: `lvl${id}_d6`,
          x: 8.33,
          y: 37.95,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Finestra a Bifora Gotica sul Canal Grande",
          loreClue: "L'archetto acuto veneziano del palazzo mercantile a sinistra appare rettilineo e cieco."
        },
      ];
    } else if (isStageThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 93.79, y: 62.54, radius: 6.5, name: "La Candela di Cera Spenta", loreClue: "La fiamma viva della candela sul candeliere d'ottone è spenta con stoppino annerito dal fumo." },
        { id: `lvl${id}_d2`, x: 47.38, y: 55.43, radius: 6.5, name: "La Tintura Alchemica Blu Cobalto", loreClue: "Il liquido nell'ampolla di Murano è trasmutato da un distillato ambrato a un denso blu cobalto veneziano." },
        { id: `lvl${id}_d3`, x: 35.68, y: 64.86, radius: 6.0, name: "La Lanterna ad Olio sulla Finestra Spenta", loreClue: "La lanterna navale affacciata sul Canal Grande è spenta, smorzando il riflesso sulla laguna." },
        { id: `lvl${id}_d4`, x: 31.63, y: 78.54, radius: 5.5, name: "Il Sigillo di Ceralacca sul Taccuino di Cuoio", loreClue: "Un sigillo di ceralacca cremisi con nastro d'oro è apparso sulla copertina del diario di viaggio." },
        { id: `lvl${id}_d5`, x: 64.99, y: 81.32, radius: 5.5, name: "La Bussola Tascabile sulla Rotta di Marco Polo", loreClue: "Una bussola nautica d'ottone brunito è adagiata sulla rotta orientale tracciata sulla pergamena." },
        { id: `lvl${id}_d6`, x: 62.75, y: 90.62, radius: 5.5, name: "La Lente di Ingrandimento Veneta", loreClue: "Una lente d'ingrandimento in ottone cesellato è posata sopra le rotte mercantili verso Costantinopoli." },
        { id: `lvl${id}_d7`, x: 86.58, y: 86.53, radius: 6.5, name: "La Croce d'Oro sul Tomo Alchemico", loreClue: "Un emblema a croce d'oro sbalzato impreziosisce la legatura in pergamena del grimorio cinquecentesco." },
        { id: `lvl${id}_d8`, x: 72.02, y: 47.66, radius: 6.5, name: "Il Cassetto dell'Erbario Forzato", loreClue: "Il cassetto dell'antico armadio da speziale è socchiuso con una chiave d'ottone inserita nella toppa." },
        { id: `lvl${id}_d9`, x: 40.18, y: 70.64, radius: 5.5, name: "Il Sigillo del Leone di San Marco", loreClue: "Il rotolo diplomatico della Serenissima reca un vistoso sigillo in ceralacca con l'effigie del Leone alato." },
        { id: `lvl${id}_d10`, x: 62.66, y: 73.12, radius: 5.0, name: "La Seconda Piuma d'Oca dello Scriba", loreClue: "Una seconda penna d'oca da calligrafo è posata sopra il manoscritto, segno di un messaggio scritto a quattro mani." },
      ];
    } else if (isLevelThirtyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.04,
          y: 66.63,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Pugnale Cerimoniale nel Sarcofago",
          loreClue: "Un antico pugnale minoico in bronzo e oro riposa sul fondo del sarcofago in pietra; la Mano Oscura ha tentato di asportarlo."
        },
        {
          id: `lvl${id}_d2`,
          x: 28.75,
          y: 80.97,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Lo Schizzo del Toro di Cnosso",
          loreClue: "Sulla pagina sinistra del taccuino di scavo compare il rilievo a matita della Taurocatarsia con le coordinate del santuario."
        },
        {
          id: `lvl${id}_d3`,
          x: 41.54,
          y: 78.29,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Lente d'Ingrandimento Tascabile",
          loreClue: "La lente da campo in ottone usata per analizzare i frammenti di ceramica kamares è stata rimossa dal tavolo da disegno."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.42,
          y: 68.53,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Matrice di Scavo KN-40",
          loreClue: "Sulla spalla del grande pithos a motivi di corda compare la marcatura a gesso dello scavo archeologico KN-40."
        },
        {
          id: `lvl${id}_d5`,
          x: 13.17,
          y: 58.87,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Filo a Piombo del Teodolite",
          loreClue: "Un pesante filo a piombo conico in ottone del treppiede geodetico è stato reciso per falsare le quote altimetriche."
        },
        {
          id: `lvl${id}_d6`,
          x: 19.88,
          y: 40.79,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Martello da Geologo sulla Cassa",
          loreClue: "Un piccone da geologo con manico di frassino è posato sopra la cassa di spedizione marchiata Heraklion."
        }
      ];
    } else if (isLevelThirtyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Bacino Idraulico Lustrale",
          loreClue: "Il bacino lustrale in pietra calcarea al centro della sala delle purificazioni reca tracce di oli rituali asportati."
        },
        {
          id: `lvl${id}_d2`,
          x: 12.04,
          y: 40.01,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Grifone Guardiano dell'Affresco Sinistro",
          loreClue: "La figura araldica del grifone minoico senza ali sull'intonaco sinistro mostra incisioni segrete nel piumaggio."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 10.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Fregio Superiore a Spirali d'Onda",
          loreClue: "Il fregio policromo a spirali marine sopra lo schienale del trono è stato scalpellato per nascondere una cavità."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 62.11,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Seduta Ergonomica del Trono di Gesso",
          loreClue: "L'incavo sacro intagliato nel sedile in alabastro del re Minosse rivela un alloggiamento per il sigillo reale."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 40.01,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Grifone Solare dell'Affresco Destro",
          loreClue: "Il grifone cerimoniale della parete destra custodisce tra gli artigli il simbolo del Labirinto."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.08,
          y: 65.01,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Sedile Continuo della Panca di Corte",
          loreClue: "La panca continua in gesso per i consiglieri minoici a sinistra presenta una giuntura muraria forzata."
        }
      ];
    } else if (isLevelThirtyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Grande Delfino Centrale dell'Affresco",
          loreClue: "Il maestoso delfino azzurro con ventre dorato al centro del megaron della regina indica la rotta verso Alessandria."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Fregio Geometrico a Meandro Marino",
          loreClue: "La fascia a meandro continuo che corona la composizione marina è stata alterata per occultare una cifra dedalica."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Banco di Pesci Corallini a Destra",
          loreClue: "Il gruppo di piccoli pesci variopinti che nuotano verso est rivela la corrente marina verso l'Egitto tolemaico."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 42.02,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Delfino Minore in Fase di Salto",
          loreClue: "La sagoma del giovane delfino che emerge tra le onde è stata scheggiata dagli emissari della Mano Oscura."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.04,
          y: 69.98,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "La Pinna Caudale del Delfino Inferiore",
          loreClue: "La doppia pinna caudale arcuata del delfino guida tocca il rilievo di una stella nautica a otto punte."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.04,
          y: 75.06,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "Il Pilastro Monolitico del Pozzo di Luce",
          loreClue: "Il pilastro in calcare che delimita il cavedio luminoso della regina nascondeva una tavoletta in Lineare A."
        }
      ];
    } else if (isLevelThirtyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Grande Pithos Cerimoniale Destro",
          loreClue: "Il monumentale pithos in terracotta per l'olio sacro reca un sigillo arcaico con la testa di Minotauro."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Trave di Cedro della Galleria Magazzini",
          loreClue: "La trave maestra di cedro del Libano presenta un'intaccatura con il marchio dei carpentieri minoici."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 78.07,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Lastra del Cunicolo di Scolo a Terra",
          loreClue: "La lastra pavimentale del canale idraulico sotterraneo è stata scalfita per accedere ai magazzini sigillati."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "Il Pithos da Riserva a Nastro Rilievato",
          loreClue: "Il vaso gigante con decorazione a corda ritorta a sinistra conteneva tavolette d'argilla ancora fresche."
        },
        {
          id: `lvl${id}_d5`,
          x: 65.04,
          y: 45.09,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Cassa d'Argilla con Sigillo di Creta",
          loreClue: "La cassa sigillata con argilla cruda conteneva i registri commerciali delle rotte tra Creta ed Egitto."
        },
        {
          id: `lvl${id}_d6`,
          x: 38.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Pavimento a Lastre di Gesso Selenite",
          loreClue: "Il pavimento in blocchi squadrati di selenite rifletteva la luce della torcia verso il corridoio segreto."
        }
      ];
    } else if (isLevelThirtyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 10.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Fregio Superiore della Processione",
          loreClue: "La fascia floreale a gigli stilizzati che corona la processione minoica è stata manomessa."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 85.1,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Vaso Rituale Rython a Terra",
          loreClue: "Il prezioso rython conico in clorite verde usato per le libagioni del santuario è stato sottratto dal pavimento."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 88.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Portatore di Vasi d'Offerta",
          loreClue: "La figura del coppiere reale che reca il grande vaso conico reca un pendente a forma di sole radiante."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.04,
          y: 12.11,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Rosone a Spirale della Cornice",
          loreClue: "La spirale a bassorilievo dell'architrave indica l'orientamento astronomico del megaron verso il Nilo."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.04,
          y: 85.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Base Lapidea della Parasta Destra",
          loreClue: "La base in calcare rosa della parasta cerimoniale mostra segni di scavo clandestino recente."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "L'Affresco del Giovane con Calice",
          loreClue: "L'elegante silhouette del giovane offerente con calice d'argento presenta una stesura di pigmento lapislazzulo autentica."
        }
      ];
    } else if (isLevelThirtySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 70.03,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Toro Sacro al Galoppo nel Cortile",
          loreClue: "Il possente toro nero sacrificatore nel grande affresco centrale punta le corna verso l'altare del labirinto."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "L'Acrobata Minoico in Volo Sulla Groppa",
          loreClue: "La figura dell'atleta acrobata colto nel balzo sacro sopra il toro nasconde un amuleto con geroglifici cretesi."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 90.01,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Le Corna di Consacrazione Monolitiche",
          loreClue: "Le monumentali corna in pietra calcarea sulla sommità del cortile recano incisi i cicli solari ed equinoziali."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Dama con Fregio di Lapislazzuli",
          loreClue: "La sacerdotessa che assiste al rito della taurocatarsia stringe un nastro sacro in porpora di Tiro."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 65.01,
          radius: 8.0,
          clueType: 'sabotage',
          name: "L'Altare Centrale delle Offerte Incruente",
          loreClue: "Il piano in selenite dell'altare sacrificale presenta una fessura per la raccolta dell'acqua lustrale."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Colonna Rastremata del Portico Sinistro",
          loreClue: "La colonna rastremata in legno di cipresso dipinta di rosso minoico rivela la firma dell'architetto Dedalo."
        }
      ];
    } else if (isLevelThirtySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.08,
          y: 15.01,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Labrys Scolpito sul Pilastro Sinistro",
          loreClue: "L'incisione della doppia ascia sacra sul pilastro monolitico risuona con un'apertura meccanica nella parete."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.08,
          y: 15.01,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Labrys Gemello sul Pilastro Destro",
          loreClue: "La seconda ascia sacra incisa nel calcare forma la coppia d'assi di puntamento per la meridiana sotterranea."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Bacino delle Libagioni Lustrale Destro",
          loreClue: "La coppa monolitica scavata nel pavimento per le abluzioni prima dell'ingresso nel labirinto è stata asportata."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Canale Idraulico Sotterraneo a Sinistra",
          loreClue: "La canaletta di drenaggio in terracotta policroma che convogliava l'acqua verso le cisterne appare deviata."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.08,
          y: 12.17,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Chiave di Volta con Simbolo del Minotauro",
          loreClue: "Il blocco centrale dell'arco con l'effigie taurina è stato martellato per oscurare le lettere arcaiche."
        },
        {
          id: `lvl${id}_d6`,
          x: 48.04,
          y: 90.01,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "Il Pavimento di Selenite con Griglia Geometrica",
          loreClue: "Le lastre pavimentali lucide disegnano l'esatta pianta a meandro del labirinto sotterraneo."
        }
      ];
    } else if (isLevelThirtyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.04,
          y: 12.11,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Capitello a Cuscino della Colonna Sinistra",
          loreClue: "Il tipico capitello a toro espanso della colonna lignea sinistra contiene un vano cilindrico nascosto."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 12.11,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Capitello Modanato della Colonna Destra",
          loreClue: "Il capitello dipinto di nero e oro della colonna destra reggeva una lucerna votiva in bronzo trafugata."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 65.01,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Lampada Votiva in Steatite Scolpita",
          loreClue: "La lucerna a tre becchi in steatite verde con rilievi di conchiglie è stata rovesciata tra le macerie."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 38.0,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Bassorilievo Parietale del Meandro",
          loreClue: "Il rilievo su gesso che riproduce il mito del gomitolo di Arianna è stato raschiato dagli intrusi."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "La Lastra Sepolcrale al Centro della Cripta",
          loreClue: "La lastra pavimentale monolitica al centro della camera ipogea presenta anelli di sollevamento in bronzo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 10.1,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Fregiatura a Spirali del Soffitto",
          loreClue: "Il motivo a spirale continua sul soffitto di cedro traccia la spirale logaritmica delle costellazioni minoiche."
        }
      ];
    } else if (isLevelThirtyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Portale d'Accesso al Corridoio Cieco",
          loreClue: "L'imponente stipite in calcare squadrato all'ingresso del pozzo nasconde la serratura a perno minoica."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 88.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "La Scala Monumentale dei Grandi Gradini",
          loreClue: "I gradini monolitici aperti a ventaglio conducono al livello più profondo del labirinto dedalico."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 68.02,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Fessura Muraria con Sigillo di Bronzo",
          loreClue: "Una fessura orizzontale nella parete di selenite contiene una lamina metallica con iscrizioni in Lineare A."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Nicchia della Torcia Cerimoniale Sinistra",
          loreClue: "L'incavo nella pietra per la torcia di pece è stato annerito da una fiamma recente accesa dai sabotatori."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 15.01,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Bassorilievo del Labirinto Dedalico",
          loreClue: "Il diagramma a sette circuiti del labirinto inciso sul pilastro mostra il passaggio segreto verso l'uscita a mare."
        },
        {
          id: `lvl${id}_d6`,
          x: 85.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Candelabro Fittile sul Parapetto",
          loreClue: "Il candelabro a treppiede in terracotta minoica è stato frantumato durante la fuga precipitosa degli emissari."
        }
      ];
    } else if (isLevelForty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 15.01,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "IL QUARTO SIGILLO: Il Labrys Minoico d'Oro",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 4: La monumentale doppia ascia d'oro massiccio di Minosse! Al centro è incastonata la coordinata solare per Alessandria d'Egitto."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Stele Dedalica con la Mappa del Mediterraneo",
          loreClue: "La stele di gesso reca incisa la rotta marittima dal porto di Kommos fino al faro di Alessandria."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "L'Altare d'Ossidiana del Santuario Segreto",
          loreClue: "L'altare monolitico in ossidiana lucida riflette il raggio solare dell'equinozio verso il golfo di Creta."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.04,
          y: 70.03,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "Il Disco di Festo in Argilla Cruda",
          loreClue: "Il celebre disco d'argilla con caratteri geroglifici impressi a spirale è stato estratto dal suo scrigno."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.04,
          y: 45.03,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "La Cornice a Doppia Spirale della Volta",
          loreClue: "La decorazione ad onde dorate che circonda la volta santuario indica il punto di congiunzione dei paralleli."
        },
        {
          id: `lvl${id}_d6`,
          x: 48.04,
          y: 40.01,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Vaso da Libagione in Cristallo di Rocca",
          loreClue: "Il prezioso rhyton a testa di toro in cristallo di rocca purissimo contiene l'essenza per consacrare la rotta."
        }
      ];
    } else if (isStageFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 10.33, y: 92.75, radius: 5.5, name: "Il Segnalibro di Seta Cremisi", loreClue: "Un nastro segnalibro di seta rosso scarlatto pende dal registro di scavo rilegato in cuoio sul bordo del tavolo." },
        { id: `lvl${id}_d2`, x: 12.92, y: 59.15, radius: 6.0, name: "Il Filo a Piombo del Teodolite", loreClue: "Un pesante filo a piombo conico in ottone pende dal centro del treppiede da rilevamento geodetico." },
        { id: `lvl${id}_d3`, x: 19.75, y: 40.74, radius: 5.5, name: "Il Martello da Geologo sulla Cassa", loreClue: "Un piccone da geologo con manico di frassino è posato sopra la cassa di spedizione marchiata 363." },
        { id: `lvl${id}_d4`, x: 22.08, y: 81.25, radius: 5.5, name: "Lo Schizzo del Toro di Cnosso", loreClue: "Sulla pagina sinistra del taccuino compare un accurato rilievo a matita del Toro Sacro minoico." },
        { id: `lvl${id}_d5`, x: 31.67, y: 79.80, radius: 5.5, name: "Le Note Archeologiche Autografe", loreClue: "Sulla pagina destra del taccuino sono annotate a inchiostro di china le quote stratigrafiche del megaron." },
        { id: `lvl${id}_d6`, x: 41.83, y: 78.46, radius: 5.5, name: "La Lente d'Ingrandimento Tascabile", loreClue: "Una grande lente d'ingrandimento in ottone brunito sostituisce la spazzola di setole di cavallo tra gli attrezzi." },
        { id: `lvl${id}_d7`, x: 52.67, y: 54.80, radius: 5.0, name: "Il Cartellino Inventariale del Pithos", loreClue: "Un cartellino d'inventario museale legato con spago pende dal labbro del grande vaso minoico centrale." },
        { id: `lvl${id}_d8`, x: 62.00, y: 66.63, radius: 6.5, name: "Il Pugnale Cerimoniale nel Sarcofago", loreClue: "Un antico pugnale minoico in bronzo intarsiato riposa sul fondo del sarcofago monolitico in pietra." },
        { id: `lvl${id}_d9`, x: 71.17, y: 28.79, radius: 5.5, name: "Le Corna Dorate nell'Affresco", loreClue: "Le possenti corna del toro nell'affresco parietale risplendono con rifiniture a foglia d'oro cerimoniale." },
        { id: `lvl${id}_d10`, x: 88.33, y: 68.53, radius: 6.0, name: "La Matrice di Scavo KN-40", loreClue: "Sulla spalla del grande pithos a motivi di corda compare la marcatura a gesso bianco dello scavo: KN-40." },
      ];
    } else if (isLevelFortyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 90.38,
          y: 61.44,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rotolo di Papiro di Tolomeo Filadelfo",
          loreClue: "Il rotolo di papiro con il catalogo dei tomi tolemaici è stato sottratto per celare la rotta lungo il Nilo."
        },
        {
          id: `lvl${id}_d2`,
          x: 60.21,
          y: 76.95,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Sfera Armillare Alessandrina di Bronzo",
          loreClue: "La monumentale sfera armillare usata per calcolare le declinazioni celesti è stata danneggiata sul cerchio meridiano."
        },
        {
          id: `lvl${id}_d3`,
          x: 60.5,
          y: 89.79,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L'Anfora Rodia con Sigillo Tolemaico",
          loreClue: "L'anfora cerimoniale ad anse nodose reca il marchio in ceralacca della flotta tolemaica."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.96,
          y: 26.23,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Busto in Marmo di Tolomeo Sotere",
          loreClue: "Il busto marmoreo del fondatore della biblioteca presenta un'incisione abrasa sul basamento."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.46,
          y: 83.76,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calamaio di Bronzo con Inchiostro di Seppia",
          loreClue: "Il calamaio in bronzo ellenistico usato dagli amanuensi reali è stato rovesciato sul tavolo di lettura."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.79,
          y: 49.83,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Tavoletta d'Argilla con Formula Cifrata",
          loreClue: "Una tavoletta d'argilla incisa con le quote batimetriche del porto antico è stata asportata."
        }
      ];
    } else if (isLevelFortyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Meridiana Gnomonica di Siene",
          loreClue: "Lo gnomone in bronzo con cui Eratostene calcolò la circonferenza della Terra è stato smussato."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Compasso Proporzionale di Rodi",
          loreClue: "Il compasso di precisione in lega d'oricalco usato per tracciare i meridiani è scomparso."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Carta Geografica del Delta del Nilo",
          loreClue: "La pergamena con i sette rami storici del Nilo mostra tagli netti in corrispondenza di Canopo."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Teodolite ad Acqua Alessandrino",
          loreClue: "Il livello idraulico a vasi comunicanti per il rilievo geodetico è stato sabotato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Peso Numismatico in Bronzo",
          loreClue: "Il saggio di peso monetario con l'effigie di Alessandro Magno è stato rubato."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Lampada Copta a Olio d'Oliva",
          loreClue: "La lucerna a forma di leone che illuminava il banco di cartografia è stata rovesciata."
        }
      ];
    } else if (isLevelFortyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Catena Portuale di Eunostos",
          loreClue: "La pesante maglia della catena difensiva che sbarrava il porto occidentale è stata tranciata."
        },
        {
          id: `lvl${id}_d2`,
          x: 12.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L'Ancora di Piombo di una Galea Tolemaica",
          loreClue: "Il ceppo d'ancora in piombo con incise le ali di Iside è stato dissotterrato dalla sabbia."
        },
        {
          id: `lvl${id}_d3`,
          x: 38.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Reliquiario Sommerso in Porfido",
          loreClue: "Un piccolo scrigno in porfido rosso adagiato tra le alghe marine racchiude gemme alessandrine."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Rostro di Bronzo della Triremi",
          loreClue: "Il rostro forgiato a testa di cinghiale della nave da guerra tolemaica appare manomesso."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Bitta d'Ormeggio in Granito Rosa",
          loreClue: "La colonna d'ormeggio in granito di Assuan presenta un simbolo occulto scalpellato alla base."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Forziere di Legno di Cedro Imbevuto",
          loreClue: "La cassa di cariche commerciali affondata nel bacino interno è stata forzata e svuotata."
        }
      ];
    } else if (isLevelFortyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Grande Specchio Ustorio del Faro",
          loreClue: "Il colossale specchio parabolico in bronzo lucidato sulla sommità del Pharos è stato scheggiato."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua Colossale di Poseidone",
          loreClue: "La statua monumentale che coronava la cuspide del faro ha perso il tridente cerimoniale."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Basamento Ottagonale con Iscrizione Greca",
          loreClue: "L'epigrafe dedicatoria di Sostrato di Cnido è stata parzialmente cancellata con un punzone."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Rampa a Spirale per i Carri di Combustibile",
          loreClue: "La pavimentazione a blocchi di calcare della salita elicoidale appare franata."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lanterna a Fuoco Continuo",
          loreClue: "Il braciere alimentato a nafta e resina fossile è stato spento prima del previsto."
        },
        {
          id: `lvl${id}_d6`,
          x: 40.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Disco Solare di Puntamento Navale",
          loreClue: "Il cerchio goniometrico in bronzo che proiettava i segnali luminosi a 30 miglia è sparito."
        }
      ];
    } else if (isLevelFortyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Gli Elementi di Geometria su Pergamena",
          loreClue: "Il manoscritto originale con la dimostrazione del postulato delle parallele è stato strappato."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Compasso a Settore Circolare",
          loreClue: "Lo strumento ad arco graduato usato per inscrivere i poligoni sacri è stato asportato."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta Cerata con i Solidi Platonici",
          loreClue: "Il diagramma dei cinque poliedri regolari tracciato a stilo nella cera nera è stato levigato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 62.11,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Stele con la Sezione Aurea Incisa",
          loreClue: "La proporzione divina incisa su marmo pentelico mostra il rapporto armonico con la piramide."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Candelabro a Cinque Fiamme di Bronzo",
          loreClue: "Il candelabro geometrico poggiato sulla cattedra d'insegnamento è stato rovesciato."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Lo Scrigno dei Sigilli di Rame",
          loreClue: "La cassetta con i timbri corporativi dei matematici alessandrini è stata scassinata."
        }
      ];
    } else if (isLevelFortySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 12.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Paratoia Idraulica della Cisterna",
          loreClue: "La saracinesca in bronzo fuso che regolava l'afflusso del Nilo nella cisterna sotterranea è bloccata."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Colonna Sommersa con Capitello Corinzio",
          loreClue: "Il capitello in marmo proconnesio che emerge dall'acqua della cisterna è stato scheggiato."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo di Piombo dell'Acquedotto",
          loreClue: "La borchia sigillare dell'imperatore Adriano sul tubo idrico principale è stata asportata."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L'Idrometro del Nilo (Nilometro)",
          loreClue: "La colonna graduata in cubiti nilotici per la misurazione delle piene è stata manomessa."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Coppa Votiva in Vetro Soffiato di Canopo",
          loreClue: "La raffinata coppa in pasta vitrea policroma con decorazioni a piuma è stata rubata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 78.07,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Cunicolo Cieco nel Muro di Mattoni",
          loreClue: "La breccia aperta nella volta a botte delle condotte romane mostra tracce di esplosione."
        }
      ];
    } else if (isLevelFortySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L'Astrolabio Piano di Ipazia",
          loreClue: "Il sofisticato astrolabio piano in ottone dorato inciso con le costellazioni tolemaiche è scomparso."
        },
        {
          id: `lvl${id}_d2`,
          x: 68.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Canone Astronomico su Papiro",
          loreClue: "Il commentario di Ipazia all'Almagesto di Tolomeo è stato dato parzialmente alle fiamme."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L'Idroscopio da Laboratorio",
          loreClue: "Il tubo graduato per misurare la densità dei liquidi alchemici è stato frantumato sul pavimento."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo Astrale della Volta Celeste",
          loreClue: "La volta affrescata con la sfera dei pianeti mostra le orbite ellittiche raschiate."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cattedra Filosofica in Noce",
          loreClue: "La sedia accademica da cui la filosofa teneva le lezioni ai discepoli presenta un vano forzato."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta con le Coordinate di Luxor",
          loreClue: "La lastrina di rame con l'azimut di allineamento verso Tebe è stata strappata dal leggio."
        }
      ];
    } else if (isLevelFortyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Serpente Agatodemone",
          loreClue: "Il serpente sacro guardiano delle catacombe con la doppia corona dell'Alto e Basso Egitto è scalpellato."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Triclinio Funebre in Calcare",
          loreClue: "Il banco a ferro di cavallo per i banchetti commemorativi dei defunti reca macchie di sostanze chimiche."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Lo Scudo con la Testa di Medusa",
          loreClue: "Il tondo a rilievo a protezione della camera sepolcrale presenta fori di percussione recenti."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua di Anubi con Armatura Romana",
          loreClue: "La singolare statua sincretica del dio sciacallo in tenuta da legionario ha perso il giavellotto."
        },
        {
          id: `lvl${id}_d5`,
          x: 15.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Sarcofago Monolitico della Cripta",
          loreClue: "Il pesante coperchio in calcare locale è stato scalzato con un palanchino di ferro."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Fregiatura a Ghirlande Greco-Egizie",
          loreClue: "Il festone scolpito a motivi di papiri e foglie d'alloro appare uniformato da malta fresca."
        }
      ];
    } else if (isLevelFortyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Colonna di Pompeo in Granito Rosso",
          loreClue: "Il colossale fusto monolitico di granito rosso di Assuan mostra segni di scalpellamento alla base."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Sfinge di Basalto del Serapeo",
          loreClue: "La maestosa sfinge accovacciata a guardia dell'acropoli reca un cartiglio reale abraso."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Nicchia Murata della Statua di Serapide",
          loreClue: "L'abside che ospitava la colossale scultura in legno dorato e pietre preziose è sventrata."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Targa di Dedica in Bronzo Dorato",
          loreClue: "L'iscrizione commemorativa per l'imperatore Diocleziano è stata staccata dal plinto."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Gradini della Scalinata Monumentale",
          loreClue: "I cento gradini d'accesso alla collina sacra di Rhakotis presentano blocchi rovesciati."
        },
        {
          id: `lvl${id}_d6`,
          x: 62.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Manoscritto Nascosto sotto il Plinto",
          loreClue: "Un rotolo di pergamena sigillato con piombo era occultato nella fessura tra i blocchi."
        }
      ];
    } else if (isLevelFifty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL QUINTO SIGILLO: Lo Scarabeo Alato d'Oro e Lapis",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 5: Il monumentale scarabeo pettorale in oro puro e lapislazzuli di Tolomeo! Il cuore della reliquia proietta la triangolazione per la Valle dei Re a Luxor."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Reliquiario Tolemaico in Avorio ed Ebano",
          loreClue: "Lo scrigno intagliato che custodiva il Quinto Sigillo per oltre duemila anni è stato aperto."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Tavola Astronomica d'Edfu",
          loreClue: "La lastra di diorite nera con la rotta lungo il Nilo fino a Tebe mostra il sigillo della Mano Oscura."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calice da Libagione in Ossidiana",
          loreClue: "Il calice rituale per le unzioni solari del faraone è stato rovesciato sull'altare di granito."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L'Affresco del Falco Horus dell'Architrave",
          loreClue: "Le ali spiegate del falco divino sull'architrave indicano il solstizio d'inverno sul Nilo."
        },
        {
          id: `lvl${id}_d6`,
          x: 68.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Cifra Geometrica dei Sacerdoti di Tebe",
          loreClue: "L'algoritmo matematico che sincronizza i dodici frammenti con la Città d'Oro di Paititi."
        }
      ];
    } else if (isLevelFiftyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.67,
          y: 81.58,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Necropolare di Anubi",
          loreClue: "Il sigillo d'argilla cruda intatto dei nove prigionieri e lo sciacallo è stato spezzato dai ladri di tombe."
        },
        {
          id: `lvl${id}_d2`,
          x: 64.42,
          y: 53.18,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Canopo di Hapi con Testa di Babbuino",
          loreClue: "Il vaso rituale in alabastro egizio contenente gli oli sacri è stato rimosso dalla nicchia."
        },
        {
          id: `lvl${id}_d3`,
          x: 13.96,
          y: 90.23,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cazzuola di Scavo di Howard Carter",
          loreClue: "La cazzuola d'acciaio del celebre archeologo è stata abbandonata sul banco di rilevamento."
        },
        {
          id: `lvl${id}_d4`,
          x: 44.17,
          y: 56.7,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L'Ankh d'Oro nel Sarcofago",
          loreClue: "La sacra chiave della vita intarsiata d'oro massiccio e diaspro è stata asportata dal petto della mummia."
        },
        {
          id: `lvl${id}_d5`,
          x: 81.17,
          y: 62.56,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lucerna a Olio in Bronzo Dorato",
          loreClue: "La lucerna cerimoniale usata per esplorare l'anticamera è stata rovesciata tra i frammenti di lino."
        },
        {
          id: `lvl${id}_d6`,
          x: 92.29,
          y: 72.99,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rotolo di Lino Funerario Inciso",
          loreClue: "La bende di lino faraonico ricamate con formule protettive del Libro dei Morti sono state lacerate."
        }
      ];
    } else if (isLevelFiftyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Capitello Papiriforme Aperto",
          loreClue: "Il colossale capitello della sala ipostila di Karnak mostra cartigli reali scalpellati via."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Bassorilievo di Amon-Ra con Corona a Doppia Piuma",
          loreClue: "La sagoma sacra del re degli dèi presenta il disco solare manomesso da emissari dell'Ombra."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 36.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Lo Scarabeo Monolitico di Granito Rosa",
          loreClue: "Il gigantesco scarabeo di Khepri sulle rive del lago sacro reca un'incisione abrasa sul basamento."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Cartiglio di Ramses II sull'Architrave",
          loreClue: "I geroglifici regali del grande faraone sull'architrave di arenaria appaiono scheggiati."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porta Monumentale del Terzo Pilone",
          loreClue: "Lo stipite in calcare con le formule di consacrazione è stato forzato con leve di ferro."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua del Falco Horus a Guardia dell'Ipostilo",
          loreClue: "La scultura in diorite del dio falco ha perso il disco solare cerimoniale sul capo."
        }
      ];
    } else if (isLevelFiftyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Colosso Settentrionale di Memnone",
          loreClue: "La statua monolitica di quarzite che emetteva suoni all'alba presenta una profonda fessura artificiale."
        },
        {
          id: `lvl${id}_d2`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Nilo che Unisce l'Egitto (Sema-Tawy)",
          loreClue: "Il simbolo dell'unione dell'Alto e Basso Egitto scolpito sul trono è stato martellato."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 78.07,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Targa Dedicatoria Greca dell'Epoca Romana",
          loreClue: "L'epigrafe metrica lasciata dai viaggiatori imperiali alla base del colosso è stata abrasa."
        },
        {
          id: `lvl${id}_d4`,
          x: 38.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa d'Attrezzi da Restauro Lapideo",
          loreClue: "La cassetta con martelli di rame e cunei da scalpellino è stata trafugata."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Monolito Minore della Regina Tiy",
          loreClue: "La figura regale scolpita a lato delle gambe del colosso reca il cobra reale decapitato."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Canale Idraulico dell'Inondazione Nilotica",
          loreClue: "La canaletta di contenimento per le piene del fiume alla base delle statue è ostruita da massi."
        }
      ];
    } else if (isLevelFiftyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Terrazza Superiore del Tempio di Hatshepsut",
          loreClue: "I pilastri osiriaci della terrazza sommitale mostrano i volti divini scalpellati dal successore."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo della Spedizione nella Terra di Punt",
          loreClue: "La scena navale con i grandi alberi d'incenso trasportati via mare è stata manomessa."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua della Sfinge Femminile in Calcare",
          loreClue: "La sfinge reale con barba cerimoniale posta a guardia della rampa d'accesso è scomparsa."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Cartiglio Reale di Maatkare Hatshepsut",
          loreClue: "Il nome d'incoronazione della regina cancellato nell'antichità rivela una nuova traccia."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Cappella di Anubi con Soffitto Stellato",
          loreClue: "Le stelle dorate a cinque punte su fondo blu cobalto sono state raschiate dalla volta."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Braciere Cerimoniale d'Incenso Mirra",
          loreClue: "Il tripode in bronzo per i fumi votivi è stato rovesciato lungo la gradinata centrale."
        }
      ];
    } else if (isLevelFiftyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L'Affresco di Nefertari che Gioca a Senet",
          loreClue: "La celebre pittura murale della regina che sfida il destino al gioco del Senet è scheggiata."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Scacchiera del Senet in Avorio e Legno Pregiato",
          loreClue: "La scacchiera rituale a trenta caselle con pedine a testa di leone è stata sottratta."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 62.11,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Corona con le Corna di Hathor e Disco Solare",
          loreClue: "Il copricapo divino della regina dipinto sull'intonaco mostra tracce di solventi chimici."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Bastone Cerimoniale Pastorale",
          loreClue: "Lo scettro heka intarsiato in oro e pasta vitrea azzurra è svanito dal sarcofago."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Nicchia dei Vasi Canopi della Regina",
          loreClue: "Il vano parietale sigillato che ospitava lo scrigno d'alabastro è stato forzato."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Formula Geroglifica della Rinascita",
          loreClue: "La colonna di testo dal capitolo 17 del Libro dei Morti presenta geroglifici abrasati."
        }
      ];
    } else if (isLevelFiftySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 12.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Grande Obelisco Orientale di Ramses II",
          loreClue: "Il monolito di granito rosso reca un allineamento gnomonico verso Siwa abraso alla base."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Criosfinge del Viale di Karnak-Luxor",
          loreClue: "La statua di sfinge con testa di ariete a guardia del viale processionale è mutilata."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Colosso Seduto di Ramses con Doppia Corona",
          loreClue: "La possente statua all'ingresso del tempio reca il cartiglio pettorale manomesso."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Base Lapidea del Pilone di Destra",
          loreClue: "Le scene belliche della battaglia di Qadesh sul pilone mostrano fori di scavo recenti."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Lo Stendardo Processionale di Amon",
          loreClue: "L'asta di bronzo con l'emblema della barca sacra usata nella festa di Opet è sparita."
        },
        {
          id: `lvl${id}_d6`,
          x: 62.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cella Murata della Barca Sacra",
          loreClue: "La pesante porta di cedro del Libano con lamine d'elettro è stata forzata dai sabotatori."
        }
      ];
    } else if (isLevelFiftySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Colosso Caduto di Ramses (Ozymandias)",
          loreClue: "La testa colossale in granito abbattuta al suolo mostra fenditure recenti nel diadema reale."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "I Magazzini a Volta in Mattoni Crudi",
          loreClue: "Le storiche gallerie granaio del tempio presentano giare cerimoniali frantumate."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele della Vittoria di Tebe",
          loreClue: "La lastra di diorite che elenca i tributi delle nazioni mediterranee è stata spaccata in due."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua della Madre Tuya",
          loreClue: "La scultura in pietra calcarea della madre del faraone è stata rimossa dal portico."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo Astronomico del Soffitto",
          loreClue: "Il diagramma delle trentasei decani celesti sulla volta è stato oscurato con pece."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Tazza Votiva in Ossidiana Nera",
          loreClue: "Il calice per le libagioni del santuario solare è stato asportato dalla mensa dell'altare."
        }
      ];
    } else if (isLevelFiftyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Volta Astronomica con i Moti Planetari",
          loreClue: "Il soffitto a botte della camera funeraria dipinto a volta celeste dorata presenta le costellazioni graffiate."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Sarcofago Monolitico in Puro Alabastro",
          loreClue: "Il monumentale sarcofago traslucido istoriato con il Libro delle Porte è stato forzato."
        },
        {
          id: `lvl${id}_d3`,
          x: 82.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua del Guardiano Anubi su Baule Dorato",
          loreClue: "La figura lignea ricoperta di resina nera con collare d'oro è stata sottratta."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 62.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Rilievo di Seti I Davanti a Osiride",
          loreClue: "La delicatissima pittura murale dell'abbraccio divino è stata sfregiata con uno scalpello."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta d'Oro con le Ore della Notte",
          loreClue: "La lamina metallica che descrive il viaggio del sole negli inferi è stata strappata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 36.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lampada da Miniera dei Primi Esploratori",
          loreClue: "La lucerna a petrolio ottocentesca lasciata da Belzoni è stata rovesciata nel corridoio."
        }
      ];
    } else if (isLevelFiftyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L'Ostrakon con la Pianta Segreta della Valle",
          loreClue: "Il frammento di calcare con il rilievo planimetrico delle tombe reali è stato rubato."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Lo Scalpello in Rame Tempra dei Costruttori",
          loreClue: "L'antico strumento da lavoro sacro con il marchio della confraternita è sparito."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Papiro Amministrativo dello Sciopero dei Lavoratori",
          loreClue: "Il resoconto storico delle proteste sotto Ramses III è stato asportato dalla cassa."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Stele Privata dell'Artigiano Sennedjem",
          loreClue: "La stele funeraria policroma con la devozione a Ptah presenta la figura scalpellata."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Modello Architettonico in Pietra",
          loreClue: "La maquette in scala di una tomba ipogea è stata mandata in frantumi sulla pavimentazione."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 78.07,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Serratura Lignea Egizia a Chiavistello",
          loreClue: "Il sofisticato catenaccio in legno di sicomoro con perni a caduta è stato scardinato."
        }
      ];
    } else if (isLevelSixty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL SESTO SIGILLO: L'Occhio Uraeo di Horus e Smeraldo",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 6: Il leggendario amuleto Uadjet in oro massiccio e smeraldo grezzo di Siwa! La pupilla proietta la rotta attraverso il Sahara libico verso l'Oracolo di Amon."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Naos Monolitica in Granito Nero",
          loreClue: "Il tabernacolo sacro al centro del santuario è stato forzato per estrarre la reliquia millenaria."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Triade Divina di Tebe su Bassorilievo",
          loreClue: "Le figure di Amon, Mut e Khonsu scolpite nel granito mostrano gli attributi reali alterati."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L'Altare d'Oro del Sole Rinato",
          loreClue: "La mensa sacrificale dorata ove venivano posti i sigilli d'oriente reca tracce d'acido."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 40.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Disco Solare con i Due Serpenti Uraei",
          loreClue: "Il simbolo del sole alato che corona l'ingresso del Sancta Sanctorum indica l'azimut di Siwa."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Registro Cifrato dei Sacerdoti di Karnak",
          loreClue: "Il papiro sacro con le coordinate celesti che collegano Karnak a Paititi è stato ricomposto."
        }
      ];
    } else if (isLevelSixtyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 95.42,
          y: 82.76,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lanterna a Petrolio sulla Trave della Tenda",
          loreClue: "La lanterna da campo antivento in ottone è stata staccata dal tirante per operare nell'oscurità dell'oasi."
        },
        {
          id: `lvl${id}_d2`,
          x: 89.71,
          y: 24.5,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Teodolite Geodetico sulla Duna",
          loreClue: "Il treppiede topografico con il filo a piombo conico è stato inclinato per falsare i rilievi dell'altopiano."
        },
        {
          id: `lvl${id}_d3`,
          x: 16.88,
          y: 76.56,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Barile di Legno con le Provviste d'Acqua",
          loreClue: "La botte di rovere contenente la riserva idrica per la traversata delle dune è stata aperta e svuotata."
        },
        {
          id: `lvl${id}_d4`,
          x: 36.62,
          y: 22.32,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L'Affresco Murale del Tempio con il Sole Alato",
          loreClue: "Il sacro disco solare alato scolpito sul pilastro mostra tracce di scalpellatura recente."
        },
        {
          id: `lvl${id}_d5`,
          x: 41.25,
          y: 87.22,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Palina Metrica nel Trincerone",
          loreClue: "L'asta graduata da scavo dipinta a bande alternate è stata rimossa dal fronte della trincea."
        },
        {
          id: `lvl${id}_d6`,
          x: 75.17,
          y: 70.81,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Borsa da Sella Tuareg in Cuoio",
          loreClue: "La bisaccia berbera con i registri delle rotte carovaniere attraverso il deserto libico è scomparsa."
        }
      ];
    } else if (isLevelSixtyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Tripode Oracolare in Bronzo di Amon",
          loreClue: "Il sacro tripode cerimoniale su cui sedeva la profetessa di Siwa è stato asportato dalla cella."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L'Architrave Monolitico con Iscrizioni Demotiche",
          loreClue: "Il blocco in arenaria sopra il portale d'ingresso presenta una linea di geroglifici raschiata."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 10.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Fessura dell'Eco nella Parete d'Aghurmi",
          loreClue: "Il condotto acustico segreto attraverso cui i sacerdoti sussurravano i vaticini è stato ostruito con malta."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Nicchia Murata del Tesoro Votivo",
          loreClue: "L'incavo nella roccia calcarea che custodiva le offerte dei sovrani ellenistici è stato scassinato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lampada ad Olio Berbera in Pietra Tenera",
          loreClue: "La lucerna a tre beccucci scolpita nel gesso locale è stata rovesciata sulla scalinata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 36.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo del Serpente con le Corna d'Ariete",
          loreClue: "L'effigie sacra del dio Amon-Zeus cornuto incisa sul plinto mostra incisioni alterate."
        }
      ];
    } else if (isLevelSixtyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Spada Cerimoniale di Alessandro Magno",
          loreClue: "Il gladio macedone con elsa forgiata a testa di leone d'oro è stato rimosso dalla teca funeraria."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Lo Scudo di Bronzo con la Stella di Verghina",
          loreClue: "Lo scudo da parata con l'emblema solare a sedici raggi presenta il bossolo centrale ammaccato."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Papiro della Profezia di Divina Discendenza",
          loreClue: "Il rotolo sacro che proclamava il conquistatore figlio di Amon mostra bruciature sui bordi."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Bussola Solare da Sabbia Alessandrina",
          loreClue: "Lo strumento gnomonico a quadrante mobile usato dall'esercito nelle tempeste di sabbia è sparito."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Miliario Macedone della Via Reale",
          loreClue: "Il cippo confinario in calcare che indicava la distanza da Alessandria è stato abbattuto."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 78.07,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa delle Monete d'Oro di Babilonia",
          loreClue: "Lo scrigno con i tetradrammi con Alessandro raffigurato con le corna d'Ariete è stato forzato."
        }
      ];
    } else if (isLevelSixtyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L'Affresco di Si-Amun Davanti alla Dea Nut",
          loreClue: "La vivace pittura murale che unisce l'arte classica greca e la liturgia egizia è stata scheggiata."
        },
        {
          id: `lvl${id}_d2`,
          x: 88.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Corona di Mirto in Foglia d'Oro",
          loreClue: "La preziosa ghirlanda funeraria ellenistica deposta sul capo del nobile è stata rubata."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Pettorale con l'Occhio Uadjet e la Bilancia",
          loreClue: "L'amuleto di giudizio dell'anima in oro e diaspro verde è svanito dal sarcofago."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Lastra di Chiusura dell'Ipogeo Rupestre",
          loreClue: "Il massiccio blocco che sigillava la tomba nella Montagna dei Morti è stato scalzato."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Cratere Ceramico Greco a Figure Rosse",
          loreClue: "Il grande vaso cerimoniale attico per le libagioni d'olio è stato frantumato sul pavimento."
        },
        {
          id: `lvl${id}_d6`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele Dipinta con Epigrafe Bilingue",
          loreClue: "La lastrina con dedica in greco e geroglifico presenta le ultime righe raschiate."
        }
      ];
    } else if (isLevelSixtyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Pavimento a Mosaico Sommerso della Sorgente",
          loreClue: "Le tessere di pasta vitrea azzurra che rivestono la vasca sorgiva mostrano lacune recenti."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 36.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Brocca di Terracotta con Marchio Tolemaico",
          loreClue: "Il recipiente da libagione per le acque minerali curative è stato asportato dal bordo vasca."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 62.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Balustra di Pietra Calcarea del Belvedere",
          loreClue: "Il parapetto ombreggiato dalle palme da dattero mostra una colonna divelta."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta con l'Analisi Chimica delle Acque",
          loreClue: "Il registro lasciato dalla spedizione scientifica ottocentesca sulle proprietà delle fonti è stato strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lampada Galleggiante Cerimoniale",
          loreClue: "La lucerna a coppa di bronzo usata per i riti notturni dell'equinozio è stata affondata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 10.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Cancello di Ferro Battuto del Bagno Reale",
          loreClue: "La grata d'accesso alla camera ipogea della sorgente presenta il chiavistello spezzato."
        }
      ];
    } else if (isLevelSixtySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Muro di Sale e Fango (Kersheef) Forzato",
          loreClue: "La caratteristica muratura in blocchi di sale fossile della cittadella medievale è stata perforata."
        },
        {
          id: `lvl${id}_d2`,
          x: 38.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porticina di Cedro Intagliata a Motivi Berberi",
          loreClue: "Il battente ligneo con complessi simboli geometrici protettivi è stato scardinato."
        },
        {
          id: `lvl${id}_d3`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Tappeto Nomade Tradizionale alle Pareti",
          loreClue: "Il pesante arazzo in lana di cammello con la mappa astrale dell'oasi è stato asportato."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lucerna in Ferro Battuto dei Vicoli Ciechi",
          loreClue: "La lanterna sospesa che illuminava il dedalo dei passaggi coperti è stata mandata in pezzi."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Registro Commerciale dei Mercanti di Sale",
          loreClue: "Il libro mastro rilegato in pelle di capra con le rotte carovaniere è stato sottratto."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Talismano d'Argento di Fatima con Turchese",
          loreClue: "L'amuleto protettivo delle carovane contro gli spiriti del deserto è svanito dalla nicchia."
        }
      ];
    } else if (isLevelSixtySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Monolito Residuo del Tempio di Nectanebo II",
          loreClue: "L'unico pilastro monumentale sopravvissuto al dinamite mostra i rilievi regali ulteriormente scalpellati."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Faraone che Offre la Maat ad Amon",
          loreClue: "La sacra piuma dell'ordine cosmico consegnata alla divinità è stata cancellata dall'intonaco."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Fenditura nella Muraglia Dorata",
          loreClue: "Una fessura orizzontale aperta tra i conci d'arenaria indica l'estrazione clandestina di papiri."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele Dedicatoria dell'Ultimo Faraone Indigeno",
          loreClue: "L'epigrafe trionfale dell'ultimo sovrano egizio presenta il cartiglio regale frantumato."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere in Granito Grigio delle Offerte",
          loreClue: "La coppa per l'incenso sacro all'esterno del recinto sacro è stata spaccata in due."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L'Amuleto dello Scarabeo Cuore in Pietra Verde",
          loreClue: "Lo scarabeo iscritto che proteggeva le fondamenta del santuario è stato rubato."
        }
      ];
    } else if (isLevelSixtyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Bussola da Carovana nel Cristallo di Selenite",
          loreClue: "Lo strumento d'orientamento magnetico inserito in un blocco di selenite trasparente è sparito."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Rosa del Deserto Monumentale tra le Sabbie",
          loreClue: "La colossale concrezione minerale di gesso e sabbia presenta un'intaccatura con il marchio dell'Ombra."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 36.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Fossile Marino di Balena Preistorica",
          loreClue: "Lo scheletro fossilizzato emerso dal fondale primordiale del Sahara mostra una vertebra asportata."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Tenda da Ricognizione della Spedizione",
          loreClue: "Il telo mimetico dell'avamposto archeologico presenta squarci netti praticati con una lama."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Taccuino delle Coordinate GPS e Celesti",
          loreClue: "Le pagine con la rotta trans-sahariana verso Petra sono state strappate dal quaderno di campo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Fucile da Campo degli Esploratori",
          loreClue: "L'arma di difesa contro i predoni del deserto è stata sottratta dall'armeria della spedizione."
        }
      ];
    } else if (isLevelSixtyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Le Impronte di Mani in Ocra Rossa Preistoriche",
          loreClue: "Le antichissime impronte rupestri lasciate millenni prima dei faraoni mostrano solventi chimici."
        },
        {
          id: `lvl${id}_d2`,
          x: 62.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Bassorilievo Rupestre della Giraffa e dell'Arciere",
          loreClue: "La scena di caccia del Sahara verde incisa nella roccia arenaria è stata scheggiata."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Ciotola in Pietra per la Miscelazione dei Pigmenti",
          loreClue: "Il mortaio neolitico con residui di polvere d'ocra e grasso animale è stato rubato."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Simbolo Astronomico delle Pleiadi sulla Volta",
          loreClue: "I sette punti incisi che rappresentavano la costellazione guida dei nomadi sono stati levigati."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 78.07,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Lucerna a Olio Animale dei Primi Uomini",
          loreClue: "La coppa in arenaria concava usata per illuminare la caverna preistorica è stata asportata."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Fenditura d'Accesso alla Caverna Sotterranea",
          loreClue: "Lo stretto passaggio tra i massi franati mostra segni di allargamento con scalpelli moderni."
        }
      ];
    } else if (isLevelSeventy) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL SETTIMO SIGILLO: Il Corno d'Oro di Amon-Zeus con Turchese",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 7: Il leggendario corno d'ariete in oro massiccio e turchese del Sinai! Il vertice della reliquia proietta la triangolazione trans-desertica verso la Città di Roccia di Petra."
        },
        {
          id: `lvl${id}_d2`,
          x: 40.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Naos Segreta dell'Oracolo di Siwa",
          loreClue: "Il tabernacolo monolitico di granito celato per oltre duemila anni è stato forzato dai cospiratori."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele con il Vaticinio di Alessandro",
          loreClue: "La lastra di diorite recante le parole del sacerdote che proclamava la conquista del mondo è spezzata."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L'Altare del Raggio Solare Equinoziale",
          loreClue: "Il basamento in selenite che rifletteva la luce del primo sole d'autunno reca incisioni sacrileghe."
        },
        {
          id: `lvl${id}_d5`,
          x: 68.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere d'Oro dei Sacerdoti Libici",
          loreClue: "Il tripode d'oro per gli incensi rituali è stato rovesciato ai piedi del tabernacolo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Flauto d'Osso della Pizia del Deserto",
          loreClue: "Lo strumento sacro con cui veniva invocato lo spirito dell'oracolo è stato trafugato dalla cripta."
        }
      ];
    } else if (isLevelSeventyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 78.33,
          y: 59.82,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Canale Idraulico Nabateo nella Roccia del Siq",
          loreClue: "La condotta in terracotta scavata nella parete della gola per convogliare l'acqua piovana mostra tubature frantumate."
        },
        {
          id: `lvl${id}_d2`,
          x: 78.38,
          y: 74.05,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Votiva Betilo Scolpita nell'Arenaria Rosa",
          loreClue: "La sacra pietra aniconica raffigurante il dio Dushara è stata scalpellata via dalla nicchia rupestre."
        },
        {
          id: `lvl${id}_d3`,
          x: 35.67,
          y: 89.29,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Lastricato Romano della Gola di Petra",
          loreClue: "I grandi basoli poligonali solcati dalle ruote dei carri romani presentano sollevamenti recenti con leve di ferro."
        },
        {
          id: `lvl${id}_d4`,
          x: 68.75,
          y: 72.43,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lanterna ad Acetilene delle Guide Beduine",
          loreClue: "La lampada da speleologia usata per esplorare le gole cieche è stata schiacciata sul pietrisco."
        },
        {
          id: `lvl${id}_d5`,
          x: 31.71,
          y: 78.24,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Frammento di Taccuino di Johann Burckhardt",
          loreClue: "La pagina del diario dell'esploratore svizzero che riscoprì Petra nel 1812 reca annotazioni cifrate strappate."
        },
        {
          id: `lvl${id}_d6`,
          x: 95.17,
          y: 63.9,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Borraccia in Cuoio con Incisione Sabatea",
          loreClue: "Il contenitore da viaggio in pelle con caratteri semitici antichi è stato trafugato dalla nicchia di sosta."
        }
      ];
    } else if (isLevelSeventyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L'Urna Sommitale di Al-Khazneh (Il Tesoro)",
          loreClue: "Il bulbo superiore della tholos scolpita nella viva roccia reca segni di colpi d'arma da fuoco dei cacciatori di tesori."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 10.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Capitello Corinzio dell'Atrio Monumentale",
          loreClue: "Il capitello floreale finemente intagliato nell'arenaria rosa ha un riccio d'acanto spezzato di netto."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cripta Funeraria Sotterranea Scassinata",
          loreClue: "La lastra tombale scoperta sotto il vestibolo del Tesoro mostra il sigillo di malta rimosso con picconi."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Statua dell'Amazzone con la Doppia Ascia",
          loreClue: "Il bassorilievo ellenistico della guerriera tra le colonne del frontone superiore è stato mutilato."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Lettera Cifrata della Spedizione Bellini",
          loreClue: "Una missiva indirizzata al Professor Bellini con i codici astronomici del Tesoro è stata lacerata."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Moneta d'Argento di Re Areta IV",
          loreClue: "Il didramma nabateo in argento puro con i ritratti reali è stato sottratto dal pozzetto delle offerte."
        }
      ];
    } else if (isLevelSeventyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Motivo a Gradoni (Crowstep) della Tomba Nabatea",
          loreClue: "La merlatura a scalini assiro-babilonese che sormonta il sepolcro rupestre è stata sbrecciata."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L'Iscrizione Funeraria in Aramaico Antico",
          loreClue: "L'epigrafe dedicatoria che malediceva chiunque violasse la tomba della famiglia mercantile è abrasa."
        },
        {
          id: `lvl${id}_d3`,
          x: 82.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porta Monolitica del Sepolcro delle Facciate",
          loreClue: "Il pesante battente in arenaria che sigillava l'ipogeo è stato sgangherato dall'asse di cardine."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 78.07,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Brocca di Terracotta a Guscio d'Uovo",
          loreClue: "La finissima ceramica dipinta nabatea a motivi vegetali stilizzati è stata frantumata all'ingresso."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L'Amuleto di Bronzo del Falcone Alato",
          loreClue: "Il pendente sacro raffigurante il messaggero celeste delle divinità semitiche è svanito dalla tomba."
        },
        {
          id: `lvl${id}_d6`,
          x: 62.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio della Mano Oscura sulla Roccia Arenaria",
          loreClue: "L'impronta triangolare incatramata della setta è stata impressa a caldo sulla parasta della facciata."
        }
      ];
    } else if (isLevelSeventyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 40.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Cavea del Teatro Scavata nella Montagna",
          loreClue: "I gradoni superiori intagliati nella roccia multicolore che ospitavano i notabili mostrano tagli netti di scalpello."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Scena Monumentale con Colonne in Marmo Bianco",
          loreClue: "Il fusto scanalato importato dall'Egitto durante il dominio di Traiano presenta fratture intenzionali."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Maschera Teatrale in Bronzo di Dioniso",
          loreClue: "La maschera tragica con tralci di vite usata nelle rappresentazioni ellenistiche è scomparsa dal proscenio."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Varco Segreto sotto il Vomitorium",
          loreClue: "La grata d'accesso alla galleria idraulica sotterranea del teatro è stata scardinata con leve idrauliche."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Mappa Topografica dell'Istituto Archeologico",
          loreClue: "La pianta a rilievi trigonometrici del settore teatrale è stata bruciata su un angolo."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo del Prefetto della Provincia Arabia",
          loreClue: "Il timbro consolare in piombo imperiale che attestava la confisca del teatro è stato violato."
        }
      ];
    } else if (isLevelSeventyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Facciata a Tre Ordini della Tomba del Palazzo",
          loreClue: "La grandiosa imitazione rupestre di un palazzo ellenistico romano mostra una delle lesene crollata."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L'Urna Cineraria in Alabastro nella Tomba dell'Urna",
          loreClue: "Il vaso monumentale intagliato nella pietra calcarea translucida è stato rimosso dalla nicchia superiore."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Le Venature Multicolori della Tomba della Seta",
          loreClue: "La celebre parete rocciosa dalle sfumature arcobaleno presenta perforazioni per inserire cariche esplosive."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Portale d'Ingresso con Architrave a Gola Egizia",
          loreClue: "La solida intelaiatura lapidea che introduceva alla camera funeraria reale appare spaccata a mazzuolo."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Registro Genealogico dei Sovrani di Petra",
          loreClue: "Il papiro documentario con la successione da Malichus I a Rabel II è stato strappato in due parti."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 36.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Lucerna d'Oro a Sette Fiamme della Tomba Corinzia",
          loreClue: "Il prezioso braciere votivo lasciato in dono dai mercanti d'incenso è svanito dalla cella."
        }
      ];
    } else if (isLevelSeventySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 78.07,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Porta Trionfale di Traiano con Bassorilievi",
          loreClue: "L'arco onorario che segna l'ingresso al Temenos sacro ha uno dei pannelli con vittorie alate spezzato."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Tamburi di Colonna Rovesciati sul Decumano",
          loreClue: "I rocchi in calcare giallo allineati lungo la via principale sono stati rotolati per bloccare il passaggio."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Bottega del Mercante di Mirra e Incenso",
          loreClue: "Il banco in pietra con i mortai per pesare le resine della via dell'incenso è stato sfondato."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo di Ceralacca sul Trattato Commerciale",
          loreClue: "La bolla di scorta dei dazi carovanieri tra Petra e Gaza è stata calpestata e spezzata."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.04,
          y: 15.07,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Rotella di Misurazione Topografica Archeologica",
          loreClue: "Lo strumento a nastro metrico con custodia in cuoio della spedizione Bellini è sparito."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Lo Schizzo delle Condotte Idriche di Petra",
          loreClue: "Il disegno tecnico a china che indicava le cisterne nascoste sotto la via lastricata è lacerato."
        }
      ];
    } else if (isLevelSeventySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L'Altare Monumentale del Temenos di Qasr al-Bint",
          loreClue: "Il grande podio sacrificale in arenaria che fronteggia il tempio principale reca solchi sacrileghi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 40.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Fregio in Stucco Dipinto con Girali Vegetali",
          loreClue: "I preziosi stucchi ellenistici policromi sopravvissuti ai terremoti sono stati staccati a pezzi."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cella Tripartita del Tempio di Dushara",
          loreClue: "La massiccia inferriata di protezione dell'adyton centrale presenta le sbarre divelte."
        },
        {
          id: `lvl${id}_d4`,
          x: 40.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua in Marmo di Tyche / Al-Uzza",
          loreClue: "La figura della dea protettrice dell'abbondanza con la cornucopia è stata rimossa dal basamento."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta d'Argilla con Inno Liturgico",
          loreClue: "La tavoletta iscritta con il canto serale agli astri erranti è spezzata a metà."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Tripode d'Ottone della Lampada Eterna",
          loreClue: "Il sostegno metallico che manteneva la fiamma inestinguibile del santuario è stato rovesciato."
        }
      ];
    } else if (isLevelSeventyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L'Obelisco Monolitico del Dio Dushara",
          loreClue: "Il colossale dente di roccia alto sei metri intagliato nella cima della montagna presenta profonde incisioni."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 65.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Vasca di Libagione del Luogo Alto del Sacrificio",
          loreClue: "Il bacino scavato nella roccia per raccogliere il sangue delle offerte e l'acqua lustrale è otturato."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Scala Monumentale Intagliata nel Dirupo",
          loreClue: "I gradini esposti a strapiombo sulla valle del Wadi Musa mostrano un tratto fatto franare deliberatamente."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassetta degli Strumenti Geodetici sulla Cima",
          loreClue: "Lo scrigno blindato con l'altimetro e il barometro aneroide da montagna è stato forzato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Diario Meteorologico delle Vette di Petra",
          loreClue: "Il quaderno rilegato con i calcoli dei venti equinoziali usati per i falò di segnalazione è strappato."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 62.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Doppia Ascia Cerimoniale in Pietra Nera",
          loreClue: "L'arma votiva in basalto usata dai sacerdoti del Luogo Alto è stata trafugata dal podio."
        }
      ];
    } else if (isLevelSeventyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L'Immensa Facciata del Monastero (Ad-Deir)",
          loreClue: "La facciata rupestre alta 48 metri presenta tracce di arrampicata clandestina sulla tholos sommitale."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.04,
          y: 75.06,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Capitello Floreale Nabateo del Portale Centrale",
          loreClue: "Il capitello stilizzato tipico dell'architettura di Petra ha un blocco d'arenaria scheggiato."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Croce Bizantina Incisa nell'Adyton Interno",
          loreClue: "La croce greca scalpellata quando la tomba fu convertita in eremo cristiano è stata deturpata."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Passaggio a Strapiombo per il Belvedere sul Wadi Araba",
          loreClue: "Il muretto di sicurezza in pietre a secco sospeso sull'abisso è stato fatto crollare nel baratro."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 45.03,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Carta Topografica delle Cisterne Rupestri di Deir",
          loreClue: "Il documento con la collocazione delle riserve d'acqua scavate nei picchi è stato sottratto."
        },
        {
          id: `lvl${id}_d6`,
          x: 38.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Liturgica in Ferro Forgiato del Santuario",
          loreClue: "Il grande manufatto metallico con impugnatura a testa d'aquila è scomparso dalla nicchia."
        }
      ];
    } else if (isLevelEighty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L'OTTAVO SIGILLO: Il Betilo d'Ossidiana con la Chiave Astrale di Petra",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 8: Il sacro betilo di pura ossidiana nera intarsiato d'oro e lapislazzuli! I suoi angoli triangolano la rotta transoceanica verso le cascate di Iguazù e le misteriose linee di Nazca."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cripta Segreta dei Re Nabatei Sotto l'Altare",
          loreClue: "La volta celata nel cuore della montagna sacra è stata violata dai sicari della Mano Oscura."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Mappa delle Rotte Transoceaniche dei Fenici e Nabatei",
          loreClue: "La tavoletta in diorite con la navigazione stellare verso il continente sconosciuto è spezzata a metà."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 40.01,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Reale di Malichus II con il Serpente Alato",
          loreClue: "L'emblema dinastico in ceralacca rossa e piombo fuso è stato fuso con una torcia a fiamma viva."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 42.02,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere Ceremoniale in Bronzo della Montagna di Aronne",
          loreClue: "Il grande tripode votivo che segnava la tomba sacra del Sommo Sacerdote è stato scaraventato nel burrone."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.04,
          y: 70.03,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Bussola Navale Fenicia a Magnete Sommerso",
          loreClue: "Lo strumento segreto conservato dai mercanti di Petra per orientarsi nelle correnti oceaniche è stato asportato."
        }
      ];
    } else if (isLevelEightyOne) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 40.42, y: 21.76, radius: 5.0, name: "Il Pennone Segnaletico sul Crinale", loreClue: "Un'asta topografica in legno con bandierina triangolare di segnalazione è eretta sul crinale roccioso sopra la cascata." },
        { id: `lvl${id}_d2`, x: 15.00, y: 69.20, radius: 5.0, name: "La Lanterna a Cherosene sul Montante", loreClue: "Una lanterna ad uragano in ottone brunito è appesa al montante sinistro della passerella." },
        { id: `lvl${id}_d3`, x: 25.00, y: 70.87, radius: 5.0, name: "La Fune di Canapa sul Parapetto", loreClue: "Una matassa di corda di canapa Manila da arrampicata è arrotolata e fissata alla ringhiera." },
        { id: `lvl${id}_d4`, x: 35.83, y: 73.10, radius: 5.0, name: "Il Puntone d'Acciaio sotto la Trave", loreClue: "Un puntone diagonale di rinforzo in ferro battuto con rivetti è installato sotto la trave del ponteggio." },
        { id: `lvl${id}_d5`, x: 48.75, y: 72.54, radius: 5.0, name: "La Sigla NGS 1928 sul Pilone", loreClue: "Sulla superficie del pilone centrale compare la sigla a stencil nero della spedizione: NGS 1928." },
        { id: `lvl${id}_d6`, x: 59.58, y: 70.87, radius: 5.0, name: "La Palina Metrica a Bande", loreClue: "Una palina geodetica graduata a fasce alterne bianche e nere è appoggiata al parapetto." },
        { id: `lvl${id}_d7`, x: 70.83, y: 71.99, radius: 4.5, name: "Il Nastro di Seta Rosso sul Montante", loreClue: "Un nastro segnaletico di seta rosso cardinale sventola legato al montante della ringhiera." },
        { id: `lvl${id}_d8`, x: 81.67, y: 72.54, radius: 4.5, name: "La Targhetta in Bronzo della Passerella", loreClue: "Una piastrina d'ottone con la matricola del costruttore è rivettata al pilastro di destra." },
        { id: `lvl${id}_d9`, x: 92.50, y: 74.22, radius: 5.0, name: "La Cassa di Spedizione sul Deck", loreClue: "Una cassa di rifornimenti in legno massiccio con rinforzi angolari poggia sulle assi della passerella." },
        { id: `lvl${id}_d10`, x: 38.33, y: 90.40, radius: 5.0, name: "Il Martello da Geologo sulla Roccia", loreClue: "Un martello da geologo per l'assaggio della roccia basaltica è incastrato nella fessura tra i massi del torrente." },
      ];
    } else if (isLevelEightyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "Il Fronte Imponente del Salto San Martín", loreClue: "La possente cortina d'acqua che precipita per settanta metri scompare nel vapore." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "L'Arcobaleno Rifratto tra gli Spruzzi", loreClue: "Il doppio arco di colori generato dalla luce solare sulla nube di goccioline è svanito." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "La Cengia Rocciosa di Basalto Nero", loreClue: "La sporgenza vulcanica che divide i due salti della cascata appare levigata." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "Il Muro d'Acqua Spumeggiante a Sinistra", loreClue: "La colonna spumosa del getto laterale è stata sostituita da roccia asciutta." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "Il Bagliore del Sole Filtrante nella Nebbia", loreClue: "Il raggio dorato che squarcia il pulviscolo acqueo della gola è oscurato." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Parete di Scogliera Ricoperta di Muschio", loreClue: "I morbidi strati di muschio verde smeraldo abbarbicati alla roccia sono assenti." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "Il Gorgo Ribollente alla Base del Salto", loreClue: "I vortici d'acqua biancastra che si formano nel bacino inferiore appaiono calmi." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "I Massi Basaltici Levigati dalla Corrente", loreClue: "I blocchi scuri affioranti tra i flutti spumeggianti sono stati tolti." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Velo di Spruzzi sulla Vegetazione Rivierasca", loreClue: "La rugiada perenne che bagna le felci arboree sul costone roccioso è scomparsa." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Fiume Iguazú a Valle della Cascata", loreClue: "Il corso d'acqua che defluisce impetuoso verso la confluenza appare prosciugato." },
      ];
    } else if (isLevelEightyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "La Chioma della Felce Arborea Gigante", loreClue: "La fronda a ombrello della felce preistorica nell'angolo alto è stata rimossa." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Fiore Scarlatto della Passiflora Selvatica", loreClue: "La corolla cremisi della liana fiorita che pende dalla volta vegetale è scomparsa." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Cascatella Segreta nel Cuore della Selva", loreClue: "Il sottile rivolo d'acqua sorgiva che scende tra le rocce umide è prosciugato." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Il Tronco Secolare Ricoperto di Bromeliacee", loreClue: "Le piante epifite aggrappate alla corteccia muschiosa del grande albero sono svanite." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "L'Orchidea Gialla delle Foreste Subtropicali", loreClue: "I petali dorati del raro fiore nativo dell'Iguazú sono stati cancellati." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "La Cortina di Liane Pendenti dalla Volta", loreClue: "I fusti flessibili che collegano i rami più alti al sottobosco appaiono recisi." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "Le Grandi Foglie a Cuore del Filodendro", loreClue: "Il fitto strato di vegetazione palustre ai piedi della rupe è stato diradato." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Tappeto di Muschio sulla Roccia Vulcanica", loreClue: "La coltre vellutata che trattiene l'umidità sui sassi del torrente è assente." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "I Funghi Fosforescenti del Tronco Caduto", loreClue: "La colonia micotica che punteggia il legno marcescente è scomparsa dal sottobosco." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "La Pozza Limpida tra le Radici Aeree", loreClue: "Il piccolo specchio d'acqua formato dalle piogge tropicali appare colmato di fango." },
      ];
    } else if (isLevelEightyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Timpano Barocco Scolpito in Arenaria", loreClue: "Il coronamento curvilineo del portale della chiesa dei Gesuiti appare scalpellato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Il Bassorilievo dell'Angelo Guaraní Musicista", loreClue: "La figura alata intagliata nel pilastro con strumento a corda è svanita." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "La Parasta Angolare in Blocchi di Pietra Rossa", loreClue: "Il cantonale squadrato in pietra locale delle missioni è stato uniformato." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "L'Architrave del Grande Portale d'Ingresso", loreClue: "Il solenne trave orizzontale modanato che sovrasta il vano d'accesso è rimosso." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "Il Fregio a Volute e Motivi Floreali", loreClue: "I rilievi fogliacei d'ispirazione indigena sulla facciata risultano levigati." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Feritoia del Campanile delle Rovine", loreClue: "L'apertura ad arco per la campana che chiamava alla preghiera è stata murata." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "I Gradini del Sagrato in Arenaria Rossa", loreClue: "La gradinata monumentale consumata dai passi degli indigeni è spianata." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Muretto del Chiostro e del Collegio", loreClue: "I resti della corte quadrangolare dove risiedevano i padri gesuiti sono assenti." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "I Blocchi di Muratura a Secco Crollati", loreClue: "I massi squadrati caduti dall'abside durante l'abbandono sono stati rimossi." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Selciato Erboso dell'Antica Piazza d'Armi", loreClue: "I ciuffi d'erba che crescono tra i conci del cortile centrale sono livellati." },
      ];
    } else if (isLevelEightyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "Il Salto dei Tre Moschettieri sullo Sfondo", loreClue: "La triplice cascata che precipita con fragore è nascosta da una cortina di nebbia." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "L'Arcobaleno Completo sopra il Gommone", loreClue: "L'arco iris a semicerchio che incornicia la prua dell'imbarcazione è svanito." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "La Parete di Basalto Verticale a Destra", loreClue: "Il costone roccioso lavico esposto alla furia delle acque appare appiattito." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "Il Tubolare Arancione del Gommone d'Avventura", loreClue: "Il fianco pneumatico ad alta visibilità del battello è stato decolorato." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "I Giubbotti di Salvataggio dei Passeggeri", loreClue: "I salvagenti gialli e arancioni indossati dagli esploratori a bordo sono scomparsi." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Scia Spumeggiante dei Motori Fuoribordo", loreClue: "I turbini d'acqua sollevati dalle eliche nella risalita della corrente sono appiattiti." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "Il Faro di Prora della Barca di Salvataggio", loreClue: "Il proiettore nautico stagno installato sul rollbar è stato rimosso." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "La Matassa di Cime d'Ormeggio a Prua", loreClue: "La corda arancione da traino fissata alla bitta della tolda scompare dalla vista." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Lo Schiaffo d'Acqua Polverizzata sulla Chiglia", loreClue: "La coltre di gocce che investe i turisti in primo piano è assente." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "La Corrente Turbine del Fiume Inferiore", loreClue: "Le rapide turbolente che scorrono attorno alla passerella sono uniformate." },
      ];
    } else if (isLevelEightySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "La Confluenza tra il Fiume Iguazú e il Paraná", loreClue: "Il punto d'incontro delle acque dai due diversi colori scompare all'orizzonte." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "L'Obelisco Tripartito di Pietra Dipinta", loreClue: "Il cippo confinario con i colori nazionali al vertice del belvedere è rimosso." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Costa Brasiliana sulla Riva Opposta", loreClue: "La fitta scarpata verde del parco brasiliano appare priva di vegetazione." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Il Molo d'Ormeggio dei Traghetti Fluviali", loreClue: "La banchina d'imbarco per il passaggio tra le nazioni è stata cancellata." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "La Targa in Bronzo dell'Hito Tres Fronteras", loreClue: "L'iscrizione commemorativa dell'amicizia tra i tre popoli è stata scalpellata." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "Il Fusto del Lampione Panoramico della Terrazza", loreClue: "Il palo d'illuminazione in ferro battuto che orna il piazzale è scomparso." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Ringhiera di Protezione a Strapiombo", loreClue: "La balaustra metallica che protegge i visitatori sul belvedere è assente." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "La Panchina in Pietra del Piazzale Belvedere", loreClue: "Il sedile affacciato sulla gola dei due fiumi è stato rimosso." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Bandiera Nazionale sul Pennone", loreClue: "Il vessillo che sventola alla brezza del fiume scompare dall'asta." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Pavimento in Porfido del Piazzale Panoramico", loreClue: "I ciottoli geometrici della piazza monumentale risultano spianati." },
      ];
    } else if (isLevelEightySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "L'Arcata Centrale della Cattedrale di Trinidad", loreClue: "Il grande arco trionfale della navata crollata appare murato a filo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Il Campanile a Torre in Pietra Arenaria", loreClue: "La torre campanaria che dominava la valle del Paraná è scomparsa." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "La Nicchia Votiva degli Angeli Musicisti", loreClue: "L'edicola scolpita con putti che suonano il clavicembalo è stata raschiata." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "Il Portico della Cripta Sotterranea", loreClue: "L'accesso a volta che conduceva ai sepolcri dei missionari è occluso." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Colonna Flautata con Capitello Barocco", loreClue: "Il fusto cilindrico con scanalature dell'altare maggiore è stato asportato." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Pilastra della Sagrestia Monumentale", loreClue: "Il pilastro di sostegno che delimitava le stanze dei paramenti sacri è svanito." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "Il Pavimento a Grandi Lastre di Pietra", loreClue: "I massi sagomati che formavano il pavimento della navata centrale sono spianati." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Fregio della Trabeazione con Rilievi Sacri", loreClue: "La modanatura con foglie d'acanto e simboli eucaristici è piallata." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "I Gradini del Presbiterio dell'Altare", loreClue: "La rampa di tre scalini che elevava il sacerdote durante i riti è rimossa." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "La Base del Battistero in Marmo Locale", loreClue: "Il piedistallo ottagonale della vasca battesimale dei Guaraní è assente." },
      ];
    } else if (isLevelEightyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "La Cascata Frontale del Salto Bossetti", loreClue: "Il violento getto d'acqua che si getta nel vuoto a picco appare interrotto." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Muro di Roccia Nera Bagnato dagli Spruzzi", loreClue: "La parete basaltica lucida per l'acqua perenne risulta opaca e asciutta." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "La Nube di Vapore d'Acqua del Bacino", loreClue: "La nube perenne che si alza come fumo dalla base del salto è scomparsa." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "Il Parapetto in Grigliato Zincato del Ponte", loreClue: "La ringhiera di sicurezza della passerella a sbalzo è stata tolta." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "I Bulloni Strutturali della Passerella Sospesa", loreClue: "I giunti metallici che ancorano il camminamento alla falesia sono svaniti." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "Il Montante Principale del Balcone Panoramico", loreClue: "La trave d'acciaio che sorregge la terrazza sopra il baratro è assente." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "I Ciuffi di Felce abbarbicati al Trave", loreClue: "Le piante nane che crescono sul metallo umido della passerella sono tolte." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Il Riflesso Argenteo dell'Acqua Spumosa", loreClue: "I bagliori metallici prodotti dai flutti contro i pilastri sono attenuati." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "La Cassa dei Rifiuti per i Parchi Nazionali", loreClue: "Il contenitore verde mimetico per i visitatori sul ponte è stato rimosso." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Camminamento in Doghe Antiscivolo", loreClue: "Le fessure drenanti della piattaforma calpestabile appaiono livellate." },
      ];
    } else if (isLevelEightyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "La Punta Rossa del Becco del Tucano Toco", loreClue: "L'estremità cremisi del possente becco ricurvo è stata scolorita." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Macchia Nera Ovale sulla Mandibola", loreClue: "Il caratteristico ovale scuro che orna il becco arancione è scomparso." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Il Collare di Piume Bianche sul Petto", loreClue: "La candida bavetta piumata che contrasta con il corpo nero è assente." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "L'Occhio Cerchiato di Pelle Azzurra e Arancio", loreClue: "Il vivido anello perioculare celeste e giallo del volatile è sbiadito." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Il Piumaggio Nero Lucido dell'Ala Ripiegata", loreClue: "I riflessi corvini delle remiganti dell'ala sono stati uniformati." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "Il Sottocoda Rosso Fiammante dell'Uccello", loreClue: "Le penne scarlatte sotto la coda del tucano sono state ingrigite." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "I Piedi Zigodattili con Artigli sulla Corteccia", loreClue: "Le zampe grigie che stringono saldamente il ramo sono cancellate." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Ramo Tropicale con Fiori d'Hibiscus", loreClue: "Il ramo nodoso costellato di boccioli esotici su cui posa è privo di fiori." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "I Frutti Tropicali della Pianta del Sottobosco", loreClue: "Le bacche rosse selvatiche di cui si nutre il tucano sono state rimosse." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "La Foglia di Palma Sfrangiata dal Vento", loreClue: "La fronda a ventaglio che fa da sfondo al ritratto naturalistico è svanita." },
      ];
    } else if (isLevelNinety) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Vortice Centrale della Gola del Diavolo", loreClue: "L'abisso profondo ottantadue metri dove convergono quattordici salti è velato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "L'Immenso Arcobaleno Circolare sul Baratro", loreClue: "L'arcobaleno a tutto tondo che fluttua sopra il canyon d'acqua è scomparso." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Balcone Panoramico Finale Affacciato sul Salto", loreClue: "La terrazza panoramica sospesa nel vuoto della cascata è stata rimossa." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "Il Getto di Pulviscolo Sollevato a Cento Metri", loreClue: "La colossale colonna d'acqua nebulizzata che sale al cielo è assente." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Falesia Basaltica a Mezzaluna del Canyon", loreClue: "Il gigantesco anfiteatro roccioso che racchiude la gola appare appiattito." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "Il Volo dei Rondoni delle Cascate (Cypseloides)", loreClue: "I piccoli uccelli che nidificano dietro il muro d'acqua sono svaniti dal cielo." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "Il Parapetto Finale della Piattaforma Belveder", loreClue: "La ringhiera d'acciaio terminale dove si accalcano gli sguardi è tolta." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "La Luce Dorata del Tramonto sulle Masse d'Acqua", loreClue: "I riflessi ambrati del sole calante sulla schiuma della gola sono spenti." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "I Getti Secondari del Salto Floriano", loreClue: "Le cascate laterali che alimentano il bacino sono state prosciugate." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "La Passerella a Pilastri che Guida al Belvedere", loreClue: "Il lungo ponte pedonale che attraversa le isole del fiume è scomparso." },
      ];
    } else if (isStageNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 40.42, y: 21.76, radius: 5.0, name: "Il Pennone Segnaletico sul Crinale", loreClue: "Un'asta topografica in legno con bandierina triangolare di segnalazione è eretta sul crinale roccioso sopra la cascata." },
        { id: `lvl${id}_d2`, x: 15.00, y: 69.20, radius: 5.0, name: "La Lanterna a Cherosene sul Montante", loreClue: "Una lanterna ad uragano in ottone brunito è appesa al montante sinistro della passerella." },
        { id: `lvl${id}_d3`, x: 25.00, y: 70.87, radius: 5.0, name: "La Fune di Canapa sul Parapetto", loreClue: "Una matassa di corda di canapa Manila da arrampicata è arrotolata e fissata alla ringhiera." },
        { id: `lvl${id}_d4`, x: 35.83, y: 73.10, radius: 5.0, name: "Il Puntone d'Acciaio sotto la Trave", loreClue: "Un puntone diagonale di rinforzo in ferro battuto con rivetti è installato sotto la trave del ponteggio." },
        { id: `lvl${id}_d5`, x: 48.75, y: 72.54, radius: 5.0, name: "La Sigla NGS 1928 sul Pilone", loreClue: "Sulla superficie del pilone centrale compare la sigla a stencil nero della spedizione: NGS 1928." },
        { id: `lvl${id}_d6`, x: 59.58, y: 70.87, radius: 5.0, name: "La Palina Metrica a Bande", loreClue: "Una palina geodetica graduata a fasce alterne bianche e nere è appoggiata al parapetto." },
        { id: `lvl${id}_d7`, x: 70.83, y: 71.99, radius: 4.5, name: "Il Nastro di Seta Rosso sul Montante", loreClue: "Un nastro segnaletico di seta rosso cardinale sventola legato al montante della ringhiera." },
        { id: `lvl${id}_d8`, x: 81.67, y: 72.54, radius: 4.5, name: "La Targhetta in Bronzo della Passerella", loreClue: "Una piastrina d'ottone con la matricola del costruttore è rivettata al pilastro di destra." },
        { id: `lvl${id}_d9`, x: 92.50, y: 74.22, radius: 5.0, name: "La Cassa di Spedizione sul Deck", loreClue: "Una cassa di rifornimenti in legno massiccio con rinforzi angolari poggia sulle assi della passerella." },
        { id: `lvl${id}_d10`, x: 38.33, y: 90.40, radius: 5.0, name: "Il Martello da Geologo sulla Roccia", loreClue: "Un martello da geologo per l'assaggio della roccia basaltica è incastrato nella fessura tra i massi del torrente." },
      ];
    } else if (isLevelNinetyOne) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 16.67, y: 11.16, radius: 5.0, name: "Il Ramo della Zampa Anteriore", loreClue: "Un tratto ricurvo aggiuntivo prolunga l'artiglio della zampa anteriore sinistra del geoglifo." },
        { id: `lvl${id}_d2`, x: 41.67, y: 11.16, radius: 5.0, name: "La Linea tra le Zampe Destre", loreClue: "Una trincea rettilinea unisce la prima e la seconda zampa anteriore sul lato destro del ragno." },
        { id: `lvl${id}_d3`, x: 29.58, y: 21.76, radius: 5.0, name: "Il Pedipalpo Chiuso ad Anello", loreClue: "L'antenna cefalica destra forma un anello chiuso continuo anziché terminare a forcella aperta." },
        { id: `lvl${id}_d4`, x: 25.00, y: 49.11, radius: 5.0, name: "L'Incisione del Cefalotorace", loreClue: "Un solco rituale trasversale incide il punto di giunzione tra il capo e l'addome del ragno." },
        { id: `lvl${id}_d5`, x: 24.58, y: 78.13, radius: 5.0, name: "Il Disco Solare nell'Addome", loreClue: "Al centro del grande cerchio addominale compare un disco solare scavato nel terreno sabbioso." },
        { id: `lvl${id}_d6`, x: 6.25, y: 92.63, radius: 4.5, name: "Il Picchetto con Nastro Rosso", loreClue: "Un picchetto di rilevamento aerofotogrammetrico con nastro rosso è infisso nel terreno desertico." },
        { id: `lvl${id}_d7`, x: 36.67, y: 93.19, radius: 5.0, name: "Lo Sperone della Zampa Posteriore", loreClue: "Un'estensione ad angolo acuto si dirama verso destra dal punto terminale dell'ultima zampa posteriore." },
        { id: `lvl${id}_d8`, x: 55.83, y: 53.57, radius: 5.0, name: "Il Tumulo di Pietre all'Apice", loreClue: "Un cumulo di pietre scure vulcaniche definisce il vertice superiore del trapezio cerimoniale." },
        { id: `lvl${id}_d9`, x: 78.33, y: 66.96, radius: 5.0, name: "La Palina nel Solco Trapezoidale", loreClue: "Una palina metrica da rilievo a fasce bianche e nere è adagiata sul fondo della trincea." },
        { id: `lvl${id}_d10`, x: 68.33, y: 16.74, radius: 4.5, name: "Il Chiodo Geodetico al Crocevia", loreClue: "Un chiodo topografico di bronzo con testa riflettente è conficcato all'incrocio delle linee astronomiche." },
      ];
    } else if (isLevelNinetyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "Il Lungo Becco Rettilineo del Colibrì Sacro", loreClue: "La sottile trincea geoglifica che forma il becco lungo sessanta metri è svanita." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "L'Ala Destra Spiegata verso le Pampas", loreClue: "Le remiganti geometriche dell'ala settentrionale sono state cancellate dal suolo." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "Le Piume Caudali a Ventaglio Rituale", loreClue: "Il disegno a raggi della coda piumata appare levigato nella crosta desertica." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "La Trincea Geoglifica di Pietre Chiare", loreClue: "Il solco scavato nell'ossido ferroso che delinea il corpo dell'uccello è colmato." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "L'Ala Sinistra con Tratti Paralleli", loreClue: "Le piume stilizzate dell'ala meridionale svaniscono dalla piana di Nazca." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Testa Sferica con l'Occhio Votivo", loreClue: "Il profilo del capo dell'uccello divino appare spianato e uniforme." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "Il Tratto di Raccordo tra le Zampe", loreClue: "La linea continua che connette il torace alle zampe stilizzate è assente." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Il Terreno Desertico di Ciottoli Ferrosi", loreClue: "I sassi scuri ricchi di manganese che delimitano il profilo sono sparsi." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "La Linea Astronomica del Solstizio", loreClue: "La trincea retta che attraversa il disegno puntando all'orizzonte è scomparsa." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Tumulo Cerimoniale di Sassi Scuri", loreClue: "Il cumulo di pietre votive eretto alla punta dell'ala destra è stato rimosso." },
      ];
    } else if (isLevelNinetyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Le Cinque Dita della Mano Destra Stilizzata", loreClue: "La mano con dita articolate scolpita nel terreno arido è priva di contorno." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Coda a Spirale a Cerchi Concentrici", loreClue: "Il triplice giro armonico della coda del primate appare interrotto e spianato." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Mano Sinistra con Quattro Dita Sacre", loreClue: "La misteriosa mano a quattro dita tipica dell'iconografia nazca è scomparsa." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Il Dorso Arcuato del Primate della Pampa", loreClue: "La linea curva che definisce la schiena della scimmia svanisce nella terra." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "La Zampa Posteriore ancorata alla Linea Guida", loreClue: "L'arto inferiore che si raccorda al grande trapezio appare cancellato." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "Il Muso Allungato della Scimmia Amazzonica", loreClue: "I tratti della testa che evocano le specie delle foreste orientali sono levigati." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "Il Solco Scavato nell'Ossido di Ferro", loreClue: "La traccia chiara che mette in risalto il corpo scuro è colmata da sabbia." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "La Collina d'Arenaria Sovrastante", loreClue: "Il rilievo naturale da cui si ammira la figura del geoglifo è appiattito." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Linea Retta che Fende la Figura", loreClue: "Il solco cerimoniale posteriore che taglia il disegno appare saldato." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "La Trincea di Drenaggio Rituale", loreClue: "Il canale per il deflusso delle rare piogge attorno al disegno è assente." },
      ];
    } else if (isLevelNinetyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Becco Uncinato del Condor Andino", loreClue: "Il possente rostro ricurvo del rapace sacro al dio delle vette è svanito." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Le Penne Maestre Frastagliate dell'Ala Destra", loreClue: "Le terminazioni triangolari delle ali aperte per cento metri sono piallate." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Collo Piumato con Collare Cerimoniale", loreClue: "Il profilo ondulato della gola del condor appare livellato nella pampa." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "L'Ala Sinistra Aperta verso le Ande", loreClue: "La grandiosa ala spiegata verso la cordigliera scompare dalla veduta." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Coda Triangolare a Fasce Geometriche", loreClue: "Il motivo a ventaglio solcato alla base dell'uccello è stato raschiato." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "Gli Artigli Possenti Stilizzati sul Terreno", loreClue: "Le zampe da cacciatore disegnate con linea continua sono scomparse." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "La Cresta Caudale del Grande Rapace", loreClue: "Il vertice decorativo sulla sommità della coda del condor appare rimosso." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Ciottolato Rosso della Crosta Desertica", loreClue: "Il contrasto cromatico tra la ghiaia di superficie e il limo chiaro è attenuato." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "L'Asse d'Allineamento Solare del Disegno", loreClue: "La direttrice che collega il cuore del rapace alle stelle è svanita." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Tracciato Geodetico verso Cahuachi", loreClue: "La pista cerimoniale rettilinea che punta alla città santa è cancellata." },
      ];
    } else if (isLevelNinetyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "Il Centro della Spirale a Voluta Perfetta", loreClue: "Il nucleo della spirale sacra da cui partivano i pellegrinaggi è colmato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "L'Estremità Esterna del Braccio Rotante", loreClue: "La spira più ampia che si allarga nella pampa è priva di solco." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "Il Vertice Acuto del Trapezio Cerimoniale", loreClue: "L'angolo affilato della gigantesca figura geometrica appare smussato." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "La Corsia Lastricata delle Processioni", loreClue: "Il piano battuto dove sfilavano i fedeli durante i solstizi è cancellato." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "Il Triangolo Geoglifo di Calcare Chiaro", loreClue: "La vasta campitura ripulita dai ciottoli scuri appare ricoperta di sassi." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Trincea Perimetrale dell'Altopiano", loreClue: "Il bordo scavato che delinea la sagoma trapezoidale è livellato." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "Il Basamento del Segnale Topografico", loreClue: "Il cippo in pietra posto dagli archeologi all'apice del corridoio è rimosso." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Il Contrasto Cromatico tra Limo e Sassi", loreClue: "La superficie chiara d'argilla compressa risulta opacizzata dalla sabbia." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "La Fenditura Arida del Vento Paracas", loreClue: "Il solco naturale modellato dalle brezze marine è sigillato." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "La Linea Equinoziale verso l'Orizzonte", loreClue: "La retta chilometrica che guida lo sguardo verso il tramonto è svanita." },
      ];
    } else if (isLevelNinetySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "I Rami Sinuosi dell'Albero della Vita", loreClue: "Le biforcazioni curvilinee della chioma dell'albero sacro sono scomparse." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Tronco Slanciato del Grande Vegetale", loreClue: "Il solco verticale che sostiene l'intera figura arborea appare cancellato." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Le Radici Espanse a Ventaglio nella Terra", loreClue: "I tratti inferiori che simulano l'apparato radicale sono stati spianati." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Le Quattro Dita della Mano Sinistra Anomala", loreClue: "La mano con solo quattro dita accanto al tronco appare livellata." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Le Cinque Dita della Mano Destra", loreClue: "Le falangi stilizzate della seconda mano votiva sono svanite dal suolo." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "La Chioma a Lobi Stilizzati dell'Albero", loreClue: "I rigonfiamenti circolari alle punte dei rami sono stati tolti." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Traccia del Sentiero dei Custodi", loreClue: "Il percorso di ronda che costeggia il geoglifo è privo di delimitazione." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Fossato Cerimoniale tra le Figure", loreClue: "Lo spazio tra l'albero e le mani appare privo del disegno originale." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "Il Pendio Roccioso della Pampa Arida", loreClue: "La pendenza su cui è tracciata l'opera geoglifica appare appiattita." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "La Piattaforma d'Osservazione Maria Reiche", loreClue: "Il belvedere metallico sopraelevato per i viaggiatori è scomparso." },
      ];
    } else if (isLevelNinetySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Collo a Serpentina dell'Airone Gigante", loreClue: "I meandri sinuosi del lunghissimo collo dell'uccello sono stati raschiati." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Il Becco Acuminato che Fende il Deserto", loreClue: "La punta aguzza del becco da trampoliere scompare dalla piana." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Corpo Affusolato del Volatile Sacro", loreClue: "La campitura centrale del pellicano d'acqua dolce è spianata." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "Le Zampe Trampoliere Parallele", loreClue: "I due solchi rettilinei che sorreggono la figura sono stati colmati." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "Le Ali Racchiuse nel Profilo Lineare", loreClue: "I fasci geometrici che simulano le ali ripiegate appaiono uniformati." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Coda Geometrica a Strisce Solcate", loreClue: "I segmenti paralleli del piumaggio posteriore sono cancellati." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "La Linea Infinita che Parte dal Becco", loreClue: "Il tracciato rettilineo che prosegue per chilometri è svanito." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "La Crosta Argillosa di San José", loreClue: "Il suolo indurito dalle millenarie siccità appare dissodato." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "Il Cippo Geodetico d'Allineamento", loreClue: "Il segnale topografico d'orientamento solare è stato asportato." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Solco Cerimoniale delle Offerte", loreClue: "La canalina per le libagioni d'acqua di fonte è priva di traccia." },
      ];
    } else if (isLevelNinetyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "La Testa Rotonda con Grandi Occhi da Gufo", loreClue: "Il viso circolare con le misteriose orbite ipnotiche è scomparso dalla collina." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Braccio Destro Alzato in Segno di Saluto", loreClue: "L'arto sollevato verso il cielo che accoglie i pellegrini è cancellato." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "Il Corpo Trapezoidale sulla China Rocciosa", loreClue: "La tunica squadrata della figura antropomorfa appare levigata." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "Il Braccio Sinistro Lungo il Fianco", loreClue: "La linea dell'arto disteso verso il basso svanisce nella roccia." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "I Calzari Massicci del Viaggiatore Astrale", loreClue: "I piedi stilizzati posati sul costone della pampa sono assenti." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "Il Costone Ripido della Collina d'Arenaria", loreClue: "La scarpata naturale su cui spicca l'astronauta appare appiattita." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "I Massi di Delimitazione del Bordo Sacro", loreClue: "Le pietre scure allineate per dare rilievo alla sagoma sono tolte." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "L'Elmo Circolare attorno al Volto", loreClue: "L'aureola misteriosa che circonda il capo è stata livellata." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "La Linea di Cresta della Collina", loreClue: "Il profilo montuoso che incornicia la figura scompare nel cielo." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "La Conoide Alluvionale ai Piedi del Colle", loreClue: "La ghiaia scesa dal monte alla base del geoglifo è spianata." },
      ];
    } else if (isLevelNinetyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "La Terrazza Sommitale della Grande Piramide", loreClue: "Il piano più alto del tempio piramidale di Cahuachi è scomparso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "I Muri in Mattoni Conici di Fango e Paglia", loreClue: "I conci d'adobe modellati a mano per la facciata sono stati livellati." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Piazza Cerimoniale delle Grandi Adunate", loreClue: "Il cortile poligonale per le feste solari appare colmato di sabbia." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "La Scalinata Monumentale d'Accesso", loreClue: "La ripida rampa di gradini in argilla cotta al sole è spianata." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Il Tempio a Gradoni del Settore Centrale", loreClue: "Le terrazze sovrapposte del santuario principale sono scomparse." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "I Pali Rituali in Legno di Huarango", loreClue: "I tronchi d'albero sacro piantati nel pavimento cerimoniale sono assenti." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Corte delle Offerte di Ceramiche Dipinte", loreClue: "La vasca dove venivano infranti i vasi policromi è colmata." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "La Cinta Muraria in Adobe delle Rovine", loreClue: "I bastioni difensivi della metropoli cerimoniale risultano crollati." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "Le Tombe Ipogee Scavate nella Ghiaia", loreClue: "I vani funerari dei sacerdoti mummificati sono stati murati." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Velo di Foschia sulla Valle del Fiume Nazca", loreClue: "I vapori d'umidità che risalgono dal letto fluviale sono svaniti." },
      ];
    } else if (isLevelOneHundred) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "La Spirale d'Accesso in Ciottoli di Fiume", loreClue: "L'apertura a spirale discendente verso l'acqua sorgiva è spianata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "L'Imboccatura del Pozzo Sotterraneo", loreClue: "Il cunicolo a volta che sprofonda nella falda freatica è occluso." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "I Muri a Secco Concentrici del Puquio", loreClue: "Le pietre arrotondate incastrate senza malta sono svanite dal condotto." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "Il Canale d'Acqua Smeraldo sul Fondo", loreClue: "La vena idrica perenne che scorre sotto il deserto appare prosciugata." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Seconda Spirale Gemella di Ventilazione", loreClue: "Il camino d'aerazione parallelo per i canali ipogei è stato rimosso." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "Il Lastricato di Pietre del Camminamento", loreClue: "I gradini concentrici per la manutenzione delle acque sono livellati." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "Gli Alberi di Huarango Ombreggianti", loreClue: "I rami frondosi che riparano il puquio dall'evaporazione sono tolti." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Canale di Sfioro verso i Campi Irrigati", loreClue: "La canaletta che distribuisce l'acqua alle oasi è interrotta." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "La Paratoia in Pietra dei Guardiani dell'Acqua", loreClue: "La lastra che regolava il deflusso irriguo è scomparsa." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "La Conca Fertile Circondata dal Deserto", loreClue: "Il contrasto verdeggiante tra l'oasi coltivata e la sabbia è attenuato." },
      ];
    } else if (isStageTen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 16.67, y: 11.16, radius: 5.0, name: "Il Ramo della Zampa Anteriore", loreClue: "Un tratto ricurvo aggiuntivo prolunga l'artiglio della zampa anteriore sinistra del geoglifo." },
        { id: `lvl${id}_d2`, x: 41.67, y: 11.16, radius: 5.0, name: "La Linea tra le Zampe Destre", loreClue: "Una trincea rettilinea unisce la prima e la seconda zampa anteriore sul lato destro del ragno." },
        { id: `lvl${id}_d3`, x: 29.58, y: 21.76, radius: 5.0, name: "Il Pedipalpo Chiuso ad Anello", loreClue: "L'antenna cefalica destra forma un anello chiuso continuo anziché terminare a forcella aperta." },
        { id: `lvl${id}_d4`, x: 25.00, y: 49.11, radius: 5.0, name: "L'Incisione del Cefalotorace", loreClue: "Un solco rituale trasversale incide il punto di giunzione tra il capo e l'addome del ragno." },
        { id: `lvl${id}_d5`, x: 24.58, y: 78.13, radius: 5.0, name: "Il Disco Solare nell'Addome", loreClue: "Al centro del grande cerchio addominale compare un disco solare scavato nel terreno sabbioso." },
        { id: `lvl${id}_d6`, x: 6.25, y: 92.63, radius: 4.5, name: "Il Picchetto con Nastro Rosso", loreClue: "Un picchetto di rilevamento aerofotogrammetrico con nastro rosso è infisso nel terreno desertico." },
        { id: `lvl${id}_d7`, x: 36.67, y: 93.19, radius: 5.0, name: "Lo Sperone della Zampa Posteriore", loreClue: "Un'estensione ad angolo acuto si dirama verso destra dal punto terminale dell'ultima zampa posteriore." },
        { id: `lvl${id}_d8`, x: 55.83, y: 53.57, radius: 5.0, name: "Il Tumulo di Pietre all'Apice", loreClue: "Un cumulo di pietre scure vulcaniche definisce il vertice superiore del trapezio cerimoniale." },
        { id: `lvl${id}_d9`, x: 78.33, y: 66.96, radius: 5.0, name: "La Palina nel Solco Trapezoidale", loreClue: "Una palina metrica da rilievo a fasce bianche e nere è adagiata sul fondo della trincea." },
        { id: `lvl${id}_d10`, x: 68.33, y: 16.74, radius: 4.5, name: "Il Chiodo Geodetico al Crocevia", loreClue: "Un chiodo topografico di bronzo con testa riflettente è conficcato all'incrocio delle linee astronomiche." },
      ];
    } else if (isLevelOneHundredOne) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 72.92, y: 40.18, radius: 5.0, name: "L'Idolo Solare nella Finestra", loreClue: "Una statuetta votiva incisa nella pietra riposa sul vano della finestra trapezoidale del tempio." },
        { id: `lvl${id}_d2`, x: 86.67, y: 29.58, radius: 5.0, name: "Il Disco Solare sull'Architrave", loreClue: "Un disco solare cerimoniale con quattro raggi cardinali è scolpito sull'architrave monolitico." },
        { id: `lvl${id}_d3`, x: 53.33, y: 59.15, radius: 4.5, name: "La Mappa nella Mano dell'Esploratore", loreClue: "Il cannocchiale d'ottone è sostituito da una pergamena topografica arrotolata con sigillo di ceralacca." },
        { id: `lvl${id}_d4`, x: 54.58, y: 38.17, radius: 4.5, name: "La Fascia di Lana Rossa sul Cappello", loreClue: "Una fascia tradizionale andina in lana di vigogna rossa avvolge la cupola del cappello del giovane." },
        { id: `lvl${id}_d5`, x: 32.92, y: 77.01, radius: 5.0, name: "Il Martello da Geologo sul Blocco", loreClue: "Un martello da geologo con manico in legno di frassino è posato sul blocco megalitico in primo piano." },
        { id: `lvl${id}_d6`, x: 16.67, y: 22.32, radius: 4.5, name: "Il Chiodo da Roccia con Fune nel Concio", loreClue: "Un chiodo da arrampicata in ferro battuto con spezzone di fune di canapa è piantato nella commettitura ciclopica." },
        { id: `lvl${id}_d7`, x: 9.17, y: 49.11, radius: 5.0, name: "La Palina Metrica sulla Ripa Erbosa", loreClue: "Una palina geodetica graduata a bande bicolori è piantata sul pendio erboso a sinistra." },
        { id: `lvl${id}_d8`, x: 64.58, y: 44.64, radius: 4.5, name: "Le Felci Montane nella Fessura", loreClue: "Ciuffi di felce andina con piccole fronde crescono all'interno della fessura tra i blocchi megalitici." },
        { id: `lvl${id}_d9`, x: 74.17, y: 10.60, radius: 4.5, name: "La Bandierina sulla Cresta Sommitale", loreClue: "Un'asta topografica con bandierina rossa triangolare svetta sul punto più alto della muraglia." },
        { id: `lvl${id}_d10`, x: 15.83, y: 80.36, radius: 5.0, name: "Il Taccuino di Scavo tra le Erbe", loreClue: "Un taccuino di scavo rilegato in cuoio con nastro segnalibro spunta tra i cespugli alla base del tempio." },
      ];
    } else if (isLevelOneHundredTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "La Finestra Trapezoidale del Solstizio d'Inverno", loreClue: "L'apertura sacra attraverso cui il raggio solare colpisce l'altare è colmata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Muro Curvilineo in Granito del Torreón", loreClue: "La perfetta curvatura dei conci di pietra levigati senza malta appare spianata." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "La Roccia Naturale Sagomata all'Interno", loreClue: "L'altare monolitico emergente dal pavimento della torre è svanito." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "La Finestra Orientata al Solstizio d'Estate", loreClue: "La seconda finestra cerimoniale con pioli d'ancoraggio è murata a filo." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "L'Ingresso Monumentale a Stipiti Sdoppiati", loreClue: "Il portale reale riservato all'Inca e ai sacerdoti è privo di modanatura." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Caverna Ipogea del Mausoleo Reale", loreClue: "L'accesso sotterraneo alla cripta rivestita di pietra bianca è occluso." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "I Conci di Granito Bianco Rifiniti a Specchio", loreClue: "I massi a commettitura invisibile della facciata risultano irregolari." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Il Canale di Drenaggio delle Piogge Andine", loreClue: "La canaletta scavata nel masso per l'acqua cerimoniale è assente." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Belvedere a Strapiombo sul Fiume Urubamba", loreClue: "La balaustra naturale di roccia affacciata sul torrente è stata tolta." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Gradino Cerimoniale delle Offerte Solari", loreClue: "La mensa litica su cui si versava la chicha rituale è levigata." },
      ];
    } else if (isLevelOneHundredThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Portale ad Arco Trapezoidale di Intipunku", loreClue: "Il varco d'ingresso imperiale alla Porta del Sole appare livellato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Vista Panoramica sulla Cittadella", loreClue: "La vista a volo d'uccello sui tetti e terrazze svanisce nella foschia." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Cresta Montuosa del Monte Machu Picchu", loreClue: "Il profilo boscoso della vetta che sovrasta il colle è oscurato." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "La Scalinata in Pietra dell'Inca Trail", loreClue: "I ripidi gradini montani battuti dai pellegrini sono stati spianati." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Il Muretto della Guarnigione di Guardia", loreClue: "I resti del posto di blocco dei soldati dell'Inca sono rimossi." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "La Nube di Vapore Risalente dalla Gola", loreClue: "I vapori termali che salgono dal canyon dell'Urubamba sono dissolti." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Terrazza Belvedere Lastricata", loreClue: "Il piano battuto in lastre di calcare del belvedere è cancellato." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Cippo Topografico con Segnale", loreClue: "Il pilastrino di rilevamento geodetico sulla cresta è stato tolto." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "Le Felci Giganti della Selva Nebulosa", loreClue: "I grandi arbusti preistorici sul bordo del sentiero sono assenti." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "La Palina Metrica dei Primi Rilievi", loreClue: "L'asta geodetica graduata appoggiata al muretto è svanita." },
      ];
    } else if (isLevelOneHundredFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Picco Piramidale del Wayna Picchu", loreClue: "Il corno roccioso che fa da sfondo iconico alla rocca scompare nel cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "I Gradini della Morte a Strapiombo", loreClue: "La vertiginosa scalinata incisa sul fianco del picco è stata cancellata." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Tempio della Luna nella Grotta Segreta", loreClue: "L'ingresso monumentale al santuario rupestre nascosto è occluso." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "I Terrazzamenti Pensili Sospesi sulle Nubi", loreClue: "I gradini coltivati a mezza costa sulla falesia sono spianati." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "Il Settore delle Dimore degli Artigiani", loreClue: "Le capanne dei mosaicisti alla sella della montagna sono scomparse." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Vegetazione Lussureggiante sul Dirupo", loreClue: "Le orchidee e i muschi aggrappati alla parete verticale sono rimossi." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "La Nebbia Mattutina Attorno alla Cima", loreClue: "La caratteristica corona di nubi che avvolge la cima è svanita." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Parapetto Naturale di Granito Grigio", loreClue: "La roccia affilata che proteggeva il sentiero di cresta è smussata." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "La Rampa d'Accesso con Funi di Sicurezza", loreClue: "Il corrimano metallico moderno per i trekker è stato rimosso." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Trono Litico dei Sacerdoti Solari", loreClue: "Il seggio scavato sulla punta più alta per scrutare gli astri è assente." },
      ];
    } else if (isLevelOneHundredFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "Il Lama Bianco e Marrone al Pascolo", loreClue: "L'esemplare di camelide andino che bruca sul ciglio è scomparso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "I Muri di Sostegno Megalitici a Terrazza", loreClue: "I muri di contenimento in blocchi poligonali appaiono livellati." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "Il Canale d'Irrigazione con Acqua Sorgiva", loreClue: "La canaletta in pietra che bagnava i coltivi andini è prosciugata." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "Il Secondo Cucciolo di Lama sulle Erbe", loreClue: "Il piccolo di lama sdraiato all'ombra del muretto è svanito." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "Il Sentiero Lastricato tra i Terrazzamenti", loreClue: "La rampa di gradini che collega i vari livelli agricoli è spianata." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "Le Spighe di Mais Andino sui Gradoni", loreClue: "Le coltivazioni sperimentali della terrazza cerimoniale sono tolte." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "Il Terrapieno di Drenaggio con Ghiaia", loreClue: "Gli strati di pietrisco per impedire le frane risultano rimossi." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "La Capanna Ricostruita del Guardiano", loreClue: "Il rifugio in pietra con tetto di paglia ichu è scomparso." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Panorama sui Contrafforti della Cordigliera", loreClue: "I monti innevati che coronano l'orizzonte sono coperti di foschia." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "I Sassi di Calpestio per i Contadini", loreClue: "Le pietre sporgenti inserite nei muri per scavalcare i gradoni sono assenti." },
      ];
    } else if (isLevelOneHundredSix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Grande Blocco Monolitico a Tre Finestre", loreClue: "Il gigantesco masso megalitico della parete est appare uniformato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Commettitura Ciclopica del Tempio Principale", loreClue: "Gli incastri millimetrici dei blocchi sismici risultano sconnessi." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Il Sedile Cerimoniale nella Roccia Viva", loreClue: "Lo scranno d'onore dei nobili scolpito nella corte è stato raschiato." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Le Tre Finestre Trapezoidali Sacre", loreClue: "I vani orientati all'alba delle tre tribù fondatrici sono murati." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Il Pavimento Spianato della Piazza Sacra", loreClue: "La grande spianata di limo calpestato per i riti solari è solcata." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "Il Cippo Centrale delle Misurazioni", loreClue: "Il blocco d'orientamento astronomico al centro del cortile è rimosso." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Casa del Sacerdote con Pareti Integre", loreClue: "L'edificio residenziale del clero solare appare privo di mura." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Muro Divisorio del Quartiere Reale", loreClue: "La barriera di conci squadrati che separava i nobili è scomparsa." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Fessura Sismica tra i Blocchi Megalitici", loreClue: "La frattura causata dal terremoto del 1950 sulla parete è saldata." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "La Veduta sugli Spiriti Montani (Apus)", loreClue: "Le vette sacre circostanti considerate divinità svaniscono nel cielo." },
      ];
    } else if (isLevelOneHundredSeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Getto d'Acqua della Fontana Principale", loreClue: "Il limpido flusso sorgivo che sgorga dal beccuccio di pietra è estinto." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "La Vasca Monolitica Scavata nel Granito", loreClue: "Il bacino rettangolare intagliato in un unico blocco è colmato." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Beccuccio di Pietra per l'Acqua Sacra", loreClue: "Il condotto sagomato che convoglia l'acqua alla vasca è scalpellato." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "I Gradini di Raccordo tra le Fontane Litiche", loreClue: "La rampa di scalini che segue la cascata delle sedici fontane è spianata." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "Il Cunicolo Sotterraneo di Captazione", loreClue: "Il passaggio ipogeo che porta l'acqua dalla montagna è occluso." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Canaletta di Sfioro della Vasca Inferiore", loreClue: "Il canale di scarico verso le fontane successive è privo di solco." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "La Nicchia di Purificazione Rituale", loreClue: "L'edicola cerimoniale dove i pellegrini si lavavano è murata a filo." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Le Offerte Votive di Conchiglie Spondylus", loreClue: "I gusci sacri di mollusco depositati sul bordo della vasca sono assenti." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "La Parete a Secco di Contenimento Idrico", loreClue: "Il muro protettivo attorno alla sorgente montana è stato rimosso." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Pozzetto di Decantazione dei Fanghi", loreClue: "La piccola vasca di filtraggio dell'acqua è colmata di sassi." },
      ];
    } else if (isLevelOneHundredEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "L'Ala Sinistra di Roccia Viva del Condor", loreClue: "La naturale formazione rocciosa che simula l'ala spiegate è spianata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "L'Ala Destra Slanciata verso l'Alto", loreClue: "Il secondo blocco granitico che forma la possente ala è scomparso." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "La Testa Scolpita del Condor sul Pavimento", loreClue: "Il profilo del muso con il becco triangolare e la caruncola è levigato." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "Il Foro Cerimoniale delle Libagioni", loreClue: "Il pozzetto di scolo per il sangue dei sacrifici sul becco è colmato." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "La Grotta Sotterranea sotto il Corpo", loreClue: "L'antro ipogeo dove risiedevano le mummie degli antenati è murato." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "Le Nicchie Trapezoidali delle Offerte", loreClue: "I vani a parete per statuette votive d'oro e ceramica sono raschiati." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "La Scaletta Segreta Incisa dietro l'Ala", loreClue: "I ripidi scalini che salgono all'osservatorio superiore sono tolti." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Il Pavimento Levigato Attorno alla Testa", loreClue: "Le lastre di granito su cui si inginocchiavano i devoti sono spianate." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "La Cella di Detenzione dei Prigionieri", loreClue: "La nicchia rocciosa dove venivano rinchiusi i colpevoli è priva di vano." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Blocco Sacrificale di Pietra Nera", loreClue: "La mensa d'offerta posata dinanzi alla testa dell'uccello è assente." },
      ];
    } else if (isLevelOneHundredNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "L'Asse di Legno Rimovibile del Ponte Inca", loreClue: "I tronchi di frassino che colmano il vuoto della gola sono scomparsi." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Passaggio Tagliato a Strapiombo", loreClue: "La stretta cengia scavata a picco sulla falesia granitica è appiattita." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Il Precipizio di Seicento Metri sul Vuoto", loreClue: "Il terrificante baratro sottostante il camminamento appare smussato." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Il Muro a Secco di Raccordo della Cengia", loreClue: "La muratura ciclopica costruita per sostenere il ponte è crollata." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "La Fune di Sicurezza in Acciaio Ancorata", loreClue: "Il cavo d'arrampicata per i guardiani del parco è stato rimosso." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "Il Portale di Controllo Militare della Gola", loreClue: "L'arco di pietra dove le sentinelle sbarravano l'accesso è assente." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Fitta Giungla Andina nel Baratro", loreClue: "La lussureggiante vegetazione subtropicale in fondo alla gola è sfumata." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Sentiero Panoramico a Mezza Costa", loreClue: "La traccia battuta che conduce al ponte segreto è cancellata." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "I Gradini di Granito Tagliati a Mano", loreClue: "La rampa di scalini a sbalzo sulla roccia viva è spianata." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "La Targa di Divieto per i Turisti", loreClue: "Il cartello in legno d'allerta per il precipizio è stato tolto." },
      ];
    } else if (isLevelOneHundredTen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Bagliore Cremisi del Tramonto sulle Mura", loreClue: "I riflessi dorati del sole calante che infiammano i templi sono spenti." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Il Mare di Nuvole nella Valle dell'Urubamba", loreClue: "La coltre soffice di vapori bianchi che riempie il canyon è svanita." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Cielo Porpora sopra il Wayna Picchu", loreClue: "Le sfumature viola e arancioni del crepuscolo andino sono scolorite." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "I Tetti di Paglia Ricostruiti in Ombra", loreClue: "Le coperture coniche in ichu degli edifici imperiali sono assenti." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Foschia Azzurrognola tra le Terrazze", loreClue: "I fumi d'umidità serale che risalgono le gradinate sono dissolti." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "L'Ombra Allungata dell'Intihuatana", loreClue: "L'ombra proiettata dalla meridiana solare sulla piazza è scomparsa." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "I Profili Scuri dei Ghiacciai all'Orizzonte", loreClue: "Le vette innevate della Cordigliera Vilcabamba svaniscono nel buio." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "La Scia di Nubi che Carezza la Falesia", loreClue: "Il nastro di nebbia sospeso tra i dirupi della cittadella è assente." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "Il Bagliore delle Prime Stelle Andine", loreClue: "I punti luminosi che compaiono sulla volta celeste sono spenti." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "La Quiete Solenne della Rocca Rivelata", loreClue: "La magica atmosfera del crepuscolo sul santuario appare velata." },
      ];
    } else if (isStageEleven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 72.92, y: 40.18, radius: 5.0, name: "L'Idolo Solare nella Finestra", loreClue: "Una statuetta votiva incisa nella pietra riposa sul vano della finestra trapezoidale del tempio." },
        { id: `lvl${id}_d2`, x: 86.67, y: 29.58, radius: 5.0, name: "Il Disco Solare sull'Architrave", loreClue: "Un disco solare cerimoniale con quattro raggi cardinali è scolpito sull'architrave monolitico." },
        { id: `lvl${id}_d3`, x: 53.33, y: 59.15, radius: 4.5, name: "La Mappa nella Mano dell'Esploratore", loreClue: "Il cannocchiale d'ottone è sostituito da una pergamena topografica arrotolata con sigillo di ceralacca." },
        { id: `lvl${id}_d4`, x: 54.58, y: 38.17, radius: 4.5, name: "La Fascia di Lana Rossa sul Cappello", loreClue: "Una fascia tradizionale andina in lana di vigogna rossa avvolge la cupola del cappello del giovane." },
        { id: `lvl${id}_d5`, x: 32.92, y: 77.01, radius: 5.0, name: "Il Martello da Geologo sul Blocco", loreClue: "Un martello da geologo con manico in legno di frassino è posato sul blocco megalitico in primo piano." },
        { id: `lvl${id}_d6`, x: 16.67, y: 22.32, radius: 4.5, name: "Il Chiodo da Roccia con Fune nel Concio", loreClue: "Un chiodo da arrampicata in ferro battuto con spezzone di fune di canapa è piantato nella commettitura ciclopica." },
        { id: `lvl${id}_d7`, x: 9.17, y: 49.11, radius: 5.0, name: "La Palina Metrica sulla Ripa Erbosa", loreClue: "Una palina geodetica graduata a bande bicolori è piantata sul pendio erboso a sinistra." },
        { id: `lvl${id}_d8`, x: 64.58, y: 44.64, radius: 4.5, name: "Le Felci Montane nella Fessura", loreClue: "Ciuffi di felce andina con piccole fronde crescono all'interno della fessura tra i blocchi megalitici." },
        { id: `lvl${id}_d9`, x: 74.17, y: 10.60, radius: 4.5, name: "La Bandierina sulla Cresta Sommitale", loreClue: "Un'asta topografica con bandierina rossa triangolare svetta sul punto più alto della muraglia." },
        { id: `lvl${id}_d10`, x: 15.83, y: 80.36, radius: 5.0, name: "Il Taccuino di Scavo tra le Erbe", loreClue: "Un taccuino di scavo rilegato in cuoio con nastro segnalibro spunta tra i cespugli alla base del tempio." },
      ];
    } else if (isLevelOneHundredEleven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 62.33, y: 20.31, radius: 5.0, name: "Il Medaglione d'Oro Solare sull'Architrave", loreClue: "Un medaglione votivo in oro massiccio cesellato con il volto del dio Sole splende sul fregio sommitale del portale." },
        { id: `lvl${id}_d2`, x: 75.83, y: 36.83, radius: 4.5, name: "L'Occhio di Giada del Serpente di Pietra", loreClue: "Un cabochon di giada verde imperiale è incastonato nell'orbita del serpente piumato scolpito sullo stipite." },
        { id: `lvl${id}_d3`, x: 53.33, y: 25.67, radius: 4.5, name: "Il Pettorale Lunare sul Condor Reale", loreClue: "Una lamina d'oro a forma di mezzaluna rituale orna il petto del condor scolpito a sinistra dell'apertura." },
        { id: `lvl${id}_d4`, x: 24.92, y: 76.00, radius: 5.0, name: "Il Lume a Petrolio Spento sul Fusto", loreClue: "La fiammella della lanterna Hurricane è estinta e il lucignolo è annerito dalla brezza della cascata." },
        { id: `lvl${id}_d5`, x: 31.67, y: 64.17, radius: 4.5, name: "Il Tamburo Graduato del Teodolite Ruotato", loreClue: "La ghiera micrometrica in ottone dell'asse orizzontale è stata ruotata di novanta gradi per le misurazioni astronomiche." },
        { id: `lvl${id}_d6`, x: 36.67, y: 81.47, radius: 4.5, name: "Il Cartellino di Catalogazione sulla Gomena", loreClue: "Un cartellino d'inventario della spedizione con nastro in seta rossa pende dalla fune di canapa." },
        { id: `lvl${id}_d7`, x: 45.00, y: 94.31, radius: 4.5, name: "Il Filo a Piombo accanto alla Vanga", loreClue: "Un filo a piombo con piombino conico in ottone lucido è posato sulla terra vulcanica a ridosso del ferro della vanga." },
        { id: `lvl${id}_d8`, x: 18.33, y: 53.01, radius: 4.5, name: "La Sciarpa di Seta Rossa sul Casco Coloniale", loreClue: "Una sciarpa cerimoniale in seta rossa è annodata attorno alla cupola del casco coloniale del capo spedizione." },
        { id: `lvl${id}_d9`, x: 84.17, y: 87.05, radius: 4.5, name: "Il Calice Kero di Bronzo sulla Roccia", loreClue: "Un bicchiere cerimoniale Kero di bronzo patinato riposa tra il muschio umido ai piedi della scalinata." },
        { id: `lvl${id}_d10`, x: 55.00, y: 69.20, radius: 5.0, name: "Il Riflesso della Chakana nella Laguna", loreClue: "Il riflesso speculare del sacro simbolo a gradoni della croce andina increspa la superficie dell'acqua scura." },
      ];
    } else if (isLevelOneHundredTwelve) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "I Volti Solari Incisi sulla Roccia di Pusharo", loreClue: "I volti enigmatici scolpiti nella pietra arenaria della falesia sono scalpellati." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Serpente Bicéfalo a Guardia del Portale", loreClue: "Il profilo sinuoso del serpente sacro a due teste è svanito dal rilievo." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "La Spirale Cosmica che Segna la Rotta Fluviale", loreClue: "La voluta intagliata che indica la via per la città d'oro appare colmata." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "La Fenditura Carsica Dietro la Parete Incisa", loreClue: "La profonda fenditura naturale tra le rocce sacre appare sigillata." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "I Simboli Geometrici Tocapu sulla Pietra", loreClue: "I quadrati sacri con i codici dell'Inca sono stati raschiati dal masso." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Macchia di Quarzo Bianco Incastonata", loreClue: "Il cristallo lucente inserito nell'orbita del volto solare è stato asportato." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "Il Nastro d'Acqua Limpida che Lambisce la Parete", loreClue: "Il rivolo di fonte che scorre ai piedi dei petroglifi è prosciugato." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Le Tracce d'Ocra Rossa sui Contorni", loreClue: "I pigmenti minerali rossi usati per colorare i rilievi sono scoloriti." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "I Ciottoli Fluviali Levigati sulla Sponda", loreClue: "I sassi arrotondati della riva del fiume Sinkibenia sono stati tolti." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "L'Arco di Muschio Verde sulla Sommità", loreClue: "La vegetazione epifita che incornicia la parete rupestre è scomparsa." },
      ];
    } else if (isLevelOneHundredThirteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "La Chioma Maestosa dell'Albero di Lupuna", loreClue: "La gigantesca cupola dell'albero sacro della selva amazzonica è svanita." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Coppia di Ara Scarlatti in Volo", loreClue: "I due pappagalli dalle ali rosse e azzurre che solcano il cielo sono assenti." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Il Fascio di Luce Solare tra le Fronde", loreClue: "I raggi di sole che penetrano nella penombra della giungla sono spenti." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "La Grande Liana a U Sospesa sull'Acqua", loreClue: "Il fusto flessibile che dondola sopra la laguna appare reciso." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Le Felci Arboree del Sottobosco Primordiale", loreClue: "I grandi cespugli frondosi alla base dei tronchi sono stati diradati." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "L'Orchidea Viola Fiorita sulla Corteccia", loreClue: "La rara orchidea selvatica che spunta tra il muschio è scomparsa." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Farfalla Morpho Blu sulla Foglia", loreClue: "Il bagliore blu cobalto delle ali della farfalla tropicale è svanito." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Riflesso Smeraldo della Laguna nel Fogliame", loreClue: "La limpida superficie dell'acqua scura della selva appare opaca." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "Le Radici a Contrafforte del Tronco", loreClue: "I possenti contrafforti lignei che ancorano l'albero al suolo sono livellati." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Ramo Fiorito di Bromeliacee Rosse", loreClue: "Le infiorescenze fiammeggianti che coronano il ramo alto sono assenti." },
      ];
    } else if (isLevelOneHundredFourteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "La Cortina d'Acqua Turchese del Salto", loreClue: "Il maestoso getto della cascata segreta nel cuore della foresta è interrotto." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "La Pozza di Giada alla Base del Salto", loreClue: "Il laghetto limpido verde smeraldo formato dalle acque appare torbido." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Velo di Vapore Acqueo Dorato dal Sole", loreClue: "La nuvola di goccioline sospesa che risplende nella luce è dissolta." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "La Grotta Nascosta Dietro la Cascata", loreClue: "L'antro ipogeo che si apre dietro il muro d'acqua è stato murato." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "I Massi Vulcanici Ricoperti di Muschio", loreClue: "I massi lisci su cui si frangono i flutti sono privi di muschio." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "Le Piante Carnivore sulla Parete Bagnata", loreClue: "Le particolari piante palustri che crescono sulla rupe sono rimosse." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "Il Ciuffo di Canne di Bambù Selvatico", loreClue: "I fusti dorati del bambù amazzonico sulla sponda sono stati tagliati." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Tronco Fossile Incagliato tra i Sassi", loreClue: "L'antico albero pietrificato che emerge dal bacino è scomparso." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "La Schiuma Bianchissima attorno alla Roccia", loreClue: "I cerchi di spuma generati dalla caduta dell'acqua sono appiattiti." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "La Farfalla Gialla Posata sulla Pietra", loreClue: "Il piccolo lepidottero dorato che beve sul sasso umido è assente." },
      ];
    } else if (isLevelOneHundredFifteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "I Terrazzamenti con i Lama di Quarzo Bianco", loreClue: "I famosi mosaici litici di camelidi incastonati nei muri sono svaniti." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Portale Trapezoidale della Reggia", loreClue: "Il grandioso varco d'ingresso alle sale imperiali appare livellato." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "La Piazza Cerimoniale Sospesa sull'Abisso", loreClue: "Il cortile pensile affacciato sulla gola dell'Apurímac è cancellato." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "La Scalinata Litica d'Accesso all'Usnu", loreClue: "La gradinata monumentale che sale alla piattaforma piramidale è spianata." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "Il Tempio dei Sacerdoti Avvolto da Liane", loreClue: "Le mura megalitiche del santuario solare nascoste dagli alberi sono scomparse." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "I Conci con Commettitura Antisismica", loreClue: "I massi poligonali a incastro perfetto della facciata sono irregolari." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "Il Belvedere a Strapiombo sul Fiume", loreClue: "La terrazza naturale affacciata sulle rapide tumultuose è assente." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Il Canale d'Acqua Rituale sulle Terrazze", loreClue: "La canaletta in pietra che riforniva la cittadella appare prosciugata." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "I Blocchi di Granito Dorato della Torre", loreClue: "La torre di vedetta semicircolare che domina le rovine è stata rimossa." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "La Cortina di Nubi Risalente dalla Selva", loreClue: "I vapori bianchi che avvolgono le rovine dando l'aspetto di città fantasma sono dissolti." },
      ];
    } else if (isLevelOneHundredSixteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Grande Disco Solare Cesellato in Oro", loreClue: "Il maestoso disco d'oro massiccio con i raggi fiammeggianti è scomparso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Maschera Funeraria d'Oro con Turchesi", loreClue: "La maschera cerimoniale con occhi in pietra dura è svanita dal piedistallo." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "I Pettorali d'Oro con il Volto del Giaguaro", loreClue: "Le lamine cesellate con il dio felino appese alla parete sono assenti." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Il Calice Rituale Kero d'Oro e Lapislazzuli", loreClue: "Il sacro bicchiere imperiale per le libagioni di chicha è rimosso." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "La Statuetta d'Argento della Vergine del Sole", loreClue: "La figura votiva femminile intagliata in puro argento è scomparsa." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "La Cassa dei Tesori Reali con Gemme", loreClue: "Il baule cerimoniale colmo di smeraldi e perle fluviali è assente." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "I Bracciali Reali d'Oro Tempestati di Pietre", loreClue: "I monili preziosi posati sul telo di lana cerimoniale sono tolti." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Lo Scettro d'Oro Sormontato dal Condor", loreClue: "Il bastone d'autorità dell'ultimo imperatore è svanito dall'altare." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "Le Lamine d'Oro di Rivestimento della Cripta", loreClue: "I pannelli aurei che riflettono la luce delle torce appaiono opachi." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Riflesso Fiammeggiante del Tesoro Celato", loreClue: "Il bagliore radioso che illumina l'intera camera ipogea è spento." },
      ];
    } else if (isLevelOneHundredSeventeen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Lo Specchio d'Acqua Dorato della Laguna Sacra", loreClue: "La superficie immobile che riflette il tramonto andino appare torbida." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "I Fitti Canneti di Totora sulle Sponde", loreClue: "I giunchi acquatici con cui gli indigeni costruivano le barche sono rimossi." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Riflesso del Sole Calante sull'Acqua", loreClue: "La scia luccicante di luce solare che solca il lago è svanita." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "L'Altare Litico per le Libagioni sulla Riva", loreClue: "La mensa di pietra intagliata dove si gettavano offerte d'oro è assente." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Piroga Indigena in Legno di Cedro", loreClue: "L'imbarcazione tradizionale ormeggiata tra le canne è scomparsa." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "I Ciottoli Policromi del Fondale Limpido", loreClue: "I sassi colorati visibili sotto il pelo dell'acqua sono uniformati." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "La Nebbia Crepuscolare sopra i Giunchi", loreClue: "I leggeri vapori serali che avvolgono lo specchio lacustre sono dissolti." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "La Coppia di Uccelli Acquatici sul Lago", loreClue: "I due svassi dalle piume scure che nuotano all'ombra sono assenti." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "I Gradini di Pietra d'Accesso all'Acqua", loreClue: "La rampa di scalini cerimoniali che scende nella laguna è spianata." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Le Vette Innevate Riflesse sulla Superficie", loreClue: "Il riflesso delle montagne sacre sull'acqua è scomparso." },
      ];
    } else if (isLevelOneHundredEighteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 13.95, radius: 4.0, name: "La Grande Ansa del Fiume Madre de Dios", loreClue: "Il maestoso meandro fluviale che serpeggia nella giungla appare interrotto." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Distesa Sconfinata della Foresta Vergine", loreClue: "Il tappeto continuo di alberi centenari all'orizzonte è appiattito." },
        { id: `lvl${id}_d3`, x: 82.00, y: 13.95, radius: 4.0, name: "La Spiaggia di Sabbia Dorata sulla Riva", loreClue: "Il banco alluvionale chiaro dove attraccavano le piroghe è svanito." },
        { id: `lvl${id}_d4`, x: 14.00, y: 43.97, radius: 4.0, name: "La Barca della Spedizione con la Tenda", loreClue: "Il battello fluviale a motore con equipaggiamento da scavo è assente." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "I Tronchi Spiaggiati Portati dalla Piena", loreClue: "I grandi fusti d'albero adagiati sulla sponda fluviale sono rimossi." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Nube Temporalesca all'Orizzonte Amazzonico", loreClue: "I densi nembi carichi di pioggia che incombono sulla foresta sono svaniti." },
        { id: `lvl${id}_d7`, x: 86.00, y: 43.97, radius: 4.0, name: "La Scia Argentea della Corrente Fluviale", loreClue: "I vortici e le correnti rapide al centro del fiume sono appiattiti." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "L'Isolotto di Ghiaia nel Mezzo del Corso", loreClue: "Il piccolo atollo fluviale che divide le acque scompare dai flutti." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "La Postazione d'Avvistamento sulla Ripa", loreClue: "La garitta di vedetta in legno costruita tra i rami è stata tolta." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Varco nella Giungla verso il Sentiero", loreClue: "L'imbocco del passaggio segreto che sale verso Paititi è celato." },
      ];
    } else if (isLevelOneHundredNineteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "L'Architrave del Tempio con il Volto del Nume", loreClue: "Il possente blocco monolitico con il dio solare è stato scalpellato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "I Due Stipiti Inclinati ad Angolo Sacro", loreClue: "I pilastri megalitici che formano la classica porta trapezoidale sono spianati." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Le Radici Secolari che Abbracciano il Portale", loreClue: "I tronchi nodosi di fico strangolatore avvinghiati alla pietra sono tolti." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "L'Iscrizione Segreta in Caratteri Tocapu", loreClue: "I simboli geometrici incisi sulla soglia d'ingresso sono raschiati." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Il Selciato d'Oro Nascosto sotto il Muschio", loreClue: "Le piastre dorate che lastricano il vestibolo del tempio sono spente." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "La Nicchia Votiva con il Braciere di Bronzo", loreClue: "L'edicola cerimoniale per l'incenso sacro all'ingresso è murata." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "Il Bassorilievo del Giaguaro Alato sul Concio", loreClue: "La figura scolpita del guardiano celeste svanisce dal basamento." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "La Soglia Consumata dai Sacerdoti Solari", loreClue: "Il gradino d'ingresso levigato da secoli di riti appare sconnesso." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Scalinata Ipogea che Scende nel Santuario", loreClue: "I gradini che portano alla sala del Cuore Solare sono colmati." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Fascio di Luce Solare Attraverso il Varco", loreClue: "La lama di luce dorata che illumina l'interno dell'edificio è oscurata." },
      ];
    } else if (isLevelOneHundredTwenty) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Disco Solare Supremo del Cuore di Paititi", loreClue: "Il leggendario disco d'oro massiccio al centro del tempio è scomparso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "I Dodici Idoli d'Oro degli Imperatori Inca", loreClue: "Le statue in oro zecchino schierate attorno all'altare sono svanite." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "L'Altare di Platino su Basamento di Roccia", loreClue: "La mensa sacrificale impreziosita da metalli celesti appare livellata." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "Le Lamine d'Oro che Rivestono la Cupola", loreClue: "Il cielo dorato del tempio che riflette la luce solare è opacizzato." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Cascata d'Acqua Sacra dentro il Santuario", loreClue: "La sorgente sotterranea che zampilla nel bacino d'oro è prosciugata." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "I Cristalli di Quarzo Risonanti alle Pareti", loreClue: "Le gemme che amplificavano il canto dei sacerdoti sono state asportate." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "Il Trono Imperiale con Intarsi di Lapislazzuli", loreClue: "Il maestoso seggio del sovrano di Paititi è scomparso dall'abside." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Grande Mosaico Cosmico sul Pavimento", loreClue: "Il disegno pavimentale con le costellazioni incaiche è cancellato." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "Il Fascio di Luce Solare Divina sull'Altare", loreClue: "Il raggio solare zenitale che infiamma il disco d'oro è spento." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Sigillo Eterno della Spedizione di Paititi", loreClue: "La reliquia finale dell'avventura archeologica è assente dal suo piedistallo." },
      ];
    } else if (isStageTwelve) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 62.33, y: 20.31, radius: 5.0, name: "Il Medaglione d'Oro Solare sull'Architrave", loreClue: "Un medaglione votivo in oro massiccio cesellato con il volto del dio Sole splende sul fregio sommitale del portale." },
        { id: `lvl${id}_d2`, x: 75.83, y: 36.83, radius: 4.5, name: "L'Occhio di Giada del Serpente di Pietra", loreClue: "Un cabochon di giada verde imperiale è incastonato nell'orbita del serpente piumato scolpito sullo stipite." },
        { id: `lvl${id}_d3`, x: 53.33, y: 25.67, radius: 4.5, name: "Il Pettorale Lunare sul Condor Reale", loreClue: "Una lamina d'oro a forma di mezzaluna rituale orna il petto del condor scolpito a sinistra dell'apertura." },
        { id: `lvl${id}_d4`, x: 24.92, y: 76.00, radius: 5.0, name: "Il Lume a Petrolio Spento sul Fusto", loreClue: "La fiammella della lanterna Hurricane è estinta e il lucignolo è annerito dalla brezza della cascata." },
        { id: `lvl${id}_d5`, x: 31.67, y: 64.17, radius: 4.5, name: "Il Tamburo Graduato del Teodolite Ruotato", loreClue: "La ghiera micrometrica in ottone dell'asse orizzontale è stata ruotata di novanta gradi per le misurazioni astronomiche." },
        { id: `lvl${id}_d6`, x: 36.67, y: 81.47, radius: 4.5, name: "Il Cartellino di Catalogazione sulla Gomena", loreClue: "Un cartellino d'inventario della spedizione con nastro in seta rossa pende dalla fune di canapa." },
        { id: `lvl${id}_d7`, x: 45.00, y: 94.31, radius: 4.5, name: "Il Filo a Piombo accanto alla Vanga", loreClue: "Un filo a piombo con piombino conico in ottone lucido è posato sulla terra vulcanica a ridosso del ferro della vanga." },
        { id: `lvl${id}_d8`, x: 18.33, y: 53.01, radius: 4.5, name: "La Sciarpa di Seta Rossa sul Casco Coloniale", loreClue: "Una sciarpa cerimoniale in seta rossa è annodata attorno alla cupola del casco coloniale del capo spedizione." },
        { id: `lvl${id}_d9`, x: 84.17, y: 87.05, radius: 4.5, name: "Il Calice Kero di Bronzo sulla Roccia", loreClue: "Un bicchiere cerimoniale Kero di bronzo patinato riposa tra il muschio umido ai piedi della scalinata." },
        { id: `lvl${id}_d10`, x: 55.00, y: 69.20, radius: 5.0, name: "Il Riflesso della Chakana nella Laguna", loreClue: "Il riflesso speculare del sacro simbolo a gradoni della croce andina increspa la superficie dell'acqua scura." },
      ];
    } else {
      diffsForLevel = getStageDifferences(stageNumber, levelNumberInStage).map(d => ({
        ...d,
        id: `lvl${id}_${d.id}`,
      }));
    }

    const narrative = getCredibleLevelStory(id, stageNumber, levelNumberInStage);

    levels.push({
      id,
      chapterNumber: stageNumber,
      levelNumberInStage,
      title: narrative.title,
      subtitle: narrative.subtitle,
      era: `${milestone.location} (${milestone.zoneName.split(':')[0]})`,
      category: milestone.zoneName,
      difficulty,
      imageA: assetUrl(imageA),
      imageB: assetUrl(imageB),
      differences: diffsForLevel,
      story: {
        prologue: narrative.prologue,
        resolution: narrative.resolution,
        unlockedSecret: narrative.unlockedSecret,
      },
      milestone: isMilestoneLevel ? milestone : undefined,
    });
  }

  return levels;
}

export const ALL_120_LEVELS: Level[] = generateAll120Levels();
