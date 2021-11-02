const _ = require("../index");
const assert = require("chai").assert;

describe("#letterPosition", () => {
  it("should return [0] for ['h'] in ['hello']", () => {
    assert.deepEqual(_.letterPositions("hello")["h"], [0]);
  });
  it("should return [1] for ['e'] in ['hello']", () => {
    assert.deepEqual(_.letterPositions("hello")["e"], [1]);
  });
  it("should return [2, 3] for ['l'] in ['hello']", () => {
    assert.deepEqual(_.letterPositions("hello")["l"], [2, 3]);
  });
  it("should return [4] for ['0'] in ['hello']", () => {
    assert.deepEqual(_.letterPositions("hello")["o"], [4]);
  });
});
