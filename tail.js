// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  return array.slice(1);
};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
// ...
const peers = tail(['Roman', 'Steve', 'Yo', 'Ahmed']);
assertEqual(peers.length, 3);
assertEqual(peers[0], 'Steve');
assertEqual(peers[2], 'Ahmed');

const empty = tail(['I will be sliced']);
assertEqual(empty.length, 0);
assertEqual(empty[0], undefined);
