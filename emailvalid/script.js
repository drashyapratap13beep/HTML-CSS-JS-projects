console.log("Hello, World!");

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "modi",
    "email": "modi@amitsgmail.com",
    "score": 0.16,
    "state": "undeliverable",
    "domain": "amitsgmail.com",
    "reason": "invalid_mx",
    "mx_found": false,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "modi@gmail.com",
    "format_valid": true
}

const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("username");
const resultContainer = document.getElementById("resultcont");

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailPattern.test(email.trim());
}

function showResult(message, isValid) {
    resultContainer.innerHTML = `
        <div class="result-box ${isValid ? "success" : "error"}">${message}</div>
    `;
}

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
        showResult("Please enter an email address.", false);
        return;
    }

    if (!isValidEmail(email)) {
        showResult("Invalid email format. Please try again.", false);
        return;
    }

    showResult(`"${email}" is a valid email address.`, true);
});

