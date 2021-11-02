const _ = require("../index");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("should return true for { a: '1', b: '2' } and { b: '2', a: '1' } ", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(_.eqObjects(ab, ba), true);
  });
  it("should return false for { a: '1', b: '2' } and { a: '2', b: '1', c: '3' } ", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(_.eqObjects(ab, abc), false);
  });
  it("should return true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1'} ", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(_.eqObjects(cd, dc), true);
  });
  it("should return false for { c: '1', d: ['2', 3]} and { c: '1', d: ['2', 3, 4]} ", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(_.eqObjects(cd, cd2), false);
  });
});
