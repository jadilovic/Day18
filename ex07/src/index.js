const _ = require("lodash");

let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];

let sortedArray = numberArray.sort(function(a, b){return a-b});
console.log(numberArray);

let uniqueArray = new Set();
for (let number of sortedArray) {
  uniqueArray.add(number);
}

console.log(uniqueArray);

// Only change code above this line

module.exports = { numberArray, uniqueArray };