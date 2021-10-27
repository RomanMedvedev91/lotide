const assertArraysEqual = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
  return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
  for(let i in arr1) {
    if(arr1[i] !== arr2[i]) {
    return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
    }    
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  for(let i in arr1) {
    if(arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const middle = function(array) {
  const middleArray = [];

  if(array.length < 3) return [];
  if(array.length % 2 !== 0) {
    middleArray.push(array[Math.ceil(array.length/2) - 1]);
    // console.log(Math.ceil(array.length/2))
  } else {
    middleArray.push(array[array.length/2 - 1], array[array.length/2]);
    
  }
   return middleArray;
}

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]