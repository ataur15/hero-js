/**
 * Implicit binding (this kake point korche ta bujhar ekta sohoj way hocceh Implicit binding)
 * jei jaygay function ta call hoyeche and . notation er agee immediate jeita ache setai hocce this
 */

const sakib = {
    name: "Sakib",
    age: 36,
    printPlayerName: function () {
        // console.log(this.name);
    }
}

sakib.printPlayerName();

const person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            // console.log(this.name);
        },
        father: {
            name: 'Mr. Jamal',
            age: 65,
            printName: function () {
                // console.log(this.name);
            }
        }
    }
}

const tamim = person('Tamim Iqbal', 36);
tamim.printName();
tamim.father.printName();


/**
 * Explicit binding
 * kon object diye ami functiontake call korte cacchi.
 * tar mane ei printName function ta call hobe through mashrafe object
 */

let printName = function (v1, v2) {
    console.log(`${this.name} is ${v1} and ${v2}`);
}

let mashrafe = {
    name: "Mashrafe",
    age: 38
}

let v1 = "Handsome";
let v2 = "Best Captain";

printName.call(mashrafe, v1, v2);
printName.apply(mashrafe, [v1, v2]);
const newFunction = printName.bind(mashrafe, v1, v2);
newFunction();
