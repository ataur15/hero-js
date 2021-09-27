const user = { id: 5, name: 'karim', age: 25, phone: 017878787 }
// console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);

const convertObject = JSON.parse(stringified);
console.log(convertObject);