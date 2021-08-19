const products = [
    'Dell cori5 10 gen ssd250 laptop',
    'HP cori7 8gen ssd350 Laptop',
    'samsung smart watch t25',
    'iphone 10 50pxl camare 200gb',
    'Samsung cori7 8gen laptop',
    'oppo t100 50pxl camera Phone',
    'Asus cori3 9 gen ssd500 laptop'
]

const searching = 'samsung';

/**
 * Searching by indexOf
 */

const output1 = [];

for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output1.push(product);
    }
}
// console.log(output1);

/**
 * Searching by includes
 */

const output2 = [];

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output2.push(product);
    }
}
// console.log(output2);

/**
 * Searching by startsWith
 */

const output3 = [];

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output3.push(product);
    }
}
console.log(output3);