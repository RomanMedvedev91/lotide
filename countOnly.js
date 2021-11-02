// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const countObj = {};
  for (const item of allItems) {
    if (countObj[item]) {
      countObj[item]++;
    } else {
      if (itemsToCount[item] && itemsToCount[item]) {
        countObj[item] = 1;
      }
    }
  }
  return countObj;
};

module.exports = countOnly;
