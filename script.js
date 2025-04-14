function startGame() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
}

function startODB() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('odbScreen').style.display = 'block';
}

function startProfile() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('profileScreen').style.display = 'block';
}

function startSettings() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('settingsScreen').style.display = 'block';
}

function startSupporters() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('supportersScreen').style.display = 'block';
}

function goBack() {
    // Hide all sections
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('odbScreen').style.display = 'none';
    document.getElementById('profileScreen').style.display = 'none';
    document.getElementById('settingsScreen').style.display = 'none';
    document.getElementById('supportersScreen').style.display = 'none';

    // Show the main menu
    document.getElementById('menu').style.display = 'block';
}

    function toggleLicense(event) {
    event.preventDefault();
    const license = document.getElementById("licenseText");
    license.classList.toggle("visible");
}
