// TODO: make better timer
// TODO: show better score



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

// TODO: stop watch scrolluje jak aj user scrolluje
// https://stackoverflow.com/questions/28340054/bootstrap-keep-div-fixed-after-scrolling-to-it
// $('#test').scroll(function() {
// 	$('#stopwatch').css('top', $(this).scrollTop());
// });
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
		correctAnswer: 'b',
		displayAnswer: 'Raspbian'
	},
	{
		question: "Aké sú základné druhy Ethernet?",
		answers: {
			a: 'Cat5e a Cat6a',
			b: 'Hrubý ethernet 10base5, tenký ethernet 10Base2, UTP 10baseT',
			c: 'Fast Ethernet, Gigabit Ethernet'
		},

		correctAnswer: 'b',
		displayAnswer: 'Hrubý ethernet 10base5, tenký ethernet 10Base2, UTP 10baseT'
	},
	{
		question: "Akú prenosovú rýchlosť má USB 2.0? ",
		answers: {
			a: '1,5 Mb/s',
			b: '12 Mb/s',
			c: '480 Mb/s',
			d: '5 Gb/s'
		},
		correctAnswer: 'c',
		displayAnswer: '480 Mb/s'
	},
	{
		question: "Akú prenosovú rýchlosť má USB 3.0?",
		answers: {
			a: '5 Gb/s',
			b: '10 Mb/s',
			c: '12 Mb/s',
			d: '480 Mb/s'
		},
		correctAnswer: 'a',
		displayAnswer: '5 Gb/s'
	},
	{
		question: "Ako odlíšiť USB 2.0 port od USB 3.0 portu?",
		answers: {
			a: 'USB 3.0 port má modrý konektor, USB 2.0 má čierny konektor',
			b: 'USB 3.0  má iný tvar',
			c: 'USB 3.0 port má čierny konektor, USB 2.0 má modrý konektor',
			d: 'USB 2.0  má iný tvar'
		},
		correctAnswer: 'a',
		displayAnswer: 'USB 3.0 port má modrý konektor, USB 2.0 má čierny konektor'
	},
	{
		question: "Ako zistiť či je konektor kábla pre jack vhodný?",
		answers: {
			a: 'Uzemnenie je na "sleeve"',
			b: 'Uzemnenie je na "ring 1"',
			c: 'Uzemnenie je na "ring 2"',
			d: 'Uzemnenie je na "tip"'
		},
		correctAnswer: 'c',
		displayAnswer: 'Uzemnenie je na "ring 2"'
	},
	{
		question: "Čím môže byť narušená kvalita prenosu audio a video obsahu pri HDMI?",
		answers: {
			a: 'Nie je ovplyvnená',
			b: 'Pripojeným ďalších zariadení',
			c: 'Rýchlosťou prenosu',
			d: 'Dĺžkou kábla'
		},
		correctAnswer: 'd',
		displayAnswer: 'Dĺžkou kábla'
	},
	{
		question: "Môže PoE a Ethernet fungovať na jednom kábli? ",
		answers: {
			a: 'Áno',
			b: 'Nie'
		},
		correctAnswer: 'a',
		displayAnswer: 'Áno'
	},
	{
		question: "Označ správne tvrdenia:",
		answers: {
			a: 'Číslovanie pinov GPIO je v číselnom poradí',
			b: 'Pred Raspberry Pi Model B dosky obsahovali 40-pinovú GPIO hlavičku',
			c: 'Kolíky GPIO 0 a 1 (fyzické kolíky 27 a 28), sú vyhradené pre pokročilé použitie',
			d: 'GPIO neumožňujú k Raspberry Pi pripojiť elektronické súčiastky, ako sú LED diódy a tlačidlá'
		},
		correctAnswer: 'c',
		displayAnswer: 'Kolíky GPIO 0 a 1 (fyzické kolíky 27 a 28), sú vyhradené pre pokročilé použitie'
	},
	{
		question: "24-pinový, symetrický (12 pinov hore, 12 dolu) konektor je pre:",
		answers: {
			a: 'USB 3.0',
			b: 'USB 2.0',
			c: 'USB 1.0',
			d: 'USB-C'
		},
		correctAnswer: 'd',
		displayAnswer:  'USB-C'
	},
	{
		question: "Raspberry Pi4 využíva:",
		answers: {
			a: 'SRAM',
			b: 'DRAM',
			c: 'SDRAM'
		},
		correctAnswer: 'c',
		displayAnswer: 'SDRAM'
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
		correctAnswer: 'f',
		displayAnswer: 'RAM'
	},
	{
		question: "BCM2711 je:",
		answers: {
			a: 'Štvorjadrový procesor',
			b: 'Dvojjadrový procesor',
			c: 'USB kontrolér',
			d: 'Ethernet kontrolér'
		},
		correctAnswer: 'a',
		displayAnswer: 'Štvorjadrový procesor'
	},
	{
		question: "Aký je rozdiel medzi klasickým Bluetooth a Bluetooth Low Energy (BLE)? ",
		answers: {
			a: 'Klasické Bluetooth má väčšiu frekvenciu',
			b: 'Klasické Bluetooth poskytuje značne zníženú spotrebu energie',
			c: 'BLE má väčšie časové oneskorenie',
			d: 'BLE poskytuje značne zníženú spotrebu energie'
		},
		correctAnswer: 'd',
		displayAnswer: 'BLE poskytuje značne zníženú spotrebu energie'
	},
	{
		question: "Čo je to radič/kontrolér?",
		answers: {
			a: 'Periférne zariadenie',
			b: 'Počítačový hardvér zabezpečujúci styk s počítačovou perifériou',
			c: 'Typ procesoru'
		},
		correctAnswer: 'b',
		displayAnswer: 'Počítačový hardvér zabezpečujúci styk s počítačovou perifériou'
	}
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let cardResult = document.getElementById('card-result')
let submitButton = document.getElementById('submit');
let resetTestButton = document.getElementById('resetTestBtn')

resetTestButton.addEventListener('click', () => location.reload())

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

//generovanie testu
function generateQuiz(questions, quizContainer, resultsContainer){

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
				//console.log(letter)
				let inputValue = questions[i].answers[letter]

				// ...pridaj butony
				answers.push(
					'<div class="form-check">' +
					`  <input class="form-check-input" type="radio" name="question${i}" id="question${i}${letter}" value="${inputValue}">` +
					`  <label class="form-check-label" for="question${i}${letter}" id="label${i}${letter}">` +
					`    ${inputValue}` +
					'  </label>' +
					'</div>' //+ '<hr>'

					// '<label>'
					// 	+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					// 	+ letter + ': '
					// 	+ questions[i].answers[letter]
					// + '</label><br>'
				);
			}

			// pridaj otazky a odpovede
			output.push(
				'<h5 class="pt-3">' + questions[i].question + '</h5>'// + '<hr>'
				+ '<div class="answers pb-2">' + answers.join('') + '</div>'
				+ '<div class="correctAns pt-2 fw-medium"><span style="color: #1985a1">Správna odpoveď: </span>' + questions[i].displayAnswer + '</div><hr>'
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
		//answerContainers.forEach(value => console.log(value))
		//console.log("A-con:" + answerContainers.forEach(a => console.log(a)))
		// uzivatelove odpovede
		var userAnswer = '';
		// pocet spravnych odpovedi
		var numCorrect = 0;
		
		// skontroluj formular
		for(var i= 0; i < questions.length; i++){
			document.getElementsByClassName('correctAns')[i].style.display = 'block';


			const input
				= answerContainers[i].querySelector('input[name=question'+i+']:checked') || {};
			const labelForInput = document.querySelector(`label[for=${input.id}]`);
			// zvolena odpoved
			userAnswer = input.value
			//console.log("U-answer:"+ userAnswer)
//			let labelAnswer
//				= (answerContainers[i].querySelector(`label[for=question${i}][id=label${questions[i].correctAnswer}]`)||{})
			console.log(userAnswer)

			//ak je odpoved undefinde
			if (userAnswer === undefined)
				continue;

			if(userAnswer===questions[i].displayAnswer){
				// pripocitavanie spravnych odpovedi
				numCorrect++;

				//console.log((answerContainers[i].querySelector('label[id=label'+userAnswer+']')||{}))
				//(answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).style.color = "lightgreen";
				// spravne odpovede zelena
				//answerContainers[i].style.color = 'lightgreen';
				labelForInput.style.color = "lightgreen"
			}
			// ak je odpoved zla alebo nevyplnena
			else{
				// nespravne odpovede cervena
				//answerContainers[i].style.color = 'red';
				labelForInput.style.color = "#d90429"
				labelForInput.style.fontWeight = 'bold'
			//d90429
			}
			document.getElementsByClassName('correctAns')[i].style.display = 'block';
		}

		// zobrazenie počtu spravnych odpovedi
		cardResult.style.display = 'block'
		resultsContainer.innerHTML = numCorrect + ' / ' + questions.length;

	}

	function disableRadios(){
		let inputs = document.querySelectorAll('input')

		inputs.forEach(input => {
			input.setAttribute('disabled', 'disabled')
		})
	}

	function switchButtons(){
		resetTestButton = document.getElementById('resetTestBtn')
		submitButton = document.getElementById('submit')

		submitButton.style.display = 'none'
		resetTestButton.style.display = "inline-block";
	}


	// zobrazenie vysledkov
	showQuestions(questions, quizContainer);

	// zobrazenie vysledkov po odosalni testu
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
		disableRadios()
		switchButtons()
		clearTimeout(t);
	}

}

/*----------------------------------------------------------------------------------------*/



