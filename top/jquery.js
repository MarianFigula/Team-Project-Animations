$(document).ready(function () {
    var visited = sessionStorage.getItem('visited');
    if (visited == null)
    {
        document.getElementById("welcome").style = "display: block;";
        document.getElementById("main").style = "display: none;";
    } else {
        document.getElementById("welcome").style = "display: none;";
        document.getElementById("main").style = "display: block;";
    }
});

function accept() {
    document.getElementById("welcome").style = "display: none;";
    document.getElementById("main").style = "display: block;";
    sessionStorage.setItem('visited', "true");
}