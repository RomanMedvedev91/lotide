const _ = require("../index");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(_.flatten([1, 2, [3], [4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(_.flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
