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
displayNumbers.innerHTML = randomNumbers;
console.log(randomNumbers);

// IMPOSTO UN INTERVALLO PER LA VISUALIZZAZIONE DEI 5 NUMERI RANDOM
let timer = setInterval(function() {
    let userInput = [];
    for (let i = 0; i < 5; i++ ) {
        userInput.push(prompt('Digita i numeri precedentemente visualizzati'));
    }
}, 6000);

// imposto un timeout per nascondere la visualizzazione dei numeri random dopo 5 secondi
let hideNumbers = setTimeout(function () { 
    displayNumbers.innerHTML = '';
}, 5000);




