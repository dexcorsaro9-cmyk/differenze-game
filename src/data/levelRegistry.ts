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
      ? '/levels/stage9_lvl81_A.jpg?v=2'
      : isLevelEightyTwo
      ? '/levels/stage9_lvl82_A.jpg?v=2'
      : isLevelEightyThree
      ? '/levels/stage9_lvl83_A.jpg?v=2'
      : isLevelEightyFour
      ? '/levels/stage9_lvl84_A.jpg?v=2'
      : isLevelEightyFive
      ? '/levels/stage9_lvl85_A.jpg?v=2'
      : isLevelEightySix
      ? '/levels/stage9_lvl86_A.jpg?v=2'
      : isLevelEightySeven
      ? '/levels/stage9_lvl87_A.jpg?v=2'
      : isLevelEightyEight
      ? '/levels/stage9_lvl88_A.jpg?v=2'
      : isLevelEightyNine
      ? '/levels/stage9_lvl89_A.jpg?v=2'
      : isLevelNinety
      ? '/levels/stage9_lvl90_A.jpg?v=2'
      : isLevelNinetyOne
      ? '/levels/stage10_lvl91_A.jpg?v=2'
      : isLevelNinetyTwo
      ? '/levels/stage10_lvl92_A.jpg?v=2'
      : isLevelNinetyThree
      ? '/levels/stage10_lvl93_A.jpg?v=2'
      : isLevelNinetyFour
      ? '/levels/stage10_lvl94_A.jpg?v=2'
      : isLevelNinetyFive
      ? '/levels/stage10_lvl95_A.jpg?v=2'
      : isLevelNinetySix
      ? '/levels/stage10_lvl96_A.jpg?v=2'
      : isLevelNinetySeven
      ? '/levels/stage10_lvl97_A.jpg?v=2'
      : isLevelNinetyEight
      ? '/levels/stage10_lvl98_A.jpg?v=2'
      : isLevelNinetyNine
      ? '/levels/stage10_lvl99_A.jpg?v=2'
      : isLevelOneHundred
      ? '/levels/stage10_lvl100_A.jpg?v=2'
      : isLevelOneHundredOne
      ? '/levels/stage11_lvl101_A.jpg?v=2'
      : isLevelOneHundredTwo
      ? '/levels/stage11_lvl102_A.jpg?v=2'
      : isLevelOneHundredThree
      ? '/levels/stage11_lvl103_A.jpg?v=2'
      : isLevelOneHundredFour
      ? '/levels/stage11_lvl104_A.jpg?v=2'
      : isLevelOneHundredFive
      ? '/levels/stage11_lvl105_A.jpg?v=2'
      : isLevelOneHundredSix
      ? '/levels/stage11_lvl106_A.jpg?v=2'
      : isLevelOneHundredSeven
      ? '/levels/stage11_lvl107_A.jpg?v=2'
      : isLevelOneHundredEight
      ? '/levels/stage11_lvl108_A.jpg?v=2'
      : isLevelOneHundredNine
      ? '/levels/stage11_lvl109_A.jpg?v=2'
      : isLevelOneHundredTen
      ? '/levels/stage11_lvl110_A.jpg?v=2'
      : isLevelOneHundredEleven
      ? '/levels/stage12_lvl111_A.jpg?v=2'
      : isLevelOneHundredTwelve
      ? '/levels/stage12_lvl112_A.jpg?v=2'
      : isLevelOneHundredThirteen
      ? '/levels/stage12_lvl113_A.jpg?v=2'
      : isLevelOneHundredFourteen
      ? '/levels/stage12_lvl114_A.jpg?v=2'
      : isLevelOneHundredFifteen
      ? '/levels/stage12_lvl115_A.jpg?v=2'
      : isLevelOneHundredSixteen
      ? '/levels/stage12_lvl116_A.jpg?v=2'
      : isLevelOneHundredSeventeen
      ? '/levels/stage12_lvl117_A.jpg?v=2'
      : isLevelOneHundredEighteen
      ? '/levels/stage12_lvl118_A.jpg?v=2'
      : isLevelOneHundredNineteen
      ? '/levels/stage12_lvl119_A.jpg?v=2'
      : isLevelOneHundredTwenty
      ? '/levels/stage12_lvl120_A.jpg?v=2'
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
      ? '/stage2_crypt_B.jpg?v=10'
      : isLevelThree
      ? '/levels/stage1_lvl3_B.jpg?v=3'
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
      ? '/levels/stage9_lvl81_B.jpg?v=2'
      : isLevelEightyTwo
      ? '/levels/stage9_lvl82_B.jpg?v=2'
      : isLevelEightyThree
      ? '/levels/stage9_lvl83_B.jpg?v=2'
      : isLevelEightyFour
      ? '/levels/stage9_lvl84_B.jpg?v=2'
      : isLevelEightyFive
      ? '/levels/stage9_lvl85_B.jpg?v=2'
      : isLevelEightySix
      ? '/levels/stage9_lvl86_B.jpg?v=2'
      : isLevelEightySeven
      ? '/levels/stage9_lvl87_B.jpg?v=2'
      : isLevelEightyEight
      ? '/levels/stage9_lvl88_B.jpg?v=2'
      : isLevelEightyNine
      ? '/levels/stage9_lvl89_B.jpg?v=2'
      : isLevelNinety
      ? '/levels/stage9_lvl90_B.jpg?v=2'
      : isLevelNinetyOne
      ? '/levels/stage10_lvl91_B.jpg?v=2'
      : isLevelNinetyTwo
      ? '/levels/stage10_lvl92_B.jpg?v=2'
      : isLevelNinetyThree
      ? '/levels/stage10_lvl93_B.jpg?v=2'
      : isLevelNinetyFour
      ? '/levels/stage10_lvl94_B.jpg?v=2'
      : isLevelNinetyFive
      ? '/levels/stage10_lvl95_B.jpg?v=2'
      : isLevelNinetySix
      ? '/levels/stage10_lvl96_B.jpg?v=2'
      : isLevelNinetySeven
      ? '/levels/stage10_lvl97_B.jpg?v=2'
      : isLevelNinetyEight
      ? '/levels/stage10_lvl98_B.jpg?v=2'
      : isLevelNinetyNine
      ? '/levels/stage10_lvl99_B.jpg?v=2'
      : isLevelOneHundred
      ? '/levels/stage10_lvl100_B.jpg?v=2'
      : isLevelOneHundredOne
      ? '/levels/stage11_lvl101_B.jpg?v=2'
      : isLevelOneHundredTwo
      ? '/levels/stage11_lvl102_B.jpg?v=2'
      : isLevelOneHundredThree
      ? '/levels/stage11_lvl103_B.jpg?v=2'
      : isLevelOneHundredFour
      ? '/levels/stage11_lvl104_B.jpg?v=2'
      : isLevelOneHundredFive
      ? '/levels/stage11_lvl105_B.jpg?v=2'
      : isLevelOneHundredSix
      ? '/levels/stage11_lvl106_B.jpg?v=2'
      : isLevelOneHundredSeven
      ? '/levels/stage11_lvl107_B.jpg?v=2'
      : isLevelOneHundredEight
      ? '/levels/stage11_lvl108_B.jpg?v=2'
      : isLevelOneHundredNine
      ? '/levels/stage11_lvl109_B.jpg?v=2'
      : isLevelOneHundredTen
      ? '/levels/stage11_lvl110_B.jpg?v=2'
      : isLevelOneHundredEleven
      ? '/levels/stage12_lvl111_B.jpg?v=2'
      : isLevelOneHundredTwelve
      ? '/levels/stage12_lvl112_B.jpg?v=2'
      : isLevelOneHundredThirteen
      ? '/levels/stage12_lvl113_B.jpg?v=2'
      : isLevelOneHundredFourteen
      ? '/levels/stage12_lvl114_B.jpg?v=2'
      : isLevelOneHundredFifteen
      ? '/levels/stage12_lvl115_B.jpg?v=2'
      : isLevelOneHundredSixteen
      ? '/levels/stage12_lvl116_B.jpg?v=2'
      : isLevelOneHundredSeventeen
      ? '/levels/stage12_lvl117_B.jpg?v=2'
      : isLevelOneHundredEighteen
      ? '/levels/stage12_lvl118_B.jpg?v=2'
      : isLevelOneHundredNineteen
      ? '/levels/stage12_lvl119_B.jpg?v=2'
      : isLevelOneHundredTwenty
      ? '/levels/stage12_lvl120_B.jpg?v=2'
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
          x: 75.4,
          y: 22.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "Mappa del Mondo del 1512",
          riddle: "Un doppio emisfero nautico inciso quando il Nuovo Mondo era ancora un enigma per l'Europa.",
          loreClue: "Un esemplare rarissimo: mostra la rotta atlantica dimenticata che conduce alla foce del Rio delle Amazzoni."
        },
        {
          id: `lvl${id}_d2`,
          x: 34.3,
          y: 37.6,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Reliquia Solare nella Campana",
          riddle: "Imprigionato nel cristallo affinché l'oro puro di Paititi non accechi gli sguardi indiscreti.",
          loreClue: "Il manufatto primordiale: irradiava calore anche durante le gelide notti invernali di Oxford."
        },
        {
          id: `lvl${id}_d3`,
          x: 44.0,
          y: 46.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Mappamondo da Tavolo in Legno",
          riddle: "Sfera terrestre in legno tornito che traccia i meridiani calcolati dai primi navigatori.",
          loreClue: "Bellini vi aveva tracciato un cerchio a carboncino attorno alle coordinate segrete della cordigliera andina."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.0,
          y: 52.5,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Manoscritto Aperto del Professore",
          riddle: "Pagine aperte cosparse di annotazioni affrettate sul passaggio segreto delle Ande.",
          loreClue: "L'ultima pagina del diario: cita espressamente la Cripta di San Callisto a Roma come prossimo rifugio."
        },
        {
          id: `lvl${id}_d5`,
          x: 75.2,
          y: 49.7,
          radius: 5.0,
          clueType: 'dark_seal',
          name: "Calamaio con Piuma d'Oca",
          riddle: "L'arma dello studioso: intinta nell'inchiostro di noce per tracciare le rotte celesti.",
          loreClue: "La punta d'oca è ancora umida: Bellini ha scritto fino a pochi istanti prima che forzassero la porta."
        },
        {
          id: `lvl${id}_d6`,
          x: 86.0,
          y: 44.3,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Lampada da Banchiere Smeraldo",
          riddle: "L'arco d'ottone che sostiene un paralume di vetro verde smeraldo per le ricerche notturne.",
          loreClue: "La sua luce ha illuminato per mesi i manoscritti eretici che la Mano Oscura voleva dare alle fiamme."
        },
        {
          id: `lvl${id}_d7`,
          x: 55.0,
          y: 68.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Mappe nel Cassetto Segreto",
          riddle: "Custoditi nell'intaglio di mogano del cassetto socchiuso nella fretta della fuga improvvisa.",
          loreClue: "Le carte geografiche del XVI secolo tracciate dai missionari gesuiti dispersi lungo il Rio Madre de Dios."
        },
        {
          id: `lvl${id}_d8`,
          x: 30.0,
          y: 81.5,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "Cuscino con Emblema Solare",
          riddle: "Velluto bordeaux adagiato al suolo, recante al centro il ricamo dorato dell'astro nascente.",
          loreClue: "Un cuscino cerimoniale donato dall'Ambasciata Peruviana al professore nel 1925."
        },
      ];
    } else if (isLevelTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 74.8,
          y: 52.5,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "Il Teschio nella Nicchia Gotica",
          riddle: "L'antico guardiano silenzioso che veglia sulla tomba sigillata dall'ordine.",
          loreClue: "I cavalieri proteggevano la soglia con il monito del 'Memento Mori' inciso sulla pietra."
        },
        {
          id: `lvl${id}_d2`,
          x: 87.2,
          y: 71.0,
          radius: 6.5,
          clueType: 'sabotage',
          name: "Il Piccone da Scavo sulla Parete",
          riddle: "Lo strumento in ferro pesante con cui i cercatori hanno violato il muro millenario.",
          loreClue: "La Mano Oscura ha scavato qui la notte precedente, cercando il sepolcro prima del nostro arrivo."
        },
        {
          id: `lvl${id}_d3`,
          x: 36.2,
          y: 67.0,
          radius: 6.0,
          clueType: 'sabotage',
          name: "La Lanterna ad Olio in Ottone",
          riddle: "Un faro in ottone massiccio la cui fiammella scaccia l'oscurità delle catacombe.",
          loreClue: "L'olio d'oliva consacrato tiene viva la fiamma che svela gli affreschi paleocristiani."
        },
        {
          id: `lvl${id}_d4`,
          x: 59.5,
          y: 72.5,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Calice Cerimoniale in Pietra",
          riddle: "Coppa liturgica scolpita nella pietra scura, custode delle libagioni rituali dei custodi.",
          loreClue: "Sul fondo del calice è incisa la stella a otto punte dell'Ordine di Paititi."
        },
        {
          id: `lvl${id}_d5`,
          x: 25.0,
          y: 78.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "I Rotoli di Pergamena Antica",
          riddle: "Fascette in cuoio che serrano carte miniate con equazioni alchemiche e coordinate.",
          loreClue: "Contengono la formula per aprire la Porta del Sole attraverso la combinazione delle lenti."
        },
        {
          id: `lvl${id}_d6`,
          x: 42.0,
          y: 81.0,
          radius: 6.5,
          clueType: 'dark_seal',
          name: "Il Grande Grimorio Aperto",
          riddle: "Il monumentale manoscritto aperto sulle cui pagine sono tracciati i sigilli d'oriente.",
          loreClue: "Un tomo in pelle umana e pergamena che descrive i viaggi dei monaci verso l'Eldorado."
        },
        {
          id: `lvl${id}_d7`,
          x: 67.0,
          y: 89.0,
          radius: 6.5,
          clueType: 'torn_evidence',
          name: "La Mappa con Cinghia di Cuoio",
          riddle: "La carta geografica arrotolata con fibbia in cuoio distesa sul margine del marmo.",
          loreClue: "Traccia la rotta marittima dal porto di Ostia fino all'isola di Creta e Alessandria."
        },
        {
          id: `lvl${id}_d8`,
          x: 19.2,
          y: 32.5,
          radius: 6.5,
          clueType: 'sabotage',
          name: "La Torcia Medievale a Muro",
          riddle: "Braciere in ferro battuto ancorato alla pietra che rischiara l'ingresso delle cripte sotterranee.",
          loreClue: "Accesa di recente: i mercenari della Mano Oscura sono passati da qui solo poche ore prima."
        },
      ];
    } else if (isLevelThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 42.0,
          y: 25.4,
          radius: 11.0,
          clueType: 'sabotage',
          name: "La Lampadina a Filamento dal Soffitto",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lampada a sospensione sopra il banco di lavoro è stata spenta per impedire l"
        },
        {
          id: `lvl${id}_d2`,
          x: 60.5,
          y: 70.8,
          radius: 12.0,
          clueType: 'stolen_relic',
          name: "Il Registro delle Formule Alchemiche",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il mortaio in ceramica è stato asportato e sostituito da un corposo registro di formule antiche rilegato in pelle scura."
        },
        {
          id: `lvl${id}_d3`,
          x: 53.2,
          y: 83.3,
          radius: 12.5,
          clueType: 'stolen_relic',
          name: "Il Calibro in Ottone e la Lente",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il portaprovette frontale è stato rimosso: al suo posto giacciono un calibro di precisione in ottone e una lente ottica."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.8,
          y: 48.1,
          radius: 9.5,
          clueType: 'stolen_relic',
          name: "La Serie di Pesi Milligrammetrici d",
          riddle: "Dispositivo di precisione che orienta i passi e pesa gli elementi della formula.",
          loreClue: "La serie di cilindri micrometrici in ottone della bilancia analitica è stata sottratta: serviva a dosare le polveri alchemiche con precisione assoluta."
        },
        {
          id: `lvl${id}_d5`,
          x: 28.1,
          y: 64.8,
          radius: 9.0,
          clueType: 'sabotage',
          name: "La Fiamma del Becco Bunsen sotto il Matraccio",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il rubinetto del gas del becco Bunsen è stato chiuso con violenza: la fiamma che riscaldava il solvente sotto il matraccio è stata spenta."
        },
        {
          id: `lvl${id}_d6`,
          x: 10.5,
          y: 40.8,
          radius: 9.5,
          clueType: 'stolen_relic',
          name: "Il Flacone di Reagente ",
          riddle: "Piccolo contenitore in vetro colmo di reagenti alchemici e composti rari.",
          loreClue: "Il prezioso barattolo di allume di rocca è stato svuotato e trafugato: è il mordenzante chimico fondamentale per far reagire l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 1",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.5,
          y: 48.6,
          radius: 13.0,
          clueType: 'sabotage',
          name: "La Cancellata della Cripta Forzata e Aperta",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cancellata della Cripta Forzata e Aperta', nascosto nell'ambiente.",
          loreClue: "La pesante cancellata gotica in ferro battuto che sigillava i meandri inferiori dell"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.4,
          y: 60.9,
          radius: 10.0,
          clueType: 'stolen_relic',
          name: "La Spada Medievale sulla Tomba",
          riddle: "Lama o ferro pesante adoperato per difendere la cripta o aprirsi un varco.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d3`,
          x: 67.5,
          y: 67.1,
          radius: 9.5,
          clueType: 'sabotage',
          name: "La Fiamma della Lanterna sul Plinto",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fiamma della Lanterna sul Plinto', nascosto nell'ambiente.",
          loreClue: "La fiamma viva all"
        },
        {
          id: `lvl${id}_d4`,
          x: 82.2,
          y: 76.1,
          radius: 10.5,
          clueType: 'stolen_relic',
          name: "Il Grande Tomo d",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il registro di spedizione aperto con i rilievi della meridiana tombale è stato asportato dal blocco di pietra."
        },
        {
          id: `lvl${id}_d5`,
          x: 71.0,
          y: 80.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calibro in Ottone da Rilievo",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il calibro di precisione in ottone utilizzato per misurare i rilievi astronomici della lastra tombale è scomparso."
        },
        {
          id: `lvl${id}_d6`,
          x: 84.4,
          y: 86.2,
          radius: 9.0,
          clueType: 'stolen_relic',
          name: "Il Metro Pieghevole in Legno",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Metro Pieghevole in Legno', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 1",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 24.7,
          y: 41.7,
          radius: 9.5,
          clueType: 'stolen_relic',
          name: "La Cassetta d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassetta d', nascosto nell'ambiente.",
          loreClue: "La cassetta in rovere con le schede d"
        },
        {
          id: `lvl${id}_d2`,
          x: 16.6,
          y: 79.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "I Grandi Pesi d",
          riddle: "Dispositivo di precisione che orienta i passi e pesa gli elementi della formula.",
          loreClue: "I pesi calibratori in ottone per la tara dei metalli preziosi sono stati trafugati dal cofanetto foderato in velluto."
        },
        {
          id: `lvl${id}_d3`,
          x: 32.3,
          y: 72.2,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "I Due Dobloni d",
          riddle: "Indizio cruciale dell'indagine legato a 'I Due Dobloni d', nascosto nell'ambiente.",
          loreClue: "I due rari dobloni coloniali recanti il punzone segreto del Serpente a Due Teste sono stati sottratti dal vassoio di velluto."
        },
        {
          id: `lvl${id}_d4`,
          x: 41.9,
          y: 78.6,
          radius: 5.0,
          clueType: 'stolen_relic',
          name: "Il Calamaio di Cristallo Nero",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Calamaio di Cristallo Nero', nascosto nell'ambiente.",
          loreClue: "Il calamaio d"
        },
        {
          id: `lvl${id}_d5`,
          x: 51.2,
          y: 80.2,
          radius: 5.0,
          clueType: 'stolen_relic',
          name: "La Cannuccia con Pennino d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cannuccia con Pennino d', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d6`,
          x: 95.7,
          y: 86.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Tazza in Porcellana con Piattino",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tazza in Porcellana con Piattino', nascosto nell'ambiente.",
          loreClue: "La tazza da tè della perita numismatica è stata tolta dal piano in mogano lasciando solo il legno lucidato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 1",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 79.7,
          y: 51.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Sfera Armillare in Ottone",
          riddle: "Indizio cruciale dell'indagine legato a 'La Sfera Armillare in Ottone', nascosto nell'ambiente.",
          loreClue: "Il prezioso strumento astronomico a cerchi concentrici per il calcolo delle coordinate equatoriali è stato asportato dal tavolino."
        },
        {
          id: `lvl${id}_d2`,
          x: 94.1,
          y: 73.8,
          radius: 9.0,
          clueType: 'stolen_relic',
          name: "I Registri delle Osservazioni sulla Scrivania",
          riddle: "Indizio cruciale dell'indagine legato a 'I Registri delle Osservazioni sulla Scrivania', nascosto nell'ambiente.",
          loreClue: "I fascicoli con i calcoli dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 85.5,
          y: 62.8,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lampada Ministeriale Spenta",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lampada da lavoro con paralume in vetro verde è stata spenta dagli intrusi per occultare la loro fuga nel crepuscolo."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.7,
          y: 33.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Pendolo d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pendolo d', nascosto nell'ambiente.",
          loreClue: "Il disco oscillante in ottone del regolatore a pendolo astronomico è stato smontato per falsare il calcolo del tempo sidereo."
        },
        {
          id: `lvl${id}_d5`,
          x: 28.0,
          y: 51.3,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Manopola di Fuoco del Telescopio",
          riddle: "Indizio cruciale dell'indagine legato a 'La Manopola di Fuoco del Telescopio', nascosto nell'ambiente.",
          loreClue: "La manopola micrometrica in ottone per la messa a fuoco del rifrattore è stata svitata dal tubo ottico."
        },
        {
          id: `lvl${id}_d6`,
          x: 65.5,
          y: 35.8,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Maniglia in Ferro della Bifora Gotica",
          riddle: "Indizio cruciale dell'indagine legato a 'La Maniglia in Ferro della Bifora Gotica', nascosto nell'ambiente.",
          loreClue: "La maniglia a cricchetto in ferro battuto che bloccava l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 1",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 26.0,
          y: 78.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Lo Sgabello in Legno sotto il Tavolo Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Sgabello in Legno sotto il Tavolo Sinistro', nascosto nell'ambiente.",
          loreClue: "Lo sgabello ligneo riposto sotto il grande tavolo da consultazione sinistro è stato asportato lasciando il pavimento sgombro."
        },
        {
          id: `lvl${id}_d2`,
          x: 74.0,
          y: 78.2,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Lo Sgabello in Legno sotto il Tavolo Destro",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Sgabello in Legno sotto il Tavolo Destro', nascosto nell'ambiente.",
          loreClue: "Lo sgabello da lettura sotto il tavolo destro è stato sottratto dagli intrusi durante la perquisizione dei carteggi."
        },
        {
          id: `lvl${id}_d3`,
          x: 32.5,
          y: 55.8,
          radius: 6.5,
          clueType: 'stolen_relic',
          name: "La Targa d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Targa d', nascosto nell'ambiente.",
          loreClue: "La targa sagomata d"
        },
        {
          id: `lvl${id}_d4`,
          x: 6.3,
          y: 24.6,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "Il Dipinto ad Olio del Rettore",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Dipinto ad Olio del Rettore', nascosto nell'ambiente.",
          loreClue: "Il dipinto ad olio in cornice nera del rettore accademico è stato staccato dalla boiserie di sinistra."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 23.3,
          radius: 6.5,
          clueType: 'sabotage',
          name: "La Rosetta Centrale della Trave Maestra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Rosetta Centrale della Trave Maestra', nascosto nell'ambiente.",
          loreClue: "Il rosone d"
        },
        {
          id: `lvl${id}_d6`,
          x: 85.5,
          y: 49.6,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "I Volumi di Consultazione sulla Scaffalatura",
          riddle: "Indizio cruciale dell'indagine legato a 'I Volumi di Consultazione sulla Scaffalatura', nascosto nell'ambiente.",
          loreClue: "I tomi in cuoio legati a mano del settore nautico sono stati trafugati dal ripiano della libreria destra."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 1",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 7.0,
          y: 60.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lampada Murale in Bronzo Sinistra",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il braccio portalampada in bronzo brunito fissato al pilastro gotico sinistro è stato divelto per spegnere la luce."
        },
        {
          id: `lvl${id}_d2`,
          x: 92.7,
          y: 60.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lampada Murale in Bronzo Destra",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La monumentale lampada murale sul pilastro destro è stata smontata per far piombare la navata nell"
        },
        {
          id: `lvl${id}_d3`,
          x: 39.5,
          y: 78.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Leggio Cerimoniale in Quercia Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Leggio Cerimoniale in Quercia Sinistro', nascosto nell'ambiente.",
          loreClue: "Il pesante leggio cerimoniale in massello di quercia del banco senatorio sinistro è stato asportato."
        },
        {
          id: `lvl${id}_d4`,
          x: 61.0,
          y: 78.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Leggio Cerimoniale in Quercia Destro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Leggio Cerimoniale in Quercia Destro', nascosto nell'ambiente.",
          loreClue: "Lo scrittoio cerimoniale in rovere intagliato sul fondo destro della navata è stato sottratto per i codici intarsiati nel legno."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 12.5,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "Il Pendaglio della Chiave di Volta Centrale",
          riddle: "Strumento di ferro sagomato per disserrare passaggi e scrigni rimasti inviolati.",
          loreClue: "Il prezioso pendant lierne scolpito a merletto nella pietra calcarea della volta a ventaglio è stato scalpellato via."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 88.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lastra Sepolcrale della Navata",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lastra Sepolcrale della Navata', nascosto nell'ambiente.",
          loreClue: "La lastra tombale in pietra scura incassata nel pavimento della navata è stata rimossa per accedere al cunicolo inferiore."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 1",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 29.0,
          y: 86.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Pomello Terminale della Balaustra Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pomello Terminale della Balaustra Sinistra', nascosto nell'ambiente.",
          loreClue: "Il puntale terminale tornito in quercia scura della balaustra del ballatoio è stato svitato per accedere all"
        },
        {
          id: `lvl${id}_d2`,
          x: 62.0,
          y: 46.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Scala d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Scala d', nascosto nell'ambiente.",
          loreClue: "La scala a pioli in legno massello utilizzata per raggiungere i tomi inaccessibili dei palchetti alti è stata rimossa."
        },
        {
          id: `lvl${id}_d3`,
          x: 74.0,
          y: 22.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Lo Stemma dei Fondatori del Cassettone Destro",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Stemma dei Fondatori del Cassettone Destro', nascosto nell'ambiente.",
          loreClue: "Il pannello ligneo policromo con l"
        },
        {
          id: `lvl${id}_d4`,
          x: 92.5,
          y: 94.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tomo in Pergamena sullo Scaffale Basso",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il raro in-folio con legatura in pelle chiara contenente la cronaca della spedizione andina è stato trafugato dal ripiano basso."
        },
        {
          id: `lvl${id}_d5`,
          x: 49.5,
          y: 48.0,
          radius: 7.0,
          clueType: 'sabotage',
          name: "La Traversa del Ballatoio sul Fondo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Traversa del Ballatoio sul Fondo', nascosto nell'ambiente.",
          loreClue: "Il montante protettivo in legno del ballatoio sospeso in fondo alla galleria è stato segato per facilitare la fuga."
        },
        {
          id: `lvl${id}_d6`,
          x: 23.0,
          y: 15.0,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "Il Blasone Accademico del Cassettone Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Blasone Accademico del Cassettone Sinistro', nascosto nell'ambiente.",
          loreClue: "Il cartiglio araldico dipinto con il motto latino "
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 1",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 66.5,
          y: 86.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Statua in Marmo del Naturalista",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua in Marmo del Naturalista', nascosto nell'ambiente.",
          loreClue: "La scultura in marmo bianco del celebre naturalista che custodiva la chiave della teca peruviana è stata rimossa dal piedistallo."
        },
        {
          id: `lvl${id}_d2`,
          x: 58.5,
          y: 56.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Fossile del Grande Scheletro",
          riddle: "L'antico guardiano silenzioso che veglia sulla soglia come eterno monito.",
          loreClue: "Il teschio preistorico dello scheletro fossile monumentale è stato asportato: tra i denti fossilizzati era incastonato il Sigillo d"
        },
        {
          id: `lvl${id}_d3`,
          x: 11.8,
          y: 51.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tabellone Entomologico a Sinistra",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "La teca con la collezione di lepidotteri amazzonici è stata svuotata: la disposizione degli insetti celava la prima mappa stellare."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.5,
          y: 50.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Riquadro Zoologico a Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Riquadro Zoologico a Destra', nascosto nell'ambiente.",
          loreClue: "Il tabellone scientifico sul pilastro destro con gli studi sulla fauna andina è stato trafugato dagli agenti della Mano Oscura."
        },
        {
          id: `lvl${id}_d5`,
          x: 41.5,
          y: 81.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Banco Espositivo in Legno Centrale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Banco Espositivo in Legno Centrale', nascosto nell'ambiente.",
          loreClue: "Il massiccio tavolo di lavoro centrale con i registri di classificazione dei fossili è stato rovesciato e sgomberato."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.5,
          y: 72.9,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Vetrina dei Fossili Andini a Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Vetrina dei Fossili Andini a Sinistra', nascosto nell'ambiente.",
          loreClue: "La teca espositiva in mogano contenente i minerali d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 1",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
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
          x: 65.4,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il prezioso drappo ricamato con la rosa a otto punte dei cavalieri è stato staccato dalla parete di boiserie."
        },
        {
          id: `lvl${id}_d2`,
          x: 72.3,
          y: 81.2,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Piccone da Minatore contro la Parete",
          riddle: "Lama o ferro pesante adoperato per difendere la cripta o aprirsi un varco.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d3`,
          x: 55.6,
          y: 88.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Tomo Rilegato in Pelle Nera",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 19.3,
          y: 86.4,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "I Rotoli della Topografia Sotterranea",
          riddle: "Documenti arrotolati che serbano annotazioni di viaggio e calcoli occulti.",
          loreClue: "I rotoli di pergamena con i rilievi delle gallerie sotto Sainte-Geneviève sono scomparsi dal ripiano."
        },
        {
          id: `lvl${id}_d5`,
          x: 17.3,
          y: 44.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Torcia sul Pilastro Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'La Torcia sul Pilastro Sinistro', nascosto nell'ambiente.",
          loreClue: "La torcia a staffa in ferro battuto è stata divelta dal pilastro per lasciare il corridoio d"
        },
        {
          id: `lvl${id}_d6`,
          x: 62.1,
          y: 58.3,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Teschio con Crittogramma nella Nicchia",
          riddle: "L'antico guardiano silenzioso che veglia sulla soglia come eterno monito.",
          loreClue: "Il teschio sacro recante l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwelve) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.0,
          y: 12.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Lampadario Sospeso della Navata Sinistra",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il candeliere pensile in ottone che illuminava l"
        },
        {
          id: `lvl${id}_d2`,
          x: 84.5,
          y: 12.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Lampadario Sospeso della Navata Destra",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lampada a sospensione destra è stata smontata per impedire la lettura dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 26.5,
          y: 65.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il braccio portalampada sul pilastro sinistro è stato divelto dal marmo della cappella."
        },
        {
          id: `lvl${id}_d4`,
          x: 73.0,
          y: 64.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 35.0,
          y: 38.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Rilievo del Capitello Corinzio Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo del Capitello Corinzio Sinistro', nascosto nell'ambiente.",
          loreClue: "Il cespo d"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 65.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Croce Monumentale dell",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "Il crocifisso dorato cesellato collocato al centro del tabernacolo monumentale è stato prelevato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 8.5,
          y: 72.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Basamento di Tibie della Croce Sinistra",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "La base sagomata di ossa sovrapposte sotto la croce murale è stata colmata di pietrisco per mascherare il passaggio."
        },
        {
          id: `lvl${id}_d2`,
          x: 53.5,
          y: 60.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Mediano dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio Mediano dell', nascosto nell'ambiente.",
          loreClue: "Il cranio incastonato al centro della monumentale catasta di femori è stato asportato per i simboli incisi."
        },
        {
          id: `lvl${id}_d3`,
          x: 92.0,
          y: 35.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Parete di Destra",
          riddle: "L'antico guardiano silenzioso che veglia sulla soglia come eterno monito.",
          loreClue: "Il cranio incassato nel muro di contenimento laterale è scomparso tra le ossa compatte."
        },
        {
          id: `lvl${id}_d4`,
          x: 37.0,
          y: 89.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Cranio Basale della Facciata Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio Basale della Facciata Sinistra', nascosto nell'ambiente.",
          loreClue: "Il cranio d"
        },
        {
          id: `lvl${id}_d5`,
          x: 44.0,
          y: 12.1,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Fenditura nella Volta di Calcare Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fenditura nella Volta di Calcare Sinistra', nascosto nell'ambiente.",
          loreClue: "La fessura nella volta di calcare lutetiano è stata puntellata con cunei di legno per evitare crolli."
        },
        {
          id: `lvl${id}_d6`,
          x: 63.0,
          y: 89.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Basale della Facciata Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio Basale della Facciata Destra', nascosto nell'ambiente.",
          loreClue: "Uno dei grandi teschi alla base del contrafforte osseo a destra è stato rimosso dalla fila."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFourteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 86.8,
          y: 73.3,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Piccone da Scavo d",
          riddle: "Lama o ferro pesante adoperato per difendere la cripta o aprirsi un varco.",
          loreClue: "Il pesante piccone d"
        },
        {
          id: `lvl${id}_d2`,
          x: 89.3,
          y: 30.6,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Fiamma della Torcia Murale Superiore",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fiamma della Torcia Murale Superiore', nascosto nell'ambiente.",
          loreClue: "La fiamma viva all"
        },
        {
          id: `lvl${id}_d3`,
          x: 52.3,
          y: 86.3,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Lente d",
          riddle: "Superficie ottica che riflette o moltiplica la vista dei dettagli celati.",
          loreClue: "La lente d"
        },
        {
          id: `lvl${id}_d4`,
          x: 52.1,
          y: 53.6,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Medaglione Templare in Bronzo",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 70.8,
          y: 92.6,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Bussola Marinaresca d",
          riddle: "Dispositivo di precisione che orienta i passi e pesa gli elementi della formula.",
          loreClue: "La bussola tascabile in ottone con quadrante a 32 punti è stata sottratta davanti alla mappa."
        },
        {
          id: `lvl${id}_d6`,
          x: 26.4,
          y: 79.2,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Rotolo di Pergamena con Sigillo",
          riddle: "Documenti arrotolati che serbano annotazioni di viaggio e calcoli occulti.",
          loreClue: "Il rotolo di pergamena sigillato da nastro rosso contenente i rilievi delle cripte è stato trafugato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFifteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 48.5,
          y: 63.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio al Piede della Grande Croce",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "Il teschio alla base del fusto della croce monumentale è stato rimosso per celare la chiave di drenaggio."
        },
        {
          id: `lvl${id}_d2`,
          x: 49.0,
          y: 45.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio all",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio all', nascosto nell'ambiente.",
          loreClue: "Il cranio centrale all"
        },
        {
          id: `lvl${id}_d3`,
          x: 7.0,
          y: 43.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Fascia Murale Sinistra",
          riddle: "L'antico guardiano silenzioso che veglia sulla soglia come eterno monito.",
          loreClue: "Uno dei teschi sentinella sulla parete sinistra dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 56.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio sul Pilastro Laterale Destro",
          riddle: "L'antico guardiano silenzioso che veglia sulla soglia come eterno monito.",
          loreClue: "Il teschio della fascia marcapiano destra è scomparso rivelando la fessura della roccia."
        },
        {
          id: `lvl${id}_d5`,
          x: 65.0,
          y: 82.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore della Campata Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio Inferiore della Campata Destra', nascosto nell'ambiente.",
          loreClue: "Il teschio allineato sulla zoccolatura inferiore destra è stato prelevato dagli intrusi."
        },
        {
          id: `lvl${id}_d6`,
          x: 75.0,
          y: 12.1,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Sommitale Destro della Muraglia",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio Sommitale Destro della Muraglia', nascosto nell'ambiente.",
          loreClue: "Il cranio posto alla sommità del muro d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.5,
          y: 93.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Lo zoccolo a gradoni della base lapidea del sarcofago è stato frantumato con una mazza."
        },
        {
          id: `lvl${id}_d2`,
          x: 43.0,
          y: 19.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Targa Marmorea con l",
          riddle: "Indizio cruciale dell'indagine legato a 'La Targa Marmorea con l', nascosto nell'ambiente.",
          loreClue: "La formella di marmo con il motto inciso è stata scalpellata per nascondere il messaggio."
        },
        {
          id: `lvl${id}_d3`,
          x: 81.5,
          y: 93.1,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il profilo a gola dello zoccolo d"
        },
        {
          id: `lvl${id}_d4`,
          x: 95.0,
          y: 59.4,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Dente d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Dente d', nascosto nell'ambiente.",
          loreClue: "Il risvolto ad angolo retto del massiccio coperchio monolitico è stato tagliato per forzare la tomba."
        },
        {
          id: `lvl${id}_d5`,
          x: 26.5,
          y: 26.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Stele Funeraria con Simboli Solari",
          riddle: "Indizio cruciale dell'indagine legato a 'La Stele Funeraria con Simboli Solari', nascosto nell'ambiente.",
          loreClue: "La lastra incisa con il simbolo solare dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 77.3,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "I caratteri romani scolpiti sul basamento orizzontale in arenaria sono stati scalpellati."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventeen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.5,
          y: 66.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Ritratto Monumentale nella Campata Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Ritratto Monumentale nella Campata Destra', nascosto nell'ambiente.",
          loreClue: "Il dipinto a olio incorniciato nella boiserie della parete destra è stato asportato."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 67.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Ritratto Storico nella Campata Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Ritratto Storico nella Campata Sinistra', nascosto nell'ambiente.",
          loreClue: "La tela seicentesca con l"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.2,
          y: 17.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Dorato Centrale del Soffitto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tondo Dorato Centrale del Soffitto', nascosto nell'ambiente.",
          loreClue: "Il grande medaglione dorato scolpito sul vertice della volta a botte è stato rimosso."
        },
        {
          id: `lvl${id}_d4`,
          x: 96.5,
          y: 68.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Fregio ad Arabesco della Vetrata Destra",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "I racemi in ferro dorato alla base della vetrata monumentale sono stati divelti."
        },
        {
          id: `lvl${id}_d5`,
          x: 3.5,
          y: 49.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Dorato della Parasta Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Capitello Dorato della Parasta Sinistra', nascosto nell'ambiente.",
          loreClue: "Il sontuoso capitello composito intarsiato a rilievo d"
        },
        {
          id: `lvl${id}_d6`,
          x: 77.0,
          y: 38.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Cariatide Dorata della Lunetta Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cariatide Dorata della Lunetta Destra', nascosto nell'ambiente.",
          loreClue: "La cariatide cesellata di sostegno sulla trabeazione superiore destra è stata asportata."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEighteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.0,
          y: 75.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore del Pilastro Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio Inferiore del Pilastro Sinistro', nascosto nell'ambiente.",
          loreClue: "Il teschio alla quota inferiore della parete sinistra è scomparso lasciando visibile una cavità."
        },
        {
          id: `lvl${id}_d2`,
          x: 75.5,
          y: 68.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore della Campata Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio Inferiore della Campata Destra', nascosto nell'ambiente.",
          loreClue: "Il teschio incastonato alla base del muretto d"
        },
        {
          id: `lvl${id}_d3`,
          x: 33.5,
          y: 72.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Zoccolatura Centrale",
          riddle: "L'antico guardiano silenzioso che veglia sulla soglia come eterno monito.",
          loreClue: "Il cranio che scandiva la fascia marcapiano d"
        },
        {
          id: `lvl${id}_d4`,
          x: 30.5,
          y: 32.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Seconda Fila a Sinistra",
          riddle: "L'antico guardiano silenzioso che veglia sulla soglia come eterno monito.",
          loreClue: "Il teschio sentinella della fila superiore sinistra è stato rimosso dalla catasta funeraria."
        },
        {
          id: `lvl${id}_d5`,
          x: 81.0,
          y: 35.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Modanatura d",
          riddle: "L'antico guardiano silenzioso che veglia sulla soglia come eterno monito.",
          loreClue: "Il cranio allineato lungo la cornice superiore destra è stato sottratto dagli inseguitori."
        },
        {
          id: `lvl${id}_d6`,
          x: 10.5,
          y: 26.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Estremo del Cantone Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cranio Estremo del Cantone Sinistro', nascosto nell'ambiente.",
          loreClue: "Il teschio che segna l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNineteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.0,
          y: 46.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto delle Carte Nautiche a Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Dipinto delle Carte Nautiche a Sinistra', nascosto nell'ambiente.",
          loreClue: "La grande veduta cartografica incorniciata nella lunetta sinistra è stata staccata."
        },
        {
          id: `lvl${id}_d2`,
          x: 62.5,
          y: 77.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Ringhiera in Ottone del Banco da Disegno",
          riddle: "Indizio cruciale dell'indagine legato a 'La Ringhiera in Ottone del Banco da Disegno', nascosto nell'ambiente.",
          loreClue: "Il corrimano tubolare in ottone massiccio che proteggeva il tavolo da disegno è stato tolto."
        },
        {
          id: `lvl${id}_d3`,
          x: 94.0,
          y: 4.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Rosone di Cristallo Superiore a Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rosone di Cristallo Superiore a Destra', nascosto nell'ambiente.",
          loreClue: "Il lampadario emisferico in cristallo e bronzo dorato calato dalla volta è stato rimosso."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.0,
          y: 46.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto Paesaggistico della Parete Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Dipinto Paesaggistico della Parete Destra', nascosto nell'ambiente.",
          loreClue: "La veduta costiera incorniciata in foglia d"
        },
        {
          id: `lvl${id}_d5`,
          x: 48.0,
          y: 46.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Grande Lampadario di Cristallo Centrale",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il maestoso lampadario a gocce di cristallo al centro dello studio è scomparso per operare al buio."
        },
        {
          id: `lvl${id}_d6`,
          x: 61.5,
          y: 16.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La figura scultorea in stucco dorato che sormontava l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 2",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwenty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.0,
          y: 94.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua del Cavaliere Custode a Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua del Cavaliere Custode a Sinistra', nascosto nell'ambiente.",
          loreClue: "La scultura in marmo del cavaliere templare che vegliava sul lato sinistro dell"
        },
        {
          id: `lvl${id}_d2`,
          x: 85.5,
          y: 94.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua del Gran Priore a Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua del Gran Priore a Destra', nascosto nell'ambiente.",
          loreClue: "La figura monumentale scolpita in pietra d"
        },
        {
          id: `lvl${id}_d3`,
          x: 26.5,
          y: 71.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Lampadario Gotico Sospeso a Sinistra",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La corona di fiamme a sesto acuto calata sulla navata sinistra è stata divelta per nascondere la fuga."
        },
        {
          id: `lvl${id}_d4`,
          x: 71.5,
          y: 71.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Lampadario Gotico Sospeso a Destra",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il pesante lampadario pensile dorato sopra gli stalli di destra è stato smontato."
        },
        {
          id: `lvl${id}_d5`,
          x: 94.5,
          y: 18.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Candelabro Monumentale della Parete Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Candelabro Monumentale della Parete Destra', nascosto nell'ambiente.",
          loreClue: "Il grande candelabro liturgico in ottone ancorato al fascio di colonnine è scomparso dal muro."
        },
        {
          id: `lvl${id}_d6`,
          x: 5.0,
          y: 18.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Candelabro Monumentale della Parete Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Candelabro Monumentale della Parete Sinistra', nascosto nell'ambiente.",
          loreClue: "Il portalampada in bronzo dorato fissato sul montante gotico sinistro è stato strappato dalla pietra."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
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
          x: 56.1,
          y: 77.5,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Compasso Nautico sulla Mappa del Catai",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "Il compasso in ottone a punte aperte sulla rotta di Marco Polo è svanito: gli intrusi volevano celare la rotta verso Oriente."
        },
        {
          id: `lvl${id}_d2`,
          x: 94.4,
          y: 72.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Candeliere di Bronzo sul Tavolo",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Candeliere di Bronzo sul Tavolo', nascosto nell'ambiente.",
          loreClue: "Il pesante candeliere in bronzo con il cero acceso è stato ribaltato e sottratto per operare nell"
        },
        {
          id: `lvl${id}_d3`,
          x: 75.2,
          y: 68.4,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calamaio di Pietra con Penna d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Calamaio di Pietra con Penna d', nascosto nell'ambiente.",
          loreClue: "Il calamaio in pietra nera e la penna da calligrafo con cui il viaggiatore tracciava i diari sono scomparsi."
        },
        {
          id: `lvl${id}_d4`,
          x: 28.2,
          y: 72.5,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Taccuino di Viaggio in Cuoio",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Taccuino di Viaggio in Cuoio', nascosto nell'ambiente.",
          loreClue: "Il diario rilegato in cuoio brunito contenente i crittogrammi della Via della Seta è stato trafugato."
        },
        {
          id: `lvl${id}_d5`,
          x: 76.2,
          y: 13.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Clessidra Marinaresca sullo Scaffale",
          riddle: "Indizio cruciale dell'indagine legato a 'La Clessidra Marinaresca sullo Scaffale', nascosto nell'ambiente.",
          loreClue: "La clessidra d"
        },
        {
          id: `lvl${id}_d6`,
          x: 38.8,
          y: 66.6,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Boccetta di Spezie Orientali",
          riddle: "Indizio cruciale dell'indagine legato a 'La Boccetta di Spezie Orientali', nascosto nell'ambiente.",
          loreClue: "La boccetta farmaceutica in vetro ambrato con i pigmenti alchemici cinesi è stata sottratta dal banco."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwentyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 89.8,
          radius: 7.5,
          clueType: 'sabotage',
          name: "I Banchi Lignei dei Patrizi al Centro",
          riddle: "Indizio cruciale dell'indagine legato a 'I Banchi Lignei dei Patrizi al Centro', nascosto nell'ambiente.",
          loreClue: "Gli scranni cerimoniali in noce intagliato dei patrizi al centro della sala sono stati rimossi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 25.1,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Ghirlanda Superiore della Sala Ducale",
          riddle: "Indizio cruciale dell'indagine legato a 'La Ghirlanda Superiore della Sala Ducale', nascosto nell'ambiente.",
          loreClue: "I festoni dorati in stucco sopra l"
        },
        {
          id: `lvl${id}_d3`,
          x: 79.2,
          y: 8.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cassettone Dorato della Volta Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cassettone Dorato della Volta Destra', nascosto nell'ambiente.",
          loreClue: "I racemi d"
        },
        {
          id: `lvl${id}_d4`,
          x: 20.8,
          y: 8.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Cassettone Dorato della Volta Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cassettone Dorato della Volta Sinistra', nascosto nell'ambiente.",
          loreClue: "Il fregio dorato a rilievo nel cassettonato a sinistra è stato piallato lasciando il fondo scuro."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 7.2,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Grande Medaglione Centrale del Veronese",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "La figura allegorica centrale del soffitto monumentale svanisce nel fondo bruno della tela."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 58.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto delle Vittorie Navali a Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Dipinto delle Vittorie Navali a Sinistra', nascosto nell'ambiente.",
          loreClue: "Il grande telerio storico raffigurante la battaglia navale di Lepanto appare oscurato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwentyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 17.5,
          y: 13.9,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Mosaico Dorato dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Mosaico Dorato dell', nascosto nell'ambiente.",
          loreClue: "Le tessere d"
        },
        {
          id: `lvl${id}_d2`,
          x: 87.5,
          y: 55.2,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Bizantino del Pilastro Destro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Capitello Bizantino del Pilastro Destro', nascosto nell'ambiente.",
          loreClue: "Le foglie d"
        },
        {
          id: `lvl${id}_d3`,
          x: 12.5,
          y: 55.2,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Bizantino del Pilastro Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Capitello Bizantino del Pilastro Sinistro', nascosto nell'ambiente.",
          loreClue: "Il capitello a nido d"
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 72.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Colonna di Verde Antico Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Colonna di Verde Antico Destra', nascosto nell'ambiente.",
          loreClue: "La colonna in marmo verde tessalico a destra è stata rimossa durante i lavori clandestini."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 72.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Colonna di Porfido Rosso Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Colonna di Porfido Rosso Sinistra', nascosto nell'ambiente.",
          loreClue: "Il fusto monolitico in prezioso porfido egizio della navata sinistra è scomparso dal plinto."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.5,
          y: 13.9,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Mosaico Dorato dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Mosaico Dorato dell', nascosto nell'ambiente.",
          loreClue: "Il motivo bizantino a tessere auree sull"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwentyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 56.9,
          y: 69.2,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Gondola con Passaggeri in Transito",
          riddle: "Indizio cruciale dell'indagine legato a 'La Gondola con Passaggeri in Transito', nascosto nell'ambiente.",
          loreClue: "La gondola veneziana con il ferro di prua in primo piano è svanita dalla superficie del canale."
        },
        {
          id: `lvl${id}_d2`,
          x: 31.0,
          y: 82.7,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Grandi Pali d",
          riddle: "Indizio cruciale dell'indagine legato a 'I Grandi Pali d', nascosto nell'ambiente.",
          loreClue: "I massicci pali lignei d"
        },
        {
          id: `lvl${id}_d3`,
          x: 59.0,
          y: 29.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Grata Traforata della Finestra Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grata Traforata della Finestra Destra', nascosto nell'ambiente.",
          loreClue: "Il prezioso reticolo marmoreo traforato della finestra destra del ponte è stato scardinato."
        },
        {
          id: `lvl${id}_d4`,
          x: 45.9,
          y: 29.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Grata Traforata della Finestra Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grata Traforata della Finestra Sinistra', nascosto nell'ambiente.",
          loreClue: "La grata in pietra a traforo floreale della finestra sinistra sul Rio di Palazzo è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 46.7,
          y: 9.8,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Grande Voluta del Fastigio Superiore",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grande Voluta del Fastigio Superiore', nascosto nell'ambiente.",
          loreClue: "La monumentale voluta a spirale in pietra d"
        },
        {
          id: `lvl${id}_d6`,
          x: 54.2,
          y: 17.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua della Giustizia sul Timpano",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua della Giustizia sul Timpano', nascosto nell'ambiente.",
          loreClue: "Il bassorilievo della Giustizia assisa in trono sul frontone monumentale è stato rimosso."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwentyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 7.2,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Rosone Centrale in Foglia d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rosone Centrale in Foglia d', nascosto nell'ambiente.",
          loreClue: "La sontuosa corona di stucchi dorati al centro del soffitto del teatro è scomparsa."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 17.3,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Palchetto Superiore d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Palchetto Superiore d', nascosto nell'ambiente.",
          loreClue: "Il parapetto in legno dorato e damasco serico dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 17.3,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Palchetto Superiore d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Palchetto Superiore d', nascosto nell'ambiente.",
          loreClue: "I rilievi dorati a lira del loggione superiore destro svaniscono nella parete."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 73.1,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Settore Centrale delle Poltrone di Platea",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Settore Centrale delle Poltrone di Platea', nascosto nell'ambiente.",
          loreClue: "Le poltrone in velluto rosso cremisi al centro della platea sono state sgomberate."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.5,
          y: 67.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Parapetto in Velluto del Palco Destro",
          riddle: "Soffice manufatto in tessuto che cela scomparti o reperti al suo interno.",
          loreClue: "I festoni in foglia d"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 93.1,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Buca dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Buca dell', nascosto nell'ambiente.",
          loreClue: "Il leggio monumentale del maestro concertatore nella fossa d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwentySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 91.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "I Banchi di Lettura in Noce della Navata",
          riddle: "Indizio cruciale dell'indagine legato a 'I Banchi di Lettura in Noce della Navata', nascosto nell'ambiente.",
          loreClue: "Il monumentale banco da consultazione con leggio intarsiato in primo piano è scomparso."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 66.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tavolo di Studio dei Manoscritti Greci",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tavolo di Studio dei Manoscritti Greci', nascosto nell'ambiente.",
          loreClue: "La grande postazione in noce dove erano esposti i codici marciani è stata rimossa."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 26.2,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Cornice a Festoni Dorati del Sansovino",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cornice a Festoni Dorati del Sansovino', nascosto nell'ambiente.",
          loreClue: "I rilievi in stucco dorato attorno all"
        },
        {
          id: `lvl${id}_d4`,
          x: 90.0,
          y: 41.9,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua Antica nella Nicchia Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua Antica nella Nicchia Destra', nascosto nell'ambiente.",
          loreClue: "La scultura in marmo pario sul pilastro destro della sala dei filosofi è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 8.4,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Centrale dei Filosofi sul Soffitto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tondo Centrale dei Filosofi sul Soffitto', nascosto nell'ambiente.",
          loreClue: "La composizione pittorica rinascimentale a olio al centro della volta appare velata."
        },
        {
          id: `lvl${id}_d6`,
          x: 21.7,
          y: 10.6,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Dipinto del Soffitto a Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tondo Dipinto del Soffitto a Sinistra', nascosto nell'ambiente.",
          loreClue: "La tela a olio di Paolo Veronese nel riquadro dorato sinistro è stata asportata."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwentySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 92.1,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Pavimento in Seminato Veneziano Policromo",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pavimento in Seminato Veneziano Policromo', nascosto nell'ambiente.",
          loreClue: "I marmi rossi e bianchi intarsiati nel terrazzo veneziano appaiono uniformati e grigi."
        },
        {
          id: `lvl${id}_d2`,
          x: 11.7,
          y: 51.9,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Busto in Marmo del Patrizio a Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Busto in Marmo del Patrizio a Sinistra', nascosto nell'ambiente.",
          loreClue: "La scultura in marmo di Carrara sul piedistallo di diaspro a sinistra è stata tolta."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 28.5,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Grande Lampadario di Murano a Ciocca",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il sontuoso lampadario a bracci floreali in vetro soffiato policromo di Murano è scomparso."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.3,
          y: 77.6,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Poltrona Rococò Rivestita in Seta Sinistra",
          riddle: "Soffice manufatto in tessuto che cela scomparti o reperti al suo interno.",
          loreClue: "La poltrona dorata intagliata a foglia d"
        },
        {
          id: `lvl${id}_d5`,
          x: 13.3,
          y: 11.7,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Trave Maestra Dipinta alla Sansovina",
          riddle: "Indizio cruciale dell'indagine legato a 'La Trave Maestra Dipinta alla Sansovina', nascosto nell'ambiente.",
          loreClue: "I racemi policromi della trave dipinta a sinistra appaiono piallati a legno nudo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 6.1,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La figura allegorica della Nobiltà al vertice del soffitto è svanita nell"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwentyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 43.3,
          y: 91.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Palo d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Palo d', nascosto nell'ambiente.",
          loreClue: "Il palo da gondola dipinto a spirale bianca e azzurra in primo piano è scomparso dalla laguna."
        },
        {
          id: `lvl${id}_d2`,
          x: 87.9,
          y: 47.4,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Lanterna Navale del Battello di Linea",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lanterna Navale del Battello di Linea', nascosto nell'ambiente.",
          loreClue: "Il faro di navigazione in ottone a babordo sul battello di linea è scomparso."
        },
        {
          id: `lvl${id}_d3`,
          x: 76.7,
          y: 75.3,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Ferro di Poppa della Gondola nel Bacino",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Ferro di Poppa della Gondola nel Bacino', nascosto nell'ambiente.",
          loreClue: "Il ricciolo metallico posteriore dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 40.0,
          y: 65.3,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Briccola Tripla d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Briccola Tripla d', nascosto nell'ambiente.",
          loreClue: "La briccola in massicci tronchi di rovere piantata nel fondale del canale è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 55.0,
          y: 52.5,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Cupola Maggiore Ottagonale della Salute",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cupola Maggiore Ottagonale della Salute', nascosto nell'ambiente.",
          loreClue: "La grande lanterna sommitale con la statua della Vergine svanisce dal profilo celeste."
        },
        {
          id: `lvl${id}_d6`,
          x: 63.4,
          y: 25.1,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Cupola Minore della Basilica della Salute",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cupola Minore della Basilica della Salute', nascosto nell'ambiente.",
          loreClue: "La cupola secondaria del capolavoro del Longhena è scomparsa dal profilo monumentale."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 3",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelTwentyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 58.3,
          y: 55.8,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Colonna Dorica Destra di Porta Magna",
          riddle: "Indizio cruciale dell'indagine legato a 'La Colonna Dorica Destra di Porta Magna', nascosto nell'ambiente.",
          loreClue: "La colonna marmorea rinascimentale del portale trionfale è sostituita da muratura liscia."
        },
        {
          id: `lvl${id}_d2`,
          x: 16.7,
          y: 55.8,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Merlo Ghibellino della Torre Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Merlo Ghibellino della Torre Sinistra', nascosto nell'ambiente.",
          loreClue: "Il merlo a coda di rondine sulla cinta muraria merlata è scomparso dal profilo della fortezza."
        },
        {
          id: `lvl${id}_d3`,
          x: 33.3,
          y: 82.6,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Pilastro della Cancellata in Ferro Battuto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pilastro della Cancellata in Ferro Battuto', nascosto nell'ambiente.",
          loreClue: "La colonnina in pietra con sfera sommitale che regge la cancellata storica è stata tolta."
        },
        {
          id: `lvl${id}_d4`,
          x: 75.0,
          y: 46.9,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "La Statua di Santa Giustina sul Fastigio",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua di Santa Giustina sul Fastigio', nascosto nell'ambiente.",
          loreClue: "La scultura marmorea della patrona della battaglia di Lepanto è assente dal frontone."
        },
        {
          id: `lvl${id}_d5`,
          x: 66.7,
          y: 73.7,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Carronata d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Carronata d', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d6`,
          x: 75.0,
          y: 29.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Bassorilievo del Leone Alato Marciano",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bassorilievo del Leone Alato Marciano', nascosto nell'ambiente.",
          loreClue: "Il rilievo del Leone alato con il libro aperto sull"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 66.7,
          y: 46.9,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Bottega d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Bottega d', nascosto nell'ambiente.",
          loreClue: "La bottega d"
        },
        {
          id: `lvl${id}_d2`,
          x: 58.3,
          y: 73.7,
          radius: 7.5,
          clueType: 'sabotage',
          name: "Il Tendalino Bianco della Gondola dei Nobili",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tendalino Bianco della Gondola dei Nobili', nascosto nell'ambiente.",
          loreClue: "Il caratteristico felze o copertura in tela dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 33.3,
          y: 55.8,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Ferro di Prua Pettinato della Gondola",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Ferro di Prua Pettinato della Gondola', nascosto nell'ambiente.",
          loreClue: "Il rostro d"
        },
        {
          id: `lvl${id}_d4`,
          x: 25.0,
          y: 29.0,
          radius: 7.5,
          clueType: 'stolen_relic',
          name: "Il Rilievo dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo dell', nascosto nell'ambiente.",
          loreClue: "La scultura in pietra d"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 38.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il grande rilievo della chiave di volta del ponte monumentale è stato scalpellato."
        },
        {
          id: `lvl${id}_d6`,
          x: 8.3,
          y: 38.0,
          radius: 7.5,
          clueType: 'sabotage',
          name: "La Finestra a Bifora Gotica sul Canal Grande",
          riddle: "Indizio cruciale dell'indagine legato a 'La Finestra a Bifora Gotica sul Canal Grande', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
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
          x: 62.0,
          y: 66.6,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Pugnale Cerimoniale nel Sarcofago",
          riddle: "Lama o ferro pesante adoperato per difendere la cripta o aprirsi un varco.",
          loreClue: "Un antico pugnale minoico in bronzo e oro riposa sul fondo del sarcofago in pietra; la Mano Oscura ha tentato di asportarlo."
        },
        {
          id: `lvl${id}_d2`,
          x: 28.8,
          y: 81.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Lo Schizzo del Toro di Cnosso",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Sulla pagina sinistra del taccuino di scavo compare il rilievo a matita della Taurocatarsia con le coordinate del santuario."
        },
        {
          id: `lvl${id}_d3`,
          x: 41.5,
          y: 78.3,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Lente d",
          riddle: "Superficie ottica che riflette o moltiplica la vista dei dettagli celati.",
          loreClue: "La lente da campo in ottone usata per analizzare i frammenti di ceramica kamares è stata rimossa dal tavolo da disegno."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.4,
          y: 68.5,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Matrice di Scavo KN-40",
          riddle: "Indizio cruciale dell'indagine legato a 'La Matrice di Scavo KN-40', nascosto nell'ambiente.",
          loreClue: "Sulla spalla del grande pithos a motivi di corda compare la marcatura a gesso dello scavo archeologico KN-40."
        },
        {
          id: `lvl${id}_d5`,
          x: 13.2,
          y: 58.9,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Filo a Piombo del Teodolite",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Filo a Piombo del Teodolite', nascosto nell'ambiente.",
          loreClue: "Un pesante filo a piombo conico in ottone del treppiede geodetico è stato reciso per falsare le quote altimetriche."
        },
        {
          id: `lvl${id}_d6`,
          x: 19.9,
          y: 40.8,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Martello da Geologo sulla Cassa",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Martello da Geologo sulla Cassa', nascosto nell'ambiente.",
          loreClue: "Un piccone da geologo con manico di frassino è posato sopra la cassa di spedizione marchiata Heraklion."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirtyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 88.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Bacino Idraulico Lustrale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bacino Idraulico Lustrale', nascosto nell'ambiente.",
          loreClue: "Il bacino lustrale in pietra calcarea al centro della sala delle purificazioni reca tracce di oli rituali asportati."
        },
        {
          id: `lvl${id}_d2`,
          x: 12.0,
          y: 40.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Grifone Guardiano dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Grifone Guardiano dell', nascosto nell'ambiente.",
          loreClue: "La figura araldica del grifone minoico senza ali sull"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 10.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Fregio Superiore a Spirali d",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "Il fregio policromo a spirali marine sopra lo schienale del trono è stato scalpellato per nascondere una cavità."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 62.1,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Seduta Ergonomica del Trono di Gesso",
          riddle: "Indizio cruciale dell'indagine legato a 'La Seduta Ergonomica del Trono di Gesso', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 88.0,
          y: 40.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Grifone Solare dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Grifone Solare dell', nascosto nell'ambiente.",
          loreClue: "Il grifone cerimoniale della parete destra custodisce tra gli artigli il simbolo del Labirinto."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.1,
          y: 65.0,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Sedile Continuo della Panca di Corte",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Sedile Continuo della Panca di Corte', nascosto nell'ambiente.",
          loreClue: "La panca continua in gesso per i consiglieri minoici a sinistra presenta una giuntura muraria forzata."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirtyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 40.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Grande Delfino Centrale dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Grande Delfino Centrale dell', nascosto nell'ambiente.",
          loreClue: "Il maestoso delfino azzurro con ventre dorato al centro del megaron della regina indica la rotta verso Alessandria."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Fregio Geometrico a Meandro Marino",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "La fascia a meandro continuo che corona la composizione marina è stata alterata per occultare una cifra dedalica."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 42.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Banco di Pesci Corallini a Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Banco di Pesci Corallini a Destra', nascosto nell'ambiente.",
          loreClue: "Il gruppo di piccoli pesci variopinti che nuotano verso est rivela la corrente marina verso l"
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 42.0,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Delfino Minore in Fase di Salto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Delfino Minore in Fase di Salto', nascosto nell'ambiente.",
          loreClue: "La sagoma del giovane delfino che emerge tra le onde è stata scheggiata dagli emissari della Mano Oscura."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.0,
          y: 70.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "La Pinna Caudale del Delfino Inferiore",
          riddle: "Indizio cruciale dell'indagine legato a 'La Pinna Caudale del Delfino Inferiore', nascosto nell'ambiente.",
          loreClue: "La doppia pinna caudale arcuata del delfino guida tocca il rilievo di una stella nautica a otto punte."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.0,
          y: 75.1,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "Il Pilastro Monolitico del Pozzo di Luce",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il pilastro in calcare che delimita il cavedio luminoso della regina nascondeva una tavoletta in Lineare A."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirtyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Grande Pithos Cerimoniale Destro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Grande Pithos Cerimoniale Destro', nascosto nell'ambiente.",
          loreClue: "Il monumentale pithos in terracotta per l"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Trave di Cedro della Galleria Magazzini",
          riddle: "Indizio cruciale dell'indagine legato a 'La Trave di Cedro della Galleria Magazzini', nascosto nell'ambiente.",
          loreClue: "La trave maestra di cedro del Libano presenta un"
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 78.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Lastra del Cunicolo di Scolo a Terra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lastra del Cunicolo di Scolo a Terra', nascosto nell'ambiente.",
          loreClue: "La lastra pavimentale del canale idraulico sotterraneo è stata scalfita per accedere ai magazzini sigillati."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "Il Pithos da Riserva a Nastro Rilievato",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pithos da Riserva a Nastro Rilievato', nascosto nell'ambiente.",
          loreClue: "Il vaso gigante con decorazione a corda ritorta a sinistra conteneva tavolette d"
        },
        {
          id: `lvl${id}_d5`,
          x: 65.0,
          y: 45.1,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Cassa d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassa d', nascosto nell'ambiente.",
          loreClue: "La cassa sigillata con argilla cruda conteneva i registri commerciali delle rotte tra Creta ed Egitto."
        },
        {
          id: `lvl${id}_d6`,
          x: 38.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Pavimento a Lastre di Gesso Selenite",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pavimento a Lastre di Gesso Selenite', nascosto nell'ambiente.",
          loreClue: "Il pavimento in blocchi squadrati di selenite rifletteva la luce della torcia verso il corridoio segreto."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirtyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 10.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Fregio Superiore della Processione",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "La fascia floreale a gigli stilizzati che corona la processione minoica è stata manomessa."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 85.1,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Vaso Rituale Rython a Terra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Vaso Rituale Rython a Terra', nascosto nell'ambiente.",
          loreClue: "Il prezioso rython conico in clorite verde usato per le libagioni del santuario è stato sottratto dal pavimento."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 88.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Portatore di Vasi d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Portatore di Vasi d', nascosto nell'ambiente.",
          loreClue: "La figura del coppiere reale che reca il grande vaso conico reca un pendente a forma di sole radiante."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.0,
          y: 12.1,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Rosone a Spirale della Cornice",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rosone a Spirale della Cornice', nascosto nell'ambiente.",
          loreClue: "La spirale a bassorilievo dell"
        },
        {
          id: `lvl${id}_d5`,
          x: 85.0,
          y: 85.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Base Lapidea della Parasta Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Base Lapidea della Parasta Destra', nascosto nell'ambiente.",
          loreClue: "La base in calcare rosa della parasta cerimoniale mostra segni di scavo clandestino recente."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirtySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 70.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Toro Sacro al Galoppo nel Cortile",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Il possente toro nero sacrificatore nel grande affresco centrale punta le corna verso l"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La figura dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 90.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Le Corna di Consacrazione Monolitiche",
          riddle: "Indizio cruciale dell'indagine legato a 'Le Corna di Consacrazione Monolitiche', nascosto nell'ambiente.",
          loreClue: "Le monumentali corna in pietra calcarea sulla sommità del cortile recano incisi i cicli solari ed equinoziali."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Dama con Fregio di Lapislazzuli",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "La sacerdotessa che assiste al rito della taurocatarsia stringe un nastro sacro in porpora di Tiro."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 65.0,
          radius: 8.0,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il piano in selenite dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 12.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Colonna Rastremata del Portico Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'La Colonna Rastremata del Portico Sinistro', nascosto nell'ambiente.",
          loreClue: "La colonna rastremata in legno di cipresso dipinta di rosso minoico rivela la firma dell"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirtySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.1,
          y: 15.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Labrys Scolpito sul Pilastro Sinistro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Labrys Scolpito sul Pilastro Sinistro', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d2`,
          x: 82.1,
          y: 15.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Labrys Gemello sul Pilastro Destro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Labrys Gemello sul Pilastro Destro', nascosto nell'ambiente.",
          loreClue: "La seconda ascia sacra incisa nel calcare forma la coppia d"
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Bacino delle Libagioni Lustrale Destro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bacino delle Libagioni Lustrale Destro', nascosto nell'ambiente.",
          loreClue: "La coppa monolitica scavata nel pavimento per le abluzioni prima dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 12.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Canale Idraulico Sotterraneo a Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Canale Idraulico Sotterraneo a Sinistra', nascosto nell'ambiente.",
          loreClue: "La canaletta di drenaggio in terracotta policroma che convogliava l"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.1,
          y: 12.2,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Chiave di Volta con Simbolo del Minotauro",
          riddle: "Strumento di ferro sagomato per disserrare passaggi e scrigni rimasti inviolati.",
          loreClue: "Il blocco centrale dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 48.0,
          y: 90.0,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "Il Pavimento di Selenite con Griglia Geometrica",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pavimento di Selenite con Griglia Geometrica', nascosto nell'ambiente.",
          loreClue: "Le lastre pavimentali lucide disegnano l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 4",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirtyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.0,
          y: 12.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Capitello a Cuscino della Colonna Sinistra",
          riddle: "Soffice manufatto in tessuto che cela scomparti o reperti al suo interno.",
          loreClue: "Il tipico capitello a toro espanso della colonna lignea sinistra contiene un vano cilindrico nascosto."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.0,
          y: 12.1,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Capitello Modanato della Colonna Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Capitello Modanato della Colonna Destra', nascosto nell'ambiente.",
          loreClue: "Il capitello dipinto di nero e oro della colonna destra reggeva una lucerna votiva in bronzo trafugata."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 65.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Lampada Votiva in Steatite Scolpita",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lucerna a tre becchi in steatite verde con rilievi di conchiglie è stata rovesciata tra le macerie."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 38.0,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Bassorilievo Parietale del Meandro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bassorilievo Parietale del Meandro', nascosto nell'ambiente.",
          loreClue: "Il rilievo su gesso che riproduce il mito del gomitolo di Arianna è stato raschiato dagli intrusi."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 88.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "La Lastra Sepolcrale al Centro della Cripta",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lastra Sepolcrale al Centro della Cripta', nascosto nell'ambiente.",
          loreClue: "La lastra pavimentale monolitica al centro della camera ipogea presenta anelli di sollevamento in bronzo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 10.1,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Fregiatura a Spirali del Soffitto",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fregiatura a Spirali del Soffitto', nascosto nell'ambiente.",
          loreClue: "Il motivo a spirale continua sul soffitto di cedro traccia la spirale logaritmica delle costellazioni minoiche."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelThirtyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.0,
          clueType: 'sabotage',
          name: "Il Portale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Portale d', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 88.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "La Scala Monumentale dei Grandi Gradini",
          riddle: "Indizio cruciale dell'indagine legato a 'La Scala Monumentale dei Grandi Gradini', nascosto nell'ambiente.",
          loreClue: "I gradini monolitici aperti a ventaglio conducono al livello più profondo del labirinto dedalico."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 68.0,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Fessura Muraria con Sigillo di Bronzo",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Una fessura orizzontale nella parete di selenite contiene una lamina metallica con iscrizioni in Lineare A."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'sabotage',
          name: "La Nicchia della Torcia Cerimoniale Sinistra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Nicchia della Torcia Cerimoniale Sinistra', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 15.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Bassorilievo del Labirinto Dedalico",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bassorilievo del Labirinto Dedalico', nascosto nell'ambiente.",
          loreClue: "Il diagramma a sette circuiti del labirinto inciso sul pilastro mostra il passaggio segreto verso l"
        },
        {
          id: `lvl${id}_d6`,
          x: 85.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Candelabro Fittile sul Parapetto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Candelabro Fittile sul Parapetto', nascosto nell'ambiente.",
          loreClue: "Il candelabro a treppiede in terracotta minoica è stato frantumato durante la fuga precipitosa degli emissari."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelForty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.0,
          y: 15.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "IL QUARTO SIGILLO: Il Labrys Minoico d",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 4: La monumentale doppia ascia d"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Stele Dedalica con la Mappa del Mediterraneo",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "La stele di gesso reca incisa la rotta marittima dal porto di Kommos fino al faro di Alessandria."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 18.0,
          y: 70.0,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "Il Disco di Festo in Argilla Cruda",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Disco di Festo in Argilla Cruda', nascosto nell'ambiente.",
          loreClue: "Il celebre disco d"
        },
        {
          id: `lvl${id}_d5`,
          x: 85.0,
          y: 45.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "La Cornice a Doppia Spirale della Volta",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cornice a Doppia Spirale della Volta', nascosto nell'ambiente.",
          loreClue: "La decorazione ad onde dorate che circonda la volta santuario indica il punto di congiunzione dei paralleli."
        },
        {
          id: `lvl${id}_d6`,
          x: 48.0,
          y: 40.0,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "Il Vaso da Libagione in Cristallo di Rocca",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Vaso da Libagione in Cristallo di Rocca', nascosto nell'ambiente.",
          loreClue: "Il prezioso rhyton a testa di toro in cristallo di rocca purissimo contiene l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
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
          x: 90.4,
          y: 61.4,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rotolo di Papiro di Tolomeo Filadelfo",
          riddle: "Documenti arrotolati che serbano annotazioni di viaggio e calcoli occulti.",
          loreClue: "Il rotolo di papiro con il catalogo dei tomi tolemaici è stato sottratto per celare la rotta lungo il Nilo."
        },
        {
          id: `lvl${id}_d2`,
          x: 60.2,
          y: 77.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Sfera Armillare Alessandrina di Bronzo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Sfera Armillare Alessandrina di Bronzo', nascosto nell'ambiente.",
          loreClue: "La monumentale sfera armillare usata per calcolare le declinazioni celesti è stata danneggiata sul cerchio meridiano."
        },
        {
          id: `lvl${id}_d3`,
          x: 60.5,
          y: 89.8,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 51.0,
          y: 26.2,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Busto in Marmo di Tolomeo Sotere",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Busto in Marmo di Tolomeo Sotere', nascosto nell'ambiente.",
          loreClue: "Il busto marmoreo del fondatore della biblioteca presenta un"
        },
        {
          id: `lvl${id}_d5`,
          x: 82.5,
          y: 83.8,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calamaio di Bronzo con Inchiostro di Seppia",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Calamaio di Bronzo con Inchiostro di Seppia', nascosto nell'ambiente.",
          loreClue: "Il calamaio in bronzo ellenistico usato dagli amanuensi reali è stato rovesciato sul tavolo di lettura."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.8,
          y: 49.8,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Tavoletta d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tavoletta d', nascosto nell'ambiente.",
          loreClue: "Una tavoletta d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFortyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Meridiana Gnomonica di Siene",
          riddle: "Indizio cruciale dell'indagine legato a 'La Meridiana Gnomonica di Siene', nascosto nell'ambiente.",
          loreClue: "Lo gnomone in bronzo con cui Eratostene calcolò la circonferenza della Terra è stato smussato."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Compasso Proporzionale di Rodi",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Compasso Proporzionale di Rodi', nascosto nell'ambiente.",
          loreClue: "Il compasso di precisione in lega d"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Carta Geografica del Delta del Nilo",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "La pergamena con i sette rami storici del Nilo mostra tagli netti in corrispondenza di Canopo."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Teodolite ad Acqua Alessandrino",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Teodolite ad Acqua Alessandrino', nascosto nell'ambiente.",
          loreClue: "Il livello idraulico a vasi comunicanti per il rilievo geodetico è stato sabotato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Peso Numismatico in Bronzo",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Peso Numismatico in Bronzo', nascosto nell'ambiente.",
          loreClue: "Il saggio di peso monetario con l"
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Lampada Copta a Olio d",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lucerna a forma di leone che illuminava il banco di cartografia è stata rovesciata."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFortyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Catena Portuale di Eunostos",
          riddle: "Indizio cruciale dell'indagine legato a 'La Catena Portuale di Eunostos', nascosto nell'ambiente.",
          loreClue: "La pesante maglia della catena difensiva che sbarrava il porto occidentale è stata tranciata."
        },
        {
          id: `lvl${id}_d2`,
          x: 12.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il ceppo d"
        },
        {
          id: `lvl${id}_d3`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Reliquiario Sommerso in Porfido",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Un piccolo scrigno in porfido rosso adagiato tra le alghe marine racchiude gemme alessandrine."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Rostro di Bronzo della Triremi",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rostro di Bronzo della Triremi', nascosto nell'ambiente.",
          loreClue: "Il rostro forgiato a testa di cinghiale della nave da guerra tolemaica appare manomesso."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Bitta d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Bitta d', nascosto nell'ambiente.",
          loreClue: "La colonna d"
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Forziere di Legno di Cedro Imbevuto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Forziere di Legno di Cedro Imbevuto', nascosto nell'ambiente.",
          loreClue: "La cassa di cariche commerciali affondata nel bacino interno è stata forzata e svuotata."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFortyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Grande Specchio Ustorio del Faro",
          riddle: "Superficie ottica che riflette o moltiplica la vista dei dettagli celati.",
          loreClue: "Il colossale specchio parabolico in bronzo lucidato sulla sommità del Pharos è stato scheggiato."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua Colossale di Poseidone",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua Colossale di Poseidone', nascosto nell'ambiente.",
          loreClue: "La statua monumentale che coronava la cuspide del faro ha perso il tridente cerimoniale."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Basamento Ottagonale con Iscrizione Greca",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Basamento Ottagonale con Iscrizione Greca', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Rampa a Spirale per i Carri di Combustibile",
          riddle: "Indizio cruciale dell'indagine legato a 'La Rampa a Spirale per i Carri di Combustibile', nascosto nell'ambiente.",
          loreClue: "La pavimentazione a blocchi di calcare della salita elicoidale appare franata."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lanterna a Fuoco Continuo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lanterna a Fuoco Continuo', nascosto nell'ambiente.",
          loreClue: "Il braciere alimentato a nafta e resina fossile è stato spento prima del previsto."
        },
        {
          id: `lvl${id}_d6`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Disco Solare di Puntamento Navale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Disco Solare di Puntamento Navale', nascosto nell'ambiente.",
          loreClue: "Il cerchio goniometrico in bronzo che proiettava i segnali luminosi a 30 miglia è sparito."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFortyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Gli Elementi di Geometria su Pergamena",
          riddle: "Documenti arrotolati che serbano annotazioni di viaggio e calcoli occulti.",
          loreClue: "Il manoscritto originale con la dimostrazione del postulato delle parallele è stato strappato."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Compasso a Settore Circolare",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Compasso a Settore Circolare', nascosto nell'ambiente.",
          loreClue: "Lo strumento ad arco graduato usato per inscrivere i poligoni sacri è stato asportato."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta Cerata con i Solidi Platonici",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tavoletta Cerata con i Solidi Platonici', nascosto nell'ambiente.",
          loreClue: "Il diagramma dei cinque poliedri regolari tracciato a stilo nella cera nera è stato levigato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Stele con la Sezione Aurea Incisa",
          riddle: "Indizio cruciale dell'indagine legato a 'La Stele con la Sezione Aurea Incisa', nascosto nell'ambiente.",
          loreClue: "La proporzione divina incisa su marmo pentelico mostra il rapporto armonico con la piramide."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Candelabro a Cinque Fiamme di Bronzo",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Candelabro a Cinque Fiamme di Bronzo', nascosto nell'ambiente.",
          loreClue: "Il candelabro geometrico poggiato sulla cattedra d"
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Lo Scrigno dei Sigilli di Rame",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Scrigno dei Sigilli di Rame', nascosto nell'ambiente.",
          loreClue: "La cassetta con i timbri corporativi dei matematici alessandrini è stata scassinata."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFortySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 12.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Paratoia Idraulica della Cisterna",
          riddle: "Indizio cruciale dell'indagine legato a 'La Paratoia Idraulica della Cisterna', nascosto nell'ambiente.",
          loreClue: "La saracinesca in bronzo fuso che regolava l"
        },
        {
          id: `lvl${id}_d2`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Colonna Sommersa con Capitello Corinzio",
          riddle: "Indizio cruciale dell'indagine legato a 'La Colonna Sommersa con Capitello Corinzio', nascosto nell'ambiente.",
          loreClue: "Il capitello in marmo proconnesio che emerge dall"
        },
        {
          id: `lvl${id}_d3`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo di Piombo dell",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "La borchia sigillare dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La colonna graduata in cubiti nilotici per la misurazione delle piene è stata manomessa."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Coppa Votiva in Vetro Soffiato di Canopo",
          riddle: "Recipiente cerimoniale per le libagioni durante i riti di consacrazione.",
          loreClue: "La raffinata coppa in pasta vitrea policroma con decorazioni a piuma è stata rubata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Cunicolo Cieco nel Muro di Mattoni",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cunicolo Cieco nel Muro di Mattoni', nascosto nell'ambiente.",
          loreClue: "La breccia aperta nella volta a botte delle condotte romane mostra tracce di esplosione."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 5",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFortySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il sofisticato astrolabio piano in ottone dorato inciso con le costellazioni tolemaiche è scomparso."
        },
        {
          id: `lvl${id}_d2`,
          x: 68.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Canone Astronomico su Papiro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Canone Astronomico su Papiro', nascosto nell'ambiente.",
          loreClue: "Il commentario di Ipazia all"
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il tubo graduato per misurare la densità dei liquidi alchemici è stato frantumato sul pavimento."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo Astrale della Volta Celeste",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo Astrale della Volta Celeste', nascosto nell'ambiente.",
          loreClue: "La volta affrescata con la sfera dei pianeti mostra le orbite ellittiche raschiate."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cattedra Filosofica in Noce",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cattedra Filosofica in Noce', nascosto nell'ambiente.",
          loreClue: "La sedia accademica da cui la filosofa teneva le lezioni ai discepoli presenta un vano forzato."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta con le Coordinate di Luxor",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tavoletta con le Coordinate di Luxor', nascosto nell'ambiente.",
          loreClue: "La lastrina di rame con l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFortyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Serpente Agatodemone",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo del Serpente Agatodemone', nascosto nell'ambiente.",
          loreClue: "Il serpente sacro guardiano delle catacombe con la doppia corona dell"
        },
        {
          id: `lvl${id}_d2`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Triclinio Funebre in Calcare",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Triclinio Funebre in Calcare', nascosto nell'ambiente.",
          loreClue: "Il banco a ferro di cavallo per i banchetti commemorativi dei defunti reca macchie di sostanze chimiche."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Lo Scudo con la Testa di Medusa",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Scudo con la Testa di Medusa', nascosto nell'ambiente.",
          loreClue: "Il tondo a rilievo a protezione della camera sepolcrale presenta fori di percussione recenti."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua di Anubi con Armatura Romana",
          riddle: "Lama o ferro pesante adoperato per difendere la cripta o aprirsi un varco.",
          loreClue: "La singolare statua sincretica del dio sciacallo in tenuta da legionario ha perso il giavellotto."
        },
        {
          id: `lvl${id}_d5`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Sarcofago Monolitico della Cripta",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Sarcofago Monolitico della Cripta', nascosto nell'ambiente.",
          loreClue: "Il pesante coperchio in calcare locale è stato scalzato con un palanchino di ferro."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Fregiatura a Ghirlande Greco-Egizie",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fregiatura a Ghirlande Greco-Egizie', nascosto nell'ambiente.",
          loreClue: "Il festone scolpito a motivi di papiri e foglie d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFortyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Colonna di Pompeo in Granito Rosso",
          riddle: "Indizio cruciale dell'indagine legato a 'La Colonna di Pompeo in Granito Rosso', nascosto nell'ambiente.",
          loreClue: "Il colossale fusto monolitico di granito rosso di Assuan mostra segni di scalpellamento alla base."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Sfinge di Basalto del Serapeo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Sfinge di Basalto del Serapeo', nascosto nell'ambiente.",
          loreClue: "La maestosa sfinge accovacciata a guardia dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Nicchia Murata della Statua di Serapide",
          riddle: "Indizio cruciale dell'indagine legato a 'La Nicchia Murata della Statua di Serapide', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 82.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Targa di Dedica in Bronzo Dorato",
          riddle: "Indizio cruciale dell'indagine legato a 'La Targa di Dedica in Bronzo Dorato', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Gradini della Scalinata Monumentale",
          riddle: "Indizio cruciale dell'indagine legato a 'I Gradini della Scalinata Monumentale', nascosto nell'ambiente.",
          loreClue: "I cento gradini d"
        },
        {
          id: `lvl${id}_d6`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Manoscritto Nascosto sotto il Plinto",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Un rotolo di pergamena sigillato con piombo era occultato nella fessura tra i blocchi."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFifty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL QUINTO SIGILLO: Lo Scarabeo Alato d",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 5: Il monumentale scarabeo pettorale in oro puro e lapislazzuli di Tolomeo! Il cuore della reliquia proietta la triangolazione per la Valle dei Re a Luxor."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Reliquiario Tolemaico in Avorio ed Ebano",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Lo scrigno intagliato che custodiva il Quinto Sigillo per oltre duemila anni è stato aperto."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Tavola Astronomica d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tavola Astronomica d', nascosto nell'ambiente.",
          loreClue: "La lastra di diorite nera con la rotta lungo il Nilo fino a Tebe mostra il sigillo della Mano Oscura."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calice da Libagione in Ossidiana",
          riddle: "Recipiente cerimoniale per le libagioni durante i riti di consacrazione.",
          loreClue: "Il calice rituale per le unzioni solari del faraone è stato rovesciato sull"
        },
        {
          id: `lvl${id}_d5`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Le ali spiegate del falco divino sull"
        },
        {
          id: `lvl${id}_d6`,
          x: 68.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Cifra Geometrica dei Sacerdoti di Tebe",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cifra Geometrica dei Sacerdoti di Tebe', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.7,
          y: 81.6,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Necropolare di Anubi",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Il sigillo d"
        },
        {
          id: `lvl${id}_d2`,
          x: 64.4,
          y: 53.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Canopo di Hapi con Testa di Babbuino",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Vaso Canopo di Hapi con Testa di Babbuino', nascosto nell'ambiente.",
          loreClue: "Il vaso rituale in alabastro egizio contenente gli oli sacri è stato rimosso dalla nicchia."
        },
        {
          id: `lvl${id}_d3`,
          x: 14.0,
          y: 90.2,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cazzuola di Scavo di Howard Carter",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cazzuola di Scavo di Howard Carter', nascosto nell'ambiente.",
          loreClue: "La cazzuola d"
        },
        {
          id: `lvl${id}_d4`,
          x: 44.2,
          y: 56.7,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La sacra chiave della vita intarsiata d"
        },
        {
          id: `lvl${id}_d5`,
          x: 81.2,
          y: 62.6,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lucerna a Olio in Bronzo Dorato",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lucerna cerimoniale usata per esplorare l"
        },
        {
          id: `lvl${id}_d6`,
          x: 92.3,
          y: 73.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rotolo di Lino Funerario Inciso",
          riddle: "Documenti arrotolati che serbano annotazioni di viaggio e calcoli occulti.",
          loreClue: "La bende di lino faraonico ricamate con formule protettive del Libro dei Morti sono state lacerate."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Capitello Papiriforme Aperto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Capitello Papiriforme Aperto', nascosto nell'ambiente.",
          loreClue: "Il colossale capitello della sala ipostila di Karnak mostra cartigli reali scalpellati via."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Bassorilievo di Amon-Ra con Corona a Doppia Piuma",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "La sagoma sacra del re degli dèi presenta il disco solare manomesso da emissari dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Lo Scarabeo Monolitico di Granito Rosa",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Scarabeo Monolitico di Granito Rosa', nascosto nell'ambiente.",
          loreClue: "Il gigantesco scarabeo di Khepri sulle rive del lago sacro reca un"
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Cartiglio di Ramses II sull",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cartiglio di Ramses II sull', nascosto nell'ambiente.",
          loreClue: "I geroglifici regali del grande faraone sull"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porta Monumentale del Terzo Pilone",
          riddle: "Indizio cruciale dell'indagine legato a 'La Porta Monumentale del Terzo Pilone', nascosto nell'ambiente.",
          loreClue: "Lo stipite in calcare con le formule di consacrazione è stato forzato con leve di ferro."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua del Falco Horus a Guardia dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua del Falco Horus a Guardia dell', nascosto nell'ambiente.",
          loreClue: "La scultura in diorite del dio falco ha perso il disco solare cerimoniale sul capo."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Colosso Settentrionale di Memnone",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Colosso Settentrionale di Memnone', nascosto nell'ambiente.",
          loreClue: "La statua monolitica di quarzite che emetteva suoni all"
        },
        {
          id: `lvl${id}_d2`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Nilo che Unisce l",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo del Nilo che Unisce l', nascosto nell'ambiente.",
          loreClue: "Il simbolo dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Targa Dedicatoria Greca dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Targa Dedicatoria Greca dell', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassa d', nascosto nell'ambiente.",
          loreClue: "La cassetta con martelli di rame e cunei da scalpellino è stata trafugata."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Monolito Minore della Regina Tiy",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Monolito Minore della Regina Tiy', nascosto nell'ambiente.",
          loreClue: "La figura regale scolpita a lato delle gambe del colosso reca il cobra reale decapitato."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Canale Idraulico dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Canale Idraulico dell', nascosto nell'ambiente.",
          loreClue: "La canaletta di contenimento per le piene del fiume alla base delle statue è ostruita da massi."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Terrazza Superiore del Tempio di Hatshepsut",
          riddle: "Indizio cruciale dell'indagine legato a 'La Terrazza Superiore del Tempio di Hatshepsut', nascosto nell'ambiente.",
          loreClue: "I pilastri osiriaci della terrazza sommitale mostrano i volti divini scalpellati dal successore."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo della Spedizione nella Terra di Punt",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo della Spedizione nella Terra di Punt', nascosto nell'ambiente.",
          loreClue: "La scena navale con i grandi alberi d"
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua della Sfinge Femminile in Calcare",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua della Sfinge Femminile in Calcare', nascosto nell'ambiente.",
          loreClue: "La sfinge reale con barba cerimoniale posta a guardia della rampa d"
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Cartiglio Reale di Maatkare Hatshepsut",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cartiglio Reale di Maatkare Hatshepsut', nascosto nell'ambiente.",
          loreClue: "Il nome d"
        },
        {
          id: `lvl${id}_d5`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Cappella di Anubi con Soffitto Stellato",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cappella di Anubi con Soffitto Stellato', nascosto nell'ambiente.",
          loreClue: "Le stelle dorate a cinque punte su fondo blu cobalto sono state raschiate dalla volta."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Braciere Cerimoniale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Braciere Cerimoniale d', nascosto nell'ambiente.",
          loreClue: "Il tripode in bronzo per i fumi votivi è stato rovesciato lungo la gradinata centrale."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La celebre pittura murale della regina che sfida il destino al gioco del Senet è scheggiata."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Scacchiera del Senet in Avorio e Legno Pregiato",
          riddle: "Indizio cruciale dell'indagine legato a 'La Scacchiera del Senet in Avorio e Legno Pregiato', nascosto nell'ambiente.",
          loreClue: "La scacchiera rituale a trenta caselle con pedine a testa di leone è stata sottratta."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Corona con le Corna di Hathor e Disco Solare",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Il copricapo divino della regina dipinto sull"
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Bastone Cerimoniale Pastorale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bastone Cerimoniale Pastorale', nascosto nell'ambiente.",
          loreClue: "Lo scettro heka intarsiato in oro e pasta vitrea azzurra è svanito dal sarcofago."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Nicchia dei Vasi Canopi della Regina",
          riddle: "Indizio cruciale dell'indagine legato a 'La Nicchia dei Vasi Canopi della Regina', nascosto nell'ambiente.",
          loreClue: "Il vano parietale sigillato che ospitava lo scrigno d"
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Formula Geroglifica della Rinascita",
          riddle: "Indizio cruciale dell'indagine legato a 'La Formula Geroglifica della Rinascita', nascosto nell'ambiente.",
          loreClue: "La colonna di testo dal capitolo 17 del Libro dei Morti presenta geroglifici abrasati."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 12.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Grande Obelisco Orientale di Ramses II",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Grande Obelisco Orientale di Ramses II', nascosto nell'ambiente.",
          loreClue: "Il monolito di granito rosso reca un allineamento gnomonico verso Siwa abraso alla base."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Criosfinge del Viale di Karnak-Luxor",
          riddle: "Indizio cruciale dell'indagine legato a 'La Criosfinge del Viale di Karnak-Luxor', nascosto nell'ambiente.",
          loreClue: "La statua di sfinge con testa di ariete a guardia del viale processionale è mutilata."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Colosso Seduto di Ramses con Doppia Corona",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "La possente statua all"
        },
        {
          id: `lvl${id}_d4`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Base Lapidea del Pilone di Destra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Base Lapidea del Pilone di Destra', nascosto nell'ambiente.",
          loreClue: "Le scene belliche della battaglia di Qadesh sul pilone mostrano fori di scavo recenti."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Lo Stendardo Processionale di Amon",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Stendardo Processionale di Amon', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d6`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cella Murata della Barca Sacra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cella Murata della Barca Sacra', nascosto nell'ambiente.",
          loreClue: "La pesante porta di cedro del Libano con lamine d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 6",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Colosso Caduto di Ramses (Ozymandias)",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Colosso Caduto di Ramses (Ozymandias)', nascosto nell'ambiente.",
          loreClue: "La testa colossale in granito abbattuta al suolo mostra fenditure recenti nel diadema reale."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "I Magazzini a Volta in Mattoni Crudi",
          riddle: "Indizio cruciale dell'indagine legato a 'I Magazzini a Volta in Mattoni Crudi', nascosto nell'ambiente.",
          loreClue: "Le storiche gallerie granaio del tempio presentano giare cerimoniali frantumate."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele della Vittoria di Tebe",
          riddle: "Indizio cruciale dell'indagine legato a 'La Stele della Vittoria di Tebe', nascosto nell'ambiente.",
          loreClue: "La lastra di diorite che elenca i tributi delle nazioni mediterranee è stata spaccata in due."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua della Madre Tuya",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua della Madre Tuya', nascosto nell'ambiente.",
          loreClue: "La scultura in pietra calcarea della madre del faraone è stata rimossa dal portico."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo Astronomico del Soffitto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo Astronomico del Soffitto', nascosto nell'ambiente.",
          loreClue: "Il diagramma delle trentasei decani celesti sulla volta è stato oscurato con pece."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Tazza Votiva in Ossidiana Nera",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tazza Votiva in Ossidiana Nera', nascosto nell'ambiente.",
          loreClue: "Il calice per le libagioni del santuario solare è stato asportato dalla mensa dell"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Volta Astronomica con i Moti Planetari",
          riddle: "Indizio cruciale dell'indagine legato a 'La Volta Astronomica con i Moti Planetari', nascosto nell'ambiente.",
          loreClue: "Il soffitto a botte della camera funeraria dipinto a volta celeste dorata presenta le costellazioni graffiate."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Sarcofago Monolitico in Puro Alabastro",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Sarcofago Monolitico in Puro Alabastro', nascosto nell'ambiente.",
          loreClue: "Il monumentale sarcofago traslucido istoriato con il Libro delle Porte è stato forzato."
        },
        {
          id: `lvl${id}_d3`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua del Guardiano Anubi su Baule Dorato",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua del Guardiano Anubi su Baule Dorato', nascosto nell'ambiente.",
          loreClue: "La figura lignea ricoperta di resina nera con collare d"
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Rilievo di Seti I Davanti a Osiride",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo di Seti I Davanti a Osiride', nascosto nell'ambiente.",
          loreClue: "La delicatissima pittura murale dell"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tavoletta d', nascosto nell'ambiente.",
          loreClue: "La lamina metallica che descrive il viaggio del sole negli inferi è stata strappata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lampada da Miniera dei Primi Esploratori",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lucerna a petrolio ottocentesca lasciata da Belzoni è stata rovesciata nel corridoio."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelFiftyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il frammento di calcare con il rilievo planimetrico delle tombe reali è stato rubato."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Lo Scalpello in Rame Tempra dei Costruttori",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Scalpello in Rame Tempra dei Costruttori', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Papiro Amministrativo dello Sciopero dei Lavoratori",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Papiro Amministrativo dello Sciopero dei Lavoratori', nascosto nell'ambiente.",
          loreClue: "Il resoconto storico delle proteste sotto Ramses III è stato asportato dalla cassa."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Stele Privata dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Stele Privata dell', nascosto nell'ambiente.",
          loreClue: "La stele funeraria policroma con la devozione a Ptah presenta la figura scalpellata."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Modello Architettonico in Pietra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Modello Architettonico in Pietra', nascosto nell'ambiente.",
          loreClue: "La maquette in scala di una tomba ipogea è stata mandata in frantumi sulla pavimentazione."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Serratura Lignea Egizia a Chiavistello",
          riddle: "Indizio cruciale dell'indagine legato a 'La Serratura Lignea Egizia a Chiavistello', nascosto nell'ambiente.",
          loreClue: "Il sofisticato catenaccio in legno di sicomoro con perni a caduta è stato scardinato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL SESTO SIGILLO: L",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 6: Il leggendario amuleto Uadjet in oro massiccio e smeraldo grezzo di Siwa! La pupilla proietta la rotta attraverso il Sahara libico verso l"
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Naos Monolitica in Granito Nero",
          riddle: "Indizio cruciale dell'indagine legato a 'La Naos Monolitica in Granito Nero', nascosto nell'ambiente.",
          loreClue: "Il tabernacolo sacro al centro del santuario è stato forzato per estrarre la reliquia millenaria."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Triade Divina di Tebe su Bassorilievo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Triade Divina di Tebe su Bassorilievo', nascosto nell'ambiente.",
          loreClue: "Le figure di Amon, Mut e Khonsu scolpite nel granito mostrano gli attributi reali alterati."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La mensa sacrificale dorata ove venivano posti i sigilli d"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Disco Solare con i Due Serpenti Uraei",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Disco Solare con i Due Serpenti Uraei', nascosto nell'ambiente.",
          loreClue: "Il simbolo del sole alato che corona l"
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Registro Cifrato dei Sacerdoti di Karnak",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il papiro sacro con le coordinate celesti che collegano Karnak a Paititi è stato ricomposto."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 95.4,
          y: 82.8,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lanterna a Petrolio sulla Trave della Tenda",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lanterna a Petrolio sulla Trave della Tenda', nascosto nell'ambiente.",
          loreClue: "La lanterna da campo antivento in ottone è stata staccata dal tirante per operare nell"
        },
        {
          id: `lvl${id}_d2`,
          x: 89.7,
          y: 24.5,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Teodolite Geodetico sulla Duna",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Teodolite Geodetico sulla Duna', nascosto nell'ambiente.",
          loreClue: "Il treppiede topografico con il filo a piombo conico è stato inclinato per falsare i rilievi dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 16.9,
          y: 76.6,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Barile di Legno con le Provviste d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Barile di Legno con le Provviste d', nascosto nell'ambiente.",
          loreClue: "La botte di rovere contenente la riserva idrica per la traversata delle dune è stata aperta e svuotata."
        },
        {
          id: `lvl${id}_d4`,
          x: 36.6,
          y: 22.3,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il sacro disco solare alato scolpito sul pilastro mostra tracce di scalpellatura recente."
        },
        {
          id: `lvl${id}_d5`,
          x: 41.2,
          y: 87.2,
          radius: 8.0,
          clueType: 'torn_evidence',
          name: "La Palina Metrica nel Trincerone",
          riddle: "Indizio cruciale dell'indagine legato a 'La Palina Metrica nel Trincerone', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d6`,
          x: 75.2,
          y: 70.8,
          radius: 8.0,
          clueType: 'stolen_relic',
          name: "La Borsa da Sella Tuareg in Cuoio",
          riddle: "Indizio cruciale dell'indagine legato a 'La Borsa da Sella Tuareg in Cuoio', nascosto nell'ambiente.",
          loreClue: "La bisaccia berbera con i registri delle rotte carovaniere attraverso il deserto libico è scomparsa."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Tripode Oracolare in Bronzo di Amon",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tripode Oracolare in Bronzo di Amon', nascosto nell'ambiente.",
          loreClue: "Il sacro tripode cerimoniale su cui sedeva la profetessa di Siwa è stato asportato dalla cella."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il blocco in arenaria sopra il portale d"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Fessura dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fessura dell', nascosto nell'ambiente.",
          loreClue: "Il condotto acustico segreto attraverso cui i sacerdoti sussurravano i vaticini è stato ostruito con malta."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Nicchia Murata del Tesoro Votivo",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lampada ad Olio Berbera in Pietra Tenera",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lucerna a tre beccucci scolpita nel gesso locale è stata rovesciata sulla scalinata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo del Serpente con le Corna d",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Spada Cerimoniale di Alessandro Magno",
          riddle: "Lama o ferro pesante adoperato per difendere la cripta o aprirsi un varco.",
          loreClue: "Il gladio macedone con elsa forgiata a testa di leone d"
        },
        {
          id: `lvl${id}_d2`,
          x: 82.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Lo Scudo di Bronzo con la Stella di Verghina",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Scudo di Bronzo con la Stella di Verghina', nascosto nell'ambiente.",
          loreClue: "Lo scudo da parata con l"
        },
        {
          id: `lvl${id}_d3`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Papiro della Profezia di Divina Discendenza",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Papiro della Profezia di Divina Discendenza', nascosto nell'ambiente.",
          loreClue: "Il rotolo sacro che proclamava il conquistatore figlio di Amon mostra bruciature sui bordi."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Bussola Solare da Sabbia Alessandrina",
          riddle: "Dispositivo di precisione che orienta i passi e pesa gli elementi della formula.",
          loreClue: "Lo strumento gnomonico a quadrante mobile usato dall"
        },
        {
          id: `lvl${id}_d5`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Miliario Macedone della Via Reale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Miliario Macedone della Via Reale', nascosto nell'ambiente.",
          loreClue: "Il cippo confinario in calcare che indicava la distanza da Alessandria è stato abbattuto."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa delle Monete d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassa delle Monete d', nascosto nell'ambiente.",
          loreClue: "Lo scrigno con i tetradrammi con Alessandro raffigurato con le corna d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La vivace pittura murale che unisce l"
        },
        {
          id: `lvl${id}_d2`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Corona di Mirto in Foglia d",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "La preziosa ghirlanda funeraria ellenistica deposta sul capo del nobile è stata rubata."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Pettorale con l",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pettorale con l', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Lastra di Chiusura dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lastra di Chiusura dell', nascosto nell'ambiente.",
          loreClue: "Il massiccio blocco che sigillava la tomba nella Montagna dei Morti è stato scalzato."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Cratere Ceramico Greco a Figure Rosse",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cratere Ceramico Greco a Figure Rosse', nascosto nell'ambiente.",
          loreClue: "Il grande vaso cerimoniale attico per le libagioni d"
        },
        {
          id: `lvl${id}_d6`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele Dipinta con Epigrafe Bilingue",
          riddle: "Indizio cruciale dell'indagine legato a 'La Stele Dipinta con Epigrafe Bilingue', nascosto nell'ambiente.",
          loreClue: "La lastrina con dedica in greco e geroglifico presenta le ultime righe raschiate."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Pavimento a Mosaico Sommerso della Sorgente",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pavimento a Mosaico Sommerso della Sorgente', nascosto nell'ambiente.",
          loreClue: "Le tessere di pasta vitrea azzurra che rivestono la vasca sorgiva mostrano lacune recenti."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Brocca di Terracotta con Marchio Tolemaico",
          riddle: "Indizio cruciale dell'indagine legato a 'La Brocca di Terracotta con Marchio Tolemaico', nascosto nell'ambiente.",
          loreClue: "Il recipiente da libagione per le acque minerali curative è stato asportato dal bordo vasca."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Balustra di Pietra Calcarea del Belvedere",
          riddle: "Indizio cruciale dell'indagine legato a 'La Balustra di Pietra Calcarea del Belvedere', nascosto nell'ambiente.",
          loreClue: "Il parapetto ombreggiato dalle palme da dattero mostra una colonna divelta."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta con l",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tavoletta con l', nascosto nell'ambiente.",
          loreClue: "Il registro lasciato dalla spedizione scientifica ottocentesca sulle proprietà delle fonti è stato strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lampada Galleggiante Cerimoniale",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lucerna a coppa di bronzo usata per i riti notturni dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Cancello di Ferro Battuto del Bagno Reale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cancello di Ferro Battuto del Bagno Reale', nascosto nell'ambiente.",
          loreClue: "La grata d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Muro di Sale e Fango (Kersheef) Forzato",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Muro di Sale e Fango (Kersheef) Forzato', nascosto nell'ambiente.",
          loreClue: "La caratteristica muratura in blocchi di sale fossile della cittadella medievale è stata perforata."
        },
        {
          id: `lvl${id}_d2`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porticina di Cedro Intagliata a Motivi Berberi",
          riddle: "Indizio cruciale dell'indagine legato a 'La Porticina di Cedro Intagliata a Motivi Berberi', nascosto nell'ambiente.",
          loreClue: "Il battente ligneo con complessi simboli geometrici protettivi è stato scardinato."
        },
        {
          id: `lvl${id}_d3`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Tappeto Nomade Tradizionale alle Pareti",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tappeto Nomade Tradizionale alle Pareti', nascosto nell'ambiente.",
          loreClue: "Il pesante arazzo in lana di cammello con la mappa astrale dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 12.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lucerna in Ferro Battuto dei Vicoli Ciechi",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La lanterna sospesa che illuminava il dedalo dei passaggi coperti è stata mandata in pezzi."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Registro Commerciale dei Mercanti di Sale",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il libro mastro rilegato in pelle di capra con le rotte carovaniere è stato sottratto."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Talismano d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Talismano d', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 7",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Monolito Residuo del Tempio di Nectanebo II",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Monolito Residuo del Tempio di Nectanebo II', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Faraone che Offre la Maat ad Amon",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo del Faraone che Offre la Maat ad Amon', nascosto nell'ambiente.",
          loreClue: "La sacra piuma dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Fenditura nella Muraglia Dorata",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fenditura nella Muraglia Dorata', nascosto nell'ambiente.",
          loreClue: "Una fessura orizzontale aperta tra i conci d"
        },
        {
          id: `lvl${id}_d4`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele Dedicatoria dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Stele Dedicatoria dell', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere in Granito Grigio delle Offerte",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Braciere in Granito Grigio delle Offerte', nascosto nell'ambiente.",
          loreClue: "La coppa per l"
        },
        {
          id: `lvl${id}_d6`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Lo scarabeo iscritto che proteggeva le fondamenta del santuario è stato rubato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Bussola da Carovana nel Cristallo di Selenite",
          riddle: "Dispositivo di precisione che orienta i passi e pesa gli elementi della formula.",
          loreClue: "Lo strumento d"
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Rosa del Deserto Monumentale tra le Sabbie",
          riddle: "Indizio cruciale dell'indagine legato a 'La Rosa del Deserto Monumentale tra le Sabbie', nascosto nell'ambiente.",
          loreClue: "La colossale concrezione minerale di gesso e sabbia presenta un"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Fossile Marino di Balena Preistorica",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Fossile Marino di Balena Preistorica', nascosto nell'ambiente.",
          loreClue: "Lo scheletro fossilizzato emerso dal fondale primordiale del Sahara mostra una vertebra asportata."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Tenda da Ricognizione della Spedizione",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tenda da Ricognizione della Spedizione', nascosto nell'ambiente.",
          loreClue: "Il telo mimetico dell"
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Taccuino delle Coordinate GPS e Celesti",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Taccuino delle Coordinate GPS e Celesti', nascosto nell'ambiente.",
          loreClue: "Le pagine con la rotta trans-sahariana verso Petra sono state strappate dal quaderno di campo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Fucile da Campo degli Esploratori",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Fucile da Campo degli Esploratori', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSixtyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Le Impronte di Mani in Ocra Rossa Preistoriche",
          riddle: "Indizio cruciale dell'indagine legato a 'Le Impronte di Mani in Ocra Rossa Preistoriche', nascosto nell'ambiente.",
          loreClue: "Le antichissime impronte rupestri lasciate millenni prima dei faraoni mostrano solventi chimici."
        },
        {
          id: `lvl${id}_d2`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Bassorilievo Rupestre della Giraffa e dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bassorilievo Rupestre della Giraffa e dell', nascosto nell'ambiente.",
          loreClue: "La scena di caccia del Sahara verde incisa nella roccia arenaria è stata scheggiata."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Ciotola in Pietra per la Miscelazione dei Pigmenti",
          riddle: "Indizio cruciale dell'indagine legato a 'La Ciotola in Pietra per la Miscelazione dei Pigmenti', nascosto nell'ambiente.",
          loreClue: "Il mortaio neolitico con residui di polvere d"
        },
        {
          id: `lvl${id}_d4`,
          x: 82.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Simbolo Astronomico delle Pleiadi sulla Volta",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "I sette punti incisi che rappresentavano la costellazione guida dei nomadi sono stati levigati."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Lucerna a Olio Animale dei Primi Uomini",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La coppa in arenaria concava usata per illuminare la caverna preistorica è stata asportata."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Fenditura d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fenditura d', nascosto nell'ambiente.",
          loreClue: "Lo stretto passaggio tra i massi franati mostra segni di allargamento con scalpelli moderni."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventy) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL SETTIMO SIGILLO: Il Corno d",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 7: Il leggendario corno d"
        },
        {
          id: `lvl${id}_d2`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Naos Segreta dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Naos Segreta dell', nascosto nell'ambiente.",
          loreClue: "Il tabernacolo monolitico di granito celato per oltre duemila anni è stato forzato dai cospiratori."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele con il Vaticinio di Alessandro",
          riddle: "Indizio cruciale dell'indagine legato a 'La Stele con il Vaticinio di Alessandro', nascosto nell'ambiente.",
          loreClue: "La lastra di diorite recante le parole del sacerdote che proclamava la conquista del mondo è spezzata."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il basamento in selenite che rifletteva la luce del primo sole d"
        },
        {
          id: `lvl${id}_d5`,
          x: 68.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Braciere d', nascosto nell'ambiente.",
          loreClue: "Il tripode d"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Flauto d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Flauto d', nascosto nell'ambiente.",
          loreClue: "Lo strumento sacro con cui veniva invocato lo spirito dell"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 78.3,
          y: 59.8,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Canale Idraulico Nabateo nella Roccia del Siq",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Canale Idraulico Nabateo nella Roccia del Siq', nascosto nell'ambiente.",
          loreClue: "La condotta in terracotta scavata nella parete della gola per convogliare l"
        },
        {
          id: `lvl${id}_d2`,
          x: 78.4,
          y: 74.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Votiva Betilo Scolpita nell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Votiva Betilo Scolpita nell', nascosto nell'ambiente.",
          loreClue: "La sacra pietra aniconica raffigurante il dio Dushara è stata scalpellata via dalla nicchia rupestre."
        },
        {
          id: `lvl${id}_d3`,
          x: 35.7,
          y: 89.3,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Lastricato Romano della Gola di Petra",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Lastricato Romano della Gola di Petra', nascosto nell'ambiente.",
          loreClue: "I grandi basoli poligonali solcati dalle ruote dei carri romani presentano sollevamenti recenti con leve di ferro."
        },
        {
          id: `lvl${id}_d4`,
          x: 68.8,
          y: 72.4,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lanterna ad Acetilene delle Guide Beduine",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lanterna ad Acetilene delle Guide Beduine', nascosto nell'ambiente.",
          loreClue: "La lampada da speleologia usata per esplorare le gole cieche è stata schiacciata sul pietrisco."
        },
        {
          id: `lvl${id}_d5`,
          x: 31.7,
          y: 78.2,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Frammento di Taccuino di Johann Burckhardt",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Frammento di Taccuino di Johann Burckhardt', nascosto nell'ambiente.",
          loreClue: "La pagina del diario dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 95.2,
          y: 63.9,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Borraccia in Cuoio con Incisione Sabatea",
          riddle: "Indizio cruciale dell'indagine legato a 'La Borraccia in Cuoio con Incisione Sabatea', nascosto nell'ambiente.",
          loreClue: "Il contenitore da viaggio in pelle con caratteri semitici antichi è stato trafugato dalla nicchia di sosta."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il bulbo superiore della tholos scolpita nella viva roccia reca segni di colpi d"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Capitello Corinzio dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Capitello Corinzio dell', nascosto nell'ambiente.",
          loreClue: "Il capitello floreale finemente intagliato nell"
        },
        {
          id: `lvl${id}_d3`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cripta Funeraria Sotterranea Scassinata",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cripta Funeraria Sotterranea Scassinata', nascosto nell'ambiente.",
          loreClue: "La lastra tombale scoperta sotto il vestibolo del Tesoro mostra il sigillo di malta rimosso con picconi."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Statua dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua dell', nascosto nell'ambiente.",
          loreClue: "Il bassorilievo ellenistico della guerriera tra le colonne del frontone superiore è stato mutilato."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Lettera Cifrata della Spedizione Bellini",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lettera Cifrata della Spedizione Bellini', nascosto nell'ambiente.",
          loreClue: "Una missiva indirizzata al Professor Bellini con i codici astronomici del Tesoro è stata lacerata."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Moneta d",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Il didramma nabateo in argento puro con i ritratti reali è stato sottratto dal pozzetto delle offerte."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Motivo a Gradoni (Crowstep) della Tomba Nabatea",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Motivo a Gradoni (Crowstep) della Tomba Nabatea', nascosto nell'ambiente.",
          loreClue: "La merlatura a scalini assiro-babilonese che sormonta il sepolcro rupestre è stata sbrecciata."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d3`,
          x: 82.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porta Monolitica del Sepolcro delle Facciate",
          riddle: "Indizio cruciale dell'indagine legato a 'La Porta Monolitica del Sepolcro delle Facciate', nascosto nell'ambiente.",
          loreClue: "Il pesante battente in arenaria che sigillava l"
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Brocca di Terracotta a Guscio d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Brocca di Terracotta a Guscio d', nascosto nell'ambiente.",
          loreClue: "La finissima ceramica dipinta nabatea a motivi vegetali stilizzati è stata frantumata all"
        },
        {
          id: `lvl${id}_d5`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il pendente sacro raffigurante il messaggero celeste delle divinità semitiche è svanito dalla tomba."
        },
        {
          id: `lvl${id}_d6`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio della Mano Oscura sulla Roccia Arenaria",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Marchio della Mano Oscura sulla Roccia Arenaria', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Cavea del Teatro Scavata nella Montagna",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cavea del Teatro Scavata nella Montagna', nascosto nell'ambiente.",
          loreClue: "I gradoni superiori intagliati nella roccia multicolore che ospitavano i notabili mostrano tagli netti di scalpello."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Scena Monumentale con Colonne in Marmo Bianco",
          riddle: "Indizio cruciale dell'indagine legato a 'La Scena Monumentale con Colonne in Marmo Bianco', nascosto nell'ambiente.",
          loreClue: "Il fusto scanalato importato dall"
        },
        {
          id: `lvl${id}_d3`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Maschera Teatrale in Bronzo di Dioniso",
          riddle: "Indizio cruciale dell'indagine legato a 'La Maschera Teatrale in Bronzo di Dioniso', nascosto nell'ambiente.",
          loreClue: "La maschera tragica con tralci di vite usata nelle rappresentazioni ellenistiche è scomparsa dal proscenio."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Varco Segreto sotto il Vomitorium",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Varco Segreto sotto il Vomitorium', nascosto nell'ambiente.",
          loreClue: "La grata d"
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Mappa Topografica dell",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "La pianta a rilievi trigonometrici del settore teatrale è stata bruciata su un angolo."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo del Prefetto della Provincia Arabia",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Il timbro consolare in piombo imperiale che attestava la confisca del teatro è stato violato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Facciata a Tre Ordini della Tomba del Palazzo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Facciata a Tre Ordini della Tomba del Palazzo', nascosto nell'ambiente.",
          loreClue: "La grandiosa imitazione rupestre di un palazzo ellenistico romano mostra una delle lesene crollata."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il vaso monumentale intagliato nella pietra calcarea translucida è stato rimosso dalla nicchia superiore."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Le Venature Multicolori della Tomba della Seta",
          riddle: "Indizio cruciale dell'indagine legato a 'Le Venature Multicolori della Tomba della Seta', nascosto nell'ambiente.",
          loreClue: "La celebre parete rocciosa dalle sfumature arcobaleno presenta perforazioni per inserire cariche esplosive."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Portale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Portale d', nascosto nell'ambiente.",
          loreClue: "La solida intelaiatura lapidea che introduceva alla camera funeraria reale appare spaccata a mazzuolo."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Registro Genealogico dei Sovrani di Petra",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il papiro documentario con la successione da Malichus I a Rabel II è stato strappato in due parti."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Lucerna d",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il prezioso braciere votivo lasciato in dono dai mercanti d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Porta Trionfale di Traiano con Bassorilievi",
          riddle: "Indizio cruciale dell'indagine legato a 'La Porta Trionfale di Traiano con Bassorilievi', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d2`,
          x: 82.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Tamburi di Colonna Rovesciati sul Decumano",
          riddle: "Indizio cruciale dell'indagine legato a 'I Tamburi di Colonna Rovesciati sul Decumano', nascosto nell'ambiente.",
          loreClue: "I rocchi in calcare giallo allineati lungo la via principale sono stati rotolati per bloccare il passaggio."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Bottega del Mercante di Mirra e Incenso",
          riddle: "Indizio cruciale dell'indagine legato a 'La Bottega del Mercante di Mirra e Incenso', nascosto nell'ambiente.",
          loreClue: "Il banco in pietra con i mortai per pesare le resine della via dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo di Ceralacca sul Trattato Commerciale",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "La bolla di scorta dei dazi carovanieri tra Petra e Gaza è stata calpestata e spezzata."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.0,
          y: 15.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Rotella di Misurazione Topografica Archeologica",
          riddle: "Indizio cruciale dell'indagine legato a 'La Rotella di Misurazione Topografica Archeologica', nascosto nell'ambiente.",
          loreClue: "Lo strumento a nastro metrico con custodia in cuoio della spedizione Bellini è sparito."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Lo Schizzo delle Condotte Idriche di Petra",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Schizzo delle Condotte Idriche di Petra', nascosto nell'ambiente.",
          loreClue: "Il disegno tecnico a china che indicava le cisterne nascoste sotto la via lastricata è lacerato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 8",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il grande podio sacrificale in arenaria che fronteggia il tempio principale reca solchi sacrileghi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Fregio in Stucco Dipinto con Girali Vegetali",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "I preziosi stucchi ellenistici policromi sopravvissuti ai terremoti sono stati staccati a pezzi."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cella Tripartita del Tempio di Dushara",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cella Tripartita del Tempio di Dushara', nascosto nell'ambiente.",
          loreClue: "La massiccia inferriata di protezione dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statua in Marmo di Tyche / Al-Uzza",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statua in Marmo di Tyche / Al-Uzza', nascosto nell'ambiente.",
          loreClue: "La figura della dea protettrice dell"
        },
        {
          id: `lvl${id}_d5`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tavoletta d', nascosto nell'ambiente.",
          loreClue: "La tavoletta iscritta con il canto serale agli astri erranti è spezzata a metà."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Tripode d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tripode d', nascosto nell'ambiente.",
          loreClue: "Il sostegno metallico che manteneva la fiamma inestinguibile del santuario è stato rovesciato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il colossale dente di roccia alto sei metri intagliato nella cima della montagna presenta profonde incisioni."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Vasca di Libagione del Luogo Alto del Sacrificio",
          riddle: "Indizio cruciale dell'indagine legato a 'La Vasca di Libagione del Luogo Alto del Sacrificio', nascosto nell'ambiente.",
          loreClue: "Il bacino scavato nella roccia per raccogliere il sangue delle offerte e l"
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Scala Monumentale Intagliata nel Dirupo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Scala Monumentale Intagliata nel Dirupo', nascosto nell'ambiente.",
          loreClue: "I gradini esposti a strapiombo sulla valle del Wadi Musa mostrano un tratto fatto franare deliberatamente."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassetta degli Strumenti Geodetici sulla Cima",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassetta degli Strumenti Geodetici sulla Cima', nascosto nell'ambiente.",
          loreClue: "Lo scrigno blindato con l"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Diario Meteorologico delle Vette di Petra",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Il quaderno rilegato con i calcoli dei venti equinoziali usati per i falò di segnalazione è strappato."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Doppia Ascia Cerimoniale in Pietra Nera",
          riddle: "Indizio cruciale dell'indagine legato a 'La Doppia Ascia Cerimoniale in Pietra Nera', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelSeventyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La facciata rupestre alta 48 metri presenta tracce di arrampicata clandestina sulla tholos sommitale."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Capitello Floreale Nabateo del Portale Centrale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Capitello Floreale Nabateo del Portale Centrale', nascosto nell'ambiente.",
          loreClue: "Il capitello stilizzato tipico dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 12.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Croce Bizantina Incisa nell",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "La croce greca scalpellata quando la tomba fu convertita in eremo cristiano è stata deturpata."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Passaggio a Strapiombo per il Belvedere sul Wadi Araba",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Passaggio a Strapiombo per il Belvedere sul Wadi Araba', nascosto nell'ambiente.",
          loreClue: "Il muretto di sicurezza in pietre a secco sospeso sull"
        },
        {
          id: `lvl${id}_d5`,
          x: 88.0,
          y: 45.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Carta Topografica delle Cisterne Rupestri di Deir",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "Il documento con la collocazione delle riserve d"
        },
        {
          id: `lvl${id}_d6`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Liturgica in Ferro Forgiato del Santuario",
          riddle: "Strumento di ferro sagomato per disserrare passaggi e scrigni rimasti inviolati.",
          loreClue: "Il grande manufatto metallico con impugnatura a testa d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEighty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 8: Il sacro betilo di pura ossidiana nera intarsiato d"
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cripta Segreta dei Re Nabatei Sotto l",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cripta Segreta dei Re Nabatei Sotto l', nascosto nell'ambiente.",
          loreClue: "La volta celata nel cuore della montagna sacra è stata violata dai sicari della Mano Oscura."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Mappa delle Rotte Transoceaniche dei Fenici e Nabatei",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "La tavoletta in diorite con la navigazione stellare verso il continente sconosciuto è spezzata a metà."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Reale di Malichus II con il Serpente Alato",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere Ceremoniale in Bronzo della Montagna di Aronne",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Braciere Ceremoniale in Bronzo della Montagna di Aronne', nascosto nell'ambiente.",
          loreClue: "Il grande tripode votivo che segnava la tomba sacra del Sommo Sacerdote è stato scaraventato nel burrone."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Bussola Navale Fenicia a Magnete Sommerso",
          riddle: "Dispositivo di precisione che orienta i passi e pesa gli elementi della formula.",
          loreClue: "Lo strumento segreto conservato dai mercanti di Petra per orientarsi nelle correnti oceaniche è stato asportato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.3,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Parapetto di Ferro della Garganta del Diablo",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Parapetto di Ferro della Garganta del Diablo', nascosto nell'ambiente.",
          loreClue: "La ringhiera della passerella affacciata sull"
        },
        {
          id: `lvl${id}_d2`,
          x: 25.2,
          y: 71.4,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Targa Idrografica della Spedizione Fluviale",
          riddle: "Indizio cruciale dell'indagine legato a 'La Targa Idrografica della Spedizione Fluviale', nascosto nell'ambiente.",
          loreClue: "La lamina in bronzo con la misurazione della portata d"
        },
        {
          id: `lvl${id}_d3`,
          x: 49.2,
          y: 72.9,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Faro di Segnalazione per la Nebbia Fluviale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Faro di Segnalazione per la Nebbia Fluviale', nascosto nell'ambiente.",
          loreClue: "Il fanale a cherosene per orientare i battelli nella densa nube d"
        },
        {
          id: `lvl${id}_d4`,
          x: 41.0,
          y: 22.3,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa Stagna dei Rilievi Batimetrici",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassa Stagna dei Rilievi Batimetrici', nascosto nell'ambiente.",
          loreClue: "Il baule metallico galleggiante con i grafici delle profondità del baratro è stato forzato."
        },
        {
          id: `lvl${id}_d5`,
          x: 92.7,
          y: 74.3,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Gesuita della Missione di San Ignacio",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d6`,
          x: 38.2,
          y: 90.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Bussola Geologica ad Ago Fluido",
          riddle: "Dispositivo di precisione che orienta i passi e pesa gli elementi della formula.",
          loreClue: "Lo strumento nautico da corrente per calcolare le anomalie magnetiche della cascata è scomparso."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Scalinata in Roccia Basaltica del Salto San Martin",
          riddle: "Indizio cruciale dell'indagine legato a 'La Scalinata in Roccia Basaltica del Salto San Martin', nascosto nell'ambiente.",
          loreClue: "I gradini intagliati nel basalto nero costantemente bagnati dalla nebbia presentano fori da mina."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Taccuino da Campo del Botanico",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Taccuino da Campo del Botanico', nascosto nell'ambiente.",
          loreClue: "Le pagine illustrate con le rare orchidee epifite endemiche dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statuetta Guaraní dello Spirito del Fiume",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statuetta Guaraní dello Spirito del Fiume', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Corda Guida con Moschettoni d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Corda Guida con Moschettoni d', nascosto nell'ambiente.",
          loreClue: "Il cavo di sicurezza teso tra i costoni rocciosi per superare i guadi è stato reciso."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassaforte Portatile della Compagnia Fluviale",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassaforte Portatile della Compagnia Fluviale', nascosto nell'ambiente.",
          loreClue: "Lo scrigno blindato contenente le autorizzazioni di sbarco nell"
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio del Serpente d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Marchio del Serpente d', nascosto nell'ambiente.",
          loreClue: "Il glifo protettivo indigeno sul basamento della cascata è stato profanato con pece nera."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Sentiero della Scogliera dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Sentiero della Scogliera dell', nascosto nell'ambiente.",
          loreClue: "La staccionata in canne di bambù che protegge dal salto nel vuoto è stata abbattuta."
        },
        {
          id: `lvl${id}_d2`,
          x: 68.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Binocolo Prismatico da Avvistamento",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Binocolo Prismatico da Avvistamento', nascosto nell'ambiente.",
          loreClue: "Le lenti da campo con reticolo graduato usate per studiare le aperture nella parete rocciosa sono sparite."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Portale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Portale d', nascosto nell'ambiente.",
          loreClue: "La grata a protezione del rifugio dei rondoni cascatori mostra il lucchetto spezzato con tenaglie."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Lettera del Governatore Coloniale del 1750",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lettera del Governatore Coloniale del 1750', nascosto nell'ambiente.",
          loreClue: "Il documento pergamenaceo che intimava l"
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Medaglione d",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "La reliquia devozionale lasciata da padre Florian Paucke nel santuario insulare è stata trafugata."
        },
        {
          id: `lvl${id}_d6`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Cifra Alchemica sulla Pietra Smeraldo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cifra Alchemica sulla Pietra Smeraldo', nascosto nell'ambiente.",
          loreClue: "Un"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Trave Sospesa della Passerella Superiore",
          riddle: "Indizio cruciale dell'indagine legato a 'La Trave Sospesa della Passerella Superiore', nascosto nell'ambiente.",
          loreClue: "Il supporto in legno duro di quebracho Colorado che sostiene l"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Filo di Rinvio del Termometro a Massima e Minima",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Filo di Rinvio del Termometro a Massima e Minima', nascosto nell'ambiente.",
          loreClue: "Lo strumento meteorologico appeso al montante della pensilina è stato strappato."
        },
        {
          id: `lvl${id}_d3`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Contenitore Ermetico di Mappe Idrografiche",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Contenitore Ermetico di Mappe Idrografiche', nascosto nell'ambiente.",
          loreClue: "Il tubo cilindrico in zinco contenente i rilievi delle secche e delle rapide è stato svuotato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Bauletto degli Attrezzi dei Pionieri del Parco",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bauletto degli Attrezzi dei Pionieri del Parco', nascosto nell'ambiente.",
          loreClue: "La cassetta con martelli e zeppe per la manutenzione dei pontili è stata scassinata."
        },
        {
          id: `lvl${id}_d5`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Lo Schizzo a Matita dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Schizzo a Matita dell', nascosto nell'ambiente.",
          loreClue: "Il rilievo ottico della diffrazione della luce tra i vapori d"
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Simbolo Astrologico dell",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Banchina d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Banchina d', nascosto nell'ambiente.",
          loreClue: "I parabordi e le gallocce d"
        },
        {
          id: `lvl${id}_d2`,
          x: 18.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Cofanetto delle Bussole Topografiche Guaraní",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cofanetto delle Bussole Topografiche Guaraní', nascosto nell'ambiente.",
          loreClue: "La scatola di palissandro con aghi magnetici immersi in olio è stata aperta con un piede di porco."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Carta Cifrata della Spedizione Fawcett",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "Il foglio di taccuino attribuito al celebre esploratore con le coordinate del salto è bruciato."
        },
        {
          id: `lvl${id}_d5`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Segnale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Segnale d', nascosto nell'ambiente.",
          loreClue: "La campana di bronzo che avvertiva delle piene improvvise del Paranà è stata staccata dal giogo."
        },
        {
          id: `lvl${id}_d6`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il simbolo della Mano Oscura dipinto con la resina rossa dell"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Ponteccio di Legno davanti al Salto Bossetti",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Ponteccio di Legno davanti al Salto Bossetti', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d2`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Teca Sigillata dei Campioni Botanici",
          riddle: "Indizio cruciale dell'indagine legato a 'La Teca Sigillata dei Campioni Botanici', nascosto nell'ambiente.",
          loreClue: "Il contenitore di vetro rinforzato con specie sconosciute di muschi fosforescenti è stato scassinato."
        },
        {
          id: `lvl${id}_d3`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il prezioso talismano del dio Kurupi protettore della selva è stato rubato dalla nicchia fluviale."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Registro delle Portate delle Due Sorelle",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il bollettino idrologico che comparava i flussi delle due cascate parallele è stato macchiato d"
        },
        {
          id: `lvl${id}_d5`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Torcia a Vento da Esplorazione Notturna",
          riddle: "Indizio cruciale dell'indagine legato a 'La Torcia a Vento da Esplorazione Notturna', nascosto nell'ambiente.",
          loreClue: "Il fanale in rame a pressione d"
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Tatuaggio Sacro Inciso sulla Falesia Verde",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Tatuaggio Sacro Inciso sulla Falesia Verde', nascosto nell'ambiente.",
          loreClue: "Il motivo a zig-zag dei fulmini celesti inciso dai primi abitanti è stato sfigurato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 9",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Trappola Fotografica per la Fauna Notturna",
          riddle: "Indizio cruciale dell'indagine legato a 'La Trappola Fotografica per la Fauna Notturna', nascosto nell'ambiente.",
          loreClue: "Il congegno meccanico a scatto con magnesio per immortalare il giaguaro è stato sventrato."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Machete Coloniale con Manico d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Machete Coloniale con Manico d', nascosto nell'ambiente.",
          loreClue: "La pesante lama d"
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa delle Scorte di Siero Antiofidico",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassa delle Scorte di Siero Antiofidico', nascosto nell'ambiente.",
          loreClue: "La farmacia da campo metallica con gli antidoti contro il veleno delle vipere yarará è stata forzata."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Foglio di Erbario con la Foglia d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Foglio di Erbario con la Foglia d', nascosto nell'ambiente.",
          loreClue: "La pressa botanica con il reperto vegetale a pigmentazione aurea è stata saccheggiata."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Cippo di Confine della Missione della Selva",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cippo di Confine della Missione della Selva', nascosto nell'ambiente.",
          loreClue: "La pietra miliare che delimitava la riduzione gesuita è stata rovesciata nel fango."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Marca di Catrame sui Tronchi di Guatambú",
          riddle: "Indizio cruciale dell'indagine legato a 'La Marca di Catrame sui Tronchi di Guatambú', nascosto nell'ambiente.",
          loreClue: "Il contrassegno della Mano Oscura impresso con catrame vegetale per guidare i mercenari nella foresta."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Canoa Tradizionale Monossile Guaraní",
          riddle: "Indizio cruciale dell'indagine legato a 'La Canoa Tradizionale Monossile Guaraní', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d2`,
          x: 14.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Pagaia Rituale Intarsiata di Madreperla",
          riddle: "Indizio cruciale dell'indagine legato a 'La Pagaia Rituale Intarsiata di Madreperla', nascosto nell'ambiente.",
          loreClue: "Il remo sacro usato durante le cerimonie delle piene è stato rubato dalla prua."
        },
        {
          id: `lvl${id}_d3`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Forziere di Rifornimento della Spedizione Bellini",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Forziere di Rifornimento della Spedizione Bellini', nascosto nell'ambiente.",
          loreClue: "La cassa metallica con viveri ed esplosivi da scavo mostra le cerniere strappate."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo delle Correnti del Delta Superiore",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo delle Correnti del Delta Superiore', nascosto nell'ambiente.",
          loreClue: "La carta topografica con le secche e i canali navigabili verso la cascata è stata tagliata con un pugnale."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Palo d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Palo d', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d6`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Disco Solare Indigeno Dipinto sulla Roccia",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Disco Solare Indigeno Dipinto sulla Roccia', nascosto nell'ambiente.",
          loreClue: "La raffigurazione del dio Kuarahy che sorge sul fiume è stata coperta con fango acido."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelEightyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il portale monumentale della chiesa diroccata sepolta dalle liane ha la chiave di volta crepata."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Campana di Bronzo Fusa nelle Fonderie delle Missioni",
          riddle: "Indizio cruciale dell'indagine legato a 'La Campana di Bronzo Fusa nelle Fonderie delle Missioni', nascosto nell'ambiente.",
          loreClue: "La pesante campana liturgica del 1720 con iscrizioni in latino e guaraní è stata abbattuta."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calice Liturgico d",
          riddle: "Recipiente cerimoniale per le libagioni durante i riti di consacrazione.",
          loreClue: "Il sacro vaso nascosto dai padri prima dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cripta Sotto l",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cripta Sotto l', nascosto nell'ambiente.",
          loreClue: "I gradini d"
        },
        {
          id: `lvl${id}_d5`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Manoscritto del Dizionario Spagnolo-Guaraní di Ruiz de Montoya",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "Il volume compilato a mano con la traduzione dei miti sulla città nascosta è lacerato."
        },
        {
          id: `lvl${id}_d6`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Trigramma IHS Deturpato sul Frontone",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Trigramma IHS Deturpato sul Frontone', nascosto nell'ambiente.",
          loreClue: "Il sacro monogramma gesuita scolpito sulla trabeazione della facciata è stato eroso con acido solforico."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinety) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL NONO SIGILLO: Il Sole d",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 9: Il radioso disco solare in oro massiccio e smeraldo amazzonico! Trovato nella grotta segreta dietro la cortina della Garganta del Diablo, orienta l"
        },
        {
          id: `lvl${id}_d2`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Naos Ipogea Dietro il Velo delle Cascate",
          riddle: "Indizio cruciale dell'indagine legato a 'La Naos Ipogea Dietro il Velo delle Cascate', nascosto nell'ambiente.",
          loreClue: "Il santuario rupestre celato dal ruggito delle acque per secoli è stato profanato dai cospiratori."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele Basaltica con la Mappa Stellare del Sudamerica",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "La lastra millenaria con le costellazioni della Croce del Sud che guidano a Machu Picchu è spezzata."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il simbolo necromantico della confraternita è stato dipinto a sangue sulla parete della cripta."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere Ceremoniale in Rame Nativo",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Braciere Ceremoniale in Rame Nativo', nascosto nell'ambiente.",
          loreClue: "Il tripode sacro per i fumi d"
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Prisma di Cristallo di Rocca dei Sacerdoti del Sole",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Prisma di Cristallo di Rocca dei Sacerdoti del Sole', nascosto nell'ambiente.",
          loreClue: "Lo strumento ottico che rifletteva la luce del tramonto creando arcobaleni sotterranei è stato trafugato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 16.8,
          y: 8.9,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Becco del Colibrì Tracciato sulla Pampa",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "La linea retta di sessanta metri che forma il becco del geoglifo è stata solcata da pneumatici fuoristrada."
        },
        {
          id: `lvl${id}_d2`,
          x: 24.6,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Teodolite Aerea della Spedizione Reiche",
          riddle: "Indizio cruciale dell'indagine legato a 'La Teodolite Aerea della Spedizione Reiche', nascosto nell'ambiente.",
          loreClue: "Lo strumento trigonometrico montato sulla torretta di osservazione per mappare le ali del colibrì è sparito."
        },
        {
          id: `lvl${id}_d3`,
          x: 29.5,
          y: 22.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Paletto Guida in Legno di Huarango",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Paletto Guida in Legno di Huarango', nascosto nell'ambiente.",
          loreClue: "Il picchetto ligneo millenario usato dai sacerdoti Nazca per tracciare le curve dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 41.3,
          y: 11.3,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Teca di Protezione dei Reperti di Superficie",
          riddle: "Indizio cruciale dell'indagine legato a 'La Teca di Protezione dei Reperti di Superficie', nascosto nell'ambiente.",
          loreClue: "Il contenitore vetrato contenente frammenti ceramici policromi trovati sulla figura è stato scassinato."
        },
        {
          id: `lvl${id}_d5`,
          x: 55.9,
          y: 53.7,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Fotografia Aerea di Maria Reiche del 1946",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fotografia Aerea di Maria Reiche del 1946', nascosto nell'ambiente.",
          loreClue: "La storica lastra fotografica in bianco e nero che rivelò il disegno nella sua interezza è strappata a metà."
        },
        {
          id: `lvl${id}_d6`,
          x: 25.1,
          y: 49.2,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Faretto Solare della Passerella Panoramica",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Faretto Solare della Passerella Panoramica', nascosto nell'ambiente.",
          loreClue: "La lampada fotovoltaica installata sulla torre d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Le pietre ossidate scure rimosse per far emergere il gesso chiaro sottostante sono state ricollocate abusivamente."
        },
        {
          id: `lvl${id}_d2`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta Astronomica della Costellazione dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tavoletta Astronomica della Costellazione dell', nascosto nell'ambiente.",
          loreClue: "La lastrina in ceramica con i punti d"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Maschera d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Maschera d', nascosto nell'ambiente.",
          loreClue: "Il pettorale cerimoniale con baffi felini e piume di condor è scomparso dal laboratorio da campo."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Recinzione Metallica di Tutela Archeologica",
          riddle: "Indizio cruciale dell'indagine legato a 'La Recinzione Metallica di Tutela Archeologica', nascosto nell'ambiente.",
          loreClue: "La grata posta a salvaguardia del sentiero rituale che attraversa il corpo del volatile è stata tranciata."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio Bruciato della Mano Oscura nel Terreno",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Marchio Bruciato della Mano Oscura nel Terreno', nascosto nell'ambiente.",
          loreClue: "Una sagoma triangolare di pece e fosforo è stata impressa a caldo sulla coda del condor."
        },
        {
          id: `lvl${id}_d6`,
          x: 14.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Rullo Compattatore Abbandonato dai Sabotatori",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rullo Compattatore Abbandonato dai Sabotatori', nascosto nell'ambiente.",
          loreClue: "Uno strumento artigianale usato per cancellare i solchi calcarei giace abbandonato tra le pietre."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Coda a Spirale Aurea della Scimmia",
          riddle: "Indizio cruciale dell'indagine legato a 'La Coda a Spirale Aurea della Scimmia', nascosto nell'ambiente.",
          loreClue: "Il cerchio concentrico perfetto che si avvolge sulla pampa presenta solchi scavati da zappe clandestine."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Cerimoniale con la Scimmia a Nove Dita",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Vaso Cerimoniale con la Scimmia a Nove Dita', nascosto nell'ambiente.",
          loreClue: "La brocca a doppio becco con ponte raffigurante l"
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassetta degli Strumenti Georadar",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassetta degli Strumenti Georadar', nascosto nell'ambiente.",
          loreClue: "Lo scanner a microonde per mappare le cavità sotterranee sotto la pampa è stato forzato."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Diario di Rilievo dei Solstizi di Paul Kosok",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Diario di Rilievo dei Solstizi di Paul Kosok', nascosto nell'ambiente.",
          loreClue: "Il quaderno dello scopritore del calendario astronomico reca pagine strappate sugli allineamenti."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Palina Topografica a Riflettore Laser",
          riddle: "Indizio cruciale dell'indagine legato a 'La Palina Topografica a Riflettore Laser', nascosto nell'ambiente.",
          loreClue: "Il prisma ottico riflettente piantato al centro della spirale è stato preso a sassate."
        },
        {
          id: `lvl${id}_d6`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Necromantico sulla Zampa Anteriore",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Uno stemma con il teschio e il compasso è stato tracciato con cera nera sulla figura."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Pedipalpo Destro del Ragno Gigante",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pedipalpo Destro del Ragno Gigante', nascosto nell'ambiente.",
          loreClue: "Il sottilissimo canale che rappresenta l"
        },
        {
          id: `lvl${id}_d2`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Talismano d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Talismano d', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Gabbia Protettiva dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Gabbia Protettiva dell', nascosto nell'ambiente.",
          loreClue: "La stazione del vento che misura l"
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo della Cintura di Orione di Bellini",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo della Cintura di Orione di Bellini', nascosto nell'ambiente.",
          loreClue: "La tavola comparativa tra le zampe del ragno e la nebulosa di Orione è stata lacerata."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lanterna a Vetri Colorati della Postazione Notturna",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lanterna a Vetri Colorati della Postazione Notturna', nascosto nell'ambiente.",
          loreClue: "Il faro a filtri blu impiegato per illuminare le linee di notte è andato distrutto."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Una colata di piombo con il sigillo della setta è stata versata nel solco gessoso."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Gli Occhi Grandi dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Gli Occhi Grandi dell', nascosto nell'ambiente.",
          loreClue: "I cerchi concentrici che formano lo sguardo della figura antropomorfa sulla collina mostrano sbrecciature."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.1,
          y: 14.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Mano Alzata in Saluto Cosmico",
          riddle: "Indizio cruciale dell'indagine legato a 'La Mano Alzata in Saluto Cosmico', nascosto nell'ambiente.",
          loreClue: "Il braccio sollevato verso il cielo stellato presenta pietre rotolate giù dal pendio."
        },
        {
          id: `lvl${id}_d3`,
          x: 14.1,
          y: 44.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Lo Scrigno da Campo del Professore Bellini",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Scrigno da Campo del Professore Bellini', nascosto nell'ambiente.",
          loreClue: "La valigetta in pelle con i lucidi trasparenti delle costellazioni andine è stata aperta a forza."
        },
        {
          id: `lvl${id}_d4`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Pettorale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pettorale d', nascosto nell'ambiente.",
          loreClue: "La lamina sbalzata rinvenuta alla base della collina è stata sottratta dall"
        },
        {
          id: `lvl${id}_d5`,
          x: 86.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Calcolo Trigonometrico dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Calcolo Trigonometrico dell', nascosto nell'ambiente.",
          loreClue: "Il foglio millimetrato con le quote dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Croce Solare Incisa sulla Roccia Arenaria",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "Un glifo non appartenente alla cultura Nazca è stato intagliato abusivamente sotto i piedi della figura."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Pista Trapezoidale Maggiore Lunga Due Chilometri",
          riddle: "Indizio cruciale dell'indagine legato a 'La Pista Trapezoidale Maggiore Lunga Due Chilometri', nascosto nell'ambiente.",
          loreClue: "Il vertice della gigantesca rampa cerimoniale è stato tagliato da una trincea abusiva."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Bussola Topografica a Traguardo Prismatico",
          riddle: "Dispositivo di precisione che orienta i passi e pesa gli elementi della formula.",
          loreClue: "Lo strumento professionale per verificare l"
        },
        {
          id: `lvl${id}_d3`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Cancello di Sbarramento del Sentiero Protetto",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cancello di Sbarramento del Sentiero Protetto', nascosto nell'ambiente.",
          loreClue: "La sbarra in tubolari d"
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Documento di Comparazione con i Viali di Teotihuacan",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Documento di Comparazione con i Viali di Teotihuacan', nascosto nell'ambiente.",
          loreClue: "Lo studio comparativo sulle proporzioni geometriche dei viali cerimoniali è strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Bandierina Segnaletica a Scacchi Gialli e Neri",
          riddle: "Indizio cruciale dell'indagine legato a 'La Bandierina Segnaletica a Scacchi Gialli e Neri', nascosto nell'ambiente.",
          loreClue: "Il picchetto di orientamento aereo per i sorvoli dei rilievi è stato spezzato a terra."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Cerchio di Cenere Sacrilega nel Trapezio",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cerchio di Cenere Sacrilega nel Trapezio', nascosto nell'ambiente.",
          loreClue: "I resti di un rogo rituale della Mano Oscura contaminano il suolo gessoso millenario."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 10",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Pozzi a Spirale in Pietra di Fiume di Cantalloc",
          riddle: "Indizio cruciale dell'indagine legato a 'I Pozzi a Spirale in Pietra di Fiume di Cantalloc', nascosto nell'ambiente.",
          loreClue: "I ciottoli arrotondati che formano la rampa a spirale per scendere alla falda idrica sono stati smossi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Coperchio in Legno di Huarango della Condotta",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Coperchio in Legno di Huarango della Condotta', nascosto nell'ambiente.",
          loreClue: "Il pesante trave che copre il canale sotterraneo per limitare l"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Votivo con la Divinità dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Vaso Votivo con la Divinità dell', nascosto nell'ambiente.",
          loreClue: "La ceramica fine deposta come offerta nel fondo del pozzo artesiano è stata rubata."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Mappa delle Falde Acquifere Sub-alveo",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "Il disegno idraulico che spiega come i Nazca irrigavano il deserto più arido del mondo è sbiadito e strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Fune con Secchio d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fune con Secchio d', nascosto nell'ambiente.",
          loreClue: "La carrucola con il cavo per analizzare la salinità dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Grande Piramide d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grande Piramide d', nascosto nell'ambiente.",
          loreClue: "La facciata a terrazze in mattoni adobe del centro cerimoniale presenta crolli provocati da picconi."
        },
        {
          id: `lvl${id}_d2`,
          x: 14.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Palo Totemico del Tempio a Gradoni",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Palo Totemico del Tempio a Gradoni', nascosto nell'ambiente.",
          loreClue: "Il tronco intagliato con figure di spiriti guardiani del santuario è stato segato alla base."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porta della Cella delle Vestali del Sole",
          riddle: "Indizio cruciale dell'indagine legato a 'La Porta della Cella delle Vestali del Sole', nascosto nell'ambiente.",
          loreClue: "La paratia in canne intrecciate che custodiva le offerte votive è stata sventrata."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Mantello Funerario Nazca con Centinaia di Figure",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Mantello Funerario Nazca con Centinaia di Figure', nascosto nell'ambiente.",
          loreClue: "Il tessuto policromo in lana di vigogna e cotone con guerrieri alati è stato asportato."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Registro degli Scavi di Helaine Silverman",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "La cartella con i rilievi stratigrafici dei sacrifici rituali è stata dispersa nel vento."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Maschera Funeraria di Terracotta Dipinta",
          riddle: "Indizio cruciale dell'indagine legato a 'La Maschera Funeraria di Terracotta Dipinta', nascosto nell'ambiente.",
          loreClue: "Il volto cerimoniale in argilla con occhi spalancati è stato frantumato sul pavimento del tempio."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelNinetyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Tomba Ipogea in Mattoni di Fango di Chauchilla",
          riddle: "Indizio cruciale dell'indagine legato a 'La Tomba Ipogea in Mattoni di Fango di Chauchilla', nascosto nell'ambiente.",
          loreClue: "Il tetto in travi di huarango che copriva la tomba aperta nel deserto è stato parzialmente sfondato."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Mummia con le Lunghe Trecce di Capelli Umani",
          riddle: "Indizio cruciale dell'indagine legato a 'La Mummia con le Lunghe Trecce di Capelli Umani', nascosto nell'ambiente.",
          loreClue: "La figura seduta in posizione fetale rivolta a est ha il bendaggio di cotone strappato sul petto."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Pettorale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pettorale d', nascosto nell'ambiente.",
          loreClue: "Il prezioso collare che identificava il guerriero d"
        },
        {
          id: `lvl${id}_d4`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Grata di Protezione dalle Tempeste di Sabbia",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grata di Protezione dalle Tempeste di Sabbia', nascosto nell'ambiente.",
          loreClue: "La rete metallica posta contro i saccheggi notturni è stata tagliata con cesoie."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lucerna a Olio Animale per i Riti Funerari",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il piccolo coccio con tracce di grasso sacro è stato calpestato e ridotto in polvere."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio Funebre della Mano Oscura sul Muro d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Marchio Funebre della Mano Oscura sul Muro d', nascosto nell'ambiente.",
          loreClue: "Il sigillo della confraternita è stato dipinto con pece nera sopra i geroglifici protettivi."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundred) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL DECIMO SIGILLO: Il Condor d",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 10: La sublime statua del sacro condor andino in oro zecchino e lapislazzuli! I suoi artigli tengono la mappa celeste che indica le vette inviolate di Machu Picchu."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cripta Sotto il Centro di Convergenza delle Linee",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cripta Sotto il Centro di Convergenza delle Linee', nascosto nell'ambiente.",
          loreClue: "Il santuario sotterraneo dove convergono oltre quaranta linee della pampa è stato forzato."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Lastra di Diorite con il Calendario delle Costellazioni Andine",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lastra di Diorite con il Calendario delle Costellazioni Andine', nascosto nell'ambiente.",
          loreClue: "La monumentale tavoletta che calcola la precessione degli equinozi è spezzata a metà."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Finale dell",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere Cerimoniale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Braciere Cerimoniale d', nascosto nell'ambiente.",
          loreClue: "Il grande vaso per le offerte aromatiche dei sacerdoti Nazca è stato rovesciato."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Prisma di Quarzo Cristallino della Pampa",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Prisma di Quarzo Cristallino della Pampa', nascosto nell'ambiente.",
          loreClue: "Il cristallo ottico che proiettava i raggi solari lungo le linee della pianura è stato trafugato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.9,
          y: 80.8,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il grande blocco di granito bianco del Portale del Sole presenta profonde scalfiture di scalpello da cava."
        },
        {
          id: `lvl${id}_d2`,
          x: 86.6,
          y: 29.6,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Targa d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Targa d', nascosto nell'ambiente.",
          loreClue: "Il cartello in ottone del 1911 che indicava la vista panoramica è stato staccato dal pilastro."
        },
        {
          id: `lvl${id}_d3`,
          x: 73.0,
          y: 40.4,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Focolare Cerimoniale delle Sentinelle Inca",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Focolare Cerimoniale delle Sentinelle Inca', nascosto nell'ambiente.",
          loreClue: "Il braciere in pietra dove veniva acceso il fuoco di segnalazione equinoziale è stato rovesciato."
        },
        {
          id: `lvl${id}_d4`,
          x: 53.8,
          y: 59.7,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa degli Attrezzi dei Restauri Archeologici",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassa degli Attrezzi dei Restauri Archeologici', nascosto nell'ambiente.",
          loreClue: "La cassa di legno con cunei di bronzo e corde di canapa per il consolidamento dei muri è stata forzata."
        },
        {
          id: `lvl${id}_d5`,
          x: 74.8,
          y: 10.7,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il ciondolo rituale che identificava i corridori imperiali è stato trafugato dalla nicchia del valico."
        },
        {
          id: `lvl${id}_d6`,
          x: 64.5,
          y: 44.8,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio Bruciato della Mano Oscura sulla Roccia",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Marchio Bruciato della Mano Oscura sulla Roccia', nascosto nell'ambiente.",
          loreClue: "Un simbolo esoterico con la freccia rovesciata è stato impresso con resina infiammata."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Finestra Solstiziale del Torreón",
          riddle: "Indizio cruciale dell'indagine legato a 'La Finestra Solstiziale del Torreón', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d2`,
          x: 86.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La roccia naturale sagomata all"
        },
        {
          id: `lvl${id}_d3`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Maschera d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Maschera d', nascosto nell'ambiente.",
          loreClue: "La grandiosa lamina votiva che decorava la parete interna del tempio è scomparsa dal reliquiario."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Grata dell",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grata dell', nascosto nell'ambiente.",
          loreClue: "La recinzione in ferro a tutela della tomba monumentale è stata divelta con leve metalliche."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "I Rilievi Fotografici Spettrografici di Bellini",
          riddle: "Indizio cruciale dell'indagine legato a 'I Rilievi Fotografici Spettrografici di Bellini', nascosto nell'ambiente.",
          loreClue: "I fogli trasparenti con le linee di rifrazione della luce solare tra i conci sono stati bruciacchiati."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Vaso Cerimoniale Kero in Legno Pregiato",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Vaso Cerimoniale Kero in Legno Pregiato', nascosto nell'ambiente.",
          loreClue: "Il calice dipinto con scene di battaglia contro gli spagnoli è andato distrutto sul pavimento."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Prisma Monolitico dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Prisma Monolitico dell', nascosto nell'ambiente.",
          loreClue: "Il leggendario fittone di granito dove l"
        },
        {
          id: `lvl${id}_d2`,
          x: 68.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Disco Solare in Rame con la Croce del Sud",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "La piastra gnomonica per l"
        },
        {
          id: `lvl${id}_d3`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Recinzione a Corda Intrecciata della Terrazza Sacra",
          riddle: "Indizio cruciale dell'indagine legato a 'La Recinzione a Corda Intrecciata della Terrazza Sacra', nascosto nell'ambiente.",
          loreClue: "Il cordone di canapa con paletti di sostegno che isola il monolito solare è stato tranciato."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Taccuino delle Effemeridi Astronomiche Inca",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Taccuino delle Effemeridi Astronomiche Inca', nascosto nell'ambiente.",
          loreClue: "Il volume compilato dagli astronomi di Cusco con le tabelle delle eclissi è stato strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lampada ad Acetilene dei Ricercatori",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il riflettore notturno usato per rilevare l"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Alchemico della Mano Oscura sulla Base",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Il simbolo necromantico a triangolo è stato dipinto a vernice catramosa sulla viva roccia."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Tre Vani Trapezoidali del Tempio",
          riddle: "Indizio cruciale dell'indagine legato a 'I Tre Vani Trapezoidali del Tempio', nascosto nell'ambiente.",
          loreClue: "Uno dei grandi stipiti monolitici della finestra centrale ha perso la perfetta giunzione a secco."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Stele con i Tre Mondi della Cosmovisione",
          riddle: "Indizio cruciale dell'indagine legato a 'La Stele con i Tre Mondi della Cosmovisione', nascosto nell'ambiente.",
          loreClue: "La lastra intagliata con Condor, Puma e Serpente (Hanan, Kay, Uku Pacha) è stata spaccata in due."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassa d', nascosto nell'ambiente.",
          loreClue: "Il cofanetto con campioni di granito usati per testare la sismicità delle mura è stato forzato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La sacra scultura del drago acquatico sotterraneo è stata sottratta dall"
        },
        {
          id: `lvl${id}_d5`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Filo a Piombo Archeologico con Mirino",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Filo a Piombo Archeologico con Mirino', nascosto nell'ambiente.",
          loreClue: "Lo strumento di precisione per misurare l"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Lo specchio nero usato per le divinazioni oracolari reca tracce di incisioni profane."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Muro di Sostegno del Terrazzamento Superiore",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Muro di Sostegno del Terrazzamento Superiore', nascosto nell'ambiente.",
          loreClue: "I conci di granito che trattengono il terreno fertile della montagna mostrano un cedimento indotto."
        },
        {
          id: `lvl${id}_d2`,
          x: 86.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Canale di Drenaggio Agricolo Sotterraneo",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Canale di Drenaggio Agricolo Sotterraneo', nascosto nell'ambiente.",
          loreClue: "La condotta litica che convoglia le acque piovane verso la valle è stata ostruita con ghiaia."
        },
        {
          id: `lvl${id}_d3`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Statuetta Votiva della Pachamama in Pietra Verde",
          riddle: "Indizio cruciale dell'indagine legato a 'La Statuetta Votiva della Pachamama in Pietra Verde', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Paratia della Riserva dei Semi Antichi",
          riddle: "Indizio cruciale dell'indagine legato a 'La Paratia della Riserva dei Semi Antichi', nascosto nell'ambiente.",
          loreClue: "La nicchia murata in cui erano conservate varietà precolombiane di quinoa è stata scassinata."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Mappa Agronomica dei Microclimi Andini",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "Lo schema che documenta le variazioni termiche lungo i terrazzamenti è stato parzialmente stracciato."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Timbro di Catrame della Setta sui Massi",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Timbro di Catrame della Setta sui Massi', nascosto nell'ambiente.",
          loreClue: "Il marchio dei sabotatori compare dipinto su uno dei grandi blocchi di testata del terrazzamento."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredSix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Portale a Doppio Stipite della Residenza Reale",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Portale a Doppio Stipite della Residenza Reale', nascosto nell'ambiente.",
          loreClue: "Il prestigioso ingresso riservato alla famiglia imperiale presenta uno stipite sbrecciato."
        },
        {
          id: `lvl${id}_d2`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Piatto Cerimoniale d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Piatto Cerimoniale d', nascosto nell'ambiente.",
          loreClue: "La vajilla reale finemente martellata è stata trafugata dal banco d"
        },
        {
          id: `lvl${id}_d3`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Cofanetto delle Vesti Cerimoniali Cumbi",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Cofanetto delle Vesti Cerimoniali Cumbi', nascosto nell'ambiente.",
          loreClue: "Il bauletto contenente i tessuti d"
        },
        {
          id: `lvl${id}_d4`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Cronaca Spagnola di Pedro Cieza de León",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cronaca Spagnola di Pedro Cieza de León', nascosto nell'ambiente.",
          loreClue: "La copia del manoscritto con la descrizione dei palazzi segreti reca le ultime pagine strappate."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lampada a Cera d",
          riddle: "Emette o governa la luce che rischiara i manoscritti nelle ore più buie.",
          loreClue: "Il portalucerna in bronzo dorato è stato schiacciato sotto pesanti scarponi."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Imperiale del Sapa Inca Deturpato",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Il simbolo della corona Mascapaicha inciso sul trono è stato abraso con un ferro acuminato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 11",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredSeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Le Ali di Roccia Naturale del Tempio del Condor",
          riddle: "Indizio cruciale dell'indagine legato a 'Le Ali di Roccia Naturale del Tempio del Condor', nascosto nell'ambiente.",
          loreClue: "I giganteschi speroni granitici che mimano l"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Testa e il Collare del Condor Scolpiti nel Pavimento",
          riddle: "Indizio cruciale dell'indagine legato a 'La Testa e il Collare del Condor Scolpiti nel Pavimento', nascosto nell'ambiente.",
          loreClue: "Il blocco sagomato sul piano di calpestio che raffigura il becco è stato scalpellato di fresco."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il vaso in alabastro andino collocato dietro le ali del tempio è scomparso."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Grata delle Prigioni Sotterranee di Roccia",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grata delle Prigioni Sotterranee di Roccia', nascosto nell'ambiente.",
          loreClue: "Le sbarre metalliche che sbarrano i cunicoli ipogei del condor sono state segate."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Lettera del Padre Gesuita Bernabé Cobo",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lettera del Padre Gesuita Bernabé Cobo', nascosto nell'ambiente.",
          loreClue: "Il testo del 1653 sui culti idolatrici del condor a Machu Picchu è stato bruciato in parte."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Segno del Serpente Bicefalo sulla Falesia",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Segno del Serpente Bicefalo sulla Falesia', nascosto nell'ambiente.",
          loreClue: "Un"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Fontana Liturgica Principale della Serie dei Sedici Bagni",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fontana Liturgica Principale della Serie dei Sedici Bagni', nascosto nell'ambiente.",
          loreClue: "Il beccuccio in pietra monolitica da cui sgorga l"
        },
        {
          id: `lvl${id}_d2`,
          x: 82.0,
          y: 14.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Canale Idraulico a Pendenza Costante",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Canale Idraulico a Pendenza Costante', nascosto nell'ambiente.",
          loreClue: "La canaletta in granito che alimenta la sequenza dei bagni imperiali è stata deviata con detriti."
        },
        {
          id: `lvl${id}_d3`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Votivo d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Vaso Votivo d', nascosto nell'ambiente.",
          loreClue: "La brocca cerimoniale utilizzata per i lavacri rituali dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 14.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Boccaporto della Cisterna di Decantazione",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Boccaporto della Cisterna di Decantazione', nascosto nell'ambiente.",
          loreClue: "La pietra di chiusura della vasca di filtraggio dell"
        },
        {
          id: `lvl${id}_d5`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo dei Flussi Idraulici di Hiram Bingham",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Rilievo dei Flussi Idraulici di Hiram Bingham', nascosto nell'ambiente.",
          loreClue: "La planimetria con i percorsi delle falde montane che alimentano le fontane è strappata."
        },
        {
          id: `lvl${id}_d6`,
          x: 86.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Pietra d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Pietra d', nascosto nell'ambiente.",
          loreClue: "Il gradino sacrificale accanto alla sorgente principale è stato lordato con catrame."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Scala della Morte di Huayna Picchu",
          riddle: "Indizio cruciale dell'indagine legato a 'La Scala della Morte di Huayna Picchu', nascosto nell'ambiente.",
          loreClue: "I gradini a picco sull"
        },
        {
          id: `lvl${id}_d2`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Fune di Sicurezza per la Scalata della Vetta",
          riddle: "Indizio cruciale dell'indagine legato a 'La Fune di Sicurezza per la Scalata della Vetta', nascosto nell'ambiente.",
          loreClue: "Il cavo d"
        },
        {
          id: `lvl${id}_d3`,
          x: 68.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Teodolite ad Alta Quota della Stazione Geodetica",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Teodolite ad Alta Quota della Stazione Geodetica', nascosto nell'ambiente.",
          loreClue: "Lo strumento trigonometrico fissato sul punto trigonometrico più alto è scomparso."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porta del Corpo di Guardia della Cima",
          riddle: "Indizio cruciale dell'indagine legato a 'La Porta del Corpo di Guardia della Cima', nascosto nell'ambiente.",
          loreClue: "La porta in legno massiccio del torrione di vedetta mostra i cardini sradicati."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Diario di Vetta degli Scalatori Andini",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Diario di Vetta degli Scalatori Andini', nascosto nell'ambiente.",
          loreClue: "Il registro conservato nella capsula metallica in cima alla piramide naturale è stato lacerato."
        },
        {
          id: `lvl${id}_d6`,
          x: 40.0,
          y: 70.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Marchio dell', nascosto nell'ambiente.",
          loreClue: "Il sigillo della confraternita è stato dipinto con inchiostro indelebile sul punto più alto."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredTen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 11: Il leggendario sole radiante in oro massiccio e diamante grezzo imperiale! Custodito nella cripta segreta del Tempio della Luna, è la chiave finale che svela la rotta verso la giungla inesplorata di Paititi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 36.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cripta Segreta nel Cuore del Tempio della Luna",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cripta Segreta nel Cuore del Tempio della Luna', nascosto nell'ambiente.",
          loreClue: "La camera scavata nella caverna naturale sotto Huayna Picchu è stata violata dai mercenari."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Mappa su Pergamena di Paititi della Spedizione Bellini",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "Il documento finale con le coordinate della città segreta dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Grande Sigillo dell",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Il bassorilievo dell"
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Braciere d', nascosto nell'ambiente.",
          loreClue: "Il sacro tripode per le fiamme perpetue è stato rovesciato ai piedi dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Liturgica a Forma di Giaguaro d",
          riddle: "Strumento di ferro sagomato per disserrare passaggi e scrigni rimasti inviolati.",
          loreClue: "Il manufatto cerimoniale che sblocca il portale finale di Paititi è stato trafugato dal piedistallo."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredEleven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.4,
          y: 20.4,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Portale Megalitico del Madre de Dios",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Portale Megalitico del Madre de Dios', nascosto nell'ambiente.",
          loreClue: "I giganteschi blocchi ciclopici ricoperti da muschi millenari presentano i segni di detonazioni di dinamite."
        },
        {
          id: `lvl${id}_d2`,
          x: 84.2,
          y: 87.4,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Machete d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Machete d', nascosto nell'ambiente.",
          loreClue: "La lama cerimoniale incisa con le coordinate del meridiano di Paititi è sparita dal ceppo d"
        },
        {
          id: `lvl${id}_d3`,
          x: 25.0,
          y: 76.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Grata di Rovi e Liane Tagliata con Acido",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grata di Rovi e Liane Tagliata con Acido', nascosto nell'ambiente.",
          loreClue: "La barriera vegetale intatta da secoli che celava la fenditura nella roccia è stata corrosa."
        },
        {
          id: `lvl${id}_d4`,
          x: 37.0,
          y: 82.2,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Diario Finale del Professor Bellini (Volume XII)",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Diario Finale del Professor Bellini (Volume XII)', nascosto nell'ambiente.",
          loreClue: "Il taccuino con le annotazioni dell"
        },
        {
          id: `lvl${id}_d5`,
          x: 55.0,
          y: 69.5,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Lanterna a Pressione da Giungla Distrutta",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lanterna a Pressione da Giungla Distrutta', nascosto nell'ambiente.",
          loreClue: "La lampada a petrolio dei ricognitori è stata calpestata e abbandonata nel fango della riva."
        },
        {
          id: `lvl${id}_d6`,
          x: 45.0,
          y: 94.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Simbolo Supremo della Mano Oscura sulla Falesia",
          riddle: "Emblema esoterico inciso nella materia per indicare la rotta ai soli iniziati.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredTwelve) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 86.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Strada Lastricata in Lamina d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Strada Lastricata in Lamina d', nascosto nell'ambiente.",
          loreClue: "I basoli d"
        },
        {
          id: `lvl${id}_d2`,
          x: 14.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Pilastro Milestone con Numerazione Inca",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Pilastro Milestone con Numerazione Inca', nascosto nell'ambiente.",
          loreClue: "Il cippo confinario che indicava le leghe rimanenti alla città sacra è stato abbattuto nella boscaglia."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Maschera del Giaguaro d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Maschera del Giaguaro d', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Forziere di Bronzo dei Pionieri Spagnoli del 1572",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Forziere di Bronzo dei Pionieri Spagnoli del 1572', nascosto nell'ambiente.",
          loreClue: "La cassa metallica sepolta dai conquistadores in fuga presenta la serratura sventrata."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Pergamena del Frate Vicereale sulla Città d",
          riddle: "Documenti arrotolati che serbano annotazioni di viaggio e calcoli occulti.",
          loreClue: "La relazione manoscritta per il re di Spagna sui tesori di Paititi è lacerata a metà."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio della Setta Fuso con Zolfo",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Marchio della Setta Fuso con Zolfo', nascosto nell'ambiente.",
          loreClue: "Una colata di zolfo e pece forma il sigillo degli usurpatori lungo il camminamento lastricato."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredThirteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Bacino Idraulico delle Cascate Gemelle",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Bacino Idraulico delle Cascate Gemelle', nascosto nell'ambiente.",
          loreClue: "La chiusa in blocchi di granito rosa che deviava l"
        },
        {
          id: `lvl${id}_d2`,
          x: 88.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Barca Cerimoniale in Legno di Cedro Dorato",
          riddle: "Indizio cruciale dell'indagine legato a 'La Barca Cerimoniale in Legno di Cedro Dorato', nascosto nell'ambiente.",
          loreClue: "La piroga sacra per attraversare il lago sotterraneo è stata affondata con fori nella carena."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 40.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Calice di Platino dei Sacerdoti dell",
          riddle: "Recipiente cerimoniale per le libagioni durante i riti di consacrazione.",
          loreClue: "Il vaso liturgico con cui si compivano le offerte alla divinità fluviale è stato rubato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Botola di Bronzo Sommersa Scardinata",
          riddle: "Indizio cruciale dell'indagine legato a 'La Botola di Bronzo Sommersa Scardinata', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 85.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Disegno Idraulico di Padre Lopez del 1932",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Disegno Idraulico di Padre Lopez del 1932', nascosto nell'ambiente.",
          loreClue: "La tavola tecnica che rivelava i meccanismi di apertura dietro la cascata è stata stracciata."
        },
        {
          id: `lvl${id}_d6`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo delle Tenebre Inciso sull",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Il segno cabalistico dei cospiratori è stato scalpellato all"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredFourteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Sommità della Piramide a Gradoni di Paititi",
          riddle: "Indizio cruciale dell'indagine legato a 'La Sommità della Piramide a Gradoni di Paititi', nascosto nell'ambiente.",
          loreClue: "Il tempietto superiore rivestito d"
        },
        {
          id: `lvl${id}_d2`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "I Bassorilievi con le Dodici Tappe dell",
          riddle: "Indizio cruciale dell'indagine legato a 'I Bassorilievi con le Dodici Tappe dell', nascosto nell'ambiente.",
          loreClue: "I pannelli scolpiti che raccontano la rotta da Oxford a Paititi presentano figure scalpellate."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Lo Scettro Imperiale dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Lo Scettro Imperiale dell', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porta Monolitica del Sancta Sanctorum",
          riddle: "Indizio cruciale dell'indagine legato a 'La Porta Monolitica del Sancta Sanctorum', nascosto nell'ambiente.",
          loreClue: "Il massiccio portale in pietra nera che sigillava il cuore della piramide è stato fatto saltare."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Rotolo dei Quipu Reali della Fondazione",
          riddle: "Documenti arrotolati che serbano annotazioni di viaggio e calcoli occulti.",
          loreClue: "Il sistema di cordicelle annodate che custodiva la storia segreta di Paititi è stato reciso."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 10.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Riflettore da Campo dei Mercenari della Setta",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Riflettore da Campo dei Mercenari della Setta', nascosto nell'ambiente.",
          loreClue: "Il generatore elettrico da campo usato dalla Mano Oscura per illuminare la piramide è esploso."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredFifteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Tredici Basoli dei Raggi Solari nel Tempio",
          riddle: "Indizio cruciale dell'indagine legato a 'I Tredici Basoli dei Raggi Solari nel Tempio', nascosto nell'ambiente.",
          loreClue: "Una delle mensole in diorite ove collocare i sigilli delle tappe precedenti è stata spezzata."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Meccanismo ad Orologeria Astronomico di Paititi",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Gli ingranaggi in bronzo e quarzo che calcolano il solstizio d"
        },
        {
          id: `lvl${id}_d3`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Corona Radiata del Tredicesimo Sacerdote",
          riddle: "Manufatto sacro forgiato in metallo prezioso, custode dell'antico potere.",
          loreClue: "Il diadema in filigrana d"
        },
        {
          id: `lvl${id}_d4`,
          x: 86.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Grata del Cunicolo di Rifrazione Ottica",
          riddle: "Indizio cruciale dell'indagine legato a 'La Grata del Cunicolo di Rifrazione Ottica', nascosto nell'ambiente.",
          loreClue: "Il canale che convoglia il primo raggio di luce sulla reliquia ha le sbarre divelte."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Manoscritto Comparativo delle Dodici Civiltà",
          riddle: "Pagine vergate a mano che custodiscono le formule e i diari dell'Ordine.",
          loreClue: "La tesi del Professor Bellini che dimostra l"
        },
        {
          id: `lvl${id}_d6`,
          x: 14.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Una vernice sacrilega e fosforescente è stata spalmata sul punto esatto dove batte il raggio equinoziale."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredSixteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Le Vasche di Mercurio Liquido e Argento Vivo",
          riddle: "Indizio cruciale dell'indagine legato a 'Le Vasche di Mercurio Liquido e Argento Vivo', nascosto nell'ambiente.",
          loreClue: "Il grande specchio oracolare in cui i sacerdoti leggevano le stelle mostra i bordi in pietra sbrecciati."
        },
        {
          id: `lvl${id}_d2`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "La Sfera Armillare di Cristallo di Rocca",
          riddle: "Indizio cruciale dell'indagine legato a 'La Sfera Armillare di Cristallo di Rocca', nascosto nell'ambiente.",
          loreClue: "Il globo celeste finemente intagliato nel quarzo trasparente è stato scaraventato al suolo."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "Il Disco Lunare d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Disco Lunare d', nascosto nell'ambiente.",
          loreClue: "La grandiosa effigie della luna argentata è scomparsa dalla parete occidentale."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Cassa delle Ampolle di Reagenti Chimici",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cassa delle Ampolle di Reagenti Chimici', nascosto nell'ambiente.",
          loreClue: "Il contenitore blindato con gli acidi per purificare i metalli nobili è stato scassinato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Carta Stellare con le Coordinate del Triangolo d",
          riddle: "Mostra rotte marittime e rilievi tracciati prima che il mondo perdesse i suoi segreti.",
          loreClue: "La mappa disegnata su pelle di giaguaro con le costellazioni incaiche è lacerata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Marchio del Corvo Nero sulla Fontana di Mercurio",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Marchio del Corvo Nero sulla Fontana di Mercurio', nascosto nell'ambiente.",
          loreClue: "Il sigillo supremo del capo della Mano Oscura è stato dipinto sul bordo dello specchio d"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 12",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredSeventeen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Sarcofagi di Cristallo dei Fondatori di Paititi",
          riddle: "Indizio cruciale dell'indagine legato a 'I Sarcofagi di Cristallo dei Fondatori di Paititi', nascosto nell'ambiente.",
          loreClue: "Le arche traslucide contenenti le mummie regali mostrano fessurazioni provocate da mazzuoli."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Muro d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Muro d', nascosto nell'ambiente.",
          loreClue: "Le pareti interamente dorate che isolavano il sepolcro presentano porzioni asportate con tenaglie."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Maschera Funeraria di Giada e Lapislazzuli",
          riddle: "Indizio cruciale dell'indagine legato a 'La Maschera Funeraria di Giada e Lapislazzuli', nascosto nell'ambiente.",
          loreClue: "Il volto cerimoniale del primo re-sacerdote è stato sottratto dal sarcofago centrale."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 62.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Porta d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Porta d', nascosto nell'ambiente.",
          loreClue: "La complessa serratura meccanica precolombiana è stata forzata con cariche di fulmicotone."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Cronaca Segreta dei Re di Paititi su Foglie d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Cronaca Segreta dei Re di Paititi su Foglie d', nascosto nell'ambiente.",
          loreClue: "Il libro metallico con la genealogia millenaria è stato smembrato e parzialmente disperso."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Necromantico Finale della Mano Oscura",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "Il sigillo a teschio bendato è stato impresso sulla fronte della statua del sovrano guardiano."
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 13",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredEighteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.0,
          y: 42.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Monolito dell",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Monolito dell', nascosto nell'ambiente.",
          loreClue: "Il pilastro centrale in pura diorite nera presenta profonde scalfitture nel punto d"
        },
        {
          id: `lvl${id}_d2`,
          x: 86.0,
          y: 44.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "I Bracieri a Fiamma Eterna delle Quattro Direzioni",
          riddle: "Indizio cruciale dell'indagine legato a 'I Bracieri a Fiamma Eterna delle Quattro Direzioni', nascosto nell'ambiente.",
          loreClue: "I quattro tripodi in bronzo che segnavano i punti cardinali dell"
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 78.1,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "La gigantesca gemma tagliata a prismi che diffondeva la luce solare nella sala è stata trafugata."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "La Teca dei Dodici Sigilli della Saggezza",
          riddle: "Indizio cruciale dell'indagine legato a 'La Teca dei Dodici Sigilli della Saggezza', nascosto nell'ambiente.",
          loreClue: "Lo scrigno circolare d"
        },
        {
          id: `lvl${id}_d5`,
          x: 80.0,
          y: 75.1,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Testamento Archeologico di Padre Lopez",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Testamento Archeologico di Padre Lopez', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "Il Sigillo dell",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 13",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredNineteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 40.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'sabotage',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Le colonne tortili dell"
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Le Casse di Munizioni Abbandonate dai Sabotatori",
          riddle: "Indizio cruciale dell'indagine legato a 'Le Casse di Munizioni Abbandonate dai Sabotatori', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d3`,
          x: 68.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Pistola d",
          riddle: "Indizio cruciale dell'indagine legato a 'La Pistola d', nascosto nell'ambiente.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d4`,
          x: 12.0,
          y: 70.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "Il Forziere Blindato con i Reperti Trafugati dalle 11 Tappe",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Forziere Blindato con i Reperti Trafugati dalle 11 Tappe', nascosto nell'ambiente.",
          loreClue: "La cassa metallica dove la setta ammassava i tesori rubati durante la spedizione è stata forzata."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 40.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "La Lista dei Cospiratori e Finanziatori della Mano Oscura",
          riddle: "Indizio cruciale dell'indagine legato a 'La Lista dei Cospiratori e Finanziatori della Mano Oscura', nascosto nell'ambiente.",
          loreClue: "Il documento segreto con i nomi dei mandanti internazionali è parzialmente bruciato dal fuoco."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 15.0,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Bandiera Strappata della Confraternita Oscura",
          riddle: "Indizio cruciale dell'indagine legato a 'La Bandiera Strappata della Confraternita Oscura', nascosto nell'ambiente.",
          loreClue: "Lo stendardo nero con l"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 13",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
      ];
    } else if (isLevelOneHundredTwenty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 88.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "IL DODICESIMO SIGILLO SUPREMO: Il Cuore d",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "RELIQUIA FINALE DI LIVELLO 120: Il leggendario Cuore di Paititi! Unificando i 12 sigilli delle tappe mondiali, si attiva la camera dell"
        },
        {
          id: `lvl${id}_d2`,
          x: 18.0,
          y: 65.0,
          radius: 8.5,
          clueType: 'forced_lock',
          name: "L",
          riddle: "Indizio cruciale dell'indagine legato a 'L', nascosto nell'ambiente.",
          loreClue: "Il tripode monolitico su cui il giocatore decide la sorte di Paititi: Rivelazione al Mondo, Dono al Museo Segreto, o Sigillo Eterno per salvare la terra sacra."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'torn_evidence',
          name: "Il Diario Completo e Unificato della Spedizione Bellini",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Diario Completo e Unificato della Spedizione Bellini', nascosto nell'ambiente.",
          loreClue: "Il tomo leggendario di 120 capitoli rilegato in cuoio e oro che documenta ogni enigma risolto lungo i 120 livelli dell"
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 12.1,
          radius: 8.5,
          clueType: 'dark_seal',
          name: "La Dissoluzione Finale del Sigillo della Mano Oscura",
          riddle: "Impronta vermiglia che certifica la segretezza delle comunicazioni tra confratelli.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d5`,
          x: 50.1,
          y: 10.1,
          radius: 8.5,
          clueType: 'sabotage',
          name: "Il Braciere d",
          riddle: "Indizio cruciale dell'indagine legato a 'Il Braciere d', nascosto nell'ambiente.",
          loreClue: "La fiamma sacra di Paititi arde trionfante, illuminando il completamento definitivo di tutti i 120 livelli dell"
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 38.0,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Cosmica dell",
          riddle: "Strumento di ferro sagomato per disserrare passaggi e scrigni rimasti inviolati.",
          loreClue: "L"
        },
        {
          id: `lvl${id}_d7`,
          x: 68.5,
          y: 78.2,
          radius: 8.5,
          clueType: 'stolen_relic',
          name: "La Chiave Forgiata di Tappa 13",
          riddle: "Chiave medievale a denti asimmetrici per sbloccare l'accesso al sepolcro.",
          loreClue: "Una chiave forgiata a mano con incisioni occulte lasciata dai custodi."
        },
        {
          id: `lvl${id}_d8`,
          x: 31.5,
          y: 84.0,
          radius: 8.0,
          clueType: 'dark_seal',
          name: "Il Sigillo Cerimoniale dell'Ordine",
          riddle: "Marchio impresso su metallo che attesta l'autenticità del reperto sacro.",
          loreClue: "Il sigillo segreto che proteggeva il passaggio verso la tappa successiva."
        },
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
