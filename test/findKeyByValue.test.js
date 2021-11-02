const _ = require("../index");
const assert = require("chai").assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it(`should return drama for object bestTVShowsByGenre`, () => {
    assert.strictEqual(
      _.findKeyByValue(bestTVShowsByGenre, "The Wire"),
      "drama"
    );
  });
  it("should return sci_fi for object bestTVShowsByGenre", () => {
    assert.strictEqual(
      _.findKeyByValue(bestTVShowsByGenre, "The Expanse"),
      "sci_fi"
    );
  });
  it("should return undefined for object bestTVShowsByGenre", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "Wire"), undefined);
  });
});
