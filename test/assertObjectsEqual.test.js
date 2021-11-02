const _ = require("../index");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
_.assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
_.assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
_.assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
_.assertObjectsEqual(cd, cd2); // => false
