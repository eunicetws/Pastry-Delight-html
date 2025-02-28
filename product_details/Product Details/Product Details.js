//Show diff price with diff size
function showPrice(trigger) {
    var price = trigger.getAttribute('data-price');
    document.getElementById("price").innerHTML = "RM" + price;
}

//Count remaining characters
function countCharacters() {
    var maxLength = 250;
    var currentLength = document.getElementById("Message-Textbox").value.length;
    var remaining = maxLength - currentLength;
    document.getElementById("charCount").textContent = remaining;
}

// Set minimum delivery date to next day
document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    var nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    var nextTwoDays = new Date(currentDate);
    nextTwoDays.setDate(currentDate.getDate() + 2);

    // Format the next day as "yyyy-mm-dd"
    var formattedNextDay = nextDay.toISOString().split('T')[0];
    var formattedNextTwoDays = nextTwoDays.toISOString().split('T')[0];

    // Get the input elements
    var deliverDateInput = document.getElementById("deliver-date");
    var deliverDateCakeInput = document.getElementById("deliver-date-cake");

    // Set the minimum date for the input fields
    if (deliverDateInput) {
        deliverDateInput.setAttribute("min", formattedNextDay);
    } 
    
    if (deliverDateCakeInput) {
        deliverDateCakeInput.setAttribute("min", formattedNextTwoDays);
    }
});

// Increment and Decrement quantity buttons
document.addEventListener('DOMContentLoaded', function() {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const quantityInput = document.getElementById('quantity');

    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
});

// Star rating functionality
document.addEventListener("DOMContentLoaded", function() {
    var starCheckboxes = document.querySelectorAll("input[name='review']");

    starCheckboxes.forEach(function(checkbox, index) {
        checkbox.addEventListener("change", function() {
            starCheckboxes.forEach(function(cb, i) {
                if (i <= index) {
                    cb.checked = true;
                } else {
                    cb.checked = false;
                }
            });
        });
    });
});


function toggleSearch() {
    var searchBar = document.getElementById("overlay-search-bar");
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
    }
}
// Function to handle website search
function searchWebsite(event) {
    event.preventDefault(); 
    
    var query = document.getElementById("search-input").value.trim().toLowerCase();
    
    if (query !== "") {
     
        alert("Searching for: " + query);
    }
}

// Add an event listener to trigger searchWebsite function when Enter key is pressed
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            searchWebsite(event);
        }
    });
});
