let isLoggedIn = false;

function toggleLogin() {
    const btn = document.getElementById("loginBtn");
    isLoggedIn = !isLoggedIn;
    btn.textContent = isLoggedIn ? "Logout" : "Login";
    alert(isLoggedIn ? "Logged in!" : "Logged out!");
}

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
    alert("You have logged in successfully!");
    toggleLoginModal();
    document.getElementById("loginBtn").innerText = "Logout";
}

function register() {
    alert("Konto utworzone!");
    switchToLogin();
}


// Show selected screen and hide others
function showScreen(screenId) {
    document.getElementById('menu').style.display = 'none';

    const allScreens = document.querySelectorAll('.game-screen');
    allScreens.forEach(screen => screen.style.display = 'none');

    document.getElementById(screenId).style.display = 'block';
}

// Return to main menu
function goBack() {
    const allScreens = document.querySelectorAll('.game-screen');
    allScreens.forEach(screen => screen.style.display = 'none');

    document.getElementById('menu').style.display = 'block';
}

// Toggle license text visibility
function toggleLicense(event) {
    event.preventDefault();
    const license = document.getElementById("licenseText");
    license.classList.toggle("visible");
}
