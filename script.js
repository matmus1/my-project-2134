function startGame() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    alert("Game Starting..."); // Replace with actual game logic
}

function goBack() {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function startODB() {
    alert("Opening ODB...");
}

function startProfile() {
    alert("Opening Profile...");
}

function startSettings() {
    alert("Opening Settings...");
}

function startSupporters() {
    alert("Opening Supporters...");
}
