// Only change code below this line
let shopingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);

let arrKey = [];
for (let fruit of shopingList) {
    arrKey.push(fruit);
}

for(let key of arrKey){
    console.log(`groceries: ${key[0]}`)
}

let arrValue = [];
for (let amount of shopingList) {
    arrValue.push(amount);
}

for(let value of arrValue){
    console.log(`amount: ${value[1]}`)
}

//console.log(arrKey);
// console.log(shopingList);

for (let fruit of shopingList) {
    console.log(`[ ${fruit[0]}, ${fruit[1]} ]`)
}

// Only change code above this line

module.exports = {shopingList, arrKey, arrValue};
