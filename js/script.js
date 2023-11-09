var finished = 0;
//console.log("1");

/*po zakliknutí hociakého komponentu - otvorenie/rozšírenie infomácií*/
$(".component").click(function(){

	console.log("clicked")
	if (window.innerWidth <= 767) {
		document.querySelectorAll("#info div").forEach(e => e.remove());
		const clonedDiv = $(".componentInfo").clone(true);
		clonedDiv.appendTo('#info');
	} else{
		$(".componentInfo").css({"display": "block"});
		$(".close").show();
	}

	// var width = $(window).width();
	// //console.log("yes");	//kontrloný log
	// /*console.log("2");*/
	// var widthInfo = $("#info").width();
	// var widthCon = $("#con").width();
	//
	// /*zmenšenie raspberry a všetkých komponentov -------------------------------------------------------------------------*/
	// if (width < 850) {
	// 	//console.log("3");
	// }else {
	// 	/*console.log("4");
	// 	console.log(widthCon);
	// 	console.log(widthInfo);
	// 	console.log(width);*/
	// 	if (widthInfo == width/2) {
	// 		/*console.log("5");*/
	// 		$("#con").animate({height: "auto", width: "30%"},"medium");/*zmenšenie hlavnej čaasti*/
	// 		/*console.log("X");*/
	// 		$("#info").animate({width: "69%"},"medium"); /*zväčšenie info časti*/
	// 		/*console.log("Y");delay(0).	*/
	// 	}else {
	// 		/*console.log("6");*/
	// 	}
	// }
	//
	// /*-------zobrazenie tlačidla close----------------------------*/
	// $(".close").show();
	// /*-------------------------------------------------------------------------------*/
	//
	// $(".big").css({"margin-left": "0.2em"});

});

//console.log("7");

/*zatvorenie/zmenšenie informanej časti */
$(".close").click(function(){
	$(".componentInfo").css({"display": "none"});
	$(".backCom").addClass("component");
	$(".component").removeClass("active");

	document.querySelectorAll("#info div").forEach(e => e.remove());
	// var width = $(window).width();
	// //console.log("uzavri"); //kontrolný log
	// var widthInfo = $("#info").width();
	// var widthCon = $("#con").width();
	//
	// $("#close").hide();
	// $(".big").css({"margin-left": "1em"});
	// if (width < 850) {
	//
	// }else {
	//
	// 	if (widthInfo == width/2) {
	//
	// 	}else {
	// 		$("#info").animate({width: "50%"},"medium"); /*zmenšenie pravej časti*/
	// 		$("#con").animate({height: "auto", width: "49%"},"medium");//*zmenšenie lavej časti*/
	// 	}
	//
	// }
	//
	// /*zobrazenie pôvodného textu-špecifikácie mikropočítača*/
	// $(".caption").html("Raspberry Pi4 ");
	// $(".specifcationRPI").css({"display": "block"});
	// $(".GigabitEthernet").css({"display": "none"});
	// $(".usb2Info").css({"display": "none"});
	// $(".usb3Info").css({"display": "none"});
	// $(".jackInfo").css({"display": "none"});
	// $(".microHDMIInfo").css({"display": "none"});
	// $(".usbCInfo").css({"display": "none"});
	// $(".memoryInfo").css({"display": "none"});
	// $(".procesorInfo").css({"display": "none"});
	// $(".ramInfo").css({"display": "none"});
	// $(".dsiInfo").css({"display": "none"});
	// $(".csiInfo").css({"display": "none"});
	// $(".bluethInfo").css({"display": "none"});
	// $(".usbControllInfo").css({"display": "none"});
	// $(".ethControllInfo").css({"display": "none"});
	// $(".poeInfo").css({"display": "none"});
	// $(".pinInfo").css({"display": "none"});
	//
	// /*odstranenie triedy active  prvkov nech to nesvieti*/
	// $(".backCom").addClass("component");
	// $(".component").removeClass("active");

});
/*-------------------------------------------------------------------------------*/

/*zmena info obsahu po zakliknutí daných prvkov-------------------------*/
if($(".eth").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}

	$(".eth").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("Gigabit Ethernet Port");
	//$(".textInfo").html("<p><b>Ethernet</b> (nazvaný podľa fyzikálneho konceptu éteru (angl. ether)) je rámcová (z angl. frame-based) technológia počítačových sietí pre lokálne siete (LAN). Dáta sú vysielané v blokoch (rámcoch).</p><p>Ethernet je založený na myšlienke, že počítače v sieti budú posielať správy spôsobom, ktorý pripomína rádio, ale prostredníctvom spoločného kábla alebo kanála, niekedy označovaného ako éter (ether).<br>Každý počítač má globálne jedinečnú 48-bitovú MAC adresu, ktorú má každá karta pridelenú od výroby, aby bolo zabezpečené, že všetky systémy v spoločnom Ethernete majú rozdielne adresy. Vďaka dnešnej všadeprítomnosti Ethernetu zabudovali mnohí výrobcovia ethernetové karty priamo do matičných dosiek počítačov.Pozorovaním sa zistilo, že zaťaženie prevádzky v sieťach Ethernet má sebepodobné (fraktálne) vlastnosti, čo má dôležité dôsledky v prenosovej technike v telekomunikáciách.V závislosti od použitého kábla sa v praxi rozlišujú tri základné druhy Ethernet: hrubý ethernet 10base5, tenký ethernet 10Base2, UTP 10baseT.</p>Výhody:<ul><li>Poskytuje rozsiahly sortiment softvérových a hardvérových produktov pre prepojovanie rôznych počítačových prostredí</li><li>Umožňuje voľbu prenosových médií, ktoré možno v sieti pomerne jednoducho kombinovať</li><li>Prenosová rýchlosť do 100Gb/s</li><li>Dáva možnosť zbernicovej i hviezdicovej topológie</li><li>Ponúka priaznivý pomer cena/výkon</li><li>Je štandardom IEEE 802.3</li></ul>Nevýhody<ul><li>Výkon siete klesá s rastúcim počtom staníc a s vzrastajúcim počtom žiadostí o komunikáciu</li><li>Detekcia kolízií limituje dĺžku segmentu</li></ul><button class='accordion'>?????</button><div class='panel'><p>Gigabit Ethernet (GbE nebo 1 GigE) je termín používaný pre opis rôznych technológií, používaných k implementácií štandardu Ethernet pre rýchlosť prenosu dát nad jeden gigabit za sekundu (1 miliarda bitov za sekundu). Ako prvé ho definovali štandardy IEEE 802.3z a 802.3ab. Technológia využíva pre prenos dát krútenú dvojlinku alebo optické vlákno.</p><p>Gigabitový ethernet je vývoj presahujúci rýchly Ethernet. Je to oveľa rýchlejšie. „Gigabit“ predstavuje 1 gigabit údajov za sekundu alebo Gbps. To sa premieta do rýchlosti 1 000 Mb / s, ktorú možno poznáte ako skutočne veľmi šialenú.Len veľmi málo zariadení a pripojení dokáže využívať celý gigabitový systém, hoci mnoho z nich ho efektívne rozdeľuje na viacero rýchlych ethernetových pripojení z centrálneho sieťového bodu.Gigabitový ethernet funguje rovnako ako rýchly Ethernet, prostredníctvom skrútených medených drôtov. Konkrétne môže byť vedený cez akýkoľvek kábel Cat5e a Cat6a, ak je správne nakonfigurovaný. Rovnako ako bol Fast Ethernet navrhnutý pre prácu s pôvodnými káblami Cat5.Na krátke vzdialenosti (vo vnútri domu alebo budovy) je gigabitový Ethernet neuveriteľne výkonný, spôsob prenosu údajov a / alebo distribúcie vysokorýchlostného prístupu k viacerým koncovým bodom v sieti.</p><p><b>Výhody Ethernetu</b>Gigabitový ethernet je považovaný za nevyhnutnosť pre niektorých profesionálov a nadšencov, ktorí potrebujú najvyššiu možnú rýchlosť prenosu dát na trhu. Hlavne tvorcovia videa, videostreamy 4K a streamy videohier. Vizuálne dáta sú veľmi náročné na objem prenesených dát. Jedným z najlepších spôsobov použitia gigabitového ethernetu je preto zabezpečiť, aby prenos alebo streamovanie video dát bolo plynulé a efektívne.Ešte lepšie je, že gigabitové pripojenie vám umožní rozdeliť neuveriteľne vysokorýchlostný internet na viac úloh a zariadení bez spomalenia zariadenia alebo streamingu. Gigabitový ethernet je tiež výhodný, ak vykonávate veľké množstvo prenosov súborov vo vnútornej počítačovej sieti LAN.</p><p>Na prenos dát gigabitový Ethernet využíva káble Cat5e a Cat6a, ktoré majú každý 8 drôtov v 4 pároch.Rýchlosti ethernetu 10/100 Mb / s (rýchly ethernet) preto každý zaberá iba dva páry káblov pre všetky úlohy spojené s prenosom údajov. Gigabitový ethernet (alebo 10/100/1000 Mbps) získava všetok svoj super nabitý dátový výkon z používania všetkých štyroch párov alebo všetkých ôsmich káblov pri prenose úplných údajov 1 000 Mbps z jedného počítača do druhého. </p><br><img src='img/ethernet-chart.png'><br>Tab. zobrazujúca káble pre rýchly Ethernet a gigabit Ethernet <a href='https://planetechusa.com/what-is-gigabit-ethernet/'>[2]</a></div>");
	$(".backCom").addClass("component");
	$(".eth").removeClass("component");
	$(".eth").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "block"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/

if($(".usb2").click(function(){
	console.log(this)
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".usb2").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("USB 2.0 port");
	//$(".textInfo").html("<p>Špecifikácia USB 2.0 prináša so sebou rýchlosť High Speed (480 Mbit/s), pričom hlavné využitie je najmä v prenose veľkých dátových paketov a streamovanie videa. Oproti verzií 1.1 má zariadenie väčšiu veľkosť buffrov endpointov. Rýchlosť 480 Mbit/s platí pri maximálnom využití zbernice, teda súčte všetkých prenosov prebiehajúcich cez zbernicu. Verzia USB 2.0 je spätne kompatibilná s verziou USB 1.1 Konektor pre USB 2.0 je čierny.</p><button class='accordion'>?????</button><div class='panel'><p>Univerzálna sériová zbernica (USB – Universal Serial Bus) je priemyselným štandardom, ktorý popisuje komunikáciu medzi počítačom a inými elektronickými zariadeniami. Štandard definuje okrem komunikačných protokolov aj káble, konektory a spôsob napájania zariadení. Pôvodný zámer vývoja USB bol štandardizovanie pripojenia počítačových periférií, ako klávesnica, myš, tlačiareň, prenosné disky, sieťové adaptéry a pod. Postupne sa toto rozhranie udomácnilo aj v iných zariadeniach ako napr. smartfóny, tablety, herné konzoly. USB úspešne nahradilo viacero rozhraní, sériových aj paralelných. V súčasnosti je tiež využívané ako univerzálny spôsob napájania prenosných zariadení. V oblasti vstavaných systémov sa USB rozhranie najčastejšie používa na komunikáciu s počítačom (konfigurácia zariadenia, aktualizácia firmvéru, čítanie dát a pod.), ale je možné využiť ho aj na pripojenie externých zariadení (kamera, disk, klávesnica atď.).</p>USB komunikácia predstavuje vždy dvojbodové spojenie medzi hostiteľom (Host – zvyčajne PC) a zariadením (Device). K jednému hostiteľovi je možné pripojiť maximálne 127 zariadení (periférií).</p><b>Vlastnosti: </b><ul><li>asynchrónna komunikácia </li><li>diferenciálna signalizácia (1 pár, USB 3.0 dva páry) </li><li>Single Master - topológia: hviezda (maximálne 5 úrovní s opakovačmi – HUB-mi)</li><li>NRZ kódovanie (NRZ space) + bit stuffing - polo dupex (verzia 3.0 je už plný duplex)</li><li>napájacie vodiče: 5V, 0,5 A</li></ul><b>Rýchlosti a verzie rozhrania:</b><ul><li>Low Speed (LS) – 1,5 Mb/s, USB 1.0, vzdialenosť do 3 m </li><li>Full Speed (FS) – 12 Mb/s, USB 1.0, vzdialenosť do 5 m </li><li>High Speed (HS) – 480 Mb/s, USB 2.0, vzdialenosť do 5 m</li><li>Super Speed (SS) – 5 Gb/s, USB 3.0, zvyčajne do 3 m (nie je špecifikované)</li><li>Super Speed+ (SS+) – 10 Gb/s, USB 3.1</li></ul>Uvedené rýchlosti predstavujú tzv. signálovú rýchlosť. Užitočná prenosová rýchlosť (t.j. rýchlosť prenosu samotných dát) je podstatne nižšia.<p><b>Deskriptor</b>Deskriptor je dátová štruktúra s definovaným dátovým formátom, ktorá obsahuje informácie a možnosti konfigurácie daného zariadenia. Každé zariadenie používa viacero deskriptorov (konfiguračný, zariadenia, interface, endpoint,...). Daný typ deskriptora uchováva v sebe informácie ako typ prenosu, počet endpointov a ich veľkosť, informácie o výrobcovi, verzií zariadenia a mnoho ďalších. Tieto informácie sú dôležité pre správnu funkčnosť zariadenia.</p><p><b>Endpoint</b>Endpoint je jedinečná časť USB zariadenia, ktorá zabezpečuje prepojenie komunikačných rúr medzi hostom a zariadením (obr.3). Každé zariadenie má viacero endpointov, kde každý endpoint má svoju adresu. Endpoint môže byť nakonfigurovaný rôznymi spôsobmi pre rôzne typy prenosov. Má definované požiadavky na frekvenciu a latenciu prístupu, maximálnu veľkosť dátového toku, správanie pri obsluhe chýb, svoje číslo a smer. Endpoint na adrese 0 (EP0) musí byť definovaný v každom zariadení, pretože preberá riadiacu úlohu a enumeráciu zariadenia pri jeho pripojení k PC. Ako jediný zo všetkých je obojsmerný, ostatné endpointy môžu byť nakonfigurované ako IN alebo OUT.</p><br><img src='img/USBkomunikacnyTok.jpg'><br>Obr.3 Principiálna schéma zariadenia USB <a href='https://dspace.cvut.cz/bitstream/handle/10467/24193/F3-BP-2014-Ondricka-Matej-prace.pdf?sequence=3&isAllowed=y'> [3]</a><p> <b>Rúra</b>USB rúra (pipe) vytvára schopnosť prenosu dát medzi softvérom hostiteľa cez pamäťový buffer a endpointom zariadenia (obr.3). Default Control Pipe je rúra vyhradená pre EP0. Slúži na prečítanie identifikačných a konfiguračných informácií o pripojenom zariadení a konfiguráciu samotného zariadenia. Každá rúra udáva svoj stav (nečinná/obsadená). Paketom IRP (I/O Request Packet) sa zadáva požiadavka na využitie rúry. Ak je rúra voľná, zablokuje sa pre ostatných a prenesie sa požadovaný počet bajtov. Nie je problém preniesť väčšie množstvo dát, ako sa zmestí do jedného dátového paketu, pretože obsluha rúr je automatizovaná hostiteľským radičom. Existujú dva typy rúr: Rúry správ – používajú sa v riadiacich prenosoch, kde dáta majú definovanú štruktúru. Prúdové rúry – používajú sa v ostatných typoch prenosov a nemajú presne definovanú dátovú štruktúru. Tento typ rúry je správ jednosmerný.</p> <p><b>Paket</b>Hostiteľský radič spracováva príkazy ovládača, na základe ktorých vytvára transakcie. Transakcia je zložená z niekoľkých typov paketov. Transakcie sa vkladajú do úsekov, ktoré nazývame (mikro) rámce. V prípade rámca je jeho dĺžka 1 ms, v prípade mikrorámca 125 µs. Mikrorámce sú definované od štandardu USB2.0 v režime High Speed. Pakety rozdeľujeme na nasledovné typy: Token – slúži pre nadviazanie komunikácie s konkrétnym zariadením. Určuje smer prenosu, adresu zariadenia a číslo endpointu. Data – po nadviazaní prenosu sa posielajú užitočné dátové pakety. Handshake – slúži pre potvrdenie prenosu. Pre kontrolu správnosti odoslaného dátového paketu je v ňom uložený kontrolný súčet CRC. Špeciálne – hlásenie o chybách, doplňujúce informácie pre dátové prenosy.</p><p><b>Typy prenosov</b>V špecifikácií USB 2.0 sa uvádzajú štyri typy prenosov: Riadiaci – základný a nevyhnutný typ pre prenos konfiguračných, stavových a riadiacich dát so zariadením. Prenos prebieha prostredníctvom EP0. Maximálna veľkosť paketu je 64 bajtov pre High Speed režim. Izochronný – slúži pre prenos streamov (audio, video) v reálnom čase. Štandardne sa prevedie jedna transakcia za mikrorámec. Latencia odosielania dát je garantovaná, v prípade chybnej transakcie sa prenos neopakuje. Maximálna veľkosť paketu je 1024 bajtov pre High Speed režim. Objemový – slúži pre spoľahlivý prenos dát. Nie je rezervovaná žiadna prenosová kapacita, ale využíva sa zostávajúca. V prípade chyby sa prenos opakuje (CRC zabezpečenie). Maximálna veľkosť paketu je 512 bajtov pre High Speed režim. Prerušovací – slúži pre bezprostredné obslúženie zariadenia, kde malý dátový paket musí byť spoľahlivo a čo najrýchlejšie prenesený. Využíva sa pri vstupných zariadeniach ako napr. klávesnica a myš. V prípade chyby sa prenos opakuje. Maximálna veľkosť paketu je 1024 bajtov pre High Speed režim.</p></div>");
	$(".backCom").addClass("component");
	$(".usb2").removeClass("component");
	$(".usb2").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "block"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*------------------------------------------------------------*/

if($(".usb3").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".usb3").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("USB 3.0 port");
	//$(".textInfo").html("<p>USB 3.0 je nový štandard, ktorý navýšil maximálnu teoretickú priepustnosť desaťnásobne. V praxi sa pri práci s externými diskami dosahuje bežne viac ako 120 MB/s. Pri práci s malými súbormi nie je nárast rýchlosti oproti USB 2.0 príliš výrazný, ale s veľkosťou súborov rastie a je zvyčajne dvojnásobný až trojnásobný.</p><p>Konektor pre USB 3.0 vyzerá zvonku podobne ako pre USB 2.0, je zložitejší a obsahuje viac vodičov. Konektor v počítači je možné rozoznať zvyčajne podľa farby plastu: Konektor pre USB 3.0 má vnútri modrý plast. Konektory USB 3.0 tiež bývajú často označené značkou SS (Super Speed). Je možné bezproblémovo pripojiť USB 3.0 zariadenia do konektoru pre USB 2.0 a naopak, v takom prípade ale dôjde k zníženiu rýchlosti USB 3.0 zariadení na rýchlosti zodpovedajúcej staršej verzii. Je potrebné poznamenať, že USB 3.0 nepodporuje pripojenie starých zariadení štandardu USB 1.1, ktoré po zapojení nemusia fungovať. </p><button class='accordion'>?????</button><div class='panel'><p>Univerzálna sériová zbernica (USB – Universal Serial Bus) je priemyselným štandardom, ktorý popisuje komunikáciu medzi počítačom a inými elektronickými zariadeniami. Štandard definuje okrem komunikačných protokolov aj káble, konektory a spôsob napájania zariadení. Pôvodný zámer vývoja USB bol štandardizovanie pripojenia počítačových periférií, ako klávesnica, myš, tlačiareň, prenosné disky, sieťové adaptéry a pod. Postupne sa toto rozhranie udomácnilo aj v iných zariadeniach ako napr. smartfóny, tablety, herné konzoly. USB úspešne nahradilo viacero rozhraní, sériových aj paralelných. V súčasnosti je tiež využívané ako univerzálny spôsob napájania prenosných zariadení. V oblasti vstavaných systémov sa USB rozhranie najčastejšie používa na komunikáciu s počítačom (konfigurácia zariadenia, aktualizácia firmvéru, čítanie dát a pod.), ale je možné využiť ho aj na pripojenie externých zariadení (kamera, disk, klávesnica atď.).</p>USB komunikácia predstavuje vždy dvojbodové spojenie medzi hostiteľom (Host – zvyčajne PC) a zariadením (Device). K jednému hostiteľovi je možné pripojiť maximálne 127 zariadení (periférií).</p><b>Vlastnosti: </b><ul><li>asynchrónna komunikácia </li><li>diferenciálna signalizácia (1 pár, USB 3.0 dva páry) </li><li>Single Master - topológia: hviezda (maximálne 5 úrovní s opakovačmi – HUB-mi)</li><li>NRZ kódovanie (NRZ space) + bit stuffing - polo dupex (verzia 3.0 je už plný duplex)</li><li>napájacie vodiče: 5V, 0,5 A</li></ul><b>Rýchlosti a verzie rozhrania:</b><ul><li>Low Speed (LS) – 1,5 Mb/s, USB 1.0, vzdialenosť do 3 m </li><li>Full Speed (FS) – 12 Mb/s, USB 1.0, vzdialenosť do 5 m </li><li>High Speed (HS) – 480 Mb/s, USB 2.0, vzdialenosť do 5 m</li><li>Super Speed (SS) – 5 Gb/s, USB 3.0, zvyčajne do 3 m (nie je špecifikované)</li><li>Super Speed+ (SS+) – 10 Gb/s, USB 3.1</li></ul>Uvedené rýchlosti predstavujú tzv. signálovú rýchlosť. Užitočná prenosová rýchlosť (t.j. rýchlosť prenosu samotných dát) je podstatne nižšia.<p><b>Deskriptor</b>Deskriptor je dátová štruktúra s definovaným dátovým formátom, ktorá obsahuje informácie a možnosti konfigurácie daného zariadenia. Každé zariadenie používa viacero deskriptorov (konfiguračný, zariadenia, interface, endpoint,...). Daný typ deskriptora uchováva v sebe informácie ako typ prenosu, počet endpointov a ich veľkosť, informácie o výrobcovi, verzií zariadenia a mnoho ďalších. Tieto informácie sú dôležité pre správnu funkčnosť zariadenia.</p><p><b>Endpoint</b>Endpoint je jedinečná časť USB zariadenia, ktorá zabezpečuje prepojenie komunikačných rúr medzi hostom a zariadením (obr.3). Každé zariadenie má viacero endpointov, kde každý endpoint má svoju adresu. Endpoint môže byť nakonfigurovaný rôznymi spôsobmi pre rôzne typy prenosov. Má definované požiadavky na frekvenciu a latenciu prístupu, maximálnu veľkosť dátového toku, správanie pri obsluhe chýb, svoje číslo a smer. Endpoint na adrese 0 (EP0) musí byť definovaný v každom zariadení, pretože preberá riadiacu úlohu a enumeráciu zariadenia pri jeho pripojení k PC. Ako jediný zo všetkých je obojsmerný, ostatné endpointy môžu byť nakonfigurované ako IN alebo OUT.</p><br><img src='img/USBkomunikacnyTok.jpg'><br>Obr.3 Principiálna schéma zariadenia USB <a href='https://dspace.cvut.cz/bitstream/handle/10467/24193/F3-BP-2014-Ondricka-Matej-prace.pdf?sequence=3&isAllowed=y'> [3]</a><p> <b>Rúra</b>USB rúra (pipe) vytvára schopnosť prenosu dát medzi softvérom hostiteľa cez pamäťový buffer a endpointom zariadenia (obr.3). Default Control Pipe je rúra vyhradená pre EP0. Slúži na prečítanie identifikačných a konfiguračných informácií o pripojenom zariadení a konfiguráciu samotného zariadenia. Každá rúra udáva svoj stav (nečinná/obsadená). Paketom IRP (I/O Request Packet) sa zadáva požiadavka na využitie rúry. Ak je rúra voľná, zablokuje sa pre ostatných a prenesie sa požadovaný počet bajtov. Nie je problém preniesť väčšie množstvo dát, ako sa zmestí do jedného dátového paketu, pretože obsluha rúr je automatizovaná hostiteľským radičom. Existujú dva typy rúr: Rúry správ – používajú sa v riadiacich prenosoch, kde dáta majú definovanú štruktúru. Prúdové rúry – používajú sa v ostatných typoch prenosov a nemajú presne definovanú dátovú štruktúru. Tento typ rúry je správ jednosmerný.</p> <p><b>Paket</b>Hostiteľský radič spracováva príkazy ovládača, na základe ktorých vytvára transakcie. Transakcia je zložená z niekoľkých typov paketov. Transakcie sa vkladajú do úsekov, ktoré nazývame (mikro) rámce. V prípade rámca je jeho dĺžka 1 ms, v prípade mikrorámca 125 µs. Mikrorámce sú definované od štandardu USB2.0 v režime High Speed. Pakety rozdeľujeme na nasledovné typy: Token – slúži pre nadviazanie komunikácie s konkrétnym zariadením. Určuje smer prenosu, adresu zariadenia a číslo endpointu. Data – po nadviazaní prenosu sa posielajú užitočné dátové pakety. Handshake – slúži pre potvrdenie prenosu. Pre kontrolu správnosti odoslaného dátového paketu je v ňom uložený kontrolný súčet CRC. Špeciálne – hlásenie o chybách, doplňujúce informácie pre dátové prenosy.</p><p><b>Typy prenosov</b>V špecifikácií USB 2.0 sa uvádzajú štyri typy prenosov: Riadiaci – základný a nevyhnutný typ pre prenos konfiguračných, stavových a riadiacich dát so zariadením. Prenos prebieha prostredníctvom EP0. Maximálna veľkosť paketu je 64 bajtov pre High Speed režim. Izochronný – slúži pre prenos streamov (audio, video) v reálnom čase. Štandardne sa prevedie jedna transakcia za mikrorámec. Latencia odosielania dát je garantovaná, v prípade chybnej transakcie sa prenos neopakuje. Maximálna veľkosť paketu je 1024 bajtov pre High Speed režim. Objemový – slúži pre spoľahlivý prenos dát. Nie je rezervovaná žiadna prenosová kapacita, ale využíva sa zostávajúca. V prípade chyby sa prenos opakuje (CRC zabezpečenie). Maximálna veľkosť paketu je 512 bajtov pre High Speed režim. Prerušovací – slúži pre bezprostredné obslúženie zariadenia, kde malý dátový paket musí byť spoľahlivo a čo najrýchlejšie prenesený. Využíva sa pri vstupných zariadeniach ako napr. klávesnica a myš. V prípade chyby sa prenos opakuje. Maximálna veľkosť paketu je 1024 bajtov pre High Speed režim.</p></div>");
	$(".backCom").addClass("component");
	$(".usb3").removeClass("component");
	$(".usb3").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "block"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-----------------------------------------------------------*/

if($(".jack").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".jack").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("4-pólový zvukový konektor");
	//$(".textInfo").html("<p>Jack je typ konektoru používaný hlavne pre prenos elektroakustického signálu.Nový konektor 4-pole Audio jack, prenáša zvukové aj obrazové signály. Je podobný konektorom na iných multimediálnych zariadeniach, ako sú napr. iPod, MP3 prehrávače a smartphony.</p><p>Tento štýl konektora sa niekedy označuje ako „ TRRS “, čo je skratka pre „Tip-Ring-Ring-Sleeve”.</p><p>Nasledujúca tabuľka zobrazuje konfiguráciu rôznych najčastejšie využívaných zariadení:<br> <img src='img/AudioVideoJack.png'><br>Tab. konfigurácia rôznych najčastejšie využívaných zariadení <a href='https://www.raspberrypi-spy.co.uk/2014/07/raspberry-pi-model-b-3-5mm-audiovideo-jack/'>[1]</a></p><p><b>Dostupnosť:</b><br>Káble sú ľahko dostupné, ale nie všetky spĺňajú rovnaké štandardy. Ako vidíte z tabuľky, všetky konektory, ktoré majú uzemnenie na „Ring 2“ budú fungovať s počítačom Raspberry Pi aj keď videokamera bude vyžadovať výmenu konektora.</p><p>Kontrola správnosti typu konektora kábla (Multimeter Continuity Check): Ak máte multimeter, môžete skontrolovať, kde je na konektore kábla uzemnenie. Skontrolujte spojenie medzi krúžkami na 3,5mm zástrčke konektora (jack) a vonkajším kovovým plášťom na farebných konektoroch RCA. Ak je vonkajší kovový plášť pripojený ku „Ring 2“, ako je znázornené vyššie, typ konektora na kábli by mal byť v poriadku. Ak sa na „Sleeve“ objaví uzemnenie, kábel by sa nemal používať so zvukovým konektorom na zariadení Raspberry Pi. </p>");
	$(".backCom").addClass("component");
	$(".jack").removeClass("component");
	$(".jack").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "block"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/

if($(".microHDMI").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".microHDMI").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("micro HDMI port");
	//$(".textInfo").html("<p>Micro HDMI má rovnaké vlastnosti ako HDMI (High-Definition Multimedia Interface), jediný rozdiel je v rozmeroch konektora. Micro HDMI sa využíva v dnešnej dobe aj v mobilných zariadeniach. Tieto konektory sú však postupne nahrádzané USB-C portmi. </p><button class='accordion'>?????</button><div class='panel'><p>HDMI (High-Definition Multimedia Interface) je digitálne rozhranie pre multimediálne zariadenia, ktoré prenáša nekomprimovaný video a komprimovaný alebo nekomprimovaný audio obsah vo vysokom rozlíšení zo zdrojového do zobrazovacieho zariadenia. Má 19 signálových vodičov v jednom kábli, ktorý vyzerá podobne ako bežný USB kábel. Rozhranie je schopné prenášať 5 až 18 Gbps. Norma má dostatočnú rezervu aj do budúcnosti, jej priepustnosť je dostatočná aj pre viackanálové video a audio. HDMI nedefinuje maximálnu dĺžku kábla. Dlhší kábel môže spôsobiť nestabilitu a blikanie na obrazovke.</p><p>HDMI využíva štandard EIA/CEA-861 (Electronic Industries Alliance/Consumer Electronics Association). Všetky HDMI zdroje musia podporovať sRGB farebný priestor s 8-bit farebnou hĺbkou. Pre audio platí podpora PCM zvuku, ostatné formáty sú dobrovoľné.</p><p>HDMI využíva niekoľko samostatných komunikačných kanálov. Ide o protokoly ako DDC (Display Data Channel), TMDS (Transition Minimized Differential Signaling), CEC (Consumer Electronics Control), ARC (Audio Return Channel) a HEC (HDMI Ethernet Channel). </p><p><b>Konektory HDMI kábla</b><br>V súčasnosti existujú tri typy HDMI konektorov: A, B a C. Typy A a B sú definované od verzie 1.0, typ C až od verzie 1.3.<br><ul><li><b>Typ A</b> má 19 pinov a šírku pásma pre podporu všetkých súčasných SDTV, EDTV a HDTV režimov. Rozmery konektora sú 13,9 mm na šírku a 4,45 mm na výšku. Typ A je fyzicky kompatibilný so single link DVI-D.</li><li><b>Typ B</b> má 29 pinov (21,2 mm do 4,45 mm) a má oproti typu A dvojnásobnú šírku pásma. Preto ho je možné použiť pre prenos videa vo veľmi vysokom rozlíšení, ako napríklad budúcom WQUXGA (3840 x 2400 bodov). Typ B je kompatibilný s dual link DVI-D, ale momentálne sa ešte nepoužíva.</li><li><b>Typ C-mini</b> konektor je určený pre prenosné zariadenia. Je menší ako konektor typu A (10,42 mm do 2,42 mm), ale má rovnaký počet pinov. Pomocou redukcie môže byť pripojený na typ A.</li><li><b>Typ D-micro</b> má 19 pinov s rozmermi 2,8 mm × 6,4 mm.</li></ul></p><b>HDMI verzie</b><br><b>HDMI 1.0, 1.1, 1.2</b><ul><li>Tieto verzie majú prenosovú rýchlosť 3.9 - 4,95 Gbit/s</li>	<li>Maximálne podporované rozlíšenie 1 600 x 1 200px pri 60fps</li>	<li>8-kanálový zvuk pri 768 kHz</li></ul><b>HDMI 1.3 </b><ul><li>rok 2006</li><li>prenosová do rýchlosti 10,2 Gbit/s</li><li>maximálne rozlíšenie 2 048 x 1 536 px pri 75 fps</li><li>8-kanálový zvuk pri 768 kHz</li><li>podpora štandardov Deep Color, Wider Color Gamut, Dolby TrueHD, DTS-HD, Auto Lip-Sync</li><li>nový mini HDMI konektor (Typ C)</li><li>dva druhy káblov: Káble kategória 1 certifikované káble, ktoré boli testované na 74,5 MHz (1080i/720p) a kategória 2 certifikované káble, ktoré boli testované na 340 MHz (1600p)</li></ul><b>HDMI 1.4 </b><ul><li>rok 2009</li><li>zvýšenie maximálneho rozlíšenia na 4K×2K (typicky 3840×2160) pri 24 Hz/25 Hz/30 Hz a 4096×2160 pri 24 Hz</li><li>Podpora viacerých 3D formátov. 3D snímky sa prenášajú (3D frame packing) pri 720p50 a 1080p24 (alebo 720p60 a 1080p24) teda progresívne 1280x720 a 1920x1080s s 50 snímkami za sekundu</li><li>HDMI prenáša aj ďalšie sekundárne dáta cez CEC (Consumer Electronics Control) ako sú ARC (Audio Return Channel) a HEC (HDMI Ethernet Channel) protokoly. HEC podporuje dátový prenos až do 100 Mb/s</li></ul><b>HDMI 2.0 </b><ul><li>rok 2013</li><li>podporuje 4K obraz (4 096 x 2 160 px) pri 60 fps, dátový tok až do 18 Gbit/s</li><li>32-kanálový zvuk pri 1 536 kHz</li><li>podpora Dual Viewing pre dva zdroje obrazu na jednom zobrazovači, multi-stream zvuk, podporu formátu 21:9, dynamické Auto Lip-Sync</li></ul><b>HDMI 2.0a </b><ul><li>rok 2015</li><li>podpora statického HDR obrazu</li></ul><b>HDMI 2.1 </b><ul><li>rok 2017</li><li>podporuje vyššie rozlíšenia obrazu až do 10K (10 240 x 4 320 px, 21:9) a zobrazovacích frekvencií - 4K obraz (3 840 x 2 160 px, 16:9) pri 120 Hz, 8K (7 680 x 4 320 px, 16:9) pri 60 Hz, dátový tok až do 48 Gbit/s</li><li>podpora dynamického HDR, eARC (Enhanced Audio Return Channel) - zjednodušuje prepojenie a podporuje najpokročilejšie zvukové formáty a najvyššiu kvalitu zvuku</li><li>prenosové pásmo 48 Gbit/s je využiteľné s káblom Ultra High Speed HDMI</li><li>u monitorov podpora VRR (Variable Refresh Rate) známych pod názvami FreeSync a G-Sync</li><li>spätne kompatibilné s predchádzajúcimi špecifikáciami HDMI</li></ul><p><b>Kompatibilita s DVI</b><br>DVI signál je kompatibilný s rozhraním HDMI a to bez straty kvality obrazu, ale neumožňuje prenos zvuku alebo signálu z diaľkového ovládania. Tento problém musí byť riešený adaptérmi alebo prídavnými káblami.</p><b>Výhody HDMI</b><ul><li>Prenos nekomprimovaných dát.</li><li>Potreba len jedného káblu.</li><li>Digitálny prenos obrazu znamená, že obraz bude buď bez chyby, alebo bude štvorčekovaný, resp. trhaný, alebo nebude vôbec.</li><li>Obraz v maximálnom rozlíšení (HD) je celkovo 2× až 5× podrobnejší ako obraz v štandardnom rozlíšení, medzery medzi riadkami sú menšie alebo nepostrehnuteľné. Jeho väčšia podrobnosť umožňuje pohodlné sledovanie na obrazovkách s väčšími uhlopriečkami.</li><li>Možnosť prenosu až 8-kanálového nekomprimovaného digitálneho zvuku.</li></ul></div>");
	$(".backCom").addClass("component");
	$(".microHDMI").removeClass("component");
	$(".microHDMI").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "block"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/

if($(".usbC").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".usbC").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("USB-C port");
	//$(".textInfo").html("<p><b>USB-C</b> je najnovší konektorový štandard USB (Universal Serial Bus - Univerzálna sériová zbernica). Konektor USB-C sa rozmermi podobá na micro USB je však oválny a symetrický. Vlastnosťami sa podobá na konektor Lightning od Apple, nie je však s ním zhodný. Využitím novších USB štandardov vyvinutých v rovnakom roku (USB 3.1 a USB Power Delivery) dosahuje potom USB zbernica s konektorom typu C vyššie prenosové rýchlosti a káble umožňujú prenášať vyšší výkon. </p><p>Konektor USB-C je 24 pinový, symetrický (12 kontaktov hore, 12 dolu). Nezáleží na jeho orientácii a preto sa do protikusu zasunie na prvý pokus. Piny navyše, oproti predchádzajúcim verziám (4 až 5 pinov oproti USB 2 a 9 pinov oproti USB 1) slúžia ďalším protokolom ako sú DisplayPort 1.3, PCI Express a Base-t Ethernet. </p><p>Konektory USB-C sú menšie a odolnejšie, s typickou mechanickou životnosťou 10 000 cyklov. Káble majú podporovať prenos až 100W energie na napájanie a nabíjanie a prenosovú rýchlosť 10 Gbit/s. Vo verziách USB 1 a 2 mohli zariadenia prostredníctvom zbernice odoberať prúd maximálne 100 mA resp. 500 mA pri napätí 5 V. Maximom USB-C je 5 A pri 20 V, teda 100 W. V porovnaní predchádzajúcou verziou (500 mA x 5 V = 2,5 W) je to až 40-krát viac, čo napríklad umožňuje napájanie väčšiny notebookov káblom USB-C namiesto napájacieho sieťového kábla alebo omnoho rýchlejšie nabíjanie mobilov.</p><b>Výhody</b><ul><li>výška konektora iba 2,4 mm</li><li>reverzibilná orientácia konektora a smeru kábla</li><li>prenos USB signálov, ale aj alternatívnych protokolov (PCIe alebo DisplayPort) jedným káblom</li><li>schopnosť preniesť ultra-HD 4K video a audio</li></ul><button class='accordion'>?????</button><div class='panel'><p>Univerzálna sériová zbernica (USB – Universal Serial Bus) je priemyselným štandardom, ktorý popisuje komunikáciu medzi počítačom a inými elektronickými zariadeniami. Štandard definuje okrem komunikačných protokolov aj káble, konektory a spôsob napájania zariadení. Pôvodný zámer vývoja USB bol štandardizovanie pripojenia počítačových periférií, ako klávesnica, myš, tlačiareň, prenosné disky, sieťové adaptéry a pod. Postupne sa toto rozhranie udomácnilo aj v iných zariadeniach ako napr. smartfóny, tablety, herné konzoly. USB úspešne nahradilo viacero rozhraní, sériových aj paralelných. V súčasnosti je tiež využívané ako univerzálny spôsob napájania prenosných zariadení. V oblasti vstavaných systémov sa USB rozhranie najčastejšie používa na komunikáciu s počítačom (konfigurácia zariadenia, aktualizácia firmvéru, čítanie dát a pod.), ale je možné využiť ho aj na pripojenie externých zariadení (kamera, disk, klávesnica atď.).</p>USB komunikácia predstavuje vždy dvojbodové spojenie medzi hostiteľom (Host – zvyčajne PC) a zariadením (Device). K jednému hostiteľovi je možné pripojiť maximálne 127 zariadení (periférií).</p><b>Vlastnosti: </b><ul><li>asynchrónna komunikácia </li><li>diferenciálna signalizácia (1 pár, USB 3.0 dva páry) </li><li>Single Master - topológia: hviezda (maximálne 5 úrovní s opakovačmi – HUB-mi)</li><li>NRZ kódovanie (NRZ space) + bit stuffing - polo dupex (verzia 3.0 je už plný duplex)</li><li>napájacie vodiče: 5V, 0,5 A</li></ul><b>Rýchlosti a verzie rozhrania:</b><ul><li>Low Speed (LS) – 1,5 Mb/s, USB 1.0, vzdialenosť do 3 m </li><li>Full Speed (FS) – 12 Mb/s, USB 1.0, vzdialenosť do 5 m </li><li>High Speed (HS) – 480 Mb/s, USB 2.0, vzdialenosť do 5 m</li><li>Super Speed (SS) – 5 Gb/s, USB 3.0, zvyčajne do 3 m (nie je špecifikované)</li><li>Super Speed+ (SS+) – 10 Gb/s, USB 3.1</li></ul>Uvedené rýchlosti predstavujú tzv. signálovú rýchlosť. Užitočná prenosová rýchlosť (t.j. rýchlosť prenosu samotných dát) je podstatne nižšia.<p><b>Deskriptor</b>Deskriptor je dátová štruktúra s definovaným dátovým formátom, ktorá obsahuje informácie a možnosti konfigurácie daného zariadenia. Každé zariadenie používa viacero deskriptorov (konfiguračný, zariadenia, interface, endpoint,...). Daný typ deskriptora uchováva v sebe informácie ako typ prenosu, počet endpointov a ich veľkosť, informácie o výrobcovi, verzií zariadenia a mnoho ďalších. Tieto informácie sú dôležité pre správnu funkčnosť zariadenia.</p><p><b>Endpoint</b>Endpoint je jedinečná časť USB zariadenia, ktorá zabezpečuje prepojenie komunikačných rúr medzi hostom a zariadením (obr.3). Každé zariadenie má viacero endpointov, kde každý endpoint má svoju adresu. Endpoint môže byť nakonfigurovaný rôznymi spôsobmi pre rôzne typy prenosov. Má definované požiadavky na frekvenciu a latenciu prístupu, maximálnu veľkosť dátového toku, správanie pri obsluhe chýb, svoje číslo a smer. Endpoint na adrese 0 (EP0) musí byť definovaný v každom zariadení, pretože preberá riadiacu úlohu a enumeráciu zariadenia pri jeho pripojení k PC. Ako jediný zo všetkých je obojsmerný, ostatné endpointy môžu byť nakonfigurované ako IN alebo OUT.</p><br><img src='img/USBkomunikacnyTok.jpg'><br>Obr.3 Principiálna schéma zariadenia USB <a href='https://dspace.cvut.cz/bitstream/handle/10467/24193/F3-BP-2014-Ondricka-Matej-prace.pdf?sequence=3&isAllowed=y'> [3]</a><p> <b>Rúra</b>USB rúra (pipe) vytvára schopnosť prenosu dát medzi softvérom hostiteľa cez pamäťový buffer a endpointom zariadenia (obr.3). Default Control Pipe je rúra vyhradená pre EP0. Slúži na prečítanie identifikačných a konfiguračných informácií o pripojenom zariadení a konfiguráciu samotného zariadenia. Každá rúra udáva svoj stav (nečinná/obsadená). Paketom IRP (I/O Request Packet) sa zadáva požiadavka na využitie rúry. Ak je rúra voľná, zablokuje sa pre ostatných a prenesie sa požadovaný počet bajtov. Nie je problém preniesť väčšie množstvo dát, ako sa zmestí do jedného dátového paketu, pretože obsluha rúr je automatizovaná hostiteľským radičom. Existujú dva typy rúr: Rúry správ – používajú sa v riadiacich prenosoch, kde dáta majú definovanú štruktúru. Prúdové rúry – používajú sa v ostatných typoch prenosov a nemajú presne definovanú dátovú štruktúru. Tento typ rúry je správ jednosmerný.</p> <p><b>Paket</b>Hostiteľský radič spracováva príkazy ovládača, na základe ktorých vytvára transakcie. Transakcia je zložená z niekoľkých typov paketov. Transakcie sa vkladajú do úsekov, ktoré nazývame (mikro) rámce. V prípade rámca je jeho dĺžka 1 ms, v prípade mikrorámca 125 µs. Mikrorámce sú definované od štandardu USB2.0 v režime High Speed. Pakety rozdeľujeme na nasledovné typy: Token – slúži pre nadviazanie komunikácie s konkrétnym zariadením. Určuje smer prenosu, adresu zariadenia a číslo endpointu. Data – po nadviazaní prenosu sa posielajú užitočné dátové pakety. Handshake – slúži pre potvrdenie prenosu. Pre kontrolu správnosti odoslaného dátového paketu je v ňom uložený kontrolný súčet CRC. Špeciálne – hlásenie o chybách, doplňujúce informácie pre dátové prenosy.</p><p><b>Typy prenosov</b>V špecifikácií USB 2.0 sa uvádzajú štyri typy prenosov: Riadiaci – základný a nevyhnutný typ pre prenos konfiguračných, stavových a riadiacich dát so zariadením. Prenos prebieha prostredníctvom EP0. Maximálna veľkosť paketu je 64 bajtov pre High Speed režim. Izochronný – slúži pre prenos streamov (audio, video) v reálnom čase. Štandardne sa prevedie jedna transakcia za mikrorámec. Latencia odosielania dát je garantovaná, v prípade chybnej transakcie sa prenos neopakuje. Maximálna veľkosť paketu je 1024 bajtov pre High Speed režim. Objemový – slúži pre spoľahlivý prenos dát. Nie je rezervovaná žiadna prenosová kapacita, ale využíva sa zostávajúca. V prípade chyby sa prenos opakuje (CRC zabezpečenie). Maximálna veľkosť paketu je 512 bajtov pre High Speed režim. Prerušovací – slúži pre bezprostredné obslúženie zariadenia, kde malý dátový paket musí byť spoľahlivo a čo najrýchlejšie prenesený. Využíva sa pri vstupných zariadeniach ako napr. klávesnica a myš. V prípade chyby sa prenos opakuje. Maximálna veľkosť paketu je 1024 bajtov pre High Speed režim.</p></div>");
	$(".backCom").addClass("component");
	$(".usbC").removeClass("component");
	$(".usbC").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "block"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/

if($(".memory").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".memory").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("Slot pre pamäťovú kartu a zavedienie OS do Raspberry Pi");
	//$(".textInfo").html("<p>Na pamäťovej karte je uložený operačný systém, ako aj vaše súbory. Pamäťová karta väčšinou nie je súčasťou balenia a je potrebné ju osobitne dokúpiť.  </p><button class='accordion'>?????</button><div class='panel'><p>Zavedenie OS do Raspberry Pi je odlišné od spôsobov, na ktoré sme zvyknutí pri inštalácií OS Windows alebo Linux. Spoločnosť Raspberry Pi Fundation poskytuje mnoho operačných systémov, ktoré sú vyvinuté priamo pre Raspberry Pi. Najvhodnejšou voľbou pre použitie RPi ako klasického stolného PC je operačný systém Raspbian. Raspbian je verzia Debian Linux-u (Raspbian = Raspberry + Debian), ktorá je špeciálne vytvorená pre Raspberry  Pi. </p><p>Raspbian je voľne dostupný z webových stránok spoločnosti https://www.raspberrypi.org/v sekcii Downloads. Existujú dve možnosti stiahnutia OS. Jednou možnosťou je stiahnutie torrent odkazu a následné stiahnutie torrent downloaderom. Druhý spôsob umožňuje stiahnutie priamo z webových stránok. Stiahnutý ZIP súbor rozbalíme a získame jeden .img súbor. Konkrétny návod na stránke: <a href='https://www.raspberrypi.org/'>www.raspberrypi.org</a></p></div>");
	$(".backCom").addClass("component");
	$(".memory").removeClass("component");
	$(".memory").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "block"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/

if($(".procesor").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".procesor").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("Procesor");
	//$(".textInfo").html("<p>BCM2711 je štvorjadrový procesor Cortex-A72 s 64 bitmi, ktorý má grafickú jednotku Videocore VI Graphics Processing Unit (GPU), ktorá spracováva všetky grafické vstupy / výstupy. Bol navrhnutý tak, aby sa vysporiadal s rozlíšením 4K a videom H.265, ako aj so škálovaním videa, vstupom kamery a všetkými výstupmi HDMI a kompozitného videa. 2711 má tiež „správne“ rozhrania USB3.0 a gigabit Ethernet. <a href='https://raspi.tv/2019/raspberry-pi-4-launches-with-bcm2711-quad-core-cortex-a72-64-bit-soc-running-at-1-5ghz-with-dual-4k-display-capability'>[8]</a></p><button class='accordion'>?????</button><div class='panel'><p><b>Mikroprocesor</b><br>Mikroprocesor (skrátene µP či uP) je druh procesora, ktorý je ako celok integrovaný do jediného integrovaného obvodu. Procesor býva súčasťou viacerých elektronických zariadení. Vzhľadom na to, že softvérom (postupnosťou inštrukcií, ktoré procesor spracováva) je možné jednoduchšie realizovať aj veľmi zložité elektronické obvody, a vzhľadom na neustále klesajúce ceny a rastúce možnosti mikroprocesorov sa používajú takmer v každom zložitejšom elektronickom zariadení (rádiá, počítače, tlačiarne, pračky, chladničky, televízory a pod.).Hlavné druhy mikroprocesorov:<ul><li><b>CPU (Central Processing Unit - procesor základnej jednotky počítača)</b> - hlavný (mikro)procesor počítača (v minulosti však CPU nemala vždy podobu mikroprocesora)</li><li><b>GPU (grafický procesor)</b> – hlavný mikroprocesor grafickej karty</li><li><b>APU (Accelerated Processing Unit)</b> - CPU a GPU v jednom puzdre</li><li>matematický procesor (FPU), označovaný aj ako matematický koprocesor, dnes je väčšinou integrovaný s CPU v jednom puzdre.</li><li>zvukový procesor</li><li>signálový procesor (DSP procesor)</li><li>iné špecializované procesory</li></ul>	Pred vynájdením mikroprocesorov boli elektronické CPU vyrobené z oddelených TTL integrovaných obvodov; predtým z jednotlivých tranzistorov; a ešte skôr založené na elektrónkach. Existovali návrhy jednoduchých počítacích strojov založených na mechanických súčiastkach ako ozubené kolesá, hriadele, páky, tinkertoys atď. Leonardo Da Vinci navrhol jeden z nich, hoci ho nebolo možné zostaviť výrobnými postupmi jeho doby.</p><p><b>Bežné architektúry mikroprocesorov</b><br>AMD K5, K6, K6-2, K6-III, Duron, Athlon, Athlon XP, Athlon MP, Athlon XP-M, K10, AMD FX (bulldozer)<br>AMD Phenom II Athlon 64, Athlon 64 FX, Athlon 64 X2, Sempron, Turion 64<br>AMD Opteron<br>ARM family, StrongARM, Intel PXA2xx<br>RCA 1802 (aka RCA COSMAC, CDP1802)<br>DEC Alpha<br>Intel 4004, 4040<br>Intel 8080, 8085, Zilog Z80<br>Intel 8086, 8088, 80186, 80188, 80286, 80386, 80486 (Intel x86 architecture)<br>Intel Pentium, Pentium Pro, Celeron, Pentium II, Pentium III, Xeon, Pentium 4, Pentium D, Pentium M (Intel x86; parents of IA-64, with HP PA-RISC), Core i3, Core i5, Core i7, Core i9<br>Intel Itanium (architektúra IA-64)<br>Intel i860, i960<br>MIPS<br>Motorola 6800, MOS Technology 6502, Motorola 6809, WDC 65816<br>Motorola 68000, ColdFire<br>Motorola 88000 (parents of the PowerPC family, with POWER)<br>IBM POWER (parents of the PowerPC family, with 88000)<br>NSC 320xx<br>OpenCores OpenRISC<br>PA-RISC family (HP, parents to the IA-64 architecture, with x86)<br>PowerPC family, G3, G4, G5<br>National Semiconductor SC/MP („scamp“)<br>Signetics 2650<br>SPARC, UltraSPARC, UltraSPARC II–IV<br>SuperH family<br>Transmeta's Crusoe a Efficeon<br>INMOS Transputer</p><p><b>Vývoj mikroprocesorov</b> <a href='https://sk.wikipedia.org/wiki/Mikroprocesor'>[9]</a><br>1971 - prvý 4-bitový mikroprocesor 4004 od firmy Intel<br>1972 - prvý 8-bitový 8008<br>1974 - ďalší 8-bitový 8080 a prvé 8-bitové počítače - PET od Commodore (ten pracoval s OS CP/M) - neskôr i ďalšie mikroprocesory ako Motorola 68000 a počítače ako Sinclair ZX 81, Spectrum a Apple MOS <br>technology 6502 = Apple II<br>1978 - revolúcia - prvý 16-bitový mikroprocesor od Intelu - 8086 a 8087<br>1981 - IBM PC – prvýkrát použitý operačný systém MS-DOS - kompatibilita s CP/M<br>1983 - firma Intel vyrobila ďalší mikroprocesor XT - 8088<br>1984 - prvý AT mikroprocesor od firmy Intel - 80286, objavuje sa Amiga a Atari (od firmy Commodore), 68 000 (Motorola) a Macintosh (Apple Computer)<br>1985 - 32-bitový mikroprocesor 80386 DX (pracuje 32-bitovo vo vnútri aj navonok) s frekvenciou 16 MHz – 33 MHz (40 MHz verzia len od AMD)<br>1988 - 80386 SX (pracuje 32-bitovo vo vnútri a 16-bitovo navonok) pracujúci na frekvencii 16-33 MHz<br>pol. 1989 - 80486 s frekvenciou 33 – 50 MHz - obsahuje vyrovnávaciu pamäť a numerický koprocesor<br>1992 - Pentium 75-133 (najskôr napájaný 5 V - veľké zahrievanie, neskôr 3,3 V) - od Pentia 75 už možná face tzv. „duál Pentium“ - možnosť využívať viac procesorov (iba v programoch na to prispôsobených)<br>1997 - Pentium MMX (MMX - v procesore zabudované inštrukcie uľahčujúce spracovávanie operácií s multimediálnymi informáciami), Pentium Pro, Pentium II. Pentiá 75–120 boli vyrábané 0,6-mikrónovou <br>technológiou. Označenie pre procesory od iných výrobcov napr. PR-166 znamená výkonovo porovnateľný s Pentiom 166.<br>2000 - Prvý komerčne dostupný mikroprocesor pracujúci na frekvencii 1 GHz, AMD Athlon<br>2003 - AMD Athlon 64 FX - prvý komerčne predávaný 64-bitový procesor pre osobné počítače. Kompatibilné i s 32-bitovými aplikáciami.</p></div>");
	$(".backCom").addClass("component");
	$(".procesor").removeClass("component");
	$(".procesor").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "block"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/

if($(".ram").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".ram").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("LPDDR4 SDRAM");
	//$(".textInfo").html("<p>Pamäť počítača a obzvlášť jej časť pamäť programu je súčasťou počítača, s ktorou procesor pracuje najčastejšie.</p><p> Operačná Pamäť, ktorá je typu RAM (Random Access Memory = Pamäť s priamym Prístupom) je pamäťou, v ktorej sa ukladajú dáta, ktoré procesor počítača momentálne nespracováva, ale budú potrebné neskôr. Veľkou prednosťou operačnej pamäte oproti ostatným druhom pamätí (napr. oproti pevnému disku) je jej rýchlosť. Dáta do nej totiž možno uložiť/z nej načítať niekoľkonásobne rýchlejšie, ako by bolo možné napríklad pri použití pevného disku. Beží v nej operačný systém a ostatné spustené programy či procesy. Jej veľkosť a výkon majú priamy vplyv na to , koľko a akých programov môžete naraz spustiť. </p><p>Pamäťové moduly pozostávajú z pamäťových čipov, pričom v každom sa nachádzajú milióny tranzistorov a kondenzátorov. Operačná pamäť je štruktúrovaná pomocou stĺpcov a riadkov. Do oblastí, ktoré vznikli takýmto rozdelením pamäte sa zmestí len určité množstvo údajov. Operačná pamäť každého počítača je energeticky závislá, čo v praxi znamená, že po prerušení dodávky elektrického prúdu alebo po vypnutí počítača, sa všetky údaje, ktoré obsahovala, vymažú. Príčinou tejto energetickej závislosti sú použité moduly operačnej pamäte.</p><p><b>Kapacita</b><br>Najdôležitejším parametrom je kapacita operačnej pamäte, ktorá sa uvádza v „gigabyte“ (GBModel Raspberry Pi4  je možné zakúpiť s 1GB, 2GB alebo 4GB LPDDR4-3200 SDRAM. </p><p><b>Rýchlosť</b><br>Rýchlosť môže byť uvádzaná frekvenciou alebo dátovou priepustnosťou. DDR4 dosahuje bitovú rýchlosťou až 3200Mb/s na pin, čím poskytuje o 50% vyšší výkon ako LPDDR3 a spotrebujú približne o 40% menej energie pri 1,1V. Frekvencia pamäte interpretuje jej výkon a teda čím je vyššia, tým lepšie. Kľúčové parametre časovania DDR4: <br><table><tr><th>Speed grade</th><th>Clock rate (MHz)</th><th>Data rate(Mb/s/pin)</th><th>Write Latency Set A</th><th>Write Latency Set B</th><th>Read Latecy (DBI Disabled)</th><th>Read Latecy (DBI enabled)</th></tr><tr><td>-062</td><td>1600</td><td>3200</td><td>14</td><td>26</td><td>28</td><td>32</td></tr></table><br>Tab. 6 Parametre časovania DDR4 <a href='https://static6.arrow.com/aropdfconversion/849f2e1d517f66be6f651c4aac390d4bacfa6a92/200b_z00n_embedded_lpddr4short.pdf'>[10]</a></p><p><b>Zmeny DDR4 oproti predchádzajúcej verzii DDR3:</b> <ul><li>Zdvojnásobenie rýchlosti rozhrania a početné následné elektrické zmeny vrátane zmeny I / O štandardu na nízkonapäťovú logiku zakončenú výkyvom (LVSTL)</li><li>Zdvojnásobenie vnútornej veľkosti predbežného načítania a minimálnej prenosovej veľkosti</li><li>Zmena z 10-bitovej príkazovej / adresovej zbernice DDR na 6-bitovú zbernicu SDR</li><li>Prejdite z jedného 32-bitového zbernice na dva nezávislé 16-bitové zbernice</li></ul></p><button class='accordion'>?????</button><div class='panel'><p><b>Typy pamäte: </b><br><br>-<b>ROM</b> - Programuje sa maskami priamo vo výrobe a informácie v nej zaznamenané sa už nemôžu meniť. Využíva sa na trvalé uchovanie údajov a pri zapínaní sa spúšťa ako prvá. Obsahuje základné inštrukcie odkiaľ má program začať pracovať. <br><br>-<b>EPROM</b> – programovaná užívateľom. Pamäť je možné naprogramovať len v prístroji- programátor pamätí. K vymazaniu obsahuje je potrebné pamäť umiestniť do mazacieho zariadenia, produkujúce ultrafialové žiarenie. Pamäť EPROM dovoľuje len niekoľko desiatok preprogramovaní a nehodí sa pre rozsiahlejšie experimentálne práce. <br><br>-<b>PROM</b> – realizovaná ako raz programovateľná pamäť EPROM. Technologicky sa jedná o pamäť EPROM, avšak pamäť nie je možné mazať. <br><br>- <b>EEPROM</b> – pamäť je možné programovať ako v programátore tak priamo v systéme. Obsah sa programuje po jednotlivých adresách, vždy celé slovo. Programovanie je však pomalé. <br><br>- <b>FLASH</b> – Podobe ako pri EEPROM je ju možné programovať v programátore i v systéme. Programuje sa po jednotlivých adresách, mazať sa však musí celá. Pamäť FLASH o veľkej kapacite býva rozdelená na sektory, ktoré je možné programovať a mazať jednotlivo. Programovanie prebieha rýchlejšie než u EEPROM, mazanie je však pomalé. <br><br>- <b>RAM</b> – Operačná pamäť typu RAM je pamäťou, v ktorej sa ukladajú dáta, ktoré procesor počítača momentálne nespracováva ale budú potrebné neskôr. Veľkou Prednosťou operačnej pamäte oproti ostatným druhom pamätí (napr. oproti pevnému disku) je jej rýchlosť. Dáta do nej totiž možno uložiť/z nej načítať niekoľkonásobne rýchlejšie, ako by bolo možné napríklad pri použití pevného disku. Beží v nej operačný systém a ostatné spustené programy či procesy. Jej veľkosť a výkon majú priamy vplyv na to , koľko a akých programov môžete naraz spustiť. Obsah pamäte nie je po nabehnutí napájania definovaný. Program preto do nej musí byť najprv presunutý buď z niektorého z vyššie uvedených permanentných pamäti, z disku alebo po komunikačnom kanále z iného zariadenia. Naplnenie programovej pamäte z disku je typické pre personálne počítače. Program v pamäti RAM môže sám seba modifikovať, môže modifikovať i tabuľky vektorov prerušenia. </p><p><b>Pre realizáciu dátovej pamäte je možné využiť nasledujúce varianty: </b><br><br>-	<b>Statická pamäť RAM (SRAM)</b> je založená na matici buniek, tvorených klopnými obvodmi. Prakticky jediná technológia je v súčasnej dbe CMOS. Ovládanie SRAM je extrémne jednoduché: Výberom signálom CS je pamäťový obvod vybraný, impulzom na vstup WR je do pamäte zapisované, signál na vstupe OE slúži ako čítací povel, ktorý pripojuje trojstavové členy na dátovú zbernicu. Všetky bity adresy sú po celú dobu čítacieho a zapisovacieho cyklu udržované ako konštantné. <br><br>-	<b>Dynamická pamäť RAM (DRAM)</b> je založená na matici buniek, tvorených pamäťovými kondenzátormi a spínačmi. Pamäťový kondenzátor sa časom samovoľne vybíja a obsah DRAM sa musí pravidelne obnovovať. Ovládanie DRAM je zložitejšie než SRAM.  Adresa je multiplexovaná a je do obvodu privádzaná rovnakými vývodmi puzdra v dvoch krokoch. Riadiace signály RAS (ROW_Address Strobe) a CAS (Column Address Strobe). Tretí riadiaci signál WR určuje typ cyklu. Multiplexovanie adresy, generácie RAS a CAS a obnovovanie obsahu prevádza radič dynamickej RAM. Je to buď obvod naviac alebo je integrovaný v procesori. Pamäťová bunka v DRAM je veľmi jednoduchá a preto v prípade DRAM dosahuje vysokých kapacít v jednom puzdre a pri výhodnej cene. <br><br>-	<b>SDRAM (Synchrous Dynamic Random Access Memory)</b> je druh polovodičovej pamäte RAM. Je druhom dynamickej RAM (DRAM), kde prenosu údajov predchádza zápis adresy (multiplexovanej podobne ako u DRAM) a nastavenie nasledujúceho režimu, a samotný prenos údajov je riadený hodinovým signálom bez opakovaného zápisu adresy. Tým je umožnený zápis a čítanie údajov v blokoch („bursts“) výrazne vyššou rýchlosťou než v bežných DRAM (náhodný prístup je však samozrejme pomalší).</p></div>");
	$(".backCom").addClass("component");
	$(".ram").removeClass("component");
	$(".ram").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "block"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/


if($(".dsi").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".dsi").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("DSI display port");
	//$(".textInfo").html("<p>Sériové rozhranie displeja MIPI (MIPI DSI SM ) definuje vysokorýchlostné sériové rozhranie medzi hostiteľským procesorom a zobrazovacím modulom. Rozhranie umožňuje výrobcom integrovať displeje, aby sa dosiahol vysoký výkon, nízka spotreba a nízka elektromagnetická interferencia (EMI) pri súčasnom znížení počtu pinov a zachovaní kompatibility medzi rôznymi výrobcami. Dizajnéri môžu použiť MIPI DSI na uľahčenie brilantného farebného vykresľovania pre tie najnáročnejšie snímky a videozáznamy a na podporu prenosu stereoskopického obsahu.</p><p>MIPI DSI pracuje na fyzickej vrstve MIPI D-PHY. Používa súpravu príkazov definovanú v súprave príkazov MIPI Display (MIPI DCS). Zahŕňa štandard kompresie zobrazovacieho toku (DSC) od asociácie videoelektronických štandardov (VESA). Celkovo je sada funkcií MIPI DSI dosť podobná ako v novšej špecifikácii MIPI DSI-2, ktorá ponúka podporu pre D-PHY aj C-PHY.</p><button class='accordion'>?????</button><div class='panel'><table><tr><th></th><th>D-PHY 1,01 (1,0 Gbps / pruh)</th><th>D-PHY 1,1 (1,5 Gbps / pruh)</th><th>D-PHY 1,2 (2,5 Gbps / pruh)</th><th>D-PHY 2,0 (4,5 Gbps / pruh)</th><th>C-PHY</th></tr><tr><td>DSI 1.0</td><td>Áno</td><td>Áno</td><td>Áno</td><td>Áno</td><td>žiadny</td></tr><tr><td class='dva'>DSI 1.1</td><td class='dva'>Áno</td><td class='dva'>Áno</td><td class='dva'>Áno</td><td class='dva'>Áno</td><td class='dva'>žiadny</td></tr><tr><td>DSI 1.2</td><td>Áno</td><td>Áno</td><td>Áno</td><td>Áno</td><td>žiadny</td></tr><tr><td class='dva'>DSI 1.3</td><td class='dva'>Áno</td><td class='dva'>Áno</td><td class='dva'>Áno</td><td class='dva'>Áno</td><td class='dva'>žiadny</td></tr><tr><td>DSI-2 1.0</td><td>Áno</td><td>Áno</td><td>Áno</td><td>Áno</td><td>Áno</td></tr></table></div>");
	$(".backCom").addClass("component");
	$(".dsi").removeClass("component");
	$(".dsi").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "block"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/

if($(".csi").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".csi").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("CSI camera port");
	//$(".textInfo").html("<p>Serial Camera rozhrania (CSI) je špecifikácia pre mobilný priemysel procesor Interface (Mipi) Alliance. Definuje rozhranie medzi kamerou a hostiteľským procesorom. Najnovšími špecifikáciami aktívneho rozhrania sú CSI-2 v3.0, CSI-3 v1.1 a CCS v1.0, ktoré boli vydané v roku 2019, 2014 a 2017.</p><button class='accordion'>?????</button><div class='panel'><b>Normy:</b><br> <p><b>CSI-1</b><br> CSI-1 bolo pôvodné štandardné rozhranie MIPI pre kamery. Ukázalo sa ako architektúra na definovanie rozhrania medzi kamerou a hostiteľským procesorom. Jeho nástupcami boli MIPI CSI-2 a MIPI CSI-3, dva štandardy, ktoré sa stále vyvíjajú.</p><p><b>CSI-2 </b><br>Špecifikácia MIPI CSI-2 v1.0 bola vydaná v roku 2005. Ako možnosť fyzickej vrstvy sa používa buď D-PHY alebo C-PHY (oba štandardy sú stanovené alianciou MIPI). Protokol je rozdelený do nasledujúcich vrstiev:<br>Fyzická vrstva (C-PHY / D-PHY)<br>Lane Merger Layer.<br>Vrstva protokolu nízkej úrovne.<br>Vrstva prevodu z pixelov na bajt<br>Aplikačná vrstva<br></p><p>V apríli 2017 bola vydaná špecifikácia CSI-2 v2.0. CSI-2 v2.0 priniesla podporu farebnej hĺbky RAW-16 a RAW-20, zvýšenie virtuálnych kanálov zo 4 na 32, zníženie latencie a účinnosť prenosu (LRTE), kompresiu diferenciálneho impulzného kódu (DPCM) a šifrovanie, aby sa znížila spotreba energie Spektrálna hustota.</p><p>V septembri 2019 bola vydaná špecifikácia CSI-2 v3.0. CSI-2 v3.0 predstavil Unified Serial Link (USL), Smart Region of Interest (SROI), Krátky paket na konci prenosu (EoTp) a podporu farebnej hĺbky RAW-24.</p><p><b>CSI-3 </b><br>MIPI CSI-3 je vysokorýchlostný obojsmerný protokol, ktorý je určený predovšetkým na prenos obrazu a videa medzi kamerami a hostiteľmi v rámci viacvrstvovej siete zariadení M-PHY typu peer-to-peer, UniPro . Pôvodne bol vydaný v roku 2012 a bol znovu vydaný vo verzii 1.1 v roku 2014.</p><b>Technológia rýchlosti </b><br><table><tr><th>Rýchlosť M-PHY</th><th>Hodinová frekvencia</th><th>Bitová rýchlosť</th></tr><tr><td>Prevodovka 1</td><td>G1A<br>G1B</td><td>1,25 Gbit/s<br>1,49 Gbit/s</td></tr><tr><td class='dva'>Prevodovka 2</td><td class='dva'>G2A<br>G2B</td><td class='dva'>2,5 Gbit/s<br>2,9 Gbit/s</td></tr><tr><td>Prevodovka 3</td><td>G3A<br>G3B</td><td>5 Gbit/s<br>5,8 Gbit/s</td></tr></table><br>Tab. 2 Tabuľka rýhclostí <a href='https://en.wikipedia.org/wiki/Camera_Serial_Interface'>[6]</a></div>");
	$(".backCom").addClass("component");
	$(".csi").removeClass("component");
	$(".csi").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "block"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/

if($(".blueth").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".blueth").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("Bluetooth");
	//$(".textInfo").html("<p><b>Bluetooth</b><br>	Bluetooth je technológia bezdrôtovej výmeny dát na krátku vzdialenosť. Bluetooth je už dnes vo viacerých zariadeniach: slúchadlá, reproduktory, mobily... </p><p>Nová verzia Bluetooth 5 prináša ďalšie vylepšenia, ktoré sa však v starších zariadeniach nedajú uplatniť. Bluetooth je spätne kompatibilný. Zahŕňa štvornásobný rozsah ako Bluetooth 4.2, dvojnásobnú rýchlosť (Bluetooth 4 podporuje 2 Mbps, zatiaľ čo Bluetooth 5 dáva až 5Mbps) a osemnásobnú veľkosť dátových správ (Bluetooth 4  31 bajtov zatiaľ čo Bluetooth 5 až 255 bajtov. Týmto by sa mala zvýšiť rýchlosť párovania a taktiež zvýšiť stabilita pripojenia. Taktiež sa týmto zvýšil a urýchlil prenos dátových súborov. A najlepšou výhodou Bluetooth 5 je špecifikácia Bluetooth Low Energy (BLE). <a href='https://bestwirelessbluetoothheadphones.com/wiki/bluetooth-low-energy'>[3]</a></p><button class='accordion'>?????</button><div class='panel'><p>Bluetooth Low Energy sa začala používať v roku 2011. V porovnaní s klasickým Bluetooth má Bluetooth Low Energy poskytnúť značne zníženú spotrebu energie a náklady pri zachovaní podobného rozsahu komunikácie (Tab. 1).</p>Tab. 1 Porovnanie špecifikácií klasického Bluetooth s Bluetooth Low Energy <a href='https://bestwirelessbluetoothheadphones.com/wiki/bluetooth-low-energy'>[3]</a><br><table><tr><th style='background: #0f6e21; color:white;'>Špecifikácia</th><th style='background: #0f6e21; color:white;'>Klasický Bluetooth</th><th style='background: #0f6e21; color:white;'>Bluetooth Low Energy (V 4.2)</th></tr><tr><td>Rozsah</td><td>100m</td><td>viac ako 100m</td></tr><tr><td style='background: #8c8c8c;'>Rýchlosť prenosu dát</td><td style='background: #8c8c8c;'>1-3Mbps</td><td style='background: #8c8c8c;'>1Mbps</td></tr><tr><td>application throughput</td><td>0.7-2.1Mbps</td><td>0.27Mbps</td></tr><tr><td style='background: #8c8c8c;'>Frekvencia</td><td style='background: #8c8c8c;'>2.4GHz</td><td style='background: #8c8c8c;'>2.4GHz</td></tr><tr><td>Zabezpečenie</td><td>56/128-bit</td><td>128-bit AES s Counter Mode CBC-MAC</td></tr><tr><td style='background: #8c8c8c;'>Robustnosť</td><td style='background: #8c8c8c;'>adaptívne rýchle frekvenčné preskakovanie, FEC, rýchle ASK</td><td style='background: #8c8c8c;'>24-bitová CRC, kontrola integrity 32-bitovej správy</td></tr><tr><td>Oneskorenie</td><td>100ms</td><td>6ms</td></tr><tr><td style='background: #8c8c8c;'>Časové oneskorenie</td><td style='background: #8c8c8c;'>100ms</td><td style='background: #8c8c8c;'>3ms</td></tr><tr><td>Voice Capable</td><td>Yes</td><td>No</td></tr><tr><td style='background: #8c8c8c;'>Topológia siete</td><td style='background: #8c8c8c;'>hviezda</td><td style='background: #8c8c8c;'>hviezda</td></tr><tr><td>Spotreba energie</td><td>1W</td><td>0.01W až 0.05W</td></tr><tr><td style='background: #8c8c8c;'>Peak current consuption</td><td style='background: #8c8c8c;'>menej ako 30mA</td><td style='background: #8c8c8c;'>menej ako 15mA</td></tr></table></div><p><b>Wifi 2,4GHz a 5,0 GHz IEE 802.11ac</b><br>IEEE 802.11ac je štandard bezdrôtových sietí v protokole 802.11 (ktorý je súčasťou rodiny sietí Wi-Fi ) a poskytuje vysokovýkonné bezdrôtové miestne siete (WLAN) v pásme 5 GHz. </p><p>Špecifikácia má priepustnosť viacerých staníc najmenej 1 gigabit za sekundu (1 Gbit/s) a priepustnosť jedného prepojenia najmenej 500 megabitov za sekundu (0,5 Gbit/s). Toto sa dosahuje rozšírením koncepcií vzduchového rozhrania zahrnutých v protokole 802.11n : širšia šírka pásma RF (až do 160 MHz), viac priestorových tokov MIMO (až do ôsmich), zostupný multi-užívateľský MIMO (až pre štyroch klientov), a modulácia s vysokou hustotou (až 256-QAM ).</p><button class='accordion'>?????</button><div class='panel'><p>Norma bola vyvinutá v združení IEEE Standards Association. Štandard bol retrospektívne označený ako Wi-Fi 5 spoločnosťou Wi-Fi Alliance.</p></div>");
	$(".backCom").addClass("component");
	$(".blueth").removeClass("component");
	$(".blueth").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "block"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/


if($(".usbControll").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".usbControll").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("USB controller");
	//$(".textInfo").html("<p>Čip VL805 je radič pre 2x USB 3.0 a 2x USB 2.0 porty. VL Lab5 VIA (4-port) VIA Lab je radič USB 3.0, ktorý umožňuje platforme vybavenej PCI Express rozhranie zariadení USB  Super-Speed (5 Gbps), High-Speed (480 Mbps), Full-Speed (12 Mbps), a Low-Speed (1.5 Mbps). Hlavný rozbočovač pozostáva zo štyroch portov smerujúcich proti prúdu, ktoré umožňujú simultánnu prevádzku viacerých periférnych zariadení. </p><b>Kľúčové vlastnosti:</b><ul><li>Zhoda s revíziou špecifikácie Universal Serial Bus 3.0 1.0</li><li>Vyhovuje špecifikácii Universal Serial Bus 2.0</li><li>Vyhovuje rozhraniu špecifikácií hostiteľského radiča eXtensible (xHCI) Revízia 1.0</li><li>Podporuje staršiu funkciu USB</li><li>V súlade so špecifikáciou PCI Express Base 2.0</li><li>Interné zariadenie USB PHY využíva pokročilý proces CMOS na zníženie spotreby energie</li><li>Podporuje špecifikáciu nabíjania batérie</li><li>Možnosti aktualizácie firmvéru zahŕňajú integrovaný firmvér v systéme BIOS</li><li>softvér</li><li>Počiatočná podpora ovládačov pre systémy Windows 7, Vista a XP</li><li>Protokol USB Attached SCSI (UASP)</li><li>Podporuje rôzne jadrá systému Linux </li><li>Podporuje Windows 10, Windows 8 inbox driver</li></ul><img src='img/nwordb.jpg'><br>Obr.4 Bloková schéma <a href='https://www.via-labs.com/product_show.php?id=48'>[4]</a><button class='accordion'>?????</button><div class='panel'><p><b>Radič</b> alebo <b>riadiaca jednotka (periférneho zariadenia)</b> alebo zriedkavo <b>kontrolér</b> je počítačový hardvér zabezpečujúci styk (interfacing) s počítačovou perifériou (počítačovým modulom). Radič funguje ako tlmočník, údaje z periférie prekladá do formátu, ktorému rozumie zbernica počítača a naopak. Radič je vlastne riadiaca jednotka, ktorá riadi celú činnosť periférie. Toto riadenie sa uskutočňuje pomocou riadiacich signálov, ktoré posiela každému konkrétnemu zariadeniu v periférii. Reakciou na riadiace signály sú stavové hlásenia, ktoré sú mu posielané na spracovanie pre následné rozhodnutie nad ďalším krokom. Každý radič zariadenia má na starosti určitý typ zariadenia, ale každý radič zariadenia môže pracovať paralelne s ostatnými. Niektoré radiče komunikujú priamo medzi sebou, bez využitia CPU.</p><p>Príklad činnosti radiča: Radič pevného disku (HDD) dostáva príkazy z CPU na prečítanie určitého súboru. Ako odpoveď dostane CPU z radiča žiadaný súbor. Prečítanie súboru je však spojené s množstvom činností ako sú: roztoč motor platní disku na presné otáčky, vystav hlavu do oblasti zoznamu dát (FAT tabuľky), prečítaj kde sa nachádza prvý segment súboru, vystav hlavu na zadanú pozíciu - stopu disku, prečítaj sektor, ulož prečítané hodnoty do buffera... V skutočnosti je množstvo úloh vykonávaných radičom ešte oveľa väčšie.</p></div>");
	$(".backCom").addClass("component");
	$(".usbControll").removeClass("component");
	$(".usbControll").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "block"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------*/


if($(".ethControll").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".ethControll").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("Ethernet controller");
	//$(".textInfo").html("<p>Trojnásobný vysokorýchlostný energeticky efektívny ethernetový ethernetový prijímač 1000BASE-T / 100BASE-TX / 10BASE-T (IEEE 802.3az) integrovaný do jedného monolitického čipu CMOS. Spracováva ethernetové pripojenie Gigabit, ale pri pripojení k pomalším sieťam sa môže znížiť na pomalšie rýchlosti.</p><p>Prístroj vykonáva všetky funkcie fyzickej vrstvy pre ethernet 1000BASE-T, 100BASE-TX a 10BASE-T Ethernet na štandardnom nekrytom krútenom páre kategórie 5 (UTP). 10BASE-T môže tiež bežať na štandardných UTP kategórie 3, 4 a 5. Rad BCM5421xE je založený na osvedčenej technológii digitálneho signálového procesora od spoločnosti Broadcom, ktorá kombinuje digitálne adaptívne ekvalizéry, ADC, fázové uzamknuté slučky, linkové ovládače, enkodéry, dekodéry, echo cancellers, crosstalk cancellers a všetky ďalšie požadované podporné obvody integrované do jedného čipu. </p><b>Vlastnosti <a href='https://www.broadcom.com/products/ethernet-connectivity/optical-phy/bcm5421xe'>[5]</a></b><br><ul><li>Plne kompatibilný s energeticky efektívnym Ethernetom pre 1000BASE-T a 100BASE-TX, ako je definované v štandarde IEEE Std 802.3 & trade; -2012</li><li>Technológia Broadcom AutoGrEEEn® rozširuje úsporu energie EEE na neodporúčané pre nové dizajnové MAC</li><li>Integrovaná funkcia Wake-on-LAN (WOL) umožňuje vzdialenú aktiváciu systému v sieti, čím sa znižuje výkon a zložitosť systému</li><li>Podpora merania SyncE +, SyncE, IEEE 1588v2 PTP a ITU-T Y.1731</li><li>Vylepšená diagnostika káblových zariadení, ktorá zisťuje poruchy káblových zariadení</li><li>Rad Gigabit PHY s jedným portom BCM5421xE pozostáva z nasledujúcich zariadení:</li><li>BCM54210E: Jednoportový RGMII 10/100 / 1000BASE-T PHY s EEE a WOL</li><li>BCM54214E: Jednoportový RGMII 10/100 / 1000BASE-T PHY s EEE, WOL, SyncE +, SyncE, IEEE 1588v2 PTP a ITU-T Y.1731 podpora merania oneskorenia</li><li>BCM54216E: Jednorazový GMII 10/100 / 1000BASE-T PHY & WOL</li><li>BCM54219E: Jednorportový GMII 10/100 / 1000BASE-T PHY s EEE, WOL, SyncE +, SyncE, IEEE 1588v2 PTP a ITU-T Y.1731 podpora merania oneskorenia</li></ul><button class='accordion'>?????</button><div class='panel'><p><b>Radič</b> alebo <b>riadiaca jednotka (periférneho zariadenia)</b> alebo zriedkavo <b>kontrolér</b> je počítačový hardvér zabezpečujúci styk (interfacing) s počítačovou perifériou (počítačovým modulom). Radič funguje ako tlmočník, údaje z periférie prekladá do formátu, ktorému rozumie zbernica počítača a naopak. Radič je vlastne riadiaca jednotka, ktorá riadi celú činnosť periférie. Toto riadenie sa uskutočňuje pomocou riadiacich signálov, ktoré posiela každému konkrétnemu zariadeniu v periférii. Reakciou na riadiace signály sú stavové hlásenia, ktoré sú mu posielané na spracovanie pre následné rozhodnutie nad ďalším krokom. Každý radič zariadenia má na starosti určitý typ zariadenia, ale každý radič zariadenia môže pracovať paralelne s ostatnými. Niektoré radiče komunikujú priamo medzi sebou, bez využitia CPU.</p><p>Príklad činnosti radiča: Radič pevného disku (HDD) dostáva príkazy z CPU na prečítanie určitého súboru. Ako odpoveď dostane CPU z radiča žiadaný súbor. Prečítanie súboru je však spojené s množstvom činností ako sú: roztoč motor platní disku na presné otáčky, vystav hlavu do oblasti zoznamu dát (FAT tabuľky), prečítaj kde sa nachádza prvý segment súboru, vystav hlavu na zadanú pozíciu - stopu disku, prečítaj sektor, ulož prečítané hodnoty do buffera... V skutočnosti je množstvo úloh vykonávaných radičom ešte oveľa väčšie.</p></div>");
	$(".backCom").addClass("component");
	$(".ethControll").removeClass("component");
	$(".ethControll").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "block"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-----------------------------------------------------------------------*/

if($(".poe").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".poe").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("podpora PoE pomocou samostatného PoE Hat");
	//$(".textInfo").html("<p>Power over Ethernet (POE) je sieťová funkcia, ktorá umožňuje sieťovým káblom prenášať elektrickú energiu cez existujúce dátové pripojenie pomocou jediného ethernetového kábla Cat5e / Cat6. Technológia PoE využíva štandardy IEEE 802.3af a 802.3at, ktoré stanovuje Inštitút elektrických a elektronických inžinierov a ktoré určujú spôsob fungovania sieťových zariadení, aby sa podporila interoperabilita medzi zariadeniami.</p><p>PoE je skratka pre Power over Ethernet. Používa rovnaké páry vodičov v kábloch Cat5e a Cat6a na prenos malého množstva elektriny do zariadení s nízkym výkonom, ako sú webové kamery, bezdrôtové prístupové body, LED svetlá a telefóny VOIP. Inými slovami, ušetrí vám to problémy a náklady spojené so zostavením druhého napájacieho kábla pre zariadenie, keď to urobí malé množstvo elektrického prenosu cez Cat6a.PoE je napájaný inštalovaním PoE injektora do dátového vedenia, ktoré okrem údajov, ktoré už tečú, jednoducho tlačí elektrinu po kábloch. </p><p>Tradičný ethernet s rýchlosťou 10/100 Mb/s používa iba dva zo štyroch párov vodičov. Zostávajú ďalšie dva páry vodičov, ktoré sa majú použiť pre PoE (výkon). Dáta prechádzajú po jednej ceste, energia prechádza po druhej. V čase, keď bol prvýkrát predstavený dokument PoE, to bol najbezpečnejší spôsob. Dnes tomu už tak nie je. Od tej doby však internetová technológia prešla dlhú cestu.</p>Ako však môže Gigabit Ethernet - ktorý využíva všetky štyri páry vodičov - napájať aj zariadenia PoE: <img src='img/ethernetcablepairs.png'><br>Obr.4 Ethernet a PoE kabeláž <a href='https://planetechusa.com/what-is-gigabit-ethernet/'>[2]</a><p><b>Ako Gigabit Ethernet a PoE spolupracujú v jednom kábli:</b><br>Dnes už PoE nepotrebuje svoje vlastné dvojice káblov. Keď sa ethernetový signál rozšíril na využitie všetkých štyroch párov vodičov, čím sa optimalizoval dizajn káblov, pokročila aj technológia PoE. Napätie použité v PoE môže vlastne zdieľať rovnaké drôty ako tie, ktoré prenášajú gigabitový Ethernet (dáta) kvôli rozdielu vo frekvencii. Gigabitový Ethernet prenáša neuveriteľne vysoké frekvencie v rozsahu 10 až 100 MHz, zatiaľ čo PoE frekvenciu 60 Hz. Tento nízkofrekvenčný prenos energie sa dosť dobre nazýva „Phantom Power“. Zariadenia poháňané PoE sú navrhnuté tak, aby prijímali energiu v oboch formátoch.</p>");
	$(".backCom").addClass("component");
	$(".poe").removeClass("component");
	$(".poe").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "block"});
	$(".pinInfo").css({"display": "none"});
})){};
/*-------------------------------------------------------------------*/

if($(".pin").click(function(){
	var color = $( this ).css( "background-color" );
	//console.log(color);
	if (color != '#f34213') {
		//console.log(true);
		finished++;
		//console.log(finished);
		$(".score").html(finished + "/16"); //výpis skóre
	}
	$(".pin").css({"background-color": "#f34213","border":"1px solid transparent","border-radius": "0.35rem"});
	$(".caption").html("40-pinová hlavička GPIO");
	//$(".textInfo").html("<p><b>GPIO (general purpose input/output)</b> je označenie pre taký prístupný elektrický kontakt, buď integrovaného obvodu alebo celého jednočipového počítača, jeho využitie je ponechané na užívateľovi a programátorovi. GPIO umožňujú k Raspberry Pi pripojiť elektronické súčiastky, ako sú LED diódy a tlačidlá. </p><p>Rad pinov GPIO nájdete pozdĺž horného okraja dosky. Ktorýkoľvek z pinov GPIO môže byť (v softvéri) označený ako vstupný alebo výstupný kolík a použitý na celý rad účelov.</p><p>Číslovanie pinov GPIO nie je v číselnom poradí; Na karte sú prítomné kolíky GPIO 0 a 1 (fyzické kolíky 27 a 28), ale sú vyhradené pre pokročilé použitie.<br><img src='img/GPIO-Pinout-Diagram-2.png' style='width: 516px; height:297px;'><br>Obr. 7 Číslovanie pinov <a href='https://www.raspberrypi.org/documentation/usage/gpio/'>[7]</a></p><button class='accordion'>?????</button><div class='panel'>	<p><b>napätie</b>Na doske sú prítomné dva kolíky 5V a dva kolíky 3.3V, ako aj niekoľko uzemňovacích kolíkov (0V), ktoré nie sú konfigurovateľné. Zostávajúce kolíky sú univerzálne 3.3V piny.</p><p><b>výstupy</b>Pin GPIO označený ako výstupný pin je možné nastaviť ako vysoký (3.3V) alebo nízky (0V).</p><p><b>vstupy</b>Pin GPIO označený ako vstupný pin sa dá čítať ako vysoký (3.3V) alebo nízky (0V). Uľahčuje to použitie vnútorných pull-up alebo pull-down rezistorov. Špendlíky GPIO2 a GPIO3 majú pevné pull-up rezistory, ale pre ostatné kolíky to možno nakonfigurovať pomocou softvéru.</p><p><b>viac</b>Piny GPIO sa môžu používať s rôznymi alternatívnymi funkciami, niektoré sú dostupné na všetkých kolíkoch, iné iba na konkrétnych kolíkoch.</p><p><b>PWM (modulácia šírka impulzu):</b> <br>Softvér PWM je k dispozícii na všetkých kolíkoch<br>Hardvér PWM je k dispozícii na GPIO12, GPIO13, GPIO18, GPIO19<br><b>SPI:</b><br>SPI0: MOSI (GPIO10); MISO (GPIO9); SCLK (GPIO11); CE0 (GPIO8), CE1 (GPIO7)<br>SPI1: MOSI (GPIO20); MISO (GPIO19); SCLK (GPIO21); CE0 (GPIO18); CE1 (GPIO17); CE2 (GPIO16)<br><b>I2C:</b><br>Údaje: (GPIO2); Hodiny (GPIO3)<br>Údaje EEPROM: (GPIO0); Hodiny EEPROM (GPIO1)<br><b>sériový:</b><br>TX (GPIO14); RX (GPIO15)</p><p>Pred Raspberry Pi Model B dosky obsahovali kratšiu 26-pinovú GPIO hlavičku.</p><img src='img/GPIO.png' style='width:600px; height:210px;'><br>Obr. 8 Číslovanie pinov <a href='https://www.raspberrypi.org/documentation/usage/gpio/'>[7]</a></div>");
	$(".backCom").addClass("component");
	$(".pin").removeClass("component");
	$(".pin").addClass("active");

	$(".specifcationRPI").css({"display": "none"});
	$(".GigabitEthernet").css({"display": "none"});
	$(".usb2Info").css({"display": "none"});
	$(".usb3Info").css({"display": "none"});
	$(".jackInfo").css({"display": "none"});
	$(".microHDMIInfo").css({"display": "none"});
	$(".usbCInfo").css({"display": "none"});
	$(".memoryInfo").css({"display": "none"});
	$(".procesorInfo").css({"display": "none"});
	$(".ramInfo").css({"display": "none"});
	$(".dsiInfo").css({"display": "none"});
	$(".csiInfo").css({"display": "none"});
	$(".bluethInfo").css({"display": "none"});
	$(".usbControllInfo").css({"display": "none"});
	$(".ethControllInfo").css({"display": "none"});
	$(".poeInfo").css({"display": "none"});
	$(".pinInfo").css({"display": "block"});
})){};

/*------------------------------------------------------------------------*/     