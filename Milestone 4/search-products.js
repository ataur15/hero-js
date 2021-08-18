/**
 * Product search in an array
 */

const products = [
    {name: "samsung a30", price: 16000, storage: 64},
    {name: "oppo t5", price: 14000, storage: 32},
    {name: "samsung s4", price: 17000, storage: 64},
    {name: "iphone 10", price: 70000, storage: 64},
    {name: "apple smart watch", price: 1000, storage: 64},
    {name: "dell laptop", price: 45000, storage: 500},
    {name: "samsung laptop", price: 50000, storage: 500}
]

function searchProduct (products, search) {
    let matched = [];
    for (const product of products) {
        if (product.name.indexOf(search) != -1) {
            matched.push(product.name);
        }
    }
    return matched;
}

let itemResult = searchProduct(products, 'laptop');
console.log(itemResult);