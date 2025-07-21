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
   
    const screens = document.querySelectorAll('.game-screen, .menu');
    screens.forEach(screen => screen.style.display = 'none');

    const canvas = document.getElementById('gameCanvas');
    canvas.style.display = 'block';

    if (typeof initGame === 'function') {
      initGame();
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


