const middle = function (array) {
  const middleArray = [];

  if (array.length < 3) return [];
  if (array.length % 2 !== 0) {
    middleArray.push(array[Math.ceil(array.length / 2) - 1]);
  } else {
    middleArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return middleArray;
};

module.exports = middle;
