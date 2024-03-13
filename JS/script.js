SVG.on(document, 'DOMContentLoaded', function () {
    let gDraw = SVG().addTo('#graph').size(1000, 450)
    let cdDraw = SVG().addTo('#circuit-diagram').size(1100, 450)

    var ugs = "0";
    var uds = "0";

//schema
    function schema1() {
        // prva ciara z lava 130 + 20
        let line = cdDraw.line(20, 40, 130, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        let circle = cdDraw.circle(10)
        circle.fill('none')
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(130, 35)
//horna ciara
        line = cdDraw.line(270, 40, 460, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(140, 40, 230, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(230, 20, 230, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(270, 20, 270, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(20, 40, 20, 440)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(20, 440, 1000, 440)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(1000, 440, 1000, 300)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(1000, 300, 1050, 300)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(1000, 250, 1050, 250)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(1000, 250, 1000, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(950, 40, 1000, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        let rect = cdDraw.rect(80, 30)
        rect.fill('none')
        rect.stroke({color: '#000', width: 3}).move(870, 25)

        line = cdDraw.line(870, 40, 800, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})
// stredne ciary
        line = cdDraw.line(135, 45, 135, 350)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(795, 45, 795, 350)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(465, 45, 465, 250)
        line.stroke({color: '#000', width: 3, linecap: 'round'})
// trojuholnik
        let polyline = cdDraw.polyline('455,250 475,250 465,260 455,250')
            .stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
//stred
        line = cdDraw.line(465, 260, 465, 275)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(420, 275, 510, 275)
        line.stroke({color: '#000', width: 5, linecap: 'round'})

        line = cdDraw.line(430, 275, 430, 350)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(500, 275, 500, 350)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(135, 350, 430, 350)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(500, 350, 795, 350)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        let text = cdDraw.text(function (add) {
            add.tspan('S')
        }).move(127, 15).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '24'
        })

        text = cdDraw.text(function (add) {
            add.tspan('G')
        }).move(457, 15).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '24'
        })

        text = cdDraw.text(function (add) {
            add.tspan('D')
        }).move(787, 15).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '24'
        })

        text = cdDraw.text(function (add) {
            add.tspan('Rz')
        }).move(890, 6).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '24'
        })

        circle = cdDraw.circle(150)
        circle.fill('none')
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(390, 200)

        circle = cdDraw.circle(10)
        circle.fill('none')
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(790, 35)

        circle = cdDraw.circle(10)
        circle.fill('none')
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(460, 35)
    }

    function graphN() {
        line = gDraw.line(100, 350, 700, 350)
        line.stroke({color: '#FF0000', width: 3, linecap: 'round'})
        line = gDraw.line(120, 0, 120, 370)
        line.stroke({color: '#FF0000', width: 3, linecap: 'round'})
        let path = gDraw.path('M120 350 C230 110 270 105 300 101 L590 100 C600 100 620 80 650 0')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M120 350 C210 210 250 200 260 195 L550 195 C560 200 580 180 625 0')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M120 350 C200 310 210 300 220 301 L500 299 C520 300 540 280 600 0')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M120 350 C155 335 160 340 165 336 L470 336 C480 336 520 310 575 0')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M120 350 C200 330 210 310 220 280 L340 0')
        path.fill('none')
        path.stroke({color: '#A020F0', width: 3, linecap: 'round', linejoin: 'round'})
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(165, 332)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(165, 332)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(208, 299)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(253, 192)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(293, 98)

        text = gDraw.text(function (add) {
            add.tspan('lineárna')
            add.tspan('oblasť').newLine()
        }).move(40, 150).stroke({color: '#A020F0', width: 1}).font({
            family: 'Arial',
            size: '18'
        })
        text = gDraw.text(function (add) {
            add.tspan('I')
        }).move(40, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('D')
        }).move(45, 5).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('[mA]')
        }).move(55, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('zovretie kanála')
        }).move(200, 15).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(400, 80).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(410, 85).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('= 0V')
        }).move(430, 80).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(370, 175).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(380, 180).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= -0,5V')
        }).move(400, 175).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(340, 275).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(350, 280).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= -1V')
        }).move(370, 275).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(310, 315).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(320, 320).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= U')
        }).move(340, 315).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('t')
        }).move(365, 320).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('V')
        }).move(370, 315).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('saturačná oblasť')
        }).move(360, 155).stroke({color: '#00FF00', width: 0.5}).font({
            family: 'Arial',
            size: '14'
        })

        text = gDraw.text(function (add) {
            add.tspan('oblasť')
            add.tspan('lavínového').newLine()
            add.tspan('prierazu').newLine()
        }).move(600, 155).stroke({color: '#00FF00', width: 0.5}).font({
            family: 'Arial',
            size: '14'
        })

        text = gDraw.text(function (add) {
            add.tspan('0')
        }).move(110, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('1')
        }).move(165, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('10')
        }).move(425, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(660, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('DS')
        }).move(672, 355).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('[V]')
        }).move(692, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
    }

    function graphP() {
        line = gDraw.line(100, 20, 700, 20)
        line.stroke({color: '#FF0000', width: 5, linecap: 'round'})
        line = gDraw.line(680, 0, 680, 370)
        line.stroke({color: '#FF0000', width: 5, linecap: 'round'})
        //ciary z hora dole
        let path = gDraw.path('M680 20 L600 30 L250 30 L220 150')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M680 20 L590 65 L220 65 L190 200')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M680 20 L580 150 L180 150 L160 250')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M680 20 L570 240 L140 245 L120 350')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M680 20 L600 30 L590 65 L580 150 L570 240 L565 350')
        path.fill('none')
        path.stroke({color: '#A020F0', width: 5, linecap: 'round', linejoin: 'round'})

        text = gDraw.text(function (add) {
            add.tspan('lineárna')
            add.tspan('oblasť').newLine()
        }).move(710, 150).stroke({color: '#A020F0', width: 1}).font({
            family: 'Arial',
            size: '18'
        })

        text = gDraw.text(function (add) {
            add.tspan('I')
        }).move(715, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('D')
        }).move(720, 355).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('[mA]')
        }).move(730, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('zovretie kanála')
        }).move(540, 360).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(330, 250).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(340, 255).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= 0V')
        }).move(360, 250).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(360, 160).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(370, 165).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= 0,5V')
        }).move(390, 160).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(340, 75).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(350, 80).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= 1V')
        }).move(370, 75).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(325, 35).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(335, 40).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('=U')
        }).move(355, 35).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('t')
        }).move(376, 40).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('V')
        }).move(380, 35).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('saturačná oblasť')
        }).move(360, 100).stroke({color: '#00FF00', width: 0.5}).font({
            family: 'Arial',
            size: '14'
        })

        text = gDraw.text(function (add) {
            add.tspan('oblasť')
            add.tspan('lavínového').newLine()
            add.tspan('prierazu').newLine()
        }).move(100, 125).stroke({color: '#00FF00', width: 0.5}).font({
            family: 'Arial',
            size: '14'
        })

        text = gDraw.text(function (add) {
            add.tspan('0')
        }).move(685, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('-1')
        }).move(620, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('-10')
        }).move(320, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(100, 30).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('DS')
        }).move(112, 35).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('[V]')
        }).move(130, 30).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
    }

    function animacia1() {
        // Prvky obvodu
        // sedy navrchu
        let rectangle = cdDraw.rect(830, 35).fill('#d7d7d7').stroke({color: '#000', width: 3});
        rectangle.move(60, 90);
        //cierne obdlzniky pri S
        rectangle = cdDraw.rect(50, 35).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(110, 90);

        rectangle = cdDraw.rect(30, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(97, 73);

        rectangle = cdDraw.rect(30, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(143, 73);
        //cierne obdlzniky pri D
        rectangle = cdDraw.rect(50, 35).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(770, 90);

        rectangle = cdDraw.rect(30, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(757, 73);

        rectangle = cdDraw.rect(30, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(803, 73);
        //cierne v strede
        rectangle = cdDraw.rect(200, 35).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(360, 90);

        rectangle = cdDraw.rect(115, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(315, 73);

        rectangle = cdDraw.rect(115, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(505, 73);
        //modry obdl
        rectangle = cdDraw.rect(830, 200).fill("#D5EFFF").stroke({color: '#0000FF', width: 5});
        rectangle.move(60, 120);
        //cerveny obdl
        rectangle = cdDraw.rect(830, 100).fill("#FFB9B9").stroke({color: '#FF0000', width: 5});
        rectangle.move(60, 320);
        //zeleny obdl
        if (ugs == "0" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);

            //vrchny
            rectangle = cdDraw.rect(270, 70).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 123);


        } else if (ugs == "-1" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //vrchny
            rectangle = cdDraw.rect(295, 80).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(317, 123);

        } else if (ugs == "-2.2" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //vrchny
            rectangle = cdDraw.rect(320, 100).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 123);
        } else if (ugs == "-3" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //vrchny
            rectangle = cdDraw.rect(345, 110).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 123);
        } else if (ugs == "Ut" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //vrchny
            rectangle = cdDraw.rect(370, 120).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 123);
        } else if (ugs == "0" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(270, 70).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 123);
        } else if (ugs == "-1" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 295,0 295,20').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(318, 204);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(295, 80).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(317, 123);
        } else if (ugs == "-2.2" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 320,0 320,20').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 222);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(320, 100).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 123);
        } else if (ugs == "-3" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 345,0 345,20').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 234);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(345, 110).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 123);
        } else if (ugs == "Ut" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 370,0 370,30').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 244);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(370, 120).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 123);
        } else if (ugs == "0" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 270,0 260,70').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 193);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(270, 70).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 123);
        } else if (ugs == "-1" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 295,0 250,75').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(318, 204);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(295, 80).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(317, 123);
        } else if (ugs == "-2.2" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 320,0 290,75').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 222);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(320, 100).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 123);
        } else if (ugs == "-3" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 345,0 320,60').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 234);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(345, 110).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 123);
        } else if (ugs == "Ut" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 370,0 300,60').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 244);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(370, 120).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 123);
        } else if (ugs == "0" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 270,0 270,70').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 193);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(270, 70).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 123);
        } else if (ugs == "-1" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 295,0 270,55').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(318, 204);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(295, 80).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(317, 123);
        } else if (ugs == "-2.2" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 320,0 320,35').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 222);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(320, 100).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 123);
        } else if (ugs == "-3" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 345,0 345,30').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 234);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(345, 110).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 123);
        } else if (ugs == "Ut" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 370,0 370,45').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 244);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(370, 120).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 123);
        }

        //n+ lavy aj pravy
        rectangle = cdDraw.rect(90, 65).fill("#AFE1FF").stroke({color: '#0000FF', width: 0});
        rectangle.move(90, 123);
        let base = cdDraw.text('n').move(125, 130).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        let exponent = cdDraw.text('+').move(140, 128).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        rectangle = cdDraw.rect(90, 65).fill("#AFE1FF").stroke({color: '#0000FF', width: 0});
        rectangle.move(750, 123);
        base = cdDraw.text('n').move(785, 130).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('+').move(800, 128).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        // p+
        rectangle = cdDraw.rect(250, 65).fill("#FFB9B9").stroke({color: '#FE8585', width: 0});
        rectangle.move(340, 123);
        base = cdDraw.text('p').move(450, 130).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('+').move(465, 128).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        text = cdDraw.text(function (add) {
            add.tspan('≈')
        }).move(880, 395).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '40'
        })
        text = cdDraw.text(function (add) {
            add.tspan('≈')
        }).move(50, 395).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '40'
        })
        base = cdDraw.text('n').move(125, 130).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('+').move(140, 128).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        text = cdDraw.text(function (add) {
            add.tspan('n')
        }).move(800, 245).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '30'
        })
        base = cdDraw.text('p').move(800, 375).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('+').move(815, 370).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        base = cdDraw.text('SiO').move(900, 80).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('2').move(948, 90).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });

        base = cdDraw.text('Si').move(900, 170).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
    }

    function animacia2() {
        // Prvky obvodu
        // sedy navrchu
        let rectangle = cdDraw.rect(830, 35).fill('#d7d7d7').stroke({color: '#000', width: 3});
        rectangle.move(60, 90);
        //cierne obdlzniky pri S
        rectangle = cdDraw.rect(50, 35).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(110, 90);

        rectangle = cdDraw.rect(30, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(97, 73);

        rectangle = cdDraw.rect(30, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(143, 73);
        //cierne obdlzniky pri D
        rectangle = cdDraw.rect(50, 35).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(770, 90);

        rectangle = cdDraw.rect(30, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(757, 73);

        rectangle = cdDraw.rect(30, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(803, 73);
        //cierne v strede
        rectangle = cdDraw.rect(200, 35).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(360, 90);

        rectangle = cdDraw.rect(115, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(315, 73);

        rectangle = cdDraw.rect(115, 15).fill("#0").stroke({color: '#000', width: 2});
        rectangle.move(505, 73);
        //modry obdl
        rectangle = cdDraw.rect(830, 200).fill("#FFD1D1").stroke({color: '#FF0000', width: 5});
        rectangle.move(60, 120);
        //cerveny obdl
        rectangle = cdDraw.rect(830, 100).fill("#AFE1FF").stroke({color: '#0000FF', width: 5});
        rectangle.move(60, 320);
        //zeleny obdl
        if (ugs == "0" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);

            //vrchny
            rectangle = cdDraw.rect(270, 70).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 123);


        } else if (ugs == "-1" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //vrchny
            rectangle = cdDraw.rect(295, 80).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(317, 123);

        } else if (ugs == "-2.2" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //vrchny
            rectangle = cdDraw.rect(320, 100).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 123);
        } else if (ugs == "-3" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //vrchny
            rectangle = cdDraw.rect(345, 110).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 123);
        } else if (ugs == "Ut" && uds == "0") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //vrchny
            rectangle = cdDraw.rect(370, 120).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 123);
        } else if (ugs == "0" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(270, 70).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 123);
        } else if (ugs == "-1" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 295,0 295,20').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(318, 204);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(295, 80).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(317, 123);
        } else if (ugs == "-2.2" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 320,0 320,20').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 222);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(320, 100).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 123);
        } else if (ugs == "-3" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 345,0 345,20').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 234);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(345, 110).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 123);
        } else if (ugs == "Ut" && uds == "0.5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 370,0 370,30').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 244);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-25 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 265);
            //vrchny
            rectangle = cdDraw.rect(370, 120).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 123);
        } else if (ugs == "0" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 270,0 260,70').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 193);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(270, 70).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 123);
        } else if (ugs == "-1" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 295,0 250,75').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(318, 204);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(295, 80).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(317, 123);
        } else if (ugs == "-2.2" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 320,0 290,75').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 222);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(320, 100).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 123);
        } else if (ugs == "-3" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 345,0 320,60').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 234);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(345, 110).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 123);
        } else if (ugs == "Ut" && uds == "5") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 370,0 300,60').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 244);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-100 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 190);
            //vrchny
            rectangle = cdDraw.rect(370, 120).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 123);
        } else if (ugs == "0" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 270,0 270,70').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 193);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(270, 70).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(330, 123);
        } else if (ugs == "-1" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 295,0 270,55').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(318, 204);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(295, 80).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(317, 123);
        } else if (ugs == "-2.2" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 320,0 320,35').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 222);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(320, 100).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(305, 123);
        } else if (ugs == "-3" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 345,0 345,30').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 234);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(345, 110).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(295, 123);
        } else if (ugs == "Ut" && uds == "Udsat") {
            //spodny obdlznik
            rectangle = cdDraw.rect(834, 50).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 290);
            //trojuholnik vrchny
            rectangle = cdDraw.polygon('0,0 370,0 370,45').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 244);
            // trojuholnik
            rectangle = cdDraw.polygon('0,0 834,-50 834,0').fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(58, 240);
            //vrchny
            rectangle = cdDraw.rect(370, 120).fill("#89ee9f").stroke({color: '#89ee9f', width: 1});
            rectangle.opacity(0.7);
            rectangle.move(280, 123);
        }
        //n+ lavy aj pravy
        rectangle = cdDraw.rect(90, 65).fill("#FE8585").stroke({color: '#FF0000', width: 0});
        rectangle.move(90, 123);
        let base = cdDraw.text('p').move(125, 130).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        let exponent = cdDraw.text('+').move(140, 128).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        rectangle = cdDraw.rect(90, 65).fill("#FE8585").stroke({color: '#FF0000', width: 0});
        rectangle.move(750, 123);
        base = cdDraw.text('p').move(785, 130).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('+').move(800, 128).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        // p+
        rectangle = cdDraw.rect(250, 65).fill("#AFE1FF").stroke({color: '#0000FF', width: 0});
        rectangle.move(340, 123);
        base = cdDraw.text('n').move(450, 140).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('+').move(465, 133).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        text = cdDraw.text(function (add) {
            add.tspan('≈')
        }).move(880, 395).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '40'
        })
        text = cdDraw.text(function (add) {
            add.tspan('≈')
        }).move(50, 395).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '40'
        })
        base = cdDraw.text('n').move(125, 130).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('+').move(140, 128).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        text = cdDraw.text(function (add) {
            add.tspan('p')
        }).move(800, 245).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '30'
        })
        base = cdDraw.text('n').move(800, 385).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('+').move(815, 380).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });
        base = cdDraw.text('SiO').move(900, 80).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        exponent = cdDraw.text('2').move(948, 90).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });

        base = cdDraw.text('Si').move(900, 170).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
    }

    var timeoutIDn

    async function elektronN01() {
        let timeout = 0
        let duration = 0
        if (ugs == "0" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDn)
        } else if (ugs == "-1" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDn)
        } else if (ugs == "-2.2" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDn)
        } else if (ugs == "-3" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDn)
        } else if (ugs == "Ut" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDn)
        } else if (ugs == "0" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-1" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-2.2" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-3" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "Ut" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "0" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-1" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-2.2" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-3" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "Ut" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "0" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-1" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-2.2" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "-3" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        } else if (ugs == "Ut" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
        }
        let group = cdDraw.group();
        let obj1 = group.circle(20)
        obj1.fill('white')
        obj1.stroke({color: '#0000FF', width: 3, linecap: 'round'});
        group.line(5, 10, 15, 10).stroke({color: '#000', width: 2});
        group.move(120, 125);
        let path1 = cdDraw.path('M 120 125 Q 470 350, 800 125').fill('none');

        const length = path1.length();
        group.animate({
            duration: duration,
            // delay: i * 400,
            when: "relative",

        }).during(function (pos) {
            const eased_pos = SVG.easing['-'](pos);
            const p = path1.pointAt(eased_pos * length * 1.68);
            group.center(p.x, p.y);

        }).after(function () {
            group.remove();
            console.log("PRINT AFTER")
        })


        timeoutIDn = setTimeout(function () {
            if (value) {
                elektronN01()
            }
        }, timeout);

    }

    let value = false

    var timeoutIDp
    async function protonP01() {
        let timeout = 0
        let duration = 0
        if (ugs == "0" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDp)
        } else if (ugs == "-1" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDp)
        } else if (ugs == "-2.2" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDp)
        } else if (ugs == "-3" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDp)
        } else if (ugs == "Ut" && uds == "0") {
            timeout = 0
            duration = 0
            value = false
            clearTimeout(timeoutIDp)
        } else if (ugs == "0" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-1" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-2.2" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-3" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "Ut" && uds == "0.5") {
            timeout = 1000
            duration = 7000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "0" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-1" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-2.2" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-3" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "Ut" && uds == "5") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "0" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-1" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-2.2" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "-3" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        } else if (ugs == "Ut" && uds == "Udsat") {
            timeout = 600
            duration = 4000
            value = true
            clearTimeout(timeoutIDp)
        }
        let group = cdDraw.group();
        let obj1 = group.circle(20)
        obj1.fill('white')
        obj1.stroke({color: '#FF0000', width: 3, linecap: 'round'});
        group.line(5, 10, 15, 10).stroke({color: '#000', width: 2});
        group.line(10, 5, 10, 15).stroke({color: '#000', width: 2});
        group.move(120, 125);
        let path1 = cdDraw.path('M 120 125 Q 470 350, 800 125').fill('none');

        const length = path1.length();
        group.animate({
            duration: duration,
            // delay: i * 400,
            when: "relative",
        }).during(function (pos) {
            const eased_pos = SVG.easing['-'](pos);
            const p = path1.pointAt(eased_pos * length * 1.68);
            group.center(p.x, p.y);
        }).after(function () {
            // Remove the electron group when animation is complete
            group.remove();
            console.log("PRINT AFTER")
        })

        timeoutIDp = setTimeout(function () {
            // console.log("a")
            // console.log(value)
            if (value) {
                protonP01()
            }

        }, timeout);

    }

    schema1()
    graphN()
    animacia1()

    redCircle = gDraw.circle(7)
    redCircle.fill("#FE8585")
    redCircle.stroke({color: '#FE8585', width: 3, linecap: 'round'}).move(117, 347)

    var selectValue = "n";

    document.getElementById('kanal').addEventListener('change', function () {
        if (this.value == "n") {
            selectValue = "n";
            gDraw.clear()
            cdDraw.clear()
            schema1()
            graphN()
            animacia1()
            clearTimeout(timeoutIDp)
            clearTimeout(timeoutIDn)
        } else if (this.value == "p") {
            selectValue = "p";
            gDraw.clear()
            cdDraw.clear()
            schema1()
            graphP()
            animacia2()
            clearTimeout(timeoutIDp)
            clearTimeout(timeoutIDn)
        }
    });
    document.getElementById('Ugs').addEventListener('change', function () {
        ugs = this.value;
        console.log(ugs);
        switch (selectValue) {
            case "n":
                animacia1();
                if (uds == "0") {
                    value = false;
                } else {
                    value = true;
                    elektronN01();
                }
                break
            case "p":
                animacia2()
                if (uds == "0") {
                    value = false;
                } else {
                    value = true;
                    protonP01();
                }
                break
            default:
                break
        }
    });

    document.getElementById('Uds').addEventListener('change', function () {
        uds = this.value;
        console.log(uds);
        switch (selectValue) {
            case "n":
                animacia1();
                if (uds == "0") {
                    value = false;
                } else {
                    value = true;
                    elektronN01();
                }
                break
            case "p":
                animacia2()
                if (uds == "0") {
                    value = false;
                } else {
                    value = true;
                    protonP01()
                }
                break;
            default:
                break
        }

    });

    document.querySelector('.form-check-input').addEventListener('change', function () {
        if (this.checked) {
            cdDraw.clear()
            schema1()
            clearTimeout(timeoutIDp)
            clearTimeout(timeoutIDn)
        } else if (!this.checked && document.getElementById('kanal').value == "n") {
            animacia1()
            clearTimeout(timeoutIDp)
            clearTimeout(timeoutIDn)
        } else if (!this.checked && document.getElementById('kanal').value == "p") {
            animacia2()
            clearTimeout(timeoutIDp)
            clearTimeout(timeoutIDn)
        }
    });
})

