/**
 * একটা function এর ভিতরে যদি কোন একটা function কে return করে এবং তার বাহিরের কোন variable কে এক্সেস করে তখন সে তার নিজস্ব একটা closure or encapsulation or private variable তৈরি করে ফেলে
 */

function stopWatch () {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
let clock2 = stopWatch();
console.log(clock2());
console.log(clock2());