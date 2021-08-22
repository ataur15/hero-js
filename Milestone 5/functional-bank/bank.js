/**
 * Selectors
 */

let depositBtn = document.getElementById('deposit-button');
let withdrawBtn = document.getElementById('withdraw-button');
let previousBalance = document.getElementById('total-balance');

/**
 * Functions
 */

// Current Amount of deposit and withdraw
function getInputId (inputId) {
    let inputField = document.getElementById(inputId);
    let currentAmount = parseFloat(inputField.value);
    inputField.value = ""
    return currentAmount;
}

// Update deposit amount and withdraw amount
function updateAmount (newAmount, inputId) {
    let getId = document.getElementById(inputId);
    let previousAmount = parseFloat(getId.innerText);
    let totalAmount = previousAmount + newAmount;
    getId.innerText = totalAmount;
}

// Update total balance
function updateBalance (amount, isAdd) {
    //debugger;
    let previousBalanceAmount = parseFloat(previousBalance.innerText);
    if (isAdd == true) {
        let totalBalance = previousBalanceAmount + amount;
        previousBalance.innerText = totalBalance;
    }else {
        let totalBalance = previousBalanceAmount - amount;
        previousBalance.innerText = totalBalance;
    }
}

/**
 * Event listener
 */

// Deposit button handler
depositBtn.addEventListener('click', function() {
    let currentDepositeAmount = getInputId('deposit-input');
    if (currentDepositeAmount > 0) {
        // Update deposite amount
        updateAmount(currentDepositeAmount, 'total-deposit');
        // Update Balance
        updateBalance(currentDepositeAmount, true);
    }
});

// Withdraw button handler
withdrawBtn.addEventListener('click', function() {
    let previousBalanceAmount = parseFloat(previousBalance.innerText);
    let currentWithdrawAmount = getInputId('withdraw-input');
    if (currentWithdrawAmount > 0 && currentWithdrawAmount < previousBalanceAmount) {
        // Update withdraw amount
        updateAmount(currentWithdrawAmount, 'total-withdraw');
        // Update Balance
        updateBalance(currentWithdrawAmount, false);
    }
});
