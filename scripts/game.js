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
    
    if (soldierImage.complete) {
        initSoloGame();
    } else {
        soldierImage.onload = () => {
            initSoloGame();
        };
    }
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

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
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
    radius: 40,
    speed: 5
};

let keys = {};
let ctx;
let canvas;
let animationFrameId;

let soldierImage = new Image();
soldierImage.src = 'assets/units/nareszcie.svg';

function initSoloGame() {
    console.log('Solo game launched!');
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
    ctx.drawImage(soldierImage, player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
}

