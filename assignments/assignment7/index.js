
const NumberForm = document.querySelector("#number_form");
const rangeInput = document.getElementById("range_number");
const guessInput = document.getElementById("guess_number");

const selectedNumber = document.getElementById("selected_number");
const numberResult = document.getElementById("result");

function NumberSubmit(event) {
    event.preventDefault();
    const rangehNumber = parseInt(rangeInput.value);
    const guessNumber = parseInt(guessInput.value);
    
    const randomNumber = Math.ceil(Math.random() * rangehNumber);
    
    selectedNumber.innerText = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.`;

    if (guessNumber === randomNumber) {
        numberResult.innerText = "You won!";
    } else {
        numberResult.innerText = "You lost!";
    }
}



NumberForm.addEventListener("submit", NumberSubmit);