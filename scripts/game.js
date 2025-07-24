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
    hideAllGameScreens();
    document.getElementById("gameCanvas").style.display = "block";
    document.querySelector(".navbar")?.classList.add("hidden");
    document.querySelector("footer")?.classList.add("hidden");

    resizeCanvas();
    initSoloGame();
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

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        togglePauseMenu();
    }
});

function togglePauseMenu() {
    const pauseMenu = document.getElementById("pauseMenu");
    const isHidden = getComputedStyle(pauseMenu).display === "none";
    pauseMenu.style.display = isHidden ? "block" : "none";
}

function resumeGame() {
    document.getElementById("pauseMenu").style.display = "none";
}

function returnToMainMenu() {
    document.getElementById("pauseMenu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "none";
    document.getElementById("menu").style.display = "block";

    document.querySelector(".navbar")?.classList.remove("hidden");
    document.querySelector("footer")?.classList.remove("hidden");

    cancelAnimationFrame(animationFrameId); // zatrzymanie gry
}


function hideAllGameScreens() {
    const screens = document.querySelectorAll('.game-screen');
    screens.forEach(screen => screen.style.display = 'none');
}

window.addEventListener('resize', resizeCanvas);

let player = {
    x: 100,
    y: 100,
    radius: 10,
    speed: 5
};

let keys = {};
let ctx;
let canvas;
let animationFrameId;

function initSoloGame() {
    console.log('Gra solo uruchomiona!');
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    window.addEventListener("keydown", (e) => keys[e.key] = true);
    window.addEventListener("keyup", (e) => keys[e.key] = false);

    gameLoop();
}

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

    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
