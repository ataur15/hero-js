/**
 * object compare
 * 2 ta alada name er object, dekte ekrokom holeo primitive type (== or ===) er moto kore check kora jabe na tobe 2tar reference same hole check kora jabe
 */

const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = { a: 1, b: 2 };

if (first === second) {
    console.log("objects are equal");
}
else if (first === third) {
    console.log("objects are equal");
}
else {
    console.log("objects are not equal");
}
