// https://www.w3schools.com/howto/howto_js_tabs.asp
function openTheme(evt, theme) {
    let i, content, tablinks;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("themes");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(theme).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("default").click();

//https://www.w3schools.com/howto/howto_js_sort_table.asp
// if type == 0, sort by letter, if type == 1, sort by number
function sorting(n, type) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("t01");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if(type == 0)
            {
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch= true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else {
                if (dir == "asc") {
                    if (Number(x.innerHTML.toLowerCase()) > Number(y.innerHTML.toLowerCase())) {
                        shouldSwitch= true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (Number(x.innerHTML.toLowerCase()) < Number(y.innerHTML.toLowerCase())) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}


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
