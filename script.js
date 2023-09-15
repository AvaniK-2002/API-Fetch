// Function to close the login pop-up
function closeLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'none';
}

// Function to display a loading message
function showLoadingMessage() {
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.textContent = 'Loading data...';
}

// Function to display a success message
function showSuccessMessage(message) {
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
}

// Function to display an error message
function showErrorMessage(error) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = `Error: ${error.message}`;
}

// Function to fetch and display data from an API
function fetchData() {
    showLoadingMessage(); // Show loading message while fetching data

    fetch('https://example.com/api/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process and display the fetched data
            const dataElement = document.getElementById('data');
            dataElement.textContent = data.message;
            showSuccessMessage('Data loaded successfully.');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            showErrorMessage(error);
        });
}

// Attach the fetchData function to an event, like a button click
document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('.explore-btn');
    exploreButton.addEventListener('click', fetchData);
});
// Function to display a pop-up message
function displayMessage(message) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000); // Remove the message after 3 seconds (adjust as needed)
}

// Function to fetch and display data from an API
function fetchData() {
    // Assuming you are fetching data from an API here
    // You can add your API fetch logic here
    // For this example, we will simulate a fetch with a setTimeout
    setTimeout(() => {
        const message = 'Data fetched successfully!';
        displayMessage(message);
    }, 1000); // Simulate a 1-second delay (adjust as needed)
}

// Attach the fetchData function to the "explore" button click event
document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('.explore-btn');
    exploreButton.addEventListener('click', fetchData);
});
