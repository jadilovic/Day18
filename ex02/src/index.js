let myArr = [];

// Only change code below this line
function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  for (var i = 1; i < 6; i++) {
    var x = i + "#";
    yield x;
  }
}

function* insideGenerator2() {
  for (var i = 10; i < 16; i++) {
    var x = i + "#";
    yield x;
  }
}

function* insideGenerator3() {
  for (var i = 6; i < 10; i++) {
    var x = i + "#";
    yield x;
  }
}

let iterator = myGenerator();
let fifteenArray = [];

for (var i = 0; i < 15; i++) {
  fifteenArray.push(iterator.next().value);
}
fifteenArray.push("undefined!");

console.log(fifteenArray);

// Only change code above this line

module.exports = { fifteenArray, myGenerator };
