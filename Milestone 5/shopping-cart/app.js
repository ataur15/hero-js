// Quantity and price Update
function updateProduct(product, price, isIncreasing) {
    // Update quantity
    let inputField = document.getElementById(product + '-input');
    let quantity = inputField.value;
    if (isIncreasing == true) {
        quantity = parseInt(quantity) + 1;
    }
    else if (quantity > 0) {
        quantity = parseInt(quantity) - 1;
    }
    inputField.value = quantity;

    // Update price
    let updatePrice = document.getElementById(product + '-total');
    updatePrice.innerText = quantity * price;

    // Calculate Total
    calculateTotal();

}

// Total Price
function getInputValue (product) {
    let productInput = document.getElementById(product + '-input');
    let productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal () {
    let phoneTotal = getInputValue('phone') * 100;
    let caseTotal = getInputValue('case') * 50;
    let subTotal = phoneTotal + caseTotal;
    let tax = subTotal / 10;
    let totalPrice = subTotal + tax;

    // Assign value to the html
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// Phone Plus
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 100, true);
});

// Phone Minus
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', 100, false);
});

// Case Plus
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', 50, true);
});

// Case Minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', 50, false);
});