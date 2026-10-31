function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine -> balance
function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log("Current Balance: ", Number(balance));
    return Number(balance);
}

// machine value -> set Balance
function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine id > hide all > show id
function showOnly(id) {
    // console.log('Show only clicked')
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');

    // sobai ke hide kore dao
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');

    // hidden class ta remove
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}