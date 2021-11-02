const _ = require("../index");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

describe("#CountOnly", () => {
  it("shoud return 1 for Jason", () => {
    const result1 = _.countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.strictEqual(result1["Jason"], 1);
  });
  it("shoud return undefined for Karima", () => {
    const result1 = _.countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("shoud return 2 for Fang", () => {
    const result1 = _.countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.strictEqual(result1["Fang"], 2);
  });
  it("shoud return undefined for 'Agouhanna'", () => {
    const result1 = _.countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});
