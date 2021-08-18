/**
 * Array of object properties and values return to an array
 */

const students = [
    { name: "Abir", age: 23, id: 5 },
    { name: "Kabir", age: 25, id: 7 },
    { name: "Minar", age: 21, id: 4 },
    { name: "Malek", age: 22, id: 3 }
]

function school (param) {
    let emptyArray = [];
    for (const object of param) {
        let container = "";
        for (const property in object) {
            container = container + property + ": " + object[property] + " ";
        }
        emptyArray.push(container);
    }
    return emptyArray;
}

let result = school(students);
//console.log(result);


/**
 * Inside the object if matches by given product name then you have to return other products with an array instead of that product by given
 */

const products = [
    { productName: "asus laptop", productId: "lt20", stock: "50" },
    { productName: "samsung watch", productId: "w10", stock: "1000" },
    { productName: "samsung phone", productId: "ph15", stock: "200" },
    { productName: "dell laptop", productId: "lt16", stock: "50" },
    { productName: "microphone", productId: "m70", stock: "100" }
]

function onlineShop (items, productname) {
    let products = [];
    for (let object of items) {
        for (let property in object) {
            if (property == "productName" && object[property] != productname) {
                products.push(object);
            }
        }
    }
    return products;
}

let items = onlineShop(products, "asus laptop");
//console.log(items);


/**
 * Date ways order list
 */

const orderList = [
    {
        customerName: 'Kabul',
        productName: 'Dell Laptop',
        quantity: 2,
        date: "12-7-2021"
    },
    {
        customerName: 'habul',
        productName: 'Samsung Mobile A30',
        quantity: 1,
        date: "12-7-2021"
    },
    {
        customerName: 'mukbul',
        productName: 'Samsung watch',
        quantity: 2,
        date: "11-7-2021"
    },
    {
        customerName: 'asraful',
        productName: 'Asus laptop',
        quantity: 3,
        date: "12-7-2021"
    },
    {
        customerName: 'asif',
        productName: 'I Phone 10',
        quantity: 1,
        date: "10-7-2021"
    },
]

function orderDate (date) {
    const orders = [];
    for (const object of orderList) {
        for (const property in object) {
            if (property == "date" && object[property] == date) {
                orders.push(object);
            }
        }
    }
    return orders;
}

let date = "11-7-2021";
let orderItems = orderDate("12-7-2021");
console.log(orderItems);
