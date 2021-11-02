const takeUntil = function (array, callback) {
  const output = [];
  for (const item of array) {
    if (callback(item)) return output;
    else output.push(item);
  }
  return output;
};

module.exports = takeUntil;
