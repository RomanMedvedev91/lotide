const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect; // <= add this line

  // defined assertArrayEqual function to invoke for check if value is array
  const assertArraysEqual = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return console.log(
        `❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
      );
    }
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return console.log(
          `❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
        );
      }
    }
    return console.log(
      `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
    );
  };

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return console.log(
      `❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
    );
  }

  for (const key of Object.keys(object1)) {
    // check if value is array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return assertArraysEqual(object1[key], object2[key]);
    }
    // check value of the same key
    if (object2[key] !== object1[key]) {
      return console.log(
        `❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
      );
    }
  }
  return console.log(
    `✅✅✅ Assertion Passed: ${inspect(object1)}} === ${inspect(object2)}`
  );
};
module.exports = assertObjectsEqual;

