const assertArraysEqual = function (arr1, arr2) {
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

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
// =>>> use concat and map to solve the revial
const flatten = function (array) {
  const newArray = array.reduce((acc, cur) => {
    // concating empty array as a accumulator with next element and check if it is has nested array
    if (!Array.isArray(cur)) {
      return acc.concat(cur);
    } else {
      return acc.concat(flatten(cur));
    }
  }, []);

  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3], [4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
