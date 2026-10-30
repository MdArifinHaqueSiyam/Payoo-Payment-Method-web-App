console.log('login connected');

document.getElementById('login-btn').addEventListener('click', function () {
    // console.log('logged in successfully')
    // 1- get the mobile number
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // 2- get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    // 3- match number and pin
    if (contactNumber == '01560064827' && pin == '9811') {
        // 3.1- true:::>> alert> hompage
        alert("Login Success");

        // window.location.replace("./home.html");
        window.location.assign("./home.html");
    } else {
        // 3.2- false:::>> alert> return
        alert('Login Failed');
        return;
    }
    // 
})