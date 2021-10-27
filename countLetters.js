const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {
  const outputObj = {};
  const string = sentence.replace(/ /g, '');
  for (const letter of string) {
    if  (outputObj[letter]) {
      outputObj[letter]++;
    } else {
      outputObj[letter] = 1;
    }
  }
  return outputObj;
};

const result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result.g, 1);
assertEqual(result["h"], 4);
assertEqual(result.h, 4);
