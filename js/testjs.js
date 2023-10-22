/* ----------------------- casovac-------------------------------------------------------------*/
var h1 = document.getElementById('stopwatch')[0],
stop = document.getElementById('submit'),
clear = document.getElementById('clear'),
seconds = 0, minutes = 0, hours = 0,
t;

function add() {
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}

document.getElementById("stopwatch").innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9   ? seconds : "0" + seconds);

timer();
}
function timer() {
t = setTimeout(add, 1000);
}
timer();

/*---------------------------------------------------------------------------------------------*/

//test otázky
var myQuestions = [
	{
		question: "Aký operačný systém používa Raspberry Pi4?",
		answers: {
			a: 'Linux',
			b: 'Raspbian',
			c: 'Windows',
			d: 'Android'
		},
		correctAnswer: 'b'
	},
	{
		question: "Aké sú základné druhy Ethernet?",
		answers: {
			a: 'Cat5e a Cat6a',
			b: 'hrubý ethernet 10base5, tenký ethernet 10Base2, UTP 10baseT',
			c: 'Fast Ethernet, Gigabit Ethernet'
		},
		correctAnswer: 'b'
	},
	{
		question: "Akú prenosovú rýchlosť má USB 2.0? ",
		answers: {
			a: '1,5 Mb/s',
			b: '12 Mb/s',
			c: '480 Mb/s',
			d: '5 Gb/s'
		},
		correctAnswer: 'c'
	},
	{
		question: "Akú prenosovú rýchlosť má USB 3.0?",
		answers: {
			a: '5 Gb/s',
			b: '10 Mb/s',
			c: '12 Mb/s',
			d: '480 Mb/s'
		},
		correctAnswer: 'a'
	},
	{
		question: "Ako odlíšiť USB 2.0 port od USB 3.0 portu?",
		answers: {
			a: 'USB 3.0 port má modrý konektor, USB 2.0 má čierny konektor',
			b: 'USB 3.0  má iný tvar',
			c: 'USB 3.0 port má čierny konektor, USB 2.0 má modrý konektor',
			d: 'USB 2.0  má iný tvar'
		},
		correctAnswer: 'a'
	},
	{
		question: "Ako zistiť či je konektor kábla pre jack vhodný?",
		answers: {
			a: 'uzemnenie je na "sleeve"',
			b: 'uzemnenie je na "ring 1"',
			c: 'uzemnenie je na "ring 2"',
			d: 'uzemnenie je na "tip"'
		},
		correctAnswer: 'c'
	},
	{
		question: "Čím môže byť narušená kvalita prenosu audio a video obsahu pri HDMI?",
		answers: {
			a: 'nie je ovplyvnená',
			b: 'pripojeným ďalších zariadení',
			c: 'rýchlosťou prenosu',
			d: 'dĺžkou kábla'
		},
		correctAnswer: 'd'
	},
	{
		question: "Môže PoE a Ethernet fungovať na jednom kábli? ",
		answers: {
			a: 'áno',
			b: 'nie'
		},
		correctAnswer: 'a'
	},
	{
		question: "Označ správne tvrdenia:",
		answers: {
			a: 'číslovanie pinov GPIO je v číselnom poradí',
			b: 'Pred Raspberry Pi Model B dosky obsahovali 40-pinovú GPIO hlavičku',
			c: 'kolíky GPIO 0 a 1 (fyzické kolíky 27 a 28), sú vyhradené pre pokročilé použitie',
			d: 'GPIO neumožňujú k Raspberry Pi pripojiť elektronické súčiastky, ako sú LED diódy a tlačidlá'
		},
		correctAnswer: 'c'
	},
	{
		question: "24-pinový, symetrický (12 pinov hore, 12 dolu) konektor je pre:",
		answers: {
			a: 'USB 3.0',
			b: 'USB 2.0',
			c: 'USB 1.0',
			d: 'USB-C'
		},
		correctAnswer: 'd'
	},
	{
		question: "Raspberry Pi4 využíva:",
		answers: {
			a: 'SRAM',
			b: 'DRAM',
			c: 'SDRAM'
		},
		correctAnswer: 'c'
	},
	{
		question: "Operačná pamäť v ktorej sa ukladajú dáta, ktoré procesor počítača momentálne nespracováva ale budú potrebné neskôr, je rýchlejšia a jej obsah je po vypnutí vymazaní sa nazýva:",
		answers: {
			a: 'ROM',
			b: 'FLASH',
			c: 'PROM',
			d: 'EPROM',
			e: 'EEPROM',
			f: 'RAM'
		},
		correctAnswer: 'f'
	},
	{
		question: "BCM2711 je:",
		answers: {
			a: 'štvorjadrový procesor',
			b: 'dvojjadrový procesor',
			c: 'USB kontrolér',
			d: 'Ethernet kontrolér'
		},
		correctAnswer: 'a'
	},
	{
		question: "AKý je rozdiel medzi klasickým Bluetooth a Bluetooth Low Energy (BLE)? ",
		answers: {
			a: 'klasické Bluetooth má väčšiu frekvenciu',
			b: 'klasické Bluetooth poskytuje značne zníženú spotrebu energie',
			c: 'BLE má väčšie časové oneskorenie',
			d: 'BLE poskytuje značne zníženú spotrebu energie'
		},
		correctAnswer: 'd'
	},
	{
		question: "Čo je to radič/kontrolér?",
		answers: {
			a: 'periférne zariadenie',
			b: 'je počítačový hardvér zabezpečujúci styk s počítačovou perifériou',
			c: 'typ procesoru'
		},
		correctAnswer: 'b'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

//generovanie testu
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	//zobrazenie testu
	function showQuestions(questions, quizContainer){
		// vypis aodpovede
		var output = [];
		var answers;

		//cely test
		for(var i=0; i<questions.length; i++){
			
			// list odpovedi
			answers = [];

			// zobraz celý test
			for(letter in questions[i].answers){

				// ...pridaj butony
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label><br>'
				);
			}

			// pridaj otazky a odpovede
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
				+ '<div class="correctAns">Správna odpoveď:  ' + questions[i].correctAnswer + '</div><br>'
			);

		}

		//document.getElementById(correctAns).style.display = 'none';

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}

	//zobrazenie vysledkov
	function showResults(questions, quizContainer, resultsContainer){
	
		// zisti ake mau byt spravne odpovede z test
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// uzivatelove odpovede
		var userAnswer = '';
		// pocet spravnych odpovedi
		var numCorrect = 0;
		
		// skontroluj formular
		for(var i=0; i<questions.length; i++){

			// zvolena odpoved
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// ak je odpoved spravna
			if(userAnswer===questions[i].correctAnswer){
				// pripocitavanie spravnych odpovedi
				numCorrect++;
				
				// spravne odpovede zelena
				answerContainers[i].style.color = 'lightgreen';
			}
			// ak je odpoved zla alebo nevyplnena
			else{
				// nespravne odpovede cervena
				answerContainers[i].style.color = 'red';
				document.getElementsByClassName('correctAns')[i].style.display = 'block';
			}

		}		

		// zobrazenie počtu spravnych odpovedi
		resultsContainer.innerHTML = numCorrect + ' z ' + questions.length;
	}

	// zobrazenie vysledkov
	showQuestions(questions, quizContainer);

	// zobrazenie vysledkov po odosalni testu
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
		clearTimeout(t);
	}

}

/*----------------------------------------------------------------------------------------*/



