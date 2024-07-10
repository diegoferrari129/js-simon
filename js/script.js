// GENERO 5 NUMERI RANDOM
// dichiaro l'array che contiene i numeri random
let randomNumbers = [];
// imposto un ciclo while per determinare il numero di valori da generare
while (randomNumbers.length < 5) {
    // dichiaro una variabile che ha come valore un numero random che verrà ciclata 5 volte
    let num = Math.floor(Math.random() * 159 + 1);
    // imposto una condizione per verificare che non siano presenti numeri uguali all'interno dell'array
    if (!randomNumbers.includes(num)) {
        // pusho il numero generato all'interno dell'array
        randomNumbers.push(num);
    }
}

// MOSTRO I 5 NUMERI RANDOM NELLA PAGINA
// recupero l'elemento dom per mostrare il valore dell'array randomNumbers
let displayNumbers = document.getElementById('random-numbers');
// mostro il valore dell'array randomNumbers nella pagina
displayNumbers.innerText = randomNumbers;
console.log(randomNumbers);

// IMPOSTO UN INTERVALLO PER LA VISUALIZZAZIONE DEI 5 NUMERI RANDOM
// dichiaro una variabile con il valore del timer
let seconds = 5;
// recupero l'elemento dal dom per mostrare il valore della variabile seconds
let countdown = document.getElementById('countdown');
// mostro nella pagina il timer
countdown.innerText = seconds;
// dichiaro un intervallo di 1 secondo
let timer = setInterval(function() {
    // mostro nella l'azione dell'intervallo
    countdown.innerText = seconds;
    // imposto una condizione
    if (seconds === 0) {
        displayNumbers.innerText = '';
        userNumbers(randomNumbers);
    }
    else {
        seconds --;
    }
}, 1000);









