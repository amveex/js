// "closure" is defined function inside of another function
// defined function has access to variables and scope
// even if the another function has finished execution

function another() {
    let counter = 0;

    return function defined() {
        console.log(++counter);
    }
}

let son = another();
let dad = another();

son(); // counter = 1
son(); // counter = 2
son(); // counter = 3
dad(); // counter = 1


function count() {
    let counter = 0;

    return () => console.log(++counter);
}

let first = count();
let second = count();

first(); // counter = 1
first(); // counter = 2
second(); // counter = 1
second(); // counter = 2
second(); // counter = 3
second(); // counter = 4
first(); // counter = 3
