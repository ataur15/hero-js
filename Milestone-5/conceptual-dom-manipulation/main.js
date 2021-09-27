/**
 * Selectors
 */

let div1 = document.getElementById('first');
let div2 = document.getElementById('second');
let div3 = document.getElementById('third');

let imgId = document.getElementById('art');
let desc = document.getElementById('desc');
let price = document.getElementById('price');
let freeBtn = document.getElementById('free-shipping');
let expressBtn = document.getElementById('express-shipping');
let shipping = document.getElementById('shipping');
let totalPrice = document.getElementById('total');

/**
 * Functions
 */

// Element check
function isContain (elem) {
    // console.log(elem);
    return elem.classList.contains('selected');
}

// Update total
function updateTotal () {
    totalPrice.innerText = parseInt(price.innerText) + parseInt(shipping.innerText);
    //console.log(price.innerText, shipping.innerText );
}

/**
 * Event Listener
 */

// Shipping button handler
freeBtn.addEventListener('click', () => {
    shipping.innerText = 0;
    updateTotal();

    // Selected Border
    if (!isContain(freeBtn)) {
        freeBtn.classList.add('selected')
        expressBtn.classList.remove('selected')
    }
});

expressBtn.addEventListener('click', () => {
    shipping.innerText = 30;
    updateTotal();

    // Selected Border
    if (!isContain(expressBtn)) {
        freeBtn.classList.remove('selected')
        expressBtn.classList.add('selected')
    }
});

// Image click handler
div1.addEventListener('click', function() {
    imgId.src = 'images/1.jpg';
    desc.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque";
    price.innerText = "750";
    totalPrice.innerText = price.innerText;
    updateTotal();

    // Selected Border
    if (!isContain(div1)) {
        div1.classList.add('selected')
        div2.classList.remove('selected')
        div3.classList.remove('selected')
    }

});

// Image click handler
div2.addEventListener('click', function() {
    imgId.src = 'images/2.jpg';
    desc.innerText = "Second - dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque";
    price.innerText = "550";
    totalPrice.innerText = price.innerText;
    updateTotal();

    // Selected Border
    if (!isContain(div2)) {
        div1.classList.remove('selected')
        div2.classList.add('selected')
        div3.classList.remove('selected')
    }
});

// Image click handler
div3.addEventListener('click', function() {
    imgId.src = 'images/3.jpg';
    desc.innerText = "Third - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque";
    price.innerText = "350";
    totalPrice.innerText = price.innerText;
    updateTotal();

    // Selected Border
    if (!isContain(div3)) {
        div1.classList.remove('selected')
        div2.classList.remove('selected')
        div3.classList.add('selected')
    }
});