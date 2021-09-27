/**
 * একটা function এর ভিতর থেকে যদি কোন একটা function কে return করে এবং তার বাহিরের কোন variable কে এক্সেস করে তখন সে তার নিজস্ব একটা closure or encapsulation or private variable তৈরি করে ফেলে
 */

/* function stopWatch () {
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
console.log(clock2()); */


const bank = () => {
    balance = 0;
    return amount => {
        balance += amount;
        return balance;
    }
}

let MofizBank = bank();
console.log(MofizBank(100));
console.log(MofizBank(200));
console.log(MofizBank.balance);
console.log(MofizBank(50));
