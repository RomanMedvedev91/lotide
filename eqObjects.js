// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  // define func to check if value is array
  const eqArrays = function (arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  // check length of object
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key of Object.keys(object1)) {
    // check if value is array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    // check value of the same key
    if (object2[key] !== object1[key]) return false;
  }
  return true;
};

module.exports = eqObjects;
