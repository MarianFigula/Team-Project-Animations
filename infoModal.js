// Get the modal for Intrinsic Semiconductor
var modal = document.getElementById("myModal");

// Get the info icon for Intrinsic Semiconductor
var infoIcon = document.querySelector(".info-icon");

// When the user clicks on the icon, open the modal for Intrinsic Semiconductor
infoIcon.addEventListener("click", function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal for Intrinsic Semiconductor
var span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it for Intrinsic Semiconductor
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Get the modal for Extrinsic Semiconductor
var modal2 = document.getElementById("myModal2");

// Get the info icon for Extrinsic Semiconductor
var infoIcon2 = document.querySelector("#div_canvas2 .info-icon");

// When the user clicks on the icon, open the modal for Extrinsic Semiconductor
infoIcon2.addEventListener("click", function() {
    modal2.style.display = "block";
});

// When the user clicks on <span> (x), close the modal for Extrinsic Semiconductor
var span2 = document.getElementsByClassName("close")[1]; // Note: Adjust index to match the appropriate close button
span2.addEventListener("click", function() {
    modal2.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it for Extrinsic Semiconductor
window.addEventListener("click", function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
});