const _ = require("../index");

_.assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
_.assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
_.assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
_.assertArraysEqual([3, 5, 6], [3, 5, 6]); //true
