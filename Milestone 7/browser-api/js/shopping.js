/**
 * Add item
 */

const addItem = () => {
    const inputField = document.getElementById('product-name');
    const itemName = inputField.value;
    if (! itemName) {
        return;
    }
    // display product
    displayProduct(itemName);
    // add product to the localstorage
    addProductToCart(itemName);
    // clear data
    inputField.value = "";
}

/**
 * Display product to the ul
 * @param {*} name
 */

const displayProduct = (name) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerHTML = name;
    ul.appendChild(li);
}

/**
 * Get cart items from the local storage
 */

const getCart = () => {
    const cartItems = localStorage.getItem('cart');
    let cartObj;
    if (cartItems) {
        cartObj = JSON.parse(cartItems);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

/**
 * add product to the local storage
 * @param {*} product
 */

const addProductToCart = product => {
    const cartItems = getCart();
    // console.log(cartItems);
    cartItems[product] = 1;
    const cartStringified = JSON.stringify(cartItems);
    localStorage.setItem('cart', cartStringified);
    console.log(cartItems);
}

/**
 * Display local storage data to the ul
 * @returns
 */

 const displayLocalStorageData = () => {
    const cartItems = getCart();
    for (const key in cartItems) {
        displayProduct(key);
    }
}
displayLocalStorageData();

/**
 * Place order
 */

const placeOrder = () => {
    document.getElementById('products').textContent = "";
    localStorage.removeItem('cart');
}