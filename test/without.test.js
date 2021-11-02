const _ = require("../index");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(_.without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(_.without(words, ["lighthouse"]), ["hello", "world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
