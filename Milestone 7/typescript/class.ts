class Car {
    model: string;
    price: number;
    constructor (model: string, price: number) {
        this.model = model;
        this.price = price;
    }
    getTotalPrice (tax: number):number {
        const taxAmount = this.price * tax / 100;
        const totalPrice = this.price + taxAmount;
        return totalPrice;
    }
}

const toyota = new Car('Toyota', 1000000);
console.log(toyota);
