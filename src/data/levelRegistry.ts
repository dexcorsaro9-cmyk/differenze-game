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
          id: `lvl1_d1`,
          x: 75.4,
          y: 22.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "Mappa del Mondo del 1512",
          riddle: "Un doppio emisfero nautico inciso quando il Nuovo Mondo era ancora un enigma per l'Europa.",
          loreClue: "Un esemplare rarissimo: mostra la rotta atlantica dimenticata che conduce alla foce del Rio delle Amazzoni."
        },
        {
          id: `lvl1_d2`,
          x: 34.3,
          y: 37.6,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Reliquia Solare nella Campana",
          riddle: "Imprigionato nel cristallo affinché l'oro puro di Paititi non accechi gli sguardi indiscreti.",
          loreClue: "Il manufatto primordiale: irradiava calore anche durante le gelide notti invernali di Oxford."
        },
        {
          id: `lvl1_d3`,
          x: 44.0,
          y: 46.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Mappamondo da Tavolo in Legno",
          riddle: "Sfera terrestre in legno tornito che traccia i meridiani calcolati dai primi navigatori.",
          loreClue: "I paralleli incisi sul legno di noce indicano il punto esatto in cui Bellini credeva si celasse la rotta andina."
        },
        {
          id: `lvl1_d4`,
          x: 62.0,
          y: 52.5,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Manoscritto delle Ande Aperto",
          riddle: "Pagine aperte cosparse di annotazioni affrettate sul passaggio segreto delle Ande.",
          loreClue: "Il Professor Bellini ha lasciato vergata a inchiostro di noce l'ultima equazione prima della fuga."
        },
        {
          id: `lvl1_d5`,
          x: 75.2,
          y: 49.7,
          radius: 5.0,
          clueType: 'dark_seal',
          name: "Calamaio con Penna d'Oca",
          riddle: "L'arma dello studioso: intinta nell'inchiostro di noce per tracciare le rotte celesti.",
          loreClue: "La penna è ancora intrisa d'inchiostro fresco ferrogallico: qualcuno ha scritto qui pochi istanti fa."
        },
        {
          id: `lvl1_d6`,
          x: 86.0,
          y: 44.3,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Lampada da Banchiere Smeraldo",
          riddle: "L'arco d'ottone che sostiene un paralume di vetro verde smeraldo per le ricerche notturne.",
          loreClue: "La lampada che rischiarava lo studio di notte: la polvere sulla base metallica rivela impronte nervose."
        },
        {
          id: `lvl1_d7`,
          x: 55.0,
          y: 68.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Mappe Geografiche nel Cassetto",
          riddle: "Custoditi nell'intaglio di mogano del cassetto socchiuso nella fretta della fuga improvvisa.",
          loreClue: "Le carte topografiche delle foreste pluviali: sfogliate e abbandonate durante la perquisizione segreta."
        },
        {
          id: `lvl1_d8`,
          x: 30.0,
          y: 81.5,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "Cuscino di Velluto con Sole Ricamato",
          riddle: "Velluto bordeaux adagiato al suolo, recante al centro il ricamo dorato dell'astro nascente.",
          loreClue: "Un ricamo artigianale che cela nella fodera un ritaglio di giornale del 1911 sulla spedizione andina."
        }
      ];
    } else if (isLevelTwo) {
      diffsForLevel = [
        {
          id: `lvl2_d1`,
          x: 74.8,
          y: 52.5,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Teschio del Priore nella Nicchia",
          riddle: "L'antico guardiano silenzioso che veglia sulla tomba sigillata dall'ordine.",
          loreClue: "Il cranio dell'ultimo guardiano della cripta: incisi sull'osso frontale vi sono i numeri romani del capitolo."
        },
        {
          id: `lvl2_d2`,
          x: 87.2,
          y: 71.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Piccone da Scavo Medievale",
          riddle: "Lo strumento in ferro pesante con cui i cercatori hanno violato il muro millenario.",
          loreClue: "La punta d'acciaio è scheggiata: è stata usata per forzare la pietra tombale sotto l'altare."
        },
        {
          id: `lvl2_d3`,
          x: 36.2,
          y: 67.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Lanterna a Petrolio Accesa",
          riddle: "Un faro in ottone massiccio la cui fiammella scaccia l'oscurità delle catacombe.",
          loreClue: "La lanterna dei ricercatori: brucia ancora a fiamma viva, segno inequivocabile di un passaggio recente."
        },
        {
          id: `lvl2_d4`,
          x: 59.5,
          y: 72.5,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Calice Rituale in Pietra Antica",
          riddle: "Coppa liturgica scolpita nella pietra scura, custode delle libagioni rituali dei custodi.",
          loreClue: "La coppa in pietra vulcanica adoperata nei riti d'iniziazione: emana un sottile odore di resine orientali."
        },
        {
          id: `lvl2_d5`,
          x: 25.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Rotoli di Pergamena Arrotolati",
          riddle: "Fascette in cuoio che serrano carte miniate con equazioni alchemiche e coordinate.",
          loreClue: "I rotoli con la topografia dell'abbazia sotterranea: descrivono un cunicolo che attraversa il fiume verso nord."
        },
        {
          id: `lvl2_d6`,
          x: 42.0,
          y: 81.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Grimorio delle Stelle Aperto",
          riddle: "Il monumentale manoscritto aperto sulle cui pagine sono tracciati i sigilli d'oriente.",
          loreClue: "Il grande libro liturgico: una glossa a margine scritta da Bellini indica la costellazione della Croce del Sud."
        },
        {
          id: `lvl2_d7`,
          x: 67.0,
          y: 89.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Mappa della Cripta Distesa",
          riddle: "La carta geografica arrotolata con fibbia in cuoio distesa sul margine del marmo.",
          loreClue: "Il rilievo topografico completo: annota la profondità esatta della volta rispetto alla superficie."
        },
        {
          id: `lvl2_d8`,
          x: 19.2,
          y: 32.5,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Fiaccola a Parete sulla Sinistra",
          riddle: "Braciere in ferro battuto ancorato alla pietra che rischiara l'ingresso delle cripte sotterranee.",
          loreClue: "La torcia a staffa medievale: la fuliggine fresca sulla parete indica che è stata riaccesa da poche ore."
        }
      ];
    } else if (isLevelThree) {
      diffsForLevel = [
        {
          id: `lvl3_d1`,
          x: 41.7,
          y: 25.0,
          radius: 6.0,
          clueType: 'sabotage',
          name: "La Lampadina a Filamento dal Soffitto",
          riddle: "Goccia di vetro sospesa dall'alto che illumina con fioco bagliore il tavolo dei reagenti.",
          loreClue: "La lampada a sospensione sopra il banco di lavoro: permetteva l'osservazione delle luminescenze chimiche sulla pergamena."
        },
        {
          id: `lvl3_d2`,
          x: 59.0,
          y: 68.3,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Mortaio con Pestello in Porcellana",
          riddle: "Recipiente di ceramica bianca dove le polveri minerali vengono ridotte in fine poltiglia.",
          loreClue: "Il mortaio dell'archeometra: sul fondo bianco rimangono tracce di cinabro e allume di rocca polverizzati."
        },
        {
          id: `lvl3_d3`,
          x: 27.0,
          y: 57.1,
          radius: 5.0,
          clueType: 'sabotage',
          name: "Il Becco Bunsen con Fiamma Viva",
          riddle: "Sorgente di fuoco azzurrognolo alimentata a gas che riscalda le ampolle del chimico.",
          loreClue: "La fiamma viva del Bunsen: manteneva a temperatura costante il solvente distillato per rivelare la mappa."
        },
        {
          id: `lvl3_d4`,
          x: 22.1,
          y: 48.2,
          radius: 5.0,
          clueType: 'torn_evidence',
          name: "Il Grande Matraccio di Distillazione",
          riddle: "Pancia sferica di vetro pyrex entro cui ribolle la soluzione alchemica dei saggi.",
          loreClue: "Il pallone di vetro collegato al refrigerante: conteneva l'estratto di acido gallico per decifrare i palinsesti."
        },
        {
          id: `lvl3_d5`,
          x: 50.0,
          y: 50.2,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "Lo Spettrometro d'Ottone su Treppiede",
          riddle: "Cilindro di metallo dorato munito di prismi ottici per scomporre la luce della materia.",
          loreClue: "Lo strumento d'ottone al centro della tavola: usato per misurare la rifrazione spettrale delle lamine auree."
        },
        {
          id: `lvl3_d6`,
          x: 10.5,
          y: 37.9,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Flacone di Reagente 'Alum'",
          riddle: "Bottiglietta farmaceutica con etichetta calligrafica posata sul ripiano laterale.",
          loreClue: "Il flacone di allume di rocca sullo scaffale: mordenzante chimico fondamentale per fissare l'inchiostro simpatico."
        },
        {
          id: `lvl3_d7`,
          x: 82.1,
          y: 34.8,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Bilancia Analitica a Due Piatti",
          riddle: "Braccio millimetrico racchiuso in una teca trasparente per pesare i granelli più preziosi.",
          loreClue: "La bilancia ad altissima sensibilità: i suoi due piatti in ottone servivano a pesare frammenti d'oro incaici."
        },
        {
          id: `lvl3_d8`,
          x: 38.0,
          y: 72.5,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Portaprovette in Legno con Reagenti",
          riddle: "Rastrelliera in quercia che ordina in fila cilindri di vetro colmi di liquidi colorati.",
          loreClue: "Il massiccio portaprovette in legno: le soluzioni al suo interno reagiscono alla presenza di sali minerali peruviani."
        }
      ];
    } else if (isLevelFour) {
      diffsForLevel = [
        {
          id: `lvl4_d1`,
          x: 50.0,
          y: 53.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Statua Giacente del Cavaliere",
          riddle: "Effigie scolpita nella pietra tombale che riposa a mani giunte da sette secoli.",
          loreClue: "La scultura marmorea del cavaliere templare: la spada sul petto reca incise le coordinate della commenda."
        },
        {
          id: `lvl4_d2`,
          x: 45.0,
          y: 35.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cancellata in Ferro Battuto ad Arco",
          riddle: "Barriera forgiata a motivi ogivali che serra la cappella funeraria dalla navata.",
          loreClue: "La grata medievale: i cardini forzati mostrano segni di scasso recente compiuti con piede di porco."
        },
        {
          id: `lvl4_d3`,
          x: 67.0,
          y: 62.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lanterna a Petrolio Accesa sull'Altare",
          riddle: "Lucerna da campo posata sui marmi della mensa per fendere la caligine della cripta.",
          loreClue: "La lanterna da speleologo: il vetro è ancora caldo, abbandonata in tutta fretta prima dell'agguato."
        },
        {
          id: `lvl4_d4`,
          x: 83.0,
          y: 75.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Taccuino di Spedizione Aperto",
          riddle: "Quaderno con copertina in tela cerata aperto sulle note dei rilievi architettonici.",
          loreClue: "Le pagine illustrate con lo spaccato del sepolcro: un appunto cifrato menziona il sarcofago segreto."
        },
        {
          id: `lvl4_d5`,
          x: 70.0,
          y: 79.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Calibro a Corsoio in Metallo",
          riddle: "Regolo d'acciaio graduato impiegato dall'archeologo per misurare lo spessore dei conci.",
          loreClue: "Il calibro di precisione: era regolato sulla larghezza esatta della fessura che apre la nicchia nascosta."
        },
        {
          id: `lvl4_d6`,
          x: 85.0,
          y: 85.9,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Metro Pieghevole in Legno da Rilievo",
          riddle: "Asta snodata a stecche gialle distesa sul pavimento per calcolare le proporzioni.",
          loreClue: "Lo strumento metrico da rilievo topografico: indica che l'altare sorge esattamente al centro della cripta."
        },
        {
          id: `lvl4_d7`,
          x: 44.0,
          y: 65.8,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Lo Scudo Araldico ai Piedi della Tomba",
          riddle: "Emblema cavalleresco scolpito a bassorilievo con le armi del nobile estinto.",
          loreClue: "Lo scudo con la croce patente: una pressione sul quadrante superiore fa scattare una molla arrugginita."
        },
        {
          id: `lvl4_d8`,
          x: 16.0,
          y: 48.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "Il Capitello Romanico a Chevron",
          riddle: "Blocco di calcare scolpito a motivi a zig-zag in cima alla colonna di sinistra.",
          loreClue: "L'intaglio romanico dell'arcata: uno dei motivi geometrici cela un incavo per nascondere piccoli rotoli."
        }
      ];
    } else if (isLevelFive) {
      diffsForLevel = [
        {
          id: `lvl5_d1`,
          x: 48.0,
          y: 45.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Moneta Antica Esaminata con la Lente",
          riddle: "Tondello aureo millenario posto sotto l'ingrandimento ottico per leggerne il conio.",
          loreClue: "Lo statere aureo con la civetta: l'usura del bordo rivela una zecca clandestina del IV secolo a.C."
        },
        {
          id: `lvl5_d2`,
          x: 26.0,
          y: 69.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "Il Vassoio Numismatico con Monete",
          riddle: "Vassoio foderato in velluto verde con alveoli che accolgono denari d'argento e bronzo.",
          loreClue: "Il medagliere da collezione: le monete sono disposte in ordine cronologico secondo la successione imperiale."
        },
        {
          id: `lvl5_d3`,
          x: 20.0,
          y: 79.9,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Cofanetto di Pesi Milligrammetrici",
          riddle: "Scatolina in mogano foderata di panno contenente minuscoli cilindri di calibrazione.",
          loreClue: "I pesi di confronto per la prova del saggio: permettono di verificare il titolo d'oro delle monete antiche."
        },
        {
          id: `lvl5_d4`,
          x: 41.7,
          y: 77.0,
          radius: 5.0,
          clueType: 'dark_seal',
          name: "Il Calamaio di Vetro Nero con Inchiostro",
          riddle: "Boccetta scura posata sul tavolo da cui lo studioso attinge inchiostro indelebile.",
          loreClue: "Il calamaio in vetro piombato: l'inchiostro all'interno è una miscela speciale per compilare i registri museali."
        },
        {
          id: `lvl5_d5`,
          x: 56.0,
          y: 70.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "Il Grande Catalogo Numismatico Aperto",
          riddle: "Volume monumentale con tavole incise che illustrano le legende delle coniazioni greche.",
          loreClue: "Il repertorio delle monete del Mediterraneo: aperta alla voce dedicata al tesoro di Siracusa."
        },
        {
          id: `lvl5_d6`,
          x: 74.0,
          y: 66.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Bilancia a Due Piatti per Metalli Preziosi",
          riddle: "Giogo sospeso con catenelle d'ottone per misurare con esattezza il peso dei metalli.",
          loreClue: "La bilancia dei cambiavalute: il piatto sinistro conserva la patina lasciata da decine di once d'argento."
        },
        {
          id: `lvl5_d7`,
          x: 90.0,
          y: 67.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Pila di Tre Volumi Rilegati in Cuoio",
          riddle: "Dorsi dorati sovrapposti con nervature in rilievo che sostengono appunti di numismatica.",
          loreClue: "I tre tomi dell'opera omnia di Eckhel: conservano tra le pagine foglietti manoscritti con stime d'asta del 1927."
        },
        {
          id: `lvl5_d8`,
          x: 97.0,
          y: 81.9,
          radius: 5.0,
          clueType: 'torn_evidence',
          name: "La Tazza in Porcellana Bianca con Piattino",
          riddle: "Tazzina da tè in fine porcellana abbandonata dal curatore durante l'interruzione dei lavori.",
          loreClue: "La tazza da tè ancora mezza piena: il conservatore del gabinetto numismatico si è allontanato di fretta."
        }
      ];
    } else if (isLevelSix) {
      diffsForLevel = [
        {
          id: `lvl6_d1`,
          x: 38.0,
          y: 45.0,
          radius: 6.5,
          clueType: 'stolen_relic',
          name: "Il Grande Telescopio Rifrattore in Ottone",
          riddle: "Lungo cannocchiale ottico puntato verso la volta celeste per scandagliare le stelle.",
          loreClue: "Il cannocchiale astronomico da cupola: l'obiettivo da otto pollici ha tracciato l'occultazione di Marte."
        },
        {
          id: `lvl6_d2`,
          x: 40.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Ruota d'Ottone con Ingranaggi di Puntamento",
          riddle: "Volantino a raggi dentati che governa l'elevazione e l'azimut del grande rifrattore.",
          loreClue: "Il meccanismo di regolazione fine: la ghiera graduata segna la declinazione esatta della rotta di Paititi."
        },
        {
          id: `lvl6_d3`,
          x: 89.0,
          y: 27.0,
          radius: 6.0,
          clueType: 'sabotage',
          name: "L'Orologio a Pendolo Regolatore da Parete",
          riddle: "Cassa in noce scuro con pendolo in mercurio che scandisce il tempo siderale.",
          loreClue: "Il regolatore di precisione di Graham: indispensabile per sincronizzare le osservazioni astronomiche coi meridiani."
        },
        {
          id: `lvl6_d4`,
          x: 75.0,
          y: 75.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "L'Atlante Celeste Aperto con le Costellazioni",
          riddle: "Grande mappa cartacea distesa sul banco con i tracciati delle costellazioni zodiacali.",
          loreClue: "Le carte celesti di Bayer: una linea a matita rossa collega la costellazione dell'Idra con l'orizzonte andino."
        },
        {
          id: `lvl6_d5`,
          x: 85.0,
          y: 68.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lampada da Banchiere con Paralume Verde",
          riddle: "Lampada da scrittoio con coppa smeraldina che diffonde luce soffusa sul registro d'osservazione.",
          loreClue: "La lampada da tavolo degli astronomi: la calda luce verde riduceva l'affaticamento visivo durante le notti di veglia."
        },
        {
          id: `lvl6_d6`,
          x: 79.0,
          y: 49.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Sfera Armillare in Ottone sul Tavolino",
          riddle: "Insieme di cerchi concentrici metallici che riproducono i moti celesti attorno alla Terra.",
          loreClue: "La sfera armillare tolemaica: il cerchio dell'eclittica reca i simboli zodiacali incisi con squisita maestria."
        },
        {
          id: `lvl6_d7`,
          x: 56.0,
          y: 33.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "La Finestra Bifora Gotica sul Panorama di Oxford",
          riddle: "Apertura ad arco con colonnina centrale che incornicia i tetti e le guglie della città.",
          loreClue: "La grande finestra dell'osservatorio: da qui lo sguardo spazia oltre le torri medievali dei college fino ai boschi."
        },
        {
          id: `lvl6_d8`,
          x: 91.0,
          y: 56.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Casellario in Legno per Lastre Fotografiche",
          riddle: "Mobiletto a scomparti sottili studiato per archiviare le lastre all'argento bromuro.",
          loreClue: "L'archivio delle lastre fotografiche astronomiche: lo sportello del 1928 è stato scassinato e vuotato."
        }
      ];
    } else if (isLevelSeven) {
      diffsForLevel = [
        {
          id: `lvl7_d1`,
          x: 50.0,
          y: 15.0,
          radius: 6.5,
          clueType: 'torn_evidence',
          name: "Il Soffitto a Cassettoni Dipinti con Stemmi",
          riddle: "Riquadri lignei sul soffitto ornati dagli scudi araldici dell'Università di Oxford.",
          loreClue: "I cassettoni policromi di Duke Humfrey: ogni pannello reca il motto dell'ateneo dipinto a lettere d'oro."
        },
        {
          id: `lvl7_d2`,
          x: 50.0,
          y: 30.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "La Grande Trave ad Arco Ribassato in Quercia",
          riddle: "Possente arco di legno scuro che scavalca la navata collegando le due gallerie librarie.",
          loreClue: "La carpenteria quattrocentesca: la quercia massiccia è intagliata con draghi e figure allegoriche della sapienza."
        },
        {
          id: `lvl7_d3`,
          x: 16.0,
          y: 56.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Scaffalatura di Sinistra con Volumi Rilegati",
          riddle: "Scaffale a parete fitto di tomi in pergamena e cuoio con catene metalliche di sicurezza.",
          loreClue: "I libri incatenati della Bodleiana: impedivano il furto dei codici unici nel periodo rinascimentale."
        },
        {
          id: `lvl7_d4`,
          x: 84.0,
          y: 56.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Scaffalatura di Destra con Tomi Dorati",
          riddle: "Muro di libri antichi dai dorsi impressi in oro zecchino sul lato destro del corridoio.",
          loreClue: "La sezione dei manoscritti orientali: comprende le cronache dei primi viaggiatori verso le Indie e le Americhe."
        },
        {
          id: `lvl7_d5`,
          x: 16.0,
          y: 82.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Sedia Windsor in Legno sotto il Banco",
          riddle: "Seggiola con spalliera a fusi torniti infilata sotto il tavolo da consultazione.",
          loreClue: "La sedia del bibliofilo: sul bracciolo destro compare inciso un piccolo simbolo a forma di rosa crucifera."
        },
        {
          id: `lvl7_d6`,
          x: 50.0,
          y: 59.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "La Grande Vetrata Gotica in Fondo alla Navata",
          riddle: "Maestosa finestra a traforo con piombi medievali che bagna la sala di luce argentea.",
          loreClue: "La vetrata istoriata: i vetri policromi rappresentano i Padri della Chiesa e i fondatori del collezionismo inglese."
        },
        {
          id: `lvl7_d7`,
          x: 6.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Ritratto ad Olio sulla Parete Sinistra",
          riddle: "Dipinto con cornice dorata che immortala un antico benefattore in toga scarlatta.",
          loreClue: "L'effigie di Thomas Bodley: il fondatore osserva severo i lettori dall'alto della galleria lignea."
        },
        {
          id: `lvl7_d8`,
          x: 95.0,
          y: 26.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Ritratto ad Olio sulla Parete Destra",
          riddle: "Tela rinascimentale raffigurante un prelato con collare bianco e libro aperto in mano.",
          loreClue: "Il ritratto dell'arcivescovo Laud: celebre collezionista di manoscritti rari donati all'ateneo nel 1635."
        }
      ];
    } else if (isLevelEight) {
      diffsForLevel = [
        {
          id: `lvl8_d1`,
          x: 50.0,
          y: 18.0,
          radius: 6.5,
          clueType: 'torn_evidence',
          name: "La Volta a Stella con Chiavi Scolpite",
          riddle: "Intricata ragnatela di costoloni in pietra con pendagli scolpiti che copre l'aula sacra.",
          loreClue: "Il capolavoro del tardo gotico inglese: quattrocento cinquanta chiavi di volta intagliate con monogrammi e stemmi."
        },
        {
          id: `lvl8_d2`,
          x: 15.0,
          y: 50.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "La Vetrata Gotica a Grata di Sinistra",
          riddle: "Altissima finestra ad arco acuto con riquadri a rombi che rischiara i banchi sinistri.",
          loreClue: "I vetri soffiati del XV secolo: lasciano filtrare una luce lattiginosa ideale per gli esami teologici."
        },
        {
          id: `lvl8_d3`,
          x: 85.0,
          y: 50.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "La Vetrata Gotica a Grata di Destra",
          riddle: "Finestrone simmetrico sul lato destro scandito da snelle colonnine di travertino.",
          loreClue: "La vetrata monumentale destra: illumina i seggi riservati ai dottori e ai membri del senato accademico."
        },
        {
          id: `lvl8_d4`,
          x: 17.0,
          y: 86.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Panca Lunga in Legno Scuro a Sinistra",
          riddle: "Seduta rettilinea di quercia massiccia dove sedevano i candidati durante le dispute.",
          loreClue: "Gli stalli degli studenti: il legno porta incise le sigle di generazioni di teologi e storici oxoniensi."
        },
        {
          id: `lvl8_d5`,
          x: 83.0,
          y: 86.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Panca Lunga in Legno Scuro a Destra",
          riddle: "Panca lignea parallela che delimita il corridoio d'onore della Divinity School.",
          loreClue: "La panca della commissione esaminatrice: il profilo del bracciolo è levigato dall'uso secolare."
        },
        {
          id: `lvl8_d6`,
          x: 39.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Pulpito Ligneo di Sinistra in Fondo",
          riddle: "Tribuna sopraelevata con leggio da cui venivano declamate le tesi in latino.",
          loreClue: "La cattedra magistrale: sotto il piano d'appoggio si trova uno scomparto segreto per le tesi proibite."
        },
        {
          id: `lvl8_d7`,
          x: 51.0,
          y: 71.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Portale Gotico Ogivale sul Fondo",
          riddle: "Ingresso monumentale in pietra che conduce all'adiacente Convocation House.",
          loreClue: "Il portale seicentesco progettato da Christopher Wren: la serratura in ferro battuto è stata sbloccata."
        },
        {
          id: `lvl8_d8`,
          x: 50.0,
          y: 90.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "Il Pavimento a Lastroni di Pietra Consunti",
          riddle: "Distesa di lastre calcaree levigate dal passo di studiosi e cardinali nel corso dei secoli.",
          loreClue: "Il pavimento storico: una lastra quadrata presso la soglia suona vuota quando viene percorsa a passi pesanti."
        }
      ];
    } else if (isLevelNine) {
      diffsForLevel = [
        {
          id: `lvl9_d1`,
          x: 19.0,
          y: 48.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Scala a Pioli in Legno sulla Galleria Sinistra",
          riddle: "Scala portatile a pioli stretti addossata ai ripiani per raggiungere i tomi più alti.",
          loreClue: "La scala dei bibliotecari: il terzo piolo è consunto per via dell'accesso continuo ai registri vaticani."
        },
        {
          id: `lvl9_d2`,
          x: 24.0,
          y: 80.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "La Balaustra in Legno Lavorato del Ballatoio",
          riddle: "Parapetto con colonnine sagomate che protegge il corridoio sopraelevato della biblioteca.",
          loreClue: "Il ballatoio ligneo della galleria superiore: offre una visuale completa sulla navata inferiore sottostante."
        },
        {
          id: `lvl9_d3`,
          x: 50.0,
          y: 16.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "L'Arco Ribassato con Fregi Dorati sul Soffitto",
          riddle: "Campata monumentale che sostiene il tetto decorata con rosoni e filetti dorati.",
          loreClue: "La struttura portante della volta: le dorature settecentesche conservano la brillantezza originale dell'oro zecchino."
        },
        {
          id: `lvl9_d4`,
          x: 88.0,
          y: 42.0,
          radius: 6.5,
          clueType: 'stolen_relic',
          name: "La Parete di Scaffali Piena di Libri a Destra",
          riddle: "Imponente parete lignea stipata di migliaia di volumi con rilegature dorate.",
          loreClue: "I ripiani dei classici greci e latini: tra due in-folio è stato infilato un foglietto cifrato con inchiostro simpatico."
        },
        {
          id: `lvl9_d5`,
          x: 7.0,
          y: 48.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Parete di Scaffali di Sinistra",
          riddle: "Libreria a tutta altezza sul ballatoio di sinistra con testi di diritto canonico e storia.",
          loreClue: "La collezione di statuti accademici: uno dei dorsi in cuoio è cavo e funge da custodia per messaggi."
        },
        {
          id: `lvl9_d6`,
          x: 62.0,
          y: 46.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Scala a Pioli sulla Galleria di Destra",
          riddle: "Seconda scala da consultazione poggiata contro gli scaffali della navata orientale.",
          loreClue: "La scala gemella in quercia: una tacca incisa all'altezza del settimo ripiano indica il settore dei viaggi andini."
        },
        {
          id: `lvl9_d7`,
          x: 38.0,
          y: 49.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Vetrata Gotica Luminosa al Termine del Corridoio",
          riddle: "Apertura finestrata in lontananza che irraggia di luce naturale il pavimento del soppalco.",
          loreClue: "La luce del mattino che filtra dalle vetrate storiche: crea lame d'oro sulla polvere centenaria dei volumi."
        },
        {
          id: `lvl9_d8`,
          x: 62.0,
          y: 82.0,
          radius: 6.0,
          clueType: 'torn_evidence',
          name: "La Galleria Inferiore di Destra con Scaffali Bassi",
          riddle: "Settore di banchi e librerie al piano terra visibile oltre il parapetto della galleria.",
          loreClue: "La sala di consultazione sottostante: un leggio è rimasto aperto sul codice cartografico di Tolomeo."
        }
      ];
    } else if (isLevelTen) {
      diffsForLevel = [
        {
          id: `lvl10_d1`,
          x: 62.0,
          y: 75.0,
          radius: 7.0,
          clueType: 'stolen_relic',
          name: "Il Grande Scheletro di Dinosauro al Centro",
          riddle: "Colossale struttura fossile preistorica montata su piedistallo nella corte centrale.",
          loreClue: "Lo scheletro fossile del T-Rex: alla base delle vertebre caudali è nascosta una scatola metallica dell'Ordine."
        },
        {
          id: `lvl10_d2`,
          x: 66.0,
          y: 94.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua in Marmo Bianco del Naturalista",
          riddle: "Scultura d'uomo illustre in piedi avvolto in un mantello che osserva i visitatori.",
          loreClue: "La statua di Charles Darwin: sul retro del basamento è inciso il primo glifo peruviano della spedizione."
        },
        {
          id: `lvl10_d3`,
          x: 50.0,
          y: 20.0,
          radius: 7.0,
          clueType: 'torn_evidence',
          name: "La Copertura a Volte in Ghisa e Vetro",
          riddle: "Spettacolare tetto vittoriano in ferro e vetrate che lascia entrare la luce del cielo.",
          loreClue: "L'architettura neogotica in ferro battuto: i pilastri metallici decorati con motivi botanici sorreggono l'immensa volta."
        },
        {
          id: `lvl10_d4`,
          x: 53.0,
          y: 63.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Secondo Scheletro Fossile sullo Sfondo",
          riddle: "Struttura scheletrica di rettile marino sospesa in secondo piano nella navata.",
          loreClue: "Il fossile di plesiosauro: scoperto sulle scogliere del Dorset, custodisce tra le costole un sigillo di piombo."
        },
        {
          id: `lvl10_d5`,
          x: 15.0,
          y: 94.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Vetrina dei Fossili in Legno con Tetto a Falda",
          riddle: "Grande armadio vetrato d'epoca vittoriana con campioni geologici e ammoniti.",
          loreClue: "La vetrina dei minerali delle Ande: un cristallo di pirite aurifera è stato asportato forzando la serratura."
        },
        {
          id: `lvl10_d6`,
          x: 84.0,
          y: 88.0,
          radius: 6.0,
          clueType: 'stolen_relic',
          name: "La Vetrina Lunga a Parete a Destra",
          riddle: "Lungo banco espositivo in mogano e cristallo lungo il deambulatorio destro.",
          loreClue: "L'esposizione di crani preistorici: la scheda descrittiva numero 104 reca annotazioni manoscritte di Bellini."
        },
        {
          id: `lvl10_d7`,
          x: 12.0,
          y: 57.0,
          radius: 5.0,
          clueType: 'torn_evidence',
          name: "Il Riquadro Entomologico sul Pilastro Sinistro",
          riddle: "Teca verticale con esemplari di farfalle e coleotteri rari fissata alla colonna.",
          loreClue: "La collezione di lepidotteri amazzonici: una rara farfalla Morpho blu indica la valle peruviana del Rio Madre de Dios."
        },
        {
          id: `lvl10_d8`,
          x: 89.0,
          y: 55.0,
          radius: 5.0,
          clueType: 'torn_evidence',
          name: "Il Riquadro Entomologico sul Pilastro Destro",
          riddle: "Quadro da parete con campioni biologici esotici montato sul pilone orientale.",
          loreClue: "La teca degli insetti fossili racchiusi in ambra: un'etichetta del 1928 cita il fondo speciale di ricerca Bellini."
        }
      ];
    } else if (isLevelEleven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 65.42,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Arazzo della Rosa Templare",
          riddle: "Il prezioso drappo ricamato con la rosa a otto punte dei cavalieri.",
          loreClue: "Il prezioso drappo ricamato con la rosa a otto punte dei cavalieri è stato staccato dalla parete di boiserie."
        },
        {
          id: `lvl${id}_d2`,
          x: 72.29,
          y: 81.19,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Piccone da Minatore contro la Parete",
          riddle: "L'attrezzo da scavo pesante usato dagli infiltrati per forzare l'accesso al pozzo di ventilazione.",
          loreClue: "L'attrezzo da scavo pesante usato dagli infiltrati per forzare l'accesso al pozzo di ventilazione è stato asportato."
        },
        {
          id: `lvl${id}_d3`,
          x: 55.58,
          y: 87.95,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Tomo Rilegato in Pelle Nera",
          riddle: "L'antico codice miniato dei Templari con le mappe idrauliche della Senna.",
          loreClue: "L'antico codice miniato dei Templari con le mappe idrauliche della Senna è stato sottratto dal tavolo."
        },
        {
          id: `lvl${id}_d4`,
          x: 19.33,
          y: 86.44,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "I Rotoli della Topografia Sotterranea",
          riddle: "I rotoli di pergamena con i rilievi delle gallerie sotto Sainte-Geneviève.",
          loreClue: "I rotoli di pergamena con i rilievi delle gallerie sotto Sainte-Geneviève sono scomparsi dal ripiano."
        },
        {
          id: `lvl${id}_d5`,
          x: 17.33,
          y: 44.08,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Torcia sul Pilastro Sinistro",
          riddle: "La torcia a staffa in ferro battuto.",
          loreClue: "La torcia a staffa in ferro battuto è stata divelta dal pilastro per lasciare il corridoio d'accesso nel buio."
        },
        {
          id: `lvl${id}_d6`,
          x: 62.08,
          y: 58.31,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Teschio con Crittogramma nella Nicchia",
          riddle: "Il teschio sacro recante l'incisione del primo glifo parigino.",
          loreClue: "Il teschio sacro recante l'incisione del primo glifo parigino è stato asportato dalla nicchia muraria."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Registro di Cava dei Minatori",
          riddle: "Quaderno cartaceo con copertina consunta contenente le piante dei cunicoli della Senna.",
          loreClue: "Il registro dei cavatori parigini del XVIII secolo: annota i passaggi franati sotto Sainte-Geneviève."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Lanterna ad Olio in Bronzo Murata",
          riddle: "Lucerna con staffa metallica ancorata al concio per rischiarare la discesa alle cripte.",
          loreClue: "La lampada da parete in bronzo brunito: il beccuccio conserva residui d'olio vegetale ancora umido."
        }
      ];
    } else if (isLevelTwelve) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.0,
          y: 12.5,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Lampadario Sospeso della Navata Sinistra",
          riddle: "Il candeliere pensile in ottone che illuminava l'inizio della linea gnomonica.",
          loreClue: "Il candeliere pensile in ottone che illuminava l'inizio della linea gnomonica è stato rimosso dalla volta."
        },
        {
          id: `lvl${id}_d2`,
          x: 84.5,
          y: 12.5,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Lampadario Sospeso della Navata Destra",
          riddle: "La lampada a sospensione destra.",
          loreClue: "La lampada a sospensione destra è stata smontata per impedire la lettura dell'obelisco all'equinozio."
        },
        {
          id: `lvl${id}_d3`,
          x: 26.5,
          y: 64.96,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Applique in Ferro del Pilastro Sinistro",
          riddle: "Il braccio portalampada sul pilastro sinistro.",
          loreClue: "Il braccio portalampada sul pilastro sinistro è stato divelto dal marmo della cappella."
        },
        {
          id: `lvl${id}_d4`,
          x: 73.0,
          y: 64.51,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Applique in Bronzo del Pilastro Destro",
          riddle: "L'applique liturgica in bronzo lungo la navata destra.",
          loreClue: "L'applique liturgica in bronzo lungo la navata destra è stata strappata dalla muratura."
        },
        {
          id: `lvl${id}_d5`,
          x: 35.0,
          y: 38.5,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Rilievo del Capitello Corinzio Sinistro",
          riddle: "Il cespo d'acanto scolpito a rilievo sul pilastro d'imposta.",
          loreClue: "Il cespo d'acanto scolpito a rilievo sul pilastro d'imposta è stato scalpellato per estrarre la pergamena."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 65.51,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Croce Monumentale dell'Altar Maggiore",
          riddle: "Il crocifisso dorato cesellato collocato al centro del tabernacolo monumentale.",
          loreClue: "Il crocifisso dorato cesellato collocato al centro del tabernacolo monumentale è stato prelevato."
        },
        {
          id: `lvl${id}_d7`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Corona di Spine Scolpita sulla Pietra",
          riddle: "Ghirlanda spinosa incisa a rilievo sulla parete per commemorare le reliquie della Sainte-Chapelle.",
          loreClue: "La corona scolpita nella nicchia: nasconde dietro l'acanto un tassello metallico mobile."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Lucchetto a Molla Medievale",
          riddle: "Pesante serratura in ferro battuto con chiave a dente singolo fissata alla grata.",
          loreClue: "Il lucchetto dell'inferriata: i cardini forzati dimostrano la violazione del passaggio da parte dei cospiratori."
        }
      ];
    } else if (isLevelThirteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 8.5,
          y: 71.99,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Basamento di Tibie della Croce Sinistra",
          riddle: "La base sagomata di ossa sovrapposte sotto la croce murale è stata colmata di pietrisco per mascherare il passaggio.",
          loreClue: "La base sagomata di ossa sovrapposte sotto la croce murale è stata colmata di pietrisco per mascherare il passaggio."
        },
        {
          id: `lvl${id}_d2`,
          x: 53.5,
          y: 60.49,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Mediano dell'Ossario Centrale",
          riddle: "Il cranio incastonato al centro della monumentale catasta di femori.",
          loreClue: "Il cranio incastonato al centro della monumentale catasta di femori è stato asportato per i simboli incisi."
        },
        {
          id: `lvl${id}_d3`,
          x: 92.0,
          y: 35.04,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Parete di Destra",
          riddle: "Il cranio incassato nel muro di contenimento laterale.",
          loreClue: "Il cranio incassato nel muro di contenimento laterale è scomparso tra le ossa compatte."
        },
        {
          id: `lvl${id}_d4`,
          x: 37.0,
          y: 89.51,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Cranio Basale della Facciata Sinistra",
          riddle: "Il cranio d'angolo al basamento del muro d'ossa.",
          loreClue: "Il cranio d'angolo al basamento del muro d'ossa è stato rimosso rivelando la botola segreta."
        },
        {
          id: `lvl${id}_d5`,
          x: 44.0,
          y: 12.05,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Fenditura nella Volta di Calcare Sinistra",
          riddle: "La fessura nella volta di calcare lutetiano è stata puntellata con cunei di legno per evitare crolli.",
          loreClue: "La fessura nella volta di calcare lutetiano è stata puntellata con cunei di legno per evitare crolli."
        },
        {
          id: `lvl${id}_d6`,
          x: 63.0,
          y: 89.51,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Basale della Facciata Destra",
          riddle: "Uno dei grandi teschi alla base del contrafforte osseo a destra.",
          loreClue: "Uno dei grandi teschi alla base del contrafforte osseo a destra è stato rimosso dalla fila."
        },
        {
          id: `lvl${id}_d7`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Candelabro a Tre Bracci in Ferro",
          riddle: "Strumento d'illuminazione in ferro battuto a tre fiamme poggiato sul ripiano di roccia.",
          loreClue: "Il candelabro medievale a tre bracci: la cera colata sui rebbi testimonia una veglia notturna recente."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Chiave di Volta con Croce Templare",
          riddle: "Il concio sommitale dell'arco ogivale scolpito con la croce biforcata dell'Ordine.",
          loreClue: "La chiave di volta dell'arcata: una leggera pressione sul centro dell'emblema rivela un'intercapedine segreta."
        }
      ];
    } else if (isLevelFourteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 86.75,
          y: 73.33,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Piccone da Scavo d'Acciaio",
          riddle: "Il pesante piccone d'acciaio appoggiato al muro.",
          loreClue: "Il pesante piccone d'acciaio appoggiato al muro è stato asportato per sfondare la camera sepolcrale."
        },
        {
          id: `lvl${id}_d2`,
          x: 89.29,
          y: 30.64,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Fiamma della Torcia Murale Superiore",
          riddle: "La fiamma viva all'interno del braciere di pietra è stata soffocata con un panno umido.",
          loreClue: "La fiamma viva all'interno del braciere di pietra è stata soffocata con un panno umido."
        },
        {
          id: `lvl${id}_d3`,
          x: 52.33,
          y: 86.27,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Lente d'Ingrandimento sul Diario",
          riddle: "La lente d'ingrandimento in ottone posata sui fogli di rilievo archeologico.",
          loreClue: "La lente d'ingrandimento in ottone posata sui fogli di rilievo archeologico è scomparsa dal blocco."
        },
        {
          id: `lvl${id}_d4`,
          x: 52.12,
          y: 53.63,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Medaglione Templare in Bronzo",
          riddle: "L'antico medaglione in bronzo con la croce patente templare.",
          loreClue: "L'antico medaglione in bronzo con la croce patente templare è stato strappato dalla mensola."
        },
        {
          id: `lvl${id}_d5`,
          x: 70.83,
          y: 92.58,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Bussola Marinaresca d'Ottone",
          riddle: "La bussola tascabile in ottone con quadrante a 32 punti.",
          loreClue: "La bussola tascabile in ottone con quadrante a 32 punti è stata sottratta davanti alla mappa."
        },
        {
          id: `lvl${id}_d6`,
          x: 26.38,
          y: 79.19,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Rotolo di Pergamena con Sigillo",
          riddle: "Il venerato emblema dei Templari che custodisce la chiave del secondo portale.",
          loreClue: "Il rotolo di pergamena sigillato da nastro rosso contenente i rilievi delle cripte è stato trafugato."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lanterna ad Olio in Bronzo Murata",
          riddle: "Lucerna con staffa metallica ancorata al concio per rischiarare la discesa alle cripte.",
          loreClue: "La lampada da parete in bronzo brunito: il beccuccio conserva residui d'olio vegetale ancora umido."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Bassorilievo delle Ossa Incrociate",
          riddle: "Scultura rupestre che raffigura tibie e teschi a protezione dell'accesso sepolcrale.",
          loreClue: "Il bassorilievo scolpito nel calcare parigino: un tempo indicava l'inizio del settore consacrato."
        }
      ];
    } else if (isLevelFifteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 48.5,
          y: 63.5,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio al Piede della Grande Croce",
          riddle: "Il teschio alla base del fusto della croce monumentale.",
          loreClue: "Il teschio alla base del fusto della croce monumentale è stato rimosso per celare la chiave di drenaggio."
        },
        {
          id: `lvl${id}_d2`,
          x: 49.0,
          y: 44.98,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio all'Incrocio della Grande Croce",
          riddle: "Il cranio centrale all'intersezione dei bracci d'ossa.",
          loreClue: "Il cranio centrale all'intersezione dei bracci d'ossa è stato prelevato per i suoi segni rituali."
        },
        {
          id: `lvl${id}_d3`,
          x: 7.0,
          y: 43.53,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Fascia Murale Sinistra",
          riddle: "Uno dei teschi sentinella sulla parete sinistra dell'ossario.",
          loreClue: "Uno dei teschi sentinella sulla parete sinistra dell'ossario è stato asportato dal paramento."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.0,
          y: 56.47,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Teschio sul Pilastro Laterale Destro",
          riddle: "Il teschio della fascia marcapiano destra.",
          loreClue: "Il teschio della fascia marcapiano destra è scomparso rivelando la fessura della roccia."
        },
        {
          id: `lvl${id}_d5`,
          x: 65.0,
          y: 82.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore della Campata Destra",
          riddle: "Il teschio allineato sulla zoccolatura inferiore destra.",
          loreClue: "Il teschio allineato sulla zoccolatura inferiore destra è stato prelevato dagli intrusi."
        },
        {
          id: `lvl${id}_d6`,
          x: 75.0,
          y: 12.05,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Sommitale Destro della Muraglia",
          riddle: "Il cranio posto alla sommità del muro d'ossa.",
          loreClue: "Il cranio posto alla sommità del muro d'ossa è stato rimosso svelando l'argano dell'acqua."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Lucchetto a Molla Medievale",
          riddle: "Pesante serratura in ferro battuto con chiave a dente singolo fissata alla grata.",
          loreClue: "Il lucchetto dell'inferriata: i cardini forzati dimostrano la violazione del passaggio da parte dei cospiratori."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Urna Cineraria in Pietra",
          riddle: "Antico vaso in pietra scolpito per custodire i resti dei primi martiri dell'ossario.",
          loreClue: "L'urna funeraria in pietra calcarea: presenta alla base l'incisione della croce patente dei Templari."
        }
      ];
    } else if (isLevelSixteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.5,
          y: 92.97,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Angolo Scolpito del Basamento Sinistro",
          riddle: "Lo zoccolo a gradoni della base lapidea del sarcofago.",
          loreClue: "Lo zoccolo a gradoni della base lapidea del sarcofago è stato frantumato con una mazza."
        },
        {
          id: `lvl${id}_d2`,
          x: 43.0,
          y: 19.36,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Targa Marmorea con l'Iscrizione Latina",
          riddle: "La formella di marmo con il motto inciso.",
          loreClue: "La formella di marmo con il motto inciso è stata scalpellata per nascondere il messaggio."
        },
        {
          id: `lvl${id}_d3`,
          x: 81.5,
          y: 93.08,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Angolo del Basamento a Terra Destro",
          riddle: "Il profilo a gola dello zoccolo d'appoggio destro del sepolcro è stato spianato a filo pavimento.",
          loreClue: "Il profilo a gola dello zoccolo d'appoggio destro del sepolcro è stato spianato a filo pavimento."
        },
        {
          id: `lvl${id}_d4`,
          x: 95.0,
          y: 59.43,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Dente d'Incastro del Coperchio Destro",
          riddle: "Il risvolto ad angolo retto del massiccio coperchio monolitico.",
          loreClue: "Il risvolto ad angolo retto del massiccio coperchio monolitico è stato tagliato per forzare la tomba."
        },
        {
          id: `lvl${id}_d5`,
          x: 26.5,
          y: 26.4,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Stele Funeraria con Simboli Solari",
          riddle: "La lastra incisa con il simbolo solare dell'Ordine.",
          loreClue: "La lastra incisa con il simbolo solare dell'Ordine è stata staccata dal montante sinistro."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.04,
          y: 77.29,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Iscrizione Funeraria sul Basamento Centrale",
          riddle: "I caratteri romani scolpiti sul basamento orizzontale in arenaria sono stati scalpellati.",
          loreClue: "I caratteri romani scolpiti sul basamento orizzontale in arenaria sono stati scalpellati."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Chiave di Volta con Croce Templare",
          riddle: "Il concio sommitale dell'arco ogivale scolpito con la croce biforcata dell'Ordine.",
          loreClue: "La chiave di volta dell'arcata: una leggera pressione sul centro dell'emblema rivela un'intercapedine segreta."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Registro di Cava dei Minatori",
          riddle: "Quaderno cartaceo con copertina consunta contenente le piante dei cunicoli della Senna.",
          loreClue: "Il registro dei cavatori parigini del XVIII secolo: annota i passaggi franati sotto Sainte-Geneviève."
        }
      ];
    } else if (isLevelSeventeen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.5,
          y: 66.52,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Ritratto Monumentale nella Campata Destra",
          riddle: "Il dipinto a olio incorniciato nella boiserie della parete destra.",
          loreClue: "Il dipinto a olio incorniciato nella boiserie della parete destra è stato asportato."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 67.52,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Ritratto Storico nella Campata Sinistra",
          riddle: "La tela seicentesca con l'effigie del custode delle catacombe.",
          loreClue: "La tela seicentesca con l'effigie del custode delle catacombe è scomparsa dal pannello."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.25,
          y: 17.52,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Dorato Centrale del Soffitto",
          riddle: "Il grande medaglione dorato scolpito sul vertice della volta a botte.",
          loreClue: "Il grande medaglione dorato scolpito sul vertice della volta a botte è stato rimosso."
        },
        {
          id: `lvl${id}_d4`,
          x: 96.5,
          y: 67.97,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Fregio ad Arabesco della Vetrata Destra",
          riddle: "I racemi in ferro dorato alla base della vetrata monumentale sono stati divelti.",
          loreClue: "I racemi in ferro dorato alla base della vetrata monumentale sono stati divelti."
        },
        {
          id: `lvl${id}_d5`,
          x: 3.5,
          y: 49.55,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Dorato della Parasta Sinistra",
          riddle: "Il sontuoso capitello composito intarsiato a rilievo d'oro.",
          loreClue: "Il sontuoso capitello composito intarsiato a rilievo d'oro è stato staccato dal pilastro."
        },
        {
          id: `lvl${id}_d6`,
          x: 77.0,
          y: 38.5,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Cariatide Dorata della Lunetta Destra",
          riddle: "La cariatide cesellata di sostegno sulla trabeazione superiore destra.",
          loreClue: "La cariatide cesellata di sostegno sulla trabeazione superiore destra è stata asportata."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Bassorilievo delle Ossa Incrociate",
          riddle: "Scultura rupestre che raffigura tibie e teschi a protezione dell'accesso sepolcrale.",
          loreClue: "Il bassorilievo scolpito nel calcare parigino: un tempo indicava l'inizio del settore consacrato."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Corona di Spine Scolpita sulla Pietra",
          riddle: "Ghirlanda spinosa incisa a rilievo sulla parete per commemorare le reliquie della Sainte-Chapelle.",
          loreClue: "La corona scolpita nella nicchia: nasconde dietro l'acanto un tassello metallico mobile."
        }
      ];
    } else if (isLevelEighteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.0,
          y: 75.45,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore del Pilastro Sinistro",
          riddle: "Il teschio alla quota inferiore della parete sinistra.",
          loreClue: "Il teschio alla quota inferiore della parete sinistra è scomparso lasciando visibile una cavità."
        },
        {
          id: `lvl${id}_d2`,
          x: 75.5,
          y: 67.97,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Inferiore della Campata Destra",
          riddle: "Il teschio incastonato alla base del muretto d'ossa destro.",
          loreClue: "Il teschio incastonato alla base del muretto d'ossa destro è svanito rivelando un vano segreto."
        },
        {
          id: `lvl${id}_d3`,
          x: 33.5,
          y: 71.99,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Zoccolatura Centrale",
          riddle: "Il cranio che scandiva la fascia marcapiano d'angolo.",
          loreClue: "Il cranio che scandiva la fascia marcapiano d'angolo è stato asportato dal muro."
        },
        {
          id: `lvl${id}_d4`,
          x: 30.5,
          y: 32.48,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Seconda Fila a Sinistra",
          riddle: "Il teschio sentinella della fila superiore sinistra.",
          loreClue: "Il teschio sentinella della fila superiore sinistra è stato rimosso dalla catasta funeraria."
        },
        {
          id: `lvl${id}_d5`,
          x: 81.0,
          y: 35.49,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Teschio della Modanatura d'Ossa Destra",
          riddle: "Il cranio allineato lungo la cornice superiore destra.",
          loreClue: "Il cranio allineato lungo la cornice superiore destra è stato sottratto dagli inseguitori."
        },
        {
          id: `lvl${id}_d6`,
          x: 10.5,
          y: 26.45,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cranio Estremo del Cantone Sinistro",
          riddle: "Il teschio che segna l'angolo della galleria mineraria sinistra.",
          loreClue: "Il teschio che segna l'angolo della galleria mineraria sinistra è stato asportato."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Urna Cineraria in Pietra",
          riddle: "Antico vaso in pietra scolpito per custodire i resti dei primi martiri dell'ossario.",
          loreClue: "L'urna funeraria in pietra calcarea: presenta alla base l'incisione della croce patente dei Templari."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Candelabro a Tre Bracci in Ferro",
          riddle: "Strumento d'illuminazione in ferro battuto a tre fiamme poggiato sul ripiano di roccia.",
          loreClue: "Il candelabro medievale a tre bracci: la cera colata sui rebbi testimonia una veglia notturna recente."
        }
      ];
    } else if (isLevelNineteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.0,
          y: 45.98,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto delle Carte Nautiche a Sinistra",
          riddle: "La grande veduta cartografica incorniciata nella lunetta sinistra.",
          loreClue: "La grande veduta cartografica incorniciata nella lunetta sinistra è stata staccata."
        },
        {
          id: `lvl${id}_d2`,
          x: 62.5,
          y: 77.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Ringhiera in Ottone del Banco da Disegno",
          riddle: "Il corrimano tubolare in ottone massiccio che proteggeva il tavolo da disegno è stato tolto.",
          loreClue: "Il corrimano tubolare in ottone massiccio che proteggeva il tavolo da disegno è stato tolto."
        },
        {
          id: `lvl${id}_d3`,
          x: 94.0,
          y: 4.46,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Rosone di Cristallo Superiore a Destra",
          riddle: "Il lampadario emisferico in cristallo e bronzo dorato calato dalla volta.",
          loreClue: "Il lampadario emisferico in cristallo e bronzo dorato calato dalla volta è stato rimosso."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 45.98,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto Paesaggistico della Parete Destra",
          riddle: "La veduta costiera incorniciata in foglia d'oro sulla parete destra.",
          loreClue: "La veduta costiera incorniciata in foglia d'oro sulla parete destra è stata asportata."
        },
        {
          id: `lvl${id}_d5`,
          x: 48.0,
          y: 46.54,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Grande Lampadario di Cristallo Centrale",
          riddle: "Il maestoso lampadario a gocce di cristallo al centro dello studio.",
          loreClue: "Il maestoso lampadario a gocce di cristallo al centro dello studio è scomparso per operare al buio."
        },
        {
          id: `lvl${id}_d6`,
          x: 61.54,
          y: 16.52,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Angelo Tutelare in Stucco dell'Arcone",
          riddle: "La figura scultorea in stucco dorato che sormontava l'arcone monumentale.",
          loreClue: "La figura scultorea in stucco dorato che sormontava l'arcone monumentale è stata staccata."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Registro di Cava dei Minatori",
          riddle: "Quaderno cartaceo con copertina consunta contenente le piante dei cunicoli della Senna.",
          loreClue: "Il registro dei cavatori parigini del XVIII secolo: annota i passaggi franati sotto Sainte-Geneviève."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Lanterna ad Olio in Bronzo Murata",
          riddle: "Lucerna con staffa metallica ancorata al concio per rischiarare la discesa alle cripte.",
          loreClue: "La lampada da parete in bronzo brunito: il beccuccio conserva residui d'olio vegetale ancora umido."
        }
      ];
    } else if (isLevelTwenty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 14.0,
          y: 93.97,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua del Cavaliere Custode a Sinistra",
          riddle: "La scultura in marmo del cavaliere templare che vegliava sul lato sinistro dell'altare.",
          loreClue: "La scultura in marmo del cavaliere templare che vegliava sul lato sinistro dell'altare è stata rimossa."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.5,
          y: 93.97,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua del Gran Priore a Destra",
          riddle: "La figura monumentale scolpita in pietra d'Angers alla destra del santuario è stata tolta dal plinto.",
          loreClue: "La figura monumentale scolpita in pietra d'Angers alla destra del santuario è stata tolta dal plinto."
        },
        {
          id: `lvl${id}_d3`,
          x: 26.5,
          y: 70.98,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Lampadario Gotico Sospeso a Sinistra",
          riddle: "La corona di fiamme a sesto acuto calata sulla navata sinistra.",
          loreClue: "La corona di fiamme a sesto acuto calata sulla navata sinistra è stata divelta per nascondere la fuga."
        },
        {
          id: `lvl${id}_d4`,
          x: 71.5,
          y: 70.98,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Lampadario Gotico Sospeso a Destra",
          riddle: "Il pesante lampadario pensile dorato sopra gli stalli di destra.",
          loreClue: "Il pesante lampadario pensile dorato sopra gli stalli di destra è stato smontato."
        },
        {
          id: `lvl${id}_d5`,
          x: 94.5,
          y: 18.53,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Candelabro Monumentale della Parete Destra",
          riddle: "Il grande candelabro liturgico in ottone ancorato al fascio di colonnine.",
          loreClue: "Il grande candelabro liturgico in ottone ancorato al fascio di colonnine è scomparso dal muro."
        },
        {
          id: `lvl${id}_d6`,
          x: 5.0,
          y: 18.53,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Candelabro Monumentale della Parete Sinistra",
          riddle: "Il portalampada in bronzo dorato fissato sul montante gotico sinistro.",
          loreClue: "Il portalampada in bronzo dorato fissato sul montante gotico sinistro è stato strappato dalla pietra."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Corona di Spine Scolpita sulla Pietra",
          riddle: "Ghirlanda spinosa incisa a rilievo sulla parete per commemorare le reliquie della Sainte-Chapelle.",
          loreClue: "La corona scolpita nella nicchia: nasconde dietro l'acanto un tassello metallico mobile."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Lucchetto a Molla Medievale",
          riddle: "Pesante serratura in ferro battuto con chiave a dente singolo fissata alla grata.",
          loreClue: "Il lucchetto dell'inferriata: i cardini forzati dimostrano la violazione del passaggio da parte dei cospiratori."
        }
      ];
    } else if (isLevelTwentyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 56.12,
          y: 77.51,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Compasso Nautico sulla Mappa del Catai",
          riddle: "Il compasso in ottone a punte aperte sulla rotta di Marco Polo.",
          loreClue: "Il compasso in ottone a punte aperte sulla rotta di Marco Polo è svanito: gli intrusi volevano celare la rotta verso Oriente."
        },
        {
          id: `lvl${id}_d2`,
          x: 94.38,
          y: 72.04,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Candeliere di Bronzo sul Tavolo",
          riddle: "Il pesante candeliere in bronzo con il cero acceso.",
          loreClue: "Il pesante candeliere in bronzo con il cero acceso è stato ribaltato e sottratto per operare nell'ombra."
        },
        {
          id: `lvl${id}_d3`,
          x: 75.25,
          y: 68.36,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Calamaio di Pietra con Penna d'Oca",
          riddle: "Il calamaio in pietra nera e la penna da calligrafo con cui il viaggiatore tracciava i diari.",
          loreClue: "Il calamaio in pietra nera e la penna da calligrafo con cui il viaggiatore tracciava i diari sono scomparsi."
        },
        {
          id: `lvl${id}_d4`,
          x: 28.21,
          y: 72.54,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Taccuino di Viaggio in Cuoio",
          riddle: "Il diario rilegato in cuoio brunito contenente i crittogrammi della Via della Seta.",
          loreClue: "Il diario rilegato in cuoio brunito contenente i crittogrammi della Via della Seta è stato trafugato."
        },
        {
          id: `lvl${id}_d5`,
          x: 76.21,
          y: 13.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Clessidra Marinaresca sullo Scaffale",
          riddle: "La clessidra d'ottone e cristallo posata sullo scaffale alto della biblioteca.",
          loreClue: "La clessidra d'ottone e cristallo posata sullo scaffale alto della biblioteca è stata asportata."
        },
        {
          id: `lvl${id}_d6`,
          x: 38.79,
          y: 66.57,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Boccetta di Spezie Orientali",
          riddle: "La boccetta farmaceutica in vetro ambrato con i pigmenti alchemici cinesi.",
          loreClue: "La boccetta farmaceutica in vetro ambrato con i pigmenti alchemici cinesi è stata sottratta dal banco."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Maschera della Bauta Dorata",
          riddle: "Volto rigido in cartapesta dipinta che garantiva l'anonimato durante i concili segreti.",
          loreClue: "La tradizionale bauta veneziana: un cifrario numerico è minutamente vergato all'interno della fronte."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Candelabro a Murrine Policrome",
          riddle: "Braccio in vetro soffiato decorato con fiori vitrei e gocce di cristallo veneziano.",
          loreClue: "Il candelabro di Murano: la purezza del cristallo testimonia la perizia dei maestri vetrai di San Marco."
        }
      ];
    } else if (isLevelTwentyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 89.84,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Banchi Lignei dei Patrizi al Centro",
          riddle: "Gli scranni cerimoniali in noce intagliato dei patrizi al centro della sala sono stati rimossi.",
          loreClue: "Gli scranni cerimoniali in noce intagliato dei patrizi al centro della sala sono stati rimossi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 25.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Ghirlanda Superiore della Sala Ducale",
          riddle: "I festoni dorati in stucco sopra l'arcone monumentale sono stati staccati dalla trabeazione.",
          loreClue: "I festoni dorati in stucco sopra l'arcone monumentale sono stati staccati dalla trabeazione."
        },
        {
          id: `lvl${id}_d3`,
          x: 79.17,
          y: 8.37,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cassettone Dorato della Volta Destra",
          riddle: "I racemi d'oro intagliati sul comparto ligneo destro del soffitto.",
          loreClue: "I racemi d'oro intagliati sul comparto ligneo destro del soffitto sono stati asportati."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.83,
          y: 8.37,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cassettone Dorato della Volta Sinistra",
          riddle: "Il fregio dorato a rilievo nel cassettonato a sinistra è stato piallato lasciando il fondo scuro.",
          loreClue: "Il fregio dorato a rilievo nel cassettonato a sinistra è stato piallato lasciando il fondo scuro."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 7.25,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Grande Medaglione Centrale del Veronese",
          riddle: "La figura allegorica centrale del soffitto monumentale svanisce nel fondo bruno della tela.",
          loreClue: "La figura allegorica centrale del soffitto monumentale svanisce nel fondo bruno della tela."
        },
        {
          id: `lvl${id}_d6`,
          x: 15.0,
          y: 58.04,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Dipinto delle Vittorie Navali a Sinistra",
          riddle: "Il grande telerio storico raffigurante la battaglia navale di Lepanto appare oscurato.",
          loreClue: "Il grande telerio storico raffigurante la battaglia navale di Lepanto appare oscurato."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Portolano dei Mercanti Veneziani",
          riddle: "Volume tascabile con descrizioni di scogli, secche e fari delle coste levantine.",
          loreClue: "Il manuale nautico del XV secolo: apparteneva a un capitano della flotta commerciale della Serenissima."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Leone Marciano in Pietra d'Istria",
          riddle: "Scultura araldica del leone alato con libro aperto a guardia del portale acqueo.",
          loreClue: "Il rilievo del leone di San Marco: la zampa destra poggia su un'iscrizione latina dai caratteri consunti."
        }
      ];
    } else if (isLevelTwentyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 17.5,
          y: 13.95,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Mosaico Dorato dell'Arco Sinistro",
          riddle: "Le tessere d'oro e pasta vitrea della volta sinistra sono state scalpellate via dagli intrusi.",
          loreClue: "Le tessere d'oro e pasta vitrea della volta sinistra sono state scalpellate via dagli intrusi."
        },
        {
          id: `lvl${id}_d2`,
          x: 87.5,
          y: 55.25,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Bizantino del Pilastro Destro",
          riddle: "Le foglie d'acanto traforate a trapano sul pilastro destro appaiono levigate a filo muro.",
          loreClue: "Le foglie d'acanto traforate a trapano sul pilastro destro appaiono levigate a filo muro."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.5,
          y: 55.25,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Bizantino del Pilastro Sinistro",
          riddle: "Il capitello a nido d'ape scolpito nel marmo proconnesio sinistro.",
          loreClue: "Il capitello a nido d'ape scolpito nel marmo proconnesio sinistro è stato scalpellato."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.0,
          y: 71.99,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Colonna di Verde Antico Destra",
          riddle: "La colonna in marmo verde tessalico a destra.",
          loreClue: "La colonna in marmo verde tessalico a destra è stata rimossa durante i lavori clandestini."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.0,
          y: 71.99,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Colonna di Porfido Rosso Sinistra",
          riddle: "Il fusto monolitico in prezioso porfido egizio della navata sinistra.",
          loreClue: "Il fusto monolitico in prezioso porfido egizio della navata sinistra è scomparso dal plinto."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.5,
          y: 13.95,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Mosaico Dorato dell'Arco Destro",
          riddle: "Il motivo bizantino a tessere auree sull'arcata destra.",
          loreClue: "Il motivo bizantino a tessere auree sull'arcata destra è stato asportato per celare i simboli."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Fanale di Prua in Ottone Marino",
          riddle: "Lanterna marittima a vetri spessi con gabbia metallica per fendere la nebbia lagunare.",
          loreClue: "Il fanale da imbarcazione patrizia: la lente di Fresnel diffondeva un segnale luminoso riconoscibile dal molo."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Carta Nautica delle Rotte di Levante",
          riddle: "Mappa idrografica su pergamena con le rotte commerciali verso Costantinopoli e Creta.",
          loreClue: "La carta nautica veneziana: annota le isole e i porti franchi lungo l'Adriatico con inchiostri policromi."
        }
      ];
    } else if (isLevelTwentyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 56.92,
          y: 69.25,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Gondola con Passaggeri in Transito",
          riddle: "La gondola veneziana con il ferro di prua in primo piano.",
          loreClue: "La gondola veneziana con il ferro di prua in primo piano è svanita dalla superficie del canale."
        },
        {
          id: `lvl${id}_d2`,
          x: 31.04,
          y: 82.65,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Grandi Pali d'Ormeggio a Bande Blu",
          riddle: "I massicci pali lignei d'approdo dipinti di blu conficcati sul fondale della laguna sono stati rimossi.",
          loreClue: "I massicci pali lignei d'approdo dipinti di blu conficcati sul fondale della laguna sono stati rimossi."
        },
        {
          id: `lvl${id}_d3`,
          x: 59.04,
          y: 29.07,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Grata Traforata della Finestra Destra",
          riddle: "Il prezioso reticolo marmoreo traforato della finestra destra del ponte è stato scardinato.",
          loreClue: "Il prezioso reticolo marmoreo traforato della finestra destra del ponte è stato scardinato."
        },
        {
          id: `lvl${id}_d4`,
          x: 45.92,
          y: 29.07,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Grata Traforata della Finestra Sinistra",
          riddle: "La grata in pietra a traforo floreale della finestra sinistra sul Rio di Palazzo.",
          loreClue: "La grata in pietra a traforo floreale della finestra sinistra sul Rio di Palazzo è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 46.71,
          y: 9.82,
          radius: 5.0,
          clueType: 'stolen_relic',
          name: "La Grande Voluta del Fastigio Superiore",
          riddle: "La monumentale voluta a spirale in pietra d'Istria sul cornicione del ponte.",
          loreClue: "La monumentale voluta a spirale in pietra d'Istria sul cornicione del ponte è stata asportata."
        },
        {
          id: `lvl${id}_d6`,
          x: 54.25,
          y: 17.35,
          radius: 5.0,
          clueType: 'stolen_relic',
          name: "La Statua della Giustizia sul Timpano",
          riddle: "Il bassorilievo della Giustizia assisa in trono sul frontone monumentale.",
          loreClue: "Il bassorilievo della Giustizia assisa in trono sul frontone monumentale è stato rimosso."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Candelabro a Murrine Policrome",
          riddle: "Braccio in vetro soffiato decorato con fiori vitrei e gocce di cristallo veneziano.",
          loreClue: "Il candelabro di Murano: la purezza del cristallo testimonia la perizia dei maestri vetrai di San Marco."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Ampolla di Vetro Soffiato di Murano",
          riddle: "Flacone con collo ritorto e riflessi azzurrini posato sul tavolo delle consultazioni.",
          loreClue: "La boccetta farmaceutica veneziana: conteneva essenze distillate per conservare i manoscritti marittimi."
        }
      ];
    } else if (isLevelTwentyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 7.25,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Rosone Centrale in Foglia d'Oro",
          riddle: "La sontuosa corona di stucchi dorati al centro del soffitto del teatro.",
          loreClue: "La sontuosa corona di stucchi dorati al centro del soffitto del teatro è scomparsa."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.0,
          y: 17.3,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Palchetto Superiore d'Angolo Sinistro",
          riddle: "Il parapetto in legno dorato e damasco serico dell'ultimo ordine.",
          loreClue: "Il parapetto in legno dorato e damasco serico dell'ultimo ordine è stato rimosso."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 17.3,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Palchetto Superiore d'Angolo Destro",
          riddle: "I rilievi dorati a lira del loggione superiore destro svaniscono nella parete.",
          loreClue: "I rilievi dorati a lira del loggione superiore destro svaniscono nella parete."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.0,
          y: 73.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Settore Centrale delle Poltrone di Platea",
          riddle: "Le poltrone in velluto rosso cremisi al centro della platea sono state sgomberate.",
          loreClue: "Le poltrone in velluto rosso cremisi al centro della platea sono state sgomberate."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.5,
          y: 67.52,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Parapetto in Velluto del Palco Destro",
          riddle: "I festoni in foglia d'oro del parapetto di proscenio destro.",
          loreClue: "I festoni in foglia d'oro del parapetto di proscenio destro sono stati asportati."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 93.08,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Buca dell'Orchestra sotto il Palcoscenico",
          riddle: "Il leggio monumentale del maestro concertatore nella fossa d'orchestra.",
          loreClue: "Il leggio monumentale del maestro concertatore nella fossa d'orchestra è scomparso."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Rilievo del Leone Marciano in Pietra d'Istria",
          riddle: "Scultura araldica del leone alato con libro aperto a guardia del portale acqueo.",
          loreClue: "Il rilievo del leone di San Marco: la zampa destra poggia su un'iscrizione latina dai caratteri consunti."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Forcola in Noce Intagliata",
          riddle: "Scalmo in legno ricurvo sagomato per governare il remo nelle acque della laguna.",
          loreClue: "La forcola da gondola in legno di noce: la linea slanciata è firmata da uno storico maestro squerarolo veneziano."
        }
      ];
    } else if (isLevelTwentySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 90.96,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "I Banchi di Lettura in Noce della Navata",
          riddle: "Il monumentale banco da consultazione con leggio intarsiato in primo piano.",
          loreClue: "Il monumentale banco da consultazione con leggio intarsiato in primo piano è scomparso."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.0,
          y: 66.41,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Tavolo di Studio dei Manoscritti Greci",
          riddle: "La grande postazione in noce dove erano esposti i codici marciani.",
          loreClue: "La grande postazione in noce dove erano esposti i codici marciani è stata rimossa."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 26.23,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Cornice a Festoni Dorati del Sansovino",
          riddle: "I rilievi in stucco dorato attorno all'arcone centrale della sala sono stati staccati.",
          loreClue: "I rilievi in stucco dorato attorno all'arcone centrale della sala sono stati staccati."
        },
        {
          id: `lvl${id}_d4`,
          x: 90.0,
          y: 41.85,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua Antica nella Nicchia Destra",
          riddle: "La scultura in marmo pario sul pilastro destro della sala dei filosofi.",
          loreClue: "La scultura in marmo pario sul pilastro destro della sala dei filosofi è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 8.37,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Centrale dei Filosofi sul Soffitto",
          riddle: "La composizione pittorica rinascimentale a olio al centro della volta appare velata.",
          loreClue: "La composizione pittorica rinascimentale a olio al centro della volta appare velata."
        },
        {
          id: `lvl${id}_d6`,
          x: 21.67,
          y: 10.6,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Tondo Dipinto del Soffitto a Sinistra",
          riddle: "La tela a olio di Paolo Veronese nel riquadro dorato sinistro.",
          loreClue: "La tela a olio di Paolo Veronese nel riquadro dorato sinistro è stata asportata."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Carta Nautica delle Rotte di Levante",
          riddle: "Mappa idrografica su pergamena con le rotte commerciali verso Costantinopoli e Creta.",
          loreClue: "La carta nautica veneziana: annota le isole e i porti franchi lungo l'Adriatico con inchiostri policromi."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Maschera della Bauta Dorata",
          riddle: "Volto rigido in cartapesta dipinta che garantiva l'anonimato durante i concili segreti.",
          loreClue: "La tradizionale bauta veneziana: un cifrario numerico è minutamente vergato all'interno della fronte."
        }
      ];
    } else if (isLevelTwentySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.0,
          y: 92.08,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Pavimento in Seminato Veneziano Policromo",
          riddle: "I marmi rossi e bianchi intarsiati nel terrazzo veneziano appaiono uniformati e grigi.",
          loreClue: "I marmi rossi e bianchi intarsiati nel terrazzo veneziano appaiono uniformati e grigi."
        },
        {
          id: `lvl${id}_d2`,
          x: 11.67,
          y: 51.9,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Busto in Marmo del Patrizio a Sinistra",
          riddle: "La scultura in marmo di Carrara sul piedistallo di diaspro a sinistra è stata tolta.",
          loreClue: "La scultura in marmo di Carrara sul piedistallo di diaspro a sinistra è stata tolta."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.0,
          y: 28.46,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Grande Lampadario di Murano a Ciocca",
          riddle: "Il sontuoso lampadario a bracci floreali in vetro soffiato policromo di Murano.",
          loreClue: "Il sontuoso lampadario a bracci floreali in vetro soffiato policromo di Murano è scomparso."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.33,
          y: 77.57,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Poltrona Rococò Rivestita in Seta Sinistra",
          riddle: "La poltrona dorata intagliata a foglia d'acanto a sinistra è assente dal portego.",
          loreClue: "La poltrona dorata intagliata a foglia d'acanto a sinistra è assente dal portego."
        },
        {
          id: `lvl${id}_d5`,
          x: 13.33,
          y: 11.72,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Trave Maestra Dipinta alla Sansovina",
          riddle: "I racemi policromi della trave dipinta a sinistra appaiono piallati a legno nudo.",
          loreClue: "I racemi policromi della trave dipinta a sinistra appaiono piallati a legno nudo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 6.14,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Affresco Barocco del Tiepolo al Centro",
          riddle: "La figura allegorica della Nobiltà al vertice del soffitto.",
          loreClue: "La figura allegorica della Nobiltà al vertice del soffitto è svanita nell'intonaco."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "L'Ampolla di Vetro Soffiato di Murano",
          riddle: "Flacone con collo ritorto e riflessi azzurrini posato sul tavolo delle consultazioni.",
          loreClue: "La boccetta farmaceutica veneziana: conteneva essenze distillate per conservare i manoscritti marittimi."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Portolano dei Mercanti Veneziani",
          riddle: "Volume tascabile con descrizioni di scogli, secche e fari delle coste levantine.",
          loreClue: "Il manuale nautico del XV secolo: apparteneva a un capitano della flotta commerciale della Serenissima."
        }
      ];
    } else if (isLevelTwentyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 43.33,
          y: 90.96,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Palo d'Ormeggio a Spirale Azzurra",
          riddle: "Il palo da gondola dipinto a spirale bianca e azzurra in primo piano.",
          loreClue: "Il palo da gondola dipinto a spirale bianca e azzurra in primo piano è scomparso dalla laguna."
        },
        {
          id: `lvl${id}_d2`,
          x: 87.92,
          y: 47.43,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lanterna Navale del Battello di Linea",
          riddle: "Il faro di navigazione in ottone a babordo sul battello di linea.",
          loreClue: "Il faro di navigazione in ottone a babordo sul battello di linea è scomparso."
        },
        {
          id: `lvl${id}_d3`,
          x: 76.67,
          y: 75.33,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Ferro di Poppa della Gondola nel Bacino",
          riddle: "Il ricciolo metallico posteriore dell'imbarcazione in transito è assente sull'acqua.",
          loreClue: "Il ricciolo metallico posteriore dell'imbarcazione in transito è assente sull'acqua."
        },
        {
          id: `lvl${id}_d4`,
          x: 40.0,
          y: 65.29,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Briccola Tripla d'Ormeggio sul Canale",
          riddle: "La briccola in massicci tronchi di rovere piantata nel fondale del canale.",
          loreClue: "La briccola in massicci tronchi di rovere piantata nel fondale del canale è scomparsa."
        },
        {
          id: `lvl${id}_d5`,
          x: 55.0,
          y: 52.46,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Cupola Maggiore Ottagonale della Salute",
          riddle: "La grande lanterna sommitale con la statua della Vergine svanisce dal profilo celeste.",
          loreClue: "La grande lanterna sommitale con la statua della Vergine svanisce dal profilo celeste."
        },
        {
          id: `lvl${id}_d6`,
          x: 63.42,
          y: 25.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Cupola Minore della Basilica della Salute",
          riddle: "La cupola secondaria del capolavoro del Longhena.",
          loreClue: "La cupola secondaria del capolavoro del Longhena è scomparsa dal profilo monumentale."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Forcola in Noce Intagliata",
          riddle: "Scalmo in legno ricurvo sagomato per governare il remo nelle acque della laguna.",
          loreClue: "La forcola da gondola in legno di noce: la linea slanciata è firmata da uno storico maestro squerarolo veneziano."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Fanale di Prua in Ottone Marino",
          riddle: "Lanterna marittima a vetri spessi con gabbia metallica per fendere la nebbia lagunare.",
          loreClue: "Il fanale da imbarcazione patrizia: la lente di Fresnel diffondeva un segnale luminoso riconoscibile dal molo."
        }
      ];
    } else if (isLevelTwentyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 58.33,
          y: 55.8,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Colonna Dorica Destra di Porta Magna",
          riddle: "La colonna marmorea rinascimentale del portale trionfale è sostituita da muratura liscia.",
          loreClue: "La colonna marmorea rinascimentale del portale trionfale è sostituita da muratura liscia."
        },
        {
          id: `lvl${id}_d2`,
          x: 16.67,
          y: 55.8,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Merlo Ghibellino della Torre Sinistra",
          riddle: "Il merlo a coda di rondine sulla cinta muraria merlata.",
          loreClue: "Il merlo a coda di rondine sulla cinta muraria merlata è scomparso dal profilo della fortezza."
        },
        {
          id: `lvl${id}_d3`,
          x: 33.33,
          y: 82.59,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Pilastro della Cancellata in Ferro Battuto",
          riddle: "La colonnina in pietra con sfera sommitale che regge la cancellata storica è stata tolta.",
          loreClue: "La colonnina in pietra con sfera sommitale che regge la cancellata storica è stata tolta."
        },
        {
          id: `lvl${id}_d4`,
          x: 75.0,
          y: 46.88,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua di Santa Giustina sul Fastigio",
          riddle: "La scultura marmorea della patrona della battaglia di Lepanto è assente dal frontone.",
          loreClue: "La scultura marmorea della patrona della battaglia di Lepanto è assente dal frontone."
        },
        {
          id: `lvl${id}_d5`,
          x: 66.67,
          y: 73.66,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Carronata d'Artiglieria Navale a Terra",
          riddle: "L'affusto in legno di rovere del cannone navale ormeggiato sul piazzale.",
          loreClue: "L'affusto in legno di rovere del cannone navale ormeggiato sul piazzale è scomparso."
        },
        {
          id: `lvl${id}_d6`,
          x: 75.0,
          y: 29.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Bassorilievo del Leone Alato Marciano",
          riddle: "Il rilievo del Leone alato con il libro aperto sull'architrave trionfale.",
          loreClue: "Il rilievo del Leone alato con il libro aperto sull'architrave trionfale è stato rimosso."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Maschera della Bauta Dorata",
          riddle: "Volto rigido in cartapesta dipinta che garantiva l'anonimato durante i concili segreti.",
          loreClue: "La tradizionale bauta veneziana: un cifrario numerico è minutamente vergato all'interno della fronte."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Candelabro a Murrine Policrome",
          riddle: "Braccio in vetro soffiato decorato con fiori vitrei e gocce di cristallo veneziano.",
          loreClue: "Il candelabro di Murano: la purezza del cristallo testimonia la perizia dei maestri vetrai di San Marco."
        }
      ];
    } else if (isLevelThirty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 66.67,
          y: 46.88,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Bottega d'Oreficeria sulla Rampa del Ponte",
          riddle: "La bottega d'oreficeria in cui era custodito il cofanetto segreto di Marco Polo.",
          loreClue: "La bottega d'oreficeria in cui era custodito il cofanetto segreto di Marco Polo è stata svuotata."
        },
        {
          id: `lvl${id}_d2`,
          x: 58.33,
          y: 73.66,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Tendalino Bianco della Gondola dei Nobili",
          riddle: "Il caratteristico felze o copertura in tela dell'imbarcazione nobiliare scompare sull'acqua.",
          loreClue: "Il caratteristico felze o copertura in tela dell'imbarcazione nobiliare scompare sull'acqua."
        },
        {
          id: `lvl${id}_d3`,
          x: 33.33,
          y: 55.8,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Ferro di Prua Pettinato della Gondola",
          riddle: "Il rostro d'argento pettinato a sei denti della gondola in transito.",
          loreClue: "Il rostro d'argento pettinato a sei denti della gondola in transito è stato strappato."
        },
        {
          id: `lvl${id}_d4`,
          x: 25.0,
          y: 29.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Rilievo dell'Arcangelo Gabriele sull'Arco",
          riddle: "La scultura in pietra d'Istria dell'Annunciazione sul fianco dell'arco di Rialto è stata tolta.",
          loreClue: "La scultura in pietra d'Istria dell'Annunciazione sul fianco dell'arco di Rialto è stata tolta."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.0,
          y: 37.95,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Arco Centrale a Tutto Sesto di Rialto",
          riddle: "Il grande rilievo della chiave di volta del ponte monumentale.",
          loreClue: "Il grande rilievo della chiave di volta del ponte monumentale è stato scalpellato."
        },
        {
          id: `lvl${id}_d6`,
          x: 8.33,
          y: 37.95,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Finestra a Bifora Gotica sul Canal Grande",
          riddle: "L'archetto acuto veneziano del palazzo mercantile a sinistra appare rettilineo e cieco.",
          loreClue: "L'archetto acuto veneziano del palazzo mercantile a sinistra appare rettilineo e cieco."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Portolano dei Mercanti Veneziani",
          riddle: "Volume tascabile con descrizioni di scogli, secche e fari delle coste levantine.",
          loreClue: "Il manuale nautico del XV secolo: apparteneva a un capitano della flotta commerciale della Serenissima."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Rilievo del Leone Marciano in Pietra d'Istria",
          riddle: "Scultura araldica del leone alato con libro aperto a guardia del portale acqueo.",
          loreClue: "Il rilievo del leone di San Marco: la zampa destra poggia su un'iscrizione latina dai caratteri consunti."
        }
      ];
    } else if (isLevelThirtyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.04,
          y: 66.63,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Pugnale Cerimoniale nel Sarcofago",
          riddle: "Un antico pugnale minoico in bronzo e oro riposa sul fondo del sarcofago in pietra; la Mano Oscura ha tentato di asportarlo.",
          loreClue: "Un antico pugnale minoico in bronzo e oro riposa sul fondo del sarcofago in pietra; la Mano Oscura ha tentato di asportarlo."
        },
        {
          id: `lvl${id}_d2`,
          x: 28.75,
          y: 80.97,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Lo Schizzo del Toro di Cnosso",
          riddle: "Sulla pagina sinistra del taccuino di scavo compare il rilievo a matita della Taurocatarsia con le coordinate del santuario.",
          loreClue: "Sulla pagina sinistra del taccuino di scavo compare il rilievo a matita della Taurocatarsia con le coordinate del santuario."
        },
        {
          id: `lvl${id}_d3`,
          x: 41.54,
          y: 78.29,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Lente d'Ingrandimento Tascabile",
          riddle: "La lente da campo in ottone usata per analizzare i frammenti di ceramica kamares.",
          loreClue: "La lente da campo in ottone usata per analizzare i frammenti di ceramica kamares è stata rimossa dal tavolo da disegno."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.42,
          y: 68.53,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Matrice di Scavo KN-40",
          riddle: "Sulla spalla del grande pithos a motivi di corda compare la marcatura a gesso dello scavo archeologico KN-40.",
          loreClue: "Sulla spalla del grande pithos a motivi di corda compare la marcatura a gesso dello scavo archeologico KN-40."
        },
        {
          id: `lvl${id}_d5`,
          x: 13.17,
          y: 58.87,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Filo a Piombo del Teodolite",
          riddle: "Un pesante filo a piombo conico in ottone del treppiede geodetico è stato reciso per falsare le quote altimetriche.",
          loreClue: "Un pesante filo a piombo conico in ottone del treppiede geodetico è stato reciso per falsare le quote altimetriche."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Vaso Litico con Motivo a Polpo",
          riddle: "Recipiente in steatite levigata decorato con tentacoli marini che avvolgono la pancia.",
          loreClue: "La ceramica in stile marino: la maestria del vasaio minoico riproduce il movimento fluido delle onde."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Pennello da Restauro Archeologico",
          riddle: "Fine pennello in setola con manico d'osso adoperato dagli scavatori per pulire gli affreschi.",
          loreClue: "Lo strumento degli archeologi della spedizione Evans: abbandonato sulla mensa durante i rilievi del 1900."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Cilindrico in Steatite",
          riddle: "Matrice incisa a intaglio che veniva fatta rotolare sull'argilla per apporre il marchio regale.",
          loreClue: "Il sigillo tascabile in pietra dura: raffigura un acrobata tauromachico in volo sopra le corna del toro."
        }
      ];
    } else if (isLevelThirtyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Bacino Idraulico Lustrale",
          riddle: "Il bacino lustrale in pietra calcarea al centro della sala delle purificazioni reca tracce di oli rituali asportati.",
          loreClue: "Il bacino lustrale in pietra calcarea al centro della sala delle purificazioni reca tracce di oli rituali asportati."
        },
        {
          id: `lvl${id}_d2`,
          x: 12.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Grifone Guardiano dell'Affresco Sinistro",
          riddle: "La figura araldica del grifone minoico senza ali sull'intonaco sinistro mostra incisioni segrete nel piumaggio.",
          loreClue: "La figura araldica del grifone minoico senza ali sull'intonaco sinistro mostra incisioni segrete nel piumaggio."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Fregio Superiore a Spirali d'Onda",
          riddle: "Il fregio policromo a spirali marine sopra lo schienale del trono.",
          loreClue: "Il fregio policromo a spirali marine sopra lo schienale del trono è stato scalpellato per nascondere una cavità."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Seduta Ergonomica del Trono di Gesso",
          riddle: "L'incavo sacro intagliato nel sedile in alabastro del re Minosse rivela un alloggiamento per il sigillo reale.",
          loreClue: "L'incavo sacro intagliato nel sedile in alabastro del re Minosse rivela un alloggiamento per il sigillo reale."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Grifone Solare dell'Affresco Destro",
          riddle: "Il grifone cerimoniale della parete destra custodisce tra gli artigli il simbolo del Labirinto.",
          loreClue: "Il grifone cerimoniale della parete destra custodisce tra gli artigli il simbolo del Labirinto."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "L'Ostrakon con Glifi Marini",
          riddle: "Coccio ceramico con appunti tracciati a pennello sulla posizione delle cripte a pilastro.",
          loreClue: "Il frammento di terracotta: reca uno schizzo planimetrico del dedalo sotterraneo di Cnosso."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Brocca Votiva in Argilla Policroma",
          riddle: "Vaso con beccuccio slanciato adoperato per versare libagioni di vino dolce e miele.",
          loreClue: "La brocca cerimoniale di Kamares: i motivi floreali rossi e bianchi su fondo nero sono perfettamente conservati."
        },
        {
          id: `lvl${id}_d8`,
          x: 35.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Doppia Ascia Cerimoniale (Labrys)",
          riddle: "Arma votiva in bronzo a due lame ricurve simbolo del potere sacerdotale di Cnosso.",
          loreClue: "La bipenne sacra minoica: le incisioni a spirale sulle lame simboleggiano i cicli lunari del labirinto."
        }
      ];
    } else if (isLevelThirtyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Grande Delfino Centrale dell'Affresco",
          riddle: "Il maestoso delfino azzurro con ventre dorato al centro del megaron della regina indica la rotta verso Alessandria.",
          loreClue: "Il maestoso delfino azzurro con ventre dorato al centro del megaron della regina indica la rotta verso Alessandria."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Fregio Geometrico a Meandro Marino",
          riddle: "La fascia a meandro continuo che corona la composizione marina è stata alterata per occultare una cifra dedalica.",
          loreClue: "La fascia a meandro continuo che corona la composizione marina è stata alterata per occultare una cifra dedalica."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Banco di Pesci Corallini a Destra",
          riddle: "Il gruppo di piccoli pesci variopinti che nuotano verso est rivela la corrente marina verso l'Egitto tolemaico.",
          loreClue: "Il gruppo di piccoli pesci variopinti che nuotano verso est rivela la corrente marina verso l'Egitto tolemaico."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.0,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Delfino Minore in Fase di Salto",
          riddle: "La sagoma del giovane delfino che emerge tra le onde è stata scheggiata dagli emissari della Mano Oscura.",
          loreClue: "La sagoma del giovane delfino che emerge tra le onde è stata scheggiata dagli emissari della Mano Oscura."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.04,
          y: 69.98,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Pinna Caudale del Delfino Inferiore",
          riddle: "La doppia pinna caudale arcuata del delfino guida tocca il rilievo di una stella nautica a otto punte.",
          loreClue: "La doppia pinna caudale arcuata del delfino guida tocca il rilievo di una stella nautica a otto punte."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Corno di Consacrazione in Arenaria",
          riddle: "Elemento architettonico a forma di corna taurine che coronava i santuari dell'Egeo.",
          loreClue: "Il corno di consacrazione in pietra calcarea: un tempo svettava sul propileo sud del palazzo di Minosse."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta d'Argilla in Lineare B",
          riddle: "Lastrina essiccata al sole recante fitti glifi sillabici sull'amministrazione del tempio.",
          loreClue: "Il documento d'argilla cruda: elenca le offerte d'olio e zafferano destinate al santuario rupestre."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Litico con Motivo a Polpo",
          riddle: "Recipiente in steatite levigata decorato con tentacoli marini che avvolgono la pancia.",
          loreClue: "La ceramica in stile marino: la maestria del vasaio minoico riproduce il movimento fluido delle onde."
        }
      ];
    } else if (isLevelThirtyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Grande Pithos Cerimoniale Destro",
          riddle: "Il monumentale pithos in terracotta per l'olio sacro reca un sigillo arcaico con la testa di Minotauro.",
          loreClue: "Il monumentale pithos in terracotta per l'olio sacro reca un sigillo arcaico con la testa di Minotauro."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Trave di Cedro della Galleria Magazzini",
          riddle: "La trave maestra di cedro del Libano presenta un'intaccatura con il marchio dei carpentieri minoici.",
          loreClue: "La trave maestra di cedro del Libano presenta un'intaccatura con il marchio dei carpentieri minoici."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lastra del Cunicolo di Scolo a Terra",
          riddle: "La lastra pavimentale del canale idraulico sotterraneo è stata scalfita per accedere ai magazzini sigillati.",
          loreClue: "La lastra pavimentale del canale idraulico sotterraneo è stata scalfita per accedere ai magazzini sigillati."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Pithos da Riserva a Nastro Rilievato",
          riddle: "Il vaso gigante con decorazione a corda ritorta a sinistra conteneva tavolette d'argilla ancora fresche.",
          loreClue: "Il vaso gigante con decorazione a corda ritorta a sinistra conteneva tavolette d'argilla ancora fresche."
        },
        {
          id: `lvl${id}_d5`,
          x: 65.04,
          y: 45.09,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Cassa d'Argilla con Sigillo di Creta",
          riddle: "Il manufatto votivo dei re minoici cesellato con il labirinto di Dedalo.",
          loreClue: "La cassa sigillata con argilla cruda conteneva i registri commerciali delle rotte tra Creta ed Egitto."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Pennello da Restauro Archeologico",
          riddle: "Fine pennello in setola con manico d'osso adoperato dagli scavatori per pulire gli affreschi.",
          loreClue: "Lo strumento degli archeologi della spedizione Evans: abbandonato sulla mensa durante i rilievi del 1900."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Sigillo Cilindrico in Steatite",
          riddle: "Matrice incisa a intaglio che veniva fatta rotolare sull'argilla per apporre il marchio regale.",
          loreClue: "Il sigillo tascabile in pietra dura: raffigura un acrobata tauromachico in volo sopra le corna del toro."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Ostrakon con Glifi Marini",
          riddle: "Coccio ceramico con appunti tracciati a pennello sulla posizione delle cripte a pilastro.",
          loreClue: "Il frammento di terracotta: reca uno schizzo planimetrico del dedalo sotterraneo di Cnosso."
        }
      ];
    } else if (isLevelThirtyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Fregio Superiore della Processione",
          riddle: "La fascia floreale a gigli stilizzati che corona la processione minoica è stata manomessa.",
          loreClue: "La fascia floreale a gigli stilizzati che corona la processione minoica è stata manomessa."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 85.1,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Rituale Rython a Terra",
          riddle: "Il prezioso rython conico in clorite verde usato per le libagioni del santuario.",
          loreClue: "Il prezioso rython conico in clorite verde usato per le libagioni del santuario è stato sottratto dal pavimento."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Portatore di Vasi d'Offerta",
          riddle: "La figura del coppiere reale che reca il grande vaso conico reca un pendente a forma di sole radiante.",
          loreClue: "La figura del coppiere reale che reca il grande vaso conico reca un pendente a forma di sole radiante."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Rosone a Spirale della Cornice",
          riddle: "La spirale a bassorilievo dell'architrave indica l'orientamento astronomico del megaron verso il Nilo.",
          loreClue: "La spirale a bassorilievo dell'architrave indica l'orientamento astronomico del megaron verso il Nilo."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.04,
          y: 85.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Base Lapidea della Parasta Destra",
          riddle: "La base in calcare rosa della parasta cerimoniale.",
          loreClue: "La base in calcare rosa della parasta cerimoniale mostra segni di scavo clandestino recente."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Brocca Votiva in Argilla Policroma",
          riddle: "Vaso con beccuccio slanciato adoperato per versare libagioni di vino dolce e miele.",
          loreClue: "La brocca cerimoniale di Kamares: i motivi floreali rossi e bianchi su fondo nero sono perfettamente conservati."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Doppia Ascia Cerimoniale (Labrys)",
          riddle: "Arma votiva in bronzo a due lame ricurve simbolo del potere sacerdotale di Cnosso.",
          loreClue: "La bipenne sacra minoica: le incisioni a spirale sulle lame simboleggiano i cicli lunari del labirinto."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Corno di Consacrazione in Arenaria",
          riddle: "Elemento architettonico a forma di corna taurine che coronava i santuari dell'Egeo.",
          loreClue: "Il corno di consacrazione in pietra calcarea: un tempo svettava sul propileo sud del palazzo di Minosse."
        }
      ];
    } else if (isLevelThirtySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Toro Sacro al Galoppo nel Cortile",
          riddle: "Il possente toro nero sacrificatore nel grande affresco centrale punta le corna verso l'altare del labirinto.",
          loreClue: "Il possente toro nero sacrificatore nel grande affresco centrale punta le corna verso l'altare del labirinto."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Acrobata Minoico in Volo Sulla Groppa",
          riddle: "La figura dell'atleta acrobata colto nel balzo sacro sopra il toro nasconde un amuleto con geroglifici cretesi.",
          loreClue: "La figura dell'atleta acrobata colto nel balzo sacro sopra il toro nasconde un amuleto con geroglifici cretesi."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 90.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Le Corna di Consacrazione Monolitiche",
          riddle: "Le monumentali corna in pietra calcarea sulla sommità del cortile recano incisi i cicli solari ed equinoziali.",
          loreClue: "Le monumentali corna in pietra calcarea sulla sommità del cortile recano incisi i cicli solari ed equinoziali."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Dama con Fregio di Lapislazzuli",
          riddle: "La sacerdotessa che assiste al rito della taurocatarsia stringe un nastro sacro in porpora di Tiro.",
          loreClue: "La sacerdotessa che assiste al rito della taurocatarsia stringe un nastro sacro in porpora di Tiro."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Altare Centrale delle Offerte Incruente",
          riddle: "Il piano in selenite dell'altare sacrificale presenta una fessura per la raccolta dell'acqua lustrale.",
          loreClue: "Il piano in selenite dell'altare sacrificale presenta una fessura per la raccolta dell'acqua lustrale."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Tavoletta d'Argilla in Lineare B",
          riddle: "Lastrina essiccata al sole recante fitti glifi sillabici sull'amministrazione del tempio.",
          loreClue: "Il documento d'argilla cruda: elenca le offerte d'olio e zafferano destinate al santuario rupestre."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Vaso Litico con Motivo a Polpo",
          riddle: "Recipiente in steatite levigata decorato con tentacoli marini che avvolgono la pancia.",
          loreClue: "La ceramica in stile marino: la maestria del vasaio minoico riproduce il movimento fluido delle onde."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Pennello da Restauro Archeologico",
          riddle: "Fine pennello in setola con manico d'osso adoperato dagli scavatori per pulire gli affreschi.",
          loreClue: "Lo strumento degli archeologi della spedizione Evans: abbandonato sulla mensa durante i rilievi del 1900."
        }
      ];
    } else if (isLevelThirtySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.08,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Labrys Scolpito sul Pilastro Sinistro",
          riddle: "L'incisione della doppia ascia sacra sul pilastro monolitico risuona con un'apertura meccanica nella parete.",
          loreClue: "L'incisione della doppia ascia sacra sul pilastro monolitico risuona con un'apertura meccanica nella parete."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.08,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Labrys Gemello sul Pilastro Destro",
          riddle: "La seconda ascia sacra incisa nel calcare forma la coppia d'assi di puntamento per la meridiana sotterranea.",
          loreClue: "La seconda ascia sacra incisa nel calcare forma la coppia d'assi di puntamento per la meridiana sotterranea."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Bacino delle Libagioni Lustrale Destro",
          riddle: "La coppa monolitica scavata nel pavimento per le abluzioni prima dell'ingresso nel labirinto.",
          loreClue: "La coppa monolitica scavata nel pavimento per le abluzioni prima dell'ingresso nel labirinto è stata asportata."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Canale Idraulico Sotterraneo a Sinistra",
          riddle: "La canaletta di drenaggio in terracotta policroma che convogliava l'acqua verso le cisterne appare deviata.",
          loreClue: "La canaletta di drenaggio in terracotta policroma che convogliava l'acqua verso le cisterne appare deviata."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.08,
          y: 12.17,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Chiave di Volta con Simbolo del Minotauro",
          riddle: "Il blocco centrale dell'arco con l'effigie taurina è stato martellato per oscurare le lettere arcaiche.",
          loreClue: "Il blocco centrale dell'arco con l'effigie taurina è stato martellato per oscurare le lettere arcaiche."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Sigillo Cilindrico in Steatite",
          riddle: "Matrice incisa a intaglio che veniva fatta rotolare sull'argilla per apporre il marchio regale.",
          loreClue: "Il sigillo tascabile in pietra dura: raffigura un acrobata tauromachico in volo sopra le corna del toro."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Ostrakon con Glifi Marini",
          riddle: "Coccio ceramico con appunti tracciati a pennello sulla posizione delle cripte a pilastro.",
          loreClue: "Il frammento di terracotta: reca uno schizzo planimetrico del dedalo sotterraneo di Cnosso."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Brocca Votiva in Argilla Policroma",
          riddle: "Vaso con beccuccio slanciato adoperato per versare libagioni di vino dolce e miele.",
          loreClue: "La brocca cerimoniale di Kamares: i motivi floreali rossi e bianchi su fondo nero sono perfettamente conservati."
        }
      ];
    } else if (isLevelThirtyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Capitello a Cuscino della Colonna Sinistra",
          riddle: "Il tipico capitello a toro espanso della colonna lignea sinistra contiene un vano cilindrico nascosto.",
          loreClue: "Il tipico capitello a toro espanso della colonna lignea sinistra contiene un vano cilindrico nascosto."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Capitello Modanato della Colonna Destra",
          riddle: "Il capitello dipinto di nero e oro della colonna destra reggeva una lucerna votiva in bronzo trafugata.",
          loreClue: "Il capitello dipinto di nero e oro della colonna destra reggeva una lucerna votiva in bronzo trafugata."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Lampada Votiva in Steatite Scolpita",
          riddle: "La lucerna a tre becchi in steatite verde con rilievi di conchiglie.",
          loreClue: "La lucerna a tre becchi in steatite verde con rilievi di conchiglie è stata rovesciata tra le macerie."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Bassorilievo Parietale del Meandro",
          riddle: "Il rilievo su gesso che riproduce il mito del gomitolo di Arianna è stato raschiato dagli intrusi.",
          loreClue: "Il rilievo su gesso che riproduce il mito del gomitolo di Arianna è stato raschiato dagli intrusi."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Lastra Sepolcrale al Centro della Cripta",
          riddle: "La lastra pavimentale monolitica al centro della camera ipogea presenta anelli di sollevamento in bronzo.",
          loreClue: "La lastra pavimentale monolitica al centro della camera ipogea presenta anelli di sollevamento in bronzo."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Doppia Ascia Cerimoniale (Labrys)",
          riddle: "Arma votiva in bronzo a due lame ricurve simbolo del potere sacerdotale di Cnosso.",
          loreClue: "La bipenne sacra minoica: le incisioni a spirale sulle lame simboleggiano i cicli lunari del labirinto."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Corno di Consacrazione in Arenaria",
          riddle: "Elemento architettonico a forma di corna taurine che coronava i santuari dell'Egeo.",
          loreClue: "Il corno di consacrazione in pietra calcarea: un tempo svettava sul propileo sud del palazzo di Minosse."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Tavoletta d'Argilla in Lineare B",
          riddle: "Lastrina essiccata al sole recante fitti glifi sillabici sull'amministrazione del tempio.",
          loreClue: "Il documento d'argilla cruda: elenca le offerte d'olio e zafferano destinate al santuario rupestre."
        }
      ];
    } else if (isLevelThirtyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Portale d'Accesso al Corridoio Cieco",
          riddle: "L'imponente stipite in calcare squadrato all'ingresso del pozzo nasconde la serratura a perno minoica.",
          loreClue: "L'imponente stipite in calcare squadrato all'ingresso del pozzo nasconde la serratura a perno minoica."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Scala Monumentale dei Grandi Gradini",
          riddle: "I gradini monolitici aperti a ventaglio conducono al livello più profondo del labirinto dedalico.",
          loreClue: "I gradini monolitici aperti a ventaglio conducono al livello più profondo del labirinto dedalico."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 68.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Fessura Muraria con Sigillo di Bronzo",
          riddle: "Il manufatto votivo dei re minoici cesellato con il labirinto di Dedalo.",
          loreClue: "Una fessura orizzontale nella parete di selenite contiene una lamina metallica con iscrizioni in Lineare A."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Nicchia della Torcia Cerimoniale Sinistra",
          riddle: "L'incavo nella pietra per la torcia di pece è stato annerito da una fiamma recente accesa dai sabotatori.",
          loreClue: "L'incavo nella pietra per la torcia di pece è stato annerito da una fiamma recente accesa dai sabotatori."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Bassorilievo del Labirinto Dedalico",
          riddle: "Il diagramma a sette circuiti del labirinto inciso sul pilastro mostra il passaggio segreto verso l'uscita a mare.",
          loreClue: "Il diagramma a sette circuiti del labirinto inciso sul pilastro mostra il passaggio segreto verso l'uscita a mare."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Vaso Litico con Motivo a Polpo",
          riddle: "Recipiente in steatite levigata decorato con tentacoli marini che avvolgono la pancia.",
          loreClue: "La ceramica in stile marino: la maestria del vasaio minoico riproduce il movimento fluido delle onde."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Pennello da Restauro Archeologico",
          riddle: "Fine pennello in setola con manico d'osso adoperato dagli scavatori per pulire gli affreschi.",
          loreClue: "Lo strumento degli archeologi della spedizione Evans: abbandonato sulla mensa durante i rilievi del 1900."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Sigillo Cilindrico in Steatite",
          riddle: "Matrice incisa a intaglio che veniva fatta rotolare sull'argilla per apporre il marchio regale.",
          loreClue: "Il sigillo tascabile in pietra dura: raffigura un acrobata tauromachico in volo sopra le corna del toro."
        }
      ];
    } else if (isLevelForty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "IL QUARTO SIGILLO: Il Labrys Minoico d'Oro",
          riddle: "Il manufatto votivo dei re minoici cesellato con il labirinto di Dedalo.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 4: La monumentale doppia ascia d'oro massiccio di Minosse! Al centro è incastonata la coordinata solare per Alessandria d'Egitto."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Stele Dedalica con la Mappa del Mediterraneo",
          riddle: "La stele di gesso reca incisa la rotta marittima dal porto di Kommos fino al faro di Alessandria.",
          loreClue: "La stele di gesso reca incisa la rotta marittima dal porto di Kommos fino al faro di Alessandria."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Altare d'Ossidiana del Santuario Segreto",
          riddle: "L'altare monolitico in ossidiana lucida riflette il raggio solare dell'equinozio verso il golfo di Creta.",
          loreClue: "L'altare monolitico in ossidiana lucida riflette il raggio solare dell'equinozio verso il golfo di Creta."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Disco di Festo in Argilla Cruda",
          riddle: "Il celebre disco d'argilla con caratteri geroglifici impressi a spirale è stato estratto dal suo scrigno.",
          loreClue: "Il celebre disco d'argilla con caratteri geroglifici impressi a spirale è stato estratto dal suo scrigno."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Cornice a Doppia Spirale della Volta",
          riddle: "La decorazione ad onde dorate che circonda la volta santuario indica il punto di congiunzione dei paralleli.",
          loreClue: "La decorazione ad onde dorate che circonda la volta santuario indica il punto di congiunzione dei paralleli."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Ostrakon con Glifi Marini",
          riddle: "Coccio ceramico con appunti tracciati a pennello sulla posizione delle cripte a pilastro.",
          loreClue: "Il frammento di terracotta: reca uno schizzo planimetrico del dedalo sotterraneo di Cnosso."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Brocca Votiva in Argilla Policroma",
          riddle: "Vaso con beccuccio slanciato adoperato per versare libagioni di vino dolce e miele.",
          loreClue: "La brocca cerimoniale di Kamares: i motivi floreali rossi e bianchi su fondo nero sono perfettamente conservati."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Doppia Ascia Cerimoniale (Labrys)",
          riddle: "Arma votiva in bronzo a due lame ricurve simbolo del potere sacerdotale di Cnosso.",
          loreClue: "La bipenne sacra minoica: le incisioni a spirale sulle lame simboleggiano i cicli lunari del labirinto."
        }
      ];
    } else if (isLevelFortyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 90.38,
          y: 61.44,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Rotolo di Papiro di Tolomeo Filadelfo",
          riddle: "Il rotolo di papiro con il catalogo dei tomi tolemaici.",
          loreClue: "Il rotolo di papiro con il catalogo dei tomi tolemaici è stato sottratto per celare la rotta lungo il Nilo."
        },
        {
          id: `lvl${id}_d2`,
          x: 60.21,
          y: 76.95,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Sfera Armillare Alessandrina di Bronzo",
          riddle: "La monumentale sfera armillare usata per calcolare le declinazioni celesti è stata danneggiata sul cerchio meridiano.",
          loreClue: "La monumentale sfera armillare usata per calcolare le declinazioni celesti è stata danneggiata sul cerchio meridiano."
        },
        {
          id: `lvl${id}_d3`,
          x: 60.5,
          y: 89.79,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Anfora Rodia con Sigillo Tolemaico",
          riddle: "Il supremo cimelio astronomico sopravvissuto al grande incendio di Alessandria.",
          loreClue: "L'anfora cerimoniale ad anse nodose reca il marchio in ceralacca della flotta tolemaica."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.96,
          y: 26.23,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Busto in Marmo di Tolomeo Sotere",
          riddle: "Il busto marmoreo del fondatore della biblioteca presenta un'incisione abrasa sul basamento.",
          loreClue: "Il busto marmoreo del fondatore della biblioteca presenta un'incisione abrasa sul basamento."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.46,
          y: 83.76,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Calamaio di Bronzo con Inchiostro di Seppia",
          riddle: "Il calamaio in bronzo ellenistico usato dagli amanuensi reali.",
          loreClue: "Il calamaio in bronzo ellenistico usato dagli amanuensi reali è stato rovesciato sul tavolo di lettura."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lucerna Greca a Cinque Becchi",
          riddle: "Lampada in terracotta con molteplici fiammelle adoperata nei ballatoi del Serapeo.",
          loreClue: "La lucerna d'argilla invetriata: rischiarava i banchi di trascrizione dei filologi tolemaici."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Quadrante Solare Portatile Tolemaico",
          riddle: "Piccolo blocco di marmo bianco con linee orarie convergenti e gnomone d'ottone.",
          loreClue: "L'orologio solare tascabile: permetteva ai dotti alessandrini di sincronizzare le clessidre ad acqua."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Ampolla Vetrosa con Riflessi Iridati",
          riddle: "Bottiglia in vetro soffiato siriano dalla tipica lucentezza cangiante dovuta ai millenni.",
          loreClue: "L'ampolla da unguenti di epoca tolemaica: conservava oli essenziali d'incenso per le cerimonie della biblioteca."
        }
      ];
    } else if (isLevelFortyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Meridiana Gnomonica di Siene",
          riddle: "Lo gnomone in bronzo con cui Eratostene calcolò la circonferenza della Terra è stato smussato.",
          loreClue: "Lo gnomone in bronzo con cui Eratostene calcolò la circonferenza della Terra è stato smussato."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Compasso Proporzionale di Rodi",
          riddle: "Il compasso di precisione in lega d'oricalco usato per tracciare i meridiani.",
          loreClue: "Il compasso di precisione in lega d'oricalco usato per tracciare i meridiani è scomparso."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Carta Geografica del Delta del Nilo",
          riddle: "La pergamena con i sette rami storici del Nilo mostra tagli netti in corrispondenza di Canopo.",
          loreClue: "La pergamena con i sette rami storici del Nilo mostra tagli netti in corrispondenza di Canopo."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Teodolite ad Acqua Alessandrino",
          riddle: "Il livello idraulico a vasi comunicanti per il rilievo geodetico è stato sabotato.",
          loreClue: "Il livello idraulico a vasi comunicanti per il rilievo geodetico è stato sabotato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Peso Numismatico in Bronzo",
          riddle: "Il saggio di peso monetario con l'effigie di Alessandro Magno è stato rubato.",
          loreClue: "Il saggio di peso monetario con l'effigie di Alessandro Magno è stato rubato."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Moneta di Cleopatra VII con Conio di Zecca",
          riddle: "Tondello bronzeo che reca il profilo della celebre regina egizia e l'aquila tolemaica.",
          loreClue: "La moneta dell'ultima sovrana d'Egitto: coniata ad Alessandria poco prima della caduta sotto Roma."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Reale in Pasta Vitrea Blu",
          riddle: "Cammeo trasparente raffigurante Serapide adoperato per autenticare i rotoli ufficiali.",
          loreClue: "L'impronta sigillare in pasta vitrea: certificava i manoscritti autorizzati per l'archivio del sovrano."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Rotolo di Papiro con Trattato Geometrico",
          riddle: "Papiro alessandrino vergato in greco antico con teoremi e diagrammi matematici.",
          loreClue: "Il rotolo scientifico del Museo: attribuito alla scuola di Euclide, riporta le formule per il calcolo delle piramidi."
        }
      ];
    } else if (isLevelFortyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Catena Portuale di Eunostos",
          riddle: "La pesante maglia della catena difensiva che sbarrava il porto occidentale è stata tranciata.",
          loreClue: "La pesante maglia della catena difensiva che sbarrava il porto occidentale è stata tranciata."
        },
        {
          id: `lvl${id}_d2`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Ancora di Piombo di una Galea Tolemaica",
          riddle: "Il ceppo d'ancora in piombo con incise le ali di Iside è stato dissotterrato dalla sabbia.",
          loreClue: "Il ceppo d'ancora in piombo con incise le ali di Iside è stato dissotterrato dalla sabbia."
        },
        {
          id: `lvl${id}_d3`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Reliquiario Sommerso in Porfido",
          riddle: "Un piccolo scrigno in porfido rosso adagiato tra le alghe marine racchiude gemme alessandrine.",
          loreClue: "Un piccolo scrigno in porfido rosso adagiato tra le alghe marine racchiude gemme alessandrine."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Rostro di Bronzo della Triremi",
          riddle: "Il rostro forgiato a testa di cinghiale della nave da guerra tolemaica appare manomesso.",
          loreClue: "Il rostro forgiato a testa di cinghiale della nave da guerra tolemaica appare manomesso."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Bitta d'Ormeggio in Granito Rosa",
          riddle: "La colonna d'ormeggio in granito di Assuan presenta un simbolo occulto scalpellato alla base.",
          loreClue: "La colonna d'ormeggio in granito di Assuan presenta un simbolo occulto scalpellato alla base."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Astrolabio Piano in Bronzo Alessandrino",
          riddle: "Disco metallico con lamine intercambiabili per misurare l'altezza degli astri sull'orizzonte.",
          loreClue: "L'astrolabio ellenistico: la rete d'ottone traforata reca le posizioni di ventiquattro stelle primarie."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Busto in Marmo di Ipazia",
          riddle: "Scultura classica raffigurante la grande astronoma e filosofa della scuola alessandrina.",
          loreClue: "Il ritratto marmoreo del IV secolo: sul piedistallo è incisa una citazione sui moti delle orbite planetarie."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Lucerna Greca a Cinque Becchi",
          riddle: "Lampada in terracotta con molteplici fiammelle adoperata nei ballatoi del Serapeo.",
          loreClue: "La lucerna d'argilla invetriata: rischiarava i banchi di trascrizione dei filologi tolemaici."
        }
      ];
    } else if (isLevelFortyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Grande Specchio Ustorio del Faro",
          riddle: "Il colossale specchio parabolico in bronzo lucidato sulla sommità del Pharos è stato scheggiato.",
          loreClue: "Il colossale specchio parabolico in bronzo lucidato sulla sommità del Pharos è stato scheggiato."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua Colossale di Poseidone",
          riddle: "La statua monumentale che coronava la cuspide del faro ha perso il tridente cerimoniale.",
          loreClue: "La statua monumentale che coronava la cuspide del faro ha perso il tridente cerimoniale."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Basamento Ottagonale con Iscrizione Greca",
          riddle: "L'epigrafe dedicatoria di Sostrato di Cnido è stata parzialmente cancellata con un punzone.",
          loreClue: "L'epigrafe dedicatoria di Sostrato di Cnido è stata parzialmente cancellata con un punzone."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Rampa a Spirale per i Carri di Combustibile",
          riddle: "La pavimentazione a blocchi di calcare della salita elicoidale appare franata.",
          loreClue: "La pavimentazione a blocchi di calcare della salita elicoidale appare franata."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lanterna a Fuoco Continuo",
          riddle: "Il braciere alimentato a nafta e resina fossile.",
          loreClue: "Il braciere alimentato a nafta e resina fossile è stato spento prima del previsto."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Quadrante Solare Portatile Tolemaico",
          riddle: "Piccolo blocco di marmo bianco con linee orarie convergenti e gnomone d'ottone.",
          loreClue: "L'orologio solare tascabile: permetteva ai dotti alessandrini di sincronizzare le clessidre ad acqua."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Ampolla Vetrosa con Riflessi Iridati",
          riddle: "Bottiglia in vetro soffiato siriano dalla tipica lucentezza cangiante dovuta ai millenni.",
          loreClue: "L'ampolla da unguenti di epoca tolemaica: conservava oli essenziali d'incenso per le cerimonie della biblioteca."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Moneta di Cleopatra VII con Conio di Zecca",
          riddle: "Tondello bronzeo che reca il profilo della celebre regina egizia e l'aquila tolemaica.",
          loreClue: "La moneta dell'ultima sovrana d'Egitto: coniata ad Alessandria poco prima della caduta sotto Roma."
        }
      ];
    } else if (isLevelFortyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Gli Elementi di Geometria su Pergamena",
          riddle: "Il manoscritto originale con la dimostrazione del postulato delle parallele.",
          loreClue: "Il manoscritto originale con la dimostrazione del postulato delle parallele è stato strappato."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Compasso a Settore Circolare",
          riddle: "Lo strumento ad arco graduato usato per inscrivere i poligoni sacri.",
          loreClue: "Lo strumento ad arco graduato usato per inscrivere i poligoni sacri è stato asportato."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta Cerata con i Solidi Platonici",
          riddle: "Il diagramma dei cinque poliedri regolari tracciato a stilo nella cera nera è stato levigato.",
          loreClue: "Il diagramma dei cinque poliedri regolari tracciato a stilo nella cera nera è stato levigato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Stele con la Sezione Aurea Incisa",
          riddle: "La proporzione divina incisa su marmo pentelico mostra il rapporto armonico con la piramide.",
          loreClue: "La proporzione divina incisa su marmo pentelico mostra il rapporto armonico con la piramide."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Candelabro a Cinque Fiamme di Bronzo",
          riddle: "Il candelabro geometrico poggiato sulla cattedra d'insegnamento.",
          loreClue: "Il candelabro geometrico poggiato sulla cattedra d'insegnamento è stato rovesciato."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Sigillo Reale in Pasta Vitrea Blu",
          riddle: "Cammeo trasparente raffigurante Serapide adoperato per autenticare i rotoli ufficiali.",
          loreClue: "L'impronta sigillare in pasta vitrea: certificava i manoscritti autorizzati per l'archivio del sovrano."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Rotolo di Papiro con Trattato Geometrico",
          riddle: "Papiro alessandrino vergato in greco antico con teoremi e diagrammi matematici.",
          loreClue: "Il rotolo scientifico del Museo: attribuito alla scuola di Euclide, riporta le formule per il calcolo delle piramidi."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "L'Astrolabio Piano in Bronzo Alessandrino",
          riddle: "Disco metallico con lamine intercambiabili per misurare l'altezza degli astri sull'orizzonte.",
          loreClue: "L'astrolabio ellenistico: la rete d'ottone traforata reca le posizioni di ventiquattro stelle primarie."
        }
      ];
    } else if (isLevelFortySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Paratoia Idraulica della Cisterna",
          riddle: "La saracinesca in bronzo fuso che regolava l'afflusso del Nilo nella cisterna sotterranea è bloccata.",
          loreClue: "La saracinesca in bronzo fuso che regolava l'afflusso del Nilo nella cisterna sotterranea è bloccata."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Colonna Sommersa con Capitello Corinzio",
          riddle: "Il capitello in marmo proconnesio che emerge dall'acqua della cisterna è stato scheggiato.",
          loreClue: "Il capitello in marmo proconnesio che emerge dall'acqua della cisterna è stato scheggiato."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo di Piombo dell'Acquedotto",
          riddle: "Il supremo cimelio astronomico sopravvissuto al grande incendio di Alessandria.",
          loreClue: "La borchia sigillare dell'imperatore Adriano sul tubo idrico principale è stata asportata."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Idrometro del Nilo (Nilometro)",
          riddle: "La colonna graduata in cubiti nilotici per la misurazione delle piene è stata manomessa.",
          loreClue: "La colonna graduata in cubiti nilotici per la misurazione delle piene è stata manomessa."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Coppa Votiva in Vetro Soffiato di Canopo",
          riddle: "La raffinata coppa in pasta vitrea policroma con decorazioni a piuma è stata rubata.",
          loreClue: "La raffinata coppa in pasta vitrea policroma con decorazioni a piuma è stata rubata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Busto in Marmo di Ipazia",
          riddle: "Scultura classica raffigurante la grande astronoma e filosofa della scuola alessandrina.",
          loreClue: "Il ritratto marmoreo del IV secolo: sul piedistallo è incisa una citazione sui moti delle orbite planetarie."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Lucerna Greca a Cinque Becchi",
          riddle: "Lampada in terracotta con molteplici fiammelle adoperata nei ballatoi del Serapeo.",
          loreClue: "La lucerna d'argilla invetriata: rischiarava i banchi di trascrizione dei filologi tolemaici."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Quadrante Solare Portatile Tolemaico",
          riddle: "Piccolo blocco di marmo bianco con linee orarie convergenti e gnomone d'ottone.",
          loreClue: "L'orologio solare tascabile: permetteva ai dotti alessandrini di sincronizzare le clessidre ad acqua."
        }
      ];
    } else if (isLevelFortySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Astrolabio Piano di Ipazia",
          riddle: "Il sofisticato astrolabio piano in ottone dorato inciso con le costellazioni tolemaiche.",
          loreClue: "Il sofisticato astrolabio piano in ottone dorato inciso con le costellazioni tolemaiche è scomparso."
        },
        {
          id: `lvl${id}_d2`,
          x: 68.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Canone Astronomico su Papiro",
          riddle: "Il commentario di Ipazia all'Almagesto di Tolomeo è stato dato parzialmente alle fiamme.",
          loreClue: "Il commentario di Ipazia all'Almagesto di Tolomeo è stato dato parzialmente alle fiamme."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Idroscopio da Laboratorio",
          riddle: "Il tubo graduato per misurare la densità dei liquidi alchemici.",
          loreClue: "Il tubo graduato per misurare la densità dei liquidi alchemici è stato frantumato sul pavimento."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Rilievo Astrale della Volta Celeste",
          riddle: "La volta affrescata con la sfera dei pianeti mostra le orbite ellittiche raschiate.",
          loreClue: "La volta affrescata con la sfera dei pianeti mostra le orbite ellittiche raschiate."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cattedra Filosofica in Noce",
          riddle: "La sedia accademica da cui la filosofa teneva le lezioni ai discepoli presenta un vano forzato.",
          loreClue: "La sedia accademica da cui la filosofa teneva le lezioni ai discepoli presenta un vano forzato."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "L'Ampolla Vetrosa con Riflessi Iridati",
          riddle: "Bottiglia in vetro soffiato siriano dalla tipica lucentezza cangiante dovuta ai millenni.",
          loreClue: "L'ampolla da unguenti di epoca tolemaica: conservava oli essenziali d'incenso per le cerimonie della biblioteca."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Moneta di Cleopatra VII con Conio di Zecca",
          riddle: "Tondello bronzeo che reca il profilo della celebre regina egizia e l'aquila tolemaica.",
          loreClue: "La moneta dell'ultima sovrana d'Egitto: coniata ad Alessandria poco prima della caduta sotto Roma."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Sigillo Reale in Pasta Vitrea Blu",
          riddle: "Cammeo trasparente raffigurante Serapide adoperato per autenticare i rotoli ufficiali.",
          loreClue: "L'impronta sigillare in pasta vitrea: certificava i manoscritti autorizzati per l'archivio del sovrano."
        }
      ];
    } else if (isLevelFortyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Serpente Agatodemone",
          riddle: "Il serpente sacro guardiano delle catacombe con la doppia corona dell'Alto e Basso Egitto è scalpellato.",
          loreClue: "Il serpente sacro guardiano delle catacombe con la doppia corona dell'Alto e Basso Egitto è scalpellato."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Triclinio Funebre in Calcare",
          riddle: "Il banco a ferro di cavallo per i banchetti commemorativi dei defunti reca macchie di sostanze chimiche.",
          loreClue: "Il banco a ferro di cavallo per i banchetti commemorativi dei defunti reca macchie di sostanze chimiche."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Lo Scudo con la Testa di Medusa",
          riddle: "Il tondo a rilievo a protezione della camera sepolcrale presenta fori di percussione recenti.",
          loreClue: "Il tondo a rilievo a protezione della camera sepolcrale presenta fori di percussione recenti."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua di Anubi con Armatura Romana",
          riddle: "La singolare statua sincretica del dio sciacallo in tenuta da legionario ha perso il giavellotto.",
          loreClue: "La singolare statua sincretica del dio sciacallo in tenuta da legionario ha perso il giavellotto."
        },
        {
          id: `lvl${id}_d5`,
          x: 15.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Sarcofago Monolitico della Cripta",
          riddle: "Il pesante coperchio in calcare locale è stato scalzato con un palanchino di ferro.",
          loreClue: "Il pesante coperchio in calcare locale è stato scalzato con un palanchino di ferro."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Rotolo di Papiro con Trattato Geometrico",
          riddle: "Papiro alessandrino vergato in greco antico con teoremi e diagrammi matematici.",
          loreClue: "Il rotolo scientifico del Museo: attribuito alla scuola di Euclide, riporta le formule per il calcolo delle piramidi."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Astrolabio Piano in Bronzo Alessandrino",
          riddle: "Disco metallico con lamine intercambiabili per misurare l'altezza degli astri sull'orizzonte.",
          loreClue: "L'astrolabio ellenistico: la rete d'ottone traforata reca le posizioni di ventiquattro stelle primarie."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Busto in Marmo di Ipazia",
          riddle: "Scultura classica raffigurante la grande astronoma e filosofa della scuola alessandrina.",
          loreClue: "Il ritratto marmoreo del IV secolo: sul piedistallo è incisa una citazione sui moti delle orbite planetarie."
        }
      ];
    } else if (isLevelFortyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Colonna di Pompeo in Granito Rosso",
          riddle: "Il colossale fusto monolitico di granito rosso di Assuan.",
          loreClue: "Il colossale fusto monolitico di granito rosso di Assuan mostra segni di scalpellamento alla base."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Sfinge di Basalto del Serapeo",
          riddle: "La maestosa sfinge accovacciata a guardia dell'acropoli reca un cartiglio reale abraso.",
          loreClue: "La maestosa sfinge accovacciata a guardia dell'acropoli reca un cartiglio reale abraso."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Nicchia Murata della Statua di Serapide",
          riddle: "L'abside che ospitava la colossale scultura in legno dorato e pietre preziose è sventrata.",
          loreClue: "L'abside che ospitava la colossale scultura in legno dorato e pietre preziose è sventrata."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Targa di Dedica in Bronzo Dorato",
          riddle: "L'iscrizione commemorativa per l'imperatore Diocleziano.",
          loreClue: "L'iscrizione commemorativa per l'imperatore Diocleziano è stata staccata dal plinto."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Gradini della Scalinata Monumentale",
          riddle: "I cento gradini d'accesso alla collina sacra di Rhakotis presentano blocchi rovesciati.",
          loreClue: "I cento gradini d'accesso alla collina sacra di Rhakotis presentano blocchi rovesciati."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lucerna Greca a Cinque Becchi",
          riddle: "Lampada in terracotta con molteplici fiammelle adoperata nei ballatoi del Serapeo.",
          loreClue: "La lucerna d'argilla invetriata: rischiarava i banchi di trascrizione dei filologi tolemaici."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Quadrante Solare Portatile Tolemaico",
          riddle: "Piccolo blocco di marmo bianco con linee orarie convergenti e gnomone d'ottone.",
          loreClue: "L'orologio solare tascabile: permetteva ai dotti alessandrini di sincronizzare le clessidre ad acqua."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Ampolla Vetrosa con Riflessi Iridati",
          riddle: "Bottiglia in vetro soffiato siriano dalla tipica lucentezza cangiante dovuta ai millenni.",
          loreClue: "L'ampolla da unguenti di epoca tolemaica: conservava oli essenziali d'incenso per le cerimonie della biblioteca."
        }
      ];
    } else if (isLevelFifty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "IL QUINTO SIGILLO: Lo Scarabeo Alato d'Oro e Lapis",
          riddle: "Il supremo cimelio astronomico sopravvissuto al grande incendio di Alessandria.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 5: Il monumentale scarabeo pettorale in oro puro e lapislazzuli di Tolomeo! Il cuore della reliquia proietta la triangolazione per la Valle dei Re a Luxor."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Reliquiario Tolemaico in Avorio ed Ebano",
          riddle: "Lo scrigno intagliato che custodiva il Quinto Sigillo per oltre duemila anni.",
          loreClue: "Lo scrigno intagliato che custodiva il Quinto Sigillo per oltre duemila anni è stato aperto."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Tavola Astronomica d'Edfu",
          riddle: "La lastra di diorite nera con la rotta lungo il Nilo fino a Tebe mostra il sigillo della Mano Oscura.",
          loreClue: "La lastra di diorite nera con la rotta lungo il Nilo fino a Tebe mostra il sigillo della Mano Oscura."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Calice da Libagione in Ossidiana",
          riddle: "Il calice rituale per le unzioni solari del faraone.",
          loreClue: "Il calice rituale per le unzioni solari del faraone è stato rovesciato sull'altare di granito."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Affresco del Falco Horus dell'Architrave",
          riddle: "Le ali spiegate del falco divino sull'architrave indicano il solstizio d'inverno sul Nilo.",
          loreClue: "Le ali spiegate del falco divino sull'architrave indicano il solstizio d'inverno sul Nilo."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Moneta di Cleopatra VII con Conio di Zecca",
          riddle: "Tondello bronzeo che reca il profilo della celebre regina egizia e l'aquila tolemaica.",
          loreClue: "La moneta dell'ultima sovrana d'Egitto: coniata ad Alessandria poco prima della caduta sotto Roma."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Sigillo Reale in Pasta Vitrea Blu",
          riddle: "Cammeo trasparente raffigurante Serapide adoperato per autenticare i rotoli ufficiali.",
          loreClue: "L'impronta sigillare in pasta vitrea: certificava i manoscritti autorizzati per l'archivio del sovrano."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Rotolo di Papiro con Trattato Geometrico",
          riddle: "Papiro alessandrino vergato in greco antico con teoremi e diagrammi matematici.",
          loreClue: "Il rotolo scientifico del Museo: attribuito alla scuola di Euclide, riporta le formule per il calcolo delle piramidi."
        }
      ];
    } else if (isLevelFiftyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.67,
          y: 81.58,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Necropolare di Anubi",
          riddle: "L'amuleto solare con cui il faraone consacrava il suo viaggio nell'eternità.",
          loreClue: "Il sigillo d'argilla cruda intatto dei nove prigionieri e lo sciacallo è stato spezzato dai ladri di tombe."
        },
        {
          id: `lvl${id}_d2`,
          x: 64.42,
          y: 53.18,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Canopo di Hapi con Testa di Babbuino",
          riddle: "Il vaso rituale in alabastro egizio contenente gli oli sacri.",
          loreClue: "Il vaso rituale in alabastro egizio contenente gli oli sacri è stato rimosso dalla nicchia."
        },
        {
          id: `lvl${id}_d3`,
          x: 13.96,
          y: 90.23,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cazzuola di Scavo di Howard Carter",
          riddle: "La cazzuola d'acciaio del celebre archeologo è stata abbandonata sul banco di rilevamento.",
          loreClue: "La cazzuola d'acciaio del celebre archeologo è stata abbandonata sul banco di rilevamento."
        },
        {
          id: `lvl${id}_d4`,
          x: 44.17,
          y: 56.7,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Ankh d'Oro nel Sarcofago",
          riddle: "La sacra chiave della vita intarsiata d'oro massiccio e diaspro.",
          loreClue: "La sacra chiave della vita intarsiata d'oro massiccio e diaspro è stata asportata dal petto della mummia."
        },
        {
          id: `lvl${id}_d5`,
          x: 81.17,
          y: 62.56,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lucerna a Olio in Bronzo Dorato",
          riddle: "La lucerna cerimoniale usata per esplorare l'anticamera.",
          loreClue: "La lucerna cerimoniale usata per esplorare l'anticamera è stata rovesciata tra i frammenti di lino."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Cartiglio Reale Inciso sul Pilastro",
          riddle: "Ovale geroglifico circondato da corda che racchiude il nome incoronato del sovrano.",
          loreClue: "Il cartiglio di Amenofi III: la fresatura precisa nel granito testimonia l'opera degli scultori tebani."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Torcia a Petrolio della Spedizione Carter",
          riddle: "Lampada da minatore con riflettore conico adoperata durante le grandi scoperte del 1922.",
          loreClue: "La lampada d'esplorazione: la base in latta porta la matricola della celebre spedizione nella Valle dei Re."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Foglio del Libro dei Morti con Inchiostro Rosso",
          riddle: "Papiro funerario con vignette dipinte e formule magiche in caratteri ieratici.",
          loreClue: "Il manoscritto funerario su papiro: le rubriche in inchiostro rosso segnalano le invocazioni ad Osiride."
        }
      ];
    } else if (isLevelFiftyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Capitello Papiriforme Aperto",
          riddle: "Il colossale capitello della sala ipostila di Karnak mostra cartigli reali scalpellati via.",
          loreClue: "Il colossale capitello della sala ipostila di Karnak mostra cartigli reali scalpellati via."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Bassorilievo di Amon-Ra con Corona a Doppia Piuma",
          riddle: "La sagoma sacra del re degli dèi presenta il disco solare manomesso da emissari dell'Ombra.",
          loreClue: "La sagoma sacra del re degli dèi presenta il disco solare manomesso da emissari dell'Ombra."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Lo Scarabeo Monolitico di Granito Rosa",
          riddle: "Il gigantesco scarabeo di Khepri sulle rive del lago sacro reca un'incisione abrasa sul basamento.",
          loreClue: "Il gigantesco scarabeo di Khepri sulle rive del lago sacro reca un'incisione abrasa sul basamento."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Cartiglio di Ramses II sull'Architrave",
          riddle: "I geroglifici regali del grande faraone sull'architrave di arenaria appaiono scheggiati.",
          loreClue: "I geroglifici regali del grande faraone sull'architrave di arenaria appaiono scheggiati."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Porta Monumentale del Terzo Pilone",
          riddle: "Lo stipite in calcare con le formule di consacrazione è stato forzato con leve di ferro.",
          loreClue: "Lo stipite in calcare con le formule di consacrazione è stato forzato con leve di ferro."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Maschera Funeraria in Cartonnage Dorato",
          riddle: "Volto idealizzato del defunto modellato in lino gessato e ricoperto di foglia d'oro puro.",
          loreClue: "La maschera tombale: gli occhi contornati di kohl verde donano alla scultura uno sguardo incorruttibile."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Statuetta di Anubi in Legno Dipinto",
          riddle: "Effigie del dio sciacallo accucciato a guardia dell'accesso al naos sepolcrale.",
          loreClue: "La statua del guardiano dell'Oltretomba: il collare dorato e le orecchie vigili proteggevano il sonno del re."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Vaso Canopo in Alabastro di Amset",
          riddle: "Urna funeraria con coperchio scolpito a testa umana custode dei visceri sacri.",
          loreClue: "Il vaso canopo in calcite orientale: la formula di protezione di Iside è incisa a geroglifici sulla pancia."
        }
      ];
    } else if (isLevelFiftyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Colosso Settentrionale di Memnone",
          riddle: "La statua monolitica di quarzite che emetteva suoni all'alba presenta una profonda fessura artificiale.",
          loreClue: "La statua monolitica di quarzite che emetteva suoni all'alba presenta una profonda fessura artificiale."
        },
        {
          id: `lvl${id}_d2`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Nilo che Unisce l'Egitto (Sema-Tawy)",
          riddle: "Il simbolo dell'unione dell'Alto e Basso Egitto scolpito sul trono è stato martellato.",
          loreClue: "Il simbolo dell'unione dell'Alto e Basso Egitto scolpito sul trono è stato martellato."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Targa Dedicatoria Greca dell'Epoca Romana",
          riddle: "L'epigrafe metrica lasciata dai viaggiatori imperiali alla base del colosso è stata abrasa.",
          loreClue: "L'epigrafe metrica lasciata dai viaggiatori imperiali alla base del colosso è stata abrasa."
        },
        {
          id: `lvl${id}_d4`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassa d'Attrezzi da Restauro Lapideo",
          riddle: "La cassetta con martelli di rame e cunei da scalpellino.",
          loreClue: "La cassetta con martelli di rame e cunei da scalpellino è stata trafugata."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Monolito Minore della Regina Tiy",
          riddle: "La figura regale scolpita a lato delle gambe del colosso reca il cobra reale decapitato.",
          loreClue: "La figura regale scolpita a lato delle gambe del colosso reca il cobra reale decapitato."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Pettorale d'Oro con Scarabeo Alato",
          riddle: "Gioiello sacerdotale con lamina d'oro e intarsi in lapislazzuli e corniola.",
          loreClue: "Il pettorale votivo del faraone: lo scarabeo centrale simboleggia Khepri, il sole che rinasce all'alba."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Ushabti in Faïence Turchese",
          riddle: "Statuetta votiva invetriata destinata a servire il defunto nei campi di Aaru.",
          loreClue: "La figurina funeraria con zappa e sacco: reca sul corpo il capitolo sesto del Libro dei Morti."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Cartiglio Reale Inciso sul Pilastro",
          riddle: "Ovale geroglifico circondato da corda che racchiude il nome incoronato del sovrano.",
          loreClue: "Il cartiglio di Amenofi III: la fresatura precisa nel granito testimonia l'opera degli scultori tebani."
        }
      ];
    } else if (isLevelFiftyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Terrazza Superiore del Tempio di Hatshepsut",
          riddle: "I pilastri osiriaci della terrazza sommitale mostrano i volti divini scalpellati dal successore.",
          loreClue: "I pilastri osiriaci della terrazza sommitale mostrano i volti divini scalpellati dal successore."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo della Spedizione nella Terra di Punt",
          riddle: "La scena navale con i grandi alberi d'incenso trasportati via mare è stata manomessa.",
          loreClue: "La scena navale con i grandi alberi d'incenso trasportati via mare è stata manomessa."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua della Sfinge Femminile in Calcare",
          riddle: "La sfinge reale con barba cerimoniale posta a guardia della rampa d'accesso.",
          loreClue: "La sfinge reale con barba cerimoniale posta a guardia della rampa d'accesso è scomparsa."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Cartiglio Reale di Maatkare Hatshepsut",
          riddle: "Il nome d'incoronazione della regina cancellato nell'antichità rivela una nuova traccia.",
          loreClue: "Il nome d'incoronazione della regina cancellato nell'antichità rivela una nuova traccia."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Cappella di Anubi con Soffitto Stellato",
          riddle: "Le stelle dorate a cinque punte su fondo blu cobalto sono state raschiate dalla volta.",
          loreClue: "Le stelle dorate a cinque punte su fondo blu cobalto sono state raschiate dalla volta."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Torcia a Petrolio della Spedizione Carter",
          riddle: "Lampada da minatore con riflettore conico adoperata durante le grandi scoperte del 1922.",
          loreClue: "La lampada d'esplorazione: la base in latta porta la matricola della celebre spedizione nella Valle dei Re."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Foglio del Libro dei Morti con Inchiostro Rosso",
          riddle: "Papiro funerario con vignette dipinte e formule magiche in caratteri ieratici.",
          loreClue: "Il manoscritto funerario su papiro: le rubriche in inchiostro rosso segnalano le invocazioni ad Osiride."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Maschera Funeraria in Cartonnage Dorato",
          riddle: "Volto idealizzato del defunto modellato in lino gessato e ricoperto di foglia d'oro puro.",
          loreClue: "La maschera tombale: gli occhi contornati di kohl verde donano alla scultura uno sguardo incorruttibile."
        }
      ];
    } else if (isLevelFiftyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Affresco di Nefertari che Gioca a Senet",
          riddle: "La celebre pittura murale della regina che sfida il destino al gioco del Senet è scheggiata.",
          loreClue: "La celebre pittura murale della regina che sfida il destino al gioco del Senet è scheggiata."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Scacchiera del Senet in Avorio e Legno Pregiato",
          riddle: "La scacchiera rituale a trenta caselle con pedine a testa di leone.",
          loreClue: "La scacchiera rituale a trenta caselle con pedine a testa di leone è stata sottratta."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Corona con le Corna di Hathor e Disco Solare",
          riddle: "Il copricapo divino della regina dipinto sull'intonaco mostra tracce di solventi chimici.",
          loreClue: "Il copricapo divino della regina dipinto sull'intonaco mostra tracce di solventi chimici."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Bastone Cerimoniale Pastorale",
          riddle: "Lo scettro heka intarsiato in oro e pasta vitrea azzurra.",
          loreClue: "Lo scettro heka intarsiato in oro e pasta vitrea azzurra è svanito dal sarcofago."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Nicchia dei Vasi Canopi della Regina",
          riddle: "Il vano parietale sigillato che ospitava lo scrigno d'alabastro è stato forzato.",
          loreClue: "Il vano parietale sigillato che ospitava lo scrigno d'alabastro è stato forzato."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statuetta di Anubi in Legno Dipinto",
          riddle: "Effigie del dio sciacallo accucciato a guardia dell'accesso al naos sepolcrale.",
          loreClue: "La statua del guardiano dell'Oltretomba: il collare dorato e le orecchie vigili proteggevano il sonno del re."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Vaso Canopo in Alabastro di Amset",
          riddle: "Urna funeraria con coperchio scolpito a testa umana custode dei visceri sacri.",
          loreClue: "Il vaso canopo in calcite orientale: la formula di protezione di Iside è incisa a geroglifici sulla pancia."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Pettorale d'Oro con Scarabeo Alato",
          riddle: "Gioiello sacerdotale con lamina d'oro e intarsi in lapislazzuli e corniola.",
          loreClue: "Il pettorale votivo del faraone: lo scarabeo centrale simboleggia Khepri, il sole che rinasce all'alba."
        }
      ];
    } else if (isLevelFiftySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Grande Obelisco Orientale di Ramses II",
          riddle: "Il monolito di granito rosso reca un allineamento gnomonico verso Siwa abraso alla base.",
          loreClue: "Il monolito di granito rosso reca un allineamento gnomonico verso Siwa abraso alla base."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Criosfinge del Viale di Karnak-Luxor",
          riddle: "La statua di sfinge con testa di ariete a guardia del viale processionale è mutilata.",
          loreClue: "La statua di sfinge con testa di ariete a guardia del viale processionale è mutilata."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Colosso Seduto di Ramses con Doppia Corona",
          riddle: "La possente statua all'ingresso del tempio reca il cartiglio pettorale manomesso.",
          loreClue: "La possente statua all'ingresso del tempio reca il cartiglio pettorale manomesso."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Base Lapidea del Pilone di Destra",
          riddle: "Le scene belliche della battaglia di Qadesh sul pilone mostrano fori di scavo recenti.",
          loreClue: "Le scene belliche della battaglia di Qadesh sul pilone mostrano fori di scavo recenti."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Lo Stendardo Processionale di Amon",
          riddle: "L'asta di bronzo con l'emblema della barca sacra usata nella festa di Opet è sparita.",
          loreClue: "L'asta di bronzo con l'emblema della barca sacra usata nella festa di Opet è sparita."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Ushabti in Faïence Turchese",
          riddle: "Statuetta votiva invetriata destinata a servire il defunto nei campi di Aaru.",
          loreClue: "La figurina funeraria con zappa e sacco: reca sul corpo il capitolo sesto del Libro dei Morti."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Cartiglio Reale Inciso sul Pilastro",
          riddle: "Ovale geroglifico circondato da corda che racchiude il nome incoronato del sovrano.",
          loreClue: "Il cartiglio di Amenofi III: la fresatura precisa nel granito testimonia l'opera degli scultori tebani."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Torcia a Petrolio della Spedizione Carter",
          riddle: "Lampada da minatore con riflettore conico adoperata durante le grandi scoperte del 1922.",
          loreClue: "La lampada d'esplorazione: la base in latta porta la matricola della celebre spedizione nella Valle dei Re."
        }
      ];
    } else if (isLevelFiftySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Colosso Caduto di Ramses (Ozymandias)",
          riddle: "La testa colossale in granito abbattuta al suolo mostra fenditure recenti nel diadema reale.",
          loreClue: "La testa colossale in granito abbattuta al suolo mostra fenditure recenti nel diadema reale."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "I Magazzini a Volta in Mattoni Crudi",
          riddle: "Le storiche gallerie granaio del tempio presentano giare cerimoniali frantumate.",
          loreClue: "Le storiche gallerie granaio del tempio presentano giare cerimoniali frantumate."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Stele della Vittoria di Tebe",
          riddle: "La lastra di diorite che elenca i tributi delle nazioni mediterranee è stata spaccata in due.",
          loreClue: "La lastra di diorite che elenca i tributi delle nazioni mediterranee è stata spaccata in due."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua della Madre Tuya",
          riddle: "La scultura in pietra calcarea della madre del faraone.",
          loreClue: "La scultura in pietra calcarea della madre del faraone è stata rimossa dal portico."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Rilievo Astronomico del Soffitto",
          riddle: "Il diagramma delle trentasei decani celesti sulla volta è stato oscurato con pece.",
          loreClue: "Il diagramma delle trentasei decani celesti sulla volta è stato oscurato con pece."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Foglio del Libro dei Morti con Inchiostro Rosso",
          riddle: "Papiro funerario con vignette dipinte e formule magiche in caratteri ieratici.",
          loreClue: "Il manoscritto funerario su papiro: le rubriche in inchiostro rosso segnalano le invocazioni ad Osiride."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Maschera Funeraria in Cartonnage Dorato",
          riddle: "Volto idealizzato del defunto modellato in lino gessato e ricoperto di foglia d'oro puro.",
          loreClue: "La maschera tombale: gli occhi contornati di kohl verde donano alla scultura uno sguardo incorruttibile."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Statuetta di Anubi in Legno Dipinto",
          riddle: "Effigie del dio sciacallo accucciato a guardia dell'accesso al naos sepolcrale.",
          loreClue: "La statua del guardiano dell'Oltretomba: il collare dorato e le orecchie vigili proteggevano il sonno del re."
        }
      ];
    } else if (isLevelFiftyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Volta Astronomica con i Moti Planetari",
          riddle: "Il soffitto a botte della camera funeraria dipinto a volta celeste dorata presenta le costellazioni graffiate.",
          loreClue: "Il soffitto a botte della camera funeraria dipinto a volta celeste dorata presenta le costellazioni graffiate."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Sarcofago Monolitico in Puro Alabastro",
          riddle: "Il monumentale sarcofago traslucido istoriato con il Libro delle Porte è stato forzato.",
          loreClue: "Il monumentale sarcofago traslucido istoriato con il Libro delle Porte è stato forzato."
        },
        {
          id: `lvl${id}_d3`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua del Guardiano Anubi su Baule Dorato",
          riddle: "La figura lignea ricoperta di resina nera con collare d'oro.",
          loreClue: "La figura lignea ricoperta di resina nera con collare d'oro è stata sottratta."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Rilievo di Seti I Davanti a Osiride",
          riddle: "La delicatissima pittura murale dell'abbraccio divino è stata sfregiata con uno scalpello.",
          loreClue: "La delicatissima pittura murale dell'abbraccio divino è stata sfregiata con uno scalpello."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta d'Oro con le Ore della Notte",
          riddle: "La lamina metallica che descrive il viaggio del sole negli inferi.",
          loreClue: "La lamina metallica che descrive il viaggio del sole negli inferi è stata strappata."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Vaso Canopo in Alabastro di Amset",
          riddle: "Urna funeraria con coperchio scolpito a testa umana custode dei visceri sacri.",
          loreClue: "Il vaso canopo in calcite orientale: la formula di protezione di Iside è incisa a geroglifici sulla pancia."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Pettorale d'Oro con Scarabeo Alato",
          riddle: "Gioiello sacerdotale con lamina d'oro e intarsi in lapislazzuli e corniola.",
          loreClue: "Il pettorale votivo del faraone: lo scarabeo centrale simboleggia Khepri, il sole che rinasce all'alba."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Ushabti in Faïence Turchese",
          riddle: "Statuetta votiva invetriata destinata a servire il defunto nei campi di Aaru.",
          loreClue: "La figurina funeraria con zappa e sacco: reca sul corpo il capitolo sesto del Libro dei Morti."
        }
      ];
    } else if (isLevelFiftyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Ostrakon con la Pianta Segreta della Valle",
          riddle: "Il frammento di calcare con il rilievo planimetrico delle tombe reali è stato rubato.",
          loreClue: "Il frammento di calcare con il rilievo planimetrico delle tombe reali è stato rubato."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Lo Scalpello in Rame Tempra dei Costruttori",
          riddle: "L'antico strumento da lavoro sacro con il marchio della confraternita è sparito.",
          loreClue: "L'antico strumento da lavoro sacro con il marchio della confraternita è sparito."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Papiro Amministrativo dello Sciopero dei Lavoratori",
          riddle: "Il resoconto storico delle proteste sotto Ramses III.",
          loreClue: "Il resoconto storico delle proteste sotto Ramses III è stato asportato dalla cassa."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Stele Privata dell'Artigiano Sennedjem",
          riddle: "La stele funeraria policroma con la devozione a Ptah presenta la figura scalpellata.",
          loreClue: "La stele funeraria policroma con la devozione a Ptah presenta la figura scalpellata."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Modello Architettonico in Pietra",
          riddle: "La maquette in scala di una tomba ipogea è stata mandata in frantumi sulla pavimentazione.",
          loreClue: "La maquette in scala di una tomba ipogea è stata mandata in frantumi sulla pavimentazione."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Cartiglio Reale Inciso sul Pilastro",
          riddle: "Ovale geroglifico circondato da corda che racchiude il nome incoronato del sovrano.",
          loreClue: "Il cartiglio di Amenofi III: la fresatura precisa nel granito testimonia l'opera degli scultori tebani."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Torcia a Petrolio della Spedizione Carter",
          riddle: "Lampada da minatore con riflettore conico adoperata durante le grandi scoperte del 1922.",
          loreClue: "La lampada d'esplorazione: la base in latta porta la matricola della celebre spedizione nella Valle dei Re."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Foglio del Libro dei Morti con Inchiostro Rosso",
          riddle: "Papiro funerario con vignette dipinte e formule magiche in caratteri ieratici.",
          loreClue: "Il manoscritto funerario su papiro: le rubriche in inchiostro rosso segnalano le invocazioni ad Osiride."
        }
      ];
    } else if (isLevelSixty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "IL SESTO SIGILLO: L'Occhio Uraeo di Horus e Smeraldo",
          riddle: "L'amuleto solare con cui il faraone consacrava il suo viaggio nell'eternità.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 6: Il leggendario amuleto Uadjet in oro massiccio e smeraldo grezzo di Siwa! La pupilla proietta la rotta attraverso il Sahara libico verso l'Oracolo di Amon."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Naos Monolitica in Granito Nero",
          riddle: "Il tabernacolo sacro al centro del santuario è stato forzato per estrarre la reliquia millenaria.",
          loreClue: "Il tabernacolo sacro al centro del santuario è stato forzato per estrarre la reliquia millenaria."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Triade Divina di Tebe su Bassorilievo",
          riddle: "Le figure di Amon, Mut e Khonsu scolpite nel granito mostrano gli attributi reali alterati.",
          loreClue: "Le figure di Amon, Mut e Khonsu scolpite nel granito mostrano gli attributi reali alterati."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Altare d'Oro del Sole Rinato",
          riddle: "La mensa sacrificale dorata ove venivano posti i sigilli d'oriente reca tracce d'acido.",
          loreClue: "La mensa sacrificale dorata ove venivano posti i sigilli d'oriente reca tracce d'acido."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Disco Solare con i Due Serpenti Uraei",
          riddle: "Il simbolo del sole alato che corona l'ingresso del Sancta Sanctorum indica l'azimut di Siwa.",
          loreClue: "Il simbolo del sole alato che corona l'ingresso del Sancta Sanctorum indica l'azimut di Siwa."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Maschera Funeraria in Cartonnage Dorato",
          riddle: "Volto idealizzato del defunto modellato in lino gessato e ricoperto di foglia d'oro puro.",
          loreClue: "La maschera tombale: gli occhi contornati di kohl verde donano alla scultura uno sguardo incorruttibile."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Statuetta di Anubi in Legno Dipinto",
          riddle: "Effigie del dio sciacallo accucciato a guardia dell'accesso al naos sepolcrale.",
          loreClue: "La statua del guardiano dell'Oltretomba: il collare dorato e le orecchie vigili proteggevano il sonno del re."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Vaso Canopo in Alabastro di Amset",
          riddle: "Urna funeraria con coperchio scolpito a testa umana custode dei visceri sacri.",
          loreClue: "Il vaso canopo in calcite orientale: la formula di protezione di Iside è incisa a geroglifici sulla pancia."
        }
      ];
    } else if (isLevelSixtyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 95.42,
          y: 82.76,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lanterna a Petrolio sulla Trave della Tenda",
          riddle: "La lanterna da campo antivento in ottone.",
          loreClue: "La lanterna da campo antivento in ottone è stata staccata dal tirante per operare nell'oscurità dell'oasi."
        },
        {
          id: `lvl${id}_d2`,
          x: 89.71,
          y: 24.5,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Teodolite Geodetico sulla Duna",
          riddle: "Il treppiede topografico con il filo a piombo conico è stato inclinato per falsare i rilievi dell'altopiano.",
          loreClue: "Il treppiede topografico con il filo a piombo conico è stato inclinato per falsare i rilievi dell'altopiano."
        },
        {
          id: `lvl${id}_d3`,
          x: 16.88,
          y: 76.56,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Barile di Legno con le Provviste d'Acqua",
          riddle: "La botte di rovere contenente la riserva idrica per la traversata delle dune.",
          loreClue: "La botte di rovere contenente la riserva idrica per la traversata delle dune è stata aperta e svuotata."
        },
        {
          id: `lvl${id}_d4`,
          x: 36.62,
          y: 22.32,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Affresco Murale del Tempio con il Sole Alato",
          riddle: "Il sacro disco solare alato scolpito sul pilastro mostra tracce di scalpellatura recente.",
          loreClue: "Il sacro disco solare alato scolpito sul pilastro mostra tracce di scalpellatura recente."
        },
        {
          id: `lvl${id}_d5`,
          x: 41.25,
          y: 87.22,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Palina Metrica nel Trincerone",
          riddle: "L'asta graduata da scavo dipinta a bande alternate.",
          loreClue: "L'asta graduata da scavo dipinta a bande alternate è stata rimossa dal fronte della trincea."
        },
        {
          id: `lvl${id}_d6`,
          x: 65.0,
          y: 70.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere d'Incenso in Rame Battuto",
          riddle: "Coppa metallica su treppiede in cui bruciavano resine profumate durante le divinazioni.",
          loreClue: "Il braciere sacerdotale: i residui carbonizzati sul fondo conservano il profumo resinoso dell'incenso di boswellia."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "L'Otre d'Acqua in Pelle di Gazzella",
          riddle: "Contenitore da carovana flessibile essenziale per attraversare il grande mare di sabbia.",
          loreClue: "L'otre dei viaggiatori beduini: le cuciture sigillate con pece impedivano qualsiasi evaporazione nel deserto."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Clessidra a Sabbia Silicea del Sahara",
          riddle: "Doppia ampolla di vetro soffiato con granelli quarzosi finissimi per scandire i turni d'oracolo.",
          loreClue: "La clessidra dell'acropoli di Shali: calibrata sulla velocità di svuotamento dei granelli dorati dell'Erg."
        }
      ];
    } else if (isLevelSixtyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Tripode Oracolare in Bronzo di Amon",
          riddle: "Il sacro tripode cerimoniale su cui sedeva la profetessa di Siwa.",
          loreClue: "Il sacro tripode cerimoniale su cui sedeva la profetessa di Siwa è stato asportato dalla cella."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Architrave Monolitico con Iscrizioni Demotiche",
          riddle: "Il blocco in arenaria sopra il portale d'ingresso presenta una linea di geroglifici raschiata.",
          loreClue: "Il blocco in arenaria sopra il portale d'ingresso presenta una linea di geroglifici raschiata."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Fessura dell'Eco nella Parete d'Aghurmi",
          riddle: "Il condotto acustico segreto attraverso cui i sacerdoti sussurravano i vaticini è stato ostruito con malta.",
          loreClue: "Il condotto acustico segreto attraverso cui i sacerdoti sussurravano i vaticini è stato ostruito con malta."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Nicchia Murata del Tesoro Votivo",
          riddle: "L'incavo nella roccia calcarea che custodiva le offerte dei sovrani ellenistici.",
          loreClue: "L'incavo nella roccia calcarea che custodiva le offerte dei sovrani ellenistici è stato scassinato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lampada ad Olio Berbera in Pietra Tenera",
          riddle: "La lucerna a tre beccucci scolpita nel gesso locale.",
          loreClue: "La lucerna a tre beccucci scolpita nel gesso locale è stata rovesciata sulla scalinata."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Tessuto Tradizionale con Ricami Solari",
          riddle: "Manto in lino tinto di zafferano e ricamato a motivi geometrici berberi protettivi.",
          loreClue: "Il drappo nuziale di Siwa: i ricami a rombi e soli simboleggiano la fertilità e la protezione contro il malocchio."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Blocco di Salgemma con Fosforiti",
          riddle: "Minerale lucente estratto dai laghi salati dell'oasi dotato di debole fluorescenza naturale.",
          loreClue: "Il campione geologico dell'oasi: studiato da Bellini per via delle sue singolari proprietà luminose al buio."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Anfora Berbera in Argilla del Deserto",
          riddle: "Recipiente con due anse sagomate cotto al sole per conservare l'acqua delle sorgenti calde.",
          loreClue: "L'anfora tradizionale dell'oasi: l'argilla porosa manteneva fresco il liquido anche sotto il sole cocente."
        }
      ];
    } else if (isLevelSixtyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Spada Cerimoniale di Alessandro Magno",
          riddle: "Il gladio macedone con elsa forgiata a testa di leone d'oro.",
          loreClue: "Il gladio macedone con elsa forgiata a testa di leone d'oro è stato rimosso dalla teca funeraria."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Lo Scudo di Bronzo con la Stella di Verghina",
          riddle: "Lo scudo da parata con l'emblema solare a sedici raggi presenta il bossolo centrale ammaccato.",
          loreClue: "Lo scudo da parata con l'emblema solare a sedici raggi presenta il bossolo centrale ammaccato."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Papiro della Profezia di Divina Discendenza",
          riddle: "Il rotolo sacro che proclamava il conquistatore figlio di Amon mostra bruciature sui bordi.",
          loreClue: "Il rotolo sacro che proclamava il conquistatore figlio di Amon mostra bruciature sui bordi."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Bussola Solare da Sabbia Alessandrina",
          riddle: "Lo strumento gnomonico a quadrante mobile usato dall'esercito nelle tempeste di sabbia è sparito.",
          loreClue: "Lo strumento gnomonico a quadrante mobile usato dall'esercito nelle tempeste di sabbia è sparito."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Miliario Macedone della Via Reale",
          riddle: "Il cippo confinario in calcare che indicava la distanza da Alessandria è stato abbattuto.",
          loreClue: "Il cippo confinario in calcare che indicava la distanza da Alessandria è stato abbattuto."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Lampada ad Olio in Sale di Roccia",
          riddle: "Blocco traslucido di salgemma scavato per alloggiare uno stoppino a olio vegetale.",
          loreClue: "La lucerna di sale cristallino: emette una luce dorata e calda che rischiarava le celle dei sacerdoti d'Ammone."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Stele d'Arenaria dell'Oracolo di Giove Ammone",
          riddle: "Lapide votiva con iscrizione bilingue che ricorda la visita di Alessandro Magno nel 331 a.C.",
          loreClue: "La stele commemorativa dell'oracolo: conferma la proclamazione del condottiero macedone a figlio di Ammone."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Braciere d'Incenso in Rame Battuto",
          riddle: "Coppa metallica su treppiede in cui bruciavano resine profumate durante le divinazioni.",
          loreClue: "Il braciere sacerdotale: i residui carbonizzati sul fondo conservano il profumo resinoso dell'incenso di boswellia."
        }
      ];
    } else if (isLevelSixtyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Affresco di Si-Amun Davanti alla Dea Nut",
          riddle: "La vivace pittura murale che unisce l'arte classica greca e la liturgia egizia è stata scheggiata.",
          loreClue: "La vivace pittura murale che unisce l'arte classica greca e la liturgia egizia è stata scheggiata."
        },
        {
          id: `lvl${id}_d2`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Corona di Mirto in Foglia d'Oro",
          riddle: "La preziosa ghirlanda funeraria ellenistica deposta sul capo del nobile è stata rubata.",
          loreClue: "La preziosa ghirlanda funeraria ellenistica deposta sul capo del nobile è stata rubata."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Pettorale con l'Occhio Uadjet e la Bilancia",
          riddle: "L'amuleto di giudizio dell'anima in oro e diaspro verde.",
          loreClue: "L'amuleto di giudizio dell'anima in oro e diaspro verde è svanito dal sarcofago."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Lastra di Chiusura dell'Ipogeo Rupestre",
          riddle: "Il massiccio blocco che sigillava la tomba nella Montagna dei Morti è stato scalzato.",
          loreClue: "Il massiccio blocco che sigillava la tomba nella Montagna dei Morti è stato scalzato."
        },
        {
          id: `lvl${id}_d5`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Cratere Ceramico Greco a Figure Rosse",
          riddle: "Il grande vaso cerimoniale attico per le libagioni d'olio.",
          loreClue: "Il grande vaso cerimoniale attico per le libagioni d'olio è stato frantumato sul pavimento."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Otre d'Acqua in Pelle di Gazzella",
          riddle: "Contenitore da carovana flessibile essenziale per attraversare il grande mare di sabbia.",
          loreClue: "L'otre dei viaggiatori beduini: le cuciture sigillate con pece impedivano qualsiasi evaporazione nel deserto."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Clessidra a Sabbia Silicea del Sahara",
          riddle: "Doppia ampolla di vetro soffiato con granelli quarzosi finissimi per scandire i turni d'oracolo.",
          loreClue: "La clessidra dell'acropoli di Shali: calibrata sulla velocità di svuotamento dei granelli dorati dell'Erg."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 70.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Tessuto Tradizionale con Ricami Solari",
          riddle: "Manto in lino tinto di zafferano e ricamato a motivi geometrici berberi protettivi.",
          loreClue: "Il drappo nuziale di Siwa: i ricami a rombi e soli simboleggiano la fertilità e la protezione contro il malocchio."
        }
      ];
    } else if (isLevelSixtyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Pavimento a Mosaico Sommerso della Sorgente",
          riddle: "Le tessere di pasta vitrea azzurra che rivestono la vasca sorgiva mostrano lacune recenti.",
          loreClue: "Le tessere di pasta vitrea azzurra che rivestono la vasca sorgiva mostrano lacune recenti."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Brocca di Terracotta con Marchio Tolemaico",
          riddle: "Il recipiente da libagione per le acque minerali curative.",
          loreClue: "Il recipiente da libagione per le acque minerali curative è stato asportato dal bordo vasca."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Balustra di Pietra Calcarea del Belvedere",
          riddle: "Il parapetto ombreggiato dalle palme da dattero mostra una colonna divelta.",
          loreClue: "Il parapetto ombreggiato dalle palme da dattero mostra una colonna divelta."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta con l'Analisi Chimica delle Acque",
          riddle: "Il registro lasciato dalla spedizione scientifica ottocentesca sulle proprietà delle fonti.",
          loreClue: "Il registro lasciato dalla spedizione scientifica ottocentesca sulle proprietà delle fonti è stato strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lampada Galleggiante Cerimoniale",
          riddle: "La lucerna a coppa di bronzo usata per i riti notturni dell'equinozio è stata affondata.",
          loreClue: "La lucerna a coppa di bronzo usata per i riti notturni dell'equinozio è stata affondata."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Blocco di Salgemma con Fosforiti",
          riddle: "Minerale lucente estratto dai laghi salati dell'oasi dotato di debole fluorescenza naturale.",
          loreClue: "Il campione geologico dell'oasi: studiato da Bellini per via delle sue singolari proprietà luminose al buio."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Anfora Berbera in Argilla del Deserto",
          riddle: "Recipiente con due anse sagomate cotto al sole per conservare l'acqua delle sorgenti calde.",
          loreClue: "L'anfora tradizionale dell'oasi: l'argilla porosa manteneva fresco il liquido anche sotto il sole cocente."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Lampada ad Olio in Sale di Roccia",
          riddle: "Blocco traslucido di salgemma scavato per alloggiare uno stoppino a olio vegetale.",
          loreClue: "La lucerna di sale cristallino: emette una luce dorata e calda che rischiarava le celle dei sacerdoti d'Ammone."
        }
      ];
    } else if (isLevelSixtySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Muro di Sale e Fango (Kersheef) Forzato",
          riddle: "La caratteristica muratura in blocchi di sale fossile della cittadella medievale è stata perforata.",
          loreClue: "La caratteristica muratura in blocchi di sale fossile della cittadella medievale è stata perforata."
        },
        {
          id: `lvl${id}_d2`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Porticina di Cedro Intagliata a Motivi Berberi",
          riddle: "Il battente ligneo con complessi simboli geometrici protettivi è stato scardinato.",
          loreClue: "Il battente ligneo con complessi simboli geometrici protettivi è stato scardinato."
        },
        {
          id: `lvl${id}_d3`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Tappeto Nomade Tradizionale alle Pareti",
          riddle: "Il pesante arazzo in lana di cammello con la mappa astrale dell'oasi.",
          loreClue: "Il pesante arazzo in lana di cammello con la mappa astrale dell'oasi è stato asportato."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lucerna in Ferro Battuto dei Vicoli Ciechi",
          riddle: "La lanterna sospesa che illuminava il dedalo dei passaggi coperti è stata mandata in pezzi.",
          loreClue: "La lanterna sospesa che illuminava il dedalo dei passaggi coperti è stata mandata in pezzi."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Registro Commerciale dei Mercanti di Sale",
          riddle: "Il libro mastro rilegato in pelle di capra con le rotte carovaniere.",
          loreClue: "Il libro mastro rilegato in pelle di capra con le rotte carovaniere è stato sottratto."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Stele d'Arenaria dell'Oracolo di Giove Ammone",
          riddle: "Lapide votiva con iscrizione bilingue che ricorda la visita di Alessandro Magno nel 331 a.C.",
          loreClue: "La stele commemorativa dell'oracolo: conferma la proclamazione del condottiero macedone a figlio di Ammone."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Braciere d'Incenso in Rame Battuto",
          riddle: "Coppa metallica su treppiede in cui bruciavano resine profumate durante le divinazioni.",
          loreClue: "Il braciere sacerdotale: i residui carbonizzati sul fondo conservano il profumo resinoso dell'incenso di boswellia."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Otre d'Acqua in Pelle di Gazzella",
          riddle: "Contenitore da carovana flessibile essenziale per attraversare il grande mare di sabbia.",
          loreClue: "L'otre dei viaggiatori beduini: le cuciture sigillate con pece impedivano qualsiasi evaporazione nel deserto."
        }
      ];
    } else if (isLevelSixtySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Monolito Residuo del Tempio di Nectanebo II",
          riddle: "L'unico pilastro monumentale sopravvissuto al dinamite mostra i rilievi regali ulteriormente scalpellati.",
          loreClue: "L'unico pilastro monumentale sopravvissuto al dinamite mostra i rilievi regali ulteriormente scalpellati."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Rilievo del Faraone che Offre la Maat ad Amon",
          riddle: "La sacra piuma dell'ordine cosmico consegnata alla divinità è stata cancellata dall'intonaco.",
          loreClue: "La sacra piuma dell'ordine cosmico consegnata alla divinità è stata cancellata dall'intonaco."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Fenditura nella Muraglia Dorata",
          riddle: "Una fessura orizzontale aperta tra i conci d'arenaria indica l'estrazione clandestina di papiri.",
          loreClue: "Una fessura orizzontale aperta tra i conci d'arenaria indica l'estrazione clandestina di papiri."
        },
        {
          id: `lvl${id}_d4`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Stele Dedicatoria dell'Ultimo Faraone Indigeno",
          riddle: "L'epigrafe trionfale dell'ultimo sovrano egizio presenta il cartiglio regale frantumato.",
          loreClue: "L'epigrafe trionfale dell'ultimo sovrano egizio presenta il cartiglio regale frantumato."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere in Granito Grigio delle Offerte",
          riddle: "La coppa per l'incenso sacro all'esterno del recinto sacro è stata spaccata in due.",
          loreClue: "La coppa per l'incenso sacro all'esterno del recinto sacro è stata spaccata in due."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Clessidra a Sabbia Silicea del Sahara",
          riddle: "Doppia ampolla di vetro soffiato con granelli quarzosi finissimi per scandire i turni d'oracolo.",
          loreClue: "La clessidra dell'acropoli di Shali: calibrata sulla velocità di svuotamento dei granelli dorati dell'Erg."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Tessuto Tradizionale con Ricami Solari",
          riddle: "Manto in lino tinto di zafferano e ricamato a motivi geometrici berberi protettivi.",
          loreClue: "Il drappo nuziale di Siwa: i ricami a rombi e soli simboleggiano la fertilità e la protezione contro il malocchio."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Blocco di Salgemma con Fosforiti",
          riddle: "Minerale lucente estratto dai laghi salati dell'oasi dotato di debole fluorescenza naturale.",
          loreClue: "Il campione geologico dell'oasi: studiato da Bellini per via delle sue singolari proprietà luminose al buio."
        }
      ];
    } else if (isLevelSixtyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Bussola da Carovana nel Cristallo di Selenite",
          riddle: "Lo strumento d'orientamento magnetico inserito in un blocco di selenite trasparente è sparito.",
          loreClue: "Lo strumento d'orientamento magnetico inserito in un blocco di selenite trasparente è sparito."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Rosa del Deserto Monumentale tra le Sabbie",
          riddle: "La colossale concrezione minerale di gesso e sabbia presenta un'intaccatura con il marchio dell'Ombra.",
          loreClue: "La colossale concrezione minerale di gesso e sabbia presenta un'intaccatura con il marchio dell'Ombra."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Fossile Marino di Balena Preistorica",
          riddle: "Lo scheletro fossilizzato emerso dal fondale primordiale del Sahara mostra una vertebra asportata.",
          loreClue: "Lo scheletro fossilizzato emerso dal fondale primordiale del Sahara mostra una vertebra asportata."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Tenda da Ricognizione della Spedizione",
          riddle: "Il telo mimetico dell'avamposto archeologico presenta squarci netti praticati con una lama.",
          loreClue: "Il telo mimetico dell'avamposto archeologico presenta squarci netti praticati con una lama."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Taccuino delle Coordinate GPS e Celesti",
          riddle: "Le pagine con la rotta trans-sahariana verso Petra sono state strappate dal quaderno di campo.",
          loreClue: "Le pagine con la rotta trans-sahariana verso Petra sono state strappate dal quaderno di campo."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Anfora Berbera in Argilla del Deserto",
          riddle: "Recipiente con due anse sagomate cotto al sole per conservare l'acqua delle sorgenti calde.",
          loreClue: "L'anfora tradizionale dell'oasi: l'argilla porosa manteneva fresco il liquido anche sotto il sole cocente."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lampada ad Olio in Sale di Roccia",
          riddle: "Blocco traslucido di salgemma scavato per alloggiare uno stoppino a olio vegetale.",
          loreClue: "La lucerna di sale cristallino: emette una luce dorata e calda che rischiarava le celle dei sacerdoti d'Ammone."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Stele d'Arenaria dell'Oracolo di Giove Ammone",
          riddle: "Lapide votiva con iscrizione bilingue che ricorda la visita di Alessandro Magno nel 331 a.C.",
          loreClue: "La stele commemorativa dell'oracolo: conferma la proclamazione del condottiero macedone a figlio di Ammone."
        }
      ];
    } else if (isLevelSixtyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Le Impronte di Mani in Ocra Rossa Preistoriche",
          riddle: "Le antichissime impronte rupestri lasciate millenni prima dei faraoni mostrano solventi chimici.",
          loreClue: "Le antichissime impronte rupestri lasciate millenni prima dei faraoni mostrano solventi chimici."
        },
        {
          id: `lvl${id}_d2`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Bassorilievo Rupestre della Giraffa e dell'Arciere",
          riddle: "La scena di caccia del Sahara verde incisa nella roccia arenaria è stata scheggiata.",
          loreClue: "La scena di caccia del Sahara verde incisa nella roccia arenaria è stata scheggiata."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Ciotola in Pietra per la Miscelazione dei Pigmenti",
          riddle: "Il mortaio neolitico con residui di polvere d'ocra e grasso animale è stato rubato.",
          loreClue: "Il mortaio neolitico con residui di polvere d'ocra e grasso animale è stato rubato."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Simbolo Astronomico delle Pleiadi sulla Volta",
          riddle: "I sette punti incisi che rappresentavano la costellazione guida dei nomadi sono stati levigati.",
          loreClue: "I sette punti incisi che rappresentavano la costellazione guida dei nomadi sono stati levigati."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Lucerna a Olio Animale dei Primi Uomini",
          riddle: "La coppa in arenaria concava usata per illuminare la caverna preistorica.",
          loreClue: "La coppa in arenaria concava usata per illuminare la caverna preistorica è stata asportata."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Braciere d'Incenso in Rame Battuto",
          riddle: "Coppa metallica su treppiede in cui bruciavano resine profumate durante le divinazioni.",
          loreClue: "Il braciere sacerdotale: i residui carbonizzati sul fondo conservano il profumo resinoso dell'incenso di boswellia."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Otre d'Acqua in Pelle di Gazzella",
          riddle: "Contenitore da carovana flessibile essenziale per attraversare il grande mare di sabbia.",
          loreClue: "L'otre dei viaggiatori beduini: le cuciture sigillate con pece impedivano qualsiasi evaporazione nel deserto."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Clessidra a Sabbia Silicea del Sahara",
          riddle: "Doppia ampolla di vetro soffiato con granelli quarzosi finissimi per scandire i turni d'oracolo.",
          loreClue: "La clessidra dell'acropoli di Shali: calibrata sulla velocità di svuotamento dei granelli dorati dell'Erg."
        }
      ];
    } else if (isLevelSeventy) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "IL SETTIMO SIGILLO: Il Corno d'Oro di Amon-Zeus con Turchese",
          riddle: "Il sacro corno d'ariete in oro zecchino consacrato nel cuore dell'oracolo di Siwa.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 7: Il leggendario corno d'ariete in oro massiccio e turchese del Sinai! Il vertice della reliquia proietta la triangolazione trans-desertica verso la Città di Roccia di Petra."
        },
        {
          id: `lvl${id}_d2`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Naos Segreta dell'Oracolo di Siwa",
          riddle: "Il tabernacolo monolitico di granito celato per oltre duemila anni è stato forzato dai cospiratori.",
          loreClue: "Il tabernacolo monolitico di granito celato per oltre duemila anni è stato forzato dai cospiratori."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Stele con il Vaticinio di Alessandro",
          riddle: "La lastra di diorite recante le parole del sacerdote che proclamava la conquista del mondo è spezzata.",
          loreClue: "La lastra di diorite recante le parole del sacerdote che proclamava la conquista del mondo è spezzata."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Altare del Raggio Solare Equinoziale",
          riddle: "Il basamento in selenite che rifletteva la luce del primo sole d'autunno reca incisioni sacrileghe.",
          loreClue: "Il basamento in selenite che rifletteva la luce del primo sole d'autunno reca incisioni sacrileghe."
        },
        {
          id: `lvl${id}_d5`,
          x: 68.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere d'Oro dei Sacerdoti Libici",
          riddle: "Il tripode d'oro per gli incensi rituali.",
          loreClue: "Il tripode d'oro per gli incensi rituali è stato rovesciato ai piedi del tabernacolo."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Tessuto Tradizionale con Ricami Solari",
          riddle: "Manto in lino tinto di zafferano e ricamato a motivi geometrici berberi protettivi.",
          loreClue: "Il drappo nuziale di Siwa: i ricami a rombi e soli simboleggiano la fertilità e la protezione contro il malocchio."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Blocco di Salgemma con Fosforiti",
          riddle: "Minerale lucente estratto dai laghi salati dell'oasi dotato di debole fluorescenza naturale.",
          loreClue: "Il campione geologico dell'oasi: studiato da Bellini per via delle sue singolari proprietà luminose al buio."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "L'Anfora Berbera in Argilla del Deserto",
          riddle: "Recipiente con due anse sagomate cotto al sole per conservare l'acqua delle sorgenti calde.",
          loreClue: "L'anfora tradizionale dell'oasi: l'argilla porosa manteneva fresco il liquido anche sotto il sole cocente."
        }
      ];
    } else if (isLevelSeventyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 78.33,
          y: 59.82,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Canale Idraulico Nabateo nella Roccia del Siq",
          riddle: "La condotta in terracotta scavata nella parete della gola per convogliare l'acqua piovana mostra tubature frantumate.",
          loreClue: "La condotta in terracotta scavata nella parete della gola per convogliare l'acqua piovana mostra tubature frantumate."
        },
        {
          id: `lvl${id}_d2`,
          x: 78.38,
          y: 74.05,
          radius: 4.8,
          clueType: 'dark_seal',
          name: "La Votiva Betilo Scolpita nell'Arenaria Rosa",
          riddle: "La sacra pietra aniconica raffigurante il dio Dushara.",
          loreClue: "La sacra pietra aniconica raffigurante il dio Dushara è stata scalpellata via dalla nicchia rupestre."
        },
        {
          id: `lvl${id}_d3`,
          x: 35.67,
          y: 89.29,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Lastricato Romano della Gola di Petra",
          riddle: "I grandi basoli poligonali solcati dalle ruote dei carri romani presentano sollevamenti recenti con leve di ferro.",
          loreClue: "I grandi basoli poligonali solcati dalle ruote dei carri romani presentano sollevamenti recenti con leve di ferro."
        },
        {
          id: `lvl${id}_d4`,
          x: 68.75,
          y: 72.43,
          radius: 4.8,
          clueType: 'sabotage',
          name: "La Lanterna ad Acetilene delle Guide Beduine",
          riddle: "La lampada da speleologia usata per esplorare le gole cieche è stata schiacciata sul pietrisco.",
          loreClue: "La lampada da speleologia usata per esplorare le gole cieche è stata schiacciata sul pietrisco."
        },
        {
          id: `lvl${id}_d5`,
          x: 31.71,
          y: 78.24,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Frammento di Taccuino di Johann Burckhardt",
          riddle: "La pagina del diario dell'esploratore svizzero che riscoprì Petra nel 1812 reca annotazioni cifrate strappate.",
          loreClue: "La pagina del diario dell'esploratore svizzero che riscoprì Petra nel 1812 reca annotazioni cifrate strappate."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Incenziere in Bronzo con Motivi Nabatei",
          riddle: "Recipiente forato con coperchio a cupola da cui si effondeva il fumo dei grani aromatici.",
          loreClue: "L'incenziere rituale del tempio di Qasr al-Bint: conservava le miscele donate dai sovrani di Petra."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Martello da Geologo per Arenarie",
          riddle: "Attrezzo con penna a cuneo e manico in frassino impiegato per campionare i sedimenti rosa.",
          loreClue: "Il martello della spedizione Bellini: la punta metallica porta i segni del duro lavoro sulle pareti d'arenaria."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Mappa Litografica di Léon de Laborde",
          riddle: "Tavola geografica del 1830 stampata a Parigi con il rilievo completo della gola di Petra.",
          loreClue: "Il rilievo topografico ottocentesco: una delle prime mappe dettagliate che rivelarono Al-Khazneh al mondo."
        }
      ];
    } else if (isLevelSeventyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Urna Sommitale di Al-Khazneh (Il Tesoro)",
          riddle: "Il bulbo superiore della tholos scolpita nella viva roccia.",
          loreClue: "Il bulbo superiore della tholos scolpita nella viva roccia reca segni di colpi d'arma da fuoco dei cacciatori di tesori."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Capitello Corinzio dell'Atrio Monumentale",
          riddle: "Il capitello floreale finemente intagliato nell'arenaria rosa ha un riccio d'acanto spezzato di netto.",
          loreClue: "Il capitello floreale finemente intagliato nell'arenaria rosa ha un riccio d'acanto spezzato di netto."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cripta Funeraria Sotterranea Scassinata",
          riddle: "La lastra tombale scoperta sotto il vestibolo del Tesoro mostra il sigillo di malta rimosso con picconi.",
          loreClue: "La lastra tombale scoperta sotto il vestibolo del Tesoro mostra il sigillo di malta rimosso con picconi."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Statua dell'Amazzone con la Doppia Ascia",
          riddle: "Il bassorilievo ellenistico della guerriera tra le colonne del frontone superiore è stato mutilato.",
          loreClue: "Il bassorilievo ellenistico della guerriera tra le colonne del frontone superiore è stato mutilato."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lettera Cifrata della Spedizione Bellini",
          riddle: "Una missiva indirizzata al Professor Bellini con i codici astronomici del Tesoro è stata lacerata.",
          loreClue: "Una missiva indirizzata al Professor Bellini con i codici astronomici del Tesoro è stata lacerata."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Mappa Litografica di Léon de Laborde",
          riddle: "Tavola geografica del 1830 stampata a Parigi con il rilievo completo della gola di Petra.",
          loreClue: "Il rilievo topografico ottocentesco: una delle prime mappe dettagliate che rivelarono Al-Khazneh al mondo."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Frammento di Fregio con Tralci di Vite",
          riddle: "Intaglio floreale nabateo che decorava l'architrave di una ricca dimora patrizia.",
          loreClue: "Il frammento di fregio in pietra rosa: la vite simboleggiava l'abbondanza idrica garantita dalle dighe nabatee."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Capitello Corinzio Nabateo a Corna",
          riddle: "Elemento scultoreo in arenaria rosa con foglie d'acanto stilizzate e volute cornute.",
          loreClue: "Il capitello caratteristico dell'architettura nabatea: combina la grazia ellenistica con la forza del deserto."
        }
      ];
    } else if (isLevelSeventyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Motivo a Gradoni (Crowstep) della Tomba Nabatea",
          riddle: "La merlatura a scalini assiro-babilonese che sormonta il sepolcro rupestre è stata sbrecciata.",
          loreClue: "La merlatura a scalini assiro-babilonese che sormonta il sepolcro rupestre è stata sbrecciata."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Iscrizione Funeraria in Aramaico Antico",
          riddle: "L'epigrafe dedicatoria che malediceva chiunque violasse la tomba della famiglia mercantile è abrasa.",
          loreClue: "L'epigrafe dedicatoria che malediceva chiunque violasse la tomba della famiglia mercantile è abrasa."
        },
        {
          id: `lvl${id}_d3`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Porta Monolitica del Sepolcro delle Facciate",
          riddle: "Il pesante battente in arenaria che sigillava l'ipogeo è stato sgangherato dall'asse di cardine.",
          loreClue: "Il pesante battente in arenaria che sigillava l'ipogeo è stato sgangherato dall'asse di cardine."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Brocca di Terracotta a Guscio d'Uovo",
          riddle: "La finissima ceramica dipinta nabatea a motivi vegetali stilizzati.",
          loreClue: "La finissima ceramica dipinta nabatea a motivi vegetali stilizzati è stata frantumata all'ingresso."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Amuleto di Bronzo del Falcone Alato",
          riddle: "Il pendente sacro raffigurante il messaggero celeste delle divinità semitiche.",
          loreClue: "Il pendente sacro raffigurante il messaggero celeste delle divinità semitiche è svanito dalla tomba."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Betilo Votivo Scolpito nella Roccia",
          riddle: "Pietra sacra aniconica incisa nella parete del Siq per invocare la protezione di Dushara.",
          loreClue: "Il rilievo sacro rupestre: i carovanieri cospargevano d'olio la nicchia prima di inoltrarsi nelle gole rocciose."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Giara di Spezie dei Mercanti Nabatei",
          riddle: "Grande vaso in terracotta decorato a fasce per trasportare cardamomo e cinnamomo dall'India.",
          loreClue: "La giara delle carovane nabatee: Petra era lo snodo cruciale dove le spezie venivano scambiate con argento e vetro."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Lanterna ad Acetilene delle Guide Beduine",
          riddle: "Lampada da speleologia in ottone con generatore a carburo adoperata nelle gole profonde.",
          loreClue: "La lanterna delle guide del deserto: il riflettore lucido permetteva di esplorare le camere funerarie più buie."
        }
      ];
    } else if (isLevelSeventyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Cavea del Teatro Scavata nella Montagna",
          riddle: "I gradoni superiori intagliati nella roccia multicolore che ospitavano i notabili mostrano tagli netti di scalpello.",
          loreClue: "I gradoni superiori intagliati nella roccia multicolore che ospitavano i notabili mostrano tagli netti di scalpello."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Scena Monumentale con Colonne in Marmo Bianco",
          riddle: "Il fusto scanalato importato dall'Egitto durante il dominio di Traiano presenta fratture intenzionali.",
          loreClue: "Il fusto scanalato importato dall'Egitto durante il dominio di Traiano presenta fratture intenzionali."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Maschera Teatrale in Bronzo di Dioniso",
          riddle: "La maschera tragica con tralci di vite usata nelle rappresentazioni ellenistiche.",
          loreClue: "La maschera tragica con tralci di vite usata nelle rappresentazioni ellenistiche è scomparsa dal proscenio."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Varco Segreto sotto il Vomitorium",
          riddle: "La grata d'accesso alla galleria idraulica sotterranea del teatro è stata scardinata con leve idrauliche.",
          loreClue: "La grata d'accesso alla galleria idraulica sotterranea del teatro è stata scardinata con leve idrauliche."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Mappa Topografica dell'Istituto Archeologico",
          riddle: "La pianta a rilievi trigonometrici del settore teatrale è stata bruciata su un angolo.",
          loreClue: "La pianta a rilievi trigonometrici del settore teatrale è stata bruciata su un angolo."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "L'Incenziere in Bronzo con Motivi Nabatei",
          riddle: "Recipiente forato con coperchio a cupola da cui si effondeva il fumo dei grani aromatici.",
          loreClue: "L'incenziere rituale del tempio di Qasr al-Bint: conservava le miscele donate dai sovrani di Petra."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Martello da Geologo per Arenarie",
          riddle: "Attrezzo con penna a cuneo e manico in frassino impiegato per campionare i sedimenti rosa.",
          loreClue: "Il martello della spedizione Bellini: la punta metallica porta i segni del duro lavoro sulle pareti d'arenaria."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Mappa Litografica di Léon de Laborde",
          riddle: "Tavola geografica del 1830 stampata a Parigi con il rilievo completo della gola di Petra.",
          loreClue: "Il rilievo topografico ottocentesco: una delle prime mappe dettagliate che rivelarono Al-Khazneh al mondo."
        }
      ];
    } else if (isLevelSeventyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Facciata a Tre Ordini della Tomba del Palazzo",
          riddle: "La grandiosa imitazione rupestre di un palazzo ellenistico romano mostra una delle lesene crollata.",
          loreClue: "La grandiosa imitazione rupestre di un palazzo ellenistico romano mostra una delle lesene crollata."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Urna Cineraria in Alabastro nella Tomba dell'Urna",
          riddle: "Il vaso monumentale intagliato nella pietra calcarea translucida.",
          loreClue: "Il vaso monumentale intagliato nella pietra calcarea translucida è stato rimosso dalla nicchia superiore."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Le Venature Multicolori della Tomba della Seta",
          riddle: "La celebre parete rocciosa dalle sfumature arcobaleno presenta perforazioni per inserire cariche esplosive.",
          loreClue: "La celebre parete rocciosa dalle sfumature arcobaleno presenta perforazioni per inserire cariche esplosive."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Portale d'Ingresso con Architrave a Gola Egizia",
          riddle: "La solida intelaiatura lapidea che introduceva alla camera funeraria reale appare spaccata a mazzuolo.",
          loreClue: "La solida intelaiatura lapidea che introduceva alla camera funeraria reale appare spaccata a mazzuolo."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Registro Genealogico dei Sovrani di Petra",
          riddle: "Il papiro documentario con la successione da Malichus I a Rabel II.",
          loreClue: "Il papiro documentario con la successione da Malichus I a Rabel II è stato strappato in due parti."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Frammento di Fregio con Tralci di Vite",
          riddle: "Intaglio floreale nabateo che decorava l'architrave di una ricca dimora patrizia.",
          loreClue: "Il frammento di fregio in pietra rosa: la vite simboleggiava l'abbondanza idrica garantita dalle dighe nabatee."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Capitello Corinzio Nabateo a Corna",
          riddle: "Elemento scultoreo in arenaria rosa con foglie d'acanto stilizzate e volute cornute.",
          loreClue: "Il capitello caratteristico dell'architettura nabatea: combina la grazia ellenistica con la forza del deserto."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Betilo Votivo Scolpito nella Roccia",
          riddle: "Pietra sacra aniconica incisa nella parete del Siq per invocare la protezione di Dushara.",
          loreClue: "Il rilievo sacro rupestre: i carovanieri cospargevano d'olio la nicchia prima di inoltrarsi nelle gole rocciose."
        }
      ];
    } else if (isLevelSeventySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Porta Trionfale di Traiano con Bassorilievi",
          riddle: "L'arco onorario che segna l'ingresso al Temenos sacro ha uno dei pannelli con vittorie alate spezzato.",
          loreClue: "L'arco onorario che segna l'ingresso al Temenos sacro ha uno dei pannelli con vittorie alate spezzato."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Tamburi di Colonna Rovesciati sul Decumano",
          riddle: "I rocchi in calcare giallo allineati lungo la via principale sono stati rotolati per bloccare il passaggio.",
          loreClue: "I rocchi in calcare giallo allineati lungo la via principale sono stati rotolati per bloccare il passaggio."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Bottega del Mercante di Mirra e Incenso",
          riddle: "Il banco in pietra con i mortai per pesare le resine della via dell'incenso è stato sfondato.",
          loreClue: "Il banco in pietra con i mortai per pesare le resine della via dell'incenso è stato sfondato."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo di Ceralacca sul Trattato Commerciale",
          riddle: "L'idolo intagliato nell'arenaria rosa di Petra che svela la rotta delle carovane.",
          loreClue: "La bolla di scorta dei dazi carovanieri tra Petra e Gaza è stata calpestata e spezzata."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.04,
          y: 15.07,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Rotella di Misurazione Topografica Archeologica",
          riddle: "Lo strumento a nastro metrico con custodia in cuoio della spedizione Bellini è sparito.",
          loreClue: "Lo strumento a nastro metrico con custodia in cuoio della spedizione Bellini è sparito."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Giara di Spezie dei Mercanti Nabatei",
          riddle: "Grande vaso in terracotta decorato a fasce per trasportare cardamomo e cinnamomo dall'India.",
          loreClue: "La giara delle carovane nabatee: Petra era lo snodo cruciale dove le spezie venivano scambiate con argento e vetro."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Lanterna ad Acetilene delle Guide Beduine",
          riddle: "Lampada da speleologia in ottone con generatore a carburo adoperata nelle gole profonde.",
          loreClue: "La lanterna delle guide del deserto: il riflettore lucido permetteva di esplorare le camere funerarie più buie."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Incenziere in Bronzo con Motivi Nabatei",
          riddle: "Recipiente forato con coperchio a cupola da cui si effondeva il fumo dei grani aromatici.",
          loreClue: "L'incenziere rituale del tempio di Qasr al-Bint: conservava le miscele donate dai sovrani di Petra."
        }
      ];
    } else if (isLevelSeventySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Altare Monumentale del Temenos di Qasr al-Bint",
          riddle: "Il grande podio sacrificale in arenaria che fronteggia il tempio principale reca solchi sacrileghi.",
          loreClue: "Il grande podio sacrificale in arenaria che fronteggia il tempio principale reca solchi sacrileghi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Fregio in Stucco Dipinto con Girali Vegetali",
          riddle: "I preziosi stucchi ellenistici policromi sopravvissuti ai terremoti sono stati staccati a pezzi.",
          loreClue: "I preziosi stucchi ellenistici policromi sopravvissuti ai terremoti sono stati staccati a pezzi."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cella Tripartita del Tempio di Dushara",
          riddle: "La massiccia inferriata di protezione dell'adyton centrale presenta le sbarre divelte.",
          loreClue: "La massiccia inferriata di protezione dell'adyton centrale presenta le sbarre divelte."
        },
        {
          id: `lvl${id}_d4`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statua in Marmo di Tyche / Al-Uzza",
          riddle: "La figura della dea protettrice dell'abbondanza con la cornucopia.",
          loreClue: "La figura della dea protettrice dell'abbondanza con la cornucopia è stata rimossa dal basamento."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta d'Argilla con Inno Liturgico",
          riddle: "La tavoletta iscritta con il canto serale agli astri erranti è spezzata a metà.",
          loreClue: "La tavoletta iscritta con il canto serale agli astri erranti è spezzata a metà."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Martello da Geologo per Arenarie",
          riddle: "Attrezzo con penna a cuneo e manico in frassino impiegato per campionare i sedimenti rosa.",
          loreClue: "Il martello della spedizione Bellini: la punta metallica porta i segni del duro lavoro sulle pareti d'arenaria."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Mappa Litografica di Léon de Laborde",
          riddle: "Tavola geografica del 1830 stampata a Parigi con il rilievo completo della gola di Petra.",
          loreClue: "Il rilievo topografico ottocentesco: una delle prime mappe dettagliate che rivelarono Al-Khazneh al mondo."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Frammento di Fregio con Tralci di Vite",
          riddle: "Intaglio floreale nabateo che decorava l'architrave di una ricca dimora patrizia.",
          loreClue: "Il frammento di fregio in pietra rosa: la vite simboleggiava l'abbondanza idrica garantita dalle dighe nabatee."
        }
      ];
    } else if (isLevelSeventyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Obelisco Monolitico del Dio Dushara",
          riddle: "Il colossale dente di roccia alto sei metri intagliato nella cima della montagna presenta profonde incisioni.",
          loreClue: "Il colossale dente di roccia alto sei metri intagliato nella cima della montagna presenta profonde incisioni."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Vasca di Libagione del Luogo Alto del Sacrificio",
          riddle: "Il bacino scavato nella roccia per raccogliere il sangue delle offerte e l'acqua lustrale è otturato.",
          loreClue: "Il bacino scavato nella roccia per raccogliere il sangue delle offerte e l'acqua lustrale è otturato."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Scala Monumentale Intagliata nel Dirupo",
          riddle: "I gradini esposti a strapiombo sulla valle del Wadi Musa mostrano un tratto fatto franare deliberatamente.",
          loreClue: "I gradini esposti a strapiombo sulla valle del Wadi Musa mostrano un tratto fatto franare deliberatamente."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassetta degli Strumenti Geodetici sulla Cima",
          riddle: "Lo scrigno blindato con l'altimetro e il barometro aneroide da montagna è stato forzato.",
          loreClue: "Lo scrigno blindato con l'altimetro e il barometro aneroide da montagna è stato forzato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Diario Meteorologico delle Vette di Petra",
          riddle: "Il quaderno rilegato con i calcoli dei venti equinoziali usati per i falò di segnalazione è strappato.",
          loreClue: "Il quaderno rilegato con i calcoli dei venti equinoziali usati per i falò di segnalazione è strappato."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Capitello Corinzio Nabateo a Corna",
          riddle: "Elemento scultoreo in arenaria rosa con foglie d'acanto stilizzate e volute cornute.",
          loreClue: "Il capitello caratteristico dell'architettura nabatea: combina la grazia ellenistica con la forza del deserto."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Betilo Votivo Scolpito nella Roccia",
          riddle: "Pietra sacra aniconica incisa nella parete del Siq per invocare la protezione di Dushara.",
          loreClue: "Il rilievo sacro rupestre: i carovanieri cospargevano d'olio la nicchia prima di inoltrarsi nelle gole rocciose."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Giara di Spezie dei Mercanti Nabatei",
          riddle: "Grande vaso in terracotta decorato a fasce per trasportare cardamomo e cinnamomo dall'India.",
          loreClue: "La giara delle carovane nabatee: Petra era lo snodo cruciale dove le spezie venivano scambiate con argento e vetro."
        }
      ];
    } else if (isLevelSeventyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Immensa Facciata del Monastero (Ad-Deir)",
          riddle: "La facciata rupestre alta 48 metri presenta tracce di arrampicata clandestina sulla tholos sommitale.",
          loreClue: "La facciata rupestre alta 48 metri presenta tracce di arrampicata clandestina sulla tholos sommitale."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Capitello Floreale Nabateo del Portale Centrale",
          riddle: "Il capitello stilizzato tipico dell'architettura di Petra ha un blocco d'arenaria scheggiato.",
          loreClue: "Il capitello stilizzato tipico dell'architettura di Petra ha un blocco d'arenaria scheggiato."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Croce Bizantina Incisa nell'Adyton Interno",
          riddle: "La croce greca scalpellata quando la tomba fu convertita in eremo cristiano è stata deturpata.",
          loreClue: "La croce greca scalpellata quando la tomba fu convertita in eremo cristiano è stata deturpata."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Passaggio a Strapiombo per il Belvedere sul Wadi Araba",
          riddle: "Il muretto di sicurezza in pietre a secco sospeso sull'abisso è stato fatto crollare nel baratro.",
          loreClue: "Il muretto di sicurezza in pietre a secco sospeso sull'abisso è stato fatto crollare nel baratro."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 45.03,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Carta Topografica delle Cisterne Rupestri di Deir",
          riddle: "Il documento con la collocazione delle riserve d'acqua scavate nei picchi.",
          loreClue: "Il documento con la collocazione delle riserve d'acqua scavate nei picchi è stato sottratto."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lanterna ad Acetilene delle Guide Beduine",
          riddle: "Lampada da speleologia in ottone con generatore a carburo adoperata nelle gole profonde.",
          loreClue: "La lanterna delle guide del deserto: il riflettore lucido permetteva di esplorare le camere funerarie più buie."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Incenziere in Bronzo con Motivi Nabatei",
          riddle: "Recipiente forato con coperchio a cupola da cui si effondeva il fumo dei grani aromatici.",
          loreClue: "L'incenziere rituale del tempio di Qasr al-Bint: conservava le miscele donate dai sovrani di Petra."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Martello da Geologo per Arenarie",
          riddle: "Attrezzo con penna a cuneo e manico in frassino impiegato per campionare i sedimenti rosa.",
          loreClue: "Il martello della spedizione Bellini: la punta metallica porta i segni del duro lavoro sulle pareti d'arenaria."
        }
      ];
    } else if (isLevelEighty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'OTTAVO SIGILLO: Il Betilo d'Ossidiana con la Chiave Astrale di Petra",
          riddle: "L'idolo intagliato nell'arenaria rosa di Petra che svela la rotta delle carovane.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 8: Il sacro betilo di pura ossidiana nera intarsiato d'oro e lapislazzuli! I suoi angoli triangolano la rotta transoceanica verso le cascate di Iguazù e le misteriose linee di Nazca."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cripta Segreta dei Re Nabatei Sotto l'Altare",
          riddle: "La volta celata nel cuore della montagna sacra è stata violata dai sicari della Mano Oscura.",
          loreClue: "La volta celata nel cuore della montagna sacra è stata violata dai sicari della Mano Oscura."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Mappa delle Rotte Transoceaniche dei Fenici e Nabatei",
          riddle: "La tavoletta in diorite con la navigazione stellare verso il continente sconosciuto è spezzata a metà.",
          loreClue: "La tavoletta in diorite con la navigazione stellare verso il continente sconosciuto è spezzata a metà."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Reale di Malichus II con il Serpente Alato",
          riddle: "L'idolo intagliato nell'arenaria rosa di Petra che svela la rotta delle carovane (Elemento 2).",
          loreClue: "L'emblema dinastico in ceralacca rossa e piombo fuso è stato fuso con una torcia a fiamma viva."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere Ceremoniale in Bronzo della Montagna di Aronne",
          riddle: "Il grande tripode votivo che segnava la tomba sacra del Sommo Sacerdote è stato scaraventato nel burrone.",
          loreClue: "Il grande tripode votivo che segnava la tomba sacra del Sommo Sacerdote è stato scaraventato nel burrone."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Mappa Litografica di Léon de Laborde",
          riddle: "Tavola geografica del 1830 stampata a Parigi con il rilievo completo della gola di Petra.",
          loreClue: "Il rilievo topografico ottocentesco: una delle prime mappe dettagliate che rivelarono Al-Khazneh al mondo."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Frammento di Fregio con Tralci di Vite",
          riddle: "Intaglio floreale nabateo che decorava l'architrave di una ricca dimora patrizia.",
          loreClue: "Il frammento di fregio in pietra rosa: la vite simboleggiava l'abbondanza idrica garantita dalle dighe nabatee."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Capitello Corinzio Nabateo a Corna",
          riddle: "Elemento scultoreo in arenaria rosa con foglie d'acanto stilizzate e volute cornute.",
          loreClue: "Il capitello caratteristico dell'architettura nabatea: combina la grazia ellenistica con la forza del deserto."
        }
      ];
    } else if (isLevelEightyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.33,
          y: 69.98,
          radius: 4.9,
          clueType: 'sabotage',
          name: "Il Parapetto di Ferro della Garganta del Diablo",
          riddle: "La ringhiera della passerella affacciata sull'abisso delle cascate è stata allentata con chiavi inglesi.",
          loreClue: "La ringhiera della passerella affacciata sull'abisso delle cascate è stata allentata con chiavi inglesi."
        },
        {
          id: `lvl${id}_d2`,
          x: 25.25,
          y: 71.37,
          radius: 4.9,
          clueType: 'torn_evidence',
          name: "La Targa Idrografica della Spedizione Fluviale",
          riddle: "La lamina in bronzo con la misurazione della portata d'acqua al minuto.",
          loreClue: "La lamina in bronzo con la misurazione della portata d'acqua al minuto è stata divelta."
        },
        {
          id: `lvl${id}_d3`,
          x: 49.17,
          y: 72.94,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Faro di Segnalazione per la Nebbia Fluviale",
          riddle: "Il fanale a cherosene per orientare i battelli nella densa nube d'acqua è stato mandato in frantumi.",
          loreClue: "Il fanale a cherosene per orientare i battelli nella densa nube d'acqua è stato mandato in frantumi."
        },
        {
          id: `lvl${id}_d4`,
          x: 41.0,
          y: 22.27,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassa Stagna dei Rilievi Batimetrici",
          riddle: "Il baule metallico galleggiante con i grafici delle profondità del baratro è stato forzato.",
          loreClue: "Il baule metallico galleggiante con i grafici delle profondità del baratro è stato forzato."
        },
        {
          id: `lvl${id}_d5`,
          x: 92.67,
          y: 74.27,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Gesuita della Missione di San Ignacio",
          riddle: "La croce d'argento e pietre fluviali forgiata nel cuore delle cascate di Iguazú.",
          loreClue: "L'emblema con la croce e il sole inciso sul pilastro di roccia basaltica reca un marchio scuro."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Bussola da Topografo Forestale in Cuoio",
          riddle: "Strumento magnetico d'orientamento racchiuso in una custodia a prova di umidità e pioggia.",
          loreClue: "La bussola dei ricognitori della giungla: la rosa dei venti d'argento consentiva il rilievo tra la folta vegetazione."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassa Metallica Stagna per Documenti",
          riddle: "Baule con guarnizione in gomma e chiusure ermetiche a leva per salvaguardare i diari.",
          loreClue: "La cassa stagna di Bellini: preservava dalle nebbie d'acqua polverizzata le mappe del bacino del Paranà."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Machete da Giungla con Manico in Corno",
          riddle: "Lunga lama d'acciaio forgiata per farsi strada tra liane, bambù e felci giganti.",
          loreClue: "Il machete da esplorazione: la lama presenta scanalature studiate per non incastrarsi nella vegetazione compatta."
        }
      ];
    } else if (isLevelEightyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Scalinata in Roccia Basaltica del Salto San Martin",
          riddle: "I gradini intagliati nel basalto nero costantemente bagnati dalla nebbia presentano fori da mina.",
          loreClue: "I gradini intagliati nel basalto nero costantemente bagnati dalla nebbia presentano fori da mina."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Taccuino da Campo del Botanico",
          riddle: "Le pagine illustrate con le rare orchidee epifite endemiche dell'arcipelago sono state strappate.",
          loreClue: "Le pagine illustrate con le rare orchidee epifite endemiche dell'arcipelago sono state strappate."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statuetta Guaraní dello Spirito del Fiume",
          riddle: "L'idolo in legno di cedro consacrato a Tupã e Naipú.",
          loreClue: "L'idolo in legno di cedro consacrato a Tupã e Naipú è stato sottratto dalla cavità nella roccia."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Corda Guida con Moschettoni d'Ottone",
          riddle: "Il cavo di sicurezza teso tra i costoni rocciosi per superare i guadi è stato reciso.",
          loreClue: "Il cavo di sicurezza teso tra i costoni rocciosi per superare i guadi è stato reciso."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassaforte Portatile della Compagnia Fluviale",
          riddle: "Lo scrigno blindato contenente le autorizzazioni di sbarco nell'area proibita è stato forzato.",
          loreClue: "Lo scrigno blindato contenente le autorizzazioni di sbarco nell'area proibita è stato forzato."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Vaso Cerimoniale in Ceramica Guaraní",
          riddle: "Recipiente in terracotta dipinto con motivi geometrici rossi e neri per offerte d'acqua.",
          loreClue: "La ceramica indigena fluviale: decorata con pigmenti di urucum e resine vegetali idrorepellenti."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Trottola Rituale Guaraní in Legno Duro",
          riddle: "Oggetto sciamanico intagliato che veniva fatto roteare per interpretare i voleri degli spiriti.",
          loreClue: "Il manufatto rituale della tribù: le scanalature radiali producevano un ronzio sommesso durante la rotazione."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Campana di Bronzo della Missione Gesuita",
          riddle: "Campana con croce incisa fusa dai padri gesuiti per la cappella di San Ignacio Miní.",
          loreClue: "La campana settecentesca: i suoi rintocchi scandivano le giornate di lavoro e preghiera nella selva subtropicale."
        }
      ];
    } else if (isLevelEightyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Sentiero della Scogliera dell'Isla San Martin",
          riddle: "La staccionata in canne di bambù che protegge dal salto nel vuoto è stata abbattuta.",
          loreClue: "La staccionata in canne di bambù che protegge dal salto nel vuoto è stata abbattuta."
        },
        {
          id: `lvl${id}_d2`,
          x: 68.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Binocolo Prismatico da Avvistamento",
          riddle: "Le lenti da campo con reticolo graduato usate per studiare le aperture nella parete rocciosa sono sparite.",
          loreClue: "Le lenti da campo con reticolo graduato usate per studiare le aperture nella parete rocciosa sono sparite."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Portale d'Ingresso alla Grotta dei Rondoni",
          riddle: "La grata a protezione del rifugio dei rondoni cascatori mostra il lucchetto spezzato con tenaglie.",
          loreClue: "La grata a protezione del rifugio dei rondoni cascatori mostra il lucchetto spezzato con tenaglie."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lettera del Governatore Coloniale del 1750",
          riddle: "Il documento pergamenaceo che intimava l'abbandono delle missioni gesuite è parzialmente bruciato.",
          loreClue: "Il documento pergamenaceo che intimava l'abbandono delle missioni gesuite è parzialmente bruciato."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Medaglione d'Argento della Vergine di Caacupé",
          riddle: "La reliquia devozionale lasciata da padre Florian Paucke nel santuario insulare.",
          loreClue: "La reliquia devozionale lasciata da padre Florian Paucke nel santuario insulare è stata trafugata."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Barometro Aneroide della Spedizione Fluviale",
          riddle: "Strumento d'ottone con quadrante in metallo smaltato per prevedere le piene del fiume.",
          loreClue: "Il barometro da campo dell'idrologo: indispensabile per monitorare la pressione atmosferica nella gola delle cascate."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Crocifisso Scolpito in Legno di Jacarandá",
          riddle: "Scultura devozionale lignea intagliata con maestria dagli artigiani guaraní della missione.",
          loreClue: "Il crocifisso d'altare: il durissimo legno di jacarandá ha resistito miracolosamente all'umidità della foresta."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Bussola da Topografo Forestale in Cuoio",
          riddle: "Strumento magnetico d'orientamento racchiuso in una custodia a prova di umidità e pioggia.",
          loreClue: "La bussola dei ricognitori della giungla: la rosa dei venti d'argento consentiva il rilievo tra la folta vegetazione."
        }
      ];
    } else if (isLevelEightyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Trave Sospesa della Passerella Superiore",
          riddle: "Il supporto in legno duro di quebracho Colorado che sostiene l'impalcato è stato segato.",
          loreClue: "Il supporto in legno duro di quebracho Colorado che sostiene l'impalcato è stato segato."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Filo di Rinvio del Termometro a Massima e Minima",
          riddle: "Lo strumento meteorologico appeso al montante della pensilina.",
          loreClue: "Lo strumento meteorologico appeso al montante della pensilina è stato strappato."
        },
        {
          id: `lvl${id}_d3`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Contenitore Ermetico di Mappe Idrografiche",
          riddle: "Il tubo cilindrico in zinco contenente i rilievi delle secche e delle rapide.",
          loreClue: "Il tubo cilindrico in zinco contenente i rilievi delle secche e delle rapide è stato svuotato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Bauletto degli Attrezzi dei Pionieri del Parco",
          riddle: "La cassetta con martelli e zeppe per la manutenzione dei pontili.",
          loreClue: "La cassetta con martelli e zeppe per la manutenzione dei pontili è stata scassinata."
        },
        {
          id: `lvl${id}_d5`,
          x: 15.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Lo Schizzo a Matita dell'Arco dell'Iride",
          riddle: "Il rilievo ottico della diffrazione della luce tra i vapori d'acqua è stato lacerato a metà.",
          loreClue: "Il rilievo ottico della diffrazione della luce tra i vapori d'acqua è stato lacerato a metà."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Cassa Metallica Stagna per Documenti",
          riddle: "Baule con guarnizione in gomma e chiusure ermetiche a leva per salvaguardare i diari.",
          loreClue: "La cassa stagna di Bellini: preservava dalle nebbie d'acqua polverizzata le mappe del bacino del Paranà."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Machete da Giungla con Manico in Corno",
          riddle: "Lunga lama d'acciaio forgiata per farsi strada tra liane, bambù e felci giganti.",
          loreClue: "Il machete da esplorazione: la lama presenta scanalature studiate per non incastrarsi nella vegetazione compatta."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Vaso Cerimoniale in Ceramica Guaraní",
          riddle: "Recipiente in terracotta dipinto con motivi geometrici rossi e neri per offerte d'acqua.",
          loreClue: "La ceramica indigena fluviale: decorata con pigmenti di urucum e resine vegetali idrorepellenti."
        }
      ];
    } else if (isLevelEightyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Banchina d'Attracco dei Battelli a Motore",
          riddle: "I parabordi e le gallocce d'ormeggio della stazione inferiore sono stati sradicati dal cemento.",
          loreClue: "I parabordi e le gallocce d'ormeggio della stazione inferiore sono stati sradicati dal cemento."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Ancora di Fiume in Ghisa della Lancia da Salvataggio",
          riddle: "L'ancorotto a quattro marre indispensabile per mantenere la barca nelle correnti.",
          loreClue: "L'ancorotto a quattro marre indispensabile per mantenere la barca nelle correnti è scomparso."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Cofanetto delle Bussole Topografiche Guaraní",
          riddle: "La scatola di palissandro con aghi magnetici immersi in olio.",
          loreClue: "La scatola di palissandro con aghi magnetici immersi in olio è stata aperta con un piede di porco."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Carta Cifrata della Spedizione Fawcett",
          riddle: "Il foglio di taccuino attribuito al celebre esploratore con le coordinate del salto è bruciato.",
          loreClue: "Il foglio di taccuino attribuito al celebre esploratore con le coordinate del salto è bruciato."
        },
        {
          id: `lvl${id}_d5`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Segnale d'Allarme della Stazione Idrometrica",
          riddle: "La campana di bronzo che avvertiva delle piene improvvise del Paranà.",
          loreClue: "La campana di bronzo che avvertiva delle piene improvvise del Paranà è stata staccata dal giogo."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Trottola Rituale Guaraní in Legno Duro",
          riddle: "Oggetto sciamanico intagliato che veniva fatto roteare per interpretare i voleri degli spiriti.",
          loreClue: "Il manufatto rituale della tribù: le scanalature radiali producevano un ronzio sommesso durante la rotazione."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Campana di Bronzo della Missione Gesuita",
          riddle: "Campana con croce incisa fusa dai padri gesuiti per la cappella di San Ignacio Miní.",
          loreClue: "La campana settecentesca: i suoi rintocchi scandivano le giornate di lavoro e preghiera nella selva subtropicale."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Barometro Aneroide della Spedizione Fluviale",
          riddle: "Strumento d'ottone con quadrante in metallo smaltato per prevedere le piene del fiume.",
          loreClue: "Il barometro da campo dell'idrologo: indispensabile per monitorare la pressione atmosferica nella gola delle cascate."
        }
      ];
    } else if (isLevelEightySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Ponteccio di Legno davanti al Salto Bossetti",
          riddle: "L'impalcatura per i rilievi fotografici a lunga posa è stata sbilanciata e parzialmente smantellata.",
          loreClue: "L'impalcatura per i rilievi fotografici a lunga posa è stata sbilanciata e parzialmente smantellata."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Teca Sigillata dei Campioni Botanici",
          riddle: "Il contenitore di vetro rinforzato con specie sconosciute di muschi fosforescenti.",
          loreClue: "Il contenitore di vetro rinforzato con specie sconosciute di muschi fosforescenti è stato scassinato."
        },
        {
          id: `lvl${id}_d3`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Amuleti Guaraní a Forma di Giaguaro d'Ossidiana",
          riddle: "Il prezioso talismano del dio Kurupi protettore della selva è stato rubato dalla nicchia fluviale.",
          loreClue: "Il prezioso talismano del dio Kurupi protettore della selva è stato rubato dalla nicchia fluviale."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Registro delle Portate delle Due Sorelle",
          riddle: "Il bollettino idrologico che comparava i flussi delle due cascate parallele è stato macchiato d'inchiostro.",
          loreClue: "Il bollettino idrologico che comparava i flussi delle due cascate parallele è stato macchiato d'inchiostro."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Torcia a Vento da Esplorazione Notturna",
          riddle: "Il fanale in rame a pressione d'aria è stato scagliato contro la parete di roccia.",
          loreClue: "Il fanale in rame a pressione d'aria è stato scagliato contro la parete di roccia."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Crocifisso Scolpito in Legno di Jacarandá",
          riddle: "Scultura devozionale lignea intagliata con maestria dagli artigiani guaraní della missione.",
          loreClue: "Il crocifisso d'altare: il durissimo legno di jacarandá ha resistito miracolosamente all'umidità della foresta."
        },
        {
          id: `lvl${id}_d7`,
          x: 65.0,
          y: 70.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Bussola da Topografo Forestale in Cuoio",
          riddle: "Strumento magnetico d'orientamento racchiuso in una custodia a prova di umidità e pioggia.",
          loreClue: "La bussola dei ricognitori della giungla: la rosa dei venti d'argento consentiva il rilievo tra la folta vegetazione."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Cassa Metallica Stagna per Documenti",
          riddle: "Baule con guarnizione in gomma e chiusure ermetiche a leva per salvaguardare i diari.",
          loreClue: "La cassa stagna di Bellini: preservava dalle nebbie d'acqua polverizzata le mappe del bacino del Paranà."
        }
      ];
    } else if (isLevelEightySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Trappola Fotografica per la Fauna Notturna",
          riddle: "Il congegno meccanico a scatto con magnesio per immortalare il giaguaro è stato sventrato.",
          loreClue: "Il congegno meccanico a scatto con magnesio per immortalare il giaguaro è stato sventrato."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Machete Coloniale con Manico d'Osso",
          riddle: "La pesante lama d'acciaio usata per aprirsi il cammino nella fitta vegetazione è sparita dal fodero.",
          loreClue: "La pesante lama d'acciaio usata per aprirsi il cammino nella fitta vegetazione è sparita dal fodero."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassa delle Scorte di Siero Antiofidico",
          riddle: "La farmacia da campo metallica con gli antidoti contro il veleno delle vipere yarará è stata forzata.",
          loreClue: "La farmacia da campo metallica con gli antidoti contro il veleno delle vipere yarará è stata forzata."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Foglio di Erbario con la Foglia d'Oro d'Iguazú",
          riddle: "La pressa botanica con il reperto vegetale a pigmentazione aurea è stata saccheggiata.",
          loreClue: "La pressa botanica con il reperto vegetale a pigmentazione aurea è stata saccheggiata."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Cippo di Confine della Missione della Selva",
          riddle: "La pietra miliare che delimitava la riduzione gesuita.",
          loreClue: "La pietra miliare che delimitava la riduzione gesuita è stata rovesciata nel fango."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Machete da Giungla con Manico in Corno",
          riddle: "Lunga lama d'acciaio forgiata per farsi strada tra liane, bambù e felci giganti.",
          loreClue: "Il machete da esplorazione: la lama presenta scanalature studiate per non incastrarsi nella vegetazione compatta."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Vaso Cerimoniale in Ceramica Guaraní",
          riddle: "Recipiente in terracotta dipinto con motivi geometrici rossi e neri per offerte d'acqua.",
          loreClue: "La ceramica indigena fluviale: decorata con pigmenti di urucum e resine vegetali idrorepellenti."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Trottola Rituale Guaraní in Legno Duro",
          riddle: "Oggetto sciamanico intagliato che veniva fatto roteare per interpretare i voleri degli spiriti.",
          loreClue: "Il manufatto rituale della tribù: le scanalature radiali producevano un ronzio sommesso durante la rotazione."
        }
      ];
    } else if (isLevelEightyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Canoa Tradizionale Monossile Guaraní",
          riddle: "L'imbarcazione ricavata da un unico tronco di timbó ormeggiata sulla riva calma è stata manomessa.",
          loreClue: "L'imbarcazione ricavata da un unico tronco di timbó ormeggiata sulla riva calma è stata manomessa."
        },
        {
          id: `lvl${id}_d2`,
          x: 14.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Pagaia Rituale Intarsiata di Madreperla",
          riddle: "Il remo sacro usato durante le cerimonie delle piene è stato rubato dalla prua.",
          loreClue: "Il remo sacro usato durante le cerimonie delle piene è stato rubato dalla prua."
        },
        {
          id: `lvl${id}_d3`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Forziere di Rifornimento della Spedizione Bellini",
          riddle: "La cassa metallica con viveri ed esplosivi da scavo mostra le cerniere strappate.",
          loreClue: "La cassa metallica con viveri ed esplosivi da scavo mostra le cerniere strappate."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo delle Correnti del Delta Superiore",
          riddle: "La carta topografica con le secche e i canali navigabili verso la cascata.",
          loreClue: "La carta topografica con le secche e i canali navigabili verso la cascata è stata tagliata con un pugnale."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Palo d'Idrometro Graduato del Porto di Salto",
          riddle: "L'asta di misurazione del livello fluviale è stata scalzata e spezzata.",
          loreClue: "L'asta di misurazione del livello fluviale è stata scalzata e spezzata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Campana di Bronzo della Missione Gesuita",
          riddle: "Campana con croce incisa fusa dai padri gesuiti per la cappella di San Ignacio Miní.",
          loreClue: "La campana settecentesca: i suoi rintocchi scandivano le giornate di lavoro e preghiera nella selva subtropicale."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Barometro Aneroide della Spedizione Fluviale",
          riddle: "Strumento d'ottone con quadrante in metallo smaltato per prevedere le piene del fiume.",
          loreClue: "Il barometro da campo dell'idrologo: indispensabile per monitorare la pressione atmosferica nella gola delle cascate."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Crocifisso Scolpito in Legno di Jacarandá",
          riddle: "Scultura devozionale lignea intagliata con maestria dagli artigiani guaraní della missione.",
          loreClue: "Il crocifisso d'altare: il durissimo legno di jacarandá ha resistito miracolosamente all'umidità della foresta."
        }
      ];
    } else if (isLevelEightyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Arco in Pietra Arenaria Rossa della Riduzione Gesuita",
          riddle: "Il portale monumentale della chiesa diroccata sepolta dalle liane ha la chiave di volta crepata.",
          loreClue: "Il portale monumentale della chiesa diroccata sepolta dalle liane ha la chiave di volta crepata."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Campana di Bronzo Fusa nelle Fonderie delle Missioni",
          riddle: "La pesante campana liturgica del 1720 con iscrizioni in latino e guaraní è stata abbattuta.",
          loreClue: "La pesante campana liturgica del 1720 con iscrizioni in latino e guaraní è stata abbattuta."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Calice Liturgico d'Oro con Rubini del Paraguay",
          riddle: "Il sacro vaso nascosto dai padri prima dell'espulsione.",
          loreClue: "Il sacro vaso nascosto dai padri prima dell'espulsione è stato asportato dal tabernacolo."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cripta Sotto l'Altare Maggiore Scassinata",
          riddle: "I gradini d'accesso al sepolcro dei padri missionari mostrano le lastre sollevate con argani.",
          loreClue: "I gradini d'accesso al sepolcro dei padri missionari mostrano le lastre sollevate con argani."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Manoscritto del Dizionario Spagnolo-Guaraní di Ruiz de Montoya",
          riddle: "Il volume compilato a mano con la traduzione dei miti sulla città nascosta è lacerato.",
          loreClue: "Il volume compilato a mano con la traduzione dei miti sulla città nascosta è lacerato."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Bussola da Topografo Forestale in Cuoio",
          riddle: "Strumento magnetico d'orientamento racchiuso in una custodia a prova di umidità e pioggia.",
          loreClue: "La bussola dei ricognitori della giungla: la rosa dei venti d'argento consentiva il rilievo tra la folta vegetazione."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Cassa Metallica Stagna per Documenti",
          riddle: "Baule con guarnizione in gomma e chiusure ermetiche a leva per salvaguardare i diari.",
          loreClue: "La cassa stagna di Bellini: preservava dalle nebbie d'acqua polverizzata le mappe del bacino del Paranà."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Machete da Giungla con Manico in Corno",
          riddle: "Lunga lama d'acciaio forgiata per farsi strada tra liane, bambù e felci giganti.",
          loreClue: "Il machete da esplorazione: la lama presenta scanalature studiate per non incastrarsi nella vegetazione compatta."
        }
      ];
    } else if (isLevelNinety) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "IL NONO SIGILLO: Il Sole d'Oro dei Guaraní con Smeraldo di Naipú",
          riddle: "La croce d'argento e pietre fluviali forgiata nel cuore delle cascate di Iguazú.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 9: Il radioso disco solare in oro massiccio e smeraldo amazzonico! Trovato nella grotta segreta dietro la cortina della Garganta del Diablo, orienta l'azimut direttamente verso l'altopiano delle Linee di Nazca."
        },
        {
          id: `lvl${id}_d2`,
          x: 80.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Naos Ipogea Dietro il Velo delle Cascate",
          riddle: "Il santuario rupestre celato dal ruggito delle acque per secoli è stato profanato dai cospiratori.",
          loreClue: "Il santuario rupestre celato dal ruggito delle acque per secoli è stato profanato dai cospiratori."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Stele Basaltica con la Mappa Stellare del Sudamerica",
          riddle: "La lastra millenaria con le costellazioni della Croce del Sud che guidano a Machu Picchu è spezzata.",
          loreClue: "La lastra millenaria con le costellazioni della Croce del Sud che guidano a Machu Picchu è spezzata."
        },
        {
          id: `lvl${id}_d4`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Occhio della Mano Oscura Inciso sul Basalto",
          riddle: "Il simbolo necromantico della confraternita è stato dipinto a sangue sulla parete della cripta.",
          loreClue: "Il simbolo necromantico della confraternita è stato dipinto a sangue sulla parete della cripta."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere Ceremoniale in Rame Nativo",
          riddle: "Il tripode sacro per i fumi d'incenso d'araucaria è stato capovolto sul pavimento allagato.",
          loreClue: "Il tripode sacro per i fumi d'incenso d'araucaria è stato capovolto sul pavimento allagato."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Cerimoniale in Ceramica Guaraní",
          riddle: "Recipiente in terracotta dipinto con motivi geometrici rossi e neri per offerte d'acqua.",
          loreClue: "La ceramica indigena fluviale: decorata con pigmenti di urucum e resine vegetali idrorepellenti."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Trottola Rituale Guaraní in Legno Duro",
          riddle: "Oggetto sciamanico intagliato che veniva fatto roteare per interpretare i voleri degli spiriti.",
          loreClue: "Il manufatto rituale della tribù: le scanalature radiali producevano un ronzio sommesso durante la rotazione."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Campana di Bronzo della Missione Gesuita",
          riddle: "Campana con croce incisa fusa dai padri gesuiti per la cappella di San Ignacio Miní.",
          loreClue: "La campana settecentesca: i suoi rintocchi scandivano le giornate di lavoro e preghiera nella selva subtropicale."
        }
      ];
    } else if (isLevelNinetyOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 16.79,
          y: 8.87,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Becco del Colibrì Tracciato sulla Pampa",
          riddle: "La linea retta di sessanta metri che forma il becco del geoglifo è stata solcata da pneumatici fuoristrada.",
          loreClue: "La linea retta di sessanta metri che forma il becco del geoglifo è stata solcata da pneumatici fuoristrada."
        },
        {
          id: `lvl${id}_d2`,
          x: 24.62,
          y: 78.18,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Teodolite Aerea della Spedizione Reiche",
          riddle: "Lo strumento trigonometrico montato sulla torretta di osservazione per mappare le ali del colibrì è sparito.",
          loreClue: "Lo strumento trigonometrico montato sulla torretta di osservazione per mappare le ali del colibrì è sparito."
        },
        {
          id: `lvl${id}_d3`,
          x: 29.54,
          y: 22.1,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Paletto Guida in Legno di Huarango",
          riddle: "Il picchetto ligneo millenario usato dai sacerdoti Nazca per tracciare le curve dell'uccello sacro.",
          loreClue: "Il picchetto ligneo millenario usato dai sacerdoti Nazca per tracciare le curve dell'uccello sacro è stato asportato."
        },
        {
          id: `lvl${id}_d4`,
          x: 41.29,
          y: 11.27,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Teca di Protezione dei Reperti di Superficie",
          riddle: "Il contenitore vetrato contenente frammenti ceramici policromi trovati sulla figura.",
          loreClue: "Il contenitore vetrato contenente frammenti ceramici policromi trovati sulla figura è stato scassinato."
        },
        {
          id: `lvl${id}_d5`,
          x: 55.88,
          y: 53.68,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Fotografia Aerea di Maria Reiche del 1946",
          riddle: "La storica lastra fotografica in bianco e nero che rivelò il disegno nella sua interezza è strappata a metà.",
          loreClue: "La storica lastra fotografica in bianco e nero che rivelò il disegno nella sua interezza è strappata a metà."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Palina Topografica in Legno di Huarango",
          riddle: "Asta di legno durissimo piantata nel terreno gessoso come riferimento per le linee rette.",
          loreClue: "Il picchetto di huarango: gli astronomi Nazca usavano questi rami incorruttibili per tracciare le lunghe rette celesti."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Maschera Nasale d'Oro a Baffi Felini",
          riddle: "Lamina metallica lavorata a sbalzo che copriva il naso e le guance del sacerdote.",
          loreClue: "L'ornamento cerimoniale in oro puro: trasformava simbolicamente l'officiante nel sacro giaguaro delle pampas."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Setaccio Archeologico per Ghiaie di Superficie",
          riddle: "Rete a maglie d'ottone con telaio ligneo impiegata per separare i ciottoli ossidati dal gesso.",
          loreClue: "Il vaglio della squadra di scavo: permetteva di scoprire frammenti di ossidiana e carboni millenari."
        }
      ];
    } else if (isLevelNinetyTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Apertura Alare del Condor sulle Pietre di Ferro",
          riddle: "Le pietre ossidate scure rimosse per far emergere il gesso chiaro sottostante sono state ricollocate abusivamente.",
          loreClue: "Le pietre ossidate scure rimosse per far emergere il gesso chiaro sottostante sono state ricollocate abusivamente."
        },
        {
          id: `lvl${id}_d2`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Tavoletta Astronomica della Costellazione dell'Aquila",
          riddle: "La lastrina in ceramica con i punti d'allineamento stellare del solstizio d'inverno.",
          loreClue: "La lastrina in ceramica con i punti d'allineamento stellare del solstizio d'inverno è stata spezzata."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Maschera d'Oro del Sacerdote Alato Nazca",
          riddle: "Il pettorale cerimoniale con baffi felini e piume di condor.",
          loreClue: "Il pettorale cerimoniale con baffi felini e piume di condor è scomparso dal laboratorio da campo."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Recinzione Metallica di Tutela Archeologica",
          riddle: "La grata posta a salvaguardia del sentiero rituale che attraversa il corpo del volatile è stata tranciata.",
          loreClue: "La grata posta a salvaguardia del sentiero rituale che attraversa il corpo del volatile è stata tranciata."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Marchio Bruciato della Mano Oscura nel Terreno",
          riddle: "Una sagoma triangolare di pece e fosforo è stata impressa a caldo sulla coda del condor.",
          loreClue: "Una sagoma triangolare di pece e fosforo è stata impressa a caldo sulla coda del condor."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Diapason di Taratura Acustica",
          riddle: "Forchetta d'acciaio che emette una nota pura per verificare la risonanza dei vani sotterranei.",
          loreClue: "Lo strumento acustico di Bellini: impiegato per studiare le proprietà di eco delle gallerie d'irrigazione puquios."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Piccolo Idolo in Giada del Dio Kon",
          riddle: "Amuletto verde scolpito a figura antropomorfa protettore delle acque sotterranee.",
          loreClue: "L'idolo propiziatorio: veniva sepolto nei canali idraulici per garantire la fertilità delle valli aride."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Vaso a Doppio Beccuccio con Motivo del Pesce",
          riddle: "Ceramica policroma tipica della cultura Nazca con ansa a ponte e colori vivacissimi.",
          loreClue: "Il vaso cerimoniale da libagione: i pigmenti minerali brillano ancora dopo millecinquecento anni di aridità."
        }
      ];
    } else if (isLevelNinetyThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 88.04,
          y: 75.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Coda a Spirale Aurea della Scimmia",
          riddle: "Il cerchio concentrico perfetto che si avvolge sulla pampa presenta solchi scavati da zappe clandestine.",
          loreClue: "Il cerchio concentrico perfetto che si avvolge sulla pampa presenta solchi scavati da zappe clandestine."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Cerimoniale con la Scimmia a Nove Dita",
          riddle: "La brocca a doppio becco con ponte raffigurante l'animale sacro dell'Amazzonia è stata rubata.",
          loreClue: "La brocca a doppio becco con ponte raffigurante l'animale sacro dell'Amazzonia è stata rubata."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 41.96,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassetta degli Strumenti Georadar",
          riddle: "Lo scanner a microonde per mappare le cavità sotterranee sotto la pampa è stato forzato.",
          loreClue: "Lo scanner a microonde per mappare le cavità sotterranee sotto la pampa è stato forzato."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Diario di Rilievo dei Solstizi di Paul Kosok",
          riddle: "Il quaderno dello scopritore del calendario astronomico reca pagine strappate sugli allineamenti.",
          loreClue: "Il quaderno dello scopritore del calendario astronomico reca pagine strappate sugli allineamenti."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Palina Topografica a Riflettore Laser",
          riddle: "Il prisma ottico riflettente piantato al centro della spirale è stato preso a sassate.",
          loreClue: "Il prisma ottico riflettente piantato al centro della spirale è stato preso a sassate."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Metro a Nastro in Acciaio della Spedizione Reiche",
          riddle: "Rotella metrica metallica graduata adoperata da Maria Reiche per misurare i geoglifi.",
          loreClue: "Il metro a nastro della matematica tedesca: fondamentale per calcolare il disegno simmetrico del Colibrì."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Manto Funerario in Lana di Vigogna",
          riddle: "Prezioso tessuto policromo decorato con figure volanti e sacerdoti alati del deserto.",
          loreClue: "Il frammento di paramento funerario: la filatura finissima dimostra l'eccellenza dei tessitori dell'altopiano."
        },
        {
          id: `lvl${id}_d8`,
          x: 35.0,
          y: 70.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Palina Topografica in Legno di Huarango",
          riddle: "Asta di legno durissimo piantata nel terreno gessoso come riferimento per le linee rette.",
          loreClue: "Il picchetto di huarango: gli astronomi Nazca usavano questi rami incorruttibili per tracciare le lunghe rette celesti."
        }
      ];
    } else if (isLevelNinetyFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Pedipalpo Destro del Ragno Gigante",
          riddle: "Il sottilissimo canale che rappresenta l'organo riproduttivo dell'aracnide è stato calpestato e sfigurato.",
          loreClue: "Il sottilissimo canale che rappresenta l'organo riproduttivo dell'aracnide è stato calpestato e sfigurato."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Talismano d'Ambra con Insetto Fossile",
          riddle: "L'amuleto rituale che i sacerdoti portavano al collo durante i riti propiziatori della pioggia è sparito.",
          loreClue: "L'amuleto rituale che i sacerdoti portavano al collo durante i riti propiziatori della pioggia è sparito."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.0,
          y: 37.95,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Gabbia Protettiva dell'Anemometro",
          riddle: "La stazione del vento che misura l'effetto termico protettivo della pampa è stata scardinata.",
          loreClue: "La stazione del vento che misura l'effetto termico protettivo della pampa è stata scardinata."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo della Cintura di Orione di Bellini",
          riddle: "La tavola comparativa tra le zampe del ragno e la nebulosa di Orione è stata lacerata.",
          loreClue: "La tavola comparativa tra le zampe del ragno e la nebulosa di Orione è stata lacerata."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lanterna a Vetri Colorati della Postazione Notturna",
          riddle: "Il faro a filtri blu impiegato per illuminare le linee di notte è andato distrutto.",
          loreClue: "Il faro a filtri blu impiegato per illuminare le linee di notte è andato distrutto."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Maschera Nasale d'Oro a Baffi Felini",
          riddle: "Lamina metallica lavorata a sbalzo che copriva il naso e le guance del sacerdote.",
          loreClue: "L'ornamento cerimoniale in oro puro: trasformava simbolicamente l'officiante nel sacro giaguaro delle pampas."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Setaccio Archeologico per Ghiaie di Superficie",
          riddle: "Rete a maglie d'ottone con telaio ligneo impiegata per separare i ciottoli ossidati dal gesso.",
          loreClue: "Il vaglio della squadra di scavo: permetteva di scoprire frammenti di ossidiana e carboni millenari."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Diapason di Taratura Acustica",
          riddle: "Forchetta d'acciaio che emette una nota pura per verificare la risonanza dei vani sotterranei.",
          loreClue: "Lo strumento acustico di Bellini: impiegato per studiare le proprietà di eco delle gallerie d'irrigazione puquios."
        }
      ];
    } else if (isLevelNinetyFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Gli Occhi Grandi dell'Uomo-Civetta / Astronauta",
          riddle: "I cerchi concentrici che formano lo sguardo della figura antropomorfa sulla collina mostrano sbrecciature.",
          loreClue: "I cerchi concentrici che formano lo sguardo della figura antropomorfa sulla collina mostrano sbrecciature."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.08,
          y: 14.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Mano Alzata in Saluto Cosmico",
          riddle: "Il braccio sollevato verso il cielo stellato presenta pietre rotolate giù dal pendio.",
          loreClue: "Il braccio sollevato verso il cielo stellato presenta pietre rotolate giù dal pendio."
        },
        {
          id: `lvl${id}_d3`,
          x: 14.08,
          y: 44.03,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Lo Scrigno da Campo del Professore Bellini",
          riddle: "La valigetta in pelle con i lucidi trasparenti delle costellazioni andine.",
          loreClue: "La valigetta in pelle con i lucidi trasparenti delle costellazioni andine è stata aperta a forza."
        },
        {
          id: `lvl${id}_d4`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Pettorale d'Argento con Figura Sciamanica",
          riddle: "La lamina sbalzata rinvenuta alla base della collina.",
          loreClue: "La lamina sbalzata rinvenuta alla base della collina è stata sottratta dall'espositore da campo."
        },
        {
          id: `lvl${id}_d5`,
          x: 86.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Calcolo Trigonometrico dell'Inclinazione del Pendio",
          riddle: "Il foglio millimetrato con le quote dell'anamorfosi prospettica è bruciacchiato.",
          loreClue: "Il foglio millimetrato con le quote dell'anamorfosi prospettica è bruciacchiato."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Piccolo Idolo in Giada del Dio Kon",
          riddle: "Amuletto verde scolpito a figura antropomorfa protettore delle acque sotterranee.",
          loreClue: "L'idolo propiziatorio: veniva sepolto nei canali idraulici per garantire la fertilità delle valli aride."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Vaso a Doppio Beccuccio con Motivo del Pesce",
          riddle: "Ceramica policroma tipica della cultura Nazca con ansa a ponte e colori vivacissimi.",
          loreClue: "Il vaso cerimoniale da libagione: i pigmenti minerali brillano ancora dopo millecinquecento anni di aridità."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Metro a Nastro in Acciaio della Spedizione Reiche",
          riddle: "Rotella metrica metallica graduata adoperata da Maria Reiche per misurare i geoglifi.",
          loreClue: "Il metro a nastro della matematica tedesca: fondamentale per calcolare il disegno simmetrico del Colibrì."
        }
      ];
    } else if (isLevelNinetySix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Pista Trapezoidale Maggiore Lunga Due Chilometri",
          riddle: "Il vertice della gigantesca rampa cerimoniale.",
          loreClue: "Il vertice della gigantesca rampa cerimoniale è stato tagliato da una trincea abusiva."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Bussola Topografica a Traguardo Prismatico",
          riddle: "Lo strumento professionale per verificare l'azimut del sorgere delle Pleiadi.",
          loreClue: "Lo strumento professionale per verificare l'azimut del sorgere delle Pleiadi è scomparso dal treppiede."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Cancello di Sbarramento del Sentiero Protetto",
          riddle: "La sbarra in tubolari d'acciaio con i cartelli di divieto d'accesso è stata piegata con un verricello.",
          loreClue: "La sbarra in tubolari d'acciaio con i cartelli di divieto d'accesso è stata piegata con un verricello."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Documento di Comparazione con i Viali di Teotihuacan",
          riddle: "Lo studio comparativo sulle proporzioni geometriche dei viali cerimoniali è strappato.",
          loreClue: "Lo studio comparativo sulle proporzioni geometriche dei viali cerimoniali è strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Bandierina Segnaletica a Scacchi Gialli e Neri",
          riddle: "Il picchetto di orientamento aereo per i sorvoli dei rilievi.",
          loreClue: "Il picchetto di orientamento aereo per i sorvoli dei rilievi è stato spezzato a terra."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Manto Funerario in Lana di Vigogna",
          riddle: "Prezioso tessuto policromo decorato con figure volanti e sacerdoti alati del deserto.",
          loreClue: "Il frammento di paramento funerario: la filatura finissima dimostra l'eccellenza dei tessitori dell'altopiano."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Palina Topografica in Legno di Huarango",
          riddle: "Asta di legno durissimo piantata nel terreno gessoso come riferimento per le linee rette.",
          loreClue: "Il picchetto di huarango: gli astronomi Nazca usavano questi rami incorruttibili per tracciare le lunghe rette celesti."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Maschera Nasale d'Oro a Baffi Felini",
          riddle: "Lamina metallica lavorata a sbalzo che copriva il naso e le guance del sacerdote.",
          loreClue: "L'ornamento cerimoniale in oro puro: trasformava simbolicamente l'officiante nel sacro giaguaro delle pampas."
        }
      ];
    } else if (isLevelNinetySeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Pozzi a Spirale in Pietra di Fiume di Cantalloc",
          riddle: "I ciottoli arrotondati che formano la rampa a spirale per scendere alla falda idrica sono stati smossi.",
          loreClue: "I ciottoli arrotondati che formano la rampa a spirale per scendere alla falda idrica sono stati smossi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Coperchio in Legno di Huarango della Condotta",
          riddle: "Il pesante trave che copre il canale sotterraneo per limitare l'evaporazione è stato sollevato.",
          loreClue: "Il pesante trave che copre il canale sotterraneo per limitare l'evaporazione è stato sollevato."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Votivo con la Divinità dell'Acqua e del Mais",
          riddle: "La ceramica fine deposta come offerta nel fondo del pozzo artesiano è stata rubata.",
          loreClue: "La ceramica fine deposta come offerta nel fondo del pozzo artesiano è stata rubata."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Mappa delle Falde Acquifere Sub-alveo",
          riddle: "Il disegno idraulico che spiega come i Nazca irrigavano il deserto più arido del mondo è sbiadito e strappato.",
          loreClue: "Il disegno idraulico che spiega come i Nazca irrigavano il deserto più arido del mondo è sbiadito e strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Fune con Secchio d'Ottone per il Pescaggio",
          riddle: "La carrucola con il cavo per analizzare la salinità dell'acqua sorgiva è stata gettata nel fondo.",
          loreClue: "La carrucola con il cavo per analizzare la salinità dell'acqua sorgiva è stata gettata nel fondo."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Setaccio Archeologico per Ghiaie di Superficie",
          riddle: "Rete a maglie d'ottone con telaio ligneo impiegata per separare i ciottoli ossidati dal gesso.",
          loreClue: "Il vaglio della squadra di scavo: permetteva di scoprire frammenti di ossidiana e carboni millenari."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Diapason di Taratura Acustica",
          riddle: "Forchetta d'acciaio che emette una nota pura per verificare la risonanza dei vani sotterranei.",
          loreClue: "Lo strumento acustico di Bellini: impiegato per studiare le proprietà di eco delle gallerie d'irrigazione puquios."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Piccolo Idolo in Giada del Dio Kon",
          riddle: "Amuletto verde scolpito a figura antropomorfa protettore delle acque sotterranee.",
          loreClue: "L'idolo propiziatorio: veniva sepolto nei canali idraulici per garantire la fertilità delle valli aride."
        }
      ];
    } else if (isLevelNinetyEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Grande Piramide d'Argilla Cruda di Cahuachi",
          riddle: "La facciata a terrazze in mattoni adobe del centro cerimoniale presenta crolli provocati da picconi.",
          loreClue: "La facciata a terrazze in mattoni adobe del centro cerimoniale presenta crolli provocati da picconi."
        },
        {
          id: `lvl${id}_d2`,
          x: 14.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Palo Totemico del Tempio a Gradoni",
          riddle: "Il tronco intagliato con figure di spiriti guardiani del santuario è stato segato alla base.",
          loreClue: "Il tronco intagliato con figure di spiriti guardiani del santuario è stato segato alla base."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Porta della Cella delle Vestali del Sole",
          riddle: "La paratia in canne intrecciate che custodiva le offerte votive è stata sventrata.",
          loreClue: "La paratia in canne intrecciate che custodiva le offerte votive è stata sventrata."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Mantello Funerario Nazca con Centinaia di Figure",
          riddle: "Il tessuto policromo in lana di vigogna e cotone con guerrieri alati.",
          loreClue: "Il tessuto policromo in lana di vigogna e cotone con guerrieri alati è stato asportato."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Registro degli Scavi di Helaine Silverman",
          riddle: "La cartella con i rilievi stratigrafici dei sacrifici rituali è stata dispersa nel vento.",
          loreClue: "La cartella con i rilievi stratigrafici dei sacrifici rituali è stata dispersa nel vento."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Vaso a Doppio Beccuccio con Motivo del Pesce",
          riddle: "Ceramica policroma tipica della cultura Nazca con ansa a ponte e colori vivacissimi.",
          loreClue: "Il vaso cerimoniale da libagione: i pigmenti minerali brillano ancora dopo millecinquecento anni di aridità."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Metro a Nastro in Acciaio della Spedizione Reiche",
          riddle: "Rotella metrica metallica graduata adoperata da Maria Reiche per misurare i geoglifi.",
          loreClue: "Il metro a nastro della matematica tedesca: fondamentale per calcolare il disegno simmetrico del Colibrì."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Manto Funerario in Lana di Vigogna",
          riddle: "Prezioso tessuto policromo decorato con figure volanti e sacerdoti alati del deserto.",
          loreClue: "Il frammento di paramento funerario: la filatura finissima dimostra l'eccellenza dei tessitori dell'altopiano."
        }
      ];
    } else if (isLevelNinetyNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Tomba Ipogea in Mattoni di Fango di Chauchilla",
          riddle: "Il tetto in travi di huarango che copriva la tomba aperta nel deserto è stato parzialmente sfondato.",
          loreClue: "Il tetto in travi di huarango che copriva la tomba aperta nel deserto è stato parzialmente sfondato."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Mummia con le Lunghe Trecce di Capelli Umani",
          riddle: "La figura seduta in posizione fetale rivolta a est ha il bendaggio di cotone strappato sul petto.",
          loreClue: "La figura seduta in posizione fetale rivolta a est ha il bendaggio di cotone strappato sul petto."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Pettorale d'Oro con Teste Trofeo Sbalzate",
          riddle: "Il prezioso collare che identificava il guerriero d'élite.",
          loreClue: "Il prezioso collare che identificava il guerriero d'élite è stato trafugato dal sarcofago."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Grata di Protezione dalle Tempeste di Sabbia",
          riddle: "La rete metallica posta contro i saccheggi notturni.",
          loreClue: "La rete metallica posta contro i saccheggi notturni è stata tagliata con cesoie."
        },
        {
          id: `lvl${id}_d5`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lucerna a Olio Animale per i Riti Funerari",
          riddle: "Il piccolo coccio con tracce di grasso sacro è stato calpestato e ridotto in polvere.",
          loreClue: "Il piccolo coccio con tracce di grasso sacro è stato calpestato e ridotto in polvere."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Palina Topografica in Legno di Huarango",
          riddle: "Asta di legno durissimo piantata nel terreno gessoso come riferimento per le linee rette.",
          loreClue: "Il picchetto di huarango: gli astronomi Nazca usavano questi rami incorruttibili per tracciare le lunghe rette celesti."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Maschera Nasale d'Oro a Baffi Felini",
          riddle: "Lamina metallica lavorata a sbalzo che copriva il naso e le guance del sacerdote.",
          loreClue: "L'ornamento cerimoniale in oro puro: trasformava simbolicamente l'officiante nel sacro giaguaro delle pampas."
        },
        {
          id: `lvl${id}_d8`,
          x: 35.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Setaccio Archeologico per Ghiaie di Superficie",
          riddle: "Rete a maglie d'ottone con telaio ligneo impiegata per separare i ciottoli ossidati dal gesso.",
          loreClue: "Il vaglio della squadra di scavo: permetteva di scoprire frammenti di ossidiana e carboni millenari."
        }
      ];
    } else if (isLevelOneHundred) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.0,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "IL DECIMO SIGILLO: Il Condor d'Oro di Nazca con Occhio di Lapislazzuli",
          riddle: "La sublime scultura aurea del sacro condor andino con pupille di lapislazzuli.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 10: La sublime statua del sacro condor andino in oro zecchino e lapislazzuli! I suoi artigli tengono la mappa celeste che indica le vette inviolate di Machu Picchu."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cripta Sotto il Centro di Convergenza delle Linee",
          riddle: "Il santuario sotterraneo dove convergono oltre quaranta linee della pampa è stato forzato.",
          loreClue: "Il santuario sotterraneo dove convergono oltre quaranta linee della pampa è stato forzato."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lastra di Diorite con il Calendario delle Costellazioni Andine",
          riddle: "La monumentale tavoletta che calcola la precessione degli equinozi è spezzata a metà.",
          loreClue: "La monumentale tavoletta che calcola la precessione degli equinozi è spezzata a metà."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Finale dell'Eclissi Solare",
          riddle: "La sublime scultura aurea del sacro condor andino con pupille di lapislazzuli (Elemento 2).",
          loreClue: "L'emblema del sole nero che preannuncia il risveglio delle forze oscure a Paititi è inciso sulla pietra."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere Cerimoniale d'Argento Massiccio",
          riddle: "Il grande vaso per le offerte aromatiche dei sacerdoti Nazca.",
          loreClue: "Il grande vaso per le offerte aromatiche dei sacerdoti Nazca è stato rovesciato."
        },
        {
          id: `lvl${id}_d6`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Diapason di Taratura Acustica",
          riddle: "Forchetta d'acciaio che emette una nota pura per verificare la risonanza dei vani sotterranei.",
          loreClue: "Lo strumento acustico di Bellini: impiegato per studiare le proprietà di eco delle gallerie d'irrigazione puquios."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Piccolo Idolo in Giada del Dio Kon",
          riddle: "Amuletto verde scolpito a figura antropomorfa protettore delle acque sotterranee.",
          loreClue: "L'idolo propiziatorio: veniva sepolto nei canali idraulici per garantire la fertilità delle valli aride."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Vaso a Doppio Beccuccio con Motivo del Pesce",
          riddle: "Ceramica policroma tipica della cultura Nazca con ansa a ponte e colori vivacissimi.",
          loreClue: "Il vaso cerimoniale da libagione: i pigmenti minerali brillano ancora dopo millecinquecento anni di aridità."
        }
      ];
    } else if (isLevelOneHundredOne) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.88,
          y: 80.8,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Architrave Monolitico di Intipunku",
          riddle: "Il grande blocco di granito bianco del Portale del Sole presenta profonde scalfiture di scalpello da cava.",
          loreClue: "Il grande blocco di granito bianco del Portale del Sole presenta profonde scalfiture di scalpello da cava."
        },
        {
          id: `lvl${id}_d2`,
          x: 86.58,
          y: 29.63,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Targa d'Avvistamento della Spedizione Bingham",
          riddle: "Il cartello in ottone del 1911 che indicava la vista panoramica.",
          loreClue: "Il cartello in ottone del 1911 che indicava la vista panoramica è stato staccato dal pilastro."
        },
        {
          id: `lvl${id}_d3`,
          x: 72.96,
          y: 40.35,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Focolare Cerimoniale delle Sentinelle Inca",
          riddle: "Il braciere in pietra dove veniva acceso il fuoco di segnalazione equinoziale.",
          loreClue: "Il braciere in pietra dove veniva acceso il fuoco di segnalazione equinoziale è stato rovesciato."
        },
        {
          id: `lvl${id}_d4`,
          x: 53.83,
          y: 59.71,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassa degli Attrezzi dei Restauri Archeologici",
          riddle: "La cassa di legno con cunei di bronzo e corde di canapa per il consolidamento dei muri è stata forzata.",
          loreClue: "La cassa di legno con cunei di bronzo e corde di canapa per il consolidamento dei muri è stata forzata."
        },
        {
          id: `lvl${id}_d5`,
          x: 74.79,
          y: 10.66,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Amuleto di Turchese del Messaggero Chasqui",
          riddle: "Il ciondolo rituale che identificava i corridori imperiali.",
          loreClue: "Il ciondolo rituale che identificava i corridori imperiali è stato trafugato dalla nicchia del valico."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Quipu Imperiale con Nodi di Corda",
          riddle: "Sistema di cordicelle colorate e nodi calibrati per registrare tributi e censimenti andini.",
          loreClue: "Il quipu di corte: i fili di cotone e alpaca registravano il passaggio dei corrieri chasqui verso la capitale."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Macchina Fotografica a Soffietto Kodak del 1911",
          riddle: "Apparecchio fotografico d'epoca montato su cavalletto della Yale Peruvian Expedition.",
          loreClue: "La macchina fotografica di Hiram Bingham: scattò le storiche lastre che rivelarono Machu Picchu al mondo."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Pettorale Sacerdotale con Lapislazzuli",
          riddle: "Lamina d'argento e pietre azzurre indossata dal sommo sacerdote Willaq Umu.",
          loreClue: "Il pettorale astronomico: le dodici pietre corrispondono alle dodici lune del calendario agricolo incaico."
        }
      ];
    } else if (isLevelOneHundredTwo) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Finestra Solstiziale del Torreón",
          riddle: "L'apertura trapezoidale orientata al solstizio d'inverno ha un blocco di granito levigato scheggiato.",
          loreClue: "L'apertura trapezoidale orientata al solstizio d'inverno ha un blocco di granito levigato scheggiato."
        },
        {
          id: `lvl${id}_d2`,
          x: 86.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "L'Altare della Cripta Reale Sotto il Tempio",
          riddle: "La roccia naturale sagomata all'interno della grotta funebre mostra incisioni clandestine recenti.",
          loreClue: "La roccia naturale sagomata all'interno della grotta funebre mostra incisioni clandestine recenti."
        },
        {
          id: `lvl${id}_d3`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Maschera d'Oro dell'Inca con Raggi Solari",
          riddle: "La grandiosa lamina votiva che decorava la parete interna del tempio.",
          loreClue: "La grandiosa lamina votiva che decorava la parete interna del tempio è scomparsa dal reliquiario."
        },
        {
          id: `lvl${id}_d4`,
          x: 18.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Grata dell'Ipogeo dei Sacerdoti del Sole",
          riddle: "La recinzione in ferro a tutela della tomba monumentale.",
          loreClue: "La recinzione in ferro a tutela della tomba monumentale è stata divelta con leve metalliche."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "I Rilievi Fotografici Spettrografici di Bellini",
          riddle: "I fogli trasparenti con le linee di rifrazione della luce solare tra i conci sono stati bruciacchiati.",
          loreClue: "I fogli trasparenti con le linee di rifrazione della luce solare tra i conci sono stati bruciacchiati."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Fuso in Osso per Filare la Lana d'Alpaca",
          riddle: "Strumento tessile tradizionale con volano d'arenaria levigata ancora avvolto di filato.",
          loreClue: "Il fuso delle acllas: le vergini del Sole filavano vesti purissime destinate esclusivamente alla famiglia reale."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Nicchia Trapezoidale della Muraglia Sacra",
          riddle: "Incavo ricavato nel muro a secco per accogliere idoli e offerte votive private.",
          loreClue: "La tipica nicchia architettonica incaica: la forma rastremata verso l'alto conferiva eccezionale resistenza sismica."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Cuneo in Bronzo per il Taglio del Granito",
          riddle: "Scalpello in bronzo e rame adoperato dai tagliapietre incaici per sagomare i megaliti.",
          loreClue: "L'attrezzo litico dell'architetto imperiale: permetteva incastri così precisi da non lasciare passare una lama."
        }
      ];
    } else if (isLevelOneHundredThree) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Prisma Monolitico dell'Intihuatana",
          riddle: "Il leggendario fittone di granito dove l'Inca 'legava il sole' mostra un angolo sbrecciato.",
          loreClue: "Il leggendario fittone di granito dove l'Inca 'legava il sole' mostra un angolo sbrecciato."
        },
        {
          id: `lvl${id}_d2`,
          x: 68.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Disco Solare in Rame con la Croce del Sud",
          riddle: "La piastra gnomonica per l'osservazione delle costellazioni.",
          loreClue: "La piastra gnomonica per l'osservazione delle costellazioni è stata asportata dal podio."
        },
        {
          id: `lvl${id}_d3`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Recinzione a Corda Intrecciata della Terrazza Sacra",
          riddle: "Il cordone di canapa con paletti di sostegno che isola il monolito solare è stato tranciato.",
          loreClue: "Il cordone di canapa con paletti di sostegno che isola il monolito solare è stato tranciato."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Taccuino delle Effemeridi Astronomiche Inca",
          riddle: "Il volume compilato dagli astronomi di Cusco con le tabelle delle eclissi.",
          loreClue: "Il volume compilato dagli astronomi di Cusco con le tabelle delle eclissi è stato strappato."
        },
        {
          id: `lvl${id}_d5`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lampada ad Acetilene dei Ricercatori",
          riddle: "Il riflettore notturno usato per rilevare l'ombra dell'Intihuatana è stato scagliato nel precipizio.",
          loreClue: "Il riflettore notturno usato per rilevare l'ombra dell'Intihuatana è stato scagliato nel precipizio."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Kero Cerimoniale in Legno Dipinto",
          riddle: "Bicchiere rituale svasato con scene di battaglie e sacrifici incise a lacca colorata.",
          loreClue: "La coppa da chicha in legno di chachacomo: usata dall'Inca per brindare con il Sole durante l'Inti Raymi."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Statuetta di Lama in Oro Massiccio",
          riddle: "Piccola scultura votiva raffigurante l'animale sacro offerta agli spiriti delle montagne.",
          loreClue: "L'idolo aureo apotropaico: gli occhi sono intarsiati con minuscole scaglie di conchiglia Spondylus."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Quipu Imperiale con Nodi di Corda",
          riddle: "Sistema di cordicelle colorate e nodi calibrati per registrare tributi e censimenti andini.",
          loreClue: "Il quipu di corte: i fili di cotone e alpaca registravano il passaggio dei corrieri chasqui verso la capitale."
        }
      ];
    } else if (isLevelOneHundredFour) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Tre Vani Trapezoidali del Tempio",
          riddle: "Uno dei grandi stipiti monolitici della finestra centrale ha perso la perfetta giunzione a secco.",
          loreClue: "Uno dei grandi stipiti monolitici della finestra centrale ha perso la perfetta giunzione a secco."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Stele con i Tre Mondi della Cosmovisione",
          riddle: "La lastra intagliata con Condor, Puma e Serpente (Hanan, Kay, Uku Pacha) è stata spaccata in due.",
          loreClue: "La lastra intagliata con Condor, Puma e Serpente (Hanan, Kay, Uku Pacha) è stata spaccata in due."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassa d'Esposizione delle Tessere Litiche",
          riddle: "Il cofanetto con campioni di granito usati per testare la sismicità delle mura è stato forzato.",
          loreClue: "Il cofanetto con campioni di granito usati per testare la sismicità delle mura è stato forzato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Idolo in Giada del Serpente Amaru",
          riddle: "La sacra scultura del drago acquatico sotterraneo.",
          loreClue: "La sacra scultura del drago acquatico sotterraneo è stata sottratta dall'architrave."
        },
        {
          id: `lvl${id}_d5`,
          x: 18.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Filo a Piombo Archeologico con Mirino",
          riddle: "Lo strumento di precisione per misurare l'inclinazione antisismica dei muri è stato distrutto.",
          loreClue: "Lo strumento di precisione per misurare l'inclinazione antisismica dei muri è stato distrutto."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Macchina Fotografica a Soffietto Kodak del 1911",
          riddle: "Apparecchio fotografico d'epoca montato su cavalletto della Yale Peruvian Expedition.",
          loreClue: "La macchina fotografica di Hiram Bingham: scattò le storiche lastre che rivelarono Machu Picchu al mondo."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Pettorale Sacerdotale con Lapislazzuli",
          riddle: "Lamina d'argento e pietre azzurre indossata dal sommo sacerdote Willaq Umu.",
          loreClue: "Il pettorale astronomico: le dodici pietre corrispondono alle dodici lune del calendario agricolo incaico."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Fuso in Osso per Filare la Lana d'Alpaca",
          riddle: "Strumento tessile tradizionale con volano d'arenaria levigata ancora avvolto di filato.",
          loreClue: "Il fuso delle acllas: le vergini del Sole filavano vesti purissime destinate esclusivamente alla famiglia reale."
        }
      ];
    } else if (isLevelOneHundredFive) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Muro di Sostegno del Terrazzamento Superiore",
          riddle: "I conci di granito che trattengono il terreno fertile della montagna mostrano un cedimento indotto.",
          loreClue: "I conci di granito che trattengono il terreno fertile della montagna mostrano un cedimento indotto."
        },
        {
          id: `lvl${id}_d2`,
          x: 86.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Canale di Drenaggio Agricolo Sotterraneo",
          riddle: "La condotta litica che convoglia le acque piovane verso la valle è stata ostruita con ghiaia.",
          loreClue: "La condotta litica che convoglia le acque piovane verso la valle è stata ostruita con ghiaia."
        },
        {
          id: `lvl${id}_d3`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statuetta Votiva della Pachamama in Pietra Verde",
          riddle: "L'omaggio sepolto dai contadini per propiziare il raccolto del mais è stato dissotterrato e rubato.",
          loreClue: "L'omaggio sepolto dai contadini per propiziare il raccolto del mais è stato dissotterrato e rubato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Paratia della Riserva dei Semi Antichi",
          riddle: "La nicchia murata in cui erano conservate varietà precolombiane di quinoa.",
          loreClue: "La nicchia murata in cui erano conservate varietà precolombiane di quinoa è stata scassinata."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Mappa Agronomica dei Microclimi Andini",
          riddle: "Lo schema che documenta le variazioni termiche lungo i terrazzamenti è stato parzialmente stracciato.",
          loreClue: "Lo schema che documenta le variazioni termiche lungo i terrazzamenti è stato parzialmente stracciato."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Nicchia Trapezoidale della Muraglia Sacra",
          riddle: "Incavo ricavato nel muro a secco per accogliere idoli e offerte votive private.",
          loreClue: "La tipica nicchia architettonica incaica: la forma rastremata verso l'alto conferiva eccezionale resistenza sismica."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Cuneo in Bronzo per il Taglio del Granito",
          riddle: "Scalpello in bronzo e rame adoperato dai tagliapietre incaici per sagomare i megaliti.",
          loreClue: "L'attrezzo litico dell'architetto imperiale: permetteva incastri così precisi da non lasciare passare una lama."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Kero Cerimoniale in Legno Dipinto",
          riddle: "Bicchiere rituale svasato con scene di battaglie e sacrifici incise a lacca colorata.",
          loreClue: "La coppa da chicha in legno di chachacomo: usata dall'Inca per brindare con il Sole durante l'Inti Raymi."
        }
      ];
    } else if (isLevelOneHundredSix) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Portale a Doppio Stipite della Residenza Reale",
          riddle: "Il prestigioso ingresso riservato alla famiglia imperiale presenta uno stipite sbrecciato.",
          loreClue: "Il prestigioso ingresso riservato alla famiglia imperiale presenta uno stipite sbrecciato."
        },
        {
          id: `lvl${id}_d2`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Piatto Cerimoniale d'Argento con Motivi Geometrici",
          riddle: "La vajilla reale finemente martellata.",
          loreClue: "La vajilla reale finemente martellata è stata trafugata dal banco d'onore."
        },
        {
          id: `lvl${id}_d3`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Cofanetto delle Vesti Cerimoniali Cumbi",
          riddle: "Il bauletto contenente i tessuti d'alpaca tinti con porpora e cocciniglia è stato forzato.",
          loreClue: "Il bauletto contenente i tessuti d'alpaca tinti con porpora e cocciniglia è stato forzato."
        },
        {
          id: `lvl${id}_d4`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Cronaca Spagnola di Pedro Cieza de León",
          riddle: "La copia del manoscritto con la descrizione dei palazzi segreti reca le ultime pagine strappate.",
          loreClue: "La copia del manoscritto con la descrizione dei palazzi segreti reca le ultime pagine strappate."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lampada a Cera d'Api della Sala del Trono",
          riddle: "Il portalucerna in bronzo dorato è stato schiacciato sotto pesanti scarponi.",
          loreClue: "Il portalucerna in bronzo dorato è stato schiacciato sotto pesanti scarponi."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Statuetta di Lama in Oro Massiccio",
          riddle: "Piccola scultura votiva raffigurante l'animale sacro offerta agli spiriti delle montagne.",
          loreClue: "L'idolo aureo apotropaico: gli occhi sono intarsiati con minuscole scaglie di conchiglia Spondylus."
        },
        {
          id: `lvl${id}_d7`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Quipu Imperiale con Nodi di Corda",
          riddle: "Sistema di cordicelle colorate e nodi calibrati per registrare tributi e censimenti andini.",
          loreClue: "Il quipu di corte: i fili di cotone e alpaca registravano il passaggio dei corrieri chasqui verso la capitale."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 70.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Macchina Fotografica a Soffietto Kodak del 1911",
          riddle: "Apparecchio fotografico d'epoca montato su cavalletto della Yale Peruvian Expedition.",
          loreClue: "La macchina fotografica di Hiram Bingham: scattò le storiche lastre che rivelarono Machu Picchu al mondo."
        }
      ];
    } else if (isLevelOneHundredSeven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Le Ali di Roccia Naturale del Tempio del Condor",
          riddle: "I giganteschi speroni granitici che mimano l'apertura alare del rapace presentano fori da mina.",
          loreClue: "I giganteschi speroni granitici che mimano l'apertura alare del rapace presentano fori da mina."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 10.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Testa e il Collare del Condor Scolpiti nel Pavimento",
          riddle: "Il blocco sagomato sul piano di calpestio che raffigura il becco.",
          loreClue: "Il blocco sagomato sul piano di calpestio che raffigura il becco è stato scalpellato di fresco."
        },
        {
          id: `lvl${id}_d3`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Urna Funeraria con Ceneri Sacre dei Guerrieri",
          riddle: "Il vaso in alabastro andino collocato dietro le ali del tempio.",
          loreClue: "Il vaso in alabastro andino collocato dietro le ali del tempio è scomparso."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Grata delle Prigioni Sotterranee di Roccia",
          riddle: "Le sbarre metalliche che sbarrano i cunicoli ipogei del condor sono state segate.",
          loreClue: "Le sbarre metalliche che sbarrano i cunicoli ipogei del condor sono state segate."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lettera del Padre Gesuita Bernabé Cobo",
          riddle: "Il testo del 1653 sui culti idolatrici del condor a Machu Picchu è stato bruciato in parte.",
          loreClue: "Il testo del 1653 sui culti idolatrici del condor a Machu Picchu è stato bruciato in parte."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Pettorale Sacerdotale con Lapislazzuli",
          riddle: "Lamina d'argento e pietre azzurre indossata dal sommo sacerdote Willaq Umu.",
          loreClue: "Il pettorale astronomico: le dodici pietre corrispondono alle dodici lune del calendario agricolo incaico."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Fuso in Osso per Filare la Lana d'Alpaca",
          riddle: "Strumento tessile tradizionale con volano d'arenaria levigata ancora avvolto di filato.",
          loreClue: "Il fuso delle acllas: le vergini del Sole filavano vesti purissime destinate esclusivamente alla famiglia reale."
        },
        {
          id: `lvl${id}_d8`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Nicchia Trapezoidale della Muraglia Sacra",
          riddle: "Incavo ricavato nel muro a secco per accogliere idoli e offerte votive private.",
          loreClue: "La tipica nicchia architettonica incaica: la forma rastremata verso l'alto conferiva eccezionale resistenza sismica."
        }
      ];
    } else if (isLevelOneHundredEight) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Fontana Liturgica Principale della Serie dei Sedici Bagni",
          riddle: "Il beccuccio in pietra monolitica da cui sgorga l'acqua pura della sorgente.",
          loreClue: "Il beccuccio in pietra monolitica da cui sgorga l'acqua pura della sorgente è stato spezzato."
        },
        {
          id: `lvl${id}_d2`,
          x: 82.04,
          y: 14.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Canale Idraulico a Pendenza Costante",
          riddle: "La canaletta in granito che alimenta la sequenza dei bagni imperiali è stata deviata con detriti.",
          loreClue: "La canaletta in granito che alimenta la sequenza dei bagni imperiali è stata deviata con detriti."
        },
        {
          id: `lvl${id}_d3`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Vaso Votivo d'Argento per le Abluzioni",
          riddle: "La brocca cerimoniale utilizzata per i lavacri rituali dell'Inca.",
          loreClue: "La brocca cerimoniale utilizzata per i lavacri rituali dell'Inca è stata asportata."
        },
        {
          id: `lvl${id}_d4`,
          x: 14.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Boccaporto della Cisterna di Decantazione",
          riddle: "La pietra di chiusura della vasca di filtraggio dell'acqua è stata scardinata.",
          loreClue: "La pietra di chiusura della vasca di filtraggio dell'acqua è stata scardinata."
        },
        {
          id: `lvl${id}_d5`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Rilievo dei Flussi Idraulici di Hiram Bingham",
          riddle: "La planimetria con i percorsi delle falde montane che alimentano le fontane è strappata.",
          loreClue: "La planimetria con i percorsi delle falde montane che alimentano le fontane è strappata."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Cuneo in Bronzo per il Taglio del Granito",
          riddle: "Scalpello in bronzo e rame adoperato dai tagliapietre incaici per sagomare i megaliti.",
          loreClue: "L'attrezzo litico dell'architetto imperiale: permetteva incastri così precisi da non lasciare passare una lama."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Kero Cerimoniale in Legno Dipinto",
          riddle: "Bicchiere rituale svasato con scene di battaglie e sacrifici incise a lacca colorata.",
          loreClue: "La coppa da chicha in legno di chachacomo: usata dall'Inca per brindare con il Sole durante l'Inti Raymi."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Statuetta di Lama in Oro Massiccio",
          riddle: "Piccola scultura votiva raffigurante l'animale sacro offerta agli spiriti delle montagne.",
          loreClue: "L'idolo aureo apotropaico: gli occhi sono intarsiati con minuscole scaglie di conchiglia Spondylus."
        }
      ];
    } else if (isLevelOneHundredNine) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 15.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Scala della Morte di Huayna Picchu",
          riddle: "I gradini a picco sull'abisso del fiume Urubamba hanno un tratto franante a causa di scalpellature.",
          loreClue: "I gradini a picco sull'abisso del fiume Urubamba hanno un tratto franante a causa di scalpellature."
        },
        {
          id: `lvl${id}_d2`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Fune di Sicurezza per la Scalata della Vetta",
          riddle: "Il cavo d'acciaio ancorato alla falesia per la salita alla sommità del picco è stato allentato.",
          loreClue: "Il cavo d'acciaio ancorato alla falesia per la salita alla sommità del picco è stato allentato."
        },
        {
          id: `lvl${id}_d3`,
          x: 68.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Teodolite ad Alta Quota della Stazione Geodetica",
          riddle: "Lo strumento trigonometrico fissato sul punto trigonometrico più alto.",
          loreClue: "Lo strumento trigonometrico fissato sul punto trigonometrico più alto è scomparso."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Porta del Corpo di Guardia della Cima",
          riddle: "La porta in legno massiccio del torrione di vedetta mostra i cardini sradicati.",
          loreClue: "La porta in legno massiccio del torrione di vedetta mostra i cardini sradicati."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Diario di Vetta degli Scalatori Andini",
          riddle: "Il registro conservato nella capsula metallica in cima alla piramide naturale è stato lacerato.",
          loreClue: "Il registro conservato nella capsula metallica in cima alla piramide naturale è stato lacerato."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Quipu Imperiale con Nodi di Corda",
          riddle: "Sistema di cordicelle colorate e nodi calibrati per registrare tributi e censimenti andini.",
          loreClue: "Il quipu di corte: i fili di cotone e alpaca registravano il passaggio dei corrieri chasqui verso la capitale."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Macchina Fotografica a Soffietto Kodak del 1911",
          riddle: "Apparecchio fotografico d'epoca montato su cavalletto della Yale Peruvian Expedition.",
          loreClue: "La macchina fotografica di Hiram Bingham: scattò le storiche lastre che rivelarono Machu Picchu al mondo."
        },
        {
          id: `lvl${id}_d8`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Pettorale Sacerdotale con Lapislazzuli",
          riddle: "Lamina d'argento e pietre azzurre indossata dal sommo sacerdote Willaq Umu.",
          loreClue: "Il pettorale astronomico: le dodici pietre corrispondono alle dodici lune del calendario agricolo incaico."
        }
      ];
    } else if (isLevelOneHundredTen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'UNDICESIMO SIGILLO: Il Disco Solare d'Oro di Pachacuti con Diamante delle Ande",
          riddle: "Il disco solare d'oro di Pachacuti che fende le nebbie di Machu Picchu.",
          loreClue: "RELIQUIA SUPREMA DI TAPPA 11: Il leggendario sole radiante in oro massiccio e diamante grezzo imperiale! Custodito nella cripta segreta del Tempio della Luna, è la chiave finale che svela la rotta verso la giungla inesplorata di Paititi."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 36.1,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cripta Segreta nel Cuore del Tempio della Luna",
          riddle: "La camera scavata nella caverna naturale sotto Huayna Picchu è stata violata dai mercenari.",
          loreClue: "La camera scavata nella caverna naturale sotto Huayna Picchu è stata violata dai mercenari."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Mappa su Pergamena di Paititi della Spedizione Bellini",
          riddle: "Il documento finale con le coordinate della città segreta dell'oro.",
          loreClue: "Il documento finale con le coordinate della città segreta dell'oro è stato strappato in due metà."
        },
        {
          id: `lvl${id}_d4`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Grande Sigillo dell'Eclissi Totale",
          riddle: "Il disco solare d'oro di Pachacuti che fende le nebbie di Machu Picchu (Elemento 2).",
          loreClue: "Il bassorilievo dell'ultimo allineamento planetario che guiderà al confronto supremo è intagliato sulla roccia."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere d'Oro dei Sacerdoti di Inti",
          riddle: "Il sacro tripode per le fiamme perpetue.",
          loreClue: "Il sacro tripode per le fiamme perpetue è stato rovesciato ai piedi dell'altare della caverna."
        },
        {
          id: `lvl${id}_d6`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Fuso in Osso per Filare la Lana d'Alpaca",
          riddle: "Strumento tessile tradizionale con volano d'arenaria levigata ancora avvolto di filato.",
          loreClue: "Il fuso delle acllas: le vergini del Sole filavano vesti purissime destinate esclusivamente alla famiglia reale."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Nicchia Trapezoidale della Muraglia Sacra",
          riddle: "Incavo ricavato nel muro a secco per accogliere idoli e offerte votive private.",
          loreClue: "La tipica nicchia architettonica incaica: la forma rastremata verso l'alto conferiva eccezionale resistenza sismica."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Cuneo in Bronzo per il Taglio del Granito",
          riddle: "Scalpello in bronzo e rame adoperato dai tagliapietre incaici per sagomare i megaliti.",
          loreClue: "L'attrezzo litico dell'architetto imperiale: permetteva incastri così precisi da non lasciare passare una lama."
        }
      ];
    } else if (isLevelOneHundredEleven) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.38,
          y: 20.37,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Portale Megalitico del Madre de Dios",
          riddle: "I giganteschi blocchi ciclopici ricoperti da muschi millenari presentano i segni di detonazioni di dinamite.",
          loreClue: "I giganteschi blocchi ciclopici ricoperti da muschi millenari presentano i segni di detonazioni di dinamite."
        },
        {
          id: `lvl${id}_d2`,
          x: 84.21,
          y: 87.39,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Machete d'Argento della Spedizione Bellini",
          riddle: "La lama cerimoniale incisa con le coordinate del meridiano di Paititi è sparita dal ceppo d'albero.",
          loreClue: "La lama cerimoniale incisa con le coordinate del meridiano di Paititi è sparita dal ceppo d'albero."
        },
        {
          id: `lvl${id}_d3`,
          x: 24.96,
          y: 76.12,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Grata di Rovi e Liane Tagliata con Acido",
          riddle: "La barriera vegetale intatta da secoli che celava la fenditura nella roccia è stata corrosa.",
          loreClue: "La barriera vegetale intatta da secoli che celava la fenditura nella roccia è stata corrosa."
        },
        {
          id: `lvl${id}_d4`,
          x: 37.04,
          y: 82.25,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Diario Finale del Professor Bellini (Volume XII)",
          riddle: "Il taccuino con le annotazioni dell'ingresso nella valle perduta ha la mappa d'accesso strappata.",
          loreClue: "Il taccuino con le annotazioni dell'ingresso nella valle perduta ha la mappa d'accesso strappata."
        },
        {
          id: `lvl${id}_d5`,
          x: 55.04,
          y: 69.53,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Lanterna a Pressione da Giungla Distrutta",
          riddle: "La lampada a petrolio dei ricognitori è stata calpestata e abbandonata nel fango della riva.",
          loreClue: "La lampada a petrolio dei ricognitori è stata calpestata e abbandonata nel fango della riva."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Grande Diario della Spedizione Bellini Rilegato in Cuoio",
          riddle: "Il volume conclusivo contenente la mappa finale e le deduzioni dell'archeologo.",
          loreClue: "Il diario definitivo del Professor Bellini: l'ultima pagina attesta la vittoria della ragione sull'oscurantismo."
        },
        {
          id: `lvl${id}_d7`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Mappa Cosmica del Triangolo delle Ande",
          riddle: "Carta topografica segreta con rilievi montuosi e sentieri sotterranei tracciata su pergamena.",
          loreClue: "La pianta geografica del santuario perduto: collega le dodici tappe del viaggio in un cerchio perfetto."
        },
        {
          id: `lvl${id}_d8`,
          x: 18.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Braciere a Fiamma Eterna delle Quattro Direzioni",
          riddle: "Braciere sacro in platino e rame le cui fiamme non si sono mai spente dal tempo degli Incas.",
          loreClue: "Il focolare cosmico del tempio solare: arde grazie a un cunicolo naturale di gas montano."
        }
      ];
    } else if (isLevelOneHundredTwelve) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 86.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Strada Lastricata in Lamina d'Oro e Pietra",
          riddle: "I basoli d'arenaria rivestiti di foglie d'oro puro mostrano lamine strappate con scalpelli.",
          loreClue: "I basoli d'arenaria rivestiti di foglie d'oro puro mostrano lamine strappate con scalpelli."
        },
        {
          id: `lvl${id}_d2`,
          x: 14.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Pilastro Milestone con Numerazione Inca",
          riddle: "Il cippo confinario che indicava le leghe rimanenti alla città sacra è stato abbattuto nella boscaglia.",
          loreClue: "Il cippo confinario che indicava le leghe rimanenti alla città sacra è stato abbattuto nella boscaglia."
        },
        {
          id: `lvl${id}_d3`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Maschera del Giaguaro d'Oro delle Guardie",
          riddle: "L'elmo cerimoniale da parata raffigurante il felino sacro della selva.",
          loreClue: "L'elmo cerimoniale da parata raffigurante il felino sacro della selva è scomparso dal piedistallo."
        },
        {
          id: `lvl${id}_d4`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Forziere di Bronzo dei Pionieri Spagnoli del 1572",
          riddle: "La cassa metallica sepolta dai conquistadores in fuga presenta la serratura sventrata.",
          loreClue: "La cassa metallica sepolta dai conquistadores in fuga presenta la serratura sventrata."
        },
        {
          id: `lvl${id}_d5`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Pergamena del Frate Vicereale sulla Città d'Oro",
          riddle: "La relazione manoscritta per il re di Spagna sui tesori di Paititi è lacerata a metà.",
          loreClue: "La relazione manoscritta per il re di Spagna sui tesori di Paititi è lacerata a metà."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Fontana delle Acque Sacre con Canali d'Argento",
          riddle: "Bacino idraulico monumentale dove l'acqua sorgiva scorre in canalette argentate.",
          loreClue: "Il sistema idraulico di Paititi: le lamine d'argento purificavano l'acqua destinata alle abluzioni del re."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Sigillo Spezzato della Mano Oscura",
          riddle: "Il medaglione in piombo della confraternita nemica frantumato a terra dopo la sconfitta.",
          loreClue: "La prova materiale della disfatta dei sabotatori: la Mano Oscura non potrà più celare la verità alla storia."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Grande Disco Solare d'Oro con Raggi Fiammeggianti",
          riddle: "Monumentale disco d'oro zecchino al centro del tempio che riflette la luce dell'aurora.",
          loreClue: "La reliquia suprema di Paititi: il grande sole d'oro puro fuso prima della caduta di Vilcabamba."
        }
      ];
    } else if (isLevelOneHundredThirteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Bacino Idraulico delle Cascate Gemelle",
          riddle: "La chiusa in blocchi di granito rosa che deviava l'acqua per rivelare il passaggio segreto è stata manomessa.",
          loreClue: "La chiusa in blocchi di granito rosa che deviava l'acqua per rivelare il passaggio segreto è stata manomessa."
        },
        {
          id: `lvl${id}_d2`,
          x: 88.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Barca Cerimoniale in Legno di Cedro Dorato",
          riddle: "La piroga sacra per attraversare il lago sotterraneo è stata affondata con fori nella carena.",
          loreClue: "La piroga sacra per attraversare il lago sotterraneo è stata affondata con fori nella carena."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 40.07,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Calice di Platino dei Sacerdoti dell'Acqua",
          riddle: "Il vaso liturgico con cui si compivano le offerte alla divinità fluviale è stato rubato.",
          loreClue: "Il vaso liturgico con cui si compivano le offerte alla divinità fluviale è stato rubato."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Botola di Bronzo Sommersa Scardinata",
          riddle: "L'accesso subacqueo al condotto della cascata mostra i chiavistelli tranciati con cesoie idrauliche.",
          loreClue: "L'accesso subacqueo al condotto della cascata mostra i chiavistelli tranciati con cesoie idrauliche."
        },
        {
          id: `lvl${id}_d5`,
          x: 85.04,
          y: 15.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Disegno Idraulico di Padre Lopez del 1932",
          riddle: "La tavola tecnica che rivelava i meccanismi di apertura dietro la cascata è stata stracciata.",
          loreClue: "La tavola tecnica che rivelava i meccanismi di apertura dietro la cascata è stata stracciata."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Maschera Funeraria con Occhi di Smeraldo",
          riddle: "Effigie aurea del sovrano leggendario con smeraldi colombiani incastonati nelle pupille.",
          loreClue: "La maschera imperiale del re sacerdote: racchiude il segreto dell'accesso alla cripta dell'oro vivo."
        },
        {
          id: `lvl${id}_d7`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Lo Scettro con Testa di Giaguaro d'Oro",
          riddle: "Insegna del comando supremo in legno di chonta rivestito di lamine auree cesellate.",
          loreClue: "Lo scettro del signore di Paititi: le fauci del felino stringono una perla fluviale di straordinaria caratura."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Grande Diario della Spedizione Bellini Rilegato in Cuoio",
          riddle: "Il volume conclusivo contenente la mappa finale e le deduzioni dell'archeologo.",
          loreClue: "Il diario definitivo del Professor Bellini: l'ultima pagina attesta la vittoria della ragione sull'oscurantismo."
        }
      ];
    } else if (isLevelOneHundredFourteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 18.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Sommità della Piramide a Gradoni di Paititi",
          riddle: "Il tempietto superiore rivestito d'oro massiccio presenta una colonna di sostegno crollata.",
          loreClue: "Il tempietto superiore rivestito d'oro massiccio presenta una colonna di sostegno crollata."
        },
        {
          id: `lvl${id}_d2`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "I Bassorilievi con le Dodici Tappe dell'Umanità",
          riddle: "I pannelli scolpiti che raccontano la rotta da Oxford a Paititi presentano figure scalpellate.",
          loreClue: "I pannelli scolpiti che raccontano la rotta da Oxford a Paititi presentano figure scalpellate."
        },
        {
          id: `lvl${id}_d3`,
          x: 15.0,
          y: 38.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Lo Scettro Imperiale dell'Inca di Paititi",
          riddle: "L'insegna del comando con la stella d'oro a otto punte e smeraldi è sparita dal trono piramidale.",
          loreClue: "L'insegna del comando con la stella d'oro a otto punte e smeraldi è sparita dal trono piramidale."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Porta Monolitica del Sancta Sanctorum",
          riddle: "Il massiccio portale in pietra nera che sigillava il cuore della piramide è stato fatto saltare.",
          loreClue: "Il massiccio portale in pietra nera che sigillava il cuore della piramide è stato fatto saltare."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Rotolo dei Quipu Reali della Fondazione",
          riddle: "Il sistema di cordicelle annodate che custodiva la storia segreta di Paititi è stato reciso.",
          loreClue: "Il sistema di cordicelle annodate che custodiva la storia segreta di Paititi è stato reciso."
        },
        {
          id: `lvl${id}_d6`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Mappa Cosmica del Triangolo delle Ande",
          riddle: "Carta topografica segreta con rilievi montuosi e sentieri sotterranei tracciata su pergamena.",
          loreClue: "La pianta geografica del santuario perduto: collega le dodici tappe del viaggio in un cerchio perfetto."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Braciere a Fiamma Eterna delle Quattro Direzioni",
          riddle: "Braciere sacro in platino e rame le cui fiamme non si sono mai spente dal tempo degli Incas.",
          loreClue: "Il focolare cosmico del tempio solare: arde grazie a un cunicolo naturale di gas montano."
        },
        {
          id: `lvl${id}_d8`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Fontana delle Acque Sacre con Canali d'Argento",
          riddle: "Bacino idraulico monumentale dove l'acqua sorgiva scorre in canalette argentate.",
          loreClue: "Il sistema idraulico di Paititi: le lamine d'argento purificavano l'acqua destinata alle abluzioni del re."
        }
      ];
    } else if (isLevelOneHundredFifteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 62.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Tredici Basoli dei Raggi Solari nel Tempio",
          riddle: "Una delle mensole in diorite ove collocare i sigilli delle tappe precedenti.",
          loreClue: "Una delle mensole in diorite ove collocare i sigilli delle tappe precedenti è stata spezzata."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Meccanismo ad Orologeria Astronomico di Paititi",
          riddle: "Gli ingranaggi in bronzo e quarzo che calcolano il solstizio d'inverno sono stati bloccati con cunei di ferro.",
          loreClue: "Gli ingranaggi in bronzo e quarzo che calcolano il solstizio d'inverno sono stati bloccati con cunei di ferro."
        },
        {
          id: `lvl${id}_d3`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Corona Radiata del Tredicesimo Sacerdote",
          riddle: "Il diadema in filigrana d'oro con tredici raggi di topazio.",
          loreClue: "Il diadema in filigrana d'oro con tredici raggi di topazio è stato trafugato dalla nicchia solare."
        },
        {
          id: `lvl${id}_d4`,
          x: 86.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Grata del Cunicolo di Rifrazione Ottica",
          riddle: "Il canale che convoglia il primo raggio di luce sulla reliquia ha le sbarre divelte.",
          loreClue: "Il canale che convoglia il primo raggio di luce sulla reliquia ha le sbarre divelte."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Manoscritto Comparativo delle Dodici Civiltà",
          riddle: "La tesi del Professor Bellini che dimostra l'origine comune delle dodici tappe è stata bruciata.",
          loreClue: "La tesi del Professor Bellini che dimostra l'origine comune delle dodici tappe è stata bruciata."
        },
        {
          id: `lvl${id}_d6`,
          x: 22.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Sigillo Spezzato della Mano Oscura",
          riddle: "Il medaglione in piombo della confraternita nemica frantumato a terra dopo la sconfitta.",
          loreClue: "La prova materiale della disfatta dei sabotatori: la Mano Oscura non potrà più celare la verità alla storia."
        },
        {
          id: `lvl${id}_d7`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Grande Disco Solare d'Oro con Raggi Fiammeggianti",
          riddle: "Monumentale disco d'oro zecchino al centro del tempio che riflette la luce dell'aurora.",
          loreClue: "La reliquia suprema di Paititi: il grande sole d'oro puro fuso prima della caduta di Vilcabamba."
        },
        {
          id: `lvl${id}_d8`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Maschera Funeraria con Occhi di Smeraldo",
          riddle: "Effigie aurea del sovrano leggendario con smeraldi colombiani incastonati nelle pupille.",
          loreClue: "La maschera imperiale del re sacerdote: racchiude il segreto dell'accesso alla cripta dell'oro vivo."
        }
      ];
    } else if (isLevelOneHundredSixteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 20.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Le Vasche di Mercurio Liquido e Argento Vivo",
          riddle: "Il grande specchio oracolare in cui i sacerdoti leggevano le stelle mostra i bordi in pietra sbrecciati.",
          loreClue: "Il grande specchio oracolare in cui i sacerdoti leggevano le stelle mostra i bordi in pietra sbrecciati."
        },
        {
          id: `lvl${id}_d2`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "La Sfera Armillare di Cristallo di Rocca",
          riddle: "Il globo celeste finemente intagliato nel quarzo trasparente è stato scaraventato al suolo.",
          loreClue: "Il globo celeste finemente intagliato nel quarzo trasparente è stato scaraventato al suolo."
        },
        {
          id: `lvl${id}_d3`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Il Disco Lunare d'Argento Massiccio di Mama Killa",
          riddle: "La grandiosa effigie della luna argentata.",
          loreClue: "La grandiosa effigie della luna argentata è scomparsa dalla parete occidentale."
        },
        {
          id: `lvl${id}_d4`,
          x: 80.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Cassa delle Ampolle di Reagenti Chimici",
          riddle: "Il contenitore blindato con gli acidi per purificare i metalli nobili.",
          loreClue: "Il contenitore blindato con gli acidi per purificare i metalli nobili è stato scassinato."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Carta Stellare con le Coordinate del Triangolo d'Oro",
          riddle: "La mappa disegnata su pelle di giaguaro con le costellazioni incaiche è lacerata.",
          loreClue: "La mappa disegnata su pelle di giaguaro con le costellazioni incaiche è lacerata."
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Lo Scettro con Testa di Giaguaro d'Oro",
          riddle: "Insegna del comando supremo in legno di chonta rivestito di lamine auree cesellate.",
          loreClue: "Lo scettro del signore di Paititi: le fauci del felino stringono una perla fluviale di straordinaria caratura."
        },
        {
          id: `lvl${id}_d7`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Grande Diario della Spedizione Bellini Rilegato in Cuoio",
          riddle: "Il volume conclusivo contenente la mappa finale e le deduzioni dell'archeologo.",
          loreClue: "Il diario definitivo del Professor Bellini: l'ultima pagina attesta la vittoria della ragione sull'oscurantismo."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Mappa Cosmica del Triangolo delle Ande",
          riddle: "Carta topografica segreta con rilievi montuosi e sentieri sotterranei tracciata su pergamena.",
          loreClue: "La pianta geografica del santuario perduto: collega le dodici tappe del viaggio in un cerchio perfetto."
        }
      ];
    } else if (isLevelOneHundredSeventeen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Sarcofagi di Cristallo dei Fondatori di Paititi",
          riddle: "Le arche traslucide contenenti le mummie regali mostrano fessurazioni provocate da mazzuoli.",
          loreClue: "Le arche traslucide contenenti le mummie regali mostrano fessurazioni provocate da mazzuoli."
        },
        {
          id: `lvl${id}_d2`,
          x: 15.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Muro d'Oro a Foglie Battute della Cripta",
          riddle: "Le pareti interamente dorate che isolavano il sepolcro presentano porzioni asportate con tenaglie.",
          loreClue: "Le pareti interamente dorate che isolavano il sepolcro presentano porzioni asportate con tenaglie."
        },
        {
          id: `lvl${id}_d3`,
          x: 18.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Maschera Funeraria di Giada e Lapislazzuli",
          riddle: "Il volto cerimoniale del primo re-sacerdote.",
          loreClue: "Il volto cerimoniale del primo re-sacerdote è stato sottratto dal sarcofago centrale."
        },
        {
          id: `lvl${id}_d4`,
          x: 50.04,
          y: 62.11,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Porta d'Accesso con Serratura a Tre Chiavi Liturgiche",
          riddle: "La complessa serratura meccanica precolombiana è stata forzata con cariche di fulmicotone.",
          loreClue: "La complessa serratura meccanica precolombiana è stata forzata con cariche di fulmicotone."
        },
        {
          id: `lvl${id}_d5`,
          x: 82.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Cronaca Segreta dei Re di Paititi su Foglie d'Argento",
          riddle: "Il libro metallico con la genealogia millenaria è stato smembrato e parzialmente disperso.",
          loreClue: "Il libro metallico con la genealogia millenaria è stato smembrato e parzialmente disperso."
        },
        {
          id: `lvl${id}_d6`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Braciere a Fiamma Eterna delle Quattro Direzioni",
          riddle: "Braciere sacro in platino e rame le cui fiamme non si sono mai spente dal tempo degli Incas.",
          loreClue: "Il focolare cosmico del tempio solare: arde grazie a un cunicolo naturale di gas montano."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 85.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Fontana delle Acque Sacre con Canali d'Argento",
          riddle: "Bacino idraulico monumentale dove l'acqua sorgiva scorre in canalette argentate.",
          loreClue: "Il sistema idraulico di Paititi: le lamine d'argento purificavano l'acqua destinata alle abluzioni del re."
        },
        {
          id: `lvl${id}_d8`,
          x: 35.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Sigillo Spezzato della Mano Oscura",
          riddle: "Il medaglione in piombo della confraternita nemica frantumato a terra dopo la sconfitta.",
          loreClue: "La prova materiale della disfatta dei sabotatori: la Mano Oscura non potrà più celare la verità alla storia."
        }
      ];
    } else if (isLevelOneHundredEighteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 38.04,
          y: 42.02,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Monolito dell'Equinozio Supremo al Centro del Tempio",
          riddle: "Il pilastro centrale in pura diorite nera presenta profonde scalfitture nel punto d'innesto del sigillo.",
          loreClue: "Il pilastro centrale in pura diorite nera presenta profonde scalfitture nel punto d'innesto del sigillo."
        },
        {
          id: `lvl${id}_d2`,
          x: 86.04,
          y: 44.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "I Bracieri a Fiamma Eterna delle Quattro Direzioni",
          riddle: "I quattro tripodi in bronzo che segnavano i punti cardinali dell'impero sono stati rovesciati.",
          loreClue: "I quattro tripodi in bronzo che segnavano i punti cardinali dell'impero sono stati rovesciati."
        },
        {
          id: `lvl${id}_d3`,
          x: 50.04,
          y: 78.07,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "L'Occhio di Luce di Paititi (Smeraldo Imperiale)",
          riddle: "La gigantesca gemma tagliata a prismi che diffondeva la luce solare nella sala.",
          loreClue: "La gigantesca gemma tagliata a prismi che diffondeva la luce solare nella sala è stata trafugata."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "La Teca dei Dodici Sigilli della Saggezza",
          riddle: "Lo scrigno circolare d'oro destinato ad accogliere i dodici sigilli della spedizione.",
          loreClue: "Lo scrigno circolare d'oro destinato ad accogliere i dodici sigilli della spedizione è stato scassinato."
        },
        {
          id: `lvl${id}_d5`,
          x: 80.04,
          y: 75.06,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Testamento Archeologico di Padre Lopez",
          riddle: "L'ultima lettera di Padre Lopez che svela il legame tra la Chiesa, Bellini e Paititi è strappata.",
          loreClue: "L'ultima lettera di Padre Lopez che svela il legame tra la Chiesa, Bellini e Paititi è strappata."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "Il Grande Disco Solare d'Oro con Raggi Fiammeggianti",
          riddle: "Monumentale disco d'oro zecchino al centro del tempio che riflette la luce dell'aurora.",
          loreClue: "La reliquia suprema di Paititi: il grande sole d'oro puro fuso prima della caduta di Vilcabamba."
        },
        {
          id: `lvl${id}_d7`,
          x: 50.0,
          y: 18.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Maschera Funeraria con Occhi di Smeraldo",
          riddle: "Effigie aurea del sovrano leggendario con smeraldi colombiani incastonati nelle pupille.",
          loreClue: "La maschera imperiale del re sacerdote: racchiude il segreto dell'accesso alla cripta dell'oro vivo."
        },
        {
          id: `lvl${id}_d8`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "Lo Scettro con Testa di Giaguaro d'Oro",
          riddle: "Insegna del comando supremo in legno di chonta rivestito di lamine auree cesellate.",
          loreClue: "Lo scettro del signore di Paititi: le fauci del felino stringono una perla fluviale di straordinaria caratura."
        }
      ];
    } else if (isLevelOneHundredNineteen) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 40.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'sabotage',
          name: "L'Arco di Trionfo di Paititi Crollato nel Duello",
          riddle: "Le colonne tortili dell'ingresso alla sala del trono mostrano i segni dello scontro a fuoco finale.",
          loreClue: "Le colonne tortili dell'ingresso alla sala del trono mostrano i segni dello scontro a fuoco finale."
        },
        {
          id: `lvl${id}_d2`,
          x: 50.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Le Casse di Munizioni Abbandonate dai Sabotatori",
          riddle: "L'arsenale dei mercenari della Mano Oscura giace rovesciato tra i mosaici dorati.",
          loreClue: "L'arsenale dei mercenari della Mano Oscura giace rovesciato tra i mosaici dorati."
        },
        {
          id: `lvl${id}_d3`,
          x: 68.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Pistola d'Ordinanza del Capo dei Sabotatori",
          riddle: "L'arma con l'emblema della confraternita abbandonata durante la fuga è caduta nel canale sacro.",
          loreClue: "L'arma con l'emblema della confraternita abbandonata durante la fuga è caduta nel canale sacro."
        },
        {
          id: `lvl${id}_d4`,
          x: 12.04,
          y: 70.03,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Forziere Blindato con i Reperti Trafugati dalle 11 Tappe",
          riddle: "La cassa metallica dove la setta ammassava i tesori rubati durante la spedizione è stata forzata.",
          loreClue: "La cassa metallica dove la setta ammassava i tesori rubati durante la spedizione è stata forzata."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.04,
          y: 40.01,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "La Lista dei Cospiratori e Finanziatori della Mano Oscura",
          riddle: "Il documento segreto con i nomi dei mandanti internazionali è parzialmente bruciato dal fuoco.",
          loreClue: "Il documento segreto con i nomi dei mandanti internazionali è parzialmente bruciato dal fuoco."
        },
        {
          id: `lvl${id}_d6`,
          x: 20.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Grande Diario della Spedizione Bellini Rilegato in Cuoio",
          riddle: "Il volume conclusivo contenente la mappa finale e le deduzioni dell'archeologo.",
          loreClue: "Il diario definitivo del Professor Bellini: l'ultima pagina attesta la vittoria della ragione sull'oscurantismo."
        },
        {
          id: `lvl${id}_d7`,
          x: 80.0,
          y: 22.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Mappa Cosmica del Triangolo delle Ande",
          riddle: "Carta topografica segreta con rilievi montuosi e sentieri sotterranei tracciata su pergamena.",
          loreClue: "La pianta geografica del santuario perduto: collega le dodici tappe del viaggio in un cerchio perfetto."
        },
        {
          id: `lvl${id}_d8`,
          x: 82.0,
          y: 50.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere a Fiamma Eterna delle Quattro Direzioni",
          riddle: "Braciere sacro in platino e rame le cui fiamme non si sono mai spente dal tempo degli Incas.",
          loreClue: "Il focolare cosmico del tempio solare: arde grazie a un cunicolo naturale di gas montano."
        }
      ];
    } else if (isLevelOneHundredTwenty) {
      diffsForLevel = [
        {
          id: `lvl${id}_d1`,
          x: 50.04,
          y: 88.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "IL DODICESIMO SIGILLO SUPREMO: Il Cuore d'Oro e Diamante di Paititi",
          riddle: "La reliquia suprema dell'Eldorado: il cuore d'oro massiccio che racchiude il segreto dei dodici secoli.",
          loreClue: "RELIQUIA FINALE DI LIVELLO 120: Il leggendario Cuore di Paititi! Unificando i 12 sigilli delle tappe mondiali, si attiva la camera dell'immortalità archeologica."
        },
        {
          id: `lvl${id}_d2`,
          x: 18.04,
          y: 65.01,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "L'Altare della Grande Scelta dei Tre Destini",
          riddle: "Il tripode monolitico su cui il giocatore decide la sorte di Paititi.",
          loreClue: "Il tripode monolitico su cui il giocatore decide la sorte di Paititi: Rivelazione al Mondo, Dono al Museo Segreto, o Sigillo Eterno per salvare la terra sacra."
        },
        {
          id: `lvl${id}_d3`,
          x: 85.04,
          y: 38.0,
          radius: 5.5,
          clueType: 'torn_evidence',
          name: "Il Diario Completo e Unificato della Spedizione Bellini",
          riddle: "Il tomo leggendario di 120 capitoli rilegato in cuoio e oro che documenta ogni enigma risolto lungo i 120 livelli dell'avventura.",
          loreClue: "Il tomo leggendario di 120 capitoli rilegato in cuoio e oro che documenta ogni enigma risolto lungo i 120 livelli dell'avventura."
        },
        {
          id: `lvl${id}_d4`,
          x: 20.04,
          y: 12.11,
          radius: 5.5,
          clueType: 'dark_seal',
          name: "La Dissoluzione Finale del Sigillo della Mano Oscura",
          riddle: "La reliquia suprema dell'Eldorado: il cuore d'oro massiccio che racchiude il segreto dei dodici secoli (Elemento 2).",
          loreClue: "L'ultimo marchio necromantico dei cospiratori si infrange in frammenti di cenere purificata dalla luce del sole."
        },
        {
          id: `lvl${id}_d5`,
          x: 50.08,
          y: 10.1,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Braciere d'Oro della Gloria Eterna",
          riddle: "La fiamma sacra di Paititi arde trionfante, illuminando il completamento definitivo di tutti i 120 livelli dell'epopea!.",
          loreClue: "La fiamma sacra di Paititi arde trionfante, illuminando il completamento definitivo di tutti i 120 livelli dell'epopea!"
        },
        {
          id: `lvl${id}_d6`,
          x: 78.0,
          y: 78.0,
          radius: 5.5,
          clueType: 'stolen_relic',
          name: "La Fontana delle Acque Sacre con Canali d'Argento",
          riddle: "Bacino idraulico monumentale dove l'acqua sorgiva scorre in canalette argentate.",
          loreClue: "Il sistema idraulico di Paititi: le lamine d'argento purificavano l'acqua destinata alle abluzioni del re."
        },
        {
          id: `lvl${id}_d7`,
          x: 35.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'sabotage',
          name: "Il Sigillo Spezzato della Mano Oscura",
          riddle: "Il medaglione in piombo della confraternita nemica frantumato a terra dopo la sconfitta.",
          loreClue: "La prova materiale della disfatta dei sabotatori: la Mano Oscura non potrà più celare la verità alla storia."
        },
        {
          id: `lvl${id}_d8`,
          x: 65.0,
          y: 30.0,
          radius: 5.5,
          clueType: 'forced_lock',
          name: "Il Grande Disco Solare d'Oro con Raggi Fiammeggianti",
          riddle: "Monumentale disco d'oro zecchino al centro del tempio che riflette la luce dell'aurora.",
          loreClue: "La reliquia suprema di Paititi: il grande sole d'oro puro fuso prima della caduta di Vilcabamba."
        }
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
