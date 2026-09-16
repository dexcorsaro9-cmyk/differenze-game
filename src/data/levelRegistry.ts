import { LEVEL_CLUES_REGISTRY } from './levelCluesData';
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
      ? '/levels/stage1_lvl2_A.jpg?v=4'
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
      ? '/levels/stage2_lvl19_A.jpg?v=3'
      : isLevelTwenty
      ? '/levels/stage2_lvl20_A.jpg?v=3'
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
      ? '/levels/stage11_lvl106_A.jpg?v=3'
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
      ? '/levels/stage1_lvl2_B.jpg?v=4'
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
      ? '/levels/stage2_lvl19_B.jpg?v=3'
      : isLevelTwenty
      ? '/levels/stage2_lvl20_B.jpg?v=3'
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
      ? '/levels/stage11_lvl106_B.jpg?v=3'
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

    // Fully calibrated, unique, bespoke differences for all 120 levels
    const diffsForLevel: Difference[] = LEVEL_CLUES_REGISTRY[id] || getStageDifferences(stageNumber, levelNumberInStage).map(d => ({
      ...d,
      id: `lvl${id}_${d.id}`,
    }));

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
