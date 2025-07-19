let isLoggedIn = false;

function toggleLogin() {}

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
    alert("Konto utworzone!");
    switchToLogin();
}

function showScreen(screenId) {
    document.getElementById('menu').style.display = 'none';

    const allScreens = document.querySelectorAll('.game-screen');
    allScreens.forEach(screen => screen.style.display = 'none');

    document.getElementById(screenId).style.display = 'block';
}

function goBack() {
    const allScreens = document.querySelectorAll('.game-screen');
    allScreens.forEach(screen => screen.style.display = 'none');

    document.getElementById('menu').style.display = 'block';
}

function toggleLicense(event) {
    event.preventDefault();
    const license = document.getElementById("licenseText");
    license.classList.toggle("visible");
}

function startSolo() {
    alert('Solo mode selected!');
}

function startMulti() {
    alert('Multiplayer mode selected!');
}

function startCreateArmy() {
    alert('Create Army selected!');
}

function startCreateProfile() {
    alert('Create Profile selected!');
}

function startEdite() {
    alert('Edit Profile selected!');
}

function startStats() {
    alert('Stats selected!');
}

function startGraphics() {
    alert('Graphics settings!');
}

function startAudio() {
    alert('Audio settings!');
}

function startGameplay() {
    alert('Gameplay settings!');
}
