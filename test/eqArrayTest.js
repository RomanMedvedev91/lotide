// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const _ = require("../index");

describe("#eqArray", () => {
  it("returns true if array [1, 2, 3] equal to [1, 2, 3]", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false if array [1, 2, 3] is NOT equal to [3, 2, 1]", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true if array ['1', '2', '3'] equal to ['3', '2', '1']", () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false if array ['1', '2', '3'] is NOT equal to ['1', '2', 3]", () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});
