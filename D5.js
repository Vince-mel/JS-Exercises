/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente arrayc, scrivi del codice per stampare ogni elemento dell'array in console.
*/



const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);





/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


const pet0 = pets.shift();
pets.push(pet0);
console.log(pets);







/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  if (cars[i].brand==="Ford") {
    cars[i].LicensePlate = "EP1C0D30";
  } else if (cars[i].brand=== "Peugeot") {
    cars[i].LicensePlate = "EP1C0D22";
  } else  {
    cars[i].LicensePlate ="EP1C0D88";
  }
}
console.log(cars);

// console.log(cars[0].LicensePlate)
//console.log(cars[1].LicensePlate)
//console.log(cars[2].LicensePlate)



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push( {
  brand: 'Jeep',
  model: 'Compass',
  color: 'grey',
  trims: ['Limited','4x4','offroad'],
}

)


for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/


const justTrims = [];
for (let i = 0; i < cars.length; i++) {
    if (cars[i].trims && cars[i].trims.length > 0) {
        justTrims.push(cars[i].trims[0]);
    }
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0
while (i <=13) {
  console.log(numericArray[i]);
  i ++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabet = 'abcdefghijklmnopqrstuvwxyz'; //creo un const per l'alfabeto italiano
let itaposition = []; 

for (let i = 0; i < charactersArray.length; i++) {
    let character = charactersArray[i];
    let position = alphabet.indexOf(character) + 1; //metto +1 per farlo coincidere con l'indice dell'id
    itaposition.push(position);
}

console.log(itaposition);