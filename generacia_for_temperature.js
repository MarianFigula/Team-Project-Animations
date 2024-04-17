var ctx = document.getElementById('canvas1').getContext('2d');
var cW = ctx.canvas.width, cH = ctx.canvas.height;
// premenna na zabranenie kreslenia dier pocas pohybu prvych dvoch elektronov
var get_rid_of_drawing_holes_3 = 0
let band1 = new Band(0, cH - 80, 0);
let band2 = new Band(0, 0, 1);

// vytvorenie objektov podla ich konstruktorov, ktore sa budu hybat
let electron1 = new Dot(80, 60, 0);
let electron2 = new Dot(130, 60, 0);
let hole1 = new Dot(80, 60, 1);
let hole2 = new Dot(130, 60, 1);

//vykreslenie objektov na canvas
function draw(ctx) {
    band2.draw(ctx);
    band1.draw(ctx);
}

//vykreslenie na obrazovku
draw(ctx);

///////////////////////////////////////////////////////////

//funkcia, ktora vykresli elektrony a diery pri pohybe
function draw_moving(ctx) {
    draw(ctx);
    electron1.draw(ctx);
    hole1.draw(ctx);
    if(get_rid_of_drawing_holes_3 > cH - 120){
        electron2.draw(ctx);
        hole2.draw(ctx);
    }
}
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//generovanie na onClick (generovanie)
async function move() {

    console.log("Button clicked!");

    await delay(1500);

    console.log("Delayed function execution!");

    var ctx = document.getElementById('canvas1').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    //document.getElementById("animateBack1").disabled = true;
    //document.getElementById("animate1").disabled = true;
    var pos = 0;
    var count = cH - 120;
    var count4 = count * 2;
    var id = setInterval(frame, 25);

    function frame() {
        //if(get_rid_of_drawing_holes_3 > cH - 120){
        //    id = setInterval(frame, 20);
        //}
        //mozno sem zaviest nejaky delay pre synchronizaciu
        if (pos == count4) {
            clearInterval(id);
            //document.getElementById("animateBack1").disabled = false;
        } else {
            pos++;
            get_rid_of_drawing_holes_3++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_moving(ctx);
            if (pos < count ){
                //cestuje prvy elektron , teplomer ukazuje 200 (v donor a akceptor je nacasovanie s tretim elektronom)
                document.getElementById("thermometer5KContainer").style.display = "none";
                document.getElementById("thermometer200KContainer").style.display = "flex";
                electron1.transportation();
            }else if(pos < count + 179){
                //cestuje druhy elektron , teplomer ukazuje 300 (v donor a akceptor je nacasovanie so stvrtym elektronom)
                document.getElementById("thermometer200KContainer").style.display = "none";
                document.getElementById("thermometer300KContainer").style.display = "flex";
                electron2.transportation();
            }
            //electron2.transportation();
            //hole1.transportation();
            //hole2.transportation();
        }
    }


}

//rekombinacia na onClick (rekombinacia)
function moveBack() {
    var ctx = document.getElementById('canvas1').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    //document.getElementById("animateBack1").disabled = true;
    //document.getElementById("animate1").disabled = true;
    var pos = 0;
    var count = cH - 40 + 1;
    var id = setInterval(frame, 6);

    function frame() {
        if (pos == count - 80) {
            get_rid_of_drawing_holes_3 = 0;
            clearInterval(id);
            draw(ctx);
            //document.getElementById("animate1").disabled = false;
        } else {
            pos++;
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            draw_moving(ctx);
            electron1.transportationBack();
            electron2.transportationBack();
        }
    }

}
