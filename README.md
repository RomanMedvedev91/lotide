# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @roman.medvedev/lotide`

**Require it:**

`const _ = require('@roman.medvedev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArrayEqual(array1, array2)`: compare if arrays have same el and log the result
- `assertEqual(el1, el2)`: compare 2 element and log result
- `assertObjectsEqual(obj1, obj2)`: compare 2 obj if they have same keys with same value log the result
- `countLetters(string)`: count quantity of letter in string and return object with key as a letter an value as a quantity of repeating this letter
- `countOnly(allItems, itemsToCount)`: count quantity of repitition second argument in first arg that is a string
- `eqArray(arr1, arr2)`: compare if arrays have same el and return true/false
- `eqObjects(obj1, obj2)`: ompare 2 obj if they have same keys with same value and return true/false
- `findKey(obj, callback)`: if key exist with value given in callback it will be returned
- `findKeyByValue(obj1, value)`: if the key exist with value as an argument and return key.
- `flatten(array)`: unflat given array
- `head(array)`: return head of array. (array with first element).
- `letterPositions(string)`: return obj with letters as a key and their index as a value.
- `map(array, callback)`: return array with elements that accepted by callback.
- `middle(array)`: return array with middle element if length is odd of elements if even.
