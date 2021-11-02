const _ = require("../index");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3], [4], 5, [6]]", () => {
    assert.deepEqual(_.flatten([1, 2, [3], [4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, [4]], 5, [6]]", () => {
    assert.deepEqual(_.flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
