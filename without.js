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
}

const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  for(let i in arr1) {
    if(arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
}

const without = function (source, itemsToRemove) {
  let outputArray = [];
 for(let i in source) {
   if(!itemsToRemove.includes(source[i])) outputArray.push(source[i]);
 }
  return outputArray;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3] )// => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);