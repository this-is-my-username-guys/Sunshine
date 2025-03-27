const correctPassword = "sunshine"; // Change this to the actual password

function checkPassword() {
    const input = document.getElementById("password").value;
    const loginBox = document.querySelector(".login-box");
    const messageBox = document.getElementById("message");

    loginBox.style.opacity = "0";
    setTimeout(() => {
        loginBox.classList.add("hidden");
        messageBox.classList.remove("hidden");

        if (input.toLowerCase() === correctPassword) {
            showMessage("Yes, that's right", () => showMessage("You are", () => showMainContent()));
        } else {
            showMessage(`No, you are not ${input}`, () => showMessage("You are", () => showMainContent()));
        }
    }, 1000);
}

function showMessage(text, callback) {
    const messageBox = document.getElementById("message");
    messageBox.innerText = text;
    messageBox.style.opacity = "1";

    setTimeout(() => {
        messageBox.style.opacity = "0";
        setTimeout(callback, 1000);
    }, 2000);
}

// Redirects to hey.html instead of replacing content
function showMainContent() {
    window.location.href = "hey.html";
}
