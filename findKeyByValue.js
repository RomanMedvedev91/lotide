const findKeyByValue = function (object, value) {
  // Fist solution

  // for(const key in object) {
  //   if(object[key] === value) return key;
  // }

  // secont solution
  for (const key of Object.keys(object)) {
    if (object[key] === value) return key;
  }
};

module.exports = findKeyByValue;
