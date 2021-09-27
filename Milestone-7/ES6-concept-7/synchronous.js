const processOrder = (customer) => {
    console.log('Processing order for customer 1');

    let currentTime = new Date().getTime();
    while (currentTime + 10000 >= new Date().getTime());
    console.log('Order processed for customer 1');
}

console.log('Take order for customer 1');
processOrder();
console.log('Completed order for customer 1');
