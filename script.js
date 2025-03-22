function Play() {
    alert("Play..."); // Replace with actual game logic
}
function ODB() {
    alert("Opening ODB...");
}
function Profile() {
    alert("Opening Profile...");
}
function Supporters() {
    alert("Opening Supporters...");
    // Get elements
const supportersBtn = document.getElementById('supporters-btn');
const supportersSection = document.getElementById('supporters-section');
const backBtn = document.getElementById('back-btn');

// When Supporters button is clicked
supportersBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = '#001f3d';  // Ensure background stays navy
    supportersSection.classList.remove('hidden'); // Show the supporters section
    document.querySelector('.option-container').classList.add('hidden'); // Hide the main buttons
});

// When Back button is clicked
backBtn.addEventListener('click', function() {
    supportersSection.classList.add('hidden'); // Hide the supporters section
    document.querySelector('.option-container').classList.remove('hidden'); // Show the main buttons again
});
}
