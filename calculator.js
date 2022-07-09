let button = document.querySelectorAll(".button");
button.forEach((e) => {
  e.addEventListener("click", () => {
    // console.log(e.id,"number")
    handleNumber(e.id);
  });
});

let operatorButton = document.querySelectorAll(".buttonOperator");
operatorButton.forEach((e) => {
  e.addEventListener("click", () => {
    // console.log(e.id,"operator")

    handleOperator(e.id);
  });
});

let operatorClear = document.querySelectorAll(".buttonClear");
operatorClear.forEach((e) => {
  // console.log(e.id,"clear")
  e.addEventListener("click", () => {
    handleClear();
  });
});

let buttonCount = document.querySelectorAll(".buttonCount");
buttonCount.forEach((e) => {
  // console.log(e.id,"count")

  e.addEventListener("click", () => {
    handleCount();
  });
});

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        return null;
      } else {
        return divide(a, b);
      }
    default:
      return null;
  }
}
let firstNumber = "";
let secondNumber = "";
let lastOperator = "";
let shouldReset = false;
let displayOne = document.getElementById("displayOne");
let displayTwo = document.getElementById("displayTwo");

function handleNumber(x) {
  if(shouldReset||displayOne.textContent==='0'){
    resetScreen()
  }
  displayOne.textContent += x
}
function resetScreen(){
  displayOne.textContent=""
  shouldReset=false
}
function handleOperator(x) {
  if (lastOperator !== ""){
    handleCount()
  }
  firstNumber = displayOne.textContent
  lastOperator = x
  displayTwo.textContent =`${firstNumber} ${lastOperator}`
  shouldReset = true
}

function handleCount() {
  if(lastOperator===""||shouldReset) return
  if(lastOperator==="/"&& displayOne.textContent === "0" ){
    alert("cant divide by 0")
    return
  }
  secondNumber = displayOne.textContent
  displayOne.textContent = operate(lastOperator,firstNumber,secondNumber)
  displayTwo.textContent = `${firstNumber} ${lastOperator} ${secondNumber}`
  lastOperator=""
}

function handleClear() {
  displayOne.textContent = "";
  displayTwo.textContent = "";
  firstNumber = ""
  secondNumber = ""
  lastOperator = ""
}

