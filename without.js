const without = function (source, itemsToRemove) {
  let outputArray = [];
  for (let i in source) {
    if (!itemsToRemove.includes(source[i])) outputArray.push(source[i]);
  }
  return outputArray;
};

module.exports = without;
