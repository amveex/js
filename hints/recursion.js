// recursion is concept where function calls itself
// and keeps calling until "base case" is met
// exceeding limit is about 10000+

let counter = 0;

function recursion() {
    console.log("hello");
    console.log(++counter);

    if (counter > 6) { // "base case"
        return;
    }

    recursion(); // calls itself, beginning of recursion
}

recursion();
