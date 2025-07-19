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
    document.getElementById('menu').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'block';
    document.getElementById('pauseMenu').style.display = 'none';

    if (typeof gameLoop === "function") {
        gameLoop(); // jeśli masz gameLoop
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

