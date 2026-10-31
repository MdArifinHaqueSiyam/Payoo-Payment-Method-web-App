document.getElementById('cashout-btn').addEventListener('click', function () {
    // 1-get the agent number and validate
    const cashoutNumber = getValueFromInput('cashout-number');

    if (cashoutNumber.length != 11) {
        alert("Invalid Number");
        return;
    }

    // 2- get the cashout amount and validate
    const cashoutAmount = getValueFromInput('cashout-amount');

    // 3- get the current balance
    // const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText;
    // console.log(balance);

    const currentBalance = getBalance();

    // 4- calculate the current balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    // 5- get the pin and verify
    const cashoutPin = getValueFromInput('cashout-pin');

    if (cashoutPin == '9811') {
        alert('cashout successfull');
        // document.getElementById('balance').innerText = newBalance;
        setBalance(newBalance);
    } else {
        alert('Invalid Pin');
        return;
    }
})



// document.getElementById('cashout-btn').addEventListener('click', function () {
//     // console.log('withdraw')
//     // 1-get the agent number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;

//     if (cashoutNumber.length != 11) {
//         alert("Invalid Agent Number");
//         return;
//     }
//     // 2-get the amount, validate, convert to number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     // 3-get the current Balance, validate, convert to number
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
    
//     // 4-Calculate current Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
    
//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }
//     console.log("new balance: ", newBalance);
//     // 5-Get the pin and verify

//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if (pin == '9811') {
//         // 5.1- true:: show an alert > set balance
//         alert("cashout successfull");
//         balanceElement.innerText = newBalance;
//     } else {
//         // 5.2- false:: show an error alert > return
//         alert("Invalid Pin");
//         return;
//     }
//     console.log(pin)
// });