// scripts/auth.js

let isLoggedIn = false;

function toggleLoginModal() {
    const modal = document.getElementById("loginModal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function switchToRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function switchToLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function login() {
    isLoggedIn = true;
    alert("You have logged in successfully!");
    toggleLoginModal();
    document.getElementById("loginBtn").innerText = "Logout";
}

function register() {
    alert("Your account created sucesfull!");
    switchToLogin();
}
