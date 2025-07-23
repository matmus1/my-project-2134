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

let animationFrameId;
let canvas, ctx;
let x = 0;
let direction = 1;

function initSoloGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    x = 0;
    direction = 1;

    if(animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    gameLoop();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, canvas.height / 2 - 25, 50, 50);

    x += 2 * direction;
    if (x + 50 > canvas.width || x < 0) {
        direction *= -1;
    }

    animationFrameId = requestAnimationFrame(gameLoop);
}

function startSolo() {
    document.getElementById('menu').style.display = 'none';
    hideAllGameScreens();

    const canvasEl = document.getElementById('gameCanvas');
    canvasEl.style.display = 'block';

    document.getElementById('pauseMenu').style.display = 'none';

    initSoloGame();
}

function resumeGame() {
    document.getElementById('pauseMenu').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'block';
    gameLoop();
}

function returnToMainMenu() {
    document.getElementById('pauseMenu').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'none';
    document.getElementById('menu').style.display = 'block';

    hideAllGameScreens();

    if(animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const pauseMenu = document.getElementById("pauseMenu");
        const canvasEl = document.getElementById("gameCanvas");

        if (pauseMenu.style.display === "block") {
            pauseMenu.style.display = "none";
            canvasEl.style.display = "block";
            gameLoop();
        } else if (canvasEl.style.display === "block") {
            pauseMenu.style.display = "block";
            canvasEl.style.display = "none";

            if(animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    }
});
