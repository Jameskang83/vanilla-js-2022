
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const resetBtnClick = document.querySelector("#logout");
const editName = document.querySelector("#modify");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const newUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, newUsername);
    paintGreetings(newUsername);
}

function handleWriting() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function handleRenaming(event) {
    greeting.classList.add(HIDDEN_CLASSNAME);
    editName.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    handleWriting();
}

function paintGreetings(username) {
    greeting.innerText = `${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    editName.classList.remove(HIDDEN_CLASSNAME);
    editName.addEventListener("click", handleRenaming);
    
    resetBtnClick.classList.remove(HIDDEN_CLASSNAME);

    function reset() {
        if (
          confirm(
            "Do you want to reset?\nAll your data will be removed."
          )
        ) {
          localStorage.clear();
          window.location.reload();
        } else {
          return;
        }
      }
      resetBtnClick.addEventListener("click", reset);

    // function logOut() {
    //     localStorage.removeItem(USERNAME_KEY);
    //     localStorage.removeItem(TODOS_KEY);
    //     loginForm.classList.remove(HIDDEN_CLASSNAME);
    //     greeting.classList.add(HIDDEN_CLASSNAME);
    //     editName.classList.add(HIDDEN_CLASSNAME);
    //     resetBtnClick.classList.add(HIDDEN_CLASSNAME);
    // }
    // resetBtnClick.addEventListener("click", logOut);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    handleWriting();
} else {
    paintGreetings(savedUsername);
}




