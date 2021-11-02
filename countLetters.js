const countLetters = function (sentence) {
  const outputObj = {};
  const string = sentence.replace(/ /g, "");
  for (const letter of string) {
    if (outputObj[letter]) {
      outputObj[letter]++;
    } else {
      outputObj[letter] = 1;
    }
  }
  return outputObj;
};

module.exports = countLetters;
