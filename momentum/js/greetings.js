const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
 event.preventDefault();
 loginForm.classList.add(HIDDEN_CLASSNAME);
 const username = loginInput.value;
 localStorage.setItem(USERNAME_KEY, username);

 paintGreeting(username);

}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function checkUser() {
    if(savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreeting(savedUsername)
    }
}

loginForm.addEventListener("submit", onLoginSubmit);
checkUser();



const logOutButton = document.querySelector(".logout-btn");

function storageRemove() {
    localStorage.clear();
    window.location.reload();
}

logOutButton.addEventListener("click", storageRemove);