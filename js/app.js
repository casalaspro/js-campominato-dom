// creo nodo bottone
const buttonElement = document.querySelector("button");

// creo nodo contenitore
const containerElement = document.querySelector(".grid");

// attribuire eventListener al bottone play che:
buttonElement.addEventListener("click", function () {
  
  const selectElement = document.getElementById("difficulty");
  const selectValue = parseInt(selectElement.value);

  
  
  let numberCells;
  let difficultyClasses;

  
  if (selectValue === 100) {
    numberCells = selectValue;
    difficultyClasses = "difficulty-1"
  } else if (selectValue === 81) {
    numberCells = selectValue;
    difficultyClasses = "difficulty-2"
  } else if (selectValue === 49) {
    numberCells = selectValue;
    difficultyClasses = "difficulty-3"
  } else {
    console.log("Choose a difficulty before to star the game.")
  }
  

  createGrid(numberCells, difficultyClasses);

  

  function createGrid(cells, difficulty){
    // reset grid
    containerElement.innerHTML = '';

    for (let i = 1; i <= cells; i++) {
      let number = i;
      const divElement = document.createElement("div");
      divElement.classList.add("cell", difficulty);
      const textElement = document.createTextNode(number);
      divElement.appendChild(textElement);
      divElement.addEventListener("click", function () {
        this.classList.toggle('cyan');
      });
      containerElement.appendChild(divElement);
    }
  }
  
})



