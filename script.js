var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var middle = canvas.width / 2;
ctx.textAlign = "right";
var ch = new Array();

function on_off() {
    if (canvas.style.backgroundColor == "black") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ch = "";
        canvas.style.backgroundColor = "grey";
        canvas.value = "on";
    } else {
        canvas.style.backgroundColor = "black";
        canvas.value = "off";
    }
}

function supprimer_tout() {
    ch = new Array();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeText("", canvas.width - 10, canvas.height - 10);
}

function affiche_value(id) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var b = document.getElementById(id);
    ch += b.value;
    ctx.strokeText(ch, canvas.width - 10, canvas.height - 10);
}
