// CLOSURE IS A FUNCTION DEFINED INSIDE OF ANOTHER FUNCTION
// DEFINED FUNCTION HAS ACCESS TO THE VARIABLES AND SCOPE
// EVEN IF THE ANOTHER FUNCTION HAS FINISHED EXECUTION

function another() {
    let msg = "private"

    function defined() {
        console.log(msg);
    }

    defined();
}
