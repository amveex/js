// "for" loop
console.log("\"for\" loop")

let forArr = ["car", "bird", "human", "ghost", "flower"];
let forIndex = 0;

for(forIndex; forIndex < forArr.length; forIndex++) {
    console.log(`${forIndex} index: ${forArr[forIndex]}`);
}


// "while" loop
console.log("\n\"while\" loop");

let whileArr = ["house", "sky", "banana", "sun", "stone"];
let whileIndex = 0;

while(whileIndex < whileArr.length) {
    console.log(`${whileIndex} index: ${whileArr[whileIndex]}`);
    whileIndex++;
}


// "do...while" loop
console.log("\n\"do...while\" loop");

let dowhileArr = ["mace", "leg", "hand", "dog", "gun"];
let dowhileIndex = 0;

do {
    console.log(`${dowhileIndex} index: ${dowhileArr[dowhileIndex]}`);
    dowhileIndex++;
} while (dowhileIndex > dowhileArr.length); // executes one time even if false


// "for...in" loop
console.log("\n\"for...in\" loop");

let objForIn = {"name": "Vladislav", "age": "24 yo", "height": "185 cm"};

for(let key in objForIn) {
    console.log(`key "${key}" has value "${objForIn[key]}"`);
}


// "for...of" loop
console.log("\n\"for...of\" loop");

let arrForOf = ["first", "second", "third", "fourth", "fifth"];

for(let elem of arrForOf) {
    console.log(elem);
}
