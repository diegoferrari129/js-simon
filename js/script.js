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
// recupero l'elemento dal dom
let displayNumbers = document.getElementById('random-numbers');
// mostro il valore di randomNumbers nella pagina
displayNumbers.innerText = randomNumbers;
console.log(randomNumbers);








