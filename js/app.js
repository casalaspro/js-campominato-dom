/*

Consegna

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).

Descrizione:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l’utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

Attenzione che l’utente potrebbe cliccare due volte sulla stessa casella…

BONUS 1:
Se non lo avete fatto ieri aggiungete la gestione della difficoltà
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

BONUS 2:
Quando al partita termina mostrare nella griglia tutte le bombe presenti, anche quelle che non erano state trovate.
Tutte le caselle delle bombe devono diventare rosse

BONUS 3:
Una volta che la partita termina l’utente non deve più poter cliccare sulle cella, nel senso che se anche ci clicca non deve succedere niente.

Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.

*/



// // creo nodo bottone
// const buttonElement = document.querySelector("button");

// // creo nodo contenitore
// const containerElement = document.querySelector(".grid");

// // attribuire eventListener al bottone play che:
// buttonElement.addEventListener("click", function () {
  
//   const selectElement = document.getElementById("difficulty");
//   const selectValue = parseInt(selectElement.value);

  
  
//   let numberCells;
//   let difficultyClasses;

  
//   if (selectValue === 100) {
//     numberCells = selectValue;
//     difficultyClasses = "difficulty-1"
//   } else if (selectValue === 81) {
//     numberCells = selectValue;
//     difficultyClasses = "difficulty-2"
//   } else if (selectValue === 49) {
//     numberCells = selectValue;
//     difficultyClasses = "difficulty-3"
//   } else {
//     console.log("Choose a difficulty before to star the game.")
//   }
  

//   createGrid(numberCells, difficultyClasses);

  

//   function createGrid(cells, difficulty){
//     // reset grid
//     containerElement.innerHTML = '';

//     for (let i = 1; i <= cells; i++) {
//       let number = i;
//       const divElement = document.createElement("div");
//       divElement.classList.add("cell", difficulty);
//       const textElement = document.createTextNode(number);
//       divElement.appendChild(textElement);
//       divElement.addEventListener("click", function () {
//         this.classList.toggle('cyan');
//       });
//       containerElement.appendChild(divElement);
//     }
//   }
  
// })


// bisogna creare una funzione che restituisca un array con 16 numeri da 1 alla difficoltà selezionata

function getRandomNumber(min, max){
  // return del numero
  return parseInt(Math.random()*max+min);
}
function getArrayBombs(amountOfBombs, amountOfCells){
  // genero una varibile array
  let bombs = [];
  // creo ciclo che si ripeta n volte quante sono le bombe
  for(let i=1; i<=amountOfBombs; i++){
    // variabile booleana che controlla il ciclo while
    let continueGenerate = true;
    while(continueGenerate){
      // genero una bomba
      let bomb = getRandomNumber(1, amountOfCells);
      // console.log(bomb);
      // SE la bomba non è inclusa all'array di bombe
      if(!(bombs.includes(bomb))){
        // cambio la variabile che controlla il ciclo while
        continueGenerate = false;
        // aggiungo la bomba all'array
        bombs.push(bomb)
      }
    }
  }
  return bombs;
  }

  let bombsArray = getArrayBombs(20,49);
  console.dir(bombsArray);