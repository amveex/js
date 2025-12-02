// function declaration
// these are hoisted
function declared() {
    console.log("declared");
}; declared();


// function expression
// these ain't hoisted
let func = function() {
    console.log("expression");
}; func();


// arrow function
// these ain't hoisted
// don't have own "this"
// not able to use bind(), call(), apply()
// can't be used as constructor with "new"
let arr = () => {
    console.log("arrow");
}; arr();


// immediately invoked function expression
// runs as soon as defined
(function() {
    console.log("iife");
})();
