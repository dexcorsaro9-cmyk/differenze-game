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
      ? '/levels/stage2_lvl11_A.jpg'
      : isLevelTwelve
      ? '/levels/stage2_lvl12_A.jpg'
      : isLevelThirteen
      ? '/levels/stage2_lvl13_A.jpg'
      : isLevelFourteen
      ? '/levels/stage2_lvl14_A.jpg'
      : isLevelFifteen
      ? '/levels/stage2_lvl15_A.jpg'
      : isLevelSixteen
      ? '/levels/stage2_lvl16_A.jpg'
      : isLevelSeventeen
      ? '/levels/stage2_lvl17_A.jpg'
      : isLevelEighteen
      ? '/levels/stage2_lvl18_A.jpg'
      : isLevelNineteen
      ? '/levels/stage2_lvl19_A.jpg'
      : isLevelTwenty
      ? '/levels/stage2_lvl20_A.jpg'
      : isLevelTwentyOne
      ? '/levels/stage3_lvl21_A.jpg'
      : isLevelTwentyTwo
      ? '/levels/stage3_lvl22_A.jpg'
      : isLevelTwentyThree
      ? '/levels/stage3_lvl23_A.jpg'
      : isLevelTwentyFour
      ? '/levels/stage3_lvl24_A.jpg'
      : isLevelTwentyFive
      ? '/levels/stage3_lvl25_A.jpg'
      : isLevelTwentySix
      ? '/levels/stage3_lvl26_A.jpg'
      : isLevelTwentySeven
      ? '/levels/stage3_lvl27_A.jpg'
      : isLevelTwentyEight
      ? '/levels/stage3_lvl28_A.jpg'
      : isLevelTwentyNine
      ? '/levels/stage3_lvl29_A.jpg'
      : isLevelThirty
      ? '/levels/stage3_lvl30_A.jpg'
      : isLevelThirtyOne
      ? '/levels/stage4_lvl31_A.jpg'
      : isLevelThirtyTwo
      ? '/levels/stage4_lvl32_A.jpg'
      : isLevelThirtyThree
      ? '/levels/stage4_lvl33_A.jpg'
      : isLevelThirtyFour
      ? '/levels/stage4_lvl34_A.jpg'
      : isLevelThirtyFive
      ? '/levels/stage4_lvl35_A.jpg'
      : isLevelThirtySix
      ? '/levels/stage4_lvl36_A.jpg'
      : isLevelThirtySeven
      ? '/levels/stage4_lvl37_A.jpg'
      : isLevelThirtyEight
      ? '/levels/stage4_lvl38_A.jpg'
      : isLevelThirtyNine
      ? '/levels/stage4_lvl39_A.jpg'
      : isLevelForty
      ? '/levels/stage4_lvl40_A.jpg'
      : isLevelFortyOne
      ? '/levels/stage5_lvl41_A.jpg'
      : isLevelFortyTwo
      ? '/levels/stage5_lvl42_A.jpg'
      : isLevelFortyThree
      ? '/levels/stage5_lvl43_A.jpg'
      : isLevelFortyFour
      ? '/levels/stage5_lvl44_A.jpg'
      : isLevelFortyFive
      ? '/levels/stage5_lvl45_A.jpg'
      : isLevelFortySix
      ? '/levels/stage5_lvl46_A.jpg'
      : isLevelFortySeven
      ? '/levels/stage5_lvl47_A.jpg'
      : isLevelFortyEight
      ? '/levels/stage5_lvl48_A.jpg'
      : isLevelFortyNine
      ? '/levels/stage5_lvl49_A.jpg'
      : isLevelFifty
      ? '/levels/stage5_lvl50_A.jpg'
      : isLevelFiftyOne
      ? '/levels/stage6_lvl51_A.jpg'
      : isLevelFiftyTwo
      ? '/levels/stage6_lvl52_A.jpg'
      : isLevelFiftyThree
      ? '/levels/stage6_lvl53_A.jpg'
      : isLevelFiftyFour
      ? '/levels/stage6_lvl54_A.jpg'
      : isLevelFiftyFive
      ? '/levels/stage6_lvl55_A.jpg'
      : isLevelFiftySix
      ? '/levels/stage6_lvl56_A.jpg'
      : isLevelFiftySeven
      ? '/levels/stage6_lvl57_A.jpg'
      : isLevelFiftyEight
      ? '/levels/stage6_lvl58_A.jpg'
      : isLevelFiftyNine
      ? '/levels/stage6_lvl59_A.jpg'
      : isLevelSixty
      ? '/levels/stage6_lvl60_A.jpg'
      : isLevelSixtyOne
      ? '/levels/stage7_lvl61_A.jpg'
      : isLevelSixtyTwo
      ? '/levels/stage7_lvl62_A.jpg'
      : isLevelSixtyThree
      ? '/levels/stage7_lvl63_A.jpg'
      : isLevelSixtyFour
      ? '/levels/stage7_lvl64_A.jpg'
      : isLevelSixtyFive
      ? '/levels/stage7_lvl65_A.jpg'
      : isLevelSixtySix
      ? '/levels/stage7_lvl66_A.jpg'
      : isLevelSixtySeven
      ? '/levels/stage7_lvl67_A.jpg'
      : isLevelSixtyEight
      ? '/levels/stage7_lvl68_A.jpg'
      : isLevelSixtyNine
      ? '/levels/stage7_lvl69_A.jpg'
      : isLevelSeventy
      ? '/levels/stage7_lvl70_A.jpg'
      : isLevelSeventyOne
      ? '/levels/stage8_lvl71_A.jpg'
      : isLevelSeventyTwo
      ? '/levels/stage8_lvl72_A.jpg'
      : isLevelSeventyThree
      ? '/levels/stage8_lvl73_A.jpg'
      : isLevelSeventyFour
      ? '/levels/stage8_lvl74_A.jpg'
      : isLevelSeventyFive
      ? '/levels/stage8_lvl75_A.jpg'
      : isLevelSeventySix
      ? '/levels/stage8_lvl76_A.jpg'
      : isLevelSeventySeven
      ? '/levels/stage8_lvl77_A.jpg'
      : isLevelSeventyEight
      ? '/levels/stage8_lvl78_A.jpg'
      : isLevelSeventyNine
      ? '/levels/stage8_lvl79_A.jpg'
      : isLevelEighty
      ? '/levels/stage8_lvl80_A.jpg'
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
      ? '/levels/stage8_lvl71_A.jpg'
      : isLevelSeventyTwo
      ? '/levels/stage8_lvl72_A.jpg'
      : isLevelSeventyThree
      ? '/levels/stage8_lvl73_A.jpg'
      : isLevelSeventyFour
      ? '/levels/stage8_lvl74_A.jpg'
      : isLevelSeventyFive
      ? '/levels/stage8_lvl75_A.jpg'
      : isLevelSeventySix
      ? '/levels/stage8_lvl76_A.jpg'
      : isLevelSeventySeven
      ? '/levels/stage8_lvl77_A.jpg'
      : isLevelSeventyEight
      ? '/levels/stage8_lvl78_A.jpg'
      : isLevelSeventyNine
      ? '/levels/stage8_lvl79_A.jpg'
      : isLevelEighty
      ? '/levels/stage8_lvl80_A.jpg'
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
      ? '/levels/stage2_lvl11_B.jpg'
      : isLevelTwelve
      ? '/levels/stage2_lvl12_B.jpg'
      : isLevelThirteen
      ? '/levels/stage2_lvl13_B.jpg'
      : isLevelFourteen
      ? '/levels/stage2_lvl14_B.jpg'
      : isLevelFifteen
      ? '/levels/stage2_lvl15_B.jpg'
      : isLevelSixteen
      ? '/levels/stage2_lvl16_B.jpg'
      : isLevelSeventeen
      ? '/levels/stage2_lvl17_B.jpg'
      : isLevelEighteen
      ? '/levels/stage2_lvl18_B.jpg'
      : isLevelNineteen
      ? '/levels/stage2_lvl19_B.jpg'
      : isLevelTwenty
      ? '/levels/stage2_lvl20_B.jpg'
      : isLevelTwentyOne
      ? '/levels/stage3_lvl21_B.jpg'
      : isLevelTwentyTwo
      ? '/levels/stage3_lvl22_B.jpg'
      : isLevelTwentyThree
      ? '/levels/stage3_lvl23_B.jpg'
      : isLevelTwentyFour
      ? '/levels/stage3_lvl24_B.jpg'
      : isLevelTwentyFive
      ? '/levels/stage3_lvl25_B.jpg'
      : isLevelTwentySix
      ? '/levels/stage3_lvl26_B.jpg'
      : isLevelTwentySeven
      ? '/levels/stage3_lvl27_B.jpg'
      : isLevelTwentyEight
      ? '/levels/stage3_lvl28_B.jpg'
      : isLevelTwentyNine
      ? '/levels/stage3_lvl29_B.jpg'
      : isLevelThirty
      ? '/levels/stage3_lvl30_B.jpg'
      : isLevelThirtyOne
      ? '/levels/stage4_lvl31_B.jpg'
      : isLevelThirtyTwo
      ? '/levels/stage4_lvl32_B.jpg'
      : isLevelThirtyThree
      ? '/levels/stage4_lvl33_B.jpg'
      : isLevelThirtyFour
      ? '/levels/stage4_lvl34_B.jpg'
      : isLevelThirtyFive
      ? '/levels/stage4_lvl35_B.jpg'
      : isLevelThirtySix
      ? '/levels/stage4_lvl36_B.jpg'
      : isLevelThirtySeven
      ? '/levels/stage4_lvl37_B.jpg'
      : isLevelThirtyEight
      ? '/levels/stage4_lvl38_B.jpg'
      : isLevelThirtyNine
      ? '/levels/stage4_lvl39_B.jpg'
      : isLevelForty
      ? '/levels/stage4_lvl40_B.jpg'
      : isLevelFortyOne
      ? '/levels/stage5_lvl41_B.jpg'
      : isLevelFortyTwo
      ? '/levels/stage5_lvl42_B.jpg'
      : isLevelFortyThree
      ? '/levels/stage5_lvl43_B.jpg'
      : isLevelFortyFour
      ? '/levels/stage5_lvl44_B.jpg'
      : isLevelFortyFive
      ? '/levels/stage5_lvl45_B.jpg'
      : isLevelFortySix
      ? '/levels/stage5_lvl46_B.jpg'
      : isLevelFortySeven
      ? '/levels/stage5_lvl47_B.jpg'
      : isLevelFortyEight
      ? '/levels/stage5_lvl48_B.jpg'
      : isLevelFortyNine
      ? '/levels/stage5_lvl49_B.jpg'
      : isLevelFifty
      ? '/levels/stage5_lvl50_B.jpg'
      : isLevelFiftyOne
      ? '/levels/stage6_lvl51_B.jpg'
      : isLevelFiftyTwo
      ? '/levels/stage6_lvl52_B.jpg'
      : isLevelFiftyThree
      ? '/levels/stage6_lvl53_B.jpg'
      : isLevelFiftyFour
      ? '/levels/stage6_lvl54_B.jpg'
      : isLevelFiftyFive
      ? '/levels/stage6_lvl55_B.jpg'
      : isLevelFiftySix
      ? '/levels/stage6_lvl56_B.jpg'
      : isLevelFiftySeven
      ? '/levels/stage6_lvl57_B.jpg'
      : isLevelFiftyEight
      ? '/levels/stage6_lvl58_B.jpg'
      : isLevelFiftyNine
      ? '/levels/stage6_lvl59_B.jpg'
      : isLevelSixty
      ? '/levels/stage6_lvl60_B.jpg'
      : isLevelSixtyOne
      ? '/levels/stage7_lvl61_B.jpg'
      : isLevelSixtyTwo
      ? '/levels/stage7_lvl62_B.jpg'
      : isLevelSixtyThree
      ? '/levels/stage7_lvl63_B.jpg'
      : isLevelSixtyFour
      ? '/levels/stage7_lvl64_B.jpg'
      : isLevelSixtyFive
      ? '/levels/stage7_lvl65_B.jpg'
      : isLevelSixtySix
      ? '/levels/stage7_lvl66_B.jpg'
      : isLevelSixtySeven
      ? '/levels/stage7_lvl67_B.jpg'
      : isLevelSixtyEight
      ? '/levels/stage7_lvl68_B.jpg'
      : isLevelSixtyNine
      ? '/levels/stage7_lvl69_B.jpg'
      : isLevelSeventy
      ? '/levels/stage7_lvl70_B.jpg'
      : isLevelSeventyOne
      ? '/levels/stage8_lvl71_B.jpg'
      : isLevelSeventyTwo
      ? '/levels/stage8_lvl72_B.jpg'
      : isLevelSeventyThree
      ? '/levels/stage8_lvl73_B.jpg'
      : isLevelSeventyFour
      ? '/levels/stage8_lvl74_B.jpg'
      : isLevelSeventyFive
      ? '/levels/stage8_lvl75_B.jpg'
      : isLevelSeventySix
      ? '/levels/stage8_lvl76_B.jpg'
      : isLevelSeventySeven
      ? '/levels/stage8_lvl77_B.jpg'
      : isLevelSeventyEight
      ? '/levels/stage8_lvl78_B.jpg'
      : isLevelSeventyNine
      ? '/levels/stage8_lvl79_B.jpg'
      : isLevelEighty
      ? '/levels/stage8_lvl80_B.jpg'
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
      ? '/levels/stage8_lvl71_B.jpg'
      : isLevelSeventyTwo
      ? '/levels/stage8_lvl72_B.jpg'
      : isLevelSeventyThree
      ? '/levels/stage8_lvl73_B.jpg'
      : isLevelSeventyFour
      ? '/levels/stage8_lvl74_B.jpg'
      : isLevelSeventyFive
      ? '/levels/stage8_lvl75_B.jpg'
      : isLevelSeventySix
      ? '/levels/stage8_lvl76_B.jpg'
      : isLevelSeventySeven
      ? '/levels/stage8_lvl77_B.jpg'
      : isLevelSeventyEight
      ? '/levels/stage8_lvl78_B.jpg'
      : isLevelSeventyNine
      ? '/levels/stage8_lvl79_B.jpg'
      : isLevelEighty
      ? '/levels/stage8_lvl80_B.jpg'
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
        { id: `lvl${id}_d1`, x: 62.08, y: 58.31, radius: 5.5, name: "Il Teschio dell'Iniziato Templare", loreClue: "Il teschio sacro recante l'incisione del crittogramma templare è stato asportato dalla nicchia d'altare." },
        { id: `lvl${id}_d2`, x: 72.29, y: 81.19, radius: 6.0, name: "Il Piccone da Minatore contro la Parete", loreClue: "L'attrezzo da scavo usato dagli intrusi per violare il muro dell'ossario è stato portato via per non lasciare tracce." },
        { id: `lvl${id}_d3`, x: 50.00, y: 83.98, radius: 5.5, name: "Il Calice Liturgico Templare", loreClue: "L'antico calice da comunione dell'ordine, contenente residui d'unguento sacro, è svanito dal tavolo d'altare." },
        { id: `lvl${id}_d4`, x: 59.88, y: 86.50, radius: 4.5, name: "L'Ampolla Alchemica di Reagente", loreClue: "La boccetta di vetro con il reagente di cinabro alchemico è stata sottratta dal banco da lavoro." },
        { id: `lvl${id}_d5`, x: 54.37, y: 87.89, radius: 4.5, name: "La Fiala Sferica dell'Acido di Dissoluzione", loreClue: "La fiala sferica per corrodere le serrature metalliche della cripta è scomparsa." },
        { id: `lvl${id}_d6`, x: 19.38, y: 86.50, radius: 6.0, name: "I Rotoli con la Mappa delle Catacombe", loreClue: "Le pergamene con la topografia segreta delle gallerie sotterranee parigine sono state trafugate." },
        { id: `lvl${id}_d7`, x: 17.29, y: 44.08, radius: 6.0, name: "La Torcia sul Pilastro Sinistro", loreClue: "La torcia accesa a staffa sul pilastro dell'ossario è stata spenta e divelta dal supporto." },
        { id: `lvl${id}_d8`, x: 75.62, y: 44.64, radius: 6.5, name: "La Torcia Monumentale della Parete Destra", loreClue: "Il braciere a torcia che illuminava il lato destro dell'altare è stato asportato dal muro di pietra." },
        { id: `lvl${id}_d9`, x: 62.29, y: 33.20, radius: 6.5, name: "L'Incisione Latina sull'Arco", loreClue: "La formula latina 'SECRETA MORTIS APERIUNTUR' incisa a scalpello sull'arco è stata abrasa per celare l'enigma." },
        { id: `lvl${id}_d10`, x: 55.62, y: 94.64, radius: 5.5, name: "La Mappa Navale Arrotolata sulla Tavola", loreClue: "La carta nautica con le rotte atlantiche della flotta templare è scomparsa dal piano del tavolo." },
      ];
    } else if (isLevelTwelve) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 14.00, y: 12.50, radius: 4.0, name: "Il Lampadario Sospeso della Navata Sinistra", loreClue: "Il candeliere pensile in bronzo dorato appeso alla volta laterale è scomparso nell'aria." },
        { id: `lvl${id}_d2`, x: 84.50, y: 12.50, radius: 4.0, name: "Il Lampadario Sospeso della Navata Destra", loreClue: "La lampada monumentale a catene d'ottone calata dall'arco destro è stata smontata." },
        { id: `lvl${id}_d3`, x: 26.50, y: 64.96, radius: 4.0, name: "La Lampada ad Applique del Pilastro Sinistro", loreClue: "Il braccio portacandele in ferro battuto fissato al pilastro corinzio è stato rimosso." },
        { id: `lvl${id}_d4`, x: 73.00, y: 64.51, radius: 4.0, name: "La Lampada ad Applique del Pilastro Destro", loreClue: "L'applique liturgica sagomata in bronzo lungo la navata destra non è più ancorata al marmo." },
        { id: `lvl${id}_d5`, x: 50.00, y: 47.54, radius: 3.5, name: "L'Oculo Dorato della Gloria dell'Altare", loreClue: "Il raggio solare centrale a rilievo dorato nel frontone dell'abside appare colmato in stucco grigio." },
        { id: `lvl${id}_d6`, x: 35.00, y: 38.50, radius: 4.0, name: "Il Capitello Corinzio dell'Arco Trionfale a Sinistra", loreClue: "Il cespo d'acanto scolpito a forte rilievo sul pilastro d'imposta sinistro è stato levigato." },
        { id: `lvl${id}_d7`, x: 64.50, y: 38.50, radius: 4.0, name: "Il Capitello Corinzio dell'Arco Trionfale a Destra", loreClue: "Le volute dorate del capitello d'ordine corinzio sulla destra sono state scalpellate via." },
        { id: `lvl${id}_d8`, x: 34.00, y: 63.50, radius: 3.5, name: "La Statua Apostolica nella Nicchia Sinistra", loreClue: "La figura scultorea in marmo bianco del santo apostolo nella nicchia è scomparsa." },
        { id: `lvl${id}_d9`, x: 65.50, y: 63.50, radius: 3.5, name: "La Statua Apostolica nella Nicchia Destra", loreClue: "La statua neoclassica in marmo di Carrara sul lato destro del presbiterio è assente." },
        { id: `lvl${id}_d10`, x: 50.00, y: 65.51, radius: 3.5, name: "La Croce Monumentale dell'Altar Maggiore", loreClue: "Il crocifisso dorato cesellato collocato al centro del tabernacolo monumentale è stato prelevato." },
      ];
    } else if (isLevelThirteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 8.50, y: 38.50, radius: 4.0, name: "Il Braccio Trasversale della Croce di Ossa", loreClue: "Il braccio orizzontale della croce composta di tibie umane sulla parete sinistra è rimosso." },
        { id: `lvl${id}_d2`, x: 8.50, y: 72.00, radius: 4.0, name: "Il Piedistallo di Tibie della Croce Sinistra", loreClue: "La base sagomata di ossa sovrapposte sotto la croce murale è stata colmata da ciottoli." },
        { id: `lvl${id}_d3`, x: 44.00, y: 12.05, radius: 4.0, name: "La Spaccatura nella Volta di Calcare a Sinistra", loreClue: "La profonda fessura tettonica nel banco roccioso della cava sotterranea appare sigillata." },
        { id: `lvl${id}_d4`, x: 82.00, y: 12.05, radius: 4.0, name: "La Fenditura di Roccia nella Volta a Destra", loreClue: "Il giunto geologico naturale nella volta di calcare lutetiano è uniformato con pietra chiara." },
        { id: `lvl${id}_d5`, x: 33.00, y: 26.45, radius: 4.0, name: "Il Cranio Superiore della Rotonda a Sinistra", loreClue: "Uno dei teschi posti nella fascia ornamentale superiore è stato sostituito da un blocco di malta." },
        { id: `lvl${id}_d6`, x: 67.00, y: 26.45, radius: 4.0, name: "Il Cranio Superiore della Rotonda a Destra", loreClue: "Il teschio frontale allineato sul fregio osseo destro è scomparso dalla fila della rotonda." },
        { id: `lvl${id}_d7`, x: 53.50, y: 60.49, radius: 4.0, name: "Il Teschio Mediano dell'Ossario Centrale", loreClue: "Il cranio incastonato al centro della monumentale catasta di femori è stato asportato." },
        { id: `lvl${id}_d8`, x: 37.00, y: 89.51, radius: 4.0, name: "Il Cranio Basale della Facciata Sinistra", loreClue: "Il cranio d'angolo al basamento del muro d'ossa è sostituito da frammenti minuti." },
        { id: `lvl${id}_d9`, x: 63.00, y: 89.51, radius: 4.0, name: "Il Cranio Basale della Facciata Destra", loreClue: "Uno dei grandi teschi alla base del contrafforte osseo a destra è stato rimosso dalla fila." },
        { id: `lvl${id}_d10`, x: 92.00, y: 35.04, radius: 4.0, name: "Il Teschio Isolato della Parete Destra", loreClue: "Il cranio incassato nel muro di contenimento laterale scompare tra le ossa lunghe compatte." },
      ];
    } else if (isLevelFourteen) {
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
    } else if (isLevelFifteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 10.04, radius: 4.0, name: "Il Cranio Sommitale Sinistro della Muraglia", loreClue: "Il teschio in alto a sinistra lungo la cornice superiore di tibie è stato tolto." },
        { id: `lvl${id}_d2`, x: 75.00, y: 12.05, radius: 4.0, name: "Il Cranio Sommitale Destro della Muraglia", loreClue: "Il teschio che corona l'estremità destra della balaustra funeraria è scomparso." },
        { id: `lvl${id}_d3`, x: 49.00, y: 44.98, radius: 4.0, name: "Il Cranio al Centro della Grande Croce", loreClue: "Il teschio centrale all'incrocio dei bracci della croce parietale è svanito nella muratura." },
        { id: `lvl${id}_d4`, x: 48.50, y: 63.50, radius: 4.0, name: "Il Cranio al Piede della Grande Croce", loreClue: "Il teschio che chiude la parte inferiore del fusto della croce è stato rimosso dalla catasta." },
        { id: `lvl${id}_d5`, x: 6.50, y: 78.01, radius: 4.0, name: "Il Cranio Inferiore del Contrafforte Sinistro", loreClue: "Il teschio alla base della colonna di contenimento sinistra è sostituito da pietrisco." },
        { id: `lvl${id}_d6`, x: 65.00, y: 82.03, radius: 4.0, name: "Il Cranio Inferiore della Campata Destra", loreClue: "Il teschio allineato sulla fascia di zoccolatura destra è scomparso rivelando le ossa sottostanti." },
        { id: `lvl${id}_d7`, x: 85.00, y: 56.47, radius: 4.0, name: "Il Teschio Laterale sulla Fascia Destra", loreClue: "Il cranio che scandisce il ritmo decorativo sul pilastro laterale destro è stato tolto." },
        { id: `lvl${id}_d8`, x: 7.00, y: 43.53, radius: 4.0, name: "Il Teschio della Fascia di Metà Parete Sinistra", loreClue: "Uno dei teschi sentinella sulla parete laterale sinistra è assente dal muro d'ossa." },
        { id: `lvl${id}_d9`, x: 50.00, y: 94.98, radius: 4.0, name: "Il Grande Teschio alla Base dell'Ossario", loreClue: "Il cranio posto a terra lungo il basamento monumentale è stato prelevato." },
        { id: `lvl${id}_d10`, x: 67.50, y: 5.02, radius: 4.0, name: "Il Cranio Mediano del Fregio Superiore", loreClue: "Il teschio incastrato tra le pietre della volta di cava è svanito nel profilo d'ombra." },
      ];
    } else if (isLevelSixteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 26.50, y: 26.45, radius: 4.0, name: "L'Incisione 'PRINCIPIUM' sulla Stele Sinistra", loreClue: "L'epigrafe scolpita sulla lapide monumentale a sinistra del sarcofago è stata raschiata." },
        { id: `lvl${id}_d2`, x: 88.00, y: 26.45, radius: 4.0, name: "La Lettera Terminale della Stele Destra", loreClue: "I caratteri romani scolpiti nella pietra della stele funeraria destra sono stati piallati a piombo." },
        { id: `lvl${id}_d3`, x: 43.00, y: 19.53, radius: 4.0, name: "La Parola 'HOMO' sulla Targa Lapidea", loreClue: "La prima riga del versetto biblico scolpito nella lastra marmorea centrale appare levigata." },
        { id: `lvl${id}_d4`, x: 53.00, y: 28.46, radius: 4.0, name: "La Parola 'PERTRANSIBIT' sull'Epigrafe", loreClue: "La massima latina 'pertransibit' incisa al centro del monumento scompare dalla lastra." },
        { id: `lvl${id}_d5`, x: 45.00, y: 35.50, radius: 4.0, name: "La Parola 'AMPLIUS' in Chiusura del Versetto", loreClue: "L'ultima parola dell'ammonimento sepolcrale è scomparsa lasciando il marmo liscio." },
        { id: `lvl${id}_d6`, x: 10.00, y: 59.49, radius: 4.0, name: "Il Dente d'Incastro Sinistro del Coperchio", loreClue: "La risega lapidea ad angolo retto sul coperchio in pietra del sepolcro è stata smussata." },
        { id: `lvl${id}_d7`, x: 95.00, y: 59.49, radius: 4.0, name: "Il Dente d'Incastro Destro del Coperchio", loreClue: "Il gradino di battuta del massiccio coperchio monolitico di destra appare complanare." },
        { id: `lvl${id}_d8`, x: 50.00, y: 76.45, radius: 4.0, name: "L'Iscrizione Funeraria sul Basamento", loreClue: "I caratteri scolpiti sul basamento orizzontale in arenaria del sarcofago sono stati rimossi." },
        { id: `lvl${id}_d9`, x: 18.50, y: 92.97, radius: 4.0, name: "L'Angolo Sinistro del Basamento a Terra", loreClue: "Lo zoccolo scolpito a gradoni alla base del plinto sinistro risulta piallato a filo terra." },
        { id: `lvl${id}_d10`, x: 81.50, y: 92.97, radius: 4.0, name: "L'Angolo Destro del Basamento a Terra", loreClue: "Il profilo a gola dello zoccolo d'appoggio destro è sostituito da un concio continuo." },
      ];
    } else if (isLevelSeventeen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 50.00, y: 17.52, radius: 4.5, name: "Il Tondo Dorato Centrale del Soffitto", loreClue: "La grande medaglia dorata all'apice del cassettonato a botte è svanita nel fondo azzurro." },
        { id: `lvl${id}_d2`, x: 34.00, y: 3.46, radius: 4.0, name: "Il Putto Alato in Stucco Sinistro", loreClue: "La scultura in stucco dorato del cherubino alato sulla volta sinistra è stata asportata." },
        { id: `lvl${id}_d3`, x: 66.00, y: 3.46, radius: 4.0, name: "Il Putto Alato in Stucco Destro", loreClue: "L'angelo in foglia d'oro posato sul cornicione barocco a destra è scomparso dalla composizione." },
        { id: `lvl${id}_d4`, x: 15.00, y: 67.52, radius: 4.0, name: "Il Ritratto Reale in Arazzo a Sinistra", loreClue: "Il dipinto a olio del sovrano racchiuso nella boiserie sinistra scompare nel fondo cremisi." },
        { id: `lvl${id}_d5`, x: 85.50, y: 66.52, radius: 4.0, name: "Il Ritratto Reale in Arazzo a Destra", loreClue: "Il ritratto nobiliare del ministro delle finanze nella campata destra è stato rimosso." },
        { id: `lvl${id}_d6`, x: 3.50, y: 49.55, radius: 4.0, name: "Il Capitello Dorato della Parasta Sinistra", loreClue: "Il sontuoso capitello composito a rilievo d'oro sulla parete d'ingresso è stato tolto." },
        { id: `lvl${id}_d7`, x: 50.00, y: 46.99, radius: 4.0, name: "Il Raggio Solare del Re Sole nella Volta", loreClue: "Il raggio fiammeggiante in oro massiccio che irradia dal carro di Apollo è stato limato." },
        { id: `lvl${id}_d8`, x: 23.50, y: 38.50, radius: 4.0, name: "La Cariatide Dorata della Lunetta Sinistra", loreClue: "La figura statuaria di sostegno intagliata a sinistra dell'arcone è assente dalla trabeazione." },
        { id: `lvl${id}_d9`, x: 77.00, y: 38.50, radius: 4.0, name: "La Cariatide Dorata della Lunetta Destra", loreClue: "La cariatide cesellata con cornucopia sul fregio destro è scomparsa lasciando la mensola vuota." },
        { id: `lvl${id}_d10`, x: 96.50, y: 67.97, radius: 4.0, name: "Il Fregio ad Arabesco della Vetrata", loreClue: "Il motivo a racemi in ferro dorato alla base della vetrata monumentale è stato rimosso." },
      ];
    } else if (isLevelEighteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 10.50, y: 26.45, radius: 4.0, name: "Il Cranio Estremo del Cantone Sinistro", loreClue: "Il teschio che segna l'angolo della galleria mineraria a sinistra è scomparso dal profilo." },
        { id: `lvl${id}_d2`, x: 97.00, y: 31.03, radius: 4.0, name: "Il Cranio Estremo del Cantone Destro", loreClue: "Il teschio all'estremità della catasta d'ossa a destra svanisce nell'oscurità del cunicolo." },
        { id: `lvl${id}_d3`, x: 30.50, y: 32.48, radius: 4.0, name: "Il Teschio della Seconda Fila a Sinistra", loreClue: "Uno dei teschi della fila orizzontale mediana appare sostituito da compatto strato di ossa." },
        { id: `lvl${id}_d4`, x: 81.00, y: 35.50, radius: 4.0, name: "Il Teschio della Seconda Fila a Destra", loreClue: "Il cranio allineato lungo la modanatura d'ossa destra è stato rimosso dal paramento." },
        { id: `lvl${id}_d5`, x: 44.00, y: 29.46, radius: 4.0, name: "Il Teschio Centrale Superiore dello Spigolo", loreClue: "Il cranio che serra l'ammorsatura d'angolo delle ossa è assente lasciando una lacuna." },
        { id: `lvl${id}_d6`, x: 14.00, y: 75.45, radius: 4.0, name: "Il Cranio Inferiore del Pilastro Sinistro", loreClue: "Il teschio alla quota inferiore della parete sinistra scompare tra i femori sovrapposti." },
        { id: `lvl${id}_d7`, x: 33.50, y: 71.99, radius: 4.0, name: "Il Teschio della Zoccolatura Centrale", loreClue: "Uno dei teschi che fungono da fascia marcapiano nell'angolo dell'ossario è stato tolto." },
        { id: `lvl${id}_d8`, x: 75.50, y: 67.97, radius: 4.0, name: "Il Cranio Inferiore della Campata Destra", loreClue: "Il teschio incastonato alla base del muretto a secco destro è svanito nel pietrisco." },
        { id: `lvl${id}_d9`, x: 46.00, y: 95.98, radius: 4.0, name: "Il Cranio a Terra al Centro dell'Angolo", loreClue: "Il teschio posato a terra sull'intersezione dei camminamenti è stato prelevato." },
        { id: `lvl${id}_d10`, x: 76.00, y: 94.98, radius: 4.0, name: "Il Cranio a Terra sul Lato Destro", loreClue: "L'ultimo teschio all'angolo destro del calpestio è scomparso lasciando il suolo nudo." },
      ];
    } else if (isLevelNineteen) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 54.00, y: 20.98, radius: 4.0, name: "Lo Scudo Araldico della Città di Lione", loreClue: "Il blasone policromo con i leoni dorati sullo stemma centrale della volta è stato rimosso." },
        { id: `lvl${id}_d2`, x: 46.50, y: 16.52, radius: 4.0, name: "L'Angelo Tutelare in Stucco a Sinistra", loreClue: "La scultura in gesso dorato dell'angelo reggiscudo a sinistra è scomparsa dal timpano." },
        { id: `lvl${id}_d3`, x: 61.50, y: 16.52, radius: 4.0, name: "L'Angelo Tutelare in Stucco a Destra", loreClue: "L'angelo dorato simmetrico che corona l'arcone di destra svanisce nei festoni barocchi." },
        { id: `lvl${id}_d4`, x: 18.00, y: 45.98, radius: 4.0, name: "Il Dipinto Paesaggistico della Costa Azzurra", loreClue: "Il grande dipinto a olio che ritrae Nizza nella lunetta a sinistra appare velato in bruno." },
        { id: `lvl${id}_d5`, x: 82.00, y: 45.98, radius: 4.0, name: "Il Dipinto Paesaggistico di Monaco a Destra", loreClue: "La veduta marinaresca incorniciata in foglia d'oro sulla parete destra è stata rimossa." },
        { id: `lvl${id}_d6`, x: 33.00, y: 54.46, radius: 4.0, name: "La Lampada ad Applique in Bronzo a Sinistra", loreClue: "Il braccio a fiaccola in bronzo dorato sul pilastro di noce a sinistra è stato smontato." },
        { id: `lvl${id}_d7`, x: 68.50, y: 57.48, radius: 4.0, name: "La Lampada ad Applique in Bronzo a Destra", loreClue: "L'applique Belle Époque con globi di cristallo sfaccettato a destra non è più ancorata." },
        { id: `lvl${id}_d8`, x: 48.00, y: 46.54, radius: 4.0, name: "Il Grande Lampadario di Cristallo Centrale", loreClue: "Il maestoso lampadario a gocce di cristallo di Boemia al centro della sala è assente." },
        { id: `lvl${id}_d9`, x: 94.00, y: 4.46, radius: 4.0, name: "Il Rosone di Cristallo Superiore a Destra", loreClue: "Il lampadario emisferico in cristallo dorato calato dalla volta destra è scomparso." },
        { id: `lvl${id}_d10`, x: 62.50, y: 77.01, radius: 4.0, name: "La Ringhiera in Ottone del Banco Bar", loreClue: "Il corrimano tubolare d'ottone lucido che delimita la postazione del maître è stato tolto." },
      ];
    } else if (isLevelTwenty) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 50.00, y: 3.46, radius: 4.0, name: "La Chiave di Volta Dorata a Fiore di Giglio", loreClue: "Il fiordaliso in foglia d'oro cesellato al centro dell'ogiva gotica è stato scalpellato." },
        { id: `lvl${id}_d2`, x: 5.00, y: 18.53, radius: 4.0, name: "Il Candelabro Monumentale della Parete Sinistra", loreClue: "Il grande candelabro liturgico in ottone ancorato al fascio di colonnine è scomparso." },
        { id: `lvl${id}_d3`, x: 94.50, y: 18.53, radius: 4.0, name: "Il Candelabro Monumentale della Parete Destra", loreClue: "Il portalampada in bronzo dorato fissato sul montante di destra è stato tolto dal muro." },
        { id: `lvl${id}_d4`, x: 26.50, y: 70.98, radius: 4.0, name: "Il Lampadario Gotico Sospeso a Sinistra", loreClue: "La corona di luci a sesto acuto calata sulla navata sinistra svanisce nell'aria." },
        { id: `lvl${id}_d5`, x: 71.50, y: 70.98, radius: 4.0, name: "Il Lampadario Gotico Sospeso a Destra", loreClue: "Il lampadario pensile dorato sopra gli stalli del coro di destra è stato rimosso." },
        { id: `lvl${id}_d6`, x: 50.00, y: 62.50, radius: 4.0, name: "Il Pinnacolo del Reliquiario della Sacra Spina", loreClue: "La guglia traforata in oro massiccio che corona la grande teca reliquiaria è assente." },
        { id: `lvl${id}_d7`, x: 50.00, y: 93.97, radius: 4.0, name: "L'Arcata a Traforo dell'Altar Maggiore", loreClue: "I trafori gotici dorati alla base dell'altare reale di Saint Louis sono stati levigati." },
        { id: `lvl${id}_d8`, x: 49.00, y: 30.02, radius: 4.0, name: "Il Quadrilobo Vetro Blu della Vetrata Centrale", loreClue: "Il tassello circolare in vetro blu oltremare della monumentale vetrata duecentesca appare opaco." },
        { id: `lvl${id}_d9`, x: 14.00, y: 93.97, radius: 4.0, name: "La Statua Apostolica del Baldacchino Sinistro", loreClue: "La scultura policroma di San Pietro sul pilastro del coro è scomparsa dal basamento." },
        { id: `lvl${id}_d10`, x: 85.50, y: 93.97, radius: 4.0, name: "La Statua Apostolica del Baldacchino Destro", loreClue: "La figura scolpita di San Giovanni alla destra del santuario è stata tolta dal suo plinto." },
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
        { id: `lvl${id}_d1`, x: 76.43, y: 13.61, radius: 4.8, name: "La Clessidra a Doppia Ampolla", loreClue: "La clessidra d'ottone e cristallo sullo scaffale alto della libreria cinquecentesca è stata rimossa dalla Mano Occulta." },
        { id: `lvl${id}_d2`, x: 86.77, y: 9.74, radius: 3.5, name: "L'Ampolla di Vetro sullo Scaffale", loreClue: "L'ampolla in vetro soffiato di Murano posata sulla cornice superiore dello scaffale è sparita nel nulla." },
        { id: `lvl${id}_d3`, x: 63.47, y: 19.04, radius: 4.0, name: "La Bottiglia Verde dei Reagenti", loreClue: "La bottiglia di reagente verde alchemico sulla mensola delle essenze è stata sottratta dallo scaffale." },
        { id: `lvl${id}_d4`, x: 52.19, y: 76.33, radius: 6.0, name: "Il Compasso Sinistro sulla Mappa", loreClue: "Il compasso nautico in ottone a punte aperte sulla pergamena di Marco Polo è svanito: la rotta non può più essere misurata." },
        { id: `lvl${id}_d5`, x: 62.44, y: 77.90, radius: 5.2, name: "Il Compasso Destro sulla Mappa", loreClue: "Il secondo compasso da carteggio posato sul Mediterraneo è scomparso dalla mappa dello studioso." },
        { id: `lvl${id}_d6`, x: 75.21, y: 69.42, radius: 6.2, name: "Il Calamaio con Penna d'Oca", loreClue: "Il calamaio in pietra nera e la penna d'oca da cartografo sono stati trafugati dal piano di lavoro." },
        { id: `lvl${id}_d7`, x: 28.38, y: 72.12, radius: 6.8, name: "Il Taccuino di Cuoio", loreClue: "Il diario in cuoio brunito contenente gli appunti cifrati sulle terre oltreoceano è scomparso dal tavolo." },
        { id: `lvl${id}_d8`, x: 38.76, y: 66.07, radius: 3.8, name: "La Boccetta di Spezie sul Tavolo", loreClue: "La boccetta farmaceutica in vetro ambrato posata accanto ai distillatori è stata asportata." },
        { id: `lvl${id}_d9`, x: 94.09, y: 72.38, radius: 7.5, name: "Il Candeliere con Cero Acceso", loreClue: "Il candeliere di bronzo con il cero acceso sull'angolo destro del tavolo è svanito nell'ombra." },
        { id: `lvl${id}_d10`, x: 31.17, y: 80.30, radius: 3.5, name: "Il Piccolo Rotolo di Pergamena", loreClue: "Il rotolino di pergamena legato che sporgeva dal bordo inferiore del tavolo da studio è stato asportato." },
      ];
    } else if (isLevelTwentyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.80, y: 8.35, radius: 4.0, name: "Il Cassettone Dorato della Volta Sinistra", loreClue: "Il fregio dorato a rilievo nel cassettonato a sinistra è stato piallato lasciando il fondo scuro." },
        { id: `lvl${id}_d2`, x: 49.95, y: 7.27, radius: 4.0, name: "Il Grande Medaglione Centrale del Veronese", loreClue: "La figura allegorica centrale del soffitto monumentale svanisce nel fondo bruno della tela." },
        { id: `lvl${id}_d3`, x: 79.13, y: 8.35, radius: 4.0, name: "Il Cassettone Dorato della Volta Destra", loreClue: "I racemi d'oro intagliati sul comparto ligneo destro sono stati rimossi." },
        { id: `lvl${id}_d4`, x: 49.97, y: 25.05, radius: 4.0, name: "La Ghirlanda Superiore della Sala del Maggior Consiglio", loreClue: "I festoni in stucco dorato sopra l'arcone sono stati asportati dalla trabeazione." },
        { id: `lvl${id}_d5`, x: 7.48, y: 37.34, radius: 4.0, name: "Il Capitello Corinzio della Parasta Sinistra", loreClue: "Le volute dorate del capitello sul pilastro d'ingresso sinistro risultano scalpellate." },
        { id: `lvl${id}_d6`, x: 92.48, y: 37.40, radius: 4.0, name: "Il Capitello Corinzio della Parasta Destra", loreClue: "Il capitello in foglia d'oro sulla parete d'onore destra è sostituito da collarino liscio." },
        { id: `lvl${id}_d7`, x: 14.96, y: 58.03, radius: 4.0, name: "Il Dipinto delle Vittorie Navali a Sinistra", loreClue: "Uno dei vascelli da guerra della flotta veneziana nel telerio sinistro appare velato." },
        { id: `lvl${id}_d8`, x: 50.01, y: 62.44, radius: 4.0, name: "Il Trono Ducale al Centro della Sala", loreClue: "Il dossale cerimoniale in velluto cremisi dello scranno del Doge è stato tolto dal podio." },
        { id: `lvl${id}_d9`, x: 84.97, y: 58.01, radius: 4.0, name: "Il Dipinto delle Vittorie Navali a Destra", loreClue: "La figura dell'ammiraglio veneto nella grande tela a destra è svanita nel colore." },
        { id: `lvl${id}_d10`, x: 50.00, y: 89.86, radius: 4.0, name: "I Banchi Lignei dei Patrizi al Centro", loreClue: "Lo scranno in noce dei patrizi della Serenissima al centro della sala è stato rimosso." },
      ];
    } else if (isLevelTwentyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 17.51, y: 13.90, radius: 4.0, name: "Il Mosaico Dorato dell'Arco Sinistro", loreClue: "Le tessere d'oro e pasta vitrea della volta sinistra sono sostituite da intonaco grigio." },
        { id: `lvl${id}_d2`, x: 49.85, y: 6.12, radius: 4.0, name: "L'Apostolo nel Mosaico della Cupola Centrale", loreClue: "La figura aurea del discepolo alla sommità della cupola orientale appare velata." },
        { id: `lvl${id}_d3`, x: 82.48, y: 14.04, radius: 4.0, name: "Il Mosaico Dorato dell'Arco Destro", loreClue: "Il motivo bizantino a tessere auree sull'arcata destra è stato scalpellato via." },
        { id: `lvl${id}_d4`, x: 49.79, y: 27.43, radius: 4.0, name: "La Croce Bizantina al Vertice dell'Arcone", loreClue: "La croce d'oro incastonata nel concio di chiave dell'arcone centrale è scomparsa." },
        { id: `lvl${id}_d5`, x: 50.01, y: 49.63, radius: 4.0, name: "Il Cristo Pantocratore dell'Abside", loreClue: "Il nimbo crucigero dorato del Cristo benedicente nell'abside scompare dal catino." },
        { id: `lvl${id}_d6`, x: 12.49, y: 55.22, radius: 4.0, name: "Il Capitello Bizantino del Pilastro Sinistro", loreClue: "Il capitello a nido d'ape scolpito nel marmo proconnesio sinistro è stato piallato." },
        { id: `lvl${id}_d7`, x: 87.52, y: 55.26, radius: 4.0, name: "Il Capitello Bizantino del Pilastro Destro", loreClue: "Le foglie d'acanto traforate a trapano sul pilastro destro appaiono levigate." },
        { id: `lvl${id}_d8`, x: 19.98, y: 71.93, radius: 4.0, name: "La Colonna di Porfido Rosso Sinistra", loreClue: "Il fusto in prezioso porfido egizio della navata sinistra è sostituito da calcare chiaro." },
        { id: `lvl${id}_d9`, x: 79.93, y: 71.99, radius: 4.0, name: "La Colonna di Verde Antico Destra", loreClue: "La marmorea colonna venata di verde tessalico a destra appare piallata e opaca." },
        { id: `lvl${id}_d10`, x: 50.19, y: 91.99, radius: 4.0, name: "La Lastra Pavimentale ad Opus Sectile", loreClue: "I tasselli geometrici in diaspro e porfido del pavimento marciano sono scomparsi dal suolo." },
      ];
    } else if (isLevelTwentyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 61.86, y: 71.65, radius: 8.0, name: "La Gondola in Primo Piano", loreClue: "La gondola con il gondoliere in piedi e i passeggeri in primo piano nel canale è svanita dall'acqua." },
        { id: `lvl${id}_d2`, x: 51.03, y: 68.62, radius: 5.5, name: "La Gondola con Remo Rosso", loreClue: "La seconda gondola a sinistra con il lungo remo rosso e la dama a prua è scomparsa dalla vista." },
        { id: `lvl${id}_d3`, x: 54.14, y: 59.07, radius: 3.5, name: "La Gondola sotto il Ponte", loreClue: "La terza gondola che scivolava sotto l'arcata del Ponte della Paglia in lontananza è svanita." },
        { id: `lvl${id}_d4`, x: 32.93, y: 82.96, radius: 8.5, name: "I Grandi Pali d'Ormeggio Blu", loreClue: "La coppia di alti pali lignei da gondola dipinti di blu acceso conficcati nella laguna è scomparsa." },
        { id: `lvl${id}_d5`, x: 28.40, y: 79.38, radius: 3.5, name: "La Passerella d'Ormeggio in Legno", loreClue: "La pedana di sbarco in assi di legno tra la riva e i pali d'ormeggio è stata smontata." },
        { id: `lvl${id}_d6`, x: 46.50, y: 28.52, radius: 4.5, name: "La Grata Traforata della Finestra Sinistra", loreClue: "Il prezioso reticolo in pietra a traforo floreale della finestra sinistra del Ponte dei Sospiri è scomparso." },
        { id: `lvl${id}_d7`, x: 61.48, y: 28.53, radius: 4.5, name: "La Grata Traforata della Finestra Destra", loreClue: "La seconda grata marmorea traforata della finestra destra affacciata sul Rio di Palazzo è stata rimossa." },
        { id: `lvl${id}_d8`, x: 54.20, y: 16.93, radius: 4.0, name: "La Statua della Giustizia sul Timpano", loreClue: "L'altorilievo della Giustizia assisa in trono alla sommità del frontone monumentale è svanito." },
        { id: `lvl${id}_d9`, x: 55.09, y: 28.72, radius: 4.2, name: "Lo Stemma dei Dogi tra le Finestre", loreClue: "Il cartiglio araldico con lo stemma dogale incastonato tra le due finestre del ponte è stato rimosso." },
        { id: `lvl${id}_d10`, x: 46.68, y: 9.59, radius: 3.5, name: "La Grande Voluta del Fastigio", loreClue: "La monumentale voluta lapidea a spirale sulla cresta sinistra del frontone del ponte è scomparsa." },
      ];
    } else if (isLevelTwentyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 49.99, y: 7.20, radius: 4.0, name: "Il Rosone Centrale in Foglia d'Oro della Volta", loreClue: "La corona di stucchi dorati al centro del soffitto del teatro La Fenice è assente." },
        { id: `lvl${id}_d2`, x: 14.94, y: 17.24, radius: 4.0, name: "Il Palchetto Superiore d'Angolo Sinistro", loreClue: "Il parapetto in cartapesta dorata e damasco blu dell'ultimo ordine è rimosso." },
        { id: `lvl${id}_d3`, x: 84.95, y: 17.22, radius: 4.0, name: "Il Palchetto Superiore d'Angolo Destro", loreClue: "I rilievi dorati a lira del loggione superiore destro svaniscono nella parete." },
        { id: `lvl${id}_d4`, x: 12.46, y: 46.23, radius: 4.0, name: "L'Applique a Cristalli del Secondo Ordine a Sinistra", loreClue: "La lampada a bracci dorati del palchetto centrale sinistro è stata tolta." },
        { id: `lvl${id}_d5`, x: 49.85, y: 43.21, radius: 4.0, name: "Il Palco Reale Monumentale al Centro", loreClue: "Lo stemma nobiliare con drappeggio dorato sul Palco Imperiale è scomparso." },
        { id: `lvl${id}_d6`, x: 87.43, y: 46.21, radius: 4.0, name: "L'Applique a Cristalli del Secondo Ordine a Destra", loreClue: "Il candeliere in cristallo di Boemia del palco destro è stato smontato." },
        { id: `lvl${id}_d7`, x: 17.50, y: 67.51, radius: 4.0, name: "Il Parapetto in Velluto Rosso del Terzo Palco Sinistro", loreClue: "Il cuscino e passamaneria in velluto rubino del palco basso sono assenti." },
        { id: `lvl${id}_d8`, x: 49.95, y: 73.06, radius: 4.0, name: "Il Pavimento in Legno della Platea", loreClue: "La fila di poltrone in velluto al centro della platea svanisce nel parquet di rovere." },
        { id: `lvl${id}_d9`, x: 82.49, y: 67.46, radius: 4.0, name: "Il Parapetto in Velluto Rosso del Terzo Palco Destro", loreClue: "I festoni dorati del parapetto di proscenio destro sono stati rimossi." },
        { id: `lvl${id}_d10`, x: 49.97, y: 93.05, radius: 4.0, name: "La Buca dell'Orchestra sotto il Palcoscenico", loreClue: "Il leggio del maestro concertatore nella fossa d'orchestra è scomparso." },
      ];
    } else if (isLevelTwentySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 21.61, y: 10.57, radius: 4.0, name: "Il Tondo Dipinto del Soffitto a Sinistra", loreClue: "La tela a olio di Paolo Veronese nel riquadro dorato sinistro appare velata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 8.36, radius: 4.0, name: "Il Tondo Centrale dei Filosofi", loreClue: "La composizione pittorica rinascimentale al centro della volta è scomparsa." },
        { id: `lvl${id}_d3`, x: 78.34, y: 10.61, radius: 4.0, name: "Il Tondo Dipinto del Soffitto a Destra", loreClue: "Il dipinto allegorico cinquecentesco del comparto destro svanisce nel buio." },
        { id: `lvl${id}_d4`, x: 49.95, y: 26.18, radius: 4.0, name: "La Cornice a Festoni Dorati del Soffitto", loreClue: "I rilievi in stucco dorato del Sansovino attorno all'arcone centrale sono rimossi." },
        { id: `lvl${id}_d5`, x: 10.02, y: 41.91, radius: 4.0, name: "La Statua Antica nella Nicchia Parete Sinistra", loreClue: "Il busto marmoreo del filosofo greco nella nicchia sinistra è stato tolto." },
        { id: `lvl${id}_d6`, x: 90.04, y: 41.85, radius: 4.0, name: "La Statua Antica nella Nicchia Parete Destra", loreClue: "La scultura in marmo pario sul pilastro destro della sala è scomparsa." },
        { id: `lvl${id}_d7`, x: 18.36, y: 61.90, radius: 4.0, name: "Il Ritratto Accademico tra le Paraste a Sinistra", loreClue: "Il dipinto a olio tra le colonne ioniche a sinistra scompare dalla parete." },
        { id: `lvl${id}_d8`, x: 49.96, y: 66.36, radius: 4.0, name: "Il Tavolo di Studio dei Manoscritti sul Fondo", loreClue: "La postazione monumentale in noce per l'esame dei codici greci è assente." },
        { id: `lvl${id}_d9`, x: 81.60, y: 61.89, radius: 4.0, name: "Il Ritratto Accademico tra le Paraste a Destra", loreClue: "Il ritratto del procuratore di San Marco sulla parete destra è rimosso." },
        { id: `lvl${id}_d10`, x: 49.97, y: 90.85, radius: 4.0, name: "I Banchi di Lettura in Noce della Navata", loreClue: "Il banco da consultazione con leggio intarsiato in primo piano è scomparso." },
      ];
    } else if (isLevelTwentySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 13.30, y: 11.70, radius: 4.0, name: "La Trave Maestra Dipinta a Sinistra", loreClue: "I racemi policromi della trave 'alla sansovina' a sinistra sono piallati a legno nudo." },
        { id: `lvl${id}_d2`, x: 49.98, y: 6.14, radius: 4.0, name: "L'Affresco Barocco del Tiepolo al Centro", loreClue: "La figura dell'allegoria della Nobiltà al vertice del soffitto svanisce nell'intonaco." },
        { id: `lvl${id}_d3`, x: 86.59, y: 11.62, radius: 4.0, name: "La Trave Maestra Dipinta a Destra", loreClue: "Le decorazioni a fioroni e oro sulla trave destra appaiono uniformate." },
        { id: `lvl${id}_d4`, x: 49.96, y: 28.34, radius: 4.0, name: "Il Grande Lampadario di Murano a Bracci Floreali", loreClue: "Il sontuoso lampadario a ciocca in vetro soffiato policromo di Murano è scomparso." },
        { id: `lvl${id}_d5`, x: 50.00, y: 49.56, radius: 4.0, name: "La Quadrifora sul Canal Grande in Fondo", loreClue: "I trafori marmorei ad archi trilobati della loggia verso il canale sono assenti." },
        { id: `lvl${id}_d6`, x: 11.64, y: 51.88, radius: 4.0, name: "Il Busto in Marmo del Patrizio a Sinistra", loreClue: "La scultura in marmo di Carrara sul piedistallo di diaspro a sinistra è stata tolta." },
        { id: `lvl${id}_d7`, x: 88.35, y: 51.90, radius: 4.0, name: "Il Busto in Marmo della Dogaressa a Destra", loreClue: "Il busto barocco con parrucca incipriata sulla consolle destra è scomparso." },
        { id: `lvl${id}_d8`, x: 18.30, y: 77.49, radius: 4.0, name: "La Sedia a Braccioli Rococò Rivestita in Seta a Sinistra", loreClue: "La poltrona dorata intagliata a foglia d'acanto a sinistra è assente dal portego." },
        { id: `lvl${id}_d9`, x: 81.63, y: 77.60, radius: 4.0, name: "La Sedia a Braccioli Rococò Rivestita in Seta a Destra", loreClue: "La poltrona da parata con schienale a cartoccio a destra è stata rimossa." },
        { id: `lvl${id}_d10`, x: 49.89, y: 92.03, radius: 4.0, name: "Il Pavimento alla Veneziana in Seminato Policromo", loreClue: "I marmi rossi e bianchi intarsiati nel terrazzo veneziano appaiono grigi e opachi." },
      ];
    } else if (isLevelTwentyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 9.41, y: 28.70, radius: 4.0, name: "Il Comignolo a Campana del Palazzetto Sinistro", loreClue: "Il tipico camino veneziano a cono rovesciato sul tetto a sinistra è scomparso." },
        { id: `lvl${id}_d2`, x: 63.44, y: 25.12, radius: 4.0, name: "La Cupola Minore della Basilica della Salute", loreClue: "La calotta emisferica secondaria della chiesa del Longhena svanisce nel cielo." },
        { id: `lvl${id}_d3`, x: 76.32, y: 31.85, radius: 4.0, name: "La Statua della Fortuna sulla Punta della Dogana", loreClue: "La sfera d'oro e la statua girevole della Fortuna in cima alla Dogana da Mar sono assenti." },
        { id: `lvl${id}_d4`, x: 10.51, y: 41.77, radius: 4.0, name: "L'Altana in Legno sopra il Tetto a Sinistra", loreClue: "La terrazza pensile in assi di larice tipica dei tetti veneziani è stata rimossa." },
        { id: `lvl${id}_d5`, x: 87.86, y: 47.36, radius: 4.0, name: "La Lanterna Navale della Prua del Vaporetto", loreClue: "Il faro di navigazione in ottone a babordo sul battello di linea è scomparso." },
        { id: `lvl${id}_d6`, x: 14.93, y: 62.73, radius: 4.0, name: "Il Pennone della Bandiera con il Leone di San Marco", loreClue: "L'asta con il gonfalone cremisi ormeggiata sul molo di sinistra è stata tolta." },
        { id: `lvl${id}_d7`, x: 39.99, y: 65.26, radius: 4.0, name: "La Briccola d'Ormeggio della Gondola sul Canale", loreClue: "La briccola tripla in pali di rovere piantata nel bacino è scomparsa." },
        { id: `lvl${id}_d8`, x: 54.94, y: 52.39, radius: 4.0, name: "La Cupola Maggiore Ottagonale della Salute", loreClue: "La grande lanterna sommitale con la statua della Vergine svanisce dal profilo." },
        { id: `lvl${id}_d9`, x: 76.68, y: 75.36, radius: 4.0, name: "Il Ferro di Poppa della Gondola in Transito", loreClue: "Il ricciolo metallico del coronamento posteriore dell'imbarcazione è assente." },
        { id: `lvl${id}_d10`, x: 43.30, y: 90.91, radius: 4.0, name: "Il Palo d'Ormeggio a Bande Bianche e Azzurre", loreClue: "Il palo da gondola dipinto a spirale in primo piano è scomparso dalla laguna." },
      ];
    } else if (isLevelTwentyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 74.95, y: 28.97, radius: 4.0, name: "Il Leone Alato di San Marco sul Timpano", loreClue: "Il bassorilievo del Leone marciano con il libro aperto sull'architrave è rimosso." },
        { id: `lvl${id}_d2`, x: 74.98, y: 46.82, radius: 4.0, name: "La Statua di Santa Giustina sul Fastigio", loreClue: "La scultura marmorea della patrona della battaglia di Lepanto è assente dalla porta." },
        { id: `lvl${id}_d3`, x: 16.64, y: 55.73, radius: 4.0, name: "Il Merlo Ghibellino della Torre Sinistra", loreClue: "Il merlo a coda di rondine sulla cinta muraria merlata è scomparso dal profilo." },
        { id: `lvl${id}_d4`, x: 41.65, y: 55.76, radius: 4.0, name: "La Colonna Dorica di Sinistra della Porta Magna", loreClue: "Il fusto scanalato in pietra d'Istria dell'ordine dorico a sinistra appare raschiato." },
        { id: `lvl${id}_d5`, x: 58.31, y: 55.72, radius: 4.0, name: "La Colonna Dorica di Destra della Porta Magna", loreClue: "La colonna marmorea rinascimentale del portale trionfale è sostituita da muro liscio." },
        { id: `lvl${id}_d6`, x: 83.39, y: 65.04, radius: 4.0, name: "Il Grande Leone Marmoreo del Pireo", loreClue: "La colossale statua greca del leone seduto trasportata da Atene è scomparsa dal plinto." },
        { id: `lvl${id}_d7`, x: 33.33, y: 82.58, radius: 4.0, name: "Il Pilastro della Cancellata in Ferro Battuto a Sinistra", loreClue: "La colonnina in pietra con sfera sommitale che regge l'inferriata è stata tolta." },
        { id: `lvl${id}_d8`, x: 49.97, y: 73.61, radius: 4.0, name: "La Canna del Cannone Storico da Fortezza", loreClue: "La bocca da fuoco in bronzo fuso della Serenissima puntata sul piazzale è assente." },
        { id: `lvl${id}_d9`, x: 66.62, y: 73.60, radius: 4.0, name: "La Carronata d'Artiglieria Navale", loreClue: "L'affusto in legno di rovere del cannone navale ormeggiato a terra è scomparso." },
        { id: `lvl${id}_d10`, x: 91.65, y: 82.54, radius: 4.0, name: "Il Leone Attico Minore sul Piedistallo Destro", loreClue: "La statua del leone antico disteso sul basamento di destra è stata rimossa." },
      ];
    } else if (isLevelThirty) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 8.31, y: 20.07, radius: 4.0, name: "L'Altana in Legno del Palazzo a Sinistra", loreClue: "La loggetta panoramica in travi di larice sul tetto del Fondaco è scomparsa." },
        { id: `lvl${id}_d2`, x: 24.97, y: 28.97, radius: 4.0, name: "Il Bassorilievo dell'Arcangelo Gabriele sull'Arco", loreClue: "La scultura in pietra d'Istria dell'Annunciazione sul fianco dell'arco è stata tolta." },
        { id: `lvl${id}_d3`, x: 66.61, y: 28.95, radius: 4.0, name: "Il Bassorilievo della Vergine Maria a Destra", loreClue: "Il rilievo marmoreo sul timpano di destra del ponte di Rialto svanisce nella pietra." },
        { id: `lvl${id}_d4`, x: 8.31, y: 37.90, radius: 4.0, name: "La Finestra a Bifora Gotica sulla Riva Sinistra", loreClue: "L'archetto acuto veneziano del palazzo mercantile a sinistra appare rettilineo." },
        { id: `lvl${id}_d5`, x: 49.99, y: 37.90, radius: 4.0, name: "L'Arco Centrale a Tutto Sesto di Rialto", loreClue: "Il rilievo della chiave di volta del grande arco monolitico è stato levigato." },
        { id: `lvl${id}_d6`, x: 66.63, y: 46.81, radius: 4.0, name: "La Bottega d'Oreficeria sulla Rampa del Ponte", loreClue: "La tettoia in piombo e l'insegna dell'antica bottega di Rialto sono assenti." },
        { id: `lvl${id}_d7`, x: 91.69, y: 37.90, radius: 4.0, name: "La Tenda Parasole Cremisi del Fondaco dei Tedeschi", loreClue: "Il tendaggio ceruleo e rosso del caffè affacciato sul canale è stato rimosso." },
        { id: `lvl${id}_d8`, x: 16.66, y: 55.70, radius: 4.0, name: "La Briccola da Gondola a Righe Gialle e Blu", loreClue: "Il palo d'approdo decorato all'imbocco della fondamenta sinistra è scomparso." },
        { id: `lvl${id}_d9`, x: 33.30, y: 55.76, radius: 4.0, name: "Il Ferro di Prua della Gondola in Primo Piano", loreClue: "Il rostro d'argento pettinato a sei barre della gondola in transito è assente." },
        { id: `lvl${id}_d10`, x: 58.31, y: 73.62, radius: 4.0, name: "Il Tendalino Bianco della Gondola dei Nobili", loreClue: "Il caratteristico felze o copertura in tela dell'imbarcazione scompare sull'acqua." },
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
    } else if (isLevelThirtyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "La Trave Lignea della Volta Sinistra", loreClue: "La grande trave in legno di cedro che sorregge il soffitto a sinistra appare piallata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.05, radius: 4.0, name: "Il Fregio Superiore Sopra il Trono", loreClue: "Il fregio policromo a spirali d'onda sopra lo schienale del trono è scomparso dalla parete." },
        { id: `lvl${id}_d3`, x: 79.99, y: 12.06, radius: 4.0, name: "Il Concio di Pietra della Parete Destra", loreClue: "Il blocco di calcare squadrato del paramento murario di destra risulta smussato." },
        { id: `lvl${id}_d4`, x: 12.00, y: 39.96, radius: 4.0, name: "Il Grifone Alato dell'Affresco Sinistro", loreClue: "La figura araldica del grifone guardiano accovacciato a sinistra svanisce nell'intonaco." },
        { id: `lvl${id}_d5`, x: 50.00, y: 35.05, radius: 4.0, name: "Lo Schienale Sagomato del Trono di Gesso", loreClue: "Il caratteristico profilo ondulato dello schienale in alabastro del trono appare rettilineo." },
        { id: `lvl${id}_d6`, x: 88.01, y: 39.95, radius: 4.0, name: "Il Grifone Alato dell'Affresco Destro", loreClue: "Il piumaggio variopinto del grifone minoico sulla parete destra è stato raschiato." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.95, radius: 4.0, name: "Il Sedile di Gesso della Panca Sinistra", loreClue: "La panca continua in gesso per i consiglieri di Minosse a sinistra è scomparsa." },
        { id: `lvl${id}_d8`, x: 50.01, y: 62.05, radius: 4.0, name: "La Seduta Incisa del Trono di Minosse", loreClue: "L'incavo ergonomico intagliato nel sedile del trono reale è colmato e levigato." },
        { id: `lvl${id}_d9`, x: 82.02, y: 64.95, radius: 4.0, name: "Il Basamento Modanato della Panca Destra", loreClue: "Lo zoccolo a modanatura classica della panca cerimoniale destra è assente." },
        { id: `lvl${id}_d10`, x: 50.01, y: 87.94, radius: 4.0, name: "Il Bacino Idraulico Lustrale in Pietra", loreClue: "Il bacino lustrale in calcare al centro della sala delle purificazioni è rimosso dal suolo." },
      ];
    } else if (isLevelThirtyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 14.99, y: 14.98, radius: 4.0, name: "Il Rosone Policromo della Cornice Sinistra", loreClue: "La formella circolare a rosetta policroma sul fregio superiore sinistro è svanita." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Fregio Geometrico Superiore della Sala", loreClue: "La fascia a meandro continuo che corona la composizione marina è stata rimossa." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Il Rosone Policromo della Cornice Destra", loreClue: "Il motivo floreale minoico all'angolo superiore destro della sala è scomparso." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.97, radius: 4.0, name: "Il Delfino Minore in Fase di Salto a Sinistra", loreClue: "La sagoma azzurra del giovane delfino che nuota verso sinistra è assente dal mare dipinto." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.97, radius: 4.0, name: "Il Grande Delfino Centrale dell'Affresco", loreClue: "Il maestoso delfino con ventre dorato al centro del megaron scompare dal fondale." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "Il Banco di Pesci Corallini a Destra", loreClue: "Il gruppo di piccoli pesci variopinti che nuotano a destra è stato rimosso dalla scena." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.97, radius: 4.0, name: "La Zoccolatura in Gesso della Parete Sinistra", loreClue: "Il basamento in lastre di gesso chiaro alla base della parete sinistra appare raschiato." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.97, radius: 4.0, name: "La Pinna Caudale del Delfino Inferiore", loreClue: "La doppia pinna caudale arcuata del secondo delfino è scomparsa dai flutti." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "Il Riccio di Mare Marino dell'Angolo", loreClue: "La creatura marina spinosa adagiata sul fondale roccioso dipinto è stata asportata." },
        { id: `lvl${id}_d10`, x: 88.01, y: 75.01, radius: 4.0, name: "Il Montante di Pietra del Pozzo di Luce", loreClue: "Il pilastro monolitico che delimita il cavedio luminoso della regina è rimosso." },
      ];
    } else if (isLevelThirtyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 17.99, y: 14.96, radius: 4.0, name: "I Conci Sagomati della Volta Sinistra", loreClue: "I conci in arenaria che compongono l'arco della galleria dei magazzini sono assenti." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Trave Maestra di Sostegno del Tetto", loreClue: "Il puntone in legno scuro che corre lungo l'asse centrale del soffitto è scomparso." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "Il Puntone di Legno della Campata Destra", loreClue: "La trave di rinforzo angolare della galleria occidentale è stata rimossa." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.99, radius: 4.0, name: "L'Ansa Superiore a Nastro del Primo Pithos", loreClue: "La massiccia impugnatura laterale in terracotta del primo vaso è stata scalpellata." },
        { id: `lvl${id}_d5`, x: 38.00, y: 44.96, radius: 4.0, name: "I Cordoni a Rilievo del Secondo Pithos", loreClue: "Le costolature concentriche a imitazione di funi sul secondo pithos appaiono levigate." },
        { id: `lvl${id}_d6`, x: 64.99, y: 44.98, radius: 4.0, name: "Il Medaglione Geometrico del Terzo Pithos", loreClue: "Il rosone a stampo impresso nell'argilla sulla pancia del terzo vaso è scomparso." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.98, radius: 4.0, name: "L'Orlo Modanato in Terracotta del Quarto Pithos", loreClue: "Il labbro svasato e orlato del quarto grande recipiente da stoccaggio è rimosso." },
        { id: `lvl${id}_d8`, x: 19.99, y: 78.01, radius: 4.0, name: "La Kasella Sotterranea per le Offerte", loreClue: "Il pozzetto in pietra incassato nel pavimento per liquidi sacri è colmato in calcare." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.02, radius: 4.0, name: "La Canaletta di Drenaggio del Pavimento", loreClue: "La scanalatura idraulica scavata nei lastroni del corridoio è svanita nel suolo." },
        { id: `lvl${id}_d10`, x: 80.00, y: 78.02, radius: 4.0, name: "Il Giunto di Malta dei Lastroni a Destra", loreClue: "La profonda commettitura tra le grandi lastre del pavimento appare sigillata." },
      ];
    } else if (isLevelThirtyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 17.99, y: 12.04, radius: 4.0, name: "La Fascia a Riquadri Geometrici Sinistra", loreClue: "Il motivo a scacchiera colorata sulla cornice superiore sinistra dell'affresco è scomparso." },
        { id: `lvl${id}_d2`, x: 49.99, y: 10.04, radius: 4.0, name: "Il Bordo Superiore Modanato della Lastra", loreClue: "La cornice sagomata in stucco dipinto che delimita la sommità della lastra è rimossa." },
        { id: `lvl${id}_d3`, x: 82.00, y: 12.04, radius: 4.0, name: "La Fascia a Riquadri Geometrici Destra", loreClue: "I tasselli a policromia minoica sul margine destro del pannello appaiono uniformati." },
        { id: `lvl${id}_d4`, x: 15.01, y: 44.98, radius: 4.0, name: "L'Acrobata Donna alle Corna del Toro", loreClue: "La figura dell'atleta che afferra le imponenti corna del toro sacro è svanita nel fondo azzurro." },
        { id: `lvl${id}_d5`, x: 48.00, y: 35.04, radius: 4.0, name: "Il Volteggiatore Sacro sul Dorso del Toro", loreClue: "L'acrobata colto a mezz'aria nel celebre volteggio sopra la groppa del toro è scomparso." },
        { id: `lvl${id}_d6`, x: 85.00, y: 44.97, radius: 4.0, name: "L'Acrobata alle Terga del Toro a Destra", loreClue: "La giovane figura atletica pronta a ricevere il compagno dietro al toro è assente." },
        { id: `lvl${id}_d7`, x: 48.00, y: 55.03, radius: 4.0, name: "Le Macchie Ocari sul Fianco del Toro", loreClue: "Le caratteristiche pezzature scure sul manto rossastro del colossale toro sono state cancellate." },
        { id: `lvl${id}_d8`, x: 15.00, y: 85.05, radius: 4.0, name: "Il Motivo a Chevron del Bordo Inferiore Sinistro", loreClue: "I fasci diagonali a zig-zag della cornice inferiore sinistra risultano piallati." },
        { id: `lvl${id}_d9`, x: 50.01, y: 87.96, radius: 4.0, name: "La Ghirlanda Floreale Centrale Inferiore", loreClue: "I racemi decorativi con boccioli di giglio alla base della composizione sono rimossi." },
        { id: `lvl${id}_d10`, x: 85.00, y: 85.05, radius: 4.0, name: "Il Motivo a Chevron del Bordo Inferiore Destro", loreClue: "Il pattern geometrico ritmico sull'angolo inferiore destro scompare dalla lastra." },
      ];
    } else if (isLevelThirtySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 14.94, radius: 4.0, name: "Il Crinale Roccioso verso il Monte Ida a Sinistra", loreClue: "Il profilo montuoso della catena dell'Ida a sinistra svanisce nell'azzurro del cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Vetta Sommersa tra le Nubi del Monte Ida", loreClue: "La cima innevata del monte sacro di Zeus all'orizzonte centrale appare velata." },
        { id: `lvl${id}_d3`, x: 80.00, y: 14.96, radius: 4.0, name: "Il Profilo del Contrafforte Montano a Destra", loreClue: "La sella rocciosa sul margine destro della pianura di Messara è scomparsa dal paesaggio." },
        { id: `lvl${id}_d4`, x: 11.99, y: 44.98, radius: 4.0, name: "Il Muro Minoico in Conci di Calcare a Sinistra", loreClue: "L'elevato in pietra squadrata dell'ala settentrionale del palazzo è stato livellato." },
        { id: `lvl${id}_d5`, x: 48.00, y: 37.95, radius: 4.0, name: "La Base Circolare della Colonna del Propylon", loreClue: "Il basamento monolitico della monumentale colonna rastremata verso il basso è scomparso." },
        { id: `lvl${id}_d6`, x: 84.99, y: 44.98, radius: 4.0, name: "Il Parapetto in Pietra della Terrazza Orientale", loreClue: "Il muretto di contenimento affacciato sulla valle fertile a destra è stato rimosso." },
        { id: `lvl${id}_d7`, x: 20.00, y: 69.97, radius: 4.0, name: "La Scalinata Monumentale dell'Area Teatrale", loreClue: "I gradini rituali per gli spettatori delle cerimonie religiose appaiono spianati." },
        { id: `lvl${id}_d8`, x: 50.00, y: 64.95, radius: 4.0, name: "Il Grande Lastrone Centrale della Corte", loreClue: "Il blocco rettangolare in calcare al centro della corte cerimoniale è assente dal suolo." },
        { id: `lvl${id}_d9`, x: 80.00, y: 69.97, radius: 4.0, name: "La Canaletta Idraulica del Piazzale", loreClue: "Il condotto di scolo per le acque piovane scavato nella roccia è colmato da terra." },
        { id: `lvl${id}_d10`, x: 50.00, y: 89.96, radius: 4.0, name: "Il Giunto ad Incastro del Lastricato in Primo Piano", loreClue: "La fessura geometrica tra le pietre sagomate in primo piano appare levigata." },
      ];
    } else if (isLevelThirtySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "La Tenda Parasole sul Molo di Ponente", loreClue: "Il tendaggio color ocra del caffè affacciato sul bacino portuale è stato rimosso." },
        { id: `lvl${id}_d2`, x: 50.01, y: 12.05, radius: 4.0, name: "La Cupola della Lanterna del Faro Veneziano", loreClue: "La sommità a lanterna circolare del faro ottagonale di Chania è scomparsa dal cielo." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "Il Pennone di Segnalazione sulla Fortezza", loreClue: "L'asta metallica da segnalazione navale eretta sulla fortezza Firkas è assente." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "L'Arcata dei Cantieri Navali Veneziani (Neoria)", loreClue: "Il grande arco in pietra d'Istria dell'arsenale repubblicano è stato uniformato." },
        { id: `lvl${id}_d5`, x: 50.00, y: 37.94, radius: 4.0, name: "Il Fusto Ottagonale del Faro di Chania", loreClue: "Il corpo centrale in muratura lapidea della torre del faro scompare dal panorama." },
        { id: `lvl${id}_d6`, x: 85.00, y: 44.98, radius: 4.0, name: "Il Bastione Angolare della Fortezza Firkas", loreClue: "La scarpata difensiva in pietra del baluardo che domina l'ingresso del porto è rimossa." },
        { id: `lvl${id}_d7`, x: 20.00, y: 69.96, radius: 4.0, name: "Il Riflesso dei Palazzi nelle Acque del Bacino", loreClue: "I riverberi cromatici dei palazzi veneziani sull'acqua del porto sono attenuati." },
        { id: `lvl${id}_d8`, x: 50.00, y: 64.95, radius: 4.0, name: "I Massi di Scogliera del Molo Frangiflutti", loreClue: "I blocchi calcarei a protezione della passeggiata del faro sono scomparsi nel mare." },
        { id: `lvl${id}_d9`, x: 80.01, y: 69.97, radius: 4.0, name: "La Piccola Imbarcazione Tipica Caicco", loreClue: "Il gozzo da pesca greco ormeggiato vicino alla banchina è svanito dalle acque." },
        { id: `lvl${id}_d10`, x: 48.00, y: 89.96, radius: 4.0, name: "La Bitta d'Ormeggio sulla Fondamenta", loreClue: "La colonna in ghisa per l'ancoraggio delle cime sulla banchina in primo piano è stata tolta." },
      ];
    } else if (isLevelThirtyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 17.99, y: 12.04, radius: 4.0, name: "La Campana di Bronzo del Campanile Sinistro", loreClue: "La campana votiva in bronzo cesellato nella fornace sinistra del campanile è assente." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Il Frontone Barocco del Campanile a Tre Fornaci", loreClue: "Il timpano curvo con coronamento a croce sulla sommità della chiesa è scomparso." },
        { id: `lvl${id}_d3`, x: 82.02, y: 12.05, radius: 4.0, name: "La Campana di Bronzo del Campanile Destro", loreClue: "La seconda campana liturgica nell'archetto destro della facciata è stata rimossa." },
        { id: `lvl${id}_d4`, x: 15.00, y: 37.95, radius: 4.0, name: "La Grande Voluta Rinascimentale a Sinistra", loreClue: "Il raccordo curvilineo a voluta palladiana sul lato sinistro del frontone è scalpellato." },
        { id: `lvl${id}_d5`, x: 50.00, y: 35.05, radius: 4.0, name: "I Trafori Geometrici del Rosone Centrale", loreClue: "La decorazione radiale in pietra traforata del rosone della chiesa appare colmata." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.94, radius: 4.0, name: "La Grande Voluta Rinascimentale a Destra", loreClue: "La voluta barocca simmetrica sul lato destro della trabeazione è stata asportata." },
        { id: `lvl${id}_d7`, x: 20.00, y: 64.95, radius: 4.0, name: "Il Capitello Corinzio della Colonna Sinistra", loreClue: "Le foglie d'acanto scolpite nel marmo sulla colonna d'ingresso sinistra risultano piallate." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Cartiglio Scolpito sull'Architrave del Portale", loreClue: "L'epigrafe dedicatoria in greco antico sopra la porta principale è stata raschiata." },
        { id: `lvl${id}_d9`, x: 80.00, y: 64.96, radius: 4.0, name: "Il Capitello Corinzio della Colonna Destra", loreClue: "Il capitello classico a volute della parasta destra è sostituito da collarino liscio." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.94, radius: 4.0, name: "La Lastra del Sagrato Lapideo del Monastero", loreClue: "Il grande lastrone di calcare levigato del cortile antistante il tempio è scomparso." },
      ];
    } else if (isLevelThirtyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 19.99, y: 14.95, radius: 4.0, name: "La Parete Calcarea a Strapiombo di Sinistra", loreClue: "Il massiccio spuntone roccioso della falesia alta oltre trecento metri appare levigato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Fenditura di Cielo tra le Vette Rocciose", loreClue: "Lo scorcio di cielo azzurro tra le pareti quasi a contatto della gola è oscurato da roccia." },
        { id: `lvl${id}_d3`, x: 80.00, y: 14.94, radius: 4.0, name: "Il Fregio Roccioso della Falesia Destra", loreClue: "Gli strati geologici compressi sul costone roccioso orientale svaniscono nell'ombra." },
        { id: `lvl${id}_d4`, x: 14.99, y: 44.98, radius: 4.0, name: "Il Pino Cretese Arbaricato sulla Roccia", loreClue: "Il tenace pino mediterraneo cresciuto nella fenditura della parete è scomparso." },
        { id: `lvl${id}_d5`, x: 50.00, y: 41.96, radius: 4.0, name: "La Gola Stretta della Porta di Ferro", loreClue: "Il passaggio più angusto del canyon largo solo tre metri è alterato nei profili lapidei." },
        { id: `lvl${id}_d6`, x: 84.99, y: 44.99, radius: 4.0, name: "La Cengia Rocciosa Sovrastante il Sentiero", loreClue: "La mensola naturale di calcare sospesa sul greto del torrente è stata rimossa." },
        { id: `lvl${id}_d7`, x: 20.00, y: 71.99, radius: 4.0, name: "Il Grande Masso Levigato dalla Piena", loreClue: "Il colossale macigno arrotondato dalle alluvioni invernali è assente dal greto." },
        { id: `lvl${id}_d8`, x: 50.00, y: 67.97, radius: 4.0, name: "La Passerella di Tronchi sopra il Torrente", loreClue: "I tronchi di cipresso che compongono il ponticello pedonale per gli escursionisti sono tolti." },
        { id: `lvl${id}_d9`, x: 79.99, y: 72.00, radius: 4.0, name: "La Ghiaia Fluviale della Riva Destra", loreClue: "La scarpata di ciottoli bianchi lungo la riva del corso d'acqua appare spianata." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.96, radius: 4.0, name: "L'Acqua Cristallina della Pozza Montana", loreClue: "Il limpido specchio d'acqua sorgiva del torrente montano svanisce tra i sassi." },
      ];
    } else if (isLevelForty) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.95, radius: 4.0, name: "La Veduta del Golfo di Mirabello a Sinistra", loreClue: "L'insenatura marina turchese che lambisce l'istmo è velata dal profilo roccioso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Torre di Guardia dell'Acropoli Superiore", loreClue: "La garitta di vedetta veneziana sulla cima dell'isolotto è scomparsa dal crinale." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "Il Promontorio Roccioso sul Lato Destro", loreClue: "La punta rocciosa protesa verso il mare aperto a destra risulta abbattuta." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.97, radius: 4.0, name: "I Merli di Difesa del Bastione Mocenigo", loreClue: "I merli rettangolari della cortina muraria cinquecentesca sono stati scalpellati via." },
        { id: `lvl${id}_d5`, x: 48.00, y: 39.95, radius: 4.0, name: "La Cinta Muraria dei Terrapieni Veneziani", loreClue: "Il robusto paramento in pietra calcarea del terrapieno superiore è sostituito da terra liscia." },
        { id: `lvl${id}_d6`, x: 85.00, y: 44.98, radius: 4.0, name: "Le Cannoniere sul Fronte Mare Orientale", loreClue: "Le feritoie per i pezzi d'artiglieria affacciate sul golfo sono state murate." },
        { id: `lvl${id}_d7`, x: 18.00, y: 69.97, radius: 4.0, name: "La Scaletta di Approdo al Molo della Fortezza", loreClue: "I gradini intagliati nella roccia per l'accesso delle galee repubblicane sono scomparsi." },
        { id: `lvl${id}_d8`, x: 50.00, y: 64.98, radius: 4.0, name: "L'Arco Trionfale della Porta Marina di Mezzo", loreClue: "L'arco a tutto sesto del portale di Dante attraverso cui si entra nel forte è rimosso." },
        { id: `lvl${id}_d9`, x: 82.01, y: 69.98, radius: 4.0, name: "La Scogliera a Bioradica sotto i Bastioni", loreClue: "I massi frastagliati lambiti dalla risacca sotto le mura orientale sono spianati." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Le Acque Turchesi del Canale di Spinalonga", loreClue: "Il moto ondoso e i riflessi smeraldo dell'acqua in primo piano appaiono uniformi e opachi." },
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
        { id: `lvl${id}_d1`, x: 50.75, y: 26.34, radius: 5.5, name: "Il Paranco sulla Volta Sommersa", loreClue: "Un paranco da spedizione con carrucola d'acciaio e fune di canapa è calato dal lucernario della volta crollata." },
        { id: `lvl${id}_d2`, x: 90.42, y: 61.38, radius: 6.0, name: "La Lanterna a Petrolio Spenta", loreClue: "La fiamma viva all'interno della lanterna marinaresca è spenta, lasciando lo stoppino carbonizzato." },
        { id: `lvl${id}_d3`, x: 57.50, y: 75.33, radius: 5.5, name: "Lo Scarabeo di Lapislazzuli di Tolomeo", loreClue: "Un prezioso amuleto tolemaico intagliato in puro lapislazzuli e filigrana d'oro è adagiato sul plinto di pietra." },
        { id: `lvl${id}_d4`, x: 82.33, y: 83.48, radius: 5.5, name: "La Bussola Geodetica sul Diario", loreClue: "Una bussola tascabile in ottone con coperchio aperto è posata sulle pagine scritte del giornale di scavo." },
        { id: `lvl${id}_d5`, x: 62.67, y: 79.80, radius: 6.0, name: "Il Sigillo Reale e Nastro di Seta Blu", loreClue: "Il cilindro porta-papiri in bronzo è avvolto da un nastro di seta blu cobalto con sigillo reale in ceralacca." },
        { id: `lvl${id}_d6`, x: 13.33, y: 51.34, radius: 5.5, name: "La Lucerna Romana Accesa sull'Altare", loreClue: "Una piccola lucerna romana in terracotta con stoppino fiammeggiante rischiara l'altare del settore ovest." },
        { id: `lvl${id}_d7`, x: 33.75, y: 45.98, radius: 5.5, name: "La Corona d'Alloro sulla Statua Ellenistica", loreClue: "Sulla testa della statua di marmo tolemaica compare una finissima corona d'alloro scolpita." },
        { id: `lvl${id}_d8`, x: 60.83, y: 89.84, radius: 5.5, name: "Il Metro da Agrimensore Inclinato", loreClue: "Il righello pieghevole da rilievo archeologico sul tavolo è aperto e angolato a 45 gradi." },
        { id: `lvl${id}_d9`, x: 78.50, y: 55.80, radius: 5.5, name: "La Grata a Croce del Casco da Palombaro", loreClue: "Il visore circolare del pesante elmo di rame Siebe Gorman presenta una grata protettiva a croce regolare." },
        { id: `lvl${id}_d10`, x: 77.50, y: 67.19, radius: 5.0, name: "La Targhetta Ovale del Costruttore Rimossa", loreClue: "La piastrina ovale in ottone con la matricola del costruttore è assente dal collare pettorale dell'elmo." },
      ];
    } else if (isLevelFortyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "La Torre Angolare Occidentale della Fortezza", loreClue: "Il torrione merlato a base circolare a guardia del molo di ponente appare smussato." },
        { id: `lvl${id}_d2`, x: 50.01, y: 10.05, radius: 4.0, name: "La Cupola Centrale del Maschio Mamelucco", loreClue: "La calotta ogivale in pietra della torre maestra svanisce dal profilo fortificato." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Baluardo Nord-Orientale sul Mare Aperto", loreClue: "La postazione difensiva protesa sui flutti del Mediterraneo scompare dalla cinta." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "Il Portale d'Ingresso ad Arco Ribassato", loreClue: "L'arco modanato del portale cerimoniale d'accesso al forte è stato livellato." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.96, radius: 4.0, name: "Le Feritoie Balestriere del Muro di Riva", loreClue: "Le aperture verticali per il tiro dei dardi nella muratura sono state colmate." },
        { id: `lvl${id}_d6`, x: 85.01, y: 37.94, radius: 4.0, name: "La Batteria Costiera d'Artiglieria Navale", loreClue: "La piazzola per i cannoni in bronzo sul fronte mare orientale è stata rimossa." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.95, radius: 4.0, name: "La Banchina del Molo Foraneo Antico", loreClue: "Il camminamento in blocchi di calcare che avanza verso il porto appare raschiato." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.07, radius: 4.0, name: "I Conci Monumentali del Faro di Alessandria", loreClue: "I massi ciclopici di granito riutilizzati dalle rovine del Faro sono scomparsi dal piazzale." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "I Frangiflutti della Scogliera Esterna", loreClue: "I grandi prismi in cemento e roccia a difesa dalle mareggiate sono assenti." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.94, radius: 4.0, name: "Il Selciato della Piazza d'Armi in Primo Piano", loreClue: "I lastroni calcarei intagliati del piazzale d'accesso sono svaniti nel terreno." },
      ];
    } else if (isLevelFortyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "Il Crinale Panoramico della Collina di Rhakotis", loreClue: "Il profilo collinare che domina la necropoli e il porto antico svanisce nel cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Capitello Corinzio in Granito di Assuan", loreClue: "Le monumentali foglie d'acanto scolpite nel granito rosso sulla cima della colonna sono levigate." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.95, radius: 4.0, name: "La Vetta del Fusto Monolitico di Diocleziano", loreClue: "Il raccordo terminale del fusto alto ventisette metri appare troncato a filo." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "I Blocchi Frammentari del Porticato del Serapeo", loreClue: "I capitelli e fusti spezzati adagiati lungo il declivio occidentale sono rimossi." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "La Sfinge Egizia in Granito Grigio a Guardia", loreClue: "La colossale statua della sfinge tolemaica accovacciata a sinistra è scomparsa dal plinto." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.97, radius: 4.0, name: "L'Iscrizione Greca dell'Imperatore Diocleziano", loreClue: "L'epigrafe incisa in lettere dorate sul piedistallo di granito è stata raschiata." },
        { id: `lvl${id}_d7`, x: 88.01, y: 44.98, radius: 4.0, name: "La Muratura Romana in Mattoni del Santuario", loreClue: "Le arcate in laterizio cotto dei sotterranei del tempio appaiono uniformate." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "La Rampa Gradonata dei Pellegrini Pagani", loreClue: "I gradini d'accesso alla terrazza sacra dell'acropoli sono stati rimossi." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.03, radius: 4.0, name: "Il Cippo di Fondazione con Geroglifici Celati", loreClue: "Il blocco sotterraneo che racchiude le tavolette dedicatorie è colmato di terra." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "I Reperti Lapidei del Lapidario Archeologico", loreClue: "I frammenti di cornici ellenistiche esposti a terra a destra sono scomparsi." },
      ];
    } else if (isLevelFortyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 14.99, y: 14.96, radius: 4.0, name: "Il Rilievo dello Scudo con la Testa di Medusa", loreClue: "Il tondo lapideo della Gorgone guardiana sulla parete funeraria è stato scalpellato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Volta a Botte della Rotonda Sotterranea", loreClue: "L'intonaco scavato nella roccia arenaria del soffitto ipogeo appare continuo e liscio." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Il Serpente Agathodaimon con Corona d'Egitto", loreClue: "Il sacro serpente benevolo con il disco solare alato è svanito dal bassorilievo." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "La Colonna Flautata ad Angolo della Camera", loreClue: "Il fusto scanalato in stile papiriforme della nicchia sepolcrale è scomparso." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "La Statua Funeraria del Sacerdote con Toga", loreClue: "La figura scolpita che unisce l'abito romano ai simboli osiridei è stata rimossa." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "Il Nume Anubi in Veste di Legionario Romano", loreClue: "Il dio sciacallo raffigurato con corazza e gladio scompare dal paramento." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "I Loculi Funerari della Galleria Inferiore", loreClue: "Le cavità rettangolari per la deposizione dei sarcofagi appaiono murate a filo." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Triclinio di Pietra del Banchetto Rituale", loreClue: "I banchi a ferro di cavallo su cui banchettavano i congiunti sono spianati." },
        { id: `lvl${id}_d9`, x: 67.99, y: 69.98, radius: 4.0, name: "Il Coperchio a Timpano del Sarcofago Greco", loreClue: "La copertura modanata in pietra del sepolcro monumentale è stata asportata." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Pozzo Elicoidale di Luce e Drenaggio", loreClue: "La canna circolare scavata nella roccia per l'aerazione ipogea è occlusa." },
      ];
    } else if (isLevelFortyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "I Merli a Freccia della Cortina Superiore", loreClue: "I merli triangolari di coronamento del camminamento di ronda sono scomparsi." },
        { id: `lvl${id}_d2`, x: 49.99, y: 10.04, radius: 4.0, name: "Il Fregio Epigrafico con Titolatura Mamelucca", loreClue: "L'iscrizione celebrativa in caratteri arabi sul portale centrale è stata levigata." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "La Garitta Angolare di Vedetta sul Canale", loreClue: "La torretta pensile per la sentinella sul cantonale di destra è assente." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "L'Arco a Ferro di Cavallo della Sala d'Armi", loreClue: "L'arcata islamica policroma che introduce all'armeria è stata uniformata." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Grata in Ferro della Prigione Militare", loreClue: "L'inferriata forgiata a maglie quadrate della finestra cieca è stata tolta." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Mensoletta Lignea del Baldacchino di Guardia", loreClue: "Il supporto intagliato in cedro per la campana d'allarme è stato rimosso." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "I Gradini della Scala ai Bastioni Marini", loreClue: "La rampa in pietra che sale alla batteria alta dei cannoni appare spianata." },
        { id: `lvl${id}_d8`, x: 49.99, y: 62.05, radius: 4.0, name: "La Vera del Pozzo d'Acqua Dolce nella Corte", loreClue: "L'orlo circolare in calcare della cisterna sotterranea della fortezza è scomparso." },
        { id: `lvl${id}_d9`, x: 82.01, y: 64.96, radius: 4.0, name: "Il Piatto d'Arenaria per il Munizionamento", loreClue: "Il blocco sagomato per l'impilamento delle palle di cannone è stato tolto." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Pavimento a Spina di Pesce della Piazza", loreClue: "I conci di calcare disposti a motivo geometrico in primo piano risultano livellati." },
      ];
    } else if (isLevelFortySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "La Parasta Trabeata del Temenos Tolemaico", loreClue: "Il pilastro in pietra da taglio che delimitava il recinto sacro scompare all'orizzonte." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Nocciolo Murario del Tempio di Serapide", loreClue: "I resti massicci della cella principale del dio guaritore appaiono colmati." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "Il Muraglione di Terrazzamento Meridionale", loreClue: "Il basamento megalitico che reggeva l'acropoli alessandrina è stato spianato." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "La Zampa Leonina Anteriore della Sfinge", loreClue: "L'artiglio scolpito nel granito grigio della statua di guardia appare levigato." },
        { id: `lvl${id}_d5`, x: 37.99, y: 41.96, radius: 4.0, name: "Il Copricapo Nemes Reale del Faraone Tolomeo", loreClue: "Le bande laterali di lino dorato scolpite sulla fronte della sfinge sono raschiate." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Sfinge Gemella sul Lato Opposto dell'Asse", loreClue: "La seconda scultura guardiana che fiancheggiava il viale processionale è scomparsa." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.98, radius: 4.0, name: "Il Rocchio di Granito Rosso della Colonnata", loreClue: "Il frammento cilindrico di colonna tolemaica adagiato sul prato è stato rimosso." },
        { id: `lvl${id}_d8`, x: 20.00, y: 74.99, radius: 4.0, name: "Il Plinto Lapideo di Supporto della Scultura", loreClue: "Il basamento squadrato in calcare nummulitico sotto la sfinge è scomparso." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.00, radius: 4.0, name: "La Griglia Metallica del Cunicolo Sotterraneo", loreClue: "La grata a protezione dei passaggi segreti scavati nel tufo è stata tolta." },
        { id: `lvl${id}_d10`, x: 80.00, y: 74.99, radius: 4.0, name: "Il Cordolo del Viale dei Cipressi Archeologici", loreClue: "La bordura in pietre chiare che delinea il percorso dei visitatori appare rimossa." },
      ];
    } else if (isLevelFortySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "L'Arco d'Ingresso alle Sale delle Accademie", loreClue: "Il portale romano dell'auditorium per le lezioni di retorica è stato uniformato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.04, radius: 4.0, name: "Il Coronamento Superiore dell'Emiciclo", loreClue: "La balaustra in pietra alla sommità delle gradinate dell'odeion è scomparsa." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.95, radius: 4.0, name: "La Volta in Mattoni delle Terme di Villa degli Uccelli", loreClue: "L'arcata in laterizio del complesso termale romano a destra appare velata." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Le Gradinate di Marmo Bianco della Cavea Sinistra", loreClue: "I sedili monolitici del settore sinistro dei senatori appaiono livellati." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Lo Scranno d'Onore del Governatore Romano", loreClue: "Il seggio cerimoniale al centro dell'orchestra semicircolare è stato rimosso." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "Le Gradinate di Marmo Bianco della Cavea Destra", loreClue: "I gradini del settore destro riservato ai magistrati municipali sono svaniti." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "Il Mosaico Policromo a Motivi Geometrici", loreClue: "Il tassellato in marmi colorati e paste vitree sul pavimento è privo di disegno." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.97, radius: 4.0, name: "L'Orchestra Circolare dell'Odeion Alessandrino", loreClue: "Il pavimento marmoreo al centro della scena teatrale risulta raschiato." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Base della Colonna di Breccia Verde", loreClue: "Il plinto scanalato che sosteneva il baldacchino del proscenio è scomparso." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Canale Idraulico Perimetrale dell'Arena", loreClue: "Il condotto lapideo per il deflusso delle acque nell'emiciclo è colmato." },
      ];
    } else if (isLevelFortyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "La Torre Campanaria Ispirata a Palazzo Vecchio", loreClue: "La maestosa torre merlata del palazzo reale di Farouk scompare dal cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.05, radius: 4.0, name: "Il Padiglione Panoramico della Terrazza Reale", loreClue: "Il chiosco liberty sulla copertura orientale della residenza khediviale è assente." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "La Vetta del Faro Privato sulla Scogliera", loreClue: "La lanterna ottagonale del faro personale della corte reale è scomparsa." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "Il Ponte ad Archi in Pietra sull'Isolotto", loreClue: "Il viadotto monumentale che collega il parco alla caletta marina è stato rimosso." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Loggia a Trifore Veneziane della Facciata", loreClue: "I trafori marmorei dei balconi del palazzo reale risultano piallati." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "Le Palme da Dattero della Spiaggia Reale", loreClue: "Il filare di palme mediterranee che orla la scogliera orientale è scomparso." },
        { id: `lvl${id}_d7`, x: 17.99, y: 64.96, radius: 4.0, name: "I Faraglioni Naturali della Baia di Montaza", loreClue: "Gli scogli frastagliati bagnati dal mare turchese a sinistra appaiono sommersi." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "La Ringhiera in Ferro Battuto del Pontile", loreClue: "I montanti forgiati della passeggiata lungomare sono stati smontati." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.97, radius: 4.0, name: "L'Approdo dei Battelli Reali sul Molo", loreClue: "La banchina d'attracco per il panfilo reale Mahroussa svanisce nell'acqua." },
        { id: `lvl${id}_d10`, x: 50.01, y: 87.96, radius: 4.0, name: "Il Muro Frangiflutti in Blocchi Rocciosi", loreClue: "I massi ciclopici posti a salvaguardia della passeggiata sono assenti dal molo." },
      ];
    } else if (isLevelFortyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.01, y: 14.96, radius: 4.0, name: "Il Bordo Inclinato del Disco Solare di Granito", loreClue: "Il caratteristico profilo ellittico del tetto inclinato verso il mare è raddrizzato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.06, radius: 4.0, name: "I Pannelli Frangisole in Alluminio e Vetro", loreClue: "I lucernari piramidali orientati a nord che illuminano la sala lettura sono rimossi." },
        { id: `lvl${id}_d3`, x: 81.99, y: 14.96, radius: 4.0, name: "La Sfera del Planetario Sospeso sulla Piazza", loreClue: "La monumentale sfera scura che galleggia sulla vasca d'acqua è scomparsa." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.96, radius: 4.0, name: "I Caratteri Alfabetici Scolpiti sul Granito Grigio", loreClue: "I glifi delle scritture antiche e moderne incisi sulla facciata risultano piallati." },
        { id: `lvl${id}_d5`, x: 37.99, y: 41.96, radius: 4.0, name: "Il Bassorilievo dei Geroglifici Tolemaici", loreClue: "La serie di simboli faraonici scolpiti sul basamento della biblioteca è svanita." },
        { id: `lvl${id}_d6`, x: 62.01, y: 41.96, radius: 4.0, name: "Il Ponte Pedonale d'Accesso alla Biblioteca", loreClue: "La passerella aerea sospesa tra la piazza e l'atrio principale è stata tolta." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.98, radius: 4.0, name: "La Scalinata Monumentale del Piazzale", loreClue: "I gradoni in granito d'Assuan che scendono alla sala conferenze sono spianati." },
        { id: `lvl${id}_d8`, x: 20.01, y: 75.00, radius: 4.0, name: "Lo Specchio d'Acqua della Piscina Riflettente", loreClue: "La vasca azzurra che riflette la curva dell'edificio scompare dal selciato." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Parapetto in Cristallo del Camminamento", loreClue: "La balaustra in vetro trasparente che delimita la piazza pedonale è assente." },
        { id: `lvl${id}_d10`, x: 79.99, y: 74.99, radius: 4.0, name: "Il Lastricato a Piastre Quadrangolari sul Suolo", loreClue: "Le giunture geometriche della pavimentazione monumentale appaiono sigillate." },
      ];
    } else if (isLevelFifty) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.95, radius: 4.0, name: "La Superficie Increspata del Mare Turchese", loreClue: "I riverberi di luce solare che filtrano attraverso l'acqua limpida sono oscurati." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Colonna di Bolle d'Aria degli Archeologi Sub", loreClue: "Il fascio ascendente di bollicine dal respiratore del subacqueo è scomparso." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.95, radius: 4.0, name: "Il Fascio di Luce dell'Illuminatore da Fondale", loreClue: "Il raggio luminoso artificiale che rischiara i reperti marmorei è spento." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.97, radius: 4.0, name: "La Corona di Pigne e Pampini d'Edera", loreClue: "Le foglie d'edera scolpite sulla chioma del giovane Dioniso sommerso sono piallate." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.97, radius: 4.0, name: "Il Torace Muscolare in Marmo Pario della Statua", loreClue: "La modellatura classica del busto della scultura ellenistica appare levigata." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.98, radius: 4.0, name: "Il Braccio Disteso con la Coppa del Vino (Kantharos)", loreClue: "Il braccio destro della divinità che regge il vaso sacro è svanito nel mare." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "L'Anfora Vinaria Rodia Incrostata di Conchiglie", loreClue: "Il coccio del grande recipiente commerciale sommerso è assente dalla sabbia." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Il Plinto Lapideo della Villa Imperiale Sprofondata", loreClue: "Il basamento in calcare su cui poggia la statua nel ninfeo sommerso è scomparso." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Prateria di Posidonia Oceanica sulle Rovine", loreClue: "Le foglie nastriformi della pianta marina che avvolgono le macerie sono rimosse." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Le Tessere di Mosaico Sommerso tra i Sedimenti", loreClue: "I tasselli policromi del pavimento della villa romana inabissata sono coperti." },
      ];
    } else if (isStageFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 50.75, y: 26.34, radius: 5.5, name: "Il Paranco sulla Volta Sommersa", loreClue: "Un paranco da spedizione con carrucola d'acciaio e fune di canapa è calato dal lucernario della volta crollata." },
        { id: `lvl${id}_d2`, x: 90.42, y: 61.38, radius: 6.0, name: "La Lanterna a Petrolio Spenta", loreClue: "La fiamma viva all'interno della lanterna marinaresca è spenta, lasciando lo stoppino carbonizzato." },
        { id: `lvl${id}_d3`, x: 57.50, y: 75.33, radius: 5.5, name: "Lo Scarabeo di Lapislazzuli di Tolomeo", loreClue: "Un prezioso amuleto tolemaico intagliato in puro lapislazzuli e filigrana d'oro è adagiato sul plinto di pietra." },
        { id: `lvl${id}_d4`, x: 82.33, y: 83.48, radius: 5.5, name: "La Bussola Geodetica sul Diario", loreClue: "Una bussola tascabile in ottone con coperchio aperto è posata sulle pagine scritte del giornale di scavo." },
        { id: `lvl${id}_d5`, x: 62.67, y: 79.80, radius: 6.0, name: "Il Sigillo Reale e Nastro di Seta Blu", loreClue: "Il cilindro porta-papiri in bronzo è avvolto da un nastro di seta blu cobalto con sigillo reale in ceralacca." },
        { id: `lvl${id}_d6`, x: 13.33, y: 51.34, radius: 5.5, name: "La Lucerna Romana Accesa sull'Altare", loreClue: "Una piccola lucerna romana in terracotta con stoppino fiammeggiante rischiara l'altare del settore ovest." },
        { id: `lvl${id}_d7`, x: 33.75, y: 45.98, radius: 5.5, name: "La Corona d'Alloro sulla Statua Ellenistica", loreClue: "Sulla testa della statua di marmo tolemaica compare una finissima corona d'alloro scolpita." },
        { id: `lvl${id}_d8`, x: 60.83, y: 89.84, radius: 5.5, name: "Il Metro da Agrimensore Inclinato", loreClue: "Il righello pieghevole da rilievo archeologico sul tavolo è aperto e angolato a 45 gradi." },
        { id: `lvl${id}_d9`, x: 78.50, y: 55.80, radius: 5.5, name: "La Grata a Croce del Casco da Palombaro", loreClue: "Il visore circolare del pesante elmo di rame Siebe Gorman presenta una grata protettiva a croce regolare." },
        { id: `lvl${id}_d10`, x: 77.50, y: 67.19, radius: 5.0, name: "La Targhetta Ovale del Costruttore Rimossa", loreClue: "La piastrina ovale in ottone con la matricola del costruttore è assente dal collare pettorale dell'elmo." },
      ];
    } else if (isLevelFiftyOne) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 63.21, y: 26.12, radius: 5.5, name: "Il Disco Solare di Hathor sulla Parete", loreClue: "Il disco solare d'oro sopra la corona della dea Hathor nell'affresco parietale è svanito nel rilievo." },
        { id: `lvl${id}_d2`, x: 94.33, y: 12.28, radius: 5.5, name: "Il Disco Solare di Ra a Destra", loreClue: "Sulla parete destra, il disco solare cremisi del dio Ra è stato rimosso dalla decorazione policroma." },
        { id: `lvl${id}_d3`, x: 44.00, y: 56.25, radius: 6.0, name: "L'Ankh di Diaspro nel Sarcofago", loreClue: "Una preziosa chiave Ankh intagliata in diaspro rosso riposa all'interno della cassa in pietra del faraone." },
        { id: `lvl${id}_d4`, x: 64.67, y: 53.35, radius: 6.0, name: "Lo Scarabeo di Faience Azzurra sul Baule", loreClue: "Uno scarabeo alato in ceramica azzurra di faience è adagiato sul coperchio del baule dorato." },
        { id: `lvl${id}_d5`, x: 35.00, y: 83.71, radius: 6.0, name: "Il Cordone di Lino del Vaso Canopo", loreClue: "Un cordone rituale di lino con sigillo d'argilla cinge il collo del vaso canopo con testa di babbuino (Hapi)." },
        { id: `lvl${id}_d6`, x: 13.96, y: 90.51, radius: 6.0, name: "La Cazzuola Archeologica nella Cesta", loreClue: "Una cazzuola d'acciaio con manico di legno spunta dalla cesta di vimini colma di cocci decorati." },
        { id: `lvl${id}_d7`, x: 61.04, y: 79.58, radius: 5.0, name: "La Lucerna Egizia di Bronzo", loreClue: "Una lucerna votiva in bronzo a forma di barca del sole è posata sull'angolo del banco da campo." },
        { id: `lvl${id}_d8`, x: 81.33, y: 62.50, radius: 6.0, name: "La Fiamma della Lanterna Spenta", loreClue: "La fiamma viva all'interno della lanterna a cherosene è spenta, lasciando intravedere il solo stoppino." },
        { id: `lvl${id}_d9`, x: 82.12, y: 80.30, radius: 5.5, name: "Il Disegno dell'Ankh sul Taccuino", loreClue: "Sulla pagina aperta del taccuino da rilievo compare il disegno a inchiostro di china di un simbolo Ankh." },
        { id: `lvl${id}_d10`, x: 92.38, y: 72.94, radius: 6.0, name: "La Fascia di Seta Rossa sul Casco Coloniale", loreClue: "Il casco coloniale da esploratore in sughero è arricchito da una fascia di seta rossa da spedizione britannica." },
      ];
    } else if (isLevelFiftyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Capitello a Fiore di Papiro Aperto a Sinistra", loreClue: "La monumentale corolla papiriforme aperta sulla prima colonna della navata appare levigata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.05, radius: 4.0, name: "L'Architrave Monolitico Centrale della Volta", loreClue: "Il blocco in arenaria con cartigli di Ramesse II che collega le colonne centrali è assente." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Capitello a Bocciolo Chiuso a Destra", loreClue: "Il capitello papiriforme chiuso della navata laterale destra è stato scalpellato." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.06, radius: 4.0, name: "Il Graticcio di Pietra del Lucernario", loreClue: "Le fessure verticali della finestra a transenna che illumina la sala ipostila sono colmate." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "L'Incisione di Amon-Ra sulla Colonna Sinistra", loreClue: "Il bassorilievo del dio Amon con il doppio pennacchio sul fusto sinistro è raschiato." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "I Cartigli di Seti I sulla Colonna Destra", loreClue: "L'anello ovale con i geroglifici del faraone sulla colonna destra svanisce nella pietra." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.95, radius: 4.0, name: "La Base Circolare della Colonna Esterna", loreClue: "Lo zoccolo di fondazione in arenaria dura alla base del fusto sinistro appare spianato." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.06, radius: 4.0, name: "La Colonna Centrale della Navata Maggiore", loreClue: "Il fusto colossale alto ventiquattro metri al centro del passaggio processionale è rimosso." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.95, radius: 4.0, name: "Il Rocchio di Tamburo Caduto a Terra", loreClue: "Il blocco cilindrico crollato dalla sommità e posato lungo il viale è scomparso." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Lastricato della Via Trionfale di Tebe", loreClue: "I lastroni sagomati del percorso rituale dei sacerdoti in primo piano sono livellati." },
      ];
    } else if (isLevelFiftyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 17.99, y: 14.96, radius: 4.0, name: "Il Pennone di Cedro del Pilone d'Ingresso", loreClue: "L'incavo per l'imponente asta da bandiera cerimoniale sulla facciata del pilone è colmato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.02, radius: 4.0, name: "Il Timpano a Gola Egizia del Portale", loreClue: "La modanatura a gola svasata con toro che corona il portale d'ingresso è scalpellata." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "L'Obelisco Monolitico di Granito Rosa", loreClue: "La cuspide piramidale dell'obelisco gemello superstite scompare dal cielo di Luxor." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "La Doppia Corona Pschent del Colosso Sinistro", loreClue: "La corona unificata dell'Alto e Basso Egitto sul capo della statua gigante è assente." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.97, radius: 4.0, name: "La Barba Posticcia Rituale del Faraone", loreClue: "La barba divina intrecciata ancorata al mento del colosso seduto è stata spezzata." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.97, radius: 4.0, name: "Il Nemes a Righe del Secondo Colosso", loreClue: "Il panneggio regale a pieghe dorate sulla testa del colosso destro appare raschiato." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.98, radius: 4.0, name: "La Statuetta della Regina Nefertari al Ginocchio", loreClue: "La scultura in miniatura della regina consorte scolpita accanto alla gamba è scomparsa." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Il Trono di Granito con il Simbolo Sema-Tawy", loreClue: "Il rilievo dell'unione di papiro e loto sui fianchi del trono è stato levigato." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.02, radius: 4.0, name: "La Scalinata d'Accesso al Vestibolo", loreClue: "I gradoni monumentali attraverso cui si accede al cortile colonnato sono spianati." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Basamento con i Prigionieri Stranieri Incisi", loreClue: "La teoria dei popoli vinti legati per le braccia sul basamento del colosso è svanita." },
      ];
    } else if (isLevelFiftyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Pylon del Tempio di Mut all'Orizzonte", loreClue: "La massiccia mole del portale d'accesso al tempio della sposa di Amon svanisce a sinistra." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Vetta dell'Obelisco di Hatshepsut", loreClue: "L'apice dorato dell'obelisco più alto di Karnak scompare sopra la linea dei muri." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Il Palmereto Lungo la Riva del Nilo", loreClue: "I ciuffi delle palme da dattero che costeggiano il viale sacro a destra sono rimossi." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "La Sfinge Criocefala con Testa di Ariete", loreClue: "La statua con corpo di leone e testa d'ariete sacro ad Amon a sinistra è stata tolta." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.95, radius: 4.0, name: "La Prospettiva Centrale del Dromos Pavimentato", loreClue: "Il punto di fuga della via processionale rettilinea lunga tre chilometri appare alterato." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.97, radius: 4.0, name: "La Statuetta del Faraone sotto le Zampe dell'Ariete", loreClue: "La piccola figura di Ramesse protetta sotto il mento della sfinge destra è assente." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "Il Piedistallo Modanato della Sfinge Anteriore", loreClue: "Il basamento in pietra calcarea decorato con tori e scanalature risulta piallato." },
        { id: `lvl${id}_d8`, x: 39.99, y: 69.98, radius: 4.0, name: "Il Bacino per le Abluzioni Fluviali", loreClue: "La vasca circolare in arenaria per le cerimonie della barca d'oro è svanita dal ciglio." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Base della Sfinge con Dedica di Nectanebo", loreClue: "L'epigrafe dell'ultimo faraone indigeno scolpita sulla fronte del plinto è cancellata." },
        { id: `lvl${id}_d10`, x: 88.01, y: 74.98, radius: 4.0, name: "Il Cordolo del Canale Idraulico del Viale", loreClue: "La canaletta in muratura per l'irrigazione del verde del dromos è colmata di terra." },
      ];
    } else if (isLevelFiftyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "La Parete Verticale della Falesia Tebana a Sinistra", loreClue: "Il costone roccioso a strapiombo della montagna di Tebe a sinistra appare levigato." },
        { id: `lvl${id}_d2`, x: 50.01, y: 10.05, radius: 4.0, name: "La Vetta Rocciosa El-Qurn (Il Corno Sacro)", loreClue: "La piramide naturale che sovrasta la tomba dei faraoni svanisce dal profilo celeste." },
        { id: `lvl${id}_d3`, x: 79.99, y: 12.05, radius: 4.0, name: "Il Contrafforte Montano della Falesia a Destra", loreClue: "La cresta dolomitica che racchiude l'anfiteatro naturale di Deir el-Bahari è assente." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.04, radius: 4.0, name: "Il Santuario di Amon sulla Terrazza Superiore", loreClue: "La facciata del santuario scavato nella viva roccia all'ultimo piano è uniformata." },
        { id: `lvl${id}_d5`, x: 14.99, y: 37.95, radius: 4.0, name: "La Cappella di Hathor con Colonne Hathoriche", loreClue: "I capitelli con il volto bifronte della dea dalle orecchie bovine a sinistra sono rimossi." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.94, radius: 4.0, name: "Il Portico della Spedizione nella Terra di Punt", loreClue: "Il colonnato che narra i commerci marittimi di mirra e incenso è stato levigato." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "I Pilastri Proto-Dorici della Terrazza Mediana", loreClue: "La teoria di pilastri poligonali a sedici facce del piano intermedio è scomparsa." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.07, radius: 4.0, name: "La Grande Rampa Inclinata Centrale", loreClue: "La monumentale rampa processionale che collega i gradoni della valle appare spianata." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "Il Bastione Angolare della Terrazza Inferiore", loreClue: "Il parapetto lapideo che sostiene il primo livello del tempio è stato rimosso." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.96, radius: 4.0, name: "Il Viale d'Ingresso con le Basi degli Alberi di Mirra", loreClue: "Le conche circolari che ospitavano gli alberi portati dalla regina sono svanite." },
      ];
    } else if (isLevelFiftySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "Il Crinale dei Monti della Valle dei Re", loreClue: "Il profilo delle vette tebane occidentali dietro i colossi svanisce all'orizzonte." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.04, radius: 4.0, name: "La Distesa Agricola della Golena del Nilo", loreClue: "La fertile striscia coltivata tra le statue e le montagne appare oscurata." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.95, radius: 4.0, name: "Il Cielo Terso della Nubia Meridionale", loreClue: "La linea crepuscolare sopra la spalla del colosso settentrionale scompare." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "Il Torso Monolitico di Amenofi III a Sinistra", loreClue: "Il petto colossale scolpito nel blocco unico di quarzite di Gebel el-Ahmar è svanito." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "La Corona del Colosso Settentrionale (Memnone Cantante)", loreClue: "I blocchi romani di restauro sovrapposti da Settimio Severo sono stati rimossi." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.97, radius: 4.0, name: "Le Iscrizioni Greche dei Viaggiatori Antichi", loreClue: "I graffiti dei poeti romani che testimoniano il canto mattutino della statua sono raschiati." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.97, radius: 4.0, name: "La Statua della Madre Mutemwia al Fianco", loreClue: "La scultura della regina madre scolpita in altorilievo sulla coscia destra è scomparsa." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.01, radius: 4.0, name: "Il Massiccio Basamento di Quarzite del Colosso Sud", loreClue: "Il piedistallo pesante centinaia di tonnellate immerso nel terreno appare livellato." },
        { id: `lvl${id}_d9`, x: 49.99, y: 78.00, radius: 4.0, name: "Il Canale d'Irrigazione tra i Due Colossi", loreClue: "La fossa d'acqua scavata dai contadini della piana tra le due statue è colmata." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Simbolo Hapi dell'Inondazione sul Fianco del Trono", loreClue: "Le figure gemelle del dio del Nilo che annodano i papiri sono state scalpellate." },
      ];
    } else if (isLevelFiftySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Pilone Orientale con i Bassorilievi della Battaglia di Kadesh", loreClue: "La gigantesca scena di carri da guerra scolpita sul pilone superstite è svanita." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Trabeazione Superiore della Corte di Ramesse", loreClue: "La fila di mensole e architravi retti dai pilastri osiriaci scompare dalla vista." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "I Magazzini a Volta in Mattoni di Fango sullo Sfondo", loreClue: "Le arcate in mattoni crudi delle riserve granarie del tempio sono state rimosse." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Il Pilastro Osiriaco del Faraone Eterno a Sinistra", loreClue: "La statua del re con braccia incrociate e flagelli addossata al pilastro è assente." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.95, radius: 4.0, name: "La Testa del Colosso Crollato di Ozymandias", loreClue: "Il volto maestoso della statua di mille tonnellate cantata da Shelley è scomparso dal suolo." },
        { id: `lvl${id}_d6`, x: 80.01, y: 41.97, radius: 4.0, name: "Il Piede e la Caviglia Gigante sul Basamento", loreClue: "Il frammento ciclopico del piede del faraone rimasto sul plinto è stato asportato." },
        { id: `lvl${id}_d7`, x: 12.01, y: 69.98, radius: 4.0, name: "La Base della Colonna della Sala Ipostila", loreClue: "Lo zoccolo modanato della colonna a calice aperta sul corridoio è livellato." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "I Blocchi di Granito Rosa della Spalla Spezzata", loreClue: "I massi levigati del torso del colosso sparsi sul piazzale sono scomparsi." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "Il Cartiglio sul Braccio del Colosso d'Ozymandias", loreClue: "L'incisione reale sul bicipite monumentale della statua riversa è stata raschiata." },
        { id: `lvl${id}_d10`, x: 88.00, y: 74.99, radius: 4.0, name: "Il Selciato della Seconda Corte Cerimoniale", loreClue: "I lastroni calcarei intagliati del pavimento del cortile appaiono rimossi." },
      ];
    } else if (isLevelFiftyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Portale d'Ingresso della Fortezza Siriana (Migdol)", loreClue: "La merlatura orientale della porta fortificata unica in Egitto è scomparsa." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Il Timpano Monumentale del Tempio di Ramesse III", loreClue: "Il coronamento a gola del secondo pilone del tempio funerario appare smussato." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "La Torre di Guardia del Recinto Merlato", loreClue: "Il bastione difensivo in mattoni d'argilla che domina la porta è stato rimosso." },
        { id: `lvl${id}_d4`, x: 50.01, y: 36.05, radius: 4.0, name: "I Pilastri Osiriaci del Cortile delle Udienze", loreClue: "Le statue di Ramesse III mummificato a guardia del cortile centrale sono assenti." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "Il Bassorilievo Navale della Battaglia contro i Popoli del Mare", loreClue: "I guerrieri Filistei con copricapi piumati sulle navi da guerra sono svaniti dalla parete." },
        { id: `lvl${id}_d6`, x: 84.99, y: 37.95, radius: 4.0, name: "La Teoria dei Prigionieri Libici Legati con Corde", loreClue: "I rilievi policromi dei capi dei popoli della Libia sono stati raschiati dal pilastro." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "I Colori Policromi Originali sotto l'Architrave", loreClue: "I pigmenti blu egizio, ocra e malachite intatti sotto le travi appaiono grigi e opachi." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "La Porta dei Giudizi del Palazzo Reale Adiacente", loreClue: "L'apertura d'accesso che conduceva agli appartamenti privati del faraone è murata." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "La Colonna a Fusto Papiriforme del Portico", loreClue: "La colonna con scanalature fiammeggianti sul lato nord del peristilio è scomparsa." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Selciato in Arenaria Rossa della Terrazza", loreClue: "I lastroni del pavimento su cui sfilavano le barche sacre risultano uniformati." },
      ];
    } else if (isLevelFiftyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "Il Crinale Arido del Monte Biban el-Harim", loreClue: "Il profilo roccioso brullo della gola che accoglie le regine scompare nel cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Cascata Secca del Torrente Stagionale", loreClue: "Il solco scavato dalle piene torrenziali millenarie nella falesia è stato colmato." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "La Cengia Rocciosa Sovrastante la Tomba di Khaemwaset", loreClue: "La terrazza naturale di calcare friabile sopra l'ipogeo principesco è assente." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "L'Ingresso a Pozzo della Tomba della Regina Titi", loreClue: "La rampa gradonata protetta da muretto a secco che scende alla camera è colmata." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.97, radius: 4.0, name: "La Tettonica a Spacco della Fessura Geologica", loreClue: "La profonda faglia tellurica nella roccia viva sopra i cunicoli appare sigillata." },
        { id: `lvl${id}_d6`, x: 62.01, y: 41.96, radius: 4.0, name: "La Garitta in Pietra dei Custodi di Scavo", loreClue: "La postazione di vedetta dell'ispettorato archeologico lungo il sentiero è rimossa." },
        { id: `lvl${id}_d7`, x: 87.99, y: 44.99, radius: 4.0, name: "Il Portale Murato dell'Ipogeo di Amun-her-khepeshef", loreClue: "I conci moderni di protezione all'ingresso della tomba del principe sono tolti." },
        { id: `lvl${id}_d8`, x: 20.00, y: 74.99, radius: 4.0, name: "Il Sentiero Lastricato dei Visitatori nella Gola", loreClue: "Il camminamento in ghiaia battuta e pietre bianche sul fondo valle è spianato." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Muretto di Contenimento Contro le Colate di Fango", loreClue: "La barriera para-alluvione costruita per proteggere gli ingressi è scomparsa." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Cartello Indicatore della Direzione Archeologica", loreClue: "La targa metallica con la mappa stratigrafica delle tombe è stata asportata." },
      ];
    } else if (isLevelSixty) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Disco Solare Dorato del Tramonto Egizio", loreClue: "Il sole calante che infiamma il cielo crepuscolare sul Nilo è oscurato da foschia." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Le Nuvole Crepuscolari Striate di Porpora", loreClue: "I vapori infuocati che riflettono la luce calante sopra la riva ovest sono svaniti." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Sagoma dei Monti Tebani sullo Sfondo", loreClue: "Il profilo scuro della catena montuosa che protegge la necropoli scompare nel cielo." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "L'Antenna Triangolare della Vela Latina a Sinistra", loreClue: "Il lungo pennone in legno ricurvo che sostiene la vela della prima feluca è assente." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "La Grande Vela Bianca della Feluca Principale", loreClue: "La candida tela triangolare spiegata al vento del Nilo al centro del fiume è scomparsa." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "La Piccola Barca da Pesca a Remi sulla Riva", loreClue: "La gondola fluviale a remi ormeggiata verso il canneto a destra svanisce nell'acqua." },
        { id: `lvl${id}_d7`, x: 11.99, y: 69.97, radius: 4.0, name: "Il Canneto di Papiro sulla Sponda Orientale", loreClue: "Il fitto ciuffo di piante fluviali di papiro e loto sulla riva sinistra è stato rimosso." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "Lo Scafo in Legno di Teak della Feluca", loreClue: "Il profilo sagomato della chiglia dell'imbarcazione tradizionale scompare dai flutti." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.99, radius: 4.0, name: "Il Riflesso Dorato del Sole sulle Acque del Nilo", loreClue: "La scia luccicante di luce solare che solca la superficie del grande fiume è svanita." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "La Fune d'Ormeggio alla Bitta della Corniche", loreClue: "La cima di canapa annodata al palo della banchina di Luxor è stata sciolta." },
      ];
    } else if (isStageSix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 63.21, y: 26.12, radius: 5.5, name: "Il Disco Solare di Hathor sulla Parete", loreClue: "Il disco solare d'oro sopra la corona della dea Hathor nell'affresco parietale è svanito nel rilievo." },
        { id: `lvl${id}_d2`, x: 94.33, y: 12.28, radius: 5.5, name: "Il Disco Solare di Ra a Destra", loreClue: "Sulla parete destra, il disco solare cremisi del dio Ra è stato rimosso dalla decorazione policroma." },
        { id: `lvl${id}_d3`, x: 44.00, y: 56.25, radius: 6.0, name: "L'Ankh di Diaspro nel Sarcofago", loreClue: "Una preziosa chiave Ankh intagliata in diaspro rosso riposa all'interno della cassa in pietra del faraone." },
        { id: `lvl${id}_d4`, x: 64.67, y: 53.35, radius: 6.0, name: "Lo Scarabeo di Faience Azzurra sul Baule", loreClue: "Uno scarabeo alato in ceramica azzurra di faience è adagiato sul coperchio del baule dorato." },
        { id: `lvl${id}_d5`, x: 35.00, y: 83.71, radius: 6.0, name: "Il Cordone di Lino del Vaso Canopo", loreClue: "Un cordone rituale di lino con sigillo d'argilla cinge il collo del vaso canopo con testa di babbuino (Hapi)." },
        { id: `lvl${id}_d6`, x: 13.96, y: 90.51, radius: 6.0, name: "La Cazzuola Archeologica nella Cesta", loreClue: "Una cazzuola d'acciaio con manico di legno spunta dalla cesta di vimini colma di cocci decorati." },
        { id: `lvl${id}_d7`, x: 61.04, y: 79.58, radius: 5.0, name: "La Lucerna Egizia di Bronzo", loreClue: "Una lucerna votiva in bronzo a forma di barca del sole è posata sull'angolo del banco da campo." },
        { id: `lvl${id}_d8`, x: 81.33, y: 62.50, radius: 6.0, name: "La Fiamma della Lanterna Spenta", loreClue: "La fiamma viva all'interno della lanterna a cherosene è spenta, lasciando intravedere il solo stoppino." },
        { id: `lvl${id}_d9`, x: 82.12, y: 80.30, radius: 5.5, name: "Il Disegno dell'Ankh sul Taccuino", loreClue: "Sulla pagina aperta del taccuino da rilievo compare il disegno a inchiostro di china di un simbolo Ankh." },
        { id: `lvl${id}_d10`, x: 92.38, y: 72.94, radius: 6.0, name: "La Fascia di Seta Rossa sul Casco Coloniale", loreClue: "Il casco coloniale da esploratore in sughero è arricchito da una fascia di seta rossa da spedizione britannica." },
      ];
    } else if (isLevelSixtyOne) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 89.42, y: 24.55, radius: 6.0, name: "La Lanterna a Cherosene sulla Trave", loreClue: "Una lanterna ad uragano in ottone è appesa al palo di sostegno della tenda da campo." },
        { id: `lvl${id}_d2`, x: 36.67, y: 22.32, radius: 5.5, name: "Il Disco Solare Alato sull'Architrave", loreClue: "Il blocco monolitico del tempio reca il sacro disco solare alato scolpito nella roccia calcarea." },
        { id: `lvl${id}_d3`, x: 68.50, y: 47.99, radius: 5.5, name: "La Palina Metrica nel Trincerone", loreClue: "Una palina geodetica a bande bianche e nere da rilievo topografico è piantata nella sabbia vicino allo scavo." },
        { id: `lvl${id}_d4`, x: 34.17, y: 69.75, radius: 5.5, name: "Il Filo a Piombo del Treppiede", loreClue: "Un pesante piombino conico in ottone pende dall'asse centrale del treppiede geodetico." },
        { id: `lvl${id}_d5`, x: 16.50, y: 76.56, radius: 6.0, name: "Il Piccone da Geologo nella Cesta", loreClue: "Un martello da geologo per l'assaggio della roccia poggia sull'orlo della cesta di vimini." },
        { id: `lvl${id}_d6`, x: 75.25, y: 71.09, radius: 5.0, name: "L'Etichetta Museale sulla Fiasca", loreClue: "Un cartellino di catalogazione legato con spago pende dal collo della bottiglia di reagenti chimici." },
        { id: `lvl${id}_d7`, x: 64.33, y: 74.89, radius: 5.5, name: "Il Nastro di Seta Rossa nel Giornale", loreClue: "Un nastro segnalibro scarlatto spunta dalle pagine aperte del giornale di rilievo dell'oasi." },
        { id: `lvl${id}_d8`, x: 41.25, y: 87.05, radius: 5.0, name: "La Moneta di Bronzo di Alessandro", loreClue: "Un'antica moneta tolemaica con l'effigie di Alessandro Magno con le corna d'Ammone è posata accanto ai cocci." },
        { id: `lvl${id}_d9`, x: 71.67, y: 82.25, radius: 5.0, name: "Il Sigillo di Ceralacca sulla Mappa", loreClue: "Un sigillo in ceralacca cremisi con lo stemma della Società Geografica è impresso sulla planimetria." },
        { id: `lvl${id}_d10`, x: 95.83, y: 84.15, radius: 6.0, name: "La Borraccia Militare sulla Sedia", loreClue: "Una borraccia in metallo rivestita di panno con tracolla di cuoio pende dal bracciolo della sedia da campo." },
      ];
    } else if (isLevelSixtyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "Il Pinnacolo di Sale e Fango del Torrione Nord", loreClue: "La punta conica in kershef che svetta sul bastione superiore è erosa dal vento." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "La Feritoia Cieca della Torre Centrale", loreClue: "L'apertura triangolare per il controllo del palmeto svanisce dalla muratura d'argilla." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.06, radius: 4.0, name: "Il Comignolo Tradizionale del Quartiere Alto", loreClue: "Il condotto di ventilazione in argilla salata della vecchia rocca è stato rimosso." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.04, radius: 4.0, name: "Il Portale d'Accesso alla Labirintica Cittadella", loreClue: "L'arco irregolare scavato nelle mura di fango indurito appare colmato a filo." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Trave in Tronco di Palma del Solaio", loreClue: "Il tronco nodoso di dattero che sostiene l'aggetto dell'abitazione è scomparso." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Finestrella ad Ogiva con Grata in Canne", loreClue: "Il piccolo vano luce schermato da steli di palma intrecciati è stato murato." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "Il Muro a Scarpa in Kershef Levigato", loreClue: "La robusta base inclinata che proteggeva la fortezza dalle piogge appare spianata." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "La Scala a Chiocciola Esterna Scavata nel Muro", loreClue: "I gradini irregolari in terra salina che salgono ai piani alti sono livellati." },
        { id: `lvl${id}_d9`, x: 82.01, y: 64.95, radius: 4.0, name: "Il Sostegno Ligneo del Passaggio Coperto", loreClue: "Il puntone obliquo in legno di tamarisco tra le due case è stato tolto." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "I Blocchi di Sale Minerale alla Base della Fortezza", loreClue: "I frammenti cristallini di roccia salina sparsi sul sentiero sono svaniti nella terra." },
      ];
    } else if (isLevelSixtyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.95, radius: 4.0, name: "La Chioma della Palma da Dattero a Sinistra", loreClue: "Il grande fascio di fronde verdi che ombreggia la vasca sacra è scomparso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Riflesso del Cielo nella Piscina Termale", loreClue: "Il limpido bagliore celeste sulla superficie sorgiva appare torbido e opaco." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "La Palma da Dattero Inclinata verso l'Acqua", loreClue: "Il tronco ricurvo della palma che sporgeva sopra la sorgente è stato rimosso." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "I Conci Circolari in Pietra del Bordo Vasca", loreClue: "I blocchi squadrati in calcare che formano il perimetro della piscina sono uniformati." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.97, radius: 4.0, name: "Lo Zampillo Centrale delle Bolle Termali", loreClue: "Il gorgoglio d'acqua calda sorgiva che risale dal fondo della fonte è svanito." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.97, radius: 4.0, name: "La Scaletta Sommersa per l'Immersione", loreClue: "I gradini scavati nella roccia per consentire il bagno rituale sono scomparsi." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.98, radius: 4.0, name: "La Panchina in Tronchi di Palma dei Bagnanti", loreClue: "Il sedile rustico ombreggiato sul bordo orientale della sorgente è stato tolto." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.01, radius: 4.0, name: "Il Condotto di Pietra per l'Irrigazione dell'Oasi", loreClue: "La canaletta che porta l'acqua sorgiva verso i frutteti appare interrotta." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Pavimento a Selciato Lastricato della Riva", loreClue: "Le pietre piatte levigate dal passaggio dei pellegrini sono sostituite da terra." },
        { id: `lvl${id}_d10`, x: 80.00, y: 74.99, radius: 4.0, name: "L'Anfora d'Argilla per l'Acqua Minerale", loreClue: "La brocca in terracotta posata sul muretto di pietra è svanita." },
      ];
    } else if (isLevelSixtyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Crinale Roccioso dell'Altopiano Libico", loreClue: "Il profilo dell'arida falesia calcarea che chiude la depressione scompare all'orizzonte." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Contrasto Cromatico tra Deserto e Salina", loreClue: "La linea di demarcazione tra le sabbie ocra e il bacino minerale è attenuata." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.95, radius: 4.0, name: "La Vetta Bianca del Tumulo Salino a Destra", loreClue: "La collina di sale candido accumulato dall'estrazione svanisce nel cielo." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.98, radius: 4.0, name: "La Crosta Cristallina Bianca del Bordo Bacino", loreClue: "L'orlo di cristalli di sale puro che circonda l'acqua turchese appare levigato." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.95, radius: 4.0, name: "L'Incredibile Tonalità Smeraldo della Pozza", loreClue: "Il trasparente colore verde-azzurro ipersalino della piscina naturale è opacizzato." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.97, radius: 4.0, name: "La Lingua di Terra Salina tra i Due Bacini", loreClue: "Il sentiero naturale in roccia salina che separa le vasche è scomparso sott'acqua." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "Le Geometrie Frattali delle Formazioni di Sale", loreClue: "I prismi esagonali di cloruro di sodio affioranti dall'acqua sono livellati." },
        { id: `lvl${id}_d8`, x: 39.99, y: 69.98, radius: 4.0, name: "Il Gradino di Sale Sommerso per Galleggiare", loreClue: "La mensola cristallina subacquea su cui poggiano i bagnanti è assente." },
        { id: `lvl${id}_d9`, x: 67.99, y: 69.96, radius: 4.0, name: "La Stalagmite di Sale Baciata dal Sole", loreClue: "La concrezione minerale bianchissima che emerge dai flutti salini è spezzata." },
        { id: `lvl${id}_d10`, x: 88.01, y: 75.01, radius: 4.0, name: "Il Cumulo di Salgemma Grezzo Estratto a Mano", loreClue: "La piramide di blocchi di sale tagliati dai cavatori tradizionali è rimossa." },
      ];
    } else if (isLevelSixtyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "La Cima Tronco-Conica della Collina Calcarea", loreClue: "Il profilo superiore della montagna rocciosa butterata di tombe svanisce nel cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "La Fenditura d'Accesso alla Tomba di Niperpathot", loreClue: "L'ingresso monumentale scavato nella viva roccia calcarea appare occluso." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.06, radius: 4.0, name: "Lo Sperone Roccioso sul Versante Orientale", loreClue: "La sporgenza naturale che sovrasta la necropoli greca e romana è stata rasa." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "L'Ingresso con Architrave della Tomba del Coccodrillo", loreClue: "Il portale rettangolare dell'ipogeo sacro a Sobek è svanito dalla parete." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.93, radius: 4.0, name: "Le Cavità a Nido d'Ape delle Sepolture Romane", loreClue: "I fori funerari aperti sul costone occidentale appaiono colmati da detriti." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Tomba di Si-Amun con Affreschi Ellenistici", loreClue: "La celebre camera sepolcrale dipinta con colori tolemaici è murata." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.97, radius: 4.0, name: "La Scarpata di Detriti Ghiaiosi alla Base", loreClue: "La conoide di ciottoli calcarei franati lungo il pendio è stata spianata." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "Il Sentiero a Tornanti per i Visitatori", loreClue: "La traccia battuta che risale i fianchi della collina tombale è scomparsa." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "Il Muretto di Protezione del Sentiero Basso", loreClue: "I cordoli in pietre a secco posti a riparo delle frane sono rimossi." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "I Massi Fossili con Conchiglie nel Calcare", loreClue: "I grandi blocchi ricchi di nummuliti e fossili marini in primo piano sono livellati." },
      ];
    } else if (isLevelSixtySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.95, radius: 4.0, name: "Il Bastione d'Ingresso della Rocca di Aghurmi", loreClue: "Le mura in pietra e fango che cingono l'acropoli oracolare svaniscono nel cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Cima della Parete del Naos dell'Oracolo", loreClue: "Il coronamento in conci regolari della cella di Amon appare scalpellato a filo." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "La Torre Angolare dell'Antico Villaggio Fortificato", loreClue: "La garitta di guardia abbarbicata sulla roccia a destra è scomparsa dal panorama." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "La Nicchia Segreta del Sacerdote Oracolare", loreClue: "La cavità celata nel muro da cui il clero pronunciava i responsi ad Alessandro è murata." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "Il Portale Monolitico con Fregio Dorico-Egizio", loreClue: "L'architrave sacro che unisce lo stile faraonico all'influenza greca è levigato." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.97, radius: 4.0, name: "I Rilievi con le Divinità dell'Oasi sul Muro", loreClue: "Le figure scolpite del dio Ammone dalle corna d'ariete sono svanite dalla pietra." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.98, radius: 4.0, name: "I Conci Squadrati dell'Anticamera Sacra", loreClue: "Le commettiture a secco tra i massi dell'atrio del santuario appaiono sigillate." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "Il Pozzo Sacro dell'Oracolo sul Fondamento", loreClue: "La canna scavata nella roccia madre per i vaticini idromantici è colmata." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "La Rampa Gradonata che Risale lo Sperone", loreClue: "I gradini intagliati nel monte calcareo percorsi da Alessandro Magno sono spianati." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "Il Terrapieno di Sostegno delle Fondazioni", loreClue: "La muratura a scarpa che impedisce il crollo del tempio sul burrone è rimossa." },
      ];
    } else if (isLevelSixtySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "La Cresta Affilata della Duna Seif a Sinistra", loreClue: "Il profilo a lama di coltello scolpito dal vento del Sahara scompare nel cielo terso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "L'Onda di Calore all'Orizzonte Desertico", loreClue: "Il miraggio luminoso che unisce le sabbie infuocate al cielo dorato è attenuato." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "Il Crinale della Grande Duna Longitudinale", loreClue: "La cresta sinuosa che si estende per centinaia di chilometri a destra è spianata." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Le Increspature Eoliche della Sabbia Dorata", loreClue: "I finissimi solchi geometrici a onde modellati dalla brezza desertica sono uniformati." },
        { id: `lvl${id}_d5`, x: 50.01, y: 39.96, radius: 4.0, name: "Il Versante a Franamento della Duna Centrale", loreClue: "La parete ripida a scivolamento di sabbia finissima appare liscia e compatta." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "L'Ombra Netta del Crepuscolo sulla Gola di Sabbia", loreClue: "Il profondo contrasto bruno nell'avvallamento tra le dune è attenuato." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "Le Tracce delle Ruote dei Fuoristrada Beduini", loreClue: "I solchi battuti dalle guide delle carovane nel deserto sono svaniti." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.97, radius: 4.0, name: "Il Frammento di Vetro Silicico del Deserto Libico", loreClue: "Il raro frammento vetroso giallo-verde di meteorite è scomparso dalla sabbia." },
        { id: `lvl${id}_d9`, x: 67.99, y: 69.98, radius: 4.0, name: "La Conca Interdunale di Roccia Arenaria", loreClue: "L'affioramento lapideo piatto sul fondo della depressione è coperto da sabbia." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Velo di Polvere Dorata Sollevato dal Vento", loreClue: "La nuvola impalpabile di pulviscolo solare che danza sul colmo della duna è svanita." },
      ];
    } else if (isLevelSixtyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.05, radius: 4.0, name: "La Parasta Angolare in Kershef della Casa Tradizionale", loreClue: "Il montante di terra cruda e sale all'angolo dell'edificio berbero è smussato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.05, radius: 4.0, name: "La Feritoia di Ventilazione per la Brezza Notturna", loreClue: "Il piccolo foro triangolare che rinfresca la dimora nel deserto è stato colmato." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "Il Trave di Sostegno in Tronco di Dattero", loreClue: "Il puntone ligneo sporgente sotto il tetto a terrazza è scomparso dalla facciata." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "Il Portale in Legno d'Ulivo Intagliato a Mano", loreClue: "La porta battente con tipici motivi geometrici siwiani è stata rimossa." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Mensoletta Rustica in Fango per la Lucerna", loreClue: "Il supporto sagomato accanto all'ingresso per la lampada ad olio è stato tolto." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.94, radius: 4.0, name: "La Grata in Canne di Giunco della Finestra", loreClue: "La stuoia traforata che protegge dal sole dell'oasi svanisce dal vano." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.95, radius: 4.0, name: "Lo Zoccolo di Fondazione in Argilla Rinforzata", loreClue: "La base ispessita a protezione delle pareti esterne appare uniformata." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.05, radius: 4.0, name: "I Sedili in Terra Battuta del Cortiletto Esterno", loreClue: "Le panche continue integrate nel muro per accogliere gli ospiti sono spianate." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.96, radius: 4.0, name: "Il Canestro di Vimini e Foglie di Palma per i Datteri", loreClue: "La grande cesta intrecciata posata all'ombra del vicolo è scomparsa." },
        { id: `lvl${id}_d10`, x: 50.01, y: 87.96, radius: 4.0, name: "Il Selciato del Vicolo Berbero in Pietra Calcare", loreClue: "I ciottoli chiari posati a secco lungo la stradina tradizionale sono livellati." },
      ];
    } else if (isLevelSixtyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "Il Bagliore Cremisi del Sole Calante sulle Acque", loreClue: "Il riflesso infuocato del tramonto sulla laguna salata di Birket Siwa è spento." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Fascia di Nubi Violacee sopra il Deserto", loreClue: "I vapori color ametista che striano il cielo sopra l'oasi sono svaniti." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "La Silhouette delle Montagne All'Orizzonte Ovest", loreClue: "Il profilo scuro dei rilievi verso il confine libico scompare dal cielo serale." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "La Chioma della Palma Riflessa nello Specchio Lacustre", loreClue: "Le fronde della palma da cocco riflesse nell'acqua immobile sono svanite." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.97, radius: 4.0, name: "Il Tronco della Palma Gemella Curvata sull'Acqua", loreClue: "Il fusto flessuoso proteso sul lago salato per offrire ombra ai naviganti è assente." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "La Cima del Pontile di Legno sul Lago", loreClue: "La testata in assi di palma dove attraccano i barchetti dell'isola è stata rimossa." },
        { id: `lvl${id}_d7`, x: 87.99, y: 44.99, radius: 4.0, name: "Il Canneto di Palude che Circonda la Riva", loreClue: "La cortina di giunchi selvatici lungo la battigia fangosa è stata tagliata." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.00, radius: 4.0, name: "I Cuscini Tradizionali del Caffè all'Aperto", loreClue: "Le sedute in tessuto berbero colorato posate sulla riva del lago sono rimosse." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Tavolino Basso in Tronco Intagliato", loreClue: "La postazione rustica per la degustazione del tè alla menta siwiano è scomparsa." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.00, radius: 4.0, name: "La Lucerna a Candela Protetta dal Vetro", loreClue: "La lanterna accesa per illuminare l'approdo all'imbrunire è svanita." },
      ];
    } else if (isLevelSeventy) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "La Vetta della Palma Reale con Grappoli di Datteri Siwi", loreClue: "I caschi dorati dei rinomati datteri dell'oasi pronti per la raccolta sono scomparsi." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "Il Sole Filtrante Attraverso il Fogliame dei Palmizi", loreClue: "I raggi di luce che penetrano tra le fitte fronde creando giochi d'ombra sono attenuati." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Chioma dell'Albero di Melograno nel Sottobosco", loreClue: "I rami carichi di frutti vermigli che crescono all'ombra delle palme sono stati tagliati." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.97, radius: 4.0, name: "Il Tronco Scanalato della Palma Secolare", loreClue: "La corteccia a rombi e le fibre nodose del tronco principale appaiono lisce." },
        { id: `lvl${id}_d5`, x: 50.02, y: 39.96, radius: 4.0, name: "L'Arancio Amaro Carico di Zagara", loreClue: "Il cespuglio di agrumi dell'oasi fiorito tra i datteri è svanito dal sottobosco." },
        { id: `lvl${id}_d6`, x: 80.01, y: 41.97, radius: 4.0, name: "Il Fusto d'Ulivo Contorto delle Coltivazioni", loreClue: "Il tronco secolare dell'ulivo da cui si ricava l'olio di Siwa è stato rimosso." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.97, radius: 4.0, name: "La Canaletta di Irrigazione Fluviale in Pietra", loreClue: "Il condotto idraulico alimentato dalla sorgente per bagnare il frutteto è colmato." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.97, radius: 4.0, name: "La Paratoia in Legno per Deviare l'Acqua", loreClue: "La tavoletta che apre il flusso idrico verso i solchi coltivati è stata tolta." },
        { id: `lvl${id}_d9`, x: 67.99, y: 69.97, radius: 4.0, name: "Il Sentiero Ombreggiato dei Contadini dell'Oasi", loreClue: "La traccia battuta coperta da foglie secche di dattero appare spianata." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.01, radius: 4.0, name: "Il Canestro di Palma Intrecciata per le Olive", loreClue: "La cesta artigianale in foglia di palma posata ai piedi dell'albero è assente." },
      ];
    } else if (isStageSeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 89.42, y: 24.55, radius: 6.0, name: "La Lanterna a Cherosene sulla Trave", loreClue: "Una lanterna ad uragano in ottone è appesa al palo di sostegno della tenda da campo." },
        { id: `lvl${id}_d2`, x: 36.67, y: 22.32, radius: 5.5, name: "Il Disco Solare Alato sull'Architrave", loreClue: "Il blocco monolitico del tempio reca il sacro disco solare alato scolpito nella roccia calcarea." },
        { id: `lvl${id}_d3`, x: 68.50, y: 47.99, radius: 5.5, name: "La Palina Metrica nel Trincerone", loreClue: "Una palina geodetica a bande bianche e nere da rilievo topografico è piantata nella sabbia vicino allo scavo." },
        { id: `lvl${id}_d4`, x: 34.17, y: 69.75, radius: 5.5, name: "Il Filo a Piombo del Treppiede", loreClue: "Un pesante piombino conico in ottone pende dall'asse centrale del treppiede geodetico." },
        { id: `lvl${id}_d5`, x: 16.50, y: 76.56, radius: 6.0, name: "Il Piccone da Geologo nella Cesta", loreClue: "Un martello da geologo per l'assaggio della roccia poggia sull'orlo della cesta di vimini." },
        { id: `lvl${id}_d6`, x: 75.25, y: 71.09, radius: 5.0, name: "L'Etichetta Museale sulla Fiasca", loreClue: "Un cartellino di catalogazione legato con spago pende dal collo della bottiglia di reagenti chimici." },
        { id: `lvl${id}_d7`, x: 64.33, y: 74.89, radius: 5.5, name: "Il Nastro di Seta Rossa nel Giornale", loreClue: "Un nastro segnalibro scarlatto spunta dalle pagine aperte del giornale di rilievo dell'oasi." },
        { id: `lvl${id}_d8`, x: 41.25, y: 87.05, radius: 5.0, name: "La Moneta di Bronzo di Alessandro", loreClue: "Un'antica moneta tolemaica con l'effigie di Alessandro Magno con le corna d'Ammone è posata accanto ai cocci." },
        { id: `lvl${id}_d9`, x: 71.67, y: 82.25, radius: 5.0, name: "Il Sigillo di Ceralacca sulla Mappa", loreClue: "Un sigillo in ceralacca cremisi con lo stemma della Società Geografica è impresso sulla planimetria." },
        { id: `lvl${id}_d10`, x: 95.83, y: 84.15, radius: 6.0, name: "La Borraccia Militare sulla Sedia", loreClue: "Una borraccia in metallo rivestita di panno con tracolla di cuoio pende dal bracciolo della sedia da campo." },
      ];
    } else if (isLevelSeventyOne) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 48.96, y: 15.62, radius: 5.0, name: "L'Urna Sommitale di Al-Khazneh", loreClue: "Il bulbo superiore della maestosa urna funeraria scavata nella roccia sulla tholos del Tesoro è eroso e scomparso." },
        { id: `lvl${id}_d2`, x: 95.21, y: 63.90, radius: 5.0, name: "La Maniglia a T del Badile Rimossa", loreClue: "L'impugnatura a T in ferro battuto del badile appoggiato alla parete rocciosa del Siq è stata rimossa." },
        { id: `lvl${id}_d3`, x: 78.33, y: 59.77, radius: 4.5, name: "Il Tamburo Graduato del Teodolite", loreClue: "La ghiera azimutale in ottone sul basamento dello strumento geodetico è stata ruotata di 90 gradi." },
        { id: `lvl${id}_d4`, x: 68.75, y: 72.43, radius: 4.5, name: "La Penna d'Acciaio nella Mano", loreClue: "Il pennino metallico da rilievo con cui l'archeologo annota le quote è scomparso dalla sua mano destra." },
        { id: `lvl${id}_d5`, x: 78.33, y: 74.00, radius: 4.5, name: "Il Sigillo di Ceralacca sulla Mappa", loreClue: "Un sigillo di ceralacca rosso cardinale con lo stemma del rilievo è impresso sul rotolo topografico." },
        { id: `lvl${id}_d6`, x: 72.58, y: 83.15, radius: 4.5, name: "Il Segnalibro Rosso nel Taccuino", loreClue: "Un nastro segnalibro scarlatto spunta dalle pagine rilegate del taccuino appoggiato sul tavolo da campo." },
        { id: `lvl${id}_d7`, x: 18.21, y: 70.65, radius: 5.0, name: "La Fascia di Seta Rossa sulla Sella", loreClue: "Una fascia cerimoniale in seta rossa è legata all'arcione della sella da dromedario della guida beduina." },
        { id: `lvl${id}_d8`, x: 22.17, y: 87.56, radius: 5.0, name: "L'Incisione Nabatea sul Blocco", loreClue: "Sulla superficie del blocco di pietra scolpito in primo piano compare una sacra incisione votiva nabatea." },
        { id: `lvl${id}_d9`, x: 35.67, y: 89.23, radius: 5.0, name: "Il Manico di Frassino nella Cesta", loreClue: "Un manico in legno di frassino di una zappa da scavo spunta dal bordo della cesta di vimini in primo piano." },
        { id: `lvl${id}_d10`, x: 31.67, y: 78.46, radius: 5.0, name: "Il Cartellino Inventariale sul Cesto", loreClue: "Un'etichetta inventariale museale in pergamena è legata alla seconda cesta di scavo dietro l'archeologo." },
      ];
    } else if (isLevelSeventyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "Il Capitello Nabateo a Cornici del Pilastro Sinistro", loreClue: "Il caratteristico capitello liscio a blocchi sovrapposti è stato scalpellato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.05, radius: 4.0, name: "L'Urna Funeraria Gigante sulla Tholos", loreClue: "La monumentale urna litica alta nove metri scolpita sulla cupola centrale è scomparsa." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.06, radius: 4.0, name: "Il Frontone Spezzato a Destra", loreClue: "La semicupola scavata nella roccia arenaria sul timpano destro appare spianata." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "La Nicchia Cerimoniale Centrale della Tholos", loreClue: "L'edicola circolare scavata al secondo piano della facciata è colmata." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.94, radius: 4.0, name: "Il Concio d'Arenaria Rossa del Secondo Ordine", loreClue: "Il blocco modanato che sostiene la trabeazione sinistra svanisce nella falesia." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Nicchia ad Arco del Portale Superiore Destro", loreClue: "Il vano cieco per le statue votive degli dèi nabatei è stato raschiato." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.95, radius: 4.0, name: "La Base Attica della Semicolonna d'Ingresso", loreClue: "Lo zoccolo curvilineo alla base della colonna monumentale appare livellato." },
        { id: `lvl${id}_d8`, x: 49.99, y: 62.05, radius: 4.0, name: "L'Architrave del Portale d'Accesso ad Ad-Deir", loreClue: "Il massiccio trave monolitico sopra l'ingresso alto otto metri è rimosso." },
        { id: `lvl${id}_d9`, x: 82.01, y: 64.95, radius: 4.0, name: "La Fascia Modanata del Basamento Inferiore", loreClue: "La modanatura a toro che percorre il piedistallo della facciata è piallata." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "La Spianata di Roccia del Piazzale delle Feste", loreClue: "I gradoni scavati nel piano roccioso per le assemblee religiose sono spianati." },
      ];
    } else if (isLevelSeventyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "Il Lembo di Cielo Azzurro tra le Pareti Rocciose", loreClue: "La strettissima fenditura tra i costoni d'arenaria alti ottanta metri è oscurata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Fessura Geologica a Strapiombo", loreClue: "La spaccatura naturale creata dai movimenti tettonici appare saldata." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "Lo Spuntone d'Arenaria Rosa della Falesia Destra", loreClue: "La mensola naturale sospesa sopra la gola svanisce nell'ombra." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "La Nicchia Votiva con il Betilo Nabateo", loreClue: "La sacra pietra aniconica scolpita nella roccia per proteggere i viaggiatori è scalpellata." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "Il Canale Idraulico Scavato lungo la Parete", loreClue: "La canaletta in terracotta che convogliava l'acqua della sorgente di Mosè è svanita." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "L'Incisione della Carovana dei Cammellieri", loreClue: "Il bassorilievo raffigurante i dromedari e il mercante lungo il Siq è stato levigato." },
        { id: `lvl${id}_d7`, x: 87.99, y: 44.97, radius: 4.0, name: "La Conduttura in Tubi di Terracotta Raccordata", loreClue: "I condotti sigillati con malta idraulica impermeabile sono scomparsi." },
        { id: `lvl${id}_d8`, x: 19.99, y: 75.02, radius: 4.0, name: "I Conci Romani della Pavimentazione ad Archi", loreClue: "Il basolato lastricato fatto posare dall'imperatore Traiano appare rimosso." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Ciottolato Naturale Levigato dalle Piene", loreClue: "I sassi fluviali levigati dai torrenti invernali lungo il corridoio sono spianati." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.01, radius: 4.0, name: "Il Muretto di Contenimento Contro i Detriti", loreClue: "La barriera in blocchi di pietra che deviava le alluvioni è assente." },
      ];
    } else if (isLevelSeventyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.95, radius: 4.0, name: "La Semicupola Superiore della Tomba dell'Urna", loreClue: "Il timpano ricurvo coronato dal vaso funerario scompare dalla montagna." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Facciata a Tre Ordini della Tomba del Palazzo", loreClue: "L'imitazione di un palazzo ellenistico a più piani intagliato nella roccia è levigata." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.95, radius: 4.0, name: "La Trabeazione Corinzia della Tomba Corinzia", loreClue: "I dettagli floreali che richiamano il Tesoro di Petra sono stati raschiati." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Le Striature di Seta Policroma nell'Arenaria", loreClue: "Le spettacolari venature naturali rosse, ocra e blu cobalto della roccia appaiono opache." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.94, radius: 4.0, name: "Le Colonne Doriche della Galleria Funeraria", loreClue: "Il porticato scavato a mezza costa nella falesia del Jebel al-Khubtha è rimosso." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.98, radius: 4.0, name: "Le Camere Funerarie Ipogee con Loculi", loreClue: "Le aperture rettangolari dei sepolcri principeschi appaiono murate." },
        { id: `lvl${id}_d7`, x: 11.99, y: 69.98, radius: 4.0, name: "Il Portico a Due Ordini di Archi Sotterranei", loreClue: "Le monumentali volte a botte costruite per sostenere la terrazza sono scomparse." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "La Scalinata Monumentale di Salita alle Tombe", loreClue: "I gradini intagliati nel costone roccioso per raggiungere le cripte sono spianati." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Cattedrale Bizantina Adattata nella Cella", loreClue: "L'iscrizione greca che consacrò la tomba nabatea a chiesa cristiana è svanita." },
        { id: `lvl${id}_d10`, x: 87.99, y: 75.01, radius: 4.0, name: "Il Muretto di Contenimento del Belvedere Panoramico", loreClue: "La balaustra in pietra affacciata sul centro della città carovaniera è stata tolta." },
      ];
    } else if (isLevelSeventyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "Le Tombe Arcaiche Tagliate dalla Cavea a Sinistra", loreClue: "Le facciate a merli delle tombe tagliate per far spazio alle gradinate sono colmate." },
        { id: `lvl${id}_d2`, x: 50.01, y: 10.06, radius: 4.0, name: "La Parete di Scavo Verticale del Monte", loreClue: "Il taglio netto nella montagna di roccia rosa per alloggiare il teatro appare naturale." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "I Loculi Funerari Superiori sulla Falesia Destra", loreClue: "Le nicchie sepolcolari violate durante l'espansione romana sono livellate." },
        { id: `lvl${id}_d4`, x: 50.01, y: 36.05, radius: 4.0, name: "La Galleria Semianulare del Diazoma", loreClue: "Il corridoio di disimpegno che divide il settore medio da quello alto è scomparso." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.94, radius: 4.0, name: "Le Gradinate dell'Ima Cavea a Sinistra", loreClue: "I sedili monolitici del settore basso per i dignitari sono stati spianati." },
        { id: `lvl${id}_d6`, x: 84.99, y: 37.93, radius: 4.0, name: "Le Gradinate dell'Ima Cavea a Destra", loreClue: "I gradini scolpiti nel banco d'arenaria fiammeggiante a destra risultano raschiati." },
        { id: `lvl${id}_d7`, x: 18.01, y: 64.96, radius: 4.0, name: "Il Vomitorium d'Uscita dei Cittadini", loreClue: "Il passaggio a volta per il deflusso degli ottomila spettatori è occluso." },
        { id: `lvl${id}_d8`, x: 50.01, y: 62.05, radius: 4.0, name: "L'Orchestra Semicircolare Pavimentata", loreClue: "Il piano dell'orchestra al centro della scena teatrale appare privo di basolato." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.95, radius: 4.0, name: "I Resti della Scaenae Frons in Muratura Romana", loreClue: "Le basi delle colonne marmoree della facciata scenica sono state asportate." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Condotto di Scolo delle Acque Piovane", loreClue: "La canaletta scavata attorno all'orchestra per prevenire alluvioni è colmata di sabbia." },
      ];
    } else if (isLevelSeventySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.94, radius: 4.0, name: "Il Portale Trionfale di Temenos all'Ingresso", loreClue: "I tre archi monumentali che separavano la via commerciale dal santuario sono scomparsi." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.07, radius: 4.0, name: "La Trabeazione dell'Esedra Settentrionale", loreClue: "Il cornicione classico in pietra arenaria che corona l'abside è scalpellato." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.95, radius: 4.0, name: "Il Colonnato Superiore della Terrazza del Tempio", loreClue: "I capitelli con teste d'elefante in stucco dorato svaniscono dalla sommità." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "I Fusti Scanalati delle Colonne del Decumano", loreClue: "Le scanalature delle colonne lungo la strada carovaniera appaiono piallate." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.98, radius: 4.0, name: "La Scalinata Monumentale Propilaica", loreClue: "La monumentale gradinata cerimoniale che sale al Grande Tempio è livellata." },
        { id: `lvl${id}_d6`, x: 61.99, y: 41.95, radius: 4.0, name: "La Sede del Bouleuterion (Teatro Assembleare Interno)", loreClue: "I gradini semicircolari della camera del senato nabateo all'interno del tempio sono rimossi." },
        { id: `lvl${id}_d7`, x: 87.99, y: 44.97, radius: 4.0, name: "Le Botteghe dei Mercanti sulla Strada dei Mercati", loreClue: "Le stanze dei cambiavalute e venditori d'incenso lungo la strada sono murate." },
        { id: `lvl${id}_d8`, x: 19.99, y: 74.99, radius: 4.0, name: "Il Lastricato in Blocchi Poligonali di Calcare", loreClue: "I grandi basoli romani che pavimentavano la via trionfale appaiono tolti." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Canale Fognario di Drenaggio Sotterraneo", loreClue: "La griglia in pietra che conduceva l'acqua piovana nel torrente Wadi Musa è assente." },
        { id: `lvl${id}_d10`, x: 80.00, y: 74.99, radius: 4.0, name: "Il Marciapiede Rialzato per i Pedoni e Carovane", loreClue: "La banchina d'arenaria che delimitava la carreggiata dai pedoni è spianata." },
      ];
    } else if (isLevelSeventySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Timpano Sommerso tra le Nubi della Falesia", loreClue: "Il massiccio roccioso di Umm al-Biyara che incombe sul tempio svanisce nel cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.06, radius: 4.0, name: "Il Cornicione a Gola della Facciata Principale", loreClue: "La modanatura ellenistico-nabatea che corona la monumentale cella è stata levigata." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.95, radius: 4.0, name: "La Parasta Angolare in Blocchi di Calcare Giallo", loreClue: "Il cantonale squadrato alto ventitré metri che ha resistito ai terremoti è smussato." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Il Fregio a Triglifo e Metope Floreali", loreClue: "I rilievi vegetali con rosette e busti di divinità nabatee sulla trabeazione sono cancellati." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Il Grande Arco Trionfale d'Accesso all'Adyton", loreClue: "L'arcata a tutto sesto attraverso cui si scorge il sancta sanctorum è colmata." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.97, radius: 4.0, name: "La Scala a Chiocciola per il Tetto Sacrificale", loreClue: "I vani nella muratura che salivano alla copertura per i riti solari sono murati." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "I Blocchi di Legno di Ginepro Antisisma", loreClue: "Le travi elastiche incassate nella pietra che hanno protetto il tempio sono assenti." },
        { id: `lvl${id}_d8`, x: 39.99, y: 69.98, radius: 4.0, name: "L'Altare Monumentale per i Sacrifici all'Aperto", loreClue: "La grande piattaforma sacrificale quadrata antistante il pronao è scomparsa." },
        { id: `lvl${id}_d9`, x: 67.99, y: 69.98, radius: 4.0, name: "I Conci della Scalinata a Ventaglio", loreClue: "La rampa di ventisei gradini in marmo importato è stata livellata." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "I Frammenti di Stucco Policromo sui Muri", loreClue: "Gli intonaci a finti marmi colorati sopravvissuti alle intemperie risultano raschiati." },
      ];
    } else if (isLevelSeventyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "L'Obelisco Monolitico del Dio Dushara", loreClue: "Il colossale cuneo di roccia scavato asportando la montagna circostante è scomparso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Il Panorama a Trecentosessanta Gradi sulla Conca", loreClue: "La vista mozzafiato su tutta la valle di Petra e il santuario di Aronne svanisce nella nebbia." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "L'Obelisco Gemello della Dea Al-Uzza", loreClue: "Il secondo obelisco rupestre alto sei metri a guardia della vetta è stato scalpellato." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.02, radius: 4.0, name: "L'Altare Circolare per le Libagioni di Sangue", loreClue: "La mensa rituale con canaletta per lo scolo delle offerte sacrificali è levigata." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Vasca per le Purificazioni dei Sacerdoti", loreClue: "Il bacino rettangolare intagliato nella roccia per raccogliere l'acqua piovana è colmato." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.94, radius: 4.0, name: "Il Sedile dei Sacerdoti del Culto Solare", loreClue: "Il banco in arenaria riservato al clero durante i sacrifici è scomparso." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "La Scalinata Rituale d'Accesso alla Vetta Sacra", loreClue: "I ripidi gradini scavati nella roccia multicolore per salire al picco sono spianati." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.06, radius: 4.0, name: "La Canaletta di Drenaggio Rituale", loreClue: "Il solco scavato nel pavimento di roccia per guidare il vino sacro scompare dal suolo." },
        { id: `lvl${id}_d9`, x: 82.01, y: 64.95, radius: 4.0, name: "Il Parapetto Naturale a Strapiombo sul Burrone", loreClue: "La cengia rocciosa affacciata sul vuoto di centinaia di metri appare smussata." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Pavimento di Roccia Madre Spianato a Mano", loreClue: "La terrazza sacra livellata a colpi di scalpello migliaia di anni fa è irregolare." },
      ];
    } else if (isLevelSeventyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "La Parete Monolitica di Roccia Rossa a Sinistra", loreClue: "La parete verticale d'arenaria fiammeggiante del massiccio di Jebel Khazali appare levigata." },
        { id: `lvl${id}_d2`, x: 49.99, y: 12.06, radius: 4.0, name: "La Fenditura d'Accesso alla Gola Oscura", loreClue: "Lo stretto passaggio tra le pareti alte duecento metri è nascosto nell'ombra." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "Il Torrione d'Arenaria Rossa Modellato dal Vento", loreClue: "Il pilastro naturale scolpito dalle tempeste di sabbia millenarie è scomparso." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "I Petrogli di Figure Umane Preistoriche", loreClue: "Le incisioni rupestri raffiguranti cacciatori con archi risalenti a quattromila anni fa sono cancellate." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.97, radius: 4.0, name: "Le Iscrizioni Thamudiche in Antico Arabo", loreClue: "I testi epigrafici incisi dai carovanieri che attraversavano il deserto sono stati raschiati." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.97, radius: 4.0, name: "Il Rilievo dei Piedi Sacri e delle Orme", loreClue: "Le sacre impronte votive scolpite sulla roccia all'ingresso della gola sono svanite." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.98, radius: 4.0, name: "I Graffiti delle Impronte di Stambecco e Leone", loreClue: "I profili degli animali sacri del deserto dipinti con ocra rossa sono scomparsi." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.01, radius: 4.0, name: "La Pozza d'Acqua Piovana Nascosta nel Canyon", loreClue: "La riserva sorgiva naturale custodita nel cuore della gola è colmata da sabbia." },
        { id: `lvl${id}_d9`, x: 50.01, y: 78.02, radius: 4.0, name: "I Massi Ciclamino Levigati dalle Alluvioni", loreClue: "I blocchi arrotondati dal passaggio delle piene invernali sono stati tolti." },
        { id: `lvl${id}_d10`, x: 80.01, y: 75.01, radius: 4.0, name: "La Sabbia Rossa Fusa ai Ciottoli Basaltici", loreClue: "Il fondo calpestabile della gola formato da finissima polvere di ruggine è livellato." },
      ];
    } else if (isLevelEighty) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Bagliore Cremisi del Sole Calante sulle Vette", loreClue: "La luce infuocata del tramonto che illumina le cime di granito è oscurata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Vetta Centrale dei Sette Pilastri", loreClue: "Il picco roccioso più alto intitolato al racconto di Lawrence d'Arabia scompare dal cielo." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Cortina di Rilievi d'Arenaria verso l'Arabia", loreClue: "La catena montuosa che si perde verso l'orizzonte meridionale appare velata." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.97, radius: 4.0, name: "La Gola Ombreggiata tra i Due Contrafforti", loreClue: "Il profondo vallone in ombra tra i pilastri rocciosi appare appiattito." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "I Colossali Contrafforti Naturali di Roccia", loreClue: "Le sette scanalature verticali modellate dal vento che danno nome al massiccio sono levigate." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "La Duna di Sabbia Rossa a Mezza Costa", loreClue: "Il deposito di sabbia finissima arancione accumulata sul fianco della montagna è svanito." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Conca di Sabbia Dorata con Ciuffi di Tamarisco", loreClue: "I rari arbusti del deserto che resistono all'arsura tra le dune sono rimossi." },
        { id: `lvl${id}_d8`, x: 39.99, y: 69.98, radius: 4.0, name: "Le Tracce delle Orme di Cammello nel Sahara", loreClue: "Le caratteristiche impronte tondeggianti della carovana beduina sono cancellate." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "I Sassi Vulcanici Neri Sparsi sulla Sabbia Rossa", loreClue: "I ciottoli scuri ricchi di ferro che costellano la pianura desertica sono svaniti." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Velo di Polvere Infuocata Sollevato dal Vento Serale", loreClue: "La foschia dorata che si alza dal deserto alla fine del giorno è scomparsa." },
      ];
    } else if (isLevelSeventyOne) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 48.96, y: 15.62, radius: 5.0, name: "L'Urna Sommitale di Al-Khazneh", loreClue: "Il bulbo superiore della maestosa urna funeraria scavata nella roccia sulla tholos del Tesoro è eroso e scomparso." },
        { id: `lvl${id}_d2`, x: 95.21, y: 63.90, radius: 5.0, name: "La Maniglia a T del Badile Rimossa", loreClue: "L'impugnatura a T in ferro battuto del badile appoggiato alla parete rocciosa del Siq è stata rimossa." },
        { id: `lvl${id}_d3`, x: 78.33, y: 59.77, radius: 4.5, name: "Il Tamburo Graduato del Teodolite", loreClue: "La ghiera azimutale in ottone sul basamento dello strumento geodetico è stata ruotata di 90 gradi." },
        { id: `lvl${id}_d4`, x: 68.75, y: 72.43, radius: 4.5, name: "La Penna d'Acciaio nella Mano", loreClue: "Il pennino metallico da rilievo con cui l'archeologo annota le quote è scomparso dalla sua mano destra." },
        { id: `lvl${id}_d5`, x: 78.33, y: 74.00, radius: 4.5, name: "Il Sigillo di Ceralacca sulla Mappa", loreClue: "Un sigillo di ceralacca rosso cardinale con lo stemma del rilievo è impresso sul rotolo topografico." },
        { id: `lvl${id}_d6`, x: 72.58, y: 83.15, radius: 4.5, name: "Il Segnalibro Rosso nel Taccuino", loreClue: "Un nastro segnalibro scarlatto spunta dalle pagine rilegate del taccuino appoggiato sul tavolo da campo." },
        { id: `lvl${id}_d7`, x: 18.21, y: 70.65, radius: 5.0, name: "La Fascia di Seta Rossa sulla Sella", loreClue: "Una fascia cerimoniale in seta rossa è legata all'arcione della sella da dromedario della guida beduina." },
        { id: `lvl${id}_d8`, x: 22.17, y: 87.56, radius: 5.0, name: "L'Incisione Nabatea sul Blocco", loreClue: "Sulla superficie del blocco di pietra scolpito in primo piano compare una sacra incisione votiva nabatea." },
        { id: `lvl${id}_d9`, x: 35.67, y: 89.23, radius: 5.0, name: "Il Manico di Frassino nella Cesta", loreClue: "Un manico in legno di frassino di una zappa da scavo spunta dal bordo della cesta di vimini in primo piano." },
        { id: `lvl${id}_d10`, x: 31.67, y: 78.46, radius: 5.0, name: "Il Cartellino Inventariale sul Cesto", loreClue: "Un'etichetta inventariale museale in pergamena è legata alla seconda cesta di scavo dietro l'archeologo." },
      ];
    } else if (isLevelSeventyTwo) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "Il Capitello Nabateo a Cornici del Pilastro Sinistro", loreClue: "Il caratteristico capitello liscio a blocchi sovrapposti è stato scalpellato." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.05, radius: 4.0, name: "L'Urna Funeraria Gigante sulla Tholos", loreClue: "La monumentale urna litica alta nove metri scolpita sulla cupola centrale è scomparsa." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.06, radius: 4.0, name: "Il Frontone Spezzato a Destra", loreClue: "La semicupola scavata nella roccia arenaria sul timpano destro appare spianata." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.05, radius: 4.0, name: "La Nicchia Cerimoniale Centrale della Tholos", loreClue: "L'edicola circolare scavata al secondo piano della facciata è colmata." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.94, radius: 4.0, name: "Il Concio d'Arenaria Rossa del Secondo Ordine", loreClue: "Il blocco modanato che sostiene la trabeazione sinistra svanisce nella falesia." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.95, radius: 4.0, name: "La Nicchia ad Arco del Portale Superiore Destro", loreClue: "Il vano cieco per le statue votive degli dèi nabatei è stato raschiato." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.95, radius: 4.0, name: "La Base Attica della Semicolonna d'Ingresso", loreClue: "Lo zoccolo curvilineo alla base della colonna monumentale appare livellato." },
        { id: `lvl${id}_d8`, x: 49.99, y: 62.05, radius: 4.0, name: "L'Architrave del Portale d'Accesso ad Ad-Deir", loreClue: "Il massiccio trave monolitico sopra l'ingresso alto otto metri è rimosso." },
        { id: `lvl${id}_d9`, x: 82.01, y: 64.95, radius: 4.0, name: "La Fascia Modanata del Basamento Inferiore", loreClue: "La modanatura a toro che percorre il piedistallo della facciata è piallata." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "La Spianata di Roccia del Piazzale delle Feste", loreClue: "I gradoni scavati nel piano roccioso per le assemblee religiose sono spianati." },
      ];
    } else if (isLevelSeventyThree) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "Il Lembo di Cielo Azzurro tra le Pareti Rocciose", loreClue: "La strettissima fenditura tra i costoni d'arenaria alti ottanta metri è oscurata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Fessura Geologica a Strapiombo", loreClue: "La spaccatura naturale creata dai movimenti tettonici appare saldata." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "Lo Spuntone d'Arenaria Rosa della Falesia Destra", loreClue: "La mensola naturale sospesa sopra la gola svanisce nell'ombra." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "La Nicchia Votiva con il Betilo Nabateo", loreClue: "La sacra pietra aniconica scolpita nella roccia per proteggere i viaggiatori è scalpellata." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.96, radius: 4.0, name: "Il Canale Idraulico Scavato lungo la Parete", loreClue: "La canaletta in terracotta che convogliava l'acqua della sorgente di Mosè è svanita." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.96, radius: 4.0, name: "L'Incisione della Carovana dei Cammellieri", loreClue: "Il bassorilievo raffigurante i dromedari e il mercante lungo il Siq è stato levigato." },
        { id: `lvl${id}_d7`, x: 87.99, y: 44.97, radius: 4.0, name: "La Conduttura in Tubi di Terracotta Raccordata", loreClue: "I condotti sigillati con malta idraulica impermeabile sono scomparsi." },
        { id: `lvl${id}_d8`, x: 19.99, y: 75.02, radius: 4.0, name: "I Conci Romani della Pavimentazione ad Archi", loreClue: "Il basolato lastricato fatto posare dall'imperatore Traiano appare rimosso." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Ciottolato Naturale Levigato dalle Piene", loreClue: "I sassi fluviali levigati dai torrenti invernali lungo il corridoio sono spianati." },
        { id: `lvl${id}_d10`, x: 80.00, y: 75.01, radius: 4.0, name: "Il Muretto di Contenimento Contro i Detriti", loreClue: "La barriera in blocchi di pietra che deviava le alluvioni è assente." },
      ];
    } else if (isLevelSeventyFour) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.95, radius: 4.0, name: "La Semicupola Superiore della Tomba dell'Urna", loreClue: "Il timpano ricurvo coronato dal vaso funerario scompare dalla montagna." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Facciata a Tre Ordini della Tomba del Palazzo", loreClue: "L'imitazione di un palazzo ellenistico a più piani intagliato nella roccia è levigata." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.95, radius: 4.0, name: "La Trabeazione Corinzia della Tomba Corinzia", loreClue: "I dettagli floreali che richiamano il Tesoro di Petra sono stati raschiati." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Le Striature di Seta Policroma nell'Arenaria", loreClue: "Le spettacolari venature naturali rosse, ocra e blu cobalto della roccia appaiono opache." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.94, radius: 4.0, name: "Le Colonne Doriche della Galleria Funeraria", loreClue: "Il porticato scavato a mezza costa nella falesia del Jebel al-Khubtha è rimosso." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.98, radius: 4.0, name: "Le Camere Funerarie Ipogee con Loculi", loreClue: "Le aperture rettangolari dei sepolcri principeschi appaiono murate." },
        { id: `lvl${id}_d7`, x: 11.99, y: 69.98, radius: 4.0, name: "Il Portico a Due Ordini di Archi Sotterranei", loreClue: "Le monumentali volte a botte costruite per sostenere la terrazza sono scomparse." },
        { id: `lvl${id}_d8`, x: 40.00, y: 69.98, radius: 4.0, name: "La Scalinata Monumentale di Salita alle Tombe", loreClue: "I gradini intagliati nel costone roccioso per raggiungere le cripte sono spianati." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "La Cattedrale Bizantina Adattata nella Cella", loreClue: "L'iscrizione greca che consacrò la tomba nabatea a chiesa cristiana è svanita." },
        { id: `lvl${id}_d10`, x: 87.99, y: 75.01, radius: 4.0, name: "Il Muretto di Contenimento del Belvedere Panoramico", loreClue: "La balaustra in pietra affacciata sul centro della città carovaniera è stata tolta." },
      ];
    } else if (isLevelSeventyFive) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "Le Tombe Arcaiche Tagliate dalla Cavea a Sinistra", loreClue: "Le facciate a merli delle tombe tagliate per far spazio alle gradinate sono colmate." },
        { id: `lvl${id}_d2`, x: 50.01, y: 10.06, radius: 4.0, name: "La Parete di Scavo Verticale del Monte", loreClue: "Il taglio netto nella montagna di roccia rosa per alloggiare il teatro appare naturale." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "I Loculi Funerari Superiori sulla Falesia Destra", loreClue: "Le nicchie sepolcolari violate durante l'espansione romana sono livellate." },
        { id: `lvl${id}_d4`, x: 50.01, y: 36.05, radius: 4.0, name: "La Galleria Semianulare del Diazoma", loreClue: "Il corridoio di disimpegno che divide il settore medio da quello alto è scomparso." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.94, radius: 4.0, name: "Le Gradinate dell'Ima Cavea a Sinistra", loreClue: "I sedili monolitici del settore basso per i dignitari sono stati spianati." },
        { id: `lvl${id}_d6`, x: 84.99, y: 37.93, radius: 4.0, name: "Le Gradinate dell'Ima Cavea a Destra", loreClue: "I gradini scolpiti nel banco d'arenaria fiammeggiante a destra risultano raschiati." },
        { id: `lvl${id}_d7`, x: 18.01, y: 64.96, radius: 4.0, name: "Il Vomitorium d'Uscita dei Cittadini", loreClue: "Il passaggio a volta per il deflusso degli ottomila spettatori è occluso." },
        { id: `lvl${id}_d8`, x: 50.01, y: 62.05, radius: 4.0, name: "L'Orchestra Semicircolare Pavimentata", loreClue: "Il piano dell'orchestra al centro della scena teatrale appare privo di basolato." },
        { id: `lvl${id}_d9`, x: 82.00, y: 64.95, radius: 4.0, name: "I Resti della Scaenae Frons in Muratura Romana", loreClue: "Le basi delle colonne marmoree della facciata scenica sono state asportate." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Condotto di Scolo delle Acque Piovane", loreClue: "La canaletta scavata attorno all'orchestra per prevenire alluvioni è colmata di sabbia." },
      ];
    } else if (isLevelSeventySix) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.94, radius: 4.0, name: "Il Portale Trionfale di Temenos all'Ingresso", loreClue: "I tre archi monumentali che separavano la via commerciale dal santuario sono scomparsi." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.07, radius: 4.0, name: "La Trabeazione dell'Esedra Settentrionale", loreClue: "Il cornicione classico in pietra arenaria che corona l'abside è scalpellato." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.95, radius: 4.0, name: "Il Colonnato Superiore della Terrazza del Tempio", loreClue: "I capitelli con teste d'elefante in stucco dorato svaniscono dalla sommità." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "I Fusti Scanalati delle Colonne del Decumano", loreClue: "Le scanalature delle colonne lungo la strada carovaniera appaiono piallate." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.98, radius: 4.0, name: "La Scalinata Monumentale Propilaica", loreClue: "La monumentale gradinata cerimoniale che sale al Grande Tempio è livellata." },
        { id: `lvl${id}_d6`, x: 61.99, y: 41.95, radius: 4.0, name: "La Sede del Bouleuterion (Teatro Assembleare Interno)", loreClue: "I gradini semicircolari della camera del senato nabateo all'interno del tempio sono rimossi." },
        { id: `lvl${id}_d7`, x: 87.99, y: 44.97, radius: 4.0, name: "Le Botteghe dei Mercanti sulla Strada dei Mercati", loreClue: "Le stanze dei cambiavalute e venditori d'incenso lungo la strada sono murate." },
        { id: `lvl${id}_d8`, x: 19.99, y: 74.99, radius: 4.0, name: "Il Lastricato in Blocchi Poligonali di Calcare", loreClue: "I grandi basoli romani che pavimentavano la via trionfale appaiono tolti." },
        { id: `lvl${id}_d9`, x: 50.00, y: 78.01, radius: 4.0, name: "Il Canale Fognario di Drenaggio Sotterraneo", loreClue: "La griglia in pietra che conduceva l'acqua piovana nel torrente Wadi Musa è assente." },
        { id: `lvl${id}_d10`, x: 80.00, y: 74.99, radius: 4.0, name: "Il Marciapiede Rialzato per i Pedoni e Carovane", loreClue: "La banchina d'arenaria che delimitava la carreggiata dai pedoni è spianata." },
      ];
    } else if (isLevelSeventySeven) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Timpano Sommerso tra le Nubi della Falesia", loreClue: "Il massiccio roccioso di Umm al-Biyara che incombe sul tempio svanisce nel cielo." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.06, radius: 4.0, name: "Il Cornicione a Gola della Facciata Principale", loreClue: "La modanatura ellenistico-nabatea che corona la monumentale cella è stata levigata." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.95, radius: 4.0, name: "La Parasta Angolare in Blocchi di Calcare Giallo", loreClue: "Il cantonale squadrato alto ventitré metri che ha resistito ai terremoti è smussato." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.96, radius: 4.0, name: "Il Fregio a Triglifo e Metope Floreali", loreClue: "I rilievi vegetali con rosette e busti di divinità nabatee sulla trabeazione sono cancellati." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "Il Grande Arco Trionfale d'Accesso all'Adyton", loreClue: "L'arcata a tutto sesto attraverso cui si scorge il sancta sanctorum è colmata." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.97, radius: 4.0, name: "La Scala a Chiocciola per il Tetto Sacrificale", loreClue: "I vani nella muratura che salivano alla copertura per i riti solari sono murati." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "I Blocchi di Legno di Ginepro Antisisma", loreClue: "Le travi elastiche incassate nella pietra che hanno protetto il tempio sono assenti." },
        { id: `lvl${id}_d8`, x: 39.99, y: 69.98, radius: 4.0, name: "L'Altare Monumentale per i Sacrifici all'Aperto", loreClue: "La grande piattaforma sacrificale quadrata antistante il pronao è scomparsa." },
        { id: `lvl${id}_d9`, x: 67.99, y: 69.98, radius: 4.0, name: "I Conci della Scalinata a Ventaglio", loreClue: "La rampa di ventisei gradini in marmo importato è stata livellata." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "I Frammenti di Stucco Policromo sui Muri", loreClue: "Gli intonaci a finti marmi colorati sopravvissuti alle intemperie risultano raschiati." },
      ];
    } else if (isLevelSeventyEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 20.00, y: 12.06, radius: 4.0, name: "L'Obelisco Monolitico del Dio Dushara", loreClue: "Il colossale cuneo di roccia scavato asportando la montagna circostante è scomparso." },
        { id: `lvl${id}_d2`, x: 50.00, y: 10.04, radius: 4.0, name: "Il Panorama a Trecentosessanta Gradi sulla Conca", loreClue: "La vista mozzafiato su tutta la valle di Petra e il santuario di Aronne svanisce nella nebbia." },
        { id: `lvl${id}_d3`, x: 80.00, y: 12.05, radius: 4.0, name: "L'Obelisco Gemello della Dea Al-Uzza", loreClue: "Il secondo obelisco rupestre alto sei metri a guardia della vetta è stato scalpellato." },
        { id: `lvl${id}_d4`, x: 50.00, y: 36.02, radius: 4.0, name: "L'Altare Circolare per le Libagioni di Sangue", loreClue: "La mensa rituale con canaletta per lo scolo delle offerte sacrificali è levigata." },
        { id: `lvl${id}_d5`, x: 15.00, y: 37.95, radius: 4.0, name: "La Vasca per le Purificazioni dei Sacerdoti", loreClue: "Il bacino rettangolare intagliato nella roccia per raccogliere l'acqua piovana è colmato." },
        { id: `lvl${id}_d6`, x: 85.00, y: 37.94, radius: 4.0, name: "Il Sedile dei Sacerdoti del Culto Solare", loreClue: "Il banco in arenaria riservato al clero durante i sacrifici è scomparso." },
        { id: `lvl${id}_d7`, x: 18.00, y: 64.96, radius: 4.0, name: "La Scalinata Rituale d'Accesso alla Vetta Sacra", loreClue: "I ripidi gradini scavati nella roccia multicolore per salire al picco sono spianati." },
        { id: `lvl${id}_d8`, x: 50.00, y: 62.06, radius: 4.0, name: "La Canaletta di Drenaggio Rituale", loreClue: "Il solco scavato nel pavimento di roccia per guidare il vino sacro scompare dal suolo." },
        { id: `lvl${id}_d9`, x: 82.01, y: 64.95, radius: 4.0, name: "Il Parapetto Naturale a Strapiombo sul Burrone", loreClue: "La cengia rocciosa affacciata sul vuoto di centinaia di metri appare smussata." },
        { id: `lvl${id}_d10`, x: 50.00, y: 87.95, radius: 4.0, name: "Il Pavimento di Roccia Madre Spianato a Mano", loreClue: "La terrazza sacra livellata a colpi di scalpello migliaia di anni fa è irregolare." },
      ];
    } else if (isLevelSeventyNine) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 18.00, y: 14.96, radius: 4.0, name: "La Parete Monolitica di Roccia Rossa a Sinistra", loreClue: "La parete verticale d'arenaria fiammeggiante del massiccio di Jebel Khazali appare levigata." },
        { id: `lvl${id}_d2`, x: 49.99, y: 12.06, radius: 4.0, name: "La Fenditura d'Accesso alla Gola Oscura", loreClue: "Lo stretto passaggio tra le pareti alte duecento metri è nascosto nell'ombra." },
        { id: `lvl${id}_d3`, x: 82.00, y: 14.96, radius: 4.0, name: "Il Torrione d'Arenaria Rossa Modellato dal Vento", loreClue: "Il pilastro naturale scolpito dalle tempeste di sabbia millenarie è scomparso." },
        { id: `lvl${id}_d4`, x: 12.00, y: 44.98, radius: 4.0, name: "I Petrogli di Figure Umane Preistoriche", loreClue: "Le incisioni rupestri raffiguranti cacciatori con archi risalenti a quattromila anni fa sono cancellate." },
        { id: `lvl${id}_d5`, x: 38.00, y: 41.97, radius: 4.0, name: "Le Iscrizioni Thamudiche in Antico Arabo", loreClue: "I testi epigrafici incisi dai carovanieri che attraversavano il deserto sono stati raschiati." },
        { id: `lvl${id}_d6`, x: 62.00, y: 41.97, radius: 4.0, name: "Il Rilievo dei Piedi Sacri e delle Orme", loreClue: "Le sacre impronte votive scolpite sulla roccia all'ingresso della gola sono svanite." },
        { id: `lvl${id}_d7`, x: 88.00, y: 44.98, radius: 4.0, name: "I Graffiti delle Impronte di Stambecco e Leone", loreClue: "I profili degli animali sacri del deserto dipinti con ocra rossa sono scomparsi." },
        { id: `lvl${id}_d8`, x: 20.00, y: 75.01, radius: 4.0, name: "La Pozza d'Acqua Piovana Nascosta nel Canyon", loreClue: "La riserva sorgiva naturale custodita nel cuore della gola è colmata da sabbia." },
        { id: `lvl${id}_d9`, x: 50.01, y: 78.02, radius: 4.0, name: "I Massi Ciclamino Levigati dalle Alluvioni", loreClue: "I blocchi arrotondati dal passaggio delle piene invernali sono stati tolti." },
        { id: `lvl${id}_d10`, x: 80.01, y: 75.01, radius: 4.0, name: "La Sabbia Rossa Fusa ai Ciottoli Basaltici", loreClue: "Il fondo calpestabile della gola formato da finissima polvere di ruggine è livellato." },
      ];
    } else if (isLevelEighty) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 15.00, y: 14.96, radius: 4.0, name: "Il Bagliore Cremisi del Sole Calante sulle Vette", loreClue: "La luce infuocata del tramonto che illumina le cime di granito è oscurata." },
        { id: `lvl${id}_d2`, x: 50.00, y: 12.05, radius: 4.0, name: "La Vetta Centrale dei Sette Pilastri", loreClue: "Il picco roccioso più alto intitolato al racconto di Lawrence d'Arabia scompare dal cielo." },
        { id: `lvl${id}_d3`, x: 85.00, y: 14.96, radius: 4.0, name: "La Cortina di Rilievi d'Arenaria verso l'Arabia", loreClue: "La catena montuosa che si perde verso l'orizzonte meridionale appare velata." },
        { id: `lvl${id}_d4`, x: 20.00, y: 41.97, radius: 4.0, name: "La Gola Ombreggiata tra i Due Contrafforti", loreClue: "Il profondo vallone in ombra tra i pilastri rocciosi appare appiattito." },
        { id: `lvl${id}_d5`, x: 50.00, y: 39.96, radius: 4.0, name: "I Colossali Contrafforti Naturali di Roccia", loreClue: "Le sette scanalature verticali modellate dal vento che danno nome al massiccio sono levigate." },
        { id: `lvl${id}_d6`, x: 80.00, y: 41.96, radius: 4.0, name: "La Duna di Sabbia Rossa a Mezza Costa", loreClue: "Il deposito di sabbia finissima arancione accumulata sul fianco della montagna è svanito." },
        { id: `lvl${id}_d7`, x: 12.00, y: 69.98, radius: 4.0, name: "La Conca di Sabbia Dorata con Ciuffi di Tamarisco", loreClue: "I rari arbusti del deserto che resistono all'arsura tra le dune sono rimossi." },
        { id: `lvl${id}_d8`, x: 39.99, y: 69.98, radius: 4.0, name: "Le Tracce delle Orme di Cammello nel Sahara", loreClue: "Le caratteristiche impronte tondeggianti della carovana beduina sono cancellate." },
        { id: `lvl${id}_d9`, x: 68.00, y: 69.98, radius: 4.0, name: "I Sassi Vulcanici Neri Sparsi sulla Sabbia Rossa", loreClue: "I ciottoli scuri ricchi di ferro che costellano la pianura desertica sono svaniti." },
        { id: `lvl${id}_d10`, x: 88.00, y: 75.00, radius: 4.0, name: "Il Velo di Polvere Infuocata Sollevato dal Vento Serale", loreClue: "La foschia dorata che si alza dal deserto alla fine del giorno è scomparsa." },
      ];
    } else if (isStageEight) {
      diffsForLevel = [
        { id: `lvl${id}_d1`, x: 48.96, y: 15.62, radius: 5.0, name: "L'Urna Sommitale di Al-Khazneh", loreClue: "Il bulbo superiore della maestosa urna funeraria scavata nella roccia sulla tholos del Tesoro è eroso e scomparso." },
        { id: `lvl${id}_d2`, x: 95.21, y: 63.90, radius: 5.0, name: "La Maniglia a T del Badile Rimossa", loreClue: "L'impugnatura a T in ferro battuto del badile appoggiato alla parete rocciosa del Siq è stata rimossa." },
        { id: `lvl${id}_d3`, x: 78.33, y: 59.77, radius: 4.5, name: "Il Tamburo Graduato del Teodolite", loreClue: "La ghiera azimutale in ottone sul basamento dello strumento geodetico è stata ruotata di 90 gradi." },
        { id: `lvl${id}_d4`, x: 68.75, y: 72.43, radius: 4.5, name: "La Penna d'Acciaio nella Mano", loreClue: "Il pennino metallico da rilievo con cui l'archeologo annota le quote è scomparso dalla sua mano destra." },
        { id: `lvl${id}_d5`, x: 78.33, y: 74.00, radius: 4.5, name: "Il Sigillo di Ceralacca sulla Mappa", loreClue: "Un sigillo di ceralacca rosso cardinale con lo stemma del rilievo è impresso sul rotolo topografico." },
        { id: `lvl${id}_d6`, x: 72.58, y: 83.15, radius: 4.5, name: "Il Segnalibro Rosso nel Taccuino", loreClue: "Un nastro segnalibro scarlatto spunta dalle pagine rilegate del taccuino appoggiato sul tavolo da campo." },
        { id: `lvl${id}_d7`, x: 18.21, y: 70.65, radius: 5.0, name: "La Fascia di Seta Rossa sulla Sella", loreClue: "Una fascia cerimoniale in seta rossa è legata all'arcione della sella da dromedario della guida beduina." },
        { id: `lvl${id}_d8`, x: 22.17, y: 87.56, radius: 5.0, name: "L'Incisione Nabatea sul Blocco", loreClue: "Sulla superficie del blocco di pietra scolpito in primo piano compare una sacra incisione votiva nabatea." },
        { id: `lvl${id}_d9`, x: 35.67, y: 89.23, radius: 5.0, name: "Il Manico di Frassino nella Cesta", loreClue: "Un manico in legno di frassino di una zappa da scavo spunta dal bordo della cesta di vimini in primo piano." },
        { id: `lvl${id}_d10`, x: 31.67, y: 78.46, radius: 5.0, name: "Il Cartellino Inventariale sul Cesto", loreClue: "Un'etichetta inventariale museale in pergamena è legata alla seconda cesta di scavo dietro l'archeologo." },
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
