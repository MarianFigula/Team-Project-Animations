function changeLanguage() {
    // Fetch the translations from the JSON file
    fetch('translations.json')
        .then(response => response.json())
        .then(data => {
            // Get the selected language from the select element
            const selectedLanguage = document.getElementById('languageSelect').value;

            // Store the selected language in localStorage
            localStorage.setItem('selectedLanguage', selectedLanguage);

            // Fetch the translation object for the selected language
            const translation = data[selectedLanguage];

            // Get all elements with data-i18n attribute
            const elements = document.querySelectorAll('[data-i18n]');

            // Iterate over elements and update text content based on translation
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translation[key]) {
                    element.textContent = translation[key];
                }
            });
        })
        .catch(error => console.error('Error fetching translations:', error));
}

// Function to set the language on page load
function setLanguageOnLoad() {
    // Retrieve the selected language from localStorage
    const selectedLanguage = localStorage.getItem('selectedLanguage');

    // Set the selected language in the dropdown
    if (selectedLanguage) {
        document.getElementById('languageSelect').value = selectedLanguage;
    }

    changeLanguage();
}

// Call setLanguageOnLoad when the page loads
window.addEventListener('load', setLanguageOnLoad);