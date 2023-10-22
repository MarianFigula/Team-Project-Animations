var ctx = document.getElementById('canvas3').getContext('2d');
var cW = ctx.canvas.width, cH = ctx.canvas.height;

// vytvorenie objektov podla ich konstruktorov, ktore sa budu hybat
let electron6 = new Dot(80, 20, 0);
let electron7 = new Dot(178, 20, 0);
let electron8 = new Dot(228, 20, 0);
let hole4 = new Dot(80, 20, 1);
let hole5 = new Dot(178, 20, 1);
let hole6 = new Dot(228, 20, 1);
let acceptor1 = new Orbital(160,  cH - 120, 1);
let acceptor2 = new Orbital(210, cH - 120, 1);

function draw3(ctx) {
    ctx.setLineDash([15, 5]);
    ctx.strokeStyle = '#cdcdcd';
    ctx.moveTo(23, cH - 100);
    ctx.lineTo(cW, cH - 100);
    ctx.stroke();
    ctx.setLineDash([]);
    band1.draw(ctx);
    band2.draw(ctx);
    acceptor1.draw(ctx);
    acceptor2.draw(ctx);
    ctx.lineWidth = "1";
    ctx.fillStyle = "#000000";
    ctx.font = "14px Arial";
    ctx.fillText("E", 0, cH - 100);
    ctx.font = "12px Arial";
    ctx.fillText("A", 9, cH - 95);
}

draw3(ctx);

///////////////////////////////////////////////////////////

//funkcia, ktora vykresli elektrony a diery pri generacii
function draw_while_moving3(ctx) {
    ctx.setLineDash([0, 0]);
    draw3(ctx);
    acceptor1.draw(ctx);
    acceptor2.draw(ctx);
    electron6.draw(ctx);
    electron7.draw(ctx);
    electron8.draw(ctx);
    hole4.draw(ctx);
    hole5.draw(ctx);
    hole6.draw(ctx);
}

//funkcia, ktora vykresli elektrony a diery pri rekombinacii
function draw_while_moving_middle3(ctx) {
    ctx.setLineDash([0, 0]);
    draw3(ctx);
    acceptor1.drawWhileMoving(ctx);
    acceptor2.drawWhileMoving(ctx);
    electron6.draw(ctx);
    hole4.draw(ctx);
    hole5.draw(ctx);
    hole6.draw(ctx);
}

//funkcia, ktora vykresli elektrony a diery pri rekombinacii
function draw_while_moving_end3(ctx) {
    draw3(ctx);
    electron6.draw(ctx);
    hole4.draw(ctx);
}

//generovanie na onclick
function move3() {
    var ctx = document.getElementById('canvas3').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    document.getElementById("animateBack3").disabled = true;
    document.getElementById("animate3").disabled = true;
    var pos = 0;
    var count = cH - 40;
    var id = setInterval(frame, 6);

    function frame() {
        if (pos == count) {
            clearInterval(id);
            document.getElementById("animateBack3").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            if(pos < 85)
            {
                draw_while_moving3(ctx);
                electron7.transportation();
                electron8.transportation();
            } else { draw_while_moving_middle3(ctx); }
            electron6.transportation();
            hole4.transportation();
            hole5.transportation();
            hole6.transportation();
        }
    }
}

function moveBack3() {
    var ctx = document.getElementById('canvas3').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    document.getElementById("animateBack3").disabled = true;
    document.getElementById("animate3").disabled = true;
    var pos = 0;
    var count = cH - 40 + 1;
    var id = setInterval(frame, 6);

    function frame() {
        if (pos == count) {
            clearInterval(id);
            draw3(ctx);
            document.getElementById("animate3").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            if(pos < 85) {
                draw_while_moving3(ctx);
                electron7.transportationBack();
                electron8.transportationBack();
            } else {
                draw_while_moving_end3(ctx);
            }
            electron6.transportationBack();
        }
    }
}

