const takeUntil = function(array, callback) {
  const output = [];
  for (const item of array) {
    if(callback(item)) return output;
    else output.push(item);
  }
  return output;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
