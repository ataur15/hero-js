/*
Data types
================
Primitive data types
1. number
2. string
3. boolean
4. undefined
5. null
6. symbol

Non primitive data types
- object
*/

let a = "Hello";
let b = a;
// console.log(a, b); // Hello Hello
a = "Gello";
// console.log(a, b); // Gello Hello


let x = { job: "web developer" }
let y = x;
console.log(x, y);
x.job = "frontend developer";
console.log(x, y);
