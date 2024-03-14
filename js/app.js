// creo nodo bottone
const buttonElement = document.querySelector("button");

// creo nodo contenitore
const containerElement = document.querySelector(".grid");

// attribuire eventListener al bottone play che:
buttonElement.addEventListener("click", function () {
  const selectElement = document.getElementById("difficulty");
  const selectValue = parseInt(selectElement.value);
  console.log(selectValue);

  // reset grid
  containerElement.innerHTML = '';
  
  let numberCells;
  let difficultyClass;

  if (selectValue === 100) {
    numberCells = selectValue;
    difficultyClass = "difficulty-1"
  } else if (selectValue === 81) {
    numberCells = selectValue;
    difficultyClass = "difficulty-2"
  } else if (selectValue === 49) {
    numberCells = selectValue;
    difficultyClass = "difficulty-3"
  } else {
    console.log("Choose a difficulty before to star the game.")
  }
  
  for (let i = 1; i <= selectValue; i++) {
    let number = i;
    const divElement = document.createElement("div");
    divElement.classList.add("cell", difficultyClass);
    const textElement = document.createTextNode(number);
    divElement.appendChild(textElement);
    divElement.addEventListener("click", function () {
      this.classList.toggle('cyan');
      console.log(number);
    });
    containerElement.appendChild(divElement);
    console.log(divElement);
  }
})