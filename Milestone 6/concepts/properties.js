const bottle = { color:'yellow', hold:'water', price:60, isClean:true }
// getting all properties names
const keys = Object.keys(bottle);
console.log(keys);

// getting all values
const values = Object.values(bottle);
console.log(values);

// getting keys and values
const pairs = Object.entries(bottle);
console.log(pairs);

/* object ke seal korle kono property delete kora jay na, add kora jay na tobe property value change kora jay */
Object.seal(bottle);
bottle.price = 100;

// delete property
delete bottle.isClean;
console.log(bottle);
