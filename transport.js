var ctx = document.getElementById('canvas1').getContext('2d');
var cW = ctx.canvas.width  , cH = ctx.canvas.height ;

let band1 = new Band(0, cH - 80, 0);
let band2 = new Band(0, 0, 1);

// vytvorenie objektov podla ich konstruktorov, ktore sa budu hybat
let electron1 = new Dot(80, cH - 20, 0);
let electron2 = new Dot(130, cH - 20, 0);
let hole1 = new Dot(80, 20, 1);
let hole2 = new Dot(130, 20, 1);
let line1 = new Line(0,0)
let line2 = new Line(0,1)

//vykreslenie objektov na canvas a ich inicializacia
function draw(ctx) {
    band2.draw(ctx);
    band1.draw(ctx);
    electron2.draw(ctx);
    electron2.travel = cH - 70;
    electron1.draw(ctx);
    electron1.travel = cH - 70;
    hole1.draw(ctx);
    hole2.draw(ctx);
    line1.draw(ctx);
    line2.draw(ctx);
}

//vykreslenie objektov na canvas
function draw_in_the_end(ctx) {
    electron2.x = 130;
    electron1.x = 80;
    hole1.x = 80;
    hole2.x = 130;
    band2.draw(ctx);
    band1.draw(ctx);
    hole1.draw(ctx);
    hole2.draw(ctx);
    electron2.draw(ctx);
    electron1.draw(ctx);
    line1.draw(ctx);
    line2.draw(ctx);

}

//vykreslenie na obrazovku
draw(ctx);

///////////////////////////////////////////////////////////

//funkcia, ktora vykresli elektrony a diery pri pohybe
function draw_moving(ctx) {
    draw(ctx);
    electron1.draw(ctx);
    electron2.draw(ctx);
    hole1.draw(ctx);
    hole2.draw(ctx);
}

//generovanie na onClick (generovanie)
function move() {
    var ctx = document.getElementById('canvas1').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    document.getElementById("animate1").disabled = true;
    //document.getElementById("animate1").disabled = true;
    var pos = 0;
    var count = cW - 80;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos == count) {
            clearInterval(id);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_in_the_end(ctx);
            document.getElementById("animate1").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_moving(ctx);
            electron1.transportation_right_left();
            electron2.transportation_right_left();
            hole1.transportation_right_left();
            hole2.transportation_right_left();
        }
    }
}

//rekombinacia na onClick (rekombinacia)
function moveBack() {
    var ctx = document.getElementById('canvas1').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    document.getElementById("animateBack1").disabled = true;
    document.getElementById("animate1").disabled = true;
    var pos = 0;
    var count = cH - 40 + 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (pos == count) {
            clearInterval(id);
            draw_in_the_end(ctx);
            document.getElementById("animate1").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_moving(ctx);
            electron1.transportationBack();
            electron2.transportationBack();
        }
    }
}