var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var middle = canvas.width / 2;
ctx.textAlign = "right";
var ch = "";
var mode = 0;

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
    ch = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeText("", canvas.width - 10, canvas.height - 10);
}

function affiche_value(id) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var b = document.getElementById(id);
    ch += b.value;
    ctx.strokeText(ch, canvas.width - 10, canvas.height - 10);
}

function calculer_tout() {
    try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        res = eval(ch);
        ch = res;
        ctx.strokeText(ch, canvas.width - 10, canvas.height - 10);
    } catch {
        supprimer_tout();
    }
}

function suppr() {
    ch = ch.split("");
    ch.pop();
    ch = ch.join("");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeText(ch, canvas.width - 10, canvas.height - 10);
}

function mode_fonction() {
    if (mode == 1){
        mode = 0;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        btn = document.getElementById("mode");
        btn.textContent = "Mode Calcul";
        
    } else {
        mode = 1;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        btn = document.getElementById("mode");
        btn.textContent = "Mode Fonction";
    }
}