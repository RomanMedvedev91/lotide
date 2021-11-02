const _ = require("../index");
const assert = require("chai").assert;

describe("#takeUntil", () => {
  it("should return [1, 2, 5, 7, 2] for x < 0 from [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = _.takeUntil(data1, (x) => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("should return ['I've', 'been', 'to,' 'Hollywood'] for x === ','\n from ['I've', 'been', 'to,' 'Hollywood', ',', 'I've', 'been','to','Redwood']", () => {
    const data2 = [
      "I've",
      "been",
      "to",
      "Hollywood",
      ",",
      "I've",
      "been",
      "to",
      "Redwood",
    ];
    const result2 = _.takeUntil(data2, (x) => x === ",");
    assert.deepEqual(result2, ["I've", "been", "to", "Hollywood"]);
  });
});
