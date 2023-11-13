var ctx = document.getElementById('canvas2').getContext('2d');
var cW = ctx.canvas.width, cH = ctx.canvas.height;

// vytvorenie objektov podla ich konstruktorov, ktore sa budu hybat
let electron3 = new Dot(80, 20, 0);
let electron4 = new Dot(178, cH - 107, 0);
let electron5 = new Dot(228, cH - 107, 0);
let hole3 = new Dot(80, 20, 1);
let donor1 = new Orbital(160,  90, 0);
let donor2 = new Orbital(210, 90, 0);

function draw2(ctx) {
    ctx.setLineDash([15, 5]);
    ctx.strokeStyle = '#cdcdcd';
    ctx.moveTo(23, 100);
    ctx.lineTo(cW, 100);
    ctx.stroke();
    ctx.setLineDash([]);
    band1.draw(ctx);
    band2.draw(ctx);
    donor1.draw(ctx);
    donor2.draw(ctx);
    ctx.lineWidth = "1";
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText("E", 0, 110);
    ctx.font = "12px Arial";
    ctx.fillText("D", 9, 113);
}

draw2(ctx);

function draw_while_moving2(ctx) {
    draw2(ctx);
    donor1.drawWhileMoving(ctx);
    donor2.drawWhileMoving(ctx);
    electron3.draw(ctx);
    electron4.draw(ctx);
    electron5.draw(ctx);
    hole3.draw(ctx);
}

function draw_while_moving_end2(ctx) {
    electron4.draw(ctx);
    electron5.draw(ctx);
    draw2(ctx);
    electron3.draw(ctx);
    hole3.draw(ctx);
}

//generovanie na onclick
function move2() {
    var ctx = document.getElementById('canvas2').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    document.getElementById("animateBack2").disabled = true;
    document.getElementById("animate2").disabled = true;
    var pos = 0;
    var count = cH - 40;
    var id = setInterval(frame, 6);

    function frame() {
        if (pos == count) {
            clearInterval(id);
            document.getElementById("animateBack2").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_while_moving2(ctx);
            electron3.transportation();
            electron4.transportation();
            electron5.transportation();
            hole3.transportation();
        }
    }
}

function moveBack2() {
    var ctx = document.getElementById('canvas2').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    document.getElementById("animateBack2").disabled = true;
    document.getElementById("animate2").disabled = true;
    var pos = 0;
    var count = cH - 40 + 1;
    var id = setInterval(frame, 6);

    function frame() {
        if (pos == count) {
            clearInterval(id);
            draw2(ctx);
            document.getElementById("animate2").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            if(pos > 90)
            {
                draw_while_moving_end2(ctx);
            } else { draw_while_moving2(ctx); }
            electron3.transportationBack();
            electron4.transportationBack();
            electron5.transportationBack();
        }
    }
}
