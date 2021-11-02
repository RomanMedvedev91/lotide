const _ = require("../index");
const assertArraysEqual = require("../assertArraysEqual");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = _.takeUntil(data1, (x) => x < 0);
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = _.takeUntil(data2, (x) => x === ",");
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
