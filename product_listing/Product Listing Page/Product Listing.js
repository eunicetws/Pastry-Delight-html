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