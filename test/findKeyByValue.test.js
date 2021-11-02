const _ = require("../index");
const assertEqual = require("../assertEqual");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(_.findKeyByValue(bestTVShowsByGenre, "Wire"), undefined);
