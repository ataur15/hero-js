// Get random pin
function getPin () {
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('Got 3 digit and calling again', pin);
        return getPin();
    }
}

// Display pin
function generatePin () {
    let pin = getPin();
    let displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
}

// Display Key number
document.getElementById('keypad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    let inputField = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            inputField.value = "";
        }
        //console.log(number);
    }
    else {
        let previousNumber = inputField.value;
        let newNumber = previousNumber + number;
        inputField.value = newNumber;
        //console.log(newNumber);
    }
});

// Verify Pin
function verifyPin () {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    let success = document.getElementById('notify-success');
    let fail = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        fail.style.display = 'block'
        success.style.display = 'none';
    }
}
