/**
 * Add red color for all h3 tags
 */

let h3Tag = document.getElementsByTagName('h3');
for (const h3 of h3Tag) {
    h3.style.color = "red";
}

/**
 * Add background color for Backpack title
 */

document.getElementById('backpack-title').style.backgroundColor = "black";

/**
 * Add border radius 30px for all cards
 */

let cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = "30px";
}

/**
 * Add event handler to the click me button
 */

function clickBtn () {
    console.log('Successfully Clicked');
}

/**
 * Select all Buy Now button and removed Any one
 */

let buttons = document.getElementsByClassName('buy-now-button');
let removeBtn = buttons[4];
removeBtn.addEventListener('click', () => {
    removeBtn.style.display = "none";
});

/**
 * If matches the email then button will be enabled
 */

let inputField = document.getElementById('inputEmail');
inputField.addEventListener('keyup', function() {
    let submitBtn = document.getElementById('submitBtn');
    if (inputField.value == "email") {
        submitBtn.removeAttribute("disabled");
    }
    else {
        submitBtn.setAttribute("disabled", true);
    }
});

/**
 * Mouse over image will be changed
 */

let imgChange = document.getElementById('image-change');

imgChange.addEventListener('mouseover', () => {
    imgChange.src = 'images/shoes/shoe-2.png';
});

imgChange.addEventListener('mouseout', () => {
    imgChange.src = 'images/shoes/shoe-1.png';
});

/**
 * ondblclick background will be changed
 */

function doubleClick () {
    document.getElementById('subscribe').style.backgroundColor = 'hotpink';
}