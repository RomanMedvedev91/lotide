const _ = require("../index");
const assertArraysEqual = require("../assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];
const results1 = _.map(words, (word) => word[0]);
const results2 = _.map(words, (word) => word[0].toUpperCase());
const results3 = _.map(words, (word) => word.slice(1));

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["G", "C", "T", "M", "T"]);
assertArraysEqual(results3, ["round", "ontrol", "o", "ajor", "om"]);
