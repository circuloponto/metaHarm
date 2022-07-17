
var yellow = '#fef880';
var orange = '#feb871';
var red = '#f3888a';
var purple = '#da8ef2';
var blue = '#79aee1';
var green = '#a8e595';
// var yellowHigh = '#ebe454';
// var orangeHigh = '#feb871';
// var redHigh = '#f3888a';
// var purpleHigh = '#da8ef2';
// var blueHigh = '#79aee1';
// var greenHigh = '#a8e59';
//var highlight = '#ffffff33';
var highlight = '4px 4px 10px rgb(37 37 37 / 74%)';


export const chords = (status) => {
  return {
    "Cmaj": {
      "base": [
        ["C", "E", "G", "A"],
        ["yellow", "red", "red", "yellow"],
        ["Root", "M3", "P5", "M6"],
        ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
        [yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue],
        [blue, red, yellow, orange, orange, green, green, purple, purple],
        ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
        ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
        ['Gbmaj', 'Abmin', 'Bbmin', 'Bmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
        ['Amaj', 'Bmin', 'Dbmin', 'Dmaj', 'Emaj', 'Gbmin', 'Abdim'],
        [
          ['C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'Cm6', 'Dm6', 'Em6', 'Fm6', 'Gm6', 'Am6'],
          ['Eb7', 'F7', 'G7', 'Ab7', 'Bb7', 'C7', 'Ebm6', 'Fm6', 'Gm6', 'Abm6', 'Bbm6', 'Cm6'],
          ['Gb7', 'Ab7', 'Bb7', 'B7', 'Db7', 'Eb7', 'Gbm6', 'Abm6', 'Bbm6', 'Bm6', 'Dbm6', 'Ebm6'],
          ['A7', 'B7', 'Db7', 'D7', 'E7', 'Gb7', 'Abm6', 'Am6', 'Bm6', 'Dbm6', 'Dm6', 'Em6']
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [
          [['C', 'root'], ['G', 'P5'], ['Bb', 'b7', red], ['E', 'M3']],// aqui podia ter os intervalos
          [['D', 'sharp9'], ['A', 'sharp9'], ['C', 'sharp9', yellow], ['Gb', 'sharp9']],
          [['E', 'sharp9'], ['Ab', 'sharp9'], ['B', 'sharp9', yellow], ['D', 'sharp9']],
          [['F', 'sharp9'], ['C', 'sharp9'], ['Eb', 'sharp9', yellow], ['A', 'sharp9']],
          [['G', 'sharp9'], ['B', 'sharp9'], ['D', 'sharp9', yellow], ['F', 'sharp9']],
          [['A', 'sharp9'], ['E', 'sharp9'], ['G', 'sharp9', yellow], ['Db', 'sharp9']],
          [['C', 'sharp9'], ['Eb', 'sharp9'], ['G', 'sharp9', yellow], ['A', 'sharp9']],
          [['D', 'sharp9'], ['F', 'sharp9'], ['A', 'sharp9', yellow], ['B', 'sharp9']],
          [['E', 'sharp9'], ['G', 'sharp9'], ['B', 'sharp9', yellow], ['Db', 'sharp9']],
          [['F', 'sharp9'], ['Ab', 'sharp9'], ['C', 'sharp9', yellow], ['D', 'sharp9']],
          [['G', 'sharp9'], ['B', 'sharp9'], ['D', 'sharp9', yellow], ['F', 'sharp9']],
          [['A', 'sharp9'], ['C', 'sharp9'], ['E', 'sharp9', yellow], ['Gb', 'sharp9']],
        ],
        [["M7", "M9", "P11", "b6"], ["P5", "b7", "b9", "M3"], ["sharp9", "sharp11", "M6", "root"]]


      ],
      "complementary": [
        [4], ['Cmaj6'], [orange, orange, orange, orange],
        ["b6", "M7", "M9", "P11",], [blue, blue, blue, blue],
        ['blueComplementary'], ['SD', 'complementary'], [green], ['green'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        [4], ["Cmaj6"], [orange, orange, orange, orange],
        ["M3", "P5", "b7", "b9",], [orange, red, red, orange],
        ['redSyntonic'], ['D', 'syntonic'], [purple], ['purple'], [highlight, highlight, 'none', 'none',]],
      "common": [
        [4], ["Cmaj6"], [orange, orange, orange, orange],
        ["root", "sharp9", "sharp11", "M6",], [yellow, yellow, orange, orange],
        ['yellowCommon'], ['T', 'common'], [orange], ['orange'], [highlight, 'none', 'none', highlight,]
      ],

    },
    "Ebmaj": {
      "base": [
        ["Eb", "G", "Bb", "C"], ["yellow", "red", "red", "yellow"], ["R", "M3", "P5", "M6"],
        ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
        [yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue],
        [blue, red, yellow, orange, orange, green, green, purple, purple],
        ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
        ['Gbmaj', 'Abmin', 'Bbmin', 'Bmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
        ['Amaj', 'Bmin', 'Dbmin', 'Dmaj', 'Emaj', 'Gbmin', 'Abdim'],
        ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
        [
          ['Eb7', 'F7', 'G7', 'Ab7', 'Bb7', 'C7', 'Ebm6', 'Fm6', 'Gm6', 'Abm6', 'Bbm6', 'Cm6'],
          ['Gb7', 'Ab7', 'Bb7', 'B7', 'Db7', 'Eb7', 'Gbm6', 'Abm6', 'Bbm6', 'Bm6', 'Dbm6', 'Ebm6'],
          ['A7', 'B7', 'Db7', 'D7', 'E7', 'Gb7', 'Abm6', 'Am6', 'Bm6', 'Dbm6', 'Dm6', 'Em6'],
          ['C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'Cm6', 'Dm6', 'Em6', 'Fm6', 'Gm6', 'Am6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['Db', 'b7', red], ['F', 'M9', blue], ['B', ' b6', blue], ['E', 'b9', red]]

      ],
      "complementary": [
        [4], ["Ebmaj6"], [orange, orange, orange, orange],
        ["P11", "b6", "M7", "M9",], [blue, blue, blue, blue],
        ['blueComplementary'], ['SD'], [green], ['green'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        [4], ["Ebmaj6"], [orange, orange, orange, orange],
        ["b9", "M3", "P5", "b7",], [orange, orange, red, red],
        ['redSyntonic'], ['D'], [purple], ['purple'], [highlight, highlight, 'none', 'none']],
      "common": [
        [4], ["Ebmaj6"], [orange, orange],
        ["M6", "root", "sharp9", "sharp11",], [orange, yellow, yellow, orange],
        ['yellowCommon'], ['T'], [orange], ['orange'], [highlight, 'none', 'none', highlight]],
    },
    "Gbmaj": {
      "base": [
        ["G", "Bb", "Db"], ["yellow", "red", "red", "yellow"], ["R", "M3", "P5", "M6"],
        ['Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F',],
        [yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue],
        [blue, red, yellow, orange, orange, green, green, purple, purple],
        ['Gbmaj', 'Abmin', 'Bbmin', 'Bmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
        ['Amaj', 'Bmin', 'Dbmin', 'Dmaj', 'Emaj', 'Gbmin', 'Abdim'],
        ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
        ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
        [
          ['Gb7', 'Ab7', 'Bb7', 'B7', 'Db7', 'Eb7', 'Gbm6', 'Abm6', 'Bbm6', 'Bm6', 'Dbm6', 'Ebm6'],
          ['A7', 'B7', 'Db7', 'D7', 'E7', 'Gb7', 'Abm6', 'Am6', 'Bm6', 'Dbm6', 'Dm6', 'Em6'],
          ['C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'Cm6', 'Dm6', 'Em6', 'Fm6', 'Gm6', 'Am6'],
          ['Eb7', 'F7', 'G7', 'Ab7', 'Bb7', 'C7', 'Ebm6', 'Fm6', 'Gm6', 'Abm6', 'Bbm6', 'Cm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['E', 'b7', red], ['A', 'sharp9', blue], ['C', ' sharp11', yellow], ['G', 'b9', red]],
        [['Gb', 'root'], ['C', 'P5'], ['E', 'b7', red], ['Bb', 'M3']],
        [['Ab', 'root'], ['Eb', 'P5'], ['Gb', 'b7', red], ['C', 'M3']],
        [['A', 'root'], ['E', 'P5'], ['G', 'b7', red], ['Db', 'M3']],
        [['B', 'root'], ['Gb', 'P5'], ['A', 'b7', red], ['Eb', 'M3']],
        [['Db', 'root'], ['Ab', 'P5'], ['B', 'b7', red], ['F', 'M3']],
        [['E', 'b7', red], ['A', 'sharp9', blue], ['C', ' sharp11', yellow], ['G', 'b9', red]],
        [['Gb', 'root'], ['C', 'P5'], ['E', 'M6', red], ['Bb', 'b3']],
        [['Ab', 'root'], ['Eb', 'P5'], ['Gb', 'M6', red], ['C', 'b3']],
        [['A', 'root'], ['E', 'P5'], ['G', 'M6', red], ['Db', 'b3']],
        [['B', 'root'], ['Gb', 'P5'], ['A', 'M6', red], ['Eb', 'b3']],
        [['Db', 'root'], ['Ab', 'P5'], ['B', 'M6', red], ['F', 'b3']],

      ],
      "complementary": [
        [4], ["Gbmaj6"], [orange, orange, orange, orange],
        ["M9", "P11", "b6", "M7",], [blue, blue, blue, blue],
        ['blueComplementary'], ['SD'], [green], ['green'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        [4], ["Gbmaj6"], [orange, orange, orange, orange],
        ["b7", "b9", "M3", "P5"], [red, orange, orange, red],
        ['redSyntonic'], ['D'], [purple], ['purple'], ['none', highlight, highlight, 'none']],
      "common": [
        [4], ["Gbmaj6"], [orange, orange],
        ["sharp11", "M6", "root", "sharp9"], [orange, orange, yellow, yellow],
        ['yellowCommon'], ['T'], [orange], ['orange'], [highlight, highlight, 'none', 'none']],
    },
    "Amaj": {
      "base": [
        ["A", "Db", "E", "G"], ["yellow", "red", "red", "yellow"], ["R", "M3", "P5", "M6"],
        ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'],
        [yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue],
        [blue, red, yellow, orange, orange, green, green, purple, purple],
        ['Amaj', 'Bmin', 'Dbmin', 'Dmaj', 'Emaj', 'Gbmin', 'Abdim'],
        ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
        ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
        ['Gbmaj', 'Abmin', 'Bbmin', 'Bmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
        [
          ['A7', 'B7', 'Db7', 'D7', 'E7', 'Gb7', 'Abm6', 'Am6', 'Bm6', 'Dbm6', 'Dm6', 'Em6'],
          ['C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'Cm6', 'Dm6', 'Em6', 'Fm6', 'Gm6', 'Am6'],
          ['Eb7', 'F7', 'G7', 'Ab7', 'Bb7', 'C7', 'Ebm6', 'Fm6', 'Gm6', 'Abm6', 'Bbm6', 'Cm6'],
          ['Gb7', 'Ab7', 'Bb7', 'B7', 'Db7', 'Eb7', 'Gbm6', 'Abm6', 'Bbm6', 'Bm6', 'Dbm6', 'Ebm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['G', 'b7', red], ['C', 'sharp9', yellow], ['Eb', ' sharp11', yellow], ['Bb', 'b9', red]]

      ],
      "complementary": [
        [4], ['Amaj6'], [orange, orange, orange, orange],
        ["M7", "M9", "P11", "b6",], [blue, blue, blue, blue],
        ['blueComplementary'], ['SD'], [green], ['green'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        [4], ["Amaj6"], [orange, orange, orange, orange],
        ["P5", "b7", "b9", "M3",], [red, red, orange, orange],
        ['redSyntonic'], ['D'], [purple], ['purple'], ['none', 'none', highlight, highlight]],
      "common": [
        [4], ["Amaj6"], [orange, orange],
        ["sharp9", "sharp11", "M6", "root",], [yellow, orange, orange, yellow],
        ['yellowCommon'], ['T'], [orange], ['orange'], ['none', highlight, highlight, 'none']],
    },
    "Cmin": {
      "base": [
        ["C", "Eb", "G", "Bb"], ["yellow", "yellow", "red", "yellow"], ["R", "M3", "P5", "M6"],
        ['Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D',],
        [yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue],
        [blue, red, yellow, orange, orange, green, green, purple, purple],
        ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
        ['Gbmaj', 'Abmin', 'Bbmin', 'Bmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
        ['Amaj', 'Bmin', 'Dbmin', 'Dmaj', 'Emaj', 'Gbmin', 'Abdim'],
        ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
        [
          ['Eb7', 'F7', 'G7', 'Ab7', 'Bb7', 'C7', 'Ebm6', 'Fm6', 'Gm6', 'Abm6', 'Bbm6', 'Cm6'],
          ['Gb7', 'Ab7', 'Bb7', 'B7', 'Db7', 'Eb7', 'Gbm6', 'Abm6', 'Bbm6', 'Bm6', 'Dbm6', 'Ebm6'],
          ['A7', 'B7', 'Db7', 'D7', 'E7', 'Gb7', 'Abm6', 'Am6', 'Bm6', 'Dbm6', 'Dm6', 'Em6'],
          ['C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'Cm6', 'Dm6', 'Em6', 'Fm6', 'Gm6', 'Am6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        [4], ["Cmin"], [orange, orange, orange, orange],
        ["b6", "M7", "M9", "P11",], [blue, blue, blue, blue],
        ['blueComplementary'], ['SD'], [green], ['green'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        [4], ["Cmin"], [orange, orange, orange, orange],
        ["P5", "b7", "b9", "b11"], [orange, orange, red, red],
        ['redSyntonic'], ['D'], [purple], ['purple'], [highlight, highlight, 'none', 'none']],
      "common": [
        [4], ["Cmin"], [orange, orange, orange, orange],
        ["root", "b3", "sharp11", "M6",], [orange, yellow, yellow, orange],
        ['yellowCommon'], ['T'], [orange], ['orange'], [highlight, 'none', 'none', highlight]],
    },
    "Ebmin": {
      "base": [
        ["Eb", "Gb", "Bb", 'Db'], ["yellow", "yellow", "red", "yellow"], ["R", "M3", "P5", "M6"],
        ['Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F',],
        [yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue],
        [blue, red, yellow, orange, orange, green, green, purple, purple],
        ['Gbmaj', 'Abmin', 'Bbmin', 'Bmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
        ['Amaj', 'Bmin', 'Dbmin', 'Dmaj', 'Emaj', 'Gbmin', 'Abdim'],
        ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
        ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
        [
          ['Gb7', 'Ab7', 'Bb7', 'B7', 'Db7', 'Eb7', 'Gbm6', 'Abm6', 'Bbm6', 'Bm6', 'Dbm6', 'Ebm6'],
          ['A7', 'B7', 'Db7', 'D7', 'E7', 'Gb7', 'Abm6', 'Am6', 'Bm6', 'Dbm6', 'Dm6', 'Em6'],
          ['C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'Cm6', 'Dm6', 'Em6', 'Fm6', 'Gm6', 'Am6'],
          ['Eb7', 'F7', 'G7', 'Ab7', 'Bb7', 'C7', 'Ebm6', 'Fm6', 'Gm6', 'Abm6', 'Bbm6', 'Cm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        [4], ["Ebmin"], [orange, orange, orange, orange],
        ["P11", "b6", "M7", "M9",], [blue, blue, blue, blue],
        ['blueComplementary'], ['SD'], [green], ['green'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        [4], ["Ebmin"], [orange, orange, orange, orange],
        ["b9", "b11", "P5", "b7"], [red, orange, orange, red],
        ['redSyntonic'], ['D'], [purple], ['purple'], ['none', highlight, highlight, 'none']],
      "common": [
        [4], ["Ebmin"], [orange, orange, orange, orange],
        ["M6", "root", "b3", "sharp11",], [orange, orange, yellow, yellow],
        ['yellowCommon'], ['T'], [orange], ['orange'], [highlight, highlight, 'none', 'none']],
    },
    "Gbmin": {
      "base": [
        ["Gb", "A", "Db", "E"], ["yellow", "yellow", "red", "yellow"], ["R", "M3", "P5", "M6"],
        ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'],
        [yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue],
        [blue, red, yellow, orange, orange, green, green, purple, purple],
        ['Amaj', 'Bmin', 'Dbmin', 'Dmaj', 'Emaj', 'Gbmin', 'Abdim'],
        ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
        ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
        ['Gbmaj', 'Abmin', 'Bbmin', 'Bmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
        [
          ['A7', 'B7', 'Db7', 'D7', 'E7', 'Gb7', 'Abm6', 'Am6', 'Bm6', 'Dbm6', 'Dm6', 'Em6'],
          ['C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'Cm6', 'Dm6', 'Em6', 'Fm6', 'Gm6', 'Am6'],
          ['Eb7', 'F7', 'G7', 'Ab7', 'Bb7', 'C7', 'Ebm6', 'Fm6', 'Gm6', 'Abm6', 'Bbm6', 'Cm6'],
          ['Gb7', 'Ab7', 'Bb7', 'B7', 'Db7', 'Eb7', 'Gbm6', 'Abm6', 'Bbm6', 'Bm6', 'Dbm6', 'Ebm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        [4], ["Gbmin"], [orange, orange, orange, orange],
        ["M9", "P11", "b6", "M7",], [blue, blue, blue, blue],
        ['blueComplementary'], ['SD'], [green], ['green'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        [4], ["Gbmin"], [orange, orange, orange, orange],
        ["b7", "b9", "b11", "P5",], [red, red, orange, orange],
        ['redSyntonic'], ['D'], [purple], ['purple'], ['none', 'none', highlight, highlight]],
      "common": [
        [4], ["Gbmin"], [orange, orange, orange, orange],
        ["sharp11", "M6", "root", "b3",], [yellow, orange, orange, yellow],
        ['yellowCommon'], ['T'], [orange], ['orange'], ['none', highlight, highlight, 'none']],
    },
    "Amin": {
      "base": [
        ["A", "C", "E", "G"], ["yellow", "yellow", "red", "yellow"], ["R", "M3", "P5", "M6"],
        ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
        [yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue],
        [blue, red, yellow, orange, orange, green, green, purple, purple],
        ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
        ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
        ['Gbmaj', 'Abmin', 'Bbmin', 'Bmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
        ['Amaj', 'Bmin', 'Dbmin', 'Dmaj', 'Emaj', 'Gbmin', 'Abdim'],
        [
          ['C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'Cm6', 'Dm6', 'Em6', 'Fm6', 'Gm6', 'Am6'],
          ['Eb7', 'F7', 'G7', 'Ab7', 'Bb7', 'C7', 'Ebm6', 'Fm6', 'Gm6', 'Abm6', 'Bbm6', 'Cm6'],
          ['Gb7', 'Ab7', 'Bb7', 'B7', 'Db7', 'Eb7', 'Gbm6', 'Abm6', 'Bbm6', 'Bm6', 'Dbm6', 'Ebm6'],
          ['A7', 'B7', 'Db7', 'D7', 'E7', 'Gb7', 'Abm6', 'Am6', 'Bm6', 'Dbm6', 'Dm6', 'Em6']
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        [4], ["Amin"], [orange, orange, orange, orange],
        ["M7", "M9", "P11", "b6",], [blue, blue, blue, blue],
        ['blueComplementary'], ['SD'], [green], ['green'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        [4], ["Amin"], [orange, orange, orange, orange],
        ["P5", "b7", "b9", "b11"], [orange, red, red, orange],
        ['redSyntonic'], ['D'], [purple], ['purple'], [highlight, 'none', 'none', highlight]],
      "common": [
        [4], ["Amin"], [orange, orange, orange, orange],
        ["b3", "sharp11", "M6", "root",], [yellow, yellow, orange, orange],
        ['yellowCommon'], ['T'], [orange], ['orange'], ['none', 'none', highlight, highlight]],
    },

    //red zone
    "Emaj": {
      "base": [
        ["E", "Ab", "B", "Db"], ["red", "blue", "blue", "red"], ["R", "M3", "P5", "M6"],
        ['E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb'],
        [red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow],
        [yellow, blue, red, purple, purple, orange, orange, green, green],
        ['Emaj', 'Gbmin', 'Abmin', 'Amaj', 'Bmaj', 'Dbmin', 'Ebdim'],
        ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'Gbdim'],
        ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
        ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'],
        [
          ['E7', 'Gb7', 'Ab7', 'A7', 'B7', 'Db7', 'Em6', 'Gbm6', 'Abm6', 'Am6', 'Bm6', 'Dbm6'],
          ['G7', 'A7', 'B7', 'C7', 'D7', 'E7', 'Gbm6', 'Gm6', 'Am6', 'Bm6', 'Cm6', 'Dm6'],
          ['Bb7', 'C7', 'D7', 'Eb7', 'F7', 'G7', 'Bbm6', 'Cm6', 'Dm6', 'Ebm6', 'Fm6', 'Gm6'],
          ['Db7', 'Eb7', 'F7', 'Gb7', 'Ab7', 'Bb7', 'Dbm6', 'Ebm6', 'Fm6', 'Gbm6', 'Abm6', 'Bbm6']
        ],
        [purple, orange, green, orange, green, purple, purple, orange, green, orange, green, purple],
        //['Db','b7','G','b3','F','b9','Bb','b5','C','6',],
        //[['D', 'b7', blue], ['G', 'sharp9', red], ['Bb', ' sharp11', red], ['F', 'b9', blue]]
        [
          [['C', 'root'], ['G', 'P5'], ['Bb', 'b7', red], ['E', 'M3']],
          [['D', 'sharp9'], ['A', 'sharp9'], ['C', 'sharp9', yellow], ['Gb', 'sharp9']],
          [['E', 'sharp9'], ['Ab', 'sharp9'], ['B', 'sharp9', yellow], ['D', 'sharp9']],
          [['F', 'sharp9'], ['C', 'sharp9'], ['Eb', 'sharp9', yellow], ['A', 'sharp9']],
          [['G', 'sharp9'], ['B', 'sharp9'], ['D', 'sharp9', yellow], ['F', 'sharp9']],
          [['A', 'sharp9'], ['E', 'sharp9'], ['G', 'sharp9', yellow], ['Db', 'sharp9']],
          [['C', 'sharp9'], ['Eb', 'sharp9'], ['G', 'sharp9', yellow], ['A', 'sharp9']],
          [['D', 'sharp9'], ['F', 'sharp9'], ['A', 'sharp9', yellow], ['B', 'sharp9']],
          [['E', 'sharp9'], ['G', 'sharp9'], ['B', 'sharp9', yellow], ['Db', 'sharp9']],
          [['F', 'sharp9'], ['Ab', 'sharp9'], ['C', 'sharp9', yellow], ['D', 'sharp9']],
          [['G', 'sharp9'], ['B', 'sharp9'], ['D', 'sharp9', yellow], ['F', 'sharp9']],
          [['A', 'sharp9'], ['C', 'sharp9'], ['E', 'sharp9', yellow], ['Gb', 'sharp9']],
        ],
      ],
      "secondaries": [

        [['C', 'root'], ['G', 'P5'], ['Bb', 'b7', red], ['E', 'M3']],
        [['D', 'sharp9'], ['A', 'sharp9'], ['C', 'sharp9', yellow], ['Gb', 'sharp9']],
        [['E', 'sharp9'], ['Ab', 'sharp9'], ['B', 'sharp9', yellow], ['D', 'sharp9']],
        [['F', 'sharp9'], ['C', 'sharp9'], ['Eb', 'sharp9', yellow], ['A', 'sharp9']],
        [['G', 'sharp9'], ['B', 'sharp9'], ['D', 'sharp9', yellow], ['F', 'sharp9']],
        [['A', 'sharp9'], ['E', 'sharp9'], ['G', 'sharp9', yellow], ['Db', 'sharp9']],
        [['C', 'sharp9'], ['Eb', 'sharp9'], ['G', 'sharp9', yellow], ['A', 'sharp9']],
        [['D', 'sharp9'], ['F', 'sharp9'], ['A', 'sharp9', yellow], ['B', 'sharp9']],
        [['E', 'sharp9'], ['G', 'sharp9'], ['B', 'sharp9', yellow], ['Db', 'sharp9']],
        [['F', 'sharp9'], ['Ab', 'sharp9'], ['C', 'sharp9', yellow], ['D', 'sharp9']],
        [['G', 'sharp9'], ['B', 'sharp9'], ['D', 'sharp9', yellow], ['F', 'sharp9']],
        [['A', 'sharp9'], ['C', 'sharp9'], ['E', 'sharp9', yellow], ['Gb', 'sharp9']],
      ],
      "complementary": [
        4, ["Emaj6"], [purple, purple, purple, purple],
        ["b6", "M7", "M9", "P11",], [yellow, yellow, yellow, yellow],
        ['yellowComplementary'], ['SD'], [orange], ['orange'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["E", "E", "E", "E"], [purple, purple, purple, purple],
        ["M3", "P5", "b7", "b9",], [purple, blue, blue, purple],
        ['blueSyntonic'], ['D'], [green], ['green'], [highlight, 'none', 'none', highlight]],
      "common": [
        4, ["E", "E", "E", "E"], [purple, purple, purple, purple],
        ["root", "sharp9", "sharp11", "M6",], [red, red, purple, purple],
        ['redCommon'], ['T'], [purple], ['purple'], ['none', 'none', highlight, highlight]],
    },
    "Gmaj": {
      "base": [
        ["E", "Ab", "B", "Db"], ["red", "blue", "blue", "red"], ["R", "M3", "P5", "M6"],
        ['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb',],
        [red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow],
        [yellow, blue, red, purple, purple, orange, orange, green, green],
        ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'Gbdim'],
        ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
        ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'],
        ['Emaj', 'Gbmin', 'Abmin', 'Amaj', 'Bmaj', 'Dbmin', 'Ebdim'],
        [
          ['G7', 'A7', 'B7', 'C7', 'D7', 'E7', 'Gbm6', 'Gm6', 'Am6', 'Bm6', 'Cm6', 'Dm6'],
          ['Bb7', 'C7', 'D7', 'Eb7', 'F7', 'G7', 'Bbm6', 'Cm6', 'Dm6', 'Ebm6', 'Fm6', 'Gm6'],
          ['Db7', 'Eb7', 'F7', 'Gb7', 'Ab7', 'Bb7', 'Dbm6', 'Ebm6', 'Fm6', 'Gbm6', 'Abm6', 'Bbm6'],
          ['E7', 'Gb7', 'Ab7', 'A7', 'B7', 'Db7', 'Em6', 'Gbm6', 'Abm6', 'Am6', 'Bm6', 'Dbm6'],
        ],
        [purple, orange, green, orange, green, purple, purple, orange, green, orange, green, purple],
        [['F', 'b7', blue], ['Bb', 'sharp9', red], ['Db', ' sharp11', red], ['Ab', 'b9', blue]]
      ],
      "complementary": [
        4, ["G", "G", "G", "Gmaj"], [purple, purple, purple, purple],
        ["P11", "b6", "M7", "M9",], [yellow, yellow, yellow, yellow],
        ['yellowComplementary'], ['SD'], [orange], ['orange'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["G", "G", "G", "G"], [purple, purple, purple, purple],
        ["b9", "M3", "P5", "b7",], [purple, purple, blue, blue],
        ['blueSyntonic'], ['D'], [green], ['green'], [highlight, highlight, 'none', 'none']],
      "common": [
        4, ["G", "G", "G", "G"], [purple, purple, purple, purple],
        ["M6", "root", "sharp9", "sharp11",], [purple, red, red, purple],
        ['redCommon'], ['T'], [purple], ['purple'], [highlight, 'none', 'none', highlight]],
    },
    "Dbmaj": {
      "base": [
        ["E", "Ab", "B", "Db"], ["red", "blue", "blue", "red"], ["R", "M3", "P5", "M6"],
        ['Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C',],
        [red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow],
        [yellow, blue, red, purple, purple, orange, orange, green, green],
        ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'],
        ['Emaj', 'Gbmin', 'Abmin', 'Amaj', 'Bmaj', 'Dbmin', 'Ebdim'],
        ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'Gbdim'],
        ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
        [
          ['Db7', 'Eb7', 'F7', 'Gb7', 'Ab7', 'Bb7', 'Dbm6', 'Ebm6', 'Fm6', 'Gbm6', 'Abm6', 'Bbm6'],
          ['E7', 'Gb7', 'Ab7', 'A7', 'B7', 'Db7', 'Em6', 'Gbm6', 'Abm6', 'Am6', 'Bm6', 'Dbm6'],
          ['G7', 'A7', 'B7', 'C7', 'D7', 'E7', 'Gbm6', 'Gm6', 'Am6', 'Bm6', 'Cm6', 'Dm6'],
          ['Bb7', 'C7', 'D7', 'Eb7', 'F7', 'G7', 'Bbm6', 'Cm6', 'Dm6', 'Ebm6', 'Fm6', 'Gm6'],
        ],
        [purple, orange, green, orange, green, purple, purple, orange, green, orange, green, purple],
        [['B', 'b7', blue], ['E', 'sharp9', red], ['G', ' sharp11', red], ['D', 'b9', blue]]
      ],
      "complementary": [
        4, ["Db", "Db", "Db", "Db"], [purple, purple, purple, purple],
        ["M7", "M9", "P11", "b6",], [yellow, yellow, yellow, yellow],
        ['yellowComplementary'], ['SD'], [orange], ['orange'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["Db", "Db", "Db", "Db"], [purple, purple, purple, purple],
        ["P5", "b7", "b9", "M3",], [blue, blue, purple, purple],
        ['blueSyntonic'], ['D'], [green], ['green'], ['none', 'none', highlight, highlight]],
      "common": [
        4, ["Db", "Db", "Db", "Db"], [purple, purple, purple, purple],
        ["sharp9", "sharp11", "M6", "root",], [red, purple, purple, red],
        ['redCommon'], ['T'], [purple], ['purple'], ['none', highlight, highlight, 'none']],
    },
    "Bbmaj": {
      "base": [
        ["E", "Ab", "B", "Db"], ["red", "blue", "blue", "red"], ["R", "M3", "P5", "M6"],
        ['Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'],
        [red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow],
        [yellow, blue, red, purple, purple, orange, orange, green, green],
        ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
        ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'],
        ['Emaj', 'Gbmin', 'Abmin', 'Amaj', 'Bmaj', 'Dbmin', 'Ebdim'],
        ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'Gbdim'],
        [
          ['Bb7', 'C7', 'D7', 'Eb7', 'F7', 'G7', 'Bbm6', 'Cm6', 'Dm6', 'Ebm6', 'Fm6', 'Gm6'],
          ['Db7', 'Eb7', 'F7', 'Gb7', 'Ab7', 'Bb7', 'Dbm6', 'Ebm6', 'Fm6', 'Gbm6', 'Abm6', 'Bbm6'],
          ['E7', 'Gb7', 'Ab7', 'A7', 'B7', 'Db7', 'Em6', 'Gbm6', 'Abm6', 'Am6', 'Bm6', 'Dbm6'],
          ['G7', 'A7', 'B7', 'C7', 'D7', 'E7', 'Gbm6', 'Gm6', 'Am6', 'Bm6', 'Cm6', 'Dm6'],
        ],
        [purple, orange, green, orange, green, purple, purple, orange, green, orange, green, purple],
        [['Ab', 'b7', blue], ['Db', 'sharp9', red], ['E', ' sharp11', red], ['B', 'b9', blue]]
      ],
      "complementary": [
        4, ["Bb", "Bb", "Bb", "Bb"], [purple, purple, purple, purple],
        ["M9", "P11", "b6", "M7",], [yellow, yellow, yellow, yellow],
        ['yellowComplementary'], ['SD'], [orange], ['orange'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["Bb", "Bb", "Bb", "Bb"], [purple, purple, purple, purple],
        ["b7", "b9", "M3", "P5",], [blue, purple, purple, blue],
        ['blueSyntonic'], ['D'], [green], ['green'], ['none', highlight, highlight, 'none']],
      "common": [
        4, ["Bb", "Bb", "Bb", "Bb"], [purple, purple, purple, purple],
        ["sharp11", "M6", "root", "sharp9",], [purple, purple, red, red],
        ['redCommon'], ['T'], [purple], ['purple'], [highlight, highlight, 'none', 'none']],
    },

    "Emin": {
      "base": [
        ["E", "G", "B", "D"], ["red", "red", "blue", "blue"], ["R", "b3", "P5", "b7"],
        ['E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb'],
        [red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow],
        [yellow, blue, red, purple, purple, orange, orange, green, green],

        ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'Gbdim'],
        ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
        ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'],
        ['Emaj', 'Gbmin', 'Abmin', 'Amaj', 'Bmaj', 'Dbmin', 'Ebdim'],
        [
          ['G7', 'A7', 'B7', 'C7', 'D7', 'E7', 'Gbm6', 'Gm6', 'Am6', 'Bm6', 'Cm6', 'Dm6'],
          ['Bb7', 'C7', 'D7', 'Eb7', 'F7', 'G7', 'Bbm6', 'Cm6', 'Dm6', 'Ebm6', 'Fm6', 'Gm6'],
          ['Db7', 'Eb7', 'F7', 'Gb7', 'Ab7', 'Bb7', 'Dbm6', 'Ebm6', 'Fm6', 'Gbm6', 'Abm6', 'Bbm6'],
          ['E7', 'Gb7', 'Ab7', 'A7', 'B7', 'Db7', 'Em6', 'Gbm6', 'Abm6', 'Am6', 'Bm6', 'Dbm6'],
        ],
        [purple, orange, green, orange, green, purple, purple, orange, green, orange, green, purple]
        , [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        4, ["E", "E", "E", "E"], [purple, purple, purple, purple],
        ["b6", "M7", "M9", "P11"], [yellow, yellow, yellow, yellow],
        ['yellowComplementary'], ['SD'], [orange], ['orange'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["E", "E", "E", "E"], [purple, purple, purple, purple],
        ["b11", "P5", "b7", "b9",], [purple, purple, blue, blue],
        ['blueSyntonic'], ['D'], [green], ['green'], [highlight, highlight, 'none', 'none']],
      "common": [
        4, ["E", "E", "E", "E"], [purple, purple, purple, purple],
        ["root", "b3", "sharp11", "M6",], [purple, red, red, purple],
        ['redCommon'], ['T'], [purple], ['purple'], [highlight, 'none', 'none', highlight]],
    },
    "Gmin": {
      "base": [
        ["E", "G", "B", "D"], ["red", "red", "blue", "blue"], ["R", "b3", "P5", "b7"],
        ['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb',],
        [red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow],
        [yellow, blue, red, purple, purple, orange, orange, green, green],
        ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
        ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'],
        ['Emaj', 'Gbmin', 'Abmin', 'Amaj', 'Bmaj', 'Dbmin', 'Ebdim'],
        ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'Gbdim'],
        [
          ['Bb7', 'C7', 'D7', 'Eb7', 'F7', 'G7', 'Bbm6', 'Cm6', 'Dm6', 'Ebm6', 'Fm6', 'Gm6'],
          ['Db7', 'Eb7', 'F7', 'Gb7', 'Ab7', 'Bb7', 'Dbm6', 'Ebm6', 'Fm6', 'Gbm6', 'Abm6', 'Bbm6'],
          ['E7', 'Gb7', 'Ab7', 'A7', 'B7', 'Db7', 'Em6', 'Gbm6', 'Abm6', 'Am6', 'Bm6', 'Dbm6'],
          ['G7', 'A7', 'B7', 'C7', 'D7', 'E7', 'Gbm6', 'Gm6', 'Am6', 'Bm6', 'Cm6', 'Dm6'],
        ],
        [purple, orange, green, orange, green, purple, purple, orange, green, orange, green, purple]
        , [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        4, ["G", "G", "G", "G"], [purple, purple, purple, purple],
        ["P11", "b6", "M7", "M9",], [yellow, yellow, yellow, yellow],
        ['yellowComplementary'], ['SD'], [orange], ['orange'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["G", "G", "G", "G"], [purple, purple, purple, purple],
        ["b9", "b11", "P5", "b7",], [blue, purple, purple, blue],
        ['blueSyntonic'], ['D'], [green], ['green'], ['none', highlight, highlight, 'none']],
      "common": [
        4, ["G", "G", "G", "G"], [purple, purple, purple, purple],
        ["M6", "root", "b3", "sharp11",], [purple, purple, red, red],
        ['redCommon'], ['T'], [purple], ['purple'], [highlight, highlight, 'none', 'none']],
    },

    "Bbmin": {
      "base": [
        ["E", "G", "B", "D"], ["red", "red", "blue", "blue"], ["R", "b3", "P5", "b7"],
        ['Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'],
        [red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow],
        [yellow, blue, red, purple, purple, orange, orange, green, green],
        ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'],
        ['Emaj', 'Gbmin', 'Abmin', 'Amaj', 'Bmaj', 'Dbmin', 'Ebdim'],
        ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'Gbdim'],
        ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
        [
          ['Db7', 'Eb7', 'F7', 'Gb7', 'Ab7', 'Bb7', 'Dbm6', 'Ebm6', 'Fm6', 'Gbm6', 'Abm6', 'Bbm6'],
          ['E7', 'Gb7', 'Ab7', 'A7', 'B7', 'Db7', 'Em6', 'Gbm6', 'Abm6', 'Am6', 'Bm6', 'Dbm6'],
          ['G7', 'A7', 'B7', 'C7', 'D7', 'E7', 'Gbm6', 'Gm6', 'Am6', 'Bm6', 'Cm6', 'Dm6'],
          ['Bb7', 'C7', 'D7', 'Eb7', 'F7', 'G7', 'Bbm6', 'Cm6', 'Dm6', 'Ebm6', 'Fm6', 'Gm6'],
        ],
        [purple, orange, green, orange, green, purple, purple, orange, green, orange, green, purple]
        , [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        4, ["G", "G", "G", "G"], [purple, purple, purple, purple],
        ["M9", "P11", "b6", "M7",], [yellow, yellow, yellow, yellow],
        ['yellowComplementary'], ['SD'], [orange], ['orange'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["G", "G", "G", "G"], [purple, purple, purple, purple],
        ["b7", "b9", "b11", "P5",], [blue, blue, purple, purple],
        ['blueSyntonic'], ['D'], [green], ['green'], ['none', 'none', highlight, highlight]],
      "common": [
        4, ["G", "G", "G", "G"], [purple, purple, purple, purple],
        ["sharp11", "M6", "root", "b3",], [red, purple, purple, red],
        ['redCommon'], ['T'], [purple], ['purple'], ['none', highlight, highlight, 'none']],
    },
    "Dbmin": {
      "base": [
        ["E", "G", "B", "D"], ["red", "red", "blue", "blue"], ["R", "b3", "P5", "b7"],
        ['Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C',],
        [red, blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow],
        [yellow, blue, red, purple, purple, orange, orange, green, green],
        ['Emaj', 'Gbmin', 'Abmin', 'Amaj', 'Bmaj', 'Dbmin', 'Ebdim'],
        ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'Gbdim'],
        ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
        ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'],
        [
          ['E7', 'Gb7', 'Ab7', 'A7', 'B7', 'Db7', 'Em6', 'Gbm6', 'Abm6', 'Am6', 'Bm6', 'Dbm6'],
          ['G7', 'A7', 'B7', 'C7', 'D7', 'E7', 'Gbm6', 'Gm6', 'Am6', 'Bm6', 'Cm6', 'Dm6'],
          ['Bb7', 'C7', 'D7', 'Eb7', 'F7', 'G7', 'Bbm6', 'Cm6', 'Dm6', 'Ebm6', 'Fm6', 'Gm6'],
          ['Db7', 'Eb7', 'F7', 'Gb7', 'Ab7', 'Bb7', 'Dbm6', 'Ebm6', 'Fm6', 'Gbm6', 'Abm6', 'Bbm6']
        ],
        [purple, orange, green, orange, green, purple, purple, orange, green, orange, green, purple]
        , [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        4, ["Db", "Db", "Db", "Db"], [purple, purple, purple, purple],
        ["M7", "M9", "P11", "b6",], [yellow, yellow, yellow, yellow],
        ['yellowComplementary'], ['SD'], [orange], ['orange'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["Db", "Db", "Db", "Db"], [purple, purple, purple, purple],
        ["P5", "b7", "b9", "b11",], [purple, blue, blue, purple],
        ['blueSyntonic'], ['D'], [green], ['green'], [highlight, 'none', 'none', highlight]],
      "common": [
        4, ["Db", "Db", "Db", "Db"], [purple, purple, purple, purple],
        ["b3", "sharp11", "M6", "root",], [red, red, purple, purple],
        ['redCommon'], ['T'], [purple], ['purple'], ['none', 'none', highlight, highlight]],
    },



    //blue zone 

    "Abmaj": {
      "base": [
        ["Ab", "C", "Eb", "F"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"],
        ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'],
        [blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red,],
        [red, yellow, blue, green, green, purple, purple, orange, orange],
        ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gdim'],
        ['Bmaj', 'Dbmin', 'Ebmin', 'Emaj', 'Gbmaj', 'Abmin', 'Bbdim'],
        ['Dmaj', 'Emin', 'Gbmin', 'Gmaj', 'Amaj', 'Bmin', 'Dbdim'],
        ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Edim'],
        [
          ['Ab7', 'Bb7', 'C7', 'Db7', 'Eb7', 'F7', 'Abm6', 'Bbm6', 'Cm6', 'Dbm6', 'Ebm6', 'Fm6'],
          ['B7', 'Db7', 'Eb7', 'E7', 'Gb7', 'Ab7', 'Bm6', 'Dbm6', 'Ebm6', 'Em6', 'Gbm6', 'Abm6'],
          ['D7', 'E7', 'Gb7', 'G7', 'A7', 'B7', 'Dm6', 'Em6', 'Gbm6', 'Gm6', 'Am6', 'Bm6'],
          ['F7', 'G7', 'A7', 'Bb7', 'C7', 'D7', 'Fm6', 'Gm6', 'Am6', 'Bbm6', 'Cm6', 'Dm6']
        ],
        [green, purple, orange, purple, orange, green, green, purple, orange, purple, orange, green],
        [['Gb', 'b7', yellow], ['B', 'sharp9', blue], ['D', ' sharp11', blue], ['A', 'b9', yellow]]
      ],
      "complementary": [
        4, ["Ab", "Ab", "Ab", "Abmaj"], [green, green, green, green],
        ["b6", "M7", "M9", "P11",], [red, red, red, red],
        ['redComplementary'], ['SD'], [purple], ['purple'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["Ab", "Ab", "Ab", "Ab"], [green, green, green, green],
        ["M3", "P5", "b7", "b9",], [green, yellow, yellow, green],
        ['yellowSyntonic'], ['D'], [orange], ['orange'], [highlight, 'none', 'none', highlight]],
      "common": [
        4, ["Ab", "Ab", "Ab", "Ab"], [green, green, green, green],
        ["root", "sharp9", "sharp11", "M6"], [blue, blue, green, green],
        ['blueCommon'], ['T'], [green], ['green'], ['none', 'none', highlight, highlight]],
    },
    "Bmaj": {
      "base": [
        ["Ab", "C", "Eb", "F"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"],
        ['B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb',],
        [blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red,],
        [red, yellow, blue, green, green, purple, purple, orange, orange],
        ['Bmaj', 'Dbmin', 'Ebmin', 'Emaj', 'Gbmaj', 'Abmin', 'Bbmin'],
        ['Dmaj', 'Emin', 'Gbmin', 'Gmaj', 'Amaj', 'Bmin', 'Dbmin'],
        ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Emin'],
        ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gmin'],
        [
          ['B7', 'Db7', 'Eb7', 'E7', 'Gb7', 'Ab7', 'Bm6', 'Dbm6', 'Ebm6', 'Em6', 'Gbm6', 'Abm6'],
          ['D7', 'E7', 'Gb7', 'G7', 'A7', 'B7', 'Dm6', 'Em6', 'Gbm6', 'Gm6', 'Am6', 'Bm6'],
          ['F7', 'G7', 'A7', 'Bb7', 'C7', 'D7', 'Fm6', 'Gm6', 'Am6', 'Bbm6', 'Cm6', 'Dm6'],
          ['Ab7', 'Bb7', 'C7', 'Db7', 'Eb7', 'F7', 'Abm6', 'Bbm6', 'Cm6', 'Dbm6', 'Ebm6', 'Fm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['A', 'b7', yellow], ['D', 'sharp9', blue], ['F', ' sharp11', blue], ['C', 'b9', yellow]]
      ],
      "complementary": [
        4, ["B", "B", "B", "B"], [green, green, green, green],
        ["P11", "b6", "M7", "M9",], [red, red, red, red],
        ['redComplementary'], ['SD'], [purple], ['purple'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["B", "B", "B", "B"], [green, green, green, green],
        ["b9", "M3", "P5", "b7",], [green, green, yellow, yellow],
        ['yellowSyntonic'], ['D'], [orange], ['orange'], [highlight, highlight, 'none', 'none']],
      "common": [
        4, ["B", "B", "B", "B"], [green, green, green, green],
        ["M6", "root", "sharp9", "sharp11",], [green, blue, blue, green],
        ['blueCommon'], ['T'], [green], ['green'], [highlight, 'none', 'none', highlight]],
    },
    "Dmaj": {
      "base": [
        ["Ab", "C", "Eb", "F"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"],
        ['D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db',],
        [blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red,],
        [red, yellow, blue, green, green, purple, purple, orange, orange],
        ['Dmaj', 'Emin', 'Gbmin', 'Gmaj', 'Amaj', 'Bmin', 'Dbmin'],
        ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Emin'],
        ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gmin'],
        ['Bmaj', 'Dbmin', 'Ebmin', 'Emaj', 'Gbmaj', 'Abmin', 'Bbmin'],
        [
          ['D7', 'E7', 'Gb7', 'G7', 'A7', 'B7', 'Dm6', 'Em6', 'Gbm6', 'Gm6', 'Am6', 'Bm6'],
          ['F7', 'G7', 'A7', 'Bb7', 'C7', 'D7', 'Fm6', 'Gm6', 'Am6', 'Bbm6', 'Cm6', 'Dm6'],
          ['Ab7', 'Bb7', 'C7', 'Db7', 'Eb7', 'F7', 'Abm6', 'Bbm6', 'Cm6', 'Dbm6', 'Ebm6', 'Fm6'],
          ['B7', 'Db7', 'Eb7', 'E7', 'Gb7', 'Ab7', 'Bm6', 'Dbm6', 'Ebm6', 'Em6', 'Gbm6', 'Abm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['C', 'b7', yellow], ['F', 'sharp9', blue], ['Ab', ' sharp11', blue], ['Eb', 'b9', yellow]]
      ],
      "complementary": [
        4, ["D", "D", "D", "D"], [green, green, green, green],
        ["M9", "P11", "b6", "M7",], [red, red, red, red],
        ['redComplementary'], ['SD'], [purple], ['purple'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["D", "D", "D", "D"], [green, green, green, green],
        ["b7", "b9", "M3", "P5",], [yellow, green, green, yellow],
        ['yellowSyntonic'], ['D'], [orange,], ['orange'], ['none', highlight, highlight, 'none']],
      "common": [
        4, ["D", "D", "D", "D"], [green, green, green, green],
        ["sharp11", "M6", "root", "sharp9",], [green, green, blue, blue],
        ['blueCommon'], ['T'], [green], ['green'], [highlight, highlight, 'none', 'none']],
    },
    "Fmaj": {
      "base": [
        ["Ab", "C", "Eb", "F"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"],
        ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E'],
        [blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red,],
        [red, yellow, blue, green, green, purple, purple, orange, orange],
        ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Emin'],
        ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gmin'],
        ['Bmaj', 'Dbmin', 'Ebmin', 'Emaj', 'Gbmaj', 'Abmin', 'Bbmin'],
        ['Dmaj', 'Emin', 'Gbmin', 'Gmaj', 'Amaj', 'Bmin', 'Dbmin'],
        [
          ['F7', 'G7', 'A7', 'Bb7', 'C7', 'D7', 'Fm6', 'Gm6', 'Am6', 'Bbm6', 'Cm6', 'Dm6'],
          ['Ab7', 'Bb7', 'C7', 'Db7', 'Eb7', 'F7', 'Abm6', 'Bbm6', 'Cm6', 'Dbm6', 'Ebm6', 'Fm6'],
          ['B7', 'Db7', 'Eb7', 'E7', 'Gb7', 'Ab7', 'Bm6', 'Dbm6', 'Ebm6', 'Em6', 'Gbm6', 'Abm6'],
          ['D7', 'E7', 'Gb7', 'G7', 'A7', 'B7', 'Dm6', 'Em6', 'Gbm6', 'Gm6', 'Am6', 'Bm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange],
        [['Eb', 'b7', yellow], ['Ab', 'sharp9', blue], ['B', ' sharp11', blue], ['Gb', 'b9', yellow]]
      ],
      "complementary": [
        4, ["F", "F", "F", "F"], [green, green, green, green],
        ["M7", "M9", "P11", "b6", ,], [red, red, red, red],
        ['redComplementary'], ['SD'], [purple], ['purple'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["F", "F", "F", "F"], [green, green, green, green],
        ["P5", "b7", "b9", "M3",], [yellow, yellow, green, green],
        ['yellowSyntonic'], ['D'], [orange], ['orange'], ['none', 'none', highlight, highlight]],
      "common": [
        4, ["F", "F", "F", "F"], [green, green, green, green],
        ["sharp9", "sharp11", "M6", "root",], [blue, green, green, blue],
        ['blueCommon'], ['T'], [green], ['green'], ['none', highlight, highlight, 'none']],
    },


    //min
    "Abmin": {
      "base": [
        ["Ab", "C", "Eb", "F"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"],
        ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'],
        [blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red,],
        [red, yellow, blue, green, green, purple, purple, orange, orange],
        ['Bmaj', 'Dbmin', 'Ebmin', 'Emaj', 'Gbmaj', 'Abmin', 'Bbmin'],
        ['Dmaj', 'Emin', 'Gbmin', 'Gmaj', 'Amaj', 'Bmin', 'Dbmin'],
        ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Emin'],
        ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gmin'],
        [
          ['B7', 'Db7', 'Eb7', 'E7', 'Gb7', 'Ab7', 'Bm6', 'Dbm6', 'Ebm6', 'Em6', 'Gbm6', 'Abm6'],
          ['D7', 'E7', 'Gb7', 'G7', 'A7', 'B7', 'Dm6', 'Em6', 'Gbm6', 'Gm6', 'Am6', 'Bm6'],
          ['F7', 'G7', 'A7', 'Bb7', 'C7', 'D7', 'Fm6', 'Gm6', 'Am6', 'Bbm6', 'Cm6', 'Dm6'],
          ['Ab7', 'Bb7', 'C7', 'Db7', 'Eb7', 'F7', 'Abm6', 'Bbm6', 'Cm6', 'Dbm6', 'Ebm6', 'Fm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange]
        , [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        4, ["Ab", "Ab", "Ab", "Abmaj"], [green, green, green, green],
        ["b6", "M7", "M9", "P11",], [red, red, red, red],
        ['redComplementary'], ['SD'], [purple], ['purple'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["Ab", "Ab", "Ab", "Ab"], [green, green, green, green],
        ["b11", "P5", "b7", "b9",], [green, green, yellow, yellow],
        ['yellowSyntonic'], ['D'], [orange], ['orange'], [highlight, highlight, 'none', 'none']],
      "common": [
        4, ["Ab", "Ab", "Ab", "Ab"], [green, green, green, green],
        ["root", "b3", "sharp11", "M6",], [green, blue, blue, green],
        ['blueCommon'], ['T'], [green], ['green'], [highlight, 'none', 'none', highlight]],
    },
    "Bmin": {
      "base": [
        ["Ab", "C", "Eb", "F"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"],
        ['B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb',],
        [blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red,],
        [red, yellow, blue, green, green, purple, purple, orange, orange],
        ['Dmaj', 'Emin', 'Gbmin', 'Gmaj', 'Amaj', 'Bmin', 'Dbmin'],
        ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Emin'],
        ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gmin'],
        ['Bmaj', 'Dbmin', 'Ebmin', 'Emaj', 'Gbmaj', 'Abmin', 'Bbmin'],
        [
          ['D7', 'E7', 'Gb7', 'G7', 'A7', 'B7', 'Dm6', 'Em6', 'Gbm6', 'Gm6', 'Am6', 'Bm6'],
          ['F7', 'G7', 'A7', 'Bb7', 'C7', 'D7', 'Fm6', 'Gm6', 'Am6', 'Bbm6', 'Cm6', 'Dm6'],
          ['Ab7', 'Bb7', 'C7', 'Db7', 'Eb7', 'F7', 'Abm6', 'Bbm6', 'Cm6', 'Dbm6', 'Ebm6', 'Fm6'],
          ['B7', 'Db7', 'Eb7', 'E7', 'Gb7', 'Ab7', 'Bm6', 'Dbm6', 'Ebm6', 'Em6', 'Gbm6', 'Abm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange]
        , [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        4, ["B", "B", "B", "B"], [green, green, green, green],
        ["P11", "b6", "M7", "M9",], [red, red, red, red],
        ['redComplementary'], ['SD'], [purple], ['purple'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["B", "B", "B", "B"], [green, green, green, green],
        ["b9", "b11", "P5", "b7",], [yellow, green, green, yellow],
        ['yellowSyntonic'], ['D'], [orange], ['orange'], ['none', highlight, highlight, 'none']],
      "common": [
        4, ["B", "B", "B", "B"], [green, green, green, green],
        ["M6", "root", "b3", "sharp11",], [green, green, blue, blue],
        ['blueCommon'], ['T'], [green], ['green'], [highlight, highlight, 'none', 'none']],
    },
    "Dmin": {
      "base": [
        ["D", "F", "A", "C"], ["blue", "blue", "yellow", "yellow"], ["R", "b3", "P5", "b7"],
        ['D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db',],
        [blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red,],
        [red, yellow, blue, green, green, purple, purple, orange, orange],
        ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Emin'],
        ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gmin'],
        ['Bmaj', 'Dbmin', 'Ebmin', 'Emaj', 'Gbmaj', 'Abmin', 'Bbmin'],
        ['Dmaj', 'Emin', 'Gbmin', 'Gmaj', 'Amaj', 'Bmin', 'Dbmin'],
        [
          ['F7', 'G7', 'A7', 'Bb7', 'C7', 'D7', 'Fm6', 'Gm6', 'Am6', 'Bbm6', 'Cm6', 'Dm6'],
          ['Ab7', 'Bb7', 'C7', 'Db7', 'Eb7', 'F7', 'Abm6', 'Bbm6', 'Cm6', 'Dbm6', 'Ebm6', 'Fm6'],
          ['B7', 'Db7', 'Eb7', 'E7', 'Gb7', 'Ab7', 'Bm6', 'Dbm6', 'Ebm6', 'Em6', 'Gbm6', 'Abm6'],
          ['D7', 'E7', 'Gb7', 'G7', 'A7', 'B7', 'Dm6', 'Em6', 'Gbm6', 'Gm6', 'Am6', 'Bm6'],
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange]
        , [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        4, ["D", "D", "D", "D"], [green, green, green, green],
        ["M9", "P11", "b6", "M7",], [red, red, red, red],
        ['redComplementary'], ['SD'], [purple], ['purple'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["D", "D", "D", "D"], [green, green, green, green],
        ["b7", "b9", "b11", "P5",], [yellow, yellow, green, green],
        ['yellowSyntonic'], ['D'], [orange], ['orange'], ['none', 'none', highlight, highlight]],
      "common": [
        4, ["D", "D", "D", "D"], [green, green, green, green],
        ["sharp11", "M6", "root", "b3",], [blue, green, green, blue],
        ['blueCommon'], ['T'], [green], ['green'], ['none', highlight, highlight, 'none']],
    },
    "Fmin": {
      "base": [
        ["Ab", "C", "Eb", "F"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"],
        ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E'],
        [blue, yellow, red, blue, yellow, red, blue, yellow, red, blue, yellow, red,],
        [red, yellow, blue, green, green, purple, purple, orange, orange],
        ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gmin'],
        ['Bmaj', 'Dbmin', 'Ebmin', 'Emaj', 'Gbmaj', 'Abmin', 'Bbmin'],
        ['Dmaj', 'Emin', 'Gbmin', 'Gmaj', 'Amaj', 'Bmin', 'Dbmin'],
        ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Emin'],
        [
          ['Ab7', 'Bb7', 'C7', 'Db7', 'Eb7', 'F7', 'Abm6', 'Bbm6', 'Cm6', 'Dbm6', 'Ebm6', 'Fm6'],
          ['B7', 'Db7', 'Eb7', 'E7', 'Gb7', 'Ab7', 'Bm6', 'Dbm6', 'Ebm6', 'Em6', 'Gbm6', 'Abm6'],
          ['D7', 'E7', 'Gb7', 'G7', 'A7', 'B7', 'Dm6', 'Em6', 'Gbm6', 'Gm6', 'Am6', 'Bm6'],
          ['F7', 'G7', 'A7', 'Bb7', 'C7', 'D7', 'Fm6', 'Gm6', 'Am6', 'Bbm6', 'Cm6', 'Dm6']
        ],
        [orange, green, purple, green, purple, orange, orange, green, purple, green, purple, orange]
        , [['Bb (b7)', red], ['Bb (b7)', red], ['Eb (b3)', yellow], ['Eb (b3)', yellow], ['Db (b9)', red], ['Db (b9)', red], ['Ab(b5)', blue], ['Ab(b5)', blue]]

      ],
      "complementary": [
        4, ["F", "F", "F", "F"], [green, green, green, green],
        ["M7", "M9", "P11", "b6",], [red, red, red, red],
        ['redComplementary'], ['SD'], [purple], ['purple'], ['none', 'none', 'none', 'none']],
      "syntonic": [
        4, ["F", "F", "F", "F"], [green, green, green, green],
        ["P5", "b7", "b9", "b11",], [green, yellow, yellow, green],
        ['yellowSyntonic'], ['D'], [orange], ['orange'], [highlight, 'none', 'none', highlight]],
      "common": [
        4, ["F", "F", "F", "F"], [green, green, green, green],
        ["b3", "sharp11", "M6", "root",], [blue, blue, green, green],
        ['blueCommon'], ['T'], [green], ['green'], ['none', 'none', highlight, highlight]],
    },
  }[status]
}

// export const chords = (status) => {
//   return {
//     "Cmaj": {
//       "base": [["C", "E", "G", "A"], ["yellow", "red", "red", "yellow"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["C", "C", "C", "Cmaj"], ["blue", "blue", "blue", "blue"], ["maj7", "add9", "add11", "b6"]],
//       "syntonic": [["C", "C"], ["red", "red"], ["7", "addb9"]],
//       "common": [["C", "C"], ["yellow", "yellow"], ["addsharp11", "addsharp9"]]
//     },
//     'Cmin': {
//       'base': [["C", "Eb", "G", "Bb"], ["yellow", "yellow", "red", "red"], ["R", "b3", "P5", "b7"]],
//       'complementary': [["B", "D", "F", "Ab"], ["blue", "blue", "blue", "blue"], ["7", "M9", "P11", "b13"]],
//       'syntonic': [["Db", "E"], ["red", "red"], ["b9", "b11"]],
//       'common': [["A", "Gb"], ["yellow", "yellow"], ["6", "sharp11"]],
//     },
//     "Ebmaj": {
//       "base": [["Eb", "G", "Bb", "C"], ["yellow", "red", "red", "yellow"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["D", "F", "Ab", "B"], ["blue", "blue", "blue", "blue"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["Db", "E"], ["red", "red"], ["b7", "b9"]],
//       "common": [["A", "Gb"], ["yellow", "yellow"], ["sharp11", "sharp9"]]
//     },
//     "Ebmin": {
//       "base": [["Eb", "Gb", "Bb", "Db"], ["yellow", "yellow", "red", "red"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["D", "F", "Ab", "B"], ["blue", "blue", "blue", "blue"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["E", "G"], ["red", "red"], ["b9", "b11"]],
//       "common": [["C", "A"], ["yellow", "yellow"], ["6", "sharp11"]]
//     },
//     "Gbmaj": {
//       "base": [["Gb", "Bb", "Db", "Eb"], ["yellow", "red", "red", "yellow"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["F", "Ab", "B", "D"], ["blue", "blue", "blue", "blue"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["E", "G"], ["red", "red"], ["b7", "b9"]],
//       "common": [["C", "A"], ["yellow", "yellow"], ["sharp11", "sharp9"]]
//     },
//     "Gbmin": {
//       "base": [["Gb", "A", "Db", "E"], ["yellow", "yellow", "red", "red"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["F", "Ab", "B", "D"], ["blue", "blue", "blue", "blue"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["G", "Bb"], ["red", "red"], ["b9", "b11"]],
//       "common": [["Eb", "C"], ["yellow", "yellow"], ["6", "sharp11"]]
//     },
//     "Amaj": {
//       "base": [["A", "Db", "E", "Gb"], ["yellow", "red", "red", "yellow"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["Ab", "B", "D", "F"], ["blue", "blue", "blue", "blue"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["G", "Bb"], ["red", "red"], ["b7", "b9"]],
//       "common": [["Eb", "C"], ["yellow", "yellow"], ["sharp11", "sharp9"]]
//     },
//     "Amin": {
//       "base": [["A", "C", "E", "G"], ["yellow", "yellow", "red", "red"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["Ab", "B", "D", "F"], ["blue", "blue", "blue", "blue"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["Bb", "Db"], ["red", "red"], ["b9", "b11"]],
//       "common": [["Gb", "Eb"], ["yellow", "yellow"], ["6", "sharp11"]]
//     },
//     "Emaj": {
//       "base": [["E", "Ab", "B", "Db"], ["red", "blue", "blue", "red"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["Eb", "Gb", "A", "C"], ["yellow", "yellow", "yellow", "yellow"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["D", "F"], ["blue", "blue"], ["b7", "b9"]],
//       "common": [["Bb", "G"], ["red", "red"], ["sharp11", "sharp9"]]
//     },
//     "Emin": {
//       "base": [["E", "G", "B", "D"], ["red", "red", "blue", "blue"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["Eb", "Gb", "A", "C"], ["yellow", "yellow", "yellow", "yellow"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["F", "Ab"], ["blue", "blue"], ["b9", "b11"]],
//       "common": [["Db", "Bb"], ["red", "red"], ["6", "sharp11"]]
//     },

//     "Gmaj": {
//       "base": [["G", "B", "D", "E"], ["red", "blue", "blue", "red"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["Gb", "A", "C", "Eb"], ["yellow", "yellow", "yellow", "yellow"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["F", "Ab"], ["blue", "blue"], ["b7", "b9"]],
//       "common": [["Db", "Bb"], ["red", "red"], ["sharp11", "sharp9"]]
//     },
//     "Gmin": {
//       "base": [["G", "Bb", "D", "F"], ["red", "red", "blue", "blue"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["Gb", "A", "C", "Eb"], ["yellow", "yellow", "yellow", "yellow"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["Ab", "B"], ["blue", "blue"], ["b9", "b11"]],
//       "common": [["E", "Db"], ["red", "red"], ["6", "sharp11"]]
//     },
//     "Bbmaj": {
//       "base": [["Bb", "D", "F", "G"], ["red", "blue", "blue", "red"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["A", "C", "Eb", "Gb"], ["yellow", "yellow", "yellow", "yellow"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["Ab", "B"], ["blue", "blue"], ["b7", "b9"]],
//       "common": [["E", "Db"], ["red", "red"], ["sharp11", "sharp9"]]
//     },
//     "Bbmin": {
//       "base": [["Bb", "Db", "F", "Ab"], ["red", "red", "blue", "blue"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["A", "C", "Eb", "Gb"], ["yellow", "yellow", "yellow", "yellow"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["B", "D"], ["blue", "blue"], ["b9", "b11"]],
//       "common": [["G", "E"], ["red", "red"], ["6", "sharp11"]]
//     },
//     "Dbmaj": {
//       "base": [["Db", "F", "Ab", "Bb"], ["red", "blue", "blue", "red"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["C", "Eb", "Gb", "A"], ["yellow", "yellow", "yellow", "yellow"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["B", "D"], ["blue", "blue"], ["b7", "b9"]],
//       "common": [["G", "E"], ["red", "red"], ["sharp11", "sharp9"]]
//     },
//     "Dbmin": {
//       "base": [["Db", "E", "Ab", "B"], ["red", "red", "blue", "blue"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["C", "Eb", "Gb", "A"], ["yellow", "yellow", "yellow", "yellow"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["D", "F"], ["blue", "blue"], ["b9", "b11"]],
//       "common": [["Bb", "G"], ["red", "red"], ["6", "sharp11"]]
//     },
//     "Abmaj": {
//       "base": [["Ab", "C", "Eb", "F"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["G", "Bb", "Db", "E"], ["red", "red", "red", "red"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["Gb", "A"], ["yellow", "yellow"], ["b7", "b9"]],
//       "common": [["D", "B"], ["blue", "blue"], ["sharp11", "sharp9"]]
//     },
//     "Abmin": {
//       "base": [["Ab", "B", "Eb", "Gb"], ["blue", "blue", "yellow", "yellow"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["G", "Bb", "Db", "E"], ["red", "red", "red", "red"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["A", "C"], ["yellow", "yellow"], ["b9", "b11"]],
//       "common": [["F", "D"], ["blue", "blue"], ["6", "sharp11"]]
//     },
//     "Bmaj": {
//       "base": [["B", "Eb", "Gb", "Ab"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["Bb", "Db", "E", "G"], ["red", "red", "red", "red"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["A", "C"], ["yellow", "yellow"], ["b7", "b9"]],
//       "common": [["F", "D"], ["blue", "blue"], ["sharp11", "sharp9"]]
//     },
//     "Bmin": {
//       "base": [["B", "D", "Gb", "A"], ["blue", "blue", "yellow", "yellow"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["Bb", "Db", "E", "G"], ["red", "red", "red", "red"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["C", "Eb"], ["yellow", "yellow"], ["b9", "b11"]],
//       "common": [["Ab", "F"], ["blue", "blue"], ["6", "sharp11"]]
//     },


//     "Dmaj": {
//       "base": [["D", "Gb", "A", "B"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["Db", "E", "G", "Bb"], ["red", "red", "red", "red"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["C", "Eb"], ["yellow", "yellow"], ["b7", "b9"]],
//       "common": [["Ab", "F"], ["blue", "blue"], ["sharp11", "sharp9"]]
//     },
//     "Dmin": {
//       "base": [["D", "F", "A", "C"], ["blue", "blue", "yellow", "yellow"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["Db", "E", "G", "Bb"], ["red", "red", "red", "red"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["Eb", "Gb"], ["yellow", "yellow"], ["b9", "b11"]],
//       "common": [["B", "Ab"], ["blue", "blue"], ["6", "sharp11"]]
//     },
//     "Fmaj": {
//       "base": [["F", "A", "C", "D"], ["blue", "yellow", "yellow", "blue"], ["R", "M3", "P5", "M6"]],
//       "complementary": [["E", "G", "Bb", "Db"], ["red", "red", "red", "red"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["Eb", "Gb"], ["yellow", "yellow"], ["b7", "b9"]],
//       "common": [["B", "Ab"], ["blue", "blue"], ["sharp11", "sharp9"]]
//     },
//     "Fmin": {
//       "base": [["F", "Ab", "C", "Eb"], ["blue", "blue", "yellow", "yellow"], ["R", "b3", "P5", "b7"]],
//       "complementary": [["E", "G", "Bb", "Db"], ["red", "red", "red", "red"], ["7", "M9", "P11", "b13"]],
//       "syntonic": [["Gb", "A"], ["yellow", "yellow"], ["b9", "b11"]],
//       "common": [["D", "B"], ["blue", "blue"], ["6", "sharp11"]]
//     }




//   }[status]
// }
