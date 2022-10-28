
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// const link = document.querySelector("a"); 자주가는 사이트

function onLoginSumit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("usernmae", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");

}



loginForm.addEventListener("submit", onLoginSumit);
