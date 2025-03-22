// Function to handle Play button click
function Play() {
    alert("Play..."); // Replace with actual game logic
}

// Function to handle ODB button click
function ODB() {
    alert("Opening ODB...");
}

// Function to handle Profile button click
function Profile() {
    alert("Opening Profile...");
}

// Function to handle Supporters button click and show supporters section
function Supporters() {
    const supportersSection = document.getElementById('Supporters');
    const backBtn = document.getElementById('back-btn');
    
    // Show the supporters section
    document.querySelector('.menu').classList.add('hidden');
    supportersSection.classList.remove('hidden');
    
    // When Back button is clicked
    backBtn.addEventListener('click', function() {
        supportersSection.classList.add('hidden'); // Hide the supporters section
        document.querySelector('.menu').classList.remove('hidden'); // Show the menu again
    });
}

// Adding event listeners to the buttons
document.getElementById('supporters-btn').addEventListener('click', Supporters);

// If needed, add event listeners to other buttons here
document.getElementById('play-btn').addEventListener('click', Play);
document.getElementById('odb-btn').addEventListener('click', ODB);
document.getElementById('profile-btn').addEventListener('click', Profile);

    document.querySelector('.option-container').classList.remove('hidden'); // Show the main buttons again
});
}
