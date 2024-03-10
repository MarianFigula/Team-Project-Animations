var ctx = document.getElementById('canvas2').getContext('2d');
var cW = ctx.canvas.width, cH = ctx.canvas.height;

// vytvorenie objektov podla ich konstruktorov, ktore sa budu hybat
let electron3 = new Dot(80, cH - 20, 0);
let electron4 = new Dot(178, cH - 20, 0);
let electron5 = new Dot(228, cH - 20, 0);
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
    donor1.drawWhileMoving(ctx);
    donor2.drawWhileMoving(ctx);
    ctx.lineWidth = "1";
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText("E", 0, 110);
    ctx.font = "12px Arial";
    ctx.fillText("D", 9, 113);
    electron3.draw(ctx);
    electron4.draw(ctx);
    electron5.draw(ctx);
    hole3.draw(ctx);
    line1.draw(ctx);
    line2.draw(ctx);
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
    electron3.x = 80;
    electron4.x = 178;
    electron5.x = 228;
    electron4.draw(ctx);
    electron5.draw(ctx);
    electron3.draw(ctx);
    hole3.x = 80;
    hole3.draw(ctx);
}

//generovanie na onclick
function move2() {
    var ctx = document.getElementById('canvas2').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    document.getElementById("animate2").disabled = true;
    //document.getElementById("animate2").disabled = true;
    var pos = 0;
    var count = cW;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos == count) {
            clearInterval(id);
            draw_while_moving_end2(ctx)
            document.getElementById("animate2").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_while_moving2(ctx);
            electron3.transportation_right_left();
            electron4.transportation_right_left();
            electron5.transportation_right_left();
            hole3.transportation_right_left();
        }
    }
}

