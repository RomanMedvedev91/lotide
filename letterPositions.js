const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

const result = letterPositions("lighthouse in the house");
assertArraysEqual(result['l'], [0]);
assertArraysEqual(result['e'], [9, 16, 22]);


const result2 = letterPositions('hello');

assertArraysEqual(result2['h'], [0]);
assertArraysEqual(result2['e'], [1]);
assertArraysEqual(result2['l'], [2, 3]);
assertArraysEqual(result2['o'], [4]);


