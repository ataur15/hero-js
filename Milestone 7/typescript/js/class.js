"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const totalPrice = this.price + taxAmount;
        return totalPrice;
    }
}
const toyota = new Car('Toyota', 1000000);
console.log(toyota);
