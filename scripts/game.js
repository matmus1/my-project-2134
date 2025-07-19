function startSolo() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "block";
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

