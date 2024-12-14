// Function to get correct ordinal suffix
function getOrdinalSuffix(number) {
    const j = number % 10;
    const k = number % 100;
    
    if (j == 1 && k != 11) {
        return number + "st";
    }
    if (j == 2 && k != 12) {
        return number + "nd";
    }
    if (j == 3 && k != 13) {
        return number + "rd";
    }
    return number + "th";
}

// Function to generate a random pick
function generatePick(genres, services) {
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const randomService = services[Math.floor(Math.random() * services.length)];
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    
    return `Try watching the ${getOrdinalSuffix(randomNumber)} ${randomGenre} movie you find on ${randomService}!`;
}

document.getElementById('continueButton').addEventListener('click', () => {
    const selectedGenres = Array.from(document.querySelectorAll('#genres input:checked'))
        .map(checkbox => checkbox.value);

    if (selectedGenres.length === 0) {
        alert('Please select at least one genre!');
        return;
    }

    // Hide step 1 and show step 2
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
});

document.getElementById('pickButton').addEventListener('click', () => {
    // Get selected genres
    const selectedGenres = Array.from(document.querySelectorAll('#genres input:checked'))
        .map(checkbox => checkbox.value);

    // Get selected streaming services
    const selectedServices = Array.from(document.querySelectorAll('#streaming input:checked'))
        .map(checkbox => checkbox.value);

    // Check if user has selected at least one streaming service
    if (selectedServices.length === 0) {
        alert('Please select at least one streaming service!');
        return;
    }

    // Hide main content
    document.getElementById('mainContent').classList.add('hidden');
    
    // Show and update result
    const resultElement = document.getElementById('result');
    const resultTextElement = document.getElementById('resultText');
    
    resultTextElement.textContent = generatePick(selectedGenres, selectedServices);
    resultElement.classList.remove('hidden');
});

// Add shuffle functionality
document.getElementById('shuffleButton').addEventListener('click', () => {
    const selectedGenres = Array.from(document.querySelectorAll('#genres input:checked'))
        .map(checkbox => checkbox.value);
    const selectedServices = Array.from(document.querySelectorAll('#streaming input:checked'))
        .map(checkbox => checkbox.value);
    
    const resultTextElement = document.getElementById('resultText');
    resultTextElement.textContent = generatePick(selectedGenres, selectedServices);
});

document.getElementById('startOverButton').addEventListener('click', () => {
    // Clear all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset to initial state
    document.getElementById('result').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
}); 