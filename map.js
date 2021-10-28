const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));

  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0].toUpperCase());
const results3 = map(words, word => word.slice(1));

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

// i don't know do i need eqArray in this ex
// const eqArrays = function(arr1, arr2) {
//   if(arr1.length !== arr2.length) return false;
//   for(let i in arr1) {
//     if(arr1[i] !== arr2[i]) {
//       return false;
//     } 
//   }
//   return true;
// }

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [ 'G', 'C', 'T', 'M', 'T' ]);
assertArraysEqual(results3, [ 'round', 'ontrol', 'o', 'ajor', 'om' ]);