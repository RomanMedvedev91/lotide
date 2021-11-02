const _ = require("../index");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(_.letterPositions("lighthouse in the house")["l"], [0]);
assertArraysEqual(
  _.letterPositions("lighthouse in the house")["e"],
  [9, 16, 22]
);
assertArraysEqual(_.letterPositions("hello")["h"], [0]);
assertArraysEqual(_.letterPositions("hello")["e"], [1]);
assertArraysEqual(_.letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(_.letterPositions("hello")["o"], [4]);
