const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([, 6, 7]), undefined);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 33, 22]), 1);
