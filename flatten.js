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

module.exports = flatten;
