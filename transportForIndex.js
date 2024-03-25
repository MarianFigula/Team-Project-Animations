var ctx = document.getElementById('canvas2').getContext('2d');
var cW = ctx.canvas.width  , cH = ctx.canvas.height ;

let band3 = new Band(0, cH - 80, 0);
let band4 = new Band(0, 0, 1);

// vytvorenie objektov podla ich konstruktorov, ktore sa budu hybat
let electron3 = new Dot(80, cH - 60, 0);
let electron4 = new Dot(130, cH - 60, 0);
let hole3 = new Dot(80, 60, 1);
let hole4 = new Dot(130, 60, 1);
let line1 = new Line(0,0)
let line2 = new Line(0,1)

//vykreslenie objektov na canvas a ich inicializacia
function draw2(ctx) {
    band4.draw(ctx);
    band3.draw(ctx);
    electron4.draw(ctx);
    electron4.travel = cH - 70;
    electron3.draw(ctx);
    electron3.travel = cH - 70;
    hole4.draw(ctx);
    hole3.draw(ctx);
    line1.draw(ctx);
    line2.draw(ctx);
}

//vykreslenie objektov na canvas
function draw_in_the_end2(ctx) {
    electron4.x = 130;
    electron3.x = 80;
    hole3.x = 80;
    hole4.x = 130;
    band4.draw(ctx);
    band3.draw(ctx);
    hole3.draw(ctx);
    hole4.draw(ctx);
    electron4.draw(ctx);
    electron3.draw(ctx);
    line1.draw(ctx);
    line2.draw(ctx);

}

//vykreslenie na obrazovku
draw2(ctx);

///////////////////////////////////////////////////////////

//funkcia, ktora vykresli elektrony a diery pri pohybe
function draw_moving2(ctx) {
    draw2(ctx);
    electron3.draw(ctx);
    electron4.draw(ctx);
    hole3.draw(ctx);
    hole4.draw(ctx);
}

//generovanie na onClick (generovanie)
function move2() {
    var ctx = document.getElementById('canvas2').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    //document.getElementById("animate1").disabled = true;
    //document.getElementById("animate1").disabled = true;
    var pos = 0;
    var count = cW - 80;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos == count) {
            clearInterval(id);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_in_the_end2(ctx);
            //document.getElementById("animate1").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_moving2(ctx);
            electron3.transportation_right_left();
            electron4.transportation_right_left();
            hole3.transportation_right_left();
            hole4.transportation_right_left();
        }
    }
}

setInterval(move2, 3000);