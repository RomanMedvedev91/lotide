const assert = require("chai").assert;
const _ = require("../index");

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = _.tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = _.tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("returns ['Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = _.tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
  it("returns ['Steve', 'Yo', 'Ahmed'] for ['Roman', 'Steve', 'Yo', 'Ahmed']", () => {
    const peers = _.tail(["Roman", "Steve", "Yo", "Ahmed"]);
    assert.deepEqual(peers, ["Steve", "Yo", "Ahmed"]);
  });
  it("returns ['Steve'] for ['Roman', 'Steve', 'Yo', 'Ahmed']", () => {
    const peers = _.tail(["Roman", "Steve", "Yo", "Ahmed"]);
    assert.strictEqual(peers[0], "Steve");
  });
  it("returns ['Ahmed'] for ['Roman', 'Steve', 'Yo', 'Ahmed']", () => {
    const peers = _.tail(["Roman", "Steve", "Yo", "Ahmed"]);
    assert.strictEqual(peers[2], "Ahmed");
  });
});
