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

function hideAllGameScreens() {
    const screens = document.querySelectorAll('.game-screen');
    screens.forEach(screen => screen.style.display = 'none');
}

function resizeCanvas() {
    const canvas = document.getElementById('gameCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function initSoloGame() {
    console.log('Gra solo uruchomiona!');
}

function startSolo() {
    document.getElementById('menu').style.display = 'none';
    hideAllGameScreens();
    const canvas = document.getElementById('gameCanvas');
    canvas.style.display = 'block';
    resizeCanvas();
    initSoloGame();
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

window.addEventListener('resize', resizeCanvas);

function startGraphics() {
    hideAllGameScreens();
    document.getElementById('graphicsSettings').style.display = 'block';
}

function closeGraphicsSettings() {
    document.getElementById('graphicsSettings').style.display = 'none';
    showScreen('settingsScreen');
}

function applyResolution() {
    const select = document.getElementById('resolutionSelect');
    const [width, height] = select.value.split('x').map(Number);
    const canvas = document.getElementById('gameCanvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
}

