console.log(b); // undefined
var b = "Bangladesh";

// console.log(a); // ReferenceError
let a = "America";

let x;
console.log(x); // undefined

myFunc();
function myFunc() {
    console.log('I love JavaScript');
}

food();
const food = function () {
    console.log('I love chicken'); // ReferenceError
}

function world() {
    language = "Python";
    var language;
    console.log(language);  /* Scope cinta korle er result undefined howar kotha but hoisting er karone er result Python */
}
world();