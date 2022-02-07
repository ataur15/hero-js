const printName = function (v1, v2) {
    console.log(`${this.name} is a ${v1} and ${v2}`);
}

const sakib = {
    name: "Sakib",
    age: 38,
}

printName.call(sakib, 'All rounder', 'Handsome');
printName.apply(sakib, ['Cricketer', 'Batsman']);
const newFunc = printName.bind(sakib, 'All rounder', 'Bowler');
newFunc();
