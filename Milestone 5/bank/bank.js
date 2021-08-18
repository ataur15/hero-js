/**
 * Selectors
 */

let emailField = document.getElementById('user-email');
let passField = document.getElementById('user-password');
let submitBtn = document.getElementById('submit-btn');
let deposit = document.getElementById('total-deposit');
let withdraw = document.getElementById('total-withdraw');
let balance = document.getElementById('total-balance');
let depositInput = document.getElementById('deposit-input');
let depositBtn = document.getElementById('deposit-button');
let withdrawInput = document.getElementById('withdraw-input');
let withdrawBtn = document.getElementById('withdraw-button');

/**
 * Functions
 */

// Login Submit button handler
if (submitBtn) {
    submitBtn.addEventListener('click', function (e) {
        let userEmail = emailField.value;
        let userPass = passField.value;

        if (userEmail == 'user@gmail.com' && userPass == 'secret') {
            window.location.href = "banking.html"
        }
        e.preventDefault();
    });
}

// Deposit button handler
if (depositBtn) {
    depositBtn.addEventListener('click', function () {
        if (depositInput.value != "") {
            let previousDeposit = parseFloat(deposit.innerText);
            let currentDeposit =  parseFloat(depositInput.value);
            let depositTotal = previousDeposit + currentDeposit;
            deposit.innerText = depositTotal;
            depositInput.value = "";

            // update balance
            let previousBalance = parseFloat(balance.innerText);
            let totalBalance = previousBalance + currentDeposit;
            balance.innerText = totalBalance;
        }
    });
}

// Withdraw button handler
if (withdrawBtn) {
    withdrawBtn.addEventListener('click', function () {
        if (withdrawInput.value != "") {
            let previousWithdraw = parseFloat(withdraw.innerText);
            let currentWithdraw =  parseFloat(withdrawInput.value);
            let withdrawTotal = previousWithdraw + currentWithdraw;
            withdraw.innerText = withdrawTotal;
            withdrawInput.value = "";

            // update balance
            let previousBalance = parseFloat(balance.innerText);
            let totalBalance = previousBalance - currentWithdraw;
            balance.innerText = totalBalance;
        }
    });
}
