// RECURSION IS A CONCEPT WHERE A FUNCTION CALLS ITSELF
// KEEPS CALLING UNTIL BASE CASE IS MET
// EXCEEDING LIMIT IS ABOUT 10000+

let counter = 0;

function recursion() {
    console.log("hello");
    counter++;
    console.log(counter);

    if (counter > 6) { // base case
        return;
    }

    recursion(); // calls itself || beginning of recursion
}
