const assert = require("chai").assert;
const _ = require("../index");

describe("#countLetter", () => {
  it("should return 1 for 'l' from lighthouse in the house", () => {
    const result = _.countLetters("lighthouse in the house");
    assert.strictEqual(result["l"], 1);
  });
  it("should return 2 for 'i' from lighthouse in the house", () => {
    const result = _.countLetters("lighthouse in the house");
    assert.strictEqual(result["i"], 2);
  });
  it("should return 4 for 'h' from lighthouse in the house", () => {
    const result = _.countLetters("lighthouse in the house");
    assert.strictEqual(result.h, 4);
  });
});
