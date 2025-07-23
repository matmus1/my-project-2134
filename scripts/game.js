let currentResolution = { width: window.innerWidth, height: window.innerHeight };

function resizeCanvas() {
    const canvas = document.getElementById('gameCanvas');
    canvas.width = currentResolution.width;
    canvas.height = currentResolution.height;
    canvas.style.width = currentResolution.width + 'px';
    canvas.style.height = currentResolution.height + 'px';
}

function startSolo() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "block";
    resizeCanvas();
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

function startEdit() {
    alert('Edit Profile selected!');
}

function startStats() {
    alert('Stats selected!');
}

function startGraphics() {
    hideAllGameScreens();
    document.getElementById('graphicsSettings').style.display = 'block';
}

function closeGraphicsSettings() {
    document.getElementById('graphicsSettings').style.display = 'none';
    document.getElementById('settingsScreen').style.display = 'block';
}

function applyResolution() {
    const select = document.getElementById('resolutionSelect');
    const [width, height] = select.value.split('x').map(Number);
    currentResolution = { width, height };
    resizeCanvas();
}

function startAudio() {
    alert('Audio settings!');
}

function startGameplay() {
    alert('Gameplay settings!');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const pauseMenu = document.getElementById('pauseMenu');
        const isVisible = pauseMenu.style.display === 'flex';
        pauseMenu.style.display = isVisible ? 'none' : 'flex';
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        togglePauseMenu();
    }
});

function togglePauseMenu() {
    const pauseMenu = document.getElementById("pauseMenu");
    pauseMenu.style.display = pauseMenu.style.display === "none" ? "block" : "none";
}

function resumeGame() {
    document.getElementById("pauseMenu").style.display = "none";
}

function returnToMainMenu() {
    document.getElementById("pauseMenu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function hideAllGameScreens() {
    const screens = document.querySelectorAll('.game-screen');
    screens.forEach(screen => screen.style.display = 'none');
}

window.addEventListener('resize', resizeCanvas);
