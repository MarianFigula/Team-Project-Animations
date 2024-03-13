// Get the modal
var modal = document.getElementById("myModal");

// Get the info icon
var infoIcon = document.querySelector(".info-icon");

// When the user clicks on the icon, open the modal
infoIcon.addEventListener("click", function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});