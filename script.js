var canvas = document.getElementById("canvas");
var bouton = document.getElementsByClassName("bouton");
function on_off() {
    if (canvas.style.backgroundColor == "black") {
        canvas.style.backgroundColor = "grey";
        canvas.value = "on";
    } else {
        canvas.style.backgroundColor = "black";
        canvas.value = "off";
    }
}

function affiche_value() {}
