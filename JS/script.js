SVG.on(document, 'DOMContentLoaded', function () {
    let gDraw = SVG().addTo('#graph').size('100%', '100%').viewbox(-400, 0, 1200, 375);
    let cdDraw = SVG().addTo('#circuit-diagram').size('100%', '100%').viewbox(-50, -50, 1100, 500);

    function drawText(ugs, uds){
        let base = cdDraw.text('SiO').move(900, 80).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        let exponent = cdDraw.text('2').move(948, 90).font({
            family: 'Arial',
            size: '24',
            weight: 'bold'
        });

        base = cdDraw.text('Si').move(900, 170).font({
            family: 'Arial',
            size: '28',
            weight: 'bold'
        });
        if (udsTxtObj) {
            udsTxtObj.remove()
        }
        let udsTxt;
        if (uds == "Udsat"){
            udsTxt = uds
        } else {
            udsTxt = uds+'V'
        }
        udsTxt= cdDraw.text(udsTxt).move(940, 300).font({
            family: 'Arial',
            size: '20',
            weight: 'bold'
        });

        if (ugsTxtObj) {
            ugsTxtObj.remove()
        }
        let ugsTxt;
        if (ugs == "Ut"){
            ugsTxt = ugs
        } else {
            ugsTxt = ugs+'V'
        }
        udsTxt= cdDraw.text(ugsTxt).move(225, 17).font({
            family: 'Arial',
            size: '20',
            weight: 'bold'
        });


    }

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
        line = cdDraw.line(305, 40, 460, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(305, 40, 305, 70)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(305, 70, 260, 70)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(140, 40, 185, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(185, 40, 185, 70)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(185, 70, 230,70)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(230, 70, 230, 60)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(260, 70, 260, 60)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(20, 40, 20, 440)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(20, 440, 920, 440)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(920, 440, 920, 320)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(920, 300, 930, 300)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(920, 320, 930, 320)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(970, 205, 970, 40)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(970, 205, 920, 205)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(920, 300, 920, 205)
        line.stroke({color: '#000', width: 3, linecap: 'round'})

        line = cdDraw.line(950, 40, 970, 40)
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
        }).move(127, 12).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '24'
        })

        text = cdDraw.text(function (add) {
            add.tspan('G')
        }).move(457, 12).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '24'
        })

        text = cdDraw.text(function (add) {
            add.tspan('D')
        }).move(787, 12).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '24'
        })

        text = cdDraw.text(function (add) {
            add.tspan('Rz')
        }).move(890, 0).stroke({color: '#000', width: 1}).font({
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

        //TODO:zdroj
        let rectangle = cdDraw.rect(70, 70).fill("#FFFFE0").stroke({color: '#FFFF00', width: 4});
        rectangle.move(930, 275);

        let base = cdDraw.text('Zdroj - UDS').move(930, 250).font({
            family: 'Arial',
            size: '15',
            weight: 'bold'
        });

        rectangle = cdDraw.rect(70, 70).fill("#FFFFE0").stroke({color: '#FFFF00', width: 4});
        rectangle.move(210, -10);

        base = cdDraw.text('Zdroj - UGS').move(205, -35).font({
            family: 'Arial',
            size: '15',
            weight: 'bold'
        });
    }

    function graphN() {
        let line = gDraw.line(-400, 350, 700, 350)
        line.stroke({color: '#FF0000', width: 3, linecap: 'round'})
        line = gDraw.line(120, 0, 120, 370)
        line.stroke({color: '#FF0000', width: 3, linecap: 'round'})
        line = gDraw.line(-105, 0, -105, 370)
        line.stroke({color: '#FF0000', width: 3, linecap: 'round'})
        let path = gDraw.path('M120 350 C230 110 270 105 300 101 L590 100 C600 100 620 80 650 0')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M120 350 C210 210 250 200 260 195 L550 195 C560 200 580 180 625 0')
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})
        path = gDraw.path('M120 350 C205 260 230 250 240 250 L525 250 C540 250 560 230 612 0')
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
        let circle = gDraw.circle(7)
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(165, 332)
        circle = gDraw.circle(7)
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(208, 299)
        circle = gDraw.circle(7)
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(229, 248)
        circle = gDraw.circle(7)
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(253, 192)
        circle = gDraw.circle(7)
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(293, 98)

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(-20, 10).stroke({color: '#A020F0', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('DS')
        }).move(-10, 15).stroke({color: '#A020F0', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan(' = 5V')
        }).move(10, 10).stroke({color: '#A020F0', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('I')
        }).move(130, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('D')
        }).move(135, 5).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('[mA]')
        }).move(145, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('I')
        }).move(-160, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('D')
        }).move(-155, 5).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('[mA]')
        }).move(-145, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('zovretie kanála')
        }).move(220, 15).stroke({color: '#A020F0', width: 1}).font({
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
        }).move(410, 83).stroke({color: '#000', width: 1}).font({
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
        }).move(370, 172).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(380, 174).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= -1V')
        }).move(400, 172).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(370, 225).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(380, 229).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= -2.2V')
        }).move(400, 225).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(370, 275).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(380, 280).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= -3V')
        }).move(400, 275).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(370, 310).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(380, 315).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= U')
        }).move(400, 310).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('t')
        }).move(425, 315).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('V')
        }).move(430, 310).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('saturačná oblasť')
        }).move(370, 130).stroke({color: '#00FF00', width: 0.5}).font({
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
            add.tspan('5')
        }).move(328, 350).stroke({color: '#000', width: 1}).font({
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
        }).move(500, 350).stroke({color: '#000', width: 1}).font({
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
        text = gDraw.text(function (add) {
            add.tspan('0')
        }).move(-95, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('-1')
        }).move(-155, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('-2,2')
        }).move(-192, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('-3')
        }).move(-242, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('Ut')
        }).move(-307, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        // prevodova charakteristika
        path = gDraw.path('M-350 350 C-300 340 -200 300 -150 200 Q-150 200 -60 0');
        path.fill('none')
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'})

        path = gDraw.path('M-300 334 165 334')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M-235 300 208 300')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M-180 250 230 250')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M-148 194 253 194')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M-100 100 293 100')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M-300 334 -300 350')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M-235 300 -235 350')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M-180 250 -180 350')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M-148 194 -148  350')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M120 350 C200 330 210 310 220 280 L340 0')
        path.fill('none')
        path.stroke({color: '#A020F0', width: 3, linecap: 'round', linejoin: 'round'})

        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(-108, 96)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(-303, 330)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(-238, 296)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(-183, 246)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(-151, 191)

        path = gDraw.path('M331 70 331 350')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(327, 98)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(327, 332)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(327, 296)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(327, 246)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(327, 191)
    }

    function graphP() {
        let path = gDraw.path('M280 20 C210 60 300 60 -150 60 Q-180 60 -200 350');
        path.fill('none');
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'});
        path = gDraw.path('M280 20 C200 100 295 100 -180 100 Q-210 100 -220 350');
        path.fill('none');
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'});
        path = gDraw.path('M280 20 C190 150 290 150 -220 150 Q-235 150 -243 350');
        path.fill('none');
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'});
        path = gDraw.path('M280 20 C180 200 285 200 -240 200 Q-260 200 -265 350');
        path.fill('none');
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'});
        path = gDraw.path('M280 20 C170 240 280 240 -260 240 Q-280 240 -285 350');
        path.fill('none');
        path.stroke({color: '#000', width: 3, linecap: 'round', linejoin: 'round'});
        // ('M120 350 C200 330 210 310 220 280 L340 0')
        path = gDraw.path('M280 20 C190 30 190 40 180 60 L50 350');
        path.fill('none');
        path.stroke({color: '#A020F0', width: 5, linecap: 'round', linejoin: 'round'});

        path = gDraw.path('M680 20 C590 30 590 40 580 60 L450 350');
        path.fill('none');
        path.stroke({color: '#000', width: 5, linecap: 'round', linejoin: 'round'});

        line = gDraw.line(100-400, 20, 700, 20)
        line.stroke({color: '#FF0000', width: 3, linecap: 'round'})
        line = gDraw.line(680-400, 0, 680-400, 370)
        line.stroke({color: '#FF0000', width: 3, linecap: 'round'})

        line = gDraw.line(503, 0, 503, 370)
        line.stroke({color: '#FF0000', width: 3, linecap: 'round'})

        let circle = gDraw.circle(7);
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(577-400, 55);
        circle = gDraw.circle(7);
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(560-400, 91);
        circle = gDraw.circle(7);
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(538-400, 140);
        circle = gDraw.circle(7);
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(517-400, 188);
        circle = gDraw.circle(7);
        circle.fill("#A020F0")
        circle.stroke({color: '#A020F0', width: 3, linecap: 'round'}).move(500-400, 228);
        text = gDraw.text(function (add) {
            add.tspan('zovretie kanála')
        }).move(85, 300).stroke({color: '#A020F0', width: 1}).font({
            family: 'Arial',
            size: '18'
        })

        text = gDraw.text(function (add) {
            add.tspan('I')
        }).move(715-400, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('D')
        }).move(720-400, 355).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('[mA]')
        }).move(730-400, 350).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(330-500, 250).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(340-500, 255).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= 0V')
        }).move(360-500, 250).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(330-500, 197).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(340-500, 202).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= 1V')
        }).move(360-500, 197).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(330-500, 150).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(340-500, 160).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= 2,2V')
        }).move(360-500, 150).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(330-480, 75).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(340-480, 80).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('= 3V')
        }).move(360-480, 75).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(330-500, 35).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('GS')
        }).move(340-500, 40).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('=U')
        }).move(360-500, 35).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('t')
        }).move(379-500, 40).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('V')
        }).move(383-500, 35).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })

        text = gDraw.text(function (add) {
            add.tspan('saturačná oblasť')
        }).move(315-470, 113).stroke({color: '#00FF00', width: 0.5}).font({
            family: 'Arial',
            size: '14'
        })

        text = gDraw.text(function (add) {
            add.tspan('oblasť')
            add.tspan('lavínového').newLine()
            add.tspan('prierazu').newLine()
        }).move(100-400, 125).stroke({color: '#00FF00', width: 0.5}).font({
            family: 'Arial',
            size: '14'
        })

        text = gDraw.text(function (add) {
            add.tspan('0')
        }).move(685-400, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('-1')
        }).move(620-400, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('-5')
        }).move(63, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('-10')
        }).move(-150, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })

        text = gDraw.text(function (add) {
            add.tspan('U')
        }).move(100-400, 30).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        text = gDraw.text(function (add) {
            add.tspan('DS')
        }).move(112-400, 35).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('[V]')
        }).move(130-400, 30).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '15'
        })
        path = gDraw.path('M67 233 500 233')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M100 193 520 193')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M67 145 541 145')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M140 96 563 96')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M67 60 578 60')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M582 20 582 60')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M567 20 567 85')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M543 20 543 140')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        path = gDraw.path('M523 20 523 180')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})


        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(578, 57)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(563, 90)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(541, 142)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(520, 187)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(500, 230)

        path = gDraw.path('M70 20 70 350')
        path.fill('none')
        path.stroke({color: '#000', width: 1, linecap: 'round', dasharray: '10, 5'})

        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(67, 55)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(67, 95)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(67, 144)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(67, 192)
        circle = gDraw.circle(7)
        circle.stroke({color: '#000', width: 3, linecap: 'round'}).move(67, 232)
        text = gDraw.text(function (add) {
            add.tspan('0')
        }).move(490, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('1')
        }).move(519, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('2,2')
        }).move(534, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('3')
        }).move(562, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
        })
        text = gDraw.text(function (add) {
            add.tspan('Ut')
        }).move(576, 0).stroke({color: '#000', width: 1}).font({
            family: 'Arial',
            size: '12'
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

        //TODO:zdroj
        rectangle = cdDraw.rect(70, 70).fill("#FFFFE0").stroke({color: '#FFFF00', width: 4});
        rectangle.move(930, 275);

        base = cdDraw.text('Zdroj - UDS').move(930, 250).font({
            family: 'Arial',
            size: '15',
            weight: 'bold'
        });

        rectangle = cdDraw.rect(70, 70).fill("#FFFFE0").stroke({color: '#FFFF00', width: 4});
        rectangle.move(210, -10);

        base = cdDraw.text('Zdroj - UGS').move(205, -35).font({
            family: 'Arial',
            size: '15',
            weight: 'bold'
        });

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
        //zdroj
        rectangle = cdDraw.rect(70, 70).fill("#FFFFE0").stroke({color: '#FFFF00', width: 4});
        rectangle.move(930, 275);

        base = cdDraw.text('Zdroj - UDS').move(930, 250).font({
            family: 'Arial',
            size: '15',
            weight: 'bold'
        });

        rectangle = cdDraw.rect(70, 70).fill("#FFFFE0").stroke({color: '#FFFF00', width: 4});
        rectangle.move(210, -10);

        base = cdDraw.text('Zdroj - UGS').move(205, -35).font({
            family: 'Arial',
            size: '15',
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
    }
    function easeInSine(pos) {
        return 1 - Math.cos(pos * Math.PI / 2);
    }

    function easeOutCubic(pos) {
        return 1 - Math.pow(1 - pos, 3);
    }

    var timeoutIDn
    var udsTxtObj;
    var ugsTxtObj;
    async function elektronN01() {
        let timeout = 0
        let duration = 0
        let threshold = 0
        let pinchOf = false
        let curve = 0
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
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
            curve = 650
        } else if (ugs == "-1" && uds == "0.5") {
            timeout = 1000
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
            curve = 670
        } else if (ugs == "-2.2" && uds == "0.5") {
            timeout = 1000
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
            curve = 700
        } else if (ugs == "-3" && uds == "0.5") {
            timeout = 1000
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
            curve = 730
        } else if (ugs == "Ut" && uds == "0.5") {
            timeout = 1000
            duration = 4000
            value = true
            threshold = 0.75
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 760
        } else if (ugs == "0" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.55
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 630
        } else if (ugs == "-1" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.47
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 650
        } else if (ugs == "-2.2" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.43
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 700
        } else if (ugs == "-3" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.40
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 730
        } else if (ugs == "Ut" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.3
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 760
        } else if (ugs == "0" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.67
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 680
        } else if (ugs == "-1" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.65
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 690
        } else if (ugs == "-2.2" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.7
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 700
        } else if (ugs == "-3" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.65
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 730
        } else if (ugs == "Ut" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.45
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 760
        }


        let group = cdDraw.group();
        let obj1 = group.circle(20);
        obj1.fill('white');
        obj1.stroke({ color: '#0000FF', width: 3, linecap: 'round' });
        group.line(5, 10, 15, 10).stroke({ color: '#000', width: 2 });
        group.move(120, 125);

        let path1Data = 'M -300 125 Q 250 '+ curve +', 657.5 200';
        let path2Data = 'M 657.5 200 Q 725 10, 850 125';

        let path1 = cdDraw.path(path1Data).fill('none');
        let path2 = cdDraw.path(path2Data).fill('none');

        const length1 = path1.length();
        const length2 = path2.length();

        group.animate({
            duration: duration,
            when: "relative"
        }).during(function (pos) {

            let eased_pos1 //= pos //easeInSine(pos);  // Faster easing (experiment for desired speed)
            let eased_pos2 //= pos //easeOutCubic(pos); // Slower easing (experiment for desired speed)
            eased_pos1 = pos;
            eased_pos2 = pos;
            if (pinchOf) {
                if (pos < threshold) {
                    // Animácia bez zrýchlenia
                    eased_pos1 = pos;
                    eased_pos2 = pos;
                } else {
                    // Animácia so zrýchlením
                    const acceleration = (pos - threshold) * 10; // Vypočítajte zrýchlenie
                    eased_pos1 = threshold + acceleration;
                    eased_pos2 = threshold + acceleration;
                }
            }

            const p1 = path1.pointAt(eased_pos1 * length1);
            const p2 = path2.pointAt(eased_pos2 * length2);
            const x = (p1.x + p2.x) / 2;
            const y = (p1.y + p2.y) / 2;
            group.center(x, y);
        }).after(function () {
            group.remove();
            console.log("PRINT AFTER");
        });

        timeoutIDn = setTimeout(function () {
            if (value) {
                elektronN01();
            }
        }, timeout);
    }

    let value = false

    var timeoutIDn
    async function protonP01() {
        let timeout = 0
        let duration = 0
        let threshold = 0
        let pinchOf = false
        let curve = 0
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
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
            curve = 650
        } else if (ugs == "-1" && uds == "0.5") {
            timeout = 1000
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
            curve = 670
        } else if (ugs == "-2.2" && uds == "0.5") {
            timeout = 1000
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
            curve = 700
        } else if (ugs == "-3" && uds == "0.5") {
            timeout = 1000
            duration = 4000
            value = true
            clearTimeout(timeoutIDn)
            curve = 730
        } else if (ugs == "Ut" && uds == "0.5") {
            timeout = 1000
            duration = 4000
            value = true
            threshold = 0.75
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 760
        } else if (ugs == "0" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.55
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 630
        } else if (ugs == "-1" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.47
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 650
        } else if (ugs == "-2.2" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.43
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 700
        } else if (ugs == "-3" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.40
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 730
        } else if (ugs == "Ut" && uds == "5") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.3
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 760
        } else if (ugs == "0" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.67
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 680
        } else if (ugs == "-1" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.65
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 690
        } else if (ugs == "-2.2" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.7
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 700
        } else if (ugs == "-3" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.65
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 730
        } else if (ugs == "Ut" && uds == "Udsat") {
            timeout = 500
            duration = 4000
            value = true
            threshold = 0.45
            pinchOf = true
            clearTimeout(timeoutIDn)
            curve = 760
        }

        let group = cdDraw.group();
        let obj1 = group.circle(20)
        obj1.fill('white')
        obj1.stroke({color: '#FF0000', width: 3, linecap: 'round'});
        group.line(5, 10, 15, 10).stroke({color: '#000', width: 2});
        group.line(10, 5, 10, 15).stroke({color: '#000', width: 2});
        group.move(120, 125);
        let path1Data = 'M -300 125 Q 250 '+ curve +', 657.5 200';
        let path2Data = 'M 657.5 200 Q 725 10, 850 125';

        let path1 = cdDraw.path(path1Data).fill('none');
        let path2 = cdDraw.path(path2Data).fill('none');

        const length1 = path1.length();
        const length2 = path2.length();

        group.animate({
            duration: duration,
            when: "relative"
        }).during(function (pos) {

            let eased_pos1 //= pos //easeInSine(pos);  // Faster easing (experiment for desired speed)
            let eased_pos2 //= pos //easeOutCubic(pos); // Slower easing (experiment for desired speed)
            eased_pos1 = pos;
            eased_pos2 = pos;
            if (pinchOf) {
                if (pos < threshold) {
                    // Animácia bez zrýchlenia
                    eased_pos1 = pos;
                    eased_pos2 = pos;
                } else {
                    // Animácia so zrýchlením
                    const acceleration = (pos - threshold) * 10; // Vypočítajte zrýchlenie
                    eased_pos1 = threshold + acceleration;
                    eased_pos2 = threshold + acceleration;
                }
            }

            const p1 = path1.pointAt(eased_pos1 * length1);
            const p2 = path2.pointAt(eased_pos2 * length2);
            const x = (p1.x + p2.x) / 2;
            const y = (p1.y + p2.y) / 2;
            group.center(x, y);
        }).after(function () {
            group.remove();
            console.log("PRINT AFTER");
        });

        timeoutIDn = setTimeout(function () {
            if (value) {
                protonP01();
            }
        }, timeout);
    }

    function addAndRemoveClassesToSelects(displayType) {
        let selectDiv = document.getElementById("select-row");
        console.log("selectDiv", selectDiv);
        selectDiv.style.visibility = displayType

    }

    var redCircle
    function dotN(){
        if (redCircle) {
            redCircle.remove();
        }

        if (ugs == "0" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(113, 343)
        } else if (ugs == "-1" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(113, 343)
        } else if (ugs == "-2.2" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(113, 343)
        } else if (ugs == "-3" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(113, 343)
        } else if (ugs == "Ut" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(113, 343)
        } else if (ugs == "0" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(134, 295)
        } else if (ugs == "-1" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(137, 308)
        } else if (ugs == "-2.2" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(137, 316)
        } else if (ugs == "-3" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(137, 330)
        } else if (ugs == "Ut" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(137, 335)
        } else if (ugs == "0" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(323, 95)
        } else if (ugs == "-1" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(323, 188)
        } else if (ugs == "-2.2" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(323, 242)
        } else if (ugs == "-3" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(323, 294)
        } else if (ugs == "Ut" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(323, 329)
        } else if (ugs == "0" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(288, 96)
        } else if (ugs == "-1" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(249, 189)
        } else if (ugs == "-2.2" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(225, 242)
        } else if (ugs == "-3" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(204, 297)
        } else if (ugs == "Ut" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(162, 329)
        }
    }

    function dotP(){
        if (redCircle) {
            redCircle.remove();
        }

        if (ugs == "0" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(272, 12)
        } else if (ugs == "-1" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(272, 12)
        } else if (ugs == "-2.2" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(272, 12)
        } else if (ugs == "-3" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(272, 12)
        } else if (ugs == "Ut" && uds == "0") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(272, 12)
        } else if (ugs == "0" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(245, 70)
        } else if (ugs == "-1" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(245, 64)
        } else if (ugs == "-2.2" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(245, 57)
        } else if (ugs == "-3" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(245, 45)
        } else if (ugs == "Ut" && uds == "0.5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(245, 30)
        } else if (ugs == "0" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(62, 230)
        } else if (ugs == "-1" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(62, 190)
        } else if (ugs == "-2.2" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(62, 140)
        } else if (ugs == "-3" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(62, 92)
        } else if (ugs == "Ut" && uds == "5") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(62, 50)
        } else if (ugs == "0" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(93, 225)
        } else if (ugs == "-1" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(113, 184)
        } else if (ugs == "-2.2" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(132, 137)
        } else if (ugs == "-3" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(153, 90)
        } else if (ugs == "Ut" && uds == "Udsat") {
            redCircle = gDraw.circle(16)
            redCircle.fill("#FE8585")
            redCircle.stroke({color: '#FF0000', width: 3, linecap: 'round'}).move(172, 49)
        }
    }

    schema1()
    graphN()
    dotN()
    animacia1()
    drawText(ugs, uds)


    var selectValue = "n";

    document.getElementById('kanal').addEventListener('change', function () {
        document.getElementById('Ugs').value = "0"
        document.getElementById('Uds').value = "0"
        ugs = "0"
        uds = "0"
        value = false
        dotN()
        if (this.value == "n") {
            selectValue = "n";
            gDraw.clear()
            cdDraw.clear()
            schema1()
            graphN()
            dotN()
            animacia1()
            drawText(ugs, uds)
            clearTimeout(timeoutIDp)
            clearTimeout(timeoutIDn)
        } else if (this.value == "p") {
            selectValue = "p";
            gDraw.clear()
            cdDraw.clear()
            schema1()
            graphP()
            dotP()
            animacia2()
            drawText(ugs, uds)
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
                drawText(ugs, uds)
                // redCircle.remove()
                dotN()
                if (uds == "0") {
                    value = false;
                } else {
                    value = true;
                    elektronN01();
                }
                break
            case "p":
                animacia2()
                drawText(ugs, uds)
                dotP()
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

    console.log(3)

    document.getElementById('Uds').addEventListener('change', function () {
        uds = this.value;
        console.log(uds);
        switch (selectValue) {
            case "n":
                animacia1();
                drawText(ugs, uds)
                dotN()
                if (uds == "0") {
                    value = false;
                } else {
                    value = true;
                    elektronN01();
                }
                break
            case "p":
                animacia2()
                drawText(ugs, uds)
                dotP()
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
        document.getElementById('Ugs').value = "0"
        document.getElementById('Uds').value = "0"
        ugs = "0"
        uds = "0"
        value = false
        dotN()
        if (this.checked) {
            cdDraw.clear()
            addAndRemoveClassesToSelects("hidden")
            schema1()
            //clearTimeout(timeoutIDp)
            //clearTimeout(timeoutIDn)
        }else {
            animacia1()
            addAndRemoveClassesToSelects("visible")
            drawText(ugs, uds)
        }
        // } else if (!this.checked && document.getElementById('kanal').value == "n") {
        //     animacia1()
        //     clearTimeout(timeoutIDp)
        //     clearTimeout(timeoutIDn)
        // } else if (!this.checked && document.getElementById('kanal').value == "p") {
        //     animacia2()
        //     clearTimeout(timeoutIDp)
        //     clearTimeout(timeoutIDn)
        // }
    });
})

