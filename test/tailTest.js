const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
// ...
const peers = tail(["Roman", "Steve", "Yo", "Ahmed"]);
assertEqual(peers.length, 3);
assertEqual(peers[0], "Steve");
assertEqual(peers[2], "Ahmed");

const empty = tail(["I will be sliced"]);
assertEqual(empty.length, 0);
assertEqual(empty[0], undefined);
