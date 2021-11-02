const _ = require("../index");
const assert = require("chai").assert;

describe("#takeUntil", () => {
  it("should return ['g', 'c', 't', 'm', 't'] from ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = _.map(words, (word) => word[0]);
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  it("should return ['G', 'C', 'T', 'M', 'T'] from ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results2 = _.map(words, (word) => word[0].toUpperCase());
    assert.deepEqual(results2, ["G", "C", "T", "M", "T"]);
  });
  it("should return ['round', 'ontrol', 'o', 'ajor', 'om'] from ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results3 = _.map(words, (word) => word.slice(1));
    assert.deepEqual(results3, ["round", "ontrol", "o", "ajor", "om"]);
  });
});
