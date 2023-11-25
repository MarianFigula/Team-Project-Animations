const backgroundDiv = document.getElementById("schema")
const graph = document.getElementById('graf')
const jump = document.getElementById('jump')
const frequency= document.getElementById('frequency')

const description = document.getElementById("text")


const napatie = document.getElementById('napatie');
const amp = document.getElementById("ampFaza")
const porovnanie = document.getElementById("porovnanie")

const width = 1000
const height = 600

jump.innerHTML=""

const select1 = document.getElementById("inputGroupSelect01")
const select2 = document.getElementById("inputGroupSelect02")
const select3 = document.getElementById("inputGroupSelect03")

select3.style.display = "none"

function makeInvisible(){
    backgroundDiv.innerHTML = ""
    graph.innerHTML = ""
    jump.innerHTML = ""
    frequency.innerHTML = ""
    }
const freqEq = {
    family: "Roboto",
    size: 27,
    fill: "white",
    weight: "bold",
    style: "italic"
}
const myFont = {
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}

const freqEqSmall = {
    family: "Roboto",
    size: 23,
    fill: "white",
    weight: "bold",
}

const myFont2 = {
    family: "Roboto",
    size: 25,
    fill: "white",
    weight: "bold",
}
const italicFont = {
    family: "Roboto",
    size: 25,
    fill: "white",
    style: "italic",
}

const fontForGraphsItalic = {
    family: "Roboto",
    size: 30,
    fill: "white",
    weight: "bold",
    style: "italic"
}

const fontForGraphs = {
    family: "Roboto",
    size: 30,
    fill: "white",
    weight: "bold",
}

const underForGraphs = {
    family: "Roboto",
    size: 25,
    fill: "red",
    weight: "bold",
}

select1.addEventListener("change", derOrInt)
select2.addEventListener("change", buttonsEvent)
select3.addEventListener("change", buttonsEvent)

napatie.addEventListener("click", jumper)

function jumper(){
    buttonsEvent()
    let selected = select1.value;
    frequency.innerHTML = "";
    if(selected==='derivator'){
        f_jump_HF_g()
    }
    if(selected==='integrator'){
        f_jump_DF_g()
    }
}

amp.addEventListener("click", ampFaza)
function ampFaza(){
    makeInvisible()
    let selected = select1.value;
    if(selected==='derivator'){

        der_freq(true,2,true)
    }
    if(selected==='integrator'){
        der_freq(false,2,true)
    }
}

function derOrInt(){
    let selected = select1.value;
    if(selected==='derivator'){
        select3.style.display = "none"
        select2.style.display = "inline"
    }
    if(selected==='integrator'){
        select2.style.display = "none"
        select3.style.display = "inline"
    }
    buttonsEvent()
}

porovnanie.addEventListener("click",()=>{
    makeInvisible()
    let selectedV1 = select1.value;
    if(selectedV1==='derivator'){
        drawGraphF(true,1)
        drawGraphF(true,2)
        drawGraphF(true,3)
    }
    if(selectedV1==='integrator'){
        drawGraphF(false,1)
        drawGraphF(false,2)
        drawGraphF(false,3)
    }

})

function buttonsEvent(){
    makeInvisible()
    let selectedV1 = select1.value
    let selectedV2 = select2.value
    let selectedV3 = select3.value

    description.innerHTML = ""

    if(selectedV1==='derivator'){
        drawDerivator()
        if(selectedV2 ==='22pF'){
            /*
            description.innerHTML+=("<p> <b>Hodnota odporu </b> </p>")
            description.innerHTML+=("<p> R = 1,8 kΩ </b></p>")
            description.innerHTML+=("<p> <b>Časová konštanta filtra </b></p>")
            description.innerHTML+=("<p> τ = 39,6 μs </p>")
            description.innerHTML+=("<p> <b>Medzná frekvencia filtra</b> </p>")
            description.innerHTML+=("<p> fc = 4,019 kHz </p>")
            description.innerHTML+=("<p> <b>Frekvencia vstupného signálu</b> </p>")
            description.innerHTML+=("<p> fsin = 4,019 kHz </p>")
            description.innerHTML+=("<p> fsin = fc </p>")
            */

            drawGraphF(true,1)
            der_freq(true,1,false)
        }
        if(selectedV2 ==='047pF'){
            /*
            description.innerHTML+=("<p> <b>Hodnota odporu </b> </p>")
            description.innerHTML+=("<p> R = 1,8 kΩ </b></p>")
            description.innerHTML+=("<p> <b>Časová konštanta filtra </b></p>")
            description.innerHTML+=("<p> τ = 0,846 μs </p>")
            description.innerHTML+=("<p> <b>Medzná frekvencia filtra</b> </p>")
            description.innerHTML+=("<p> fc = 188,126 kHz </p>")
            description.innerHTML+=("<p> <b>Frekvencia vstupného signálu</b> </p>")
            description.innerHTML+=("<p> fsin = 4,019 kHz </p>")
            description.innerHTML+=("<p> fsin < fc </p>")

             */
            drawGraphF(true,2)
            der_freq(true,2,false)
        }
        if(selectedV2 ==='0,1μs'){
            /*
            description.innerHTML+=("<p> <b>Hodnota odporu </b> </p>")
            description.innerHTML+=("<p> R = 1,8 kΩ </b></p>")
            description.innerHTML+=("<p> <b>Časová konštanta filtra </b></p>")
            description.innerHTML+=("<p> τ = 0,18 ms </p>")
            description.innerHTML+=("<p> <b>Medzná frekvencia filtra</b> </p>")
            description.innerHTML+=("<p> fc = 884,194 kHz </p>")
            description.innerHTML+=("<p> <b>Frekvencia vstupného signálu</b> </p>")
            description.innerHTML+=("<p> fsin = 4,019 kHz </p>")
            description.innerHTML+=("<p> fsin > fc </p>")

             */
            drawGraphF(true,3)
            der_freq(true,3,false)
        }
    }
    if(selectedV1==='integrator'){
        drawIntegrator()
        if(selectedV3 ==='6,8pF'){
            drawGraphF(false,1)
            der_freq(false,1,false)
        }
        if(selectedV3 ==='22pF'){
            drawGraphF(false,2)
            der_freq(false,2,false)
        }
        if(selectedV3 ==='1μF'){
            drawGraphF(false,1)
            der_freq(false,3,false)
        }
    }

}


let drawDer, canvasDer;
function drawDerivator(){
    backgroundDiv.innerHTML = "";
    drawDer = SVG()
        .addTo(backgroundDiv)
        .size(400,250)
        .viewbox(0, 0, 600, 450)
    //canvasDer = drawDer.group().flip('y', height / 2)
    canvasDer = drawDer.group()
    canvasDer.text("Derivátor - Hornopriepustný frekvenčný RC filter").move(60,10).font(myFont2).fill("black")

    canvasDer.line(80, 100, 250, 100).stroke({width:1, color: 'black' });
    canvasDer.line(270, 100, 580, 100).stroke({width:1, color: 'black' });
    canvasDer.line(250, 60, 250, 140).stroke({width:1, color: 'black' });
    canvasDer.line(270, 60, 270, 140).stroke({width:1, color: 'black' });
    canvasDer.circle(20).center(80, 100).stroke({width:1, color: 'black' }).fill("white");
    canvasDer.circle(20).center(580, 100).stroke({width:1, color: 'black' }).fill("white");;
    canvasDer.text("C").move(225,40).font(myFont)

    canvasDer.line(80, 350, 580, 350).stroke({width:1, color: 'black' });
    canvasDer.circle(20).center(80, 350).stroke({width:1, color: 'black' }).fill("white");;
    canvasDer.circle(20).center(580, 350).stroke({width:1, color: 'black' }).fill("white");;


    //225 je stred 225 -50 =175 225 +50 =275
    canvasDer.line(390, 100, 390, 185).stroke({width:1, color: 'black' });
    canvasDer.line(390, 265, 390, 350).stroke({width:1, color: 'black' });
    canvasDer.circle(10).center(390, 100);
    canvasDer.circle(10).center(390, 350);
//320 100
    canvasDer.rect(40,80).move(370,185).fill("none").stroke({width:1, color: "#24252A"})
    canvasDer.text("R").move(420,225).font(myFont)
    canvasDer.animate(1000).opacity(1);

    canvasDer.line(60, 150, 60, 300).stroke({width:1, color: 'black' });
    canvasDer.polyline([[60,300], [65,290], [55,290]])

    canvasDer.line(600, 150, 600, 300).stroke({width:1, color: 'black' });
    canvasDer.polyline([[600,300], [605,290], [595,290]])
    canvasDer.text("U").move(610,225).font(italicFont).fill("blue")
    canvasDer.text("out").move(626,230).font(({
        family: "Roboto",
        size: 18,
        fill: "blue",
        weight: "bold",
    }));
    canvasDer.text("U").move(10,225).font(italicFont).fill("green")
    canvasDer.text("in").move(26,230).font({
        family: "Roboto",
        size: 18,
        fill: "green",
        weight: "bold",
    })
}


function drawIntegrator(){
    backgroundDiv.innerHTML = "";
    drawDer = SVG()
        .addTo(backgroundDiv)
        .size(400,250)
        .viewbox(0, -10, 600, 450)
    //canvasDer = drawDer.group().flip('y', height / 2)

    canvasDer = drawDer.group()
    canvasDer.text("Integrátor - Dolnopriepustný frekvenčný RC filter").move(60,10).font(myFont2).fill("black")

    canvasDer.line(80, 100, 175, 100).stroke({width:1, color: 'black' });
    canvasDer.line(255, 100, 580, 100).stroke({width:1, color: 'black' });
    canvasDer.rect(80,40).move(175,80).fill("none").stroke({width:1, color: "#24252A"})

    canvasDer.circle(20).center(80, 100).stroke({width:1, color: 'black' }).fill("white");;
    canvasDer.circle(20).center(580, 100).stroke({width:1, color: 'black' }).fill("white");;
    canvasDer.text("R").move(210,50).font(myFont)

    canvasDer.line(80, 350, 580, 350).stroke({width:1, color: 'black' });
    canvasDer.circle(20).center(80, 350).stroke({width:1, color: 'black' }).fill("white");;
    canvasDer.circle(20).center(580, 350).stroke({width:1, color: 'black' }).fill("white");;


    //225 je stred 225 -50 =175 225 +50 =275
    canvasDer.line(390, 100, 390, 215).stroke({width:1, color: 'black' });
    canvasDer.line(390, 235, 390, 350).stroke({width:1, color: 'black' });
    canvasDer.circle(10).center(390, 100);
    canvasDer.circle(10).center(390, 350);
    canvasDer.line(350, 215, 430, 215).stroke({width:1, color: 'black' });
    canvasDer.line(350, 235, 430, 235).stroke({width:1, color: 'black' });
//320 100

    canvasDer.text("C").move(440,200).font(myFont)
    canvasDer.animate(1000).opacity(1);

    canvasDer.line(60, 150, 60, 300).stroke({width:1, color: 'black' });
    canvasDer.polyline([[60,300], [65,290], [55,290]])

    canvasDer.line(600, 150, 600, 300).stroke({width:1, color: 'black' });
    canvasDer.polyline([[600,300], [605,290], [595,290]])
    canvasDer.text("U").move(610,225).font(italicFont).fill("blue")
    canvasDer.text("out").move(626,230).font(({
        family: "Roboto",
        size: 18,
        fill: "blue",
        weight: "bold",
    }));
    canvasDer.text("U").move(10,225).font(italicFont).fill("green")
    canvasDer.text("in").move(26,230).font({
        family: "Roboto",
        size: 18,
        fill: "green",
        weight: "bold",
    })
}

drawDerivator()


const labelFont = {
    family: "Roboto",
    size: 25,
    fill: "white",
}
function drawGraphF(der,which){
    let drawGraph, canvasGraph;
    drawGraph = SVG()
        .addTo(graph)
        .size(400, 350)
        .viewbox(-20, 0, 1000, 800)


    canvasGraph = drawGraph.group()

    //main graph
    canvasGraph.line(80, 100, 80, 610).stroke({width:1.5, color: 'black' });
    canvasGraph.line(70, 600, 880, 600).stroke({width:1.5, color: 'black' });
    canvasGraph.line(80, 100, 880, 100).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasGraph.line(80, 350, 880, 350).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasGraph.line(880, 100, 880, 600).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');

    //marking on x-axis
    canvasGraph.line(160, 596, 160, 604).stroke({width:1.5, color: 'black' });
    canvasGraph.line(240, 594, 240, 606).stroke({width:1.5, color: 'black' });

    canvasGraph.line(320, 596, 320, 604).stroke({width:1.5, color: 'black' });
    canvasGraph.line(400, 594, 400, 606).stroke({width:1.5, color: 'black' });

    canvasGraph.line(480, 596, 480, 604).stroke({width:1.5, color: 'black' });
    canvasGraph.line(560, 594, 560, 606).stroke({width:1.5, color: 'black' });

    canvasGraph.line(640, 596, 640, 604).stroke({width:1.5, color: 'black' });
    canvasGraph.line(720, 594, 720, 606).stroke({width:1.5, color: 'black' });

    canvasGraph.line(800, 596, 800, 604).stroke({width:1.5, color: 'black' });
    canvasGraph.line(880, 594, 880, 606).stroke({width:1.5, color: 'black' });

    //labels on x-axis
    canvasGraph.text("0").move(60,615).font(labelFont).fill("black")
    canvasGraph.text("100μ").move(220,615).font(labelFont).fill("black")
    canvasGraph.text("200μ").move(380,615).font(labelFont).fill("black")
    canvasGraph.text("300μ").move(540,612).font(labelFont).fill("black")
    canvasGraph.text("400μ").move(700,612).font(labelFont).fill("black")
    canvasGraph.text("500μ").move(860,612).font(labelFont).fill("black")
    canvasGraph.text("t").move(400,650).font(italicFont).fill("black") //t italicom uout modrym
    canvasGraph.text("(s)").move(417,650).font(myFont2).fill("black")

    let txt = canvasGraph.text("Napätie (V)").move(-60,340).font(labelFont).fill("black")
    txt.transform({rotate:270})

    //marking on y-axis
    canvasGraph.line(75, 100, 85, 100).stroke({width:1.5, color: 'black' });
    canvasGraph.line(75, 350, 85, 350).stroke({width:1.5, color: 'black' });

    //labels on y-axis
    canvasGraph.text("1").move(40,90).font(labelFont).fill("black")
    canvasGraph.text("0").move(40,340).font(labelFont).fill("black")
    canvasGraph.text("-1").move(30,590).font(labelFont).fill("black")

    if(der){
        canvasGraph.text("HF").move(10,10).font(myFont2).fill("black")
        if(which ==1){
            d_22pF(canvasGraph)

        }
        if(which ==2){
            d_0_47pf(canvasGraph)

        }
        if(which ==3){
            d_0_1s(canvasGraph)

        }
    }else{
        canvasGraph.text("DF").move(10,10).font(myFont2).fill("black")
        if(which ==1){
            i_6_8(canvasGraph)

        }
        if(which ==2){
            i_22(canvasGraph)

        }
        if(which ==3){
            i_1(canvasGraph)

        }
    }
    legend(canvasGraph)
}

drawGraphF(true,1)





//width = 100, height 200
function whiteOutRight(canvasGraph){
    canvasGraph.rect(1150,500).move(885, 100).fill("white");
}

function whiteOutLeft(canvasGraph){
    canvasGraph.rect(375,350).move(-300, 200).fill("white");
    canvasGraph.text("0").move(40,340).font(labelFont).fill("black")
    let txt = canvasGraph.text("Napätie (V)").move(-60,340).font(labelFont).fill("black")
    txt.transform({rotate:270})
}

function legend(canvasGraph){
    canvasGraph.text("Uin ").move(760,120).font(fontForGraphsItalic).fill("black")
    canvasGraph.text("Uout ").move(760,160).font(fontForGraphsItalic).fill("black")
    canvasGraph.text("(V)").move(820,120).font(fontForGraphs).fill("black")
    canvasGraph.text("(V)").move(835,160).font(fontForGraphs).fill("black")

    canvasGraph.line(700,128, 750,128).stroke({width:5, color: "red"});
    canvasGraph.line(700,168, 750,168).stroke({width:5, color: "blue"});
}



function d_22pF(canvasGraph){
    //red

    canvasGraph.path("M 80,350 Q 181,-150 282,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 282,350 Q 383, 850 484,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 484,350 Q 585, -150 686,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 686,350 Q 787, 850 888,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});

    //blue
    canvasGraph.path("M 18,350 Q 119, 0 220,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 220,350 Q 321, 700 422,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 422,350 Q 523, 0 624,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 624,350 Q 725, 700 826,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 826,350 Q 927, 0 1025,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    whiteOutRight(canvasGraph)
    whiteOutLeft(canvasGraph)

    canvasGraph.text("f").move(230,50).font(fontForGraphs).fill("red")
    canvasGraph.text("sin").move(240,60).font(underForGraphs)
    canvasGraph.text("= f").move(283,50).font(fontForGraphs).fill("red")
    canvasGraph.text("c").move(315,60).font(underForGraphs)

    canvasGraph.text("C = 22 pF").move(500,50).font(myFont2).fill("black")
    canvasGraph.text("R = 1,8 kΩ").move(700,50).font(myFont2).fill("black")


}


function d_0_47pf(canvasGraph){
    //red
    canvasGraph.path("M 80,350 Q 181,-150 282,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 282,350 Q 383, 850 484,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 484,350 Q 585, -150 686,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 686,350 Q 787, 850 888,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});

   // blue
    canvasGraph.path("M -42,350 Q 59,340 160,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 160,350 Q 261,360 362,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 362,350 Q 463,340 564,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 564,350 Q 665,360 766,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 766,350 Q 867,340 968,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    whiteOutRight(canvasGraph)
    whiteOutLeft(canvasGraph)

    canvasGraph.text("f").move(230,50).font(fontForGraphs).fill("red")
    canvasGraph.text("sin").move(240,60).font(underForGraphs)
    canvasGraph.text("< f").move(283,50).font(fontForGraphs).fill("red")
    canvasGraph.text("c").move(315,60).font(underForGraphs)

    canvasGraph.text("C = 0,47 pF").move(500,50).font(myFont2).fill("black")
    canvasGraph.text("R = 1,8 kΩ").move(700,50).font(myFont2).fill("black")
}

function d_0_1s(canvasGraph){
    //red
    canvasGraph.path("M 68,350 Q 169,-120 270,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 270,350 Q 371, 820 472,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 472,350 Q 573, -120 674,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 674,350 Q 775, 820 876,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});

    //blue
    canvasGraph.path("M 80,350 Q 181,-150 282,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 282,350 Q 383, 850 484,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 484,350 Q 585, -150 686,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 686,350 Q 787, 850 888,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});

    whiteOutRight(canvasGraph)
    whiteOutLeft(canvasGraph)

    canvasGraph.text("f").move(230,50).font(fontForGraphs).fill("red")
    canvasGraph.text("sin").move(240,60).font(underForGraphs)
    canvasGraph.text("> f").move(283,50).font(fontForGraphs).fill("red")
    canvasGraph.text("c").move(315,60).font(underForGraphs)

    canvasGraph.text("C = 0,1 μF").move(500,50).font(myFont2).fill("black")
    canvasGraph.text("R = 1,8 kΩ").move(700,50).font(myFont2).fill("black")
}

function i_6_8(canvasGraph){
    canvasGraph.path("M 68,350 Q 169,-150 270,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 270,350 Q 371, 850 472,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 472,350 Q 573, -150 674,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 674,350 Q 775, 850 876,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});

    //blue
    canvasGraph.path("M 80,350 Q 181,-120 282,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 282,350 Q 383, 820 484,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 484,350 Q 585, -120 686,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 686,350 Q 787, 820 888,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    whiteOutRight(canvasGraph)
    whiteOutLeft(canvasGraph)

    canvasGraph.text("f").move(230,50).font(fontForGraphs).fill("red")
    canvasGraph.text("sin").move(240,60).font(underForGraphs)
    canvasGraph.text("< f").move(283,50).font(fontForGraphs).fill("red")
    canvasGraph.text("c").move(315,60).font(underForGraphs)

    canvasGraph.text("C = 6,8 pF").move(500,50).font(myFont2).fill("black")
    canvasGraph.text("R = 1,8 kΩ").move(700,50).font(myFont2).fill("black")
}

function i_22(canvasGraph){
    //red
    canvasGraph.path("M 80,350 Q 181,-150 282,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 282,350 Q 383, 850 484,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 484,350 Q 585, -150 686,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 686,350 Q 787, 850 888,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});

    //blue
    canvasGraph.path("M -63,350 Q 37, 700 139,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 139,350 Q 240, 0 341,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 341,350 Q 442, 700 543,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 543,350 Q 644, 0 745,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 745,350 Q 846, 700 947,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});

    whiteOutRight(canvasGraph)
    whiteOutLeft(canvasGraph)

    canvasGraph.text("f").move(230,50).font(fontForGraphs).fill("red")
    canvasGraph.text("sin").move(240,60).font(underForGraphs)
    canvasGraph.text("= f").move(283,50).font(fontForGraphs).fill("red")
    canvasGraph.text("c").move(315,60).font(underForGraphs)

    canvasGraph.text("C = 22 pF").move(500,50).font(myFont2).fill("black")
    canvasGraph.text("R = 1,8 kΩ").move(700,50).font(myFont2).fill("black")
}

function i_1(canvasGraph){
    //red
    canvasGraph.path("M 80,350 Q 181,-150 282,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 282,350 Q 383, 850 484,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 484,350 Q 585, -150 686,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});
    canvasGraph.path("M 686,350 Q 787, 850 888,350").fill('none').stroke({width:6, color: 'red', linecap: "round"});

    // blue
    canvasGraph.path("M -42,350 Q 59,360 160,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 160,350 Q 261,340 362,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 362,350 Q 463,360 564,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 564,350 Q 665,340 766,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    canvasGraph.path("M 766,350 Q 867,360 968,350").fill('none').stroke({width:6, color: 'blue', linecap: "round"});
    whiteOutRight(canvasGraph)
    whiteOutLeft(canvasGraph)

    canvasGraph.text("f").move(230,50).font(fontForGraphs).fill("red")
    canvasGraph.text("sin").move(240,60).font(underForGraphs)
    canvasGraph.text("> f").move(283,50).font(fontForGraphs).fill("red")
    canvasGraph.text("c").move(315,60).font(underForGraphs)

    canvasGraph.text("C = 0,1 μF").move(500,50).font(myFont2).fill("black")
    canvasGraph.text("R = 1,8 kΩ").move(700,50).font(myFont2).fill("black")
}

const biggerFont = {
    family: "Roboto",
    size: 40,
    fill: "white"
}

const biggerItalic = {
    family: "Roboto",
    size: 50,
    fill: "white",
    style: "italic"
}


let drawJump, canvasJump;

function whiteOutRightJump(){
    canvasJump.rect(110, 305).move(1302, 575).fill("white");
}

const biggerLegend = {
    family: "Roboto",
    size: 50,
    fill: "white",
    weight: "bold"
}

const biggerLegendItalic = {
    family: "Roboto",
    size: 50,
    fill: "white",
    weight: "bold",
    style: "italic"
}

const biggerSign = {
    family: "Roboto",
    size: 50,
    fill: "white"
}

const biggerSignItalic = {
    family: "Roboto",
    size: 50,
    fill: "white",
    style: "italic"
}

function f_jump_HF_g(){
    jump.innerHTML = "";
    drawJump = SVG()
        .addTo(jump)
        .size(400, 400)
        .viewbox(-100, 80, 1450, 1300)

    //main
    canvasJump = drawJump.group()
    f_jump_HF()

    canvasJump.line(100, 100, 100, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(90, 400, 1300, 400).stroke({width:1.5, color: 'black' });
    canvasJump.line(100, 100, 1300, 100).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(100, 250, 1300, 250).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(1300, 100, 1300, 400).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');

    //lines on x
    canvasJump.line(200, 390, 200, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(300, 390, 300, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(400, 390, 400, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(500, 390, 500, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(600, 390, 600, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(700, 390, 700, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(800, 390, 800, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(900, 390, 900, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(1000, 390, 1000, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(1100, 390, 1100, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(1200, 390, 1200, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(1300, 390, 1300, 410).stroke({width:1.5, color: 'black' })

    //labels on x-axis
    canvasJump.text("0,0").move(70,430).font(biggerFont).fill("black")
    canvasJump.text("0,2").move(270,430).font(biggerFont).fill("black")
    canvasJump.text("0,4").move(470,430).font(biggerFont).fill("black")
    canvasJump.text("0,6").move(670,430).font(biggerFont).fill("black")
    canvasJump.text("0,8").move(870,430).font(biggerFont).fill("black")
    canvasJump.text("1,0").move(1070,430).font(biggerFont).fill("black")
    canvasJump.text("1,2").move(1270,430).font(biggerFont).fill("black")

    //lines on y
    canvasJump.line(90, 250, 110, 250).stroke({width:1.5, color: 'black' });
    let tx = canvasJump.text("Uin").move(-100,250).font(biggerSignItalic).fill("black")
    tx.transform({rotate:270})
    tx = canvasJump.text("(V)").move(-100,170).font(biggerSign).fill("black")
    tx.transform({rotate:270})

    //labels on y-axis
    canvasJump.text("0,5").move(20,250).font(biggerFont).fill("black")
    canvasJump.text("1,0").move(20, 100).font(biggerFont).fill("black")

    canvasJump.text("t").move(650,480).font(biggerItalic).fill("black") //t italicom uout modrym
    canvasJump.text("(s)").move(680,480).font(biggerSign).fill("black")

    //second graph
    canvasJump.line(100, 500, 100, 1260).stroke({width:1.5, color: 'black' })
    canvasJump.line(100, 1250, 1300, 1250).stroke({width:1.5, color: 'black' })
    canvasJump.line(100, 1175, 1300, 1175).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(100, 1025, 1300, 1025).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(100, 875, 1300, 875).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(100, 725, 1300, 725).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(100, 575, 1300, 575).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');

    //lines on x
    canvasJump.line(200, 1240, 200, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(300, 1240, 300, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(400, 1240, 400, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(500, 1240, 500, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(600, 1240, 600, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(700, 1240, 700, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(800, 1240, 800, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(900, 1240, 900, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(1000, 1240, 1000, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(1100, 1240, 1100, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(1200, 1240, 1200, 1260).stroke({width:1.5, color: 'black' });
    canvasJump.line(1300, 1240, 1300, 1260).stroke({width:1.5, color: 'black' })

    //labels on x
    canvasJump.text("0,0").move(70,1285).font(biggerFont).fill("black")
    canvasJump.text("0,2").move(270,1285).font(biggerFont).fill("black")
    canvasJump.text("0,4").move(470,1285).font(biggerFont).fill("black")
    canvasJump.text("0,6").move(670,1285).font(biggerFont).fill("black")
    canvasJump.text("0,8").move(870,1285).font(biggerFont).fill("black")
    canvasJump.text("1,0").move(1070,1285).font(biggerFont).fill("black")
    canvasJump.text("1,2").move(1270,1285).font(biggerFont).fill("black")


    canvasJump.text("t").move(650,1330).font(biggerItalic).fill("black") //t italicom uout modrym
    canvasJump.text("(ms)").move(680,1330).font(biggerSign).fill("black")

    //lines on y
    canvasJump.line(90, 1175, 110, 1175).stroke({width:1.5, color: 'black' });
    canvasJump.line(90, 1025, 110, 1025).stroke({width:1.5, color: 'black' });
    canvasJump.line(90, 875, 100, 875).stroke({width:1.5, color: 'black' });
    canvasJump.line(90, 725, 110, 725).stroke({width:1.5, color: 'black' });
    canvasJump.line(90, 575, 110, 575).stroke({width:1.5, color: 'black' })

    //labels on y
    canvasJump.text("-1,0").move(20, 1175).font(biggerFont).fill("black")
    canvasJump.text("-0,5").move(20, 1025).font(biggerFont).fill("black")
    canvasJump.text("0,0").move(20, 875).font(biggerFont).fill("black")
    canvasJump.text("0,5").move(20, 725).font(biggerFont).fill("black")
    canvasJump.text("1,0").move(20, 575).font(biggerFont).fill("black")

    tx = canvasJump.text("Uout").move(-100,875).font(biggerSignItalic).fill("black")
    tx.transform({rotate:270})
    tx = canvasJump.text("(V)").move(-99,780).font(biggerSign).fill("black")
    tx.transform({rotate:270})

    //lines on both
    canvasJump.line(200, 100, 200, 1250).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(500, 100, 500, 1250).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(800, 100, 800, 1250).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(1100, 100, 1100, 1250).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');


}

function f_jump_HF(){
    //red graph


    canvasJump.path("M 100,400 L 200,400 L 205 100 L 495 100 L 500 400 L 800 400 L 805 100 L 1095 100 L 1100 400 L 1300 400")
        .fill('none').stroke({width:6, color: 'red', linecap: "round"});


    //blue graph
    canvasJump.path("M 100,875 L 200,875 L 205 590 C 205,905 305,875 505,875 L 505 1160 C 535 870 515 870 800 875 " +
        "L 805 590 C 805,905 905,875 1105,875 L 1105 1160 C 1135 870 1115 870 1410 875")
        .fill('none').stroke({width:6, color: 'blue', linecap: "round"})
    whiteOutRightJump()
    let white = canvasJump.rect(1500,1260).move(100,90).fill('white')
    white.animate(5000,800).move(1302,100)

    canvasJump.text("Odozva HF RC filtra na napäťový skok").move(130,40).font(biggerLegend).fill("black")

    canvasJump.line(1040,650, 1125,650).stroke({width:9, color: "blue"});
    canvasJump.line(1040,50, 1125,50).stroke({width:9, color: "red"});
    canvasJump.text("Uout").move(1130,650).font(biggerLegendItalic).fill("black")
    canvasJump.text("Uin").move(1130,50).font(biggerLegendItalic).fill("black")
    canvasJump.text("(V)").move(1240,650).font(biggerLegend).fill("black")
    canvasJump.text("(V)").move(1215,50).font(biggerLegend).fill("black")
}

function f_jump_DF_g(){
    jump.innerHTML = "";
    drawJump = SVG()
        .addTo(jump)
        .size(400, 400)
        .viewbox(-100, 80, 1450, 1300)

    //main
    canvasJump = drawJump.group()

    f_jump_DF()
    canvasJump.line(100, 100, 100, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(90, 400, 1300, 400).stroke({width:1.5, color: 'black' });
    canvasJump.line(100, 100, 1300, 100).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(100, 250, 1300, 250).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(1300, 100, 1300, 400).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');

    //lines on x
    canvasJump.line(200, 390, 200, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(300, 390, 300, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(400, 390, 400, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(500, 390, 500, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(600, 390, 600, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(700, 390, 700, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(800, 390, 800, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(900, 390, 900, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(1000, 390, 1000, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(1100, 390, 1100, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(1200, 390, 1200, 410).stroke({width:1.5, color: 'black' });
    canvasJump.line(1300, 390, 1300, 410).stroke({width:1.5, color: 'black' })

    //labels on x-axis
    canvasJump.text("0,0").move(70,430).font(biggerFont).fill("black")
    canvasJump.text("0,2").move(270,430).font(biggerFont).fill("black")
    canvasJump.text("0,4").move(470,430).font(biggerFont).fill("black")
    canvasJump.text("0,6").move(670,430).font(biggerFont).fill("black")
    canvasJump.text("0,8").move(870,430).font(biggerFont).fill("black")
    canvasJump.text("1,0").move(1070,430).font(biggerFont).fill("black")
    canvasJump.text("1,2").move(1270,430).font(biggerFont).fill("black")

    //lines on y
    canvasJump.line(90, 250, 110, 250).stroke({width:1.5, color: 'black' });
    let tx = canvasJump.text("Uin").move(-100,250).font(biggerSignItalic).fill("black")
    tx.transform({rotate:270})
    tx = canvasJump.text("(V)").move(-100,170).font(biggerSign).fill("black")
    tx.transform({rotate:270})

    //labels on y-axis
    canvasJump.text("0,5").move(20,250).font(biggerFont).fill("black")
    canvasJump.text("1,0").move(20, 100).font(biggerFont).fill("black")

    canvasJump.text("t").move(650,490).font(biggerItalic).fill("black") //t italicom uout modrym
    canvasJump.text("(s)").move(680,490).font(biggerSign).fill("black")

    //second graph
    canvasJump.line(100, 500, 100, 885).stroke({width:1.5, color: 'black' })
    canvasJump.line(100, 875, 1300, 875).stroke({width:1.5, color: 'black' })
    canvasJump.line(100, 725, 1300, 725).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(100, 575, 1300, 575).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');


    //lines on x
    canvasJump.line(200, 865, 200, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(300, 865, 300, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(400, 865, 400, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(500, 865, 500, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(600, 865, 600, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(700, 865, 700, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(800, 865, 800, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(900, 865, 900, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(1000, 865, 1000, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(1100, 865, 1100, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(1200, 865, 1200, 885).stroke({width:1.5, color: 'black' });
    canvasJump.line(1300, 865, 1300, 885).stroke({width:1.5, color: 'black' })

    //labels on x
    canvasJump.text("0,0").move(70,910).font(biggerFont).fill("black")
    canvasJump.text("0,2").move(270,910).font(biggerFont).fill("black")
    canvasJump.text("0,4").move(470,910).font(biggerFont).fill("black")
    canvasJump.text("0,6").move(670,910).font(biggerFont).fill("black")
    canvasJump.text("0,8").move(870,910).font(biggerFont).fill("black")
    canvasJump.text("1,0").move(1070,910).font(biggerFont).fill("black")
    canvasJump.text("1,2").move(1270,910).font(biggerFont).fill("black")


    canvasJump.text("t").move(650,970).font(biggerItalic).fill("black") //t italicom uout modrym
    canvasJump.text("(ms)").move(680,970).font(biggerSign).fill("black")

    //lines on y
    canvasJump.line(90, 725, 110, 725).stroke({width:1.5, color: 'black' });
    canvasJump.line(90, 575, 110, 575).stroke({width:1.5, color: 'black' })

    //labels on y
    canvasJump.text("0,0").move(20, 875).font(biggerFont).fill("black")
    canvasJump.text("0,5").move(20, 725).font(biggerFont).fill("black")
    canvasJump.text("1,0").move(20, 575).font(biggerFont).fill("black")

    tx = canvasJump.text("Uout").move(-100,720).font(biggerSignItalic).fill("black")
    tx.transform({rotate:270})
    tx = canvasJump.text("(V)").move(-99,610).font(biggerSign).fill("black")
    tx.transform({rotate:270})



    //lines on both
    canvasJump.line(200, 100, 200, 875).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(500, 100, 500, 875).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(800, 100, 800, 875).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasJump.line(1100, 100, 1100, 875).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
}

function f_jump_DF(){
    //red graph
    canvasJump.path("M 100,400 L 200,400 L 205 100 L 495 100 L 500 400 L 800 400 L 805 100 L 1095 100 L 1100 400 L 1300 400")
        .fill('none').stroke({width:6, color: 'red', linecap: "round"});


    //blue graph
    canvasJump.path("M 100,875 L 200,875 C 242 599 242 584 500,575 C 542 851 542 866 800, 875 " +
        "C 842 599 842 584 1100 575 C 1142 851 1142 866 1400 875")
        .fill('none').stroke({width:6, color: 'blue', linecap: "round"})
    whiteOutRightJump()
    let white = canvasJump.rect(1500,1260).move(100,90).fill('white')
    white.animate(5000,800).move(1302,100)

    canvasJump.text("Odozva DF RC filtra na napäťový skok").move(130,40).font(biggerLegend).fill("black")

    canvasJump.line(1040,540, 1125,540).stroke({width:9, color: "blue"});
    canvasJump.line(1040,50, 1125,50).stroke({width:9, color: "red"});

    canvasJump.text("Uout").move(1130,540).font(biggerLegendItalic).fill("black")
    canvasJump.text("Uin").move(1130,50).font(biggerLegendItalic).fill("black")
    canvasJump.text("(V)").move(1240,540).font(biggerLegend).fill("black")
    canvasJump.text("(V)").move(1215,50).font(biggerLegend).fill("black")
}
//f_jump_DF_g()
//f_jump_DF()


const freqNumber = {
    family: "Roboto",
    size: 23,
    fill: "white"
}
const freqSign ={
    family: "Roboto",
    size: 25,
    fill: "white",
    weight: "bold"
}

function der_freq(der, which, all){
    frequency.innerHTML = "";
    if(all){
        der_freq_graph(der,1)
        der_freq_graph(der,2)
        der_freq_graph(der,3)
        return 0
    }
    der_freq_graph(der,which)
}
//der_freq()

const freqLegend = {
    family: "Roboto",
    size: 26,
    fill: "white"
}
const freqLegendBold = {
    family: "Roboto",
    size: 26,
    fill: "white",
    weight:"bold"
}
const freqLegendItalic = {
    family: "Roboto",
    size: 26,
    fill: "white",
    style: "italic"
}

function legendForFreqAmp(canvasFreq,x,y) {
    canvasFreq.text("Amplitúdová").move(x, y).font(freqLegendBold).fill("green")
    canvasFreq.text("frekvenčná").move(x, y+30).font(freqLegend).fill("green")
    canvasFreq.text("charakteristika").move(x, y+60).font(freqLegend).fill("green")
    canvasFreq.line(x+30,y+100,x+80,y+100).stroke({width:5, color: 'green' })
    canvasFreq.text("Au").move(x+90,y+90).font(freqLegendItalic).fill("black")
    canvasFreq.text("(dB)").move(x+130,y+90).font(freqLegend).fill("black")


}
function legendForFreqFaza(canvasFreq,x,y) {
    canvasFreq.text("Fázová").move(x, y).font(freqLegendBold).fill("purple")
    canvasFreq.text("frekvenčná").move(x, y+30).font(freqLegend).fill("purple")
    canvasFreq.text("charakteristika").move(x, y+60).font(freqLegend).fill("purple")
    canvasFreq.line(x+30,y+100,x+80,y+100).stroke({width:5, color: 'purple' })
    canvasFreq.text("Fáza").move(x+90,y+90).font(freqLegendItalic).fill("black")
    canvasFreq.text("(°)").move(x+155,y+90).font(freqLegend).fill("black")

}

function der_freq_graph(der,which){

    let drawFreq = SVG()
        .addTo(frequency)
        .size(410, 700)
        .viewbox(0, 10, 750,1500)
    let canvasFreq = drawFreq.group()

    if(der){
        if(which == 1){
            der_freq_22(canvasFreq)
        }
        if(which == 2){
            der_freq_0_47(canvasFreq)
        }
        if(which == 3){
            der_freq_0_1(canvasFreq)
        }
    }
    else{
        if(which == 1){
            int_freq_6_8(canvasFreq)
        }
        if(which == 2){
            int_freq_22(canvasFreq)
        }
        if(which == 3){
            int_freq_1(canvasFreq)
        }
    }

    //black main graph
    canvasFreq.line(100, 100, 100, 410).stroke({width:1.5, color: 'black' })
    canvasFreq.line(90, 400, 600, 400).stroke({width:1.5, color: 'black' })

    //dotted
    canvasFreq.line(100, 150, 610, 150).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 200, 610, 200).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 250, 610, 250).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 300, 610, 300).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 350, 610, 350).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');

    canvasFreq.line(200, 100, 200, 400).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(300, 100, 300, 400).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(400, 100, 400, 400).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(500, 100, 500, 400).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(600, 100, 600, 400).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');

    //ticks
    canvasFreq.line(200, 395, 200, 405).stroke({width:1.5, color: 'black' })
    canvasFreq.line(300, 395, 300, 405).stroke({width:1.5, color: 'black' })
    canvasFreq.line(400, 395, 400, 405).stroke({width:1.5, color: 'black' })
    canvasFreq.line(500, 395, 500, 405).stroke({width:1.5, color: 'black' })
    canvasFreq.line(600, 395, 600, 405).stroke({width:1.5, color: 'black' })

    canvasFreq.line(95, 150, 105, 150).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 200, 105, 200).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 250, 105, 250).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 300, 105, 300).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 350, 105, 350).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 400, 105, 400).stroke({width:1.5, color: 'black' })


    //text on x
    canvasFreq.text("10").move(90, 420).font(freqNumber).fill("black")
    canvasFreq.text("100").move(180, 420).font(freqNumber).fill("black")
    canvasFreq.text("1k").move(285, 420).font(freqNumber).fill("black")
    canvasFreq.text("10k").move(380, 420).font(freqNumber).fill("black")
    canvasFreq.text("100k").move(480, 420).font(freqNumber).fill("black")
    canvasFreq.text("1M").move(585, 420).font(freqNumber).fill("black")

    //text on y
    canvasFreq.text("-50").move(55, 390).font(freqNumber).fill("black")
    canvasFreq.text("-40").move(55, 340).font(freqNumber).fill("black")
    canvasFreq.text("-30").move(55, 290).font(freqNumber).fill("black")
    canvasFreq.text("-20").move(55, 240).font(freqNumber).fill("black")
    canvasFreq.text("-10").move(55, 190).font(freqNumber).fill("black")
    canvasFreq.text("0").move(75, 140).font(freqNumber).fill("black")

    //text
    canvasFreq.text("f").move(300, 460).font(freqLegendItalic).fill("black")
    canvasFreq.text("(Hz)").move(320, 460).font(freqNumber).fill("black")

    //graph 2
    canvasFreq.line(100, 550, 100, 910).stroke({width:1.5, color: 'black' })
    canvasFreq.line(90, 900, 600, 900).stroke({width:1.5, color: 'black' })

    //dotted
    canvasFreq.line(200, 550, 200, 910).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(300, 550, 300, 910).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(400, 550, 400, 910).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(500, 550, 500, 910).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(600, 550, 600, 910).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');

    canvasFreq.line(100, 600, 610, 600).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 650, 610, 650).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 700, 610, 700).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 750, 610, 750).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 800, 610, 800).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 850, 610, 850).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');
    canvasFreq.line(100, 900, 610, 900).stroke({width:2.5, color: '#24252A', dasharray: '4' }).opacity('50%');

    //ticks
    canvasFreq.line(200, 895, 200, 905).stroke({width:1.5, color: 'black' })
    canvasFreq.line(300, 895, 300, 905).stroke({width:1.5, color: 'black' })
    canvasFreq.line(400, 895, 400, 905).stroke({width:1.5, color: 'black' })
    canvasFreq.line(500, 895, 500, 905).stroke({width:1.5, color: 'black' })
    canvasFreq.line(600, 895, 600, 905).stroke({width:1.5, color: 'black' })

    canvasFreq.line(95, 600, 105, 600).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 650, 105, 650).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 700, 105, 700).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 750, 105, 750).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 800, 105, 800).stroke({width:1.5, color: 'black' })
    canvasFreq.line(95, 850, 105, 850).stroke({width:1.5, color: 'black' })

    //text on x
    canvasFreq.text("10").move(90, 920).font(freqNumber).fill("black")
    canvasFreq.text("100").move(180, 920).font(freqNumber).fill("black")
    canvasFreq.text("1k").move(285, 920).font(freqNumber).fill("black")
    canvasFreq.text("10k").move(380, 920).font(freqNumber).fill("black")
    canvasFreq.text("100k").move(480, 920).font(freqNumber).fill("black")
    canvasFreq.text("1M").move(585, 920).font(freqNumber).fill("black")

    //text on y
    if(der){
        canvasFreq.text("90").move(65, 590).font(freqNumber).fill("black")
        canvasFreq.text("75").move(65, 640).font(freqNumber).fill("black")
        canvasFreq.text("60").move(65, 690).font(freqNumber).fill("black")
        canvasFreq.text("45").move(65, 740).font(freqNumber).fill("black")
        canvasFreq.text("30").move(65, 790).font(freqNumber).fill("black")
        canvasFreq.text("15").move(65, 840).font(freqNumber).fill("black")
        canvasFreq.text("0").move(75, 890).font(freqNumber).fill("black")
    }else{
        canvasFreq.text("0").move(75, 590).font(freqNumber).fill("black")
        canvasFreq.text("-15").move(55, 640).font(freqNumber).fill("black")
        canvasFreq.text("-30").move(55, 690).font(freqNumber).fill("black")
        canvasFreq.text("-45").move(55, 740).font(freqNumber).fill("black")
        canvasFreq.text("-60").move(55, 790).font(freqNumber).fill("black")
        canvasFreq.text("-75").move(55, 840).font(freqNumber).fill("black")
        canvasFreq.text("-90").move(55, 890).font(freqNumber).fill("black")
    }

    let tx = canvasFreq.text("Au").move(0,250).font(freqLegendItalic).fill("black")
    tx.transform({rotate:270})

    tx = canvasFreq.text("(dB)").move(-5,200).font(freqNumber).fill("black")
    tx.transform({rotate:270})


    tx = canvasFreq.text("Fáza").move(0,730).font(freqLegendItalic).fill("black")
    tx.transform({rotate:270})

    tx = canvasFreq.text(" (°)").move(10,682).font(freqNumber).fill("black")
    tx.transform({rotate:270})

    canvasFreq.text("f").move(300, 960).font(freqLegendItalic).fill("black")
    canvasFreq.text("(Hz)").move(320, 960).font(freqNumber).fill("black")



}
der_freq(true,1,false)

function der_freq_0_1(canvasFreq){
    //graf1
    canvasFreq.line(100, 350, 250, 200).stroke({width:3.5, color: 'green' })
    canvasFreq.path("M 250,200 C 310,150 310,155  520,150").fill('none').stroke({width:3.5, color: 'green', linecap: "round"})

    //graf2
    canvasFreq.path("M 100,600 C 150,605  250,610  295,750 C 320,835 400,900   520 900").fill('none').stroke({width:4, color: 'purple', linecap: "round"})
    let white = canvasFreq.rect(1000,1000).move(100,100).fill("white")
    let runner = white.animate(5000,800).move(600,100)
    runner.after(()=>{
        //lines
        canvasFreq.line(100, 165, 350, 165).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.line(295, 120, 295, 900).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.circle(15,15).move(285,155).fill('none').stroke({width:4, color: 'red', linecap: "round"})

        canvasFreq.line(100, 750, 350, 750).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.circle(15,15).move(285,740).fill('none').stroke({width:4, color: 'red', linecap: "round"})

        canvasFreq.line(370, 125, 370, 900).stroke({width:4, color: 'blue', dasharray: '4' })
        canvasFreq.circle(15,15).move(365,847).fill('none').stroke({width:4, color: 'blue', linecap: "round"})
        canvasFreq.circle(15,15).move(365,145).fill('none').stroke({width:4, color: 'blue', linecap: "round"})

        fequalsf(canvasFreq,380,115,true)
        fequalsf(canvasFreq,380,822,true)
        canvasFreq.text("-45°").move(240,770).font(freqEq).fill("red")
        canvasFreq.text("-3 dB").move(300,185).font(freqEq).fill("red")
        fequalsf(canvasFreq,220,115,false)
        fequalsf(canvasFreq,300,720,false)
    })



    canvasFreq.text("Frekvenčné charakteristiky hornopriepustného RC filtra").move(30,40).font(freqSign).fill("black")
    canvasFreq.text("C = 0,1 μF R = 1,8 kΩ").move(30,70).font(freqSign).fill("black")

    legendForFreqAmp(canvasFreq,400,250)
    legendForFreqFaza(canvasFreq,400,590)
}

function der_freq_22(canvasFreq){
    //graf1
    canvasFreq.line(110, 400, 310, 200).stroke({width:3.5, color: 'green' })
    canvasFreq.path("M 310,200 C 370,150 370,145  580,150").fill('none').stroke({width:3.5, color: 'green', linecap: "round"})


    //graf2
    canvasFreq.line(100, 600, 165, 600).stroke({width:4, color: 'purple' })
    canvasFreq.path("M 165,600 C 175,605  315,590 360,750 C 385,835 465,900   585 900").fill('none').stroke({width:4, color: 'purple', linecap: "round"})

    let white = canvasFreq.rect(1000,1000).move(100,100).fill("white")
    let runner = white.animate(5000,800).move(600,100)
    runner.after(()=>{
        canvasFreq.line(100, 165, 400, 165).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.line(360, 120, 360, 900).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.circle(15,15).move(352,158).fill('none').stroke({width:4, color: 'red', linecap: "round"})
        canvasFreq.line(100, 750, 400, 750).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.circle(15,15).move(355,740).fill('none').stroke({width:4, color: 'red', linecap: "round"})
        fequalsf(canvasFreq,380,115,false)
        fequalsf(canvasFreq,380,722,false)
        canvasFreq.text("-45°").move(300,770).font(freqEq).fill("red")
        canvasFreq.text("-3 dB").move(380,185).font(freqEq).fill("red")
    })


    canvasFreq.text("Frekvenčné charakteristiky hornopriepustného RC filtra").move(30,40).font(freqSign).fill("black")
    canvasFreq.text("C = 22 pF R = 1,8 kΩ").move(30,70).font(freqSign).fill("black")

    legendForFreqAmp(canvasFreq,400,250)
    legendForFreqFaza(canvasFreq,400,590)

}
function der_freq_0_47(canvasFreq){

    //graf1
    canvasFreq.line(280, 400, 480, 200).stroke({width:4, color: 'green' })
    canvasFreq.path("M 480,200 C 520,160 540,150  600,150").fill('none').stroke({width:3.5, color: 'green', linecap: "round"})

    //graf2
    canvasFreq.line(270, 600, 325, 600).stroke({width:4, color: 'purple' })
    canvasFreq.path("M 325,600 C 335,605  475,590 520,750 C 540,820 560,840 600 860").fill('none').stroke({width:4, color: 'purple', linecap: "round"})

    let white = canvasFreq.rect(1000,1000).move(100,100).fill("white")
    let runner = white.animate(5000,800).move(600,100)
    runner.after(()=>{
        canvasFreq.line(100, 165, 610, 165).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.line(360, 120, 360, 900).stroke({width:4, color: 'blue', dasharray: '4' })
        canvasFreq.line(100, 750, 610, 750).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.line(520, 120, 520, 900).stroke({width:4, color: 'red', dasharray: '4' })

        canvasFreq.circle(15,15).move(512,745).fill('none').stroke({width:4, color: 'red', linecap: "round"})
        canvasFreq.circle(15,15).move(512,160).fill('none').stroke({width:4, color: 'red', linecap: "round"})

        canvasFreq.circle(15,15).move(352,598).fill('none').stroke({width:4, color: 'blue', linecap: "round"})
        canvasFreq.circle(15,15).move(352,315).fill('none').stroke({width:4, color: 'blue', linecap: "round"})
        fequalsf(canvasFreq,435,125,false)
        fequalsf(canvasFreq,435,722,false)
        canvasFreq.text("-45°").move(540,770).font(freqEq).fill("red")
        canvasFreq.text("-3 dB").move(530,185).font(freqEq).fill("red")

        fequalsf(canvasFreq,260,310,true)
        fequalsf(canvasFreq,270,560,true)
    })



    canvasFreq.text("Frekvenčné charakteristiky hornopriepustného RC filtra").move(30,40).font(freqSign).fill("black")
    canvasFreq.text("C = 0,47 pF R = 1,8 kΩ").move(30,70).font(freqSign).fill("black")
    legendForFreqAmp(canvasFreq,120,180)
    legendForFreqFaza(canvasFreq,120,620)
}

function int_freq_6_8(canvasFreq){
    //graf1
    canvasFreq.line(160,150,360,150).stroke({width:4, color: 'green' })
    canvasFreq.path("M 360,150 C 365,152 400,145  420,165").fill('none').stroke({width:3.5, color: 'green', linecap: "round"})
    canvasFreq.line(420,165,600,340).stroke({width:4, color: 'green' })


    //graf2
   canvasFreq.line(150, 600, 225, 600).stroke({width:4, color: 'purple' })
    canvasFreq.path("M 225,600 C 235,605  375,590 420,750 C 445,800 465,900   585 900").fill('none').stroke({width:4, color: 'purple', linecap: "round"})

    let white = canvasFreq.rect(1000,1000).move(100,100).fill("white")
    let runner = white.animate(5000,800).move(600,100)
    runner.after(()=>{
        //lines
        canvasFreq.line(100, 165, 480, 165).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.line(420, 120, 420, 900).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.circle(15,15).move(415,158).fill('none').stroke({width:4, color: 'red', linecap: "round"})
        canvasFreq.circle(15,15).move(352,142).fill('none').stroke({width:4, color: 'blue', linecap: "round"})

        canvasFreq.line(360, 120, 360, 900).stroke({width:4, color: 'blue', dasharray: '4' })
        canvasFreq.line(100, 750, 400, 750).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.circle(15,15).move(414,740).fill('none').stroke({width:4, color: 'red', linecap: "round"})
        canvasFreq.circle(15,15).move(352,640).fill('none').stroke({width:4, color: 'blue', linecap: "round"})
        fequalsf(canvasFreq,435,125,false)
        fequalsf(canvasFreq,435,722,false)
        canvasFreq.text("-45°").move(360,770).font(freqEq).fill("red")
        canvasFreq.text("-3 dB").move(345,185).font(freqEq).fill("red")

        fequalsf(canvasFreq,325,100,true)
        fequalsf(canvasFreq,340,600,true)

    })

    canvasFreq.text("Frekvenčné charakteristiky dolnopriepustného RC filtra").move(30,40).font(freqSign).fill("black")
    canvasFreq.text("C = 6,8 pF R = 1,8 kΩ").move(30,70).font(freqSign).fill("black")
    legendForFreqAmp(canvasFreq,120,220)
    legendForFreqFaza(canvasFreq,120,620)
}

function int_freq_22(canvasFreq){
    //graf1
    canvasFreq.line(100,150,300,150).stroke({width:4, color: 'green' })
   // canvasFreq.line(110, 400, 310, 200).stroke({width:3.5, color: 'green' })
    canvasFreq.path("M 300,150 C 305,152 340,145  360,165").fill('none').stroke({width:3.5, color: 'green', linecap: "round"})
    canvasFreq.line(360,165,600,390).stroke({width:4, color: 'green' })

    //graf2
    canvasFreq.line(100, 600, 165, 600).stroke({width:4, color: 'purple' })
    canvasFreq.path("M 165,600 C 175,605  315,590 360,750 C 385,835 465,900   585 900").fill('none').stroke({width:4, color: 'purple', linecap: "round"})

    let white = canvasFreq.rect(1000,1000).move(100,100).fill("white")
    let runner = white.animate(5000,800).move(600,100)
    runner.after(()=>{
        //lines
        canvasFreq.line(100, 165, 400, 165).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.line(360, 120, 360, 900).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.circle(15,15).move(352,158).fill('none').stroke({width:4, color: 'red', linecap: "round"})
        //360,750
        canvasFreq.line(100, 750, 400, 750).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.circle(15,15).move(355,740).fill('none').stroke({width:4, color: 'red', linecap: "round"})
        fequalsf(canvasFreq,385,125,false)
        fequalsf(canvasFreq,385,722,false)
        canvasFreq.text("-45°").move(300,770).font(freqEq).fill("red")
        canvasFreq.text("-3 dB").move(280,185).font(freqEq).fill("red")
    })

    canvasFreq.text("Frekvenčné charakteristiky dolnopriepustného RC filtra").move(30,40).font(freqSign).fill("black")
    canvasFreq.text("C = 22 pF R = 1,8 kΩ").move(30,70).font(freqSign).fill("black")
    legendForFreqAmp(canvasFreq,120,220)
    legendForFreqFaza(canvasFreq,120,620)
}

function int_freq_1(canvasFreq){

    //graf1
    canvasFreq.path("M 100,150 C 105,152 160,145  193,160").fill('none').stroke({width:3.5, color: 'green', linecap: "round"})
    canvasFreq.line(194, 160, 450, 400).stroke({width:4, color: 'green' })
    //graf2
    canvasFreq.path("M 100,625 C 130,640  150,640 195,750 C 220,835 300,900  420 900").fill('none').stroke({width:4, color: 'purple', linecap: "round"})

    let white = canvasFreq.rect(1000,1000).move(100,100).fill("white")
    let runner = white.animate(5000,800).move(600,100)
    runner.after(()=>{
        canvasFreq.line(195, 120, 195, 900).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.line(100, 160, 400, 160).stroke({width:4, color: 'red', dasharray: '4' })
        canvasFreq.line(360, 120, 360, 900).stroke({width:4, color: 'blue', dasharray: '4' })
        canvasFreq.line(100, 750, 400, 750).stroke({width:4, color: 'red', dasharray: '4' })

        canvasFreq.circle(15,15).move(187,742).fill('none').stroke({width:4, color: 'red', linecap: "round"})
        canvasFreq.circle(15,15).move(187,154).fill('none').stroke({width:4, color: 'red', linecap: "round"})

        fequalsf(canvasFreq,210,125,false)
        fequalsf(canvasFreq,210,722,false)
        canvasFreq.text("-45°").move(130,770).font(freqEq).fill("red")
        canvasFreq.text("-3 dB").move(120,175).font(freqEq).fill("red")


        canvasFreq.circle(15,15).move(352,885).fill('none').stroke({width:4, color: 'blue', linecap: "round"})
        canvasFreq.circle(15,15).move(352,308).fill('none').stroke({width:4, color: 'blue', linecap: "round"})
        fequalsf(canvasFreq,380,860,true)
        fequalsf(canvasFreq,380,288,true)
    })

    canvasFreq.text("Frekvenčné charakteristiky dolnopriepustného RC filtra").move(30,40).font(freqSign).fill("black")
    canvasFreq.text("C = 1 μF R = 1,8 kΩ").move(30,70).font(freqSign).fill("black")
    legendForFreqAmp(canvasFreq,420,170)
    legendForFreqFaza(canvasFreq,400,590)

}



function fequalsf(canvasFreq,x,y,sin){
    if(sin){
        canvasFreq.text("f = f").move(x,y).font(freqEq).fill("blue")
        canvasFreq.text("sin").move(x+51,y+10).font(freqEqSmall).fill("blue")
    }
    else{
        canvasFreq.text("f = f").move(x,y).font(freqEq).fill("red")
        canvasFreq.text("c").move(x+51,y+10).font(freqEqSmall).fill("red")
    }
}

buttonsEvent()