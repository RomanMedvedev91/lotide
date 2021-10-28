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


// =>>> use concat and map to solve the revial