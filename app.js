
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


// const link = document.querySelector("a"); 자주가는 사이트

function onLoginSumit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");

}



loginForm.addEventListener("submit", onLoginSumit);
