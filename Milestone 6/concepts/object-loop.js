const bottle = { color:'yellow', hold:'water', price:60, isClean:true }

/**
 * loop through for in
 */

for (const prop in bottle) {
    // console.log(prop);
    // console.log(bottle[prop]);
}

/**
 * loop through for of
 */

const keys = Object.keys(bottle);
for (const key of keys) {
    // console.log(key);
    // console.log(key, bottle[key]);
}

/**
 * loop through for of with destructure and etries
 */

const pairs = Object.entries(bottle);
console.log(pairs);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
