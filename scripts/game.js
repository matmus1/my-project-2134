// --- GLOBALNE ZMIENNE ---
let currentResolution = { width: window.innerWidth, height: window.innerHeight };
let canvas, ctx, animationFrameId;
let keys = {};
let player = { x: 100, y: 100, radius: 40, speed: 5 };
let soldierImage = new Image();
soldierImage.src = 'assets/units/nareszcie.svg';
let gameRunning = false;

// --- EVENT LISTENERY GLOBALNE ---
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    if (e.key === "Escape") togglePauseMenu();
});
window.addEventListener("keyup", (e) => keys[e.key] = false);
window.addEventListener('resize', resizeCanvas);

// --- FUNKCJE ---
function resizeCanvas() {
    canvas = document.getElementById('gameCanvas');
    canvas.width = currentResolution.width;
    canvas.height = currentResolution.height;
    canvas.style.width = currentResolution.width + 'px';
    canvas.style.height = currentResolution.height + 'px';
}

// --- START SOLO ---
function startSolo() {
    if (gameRunning) return;

    document.getElementById("menu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "block";

    resizeCanvas();

    // reset stanu gry
    keys = {};
    player.x = 100;
    player.y = 100;

    if (soldierImage.complete) {
        initSoloGame();
    } else {
        soldierImage.onload = initSoloGame;
    }
}

// --- INICJALIZACJA GRY ---
function initSoloGame() {
    console.log('Solo game launched!');
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    gameRunning = true;
    gameLoop();
}

// --- PĘTLA GRY ---
function gameLoop() {
    updatePlayer();
    draw();
    animationFrameId = requestAnimationFrame(gameLoop);
}

function updatePlayer() {
    if (keys["ArrowUp"] || keys["w"]) player.y -= player.speed;
    if (keys["ArrowDown"] || keys["s"]) player.y += player.speed;
    if (keys["ArrowLeft"] || keys["a"]) player.x -= player.speed;
    if (keys["ArrowRight"] || keys["d"]) player.x += player.speed;

    player.x = Math.max(player.radius, Math.min(canvas.width - player.radius, player.x));
    player.y = Math.max(player.radius, Math.min(canvas.height - player.radius, player.y));
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(soldierImage, player.x - player.radius, player.y - player.radius, player.radius*2, player.radius*2);
}

// --- PAUZA ---
function togglePauseMenu() {
    if (!gameRunning) return;
    const pauseMenu = document.getElementById("pauseMenu");
    const isHidden = getComputedStyle(pauseMenu).display === "none";
    pauseMenu.style.display = isHidden ? "flex" : "none";

    if (isHidden) {
        cancelAnimationFrame(animationFrameId); // wstrzymaj grę
    } else {
        gameLoop(); // wznowienie gry
    }
}

function resumeGame() {
    const pauseMenu = document.getElementById("pauseMenu");
    pauseMenu.style.display = "none";
    gameLoop();
}

// --- POWRÓT DO MENU ---
function returnToMainMenu() {
    if (!gameRunning) return;

    document.getElementById("pauseMenu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "none";
    document.getElementById("menu").style.display = "block";

    cancelAnimationFrame(animationFrameId);
    gameRunning = false;

    // reset stanu gry
    keys = {};
    player.x = 100;
    player.y = 100;
}
