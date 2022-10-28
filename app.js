
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a"); 자주가는 사이트

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSumit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const newUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, newUsername);
    paintGreetings(newUsername);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSumit);
} else {
    paintGreetings(savedUsername);
}