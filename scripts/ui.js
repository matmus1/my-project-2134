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
   
    const allScreens = document.querySelectorAll('.game-screen');
    allScreens.forEach(screen => screen.style.display = 'none');

    const menu = document.getElementById('menu');
    if (menu) menu.style.display = 'none';

    const navbar = document.querySelector('nav.navbar');
    if (navbar) navbar.style.display = 'none';

    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) loginBtn.style.display = 'none';

    const gameScreen = document.getElementById('gameScreen');
    if (gameScreen) {
        gameScreen.style.display = 'none';
        gameScreen.innerHTML = ''; // usuwa przyciski: solo, multi, back
    }

    document.querySelectorAll('h1, h2, button, .logo, .nav-left, .nav-right').forEach(el => {
        el.style.display = 'none';
    });

    const canvas = document.getElementById('gameCanvas');
    if (canvas) canvas.style.display = 'block';

    const pauseMenu = document.getElementById('pauseMenu');
    if (pauseMenu) pauseMenu.style.display = 'none';

    if (typeof gameLoop === "function") {
        gameLoop();
    }
}

function resumeGame() {
    document.getElementById('pauseMenu').style.display = 'none';
}

function backToMainMenu() {
    document.getElementById('pauseMenu').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const pauseMenu = document.getElementById("pauseMenu");
        const canvas = document.getElementById("gameCanvas");
        if (pauseMenu.style.display === "block") {
            pauseMenu.style.display = "none";
            canvas.style.display = "block";
        } else {
            pauseMenu.style.display = "block";
            canvas.style.display = "none";
        }
    }
});

function returnToMainMenu() {
    document.getElementById("pauseMenu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "none";
    document.getElementById("menu").style.display = "block";

    const screens = document.querySelectorAll(".game-screen");
    screens.forEach((screen) => (screen.style.display = "none"));
}


