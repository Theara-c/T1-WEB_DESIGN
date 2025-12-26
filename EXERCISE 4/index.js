
// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;
let chances = 3;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPassword);

const instructionLabel = document.getElementById("instructionLabel");


 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view
    show(passwordView);
    hide(wonView);
    hide(lostView);
    instructionLabel.textContent = `Enter your code (${chances} ${chances > 1 ? "tries" : "try"} left!)`;
    
}

function showWin() {
  // You can use this function to dispaly the Win View
    show(wonView);
    hide(passwordView);
    hide(lostView);
}
function showLost() {
    // You can use this function to dispaly the Lost View
    show(lostView);
    hide(wonView);
    hide(passwordView);
    
 
}

function handleEnterPassword(event) {
  if (event.key === 'Enter') {
    handleCheck();
  }
}

function handleCheck() {
    
    const passwordEntered = passwordInput.value;
     // Manage your logic when the button is pressed
      if (passwordEntered == SECRET_CODE){
        showWin();
      }
      else {
        showLost();
        chances--;
      }
      if (chances == 0){
        hide(tryAgainButton);
      }
}

// MAIN   ---------------------------------------------------------