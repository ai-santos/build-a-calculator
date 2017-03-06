document.addEventListener("DOMContentLoaded", function() {
  var calc = new Calculator();
  var calcButtons = document.getElementsByClassName('calc-display-num')[0];
  calcButtons.addEventListener('click', function(event) {
    calc.buttonPressed(event);
  })
})

function Calculator() {
  this.firstNums = '';
  this.decimalCheck = false;
  this.total = null;
  this.operator = null;
  this.operand = null;
  this.saveOperation = false;
  this.overwrite = false;
}

Calculator.prototype.displayNums = function(innerText) {
  this.firstNums += innerText;
  this.updateDisplay();
}

// calculator match function
Calculator.prototype.buttonPressed = function(event) {
  switch(event.target.innerText) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      this.displayNums(event.target.innerText);
      break;
    case '.':
      this.addDecimal();
      break;
    case '%':
      this.calculatePercent();
      break;
    case 'C':
      this.clearDisplay();
      break;
    case '+/-':
      this.posNeg();
      break;
    case '+':
      this.handleOperator(event.target.innerText)
      break;
  }
}

Calculator.prototype.addDecimal = function() {
  if(!this.decimalCheck) {
    this.decimalCheck = true;
    this.displayNums('.');
  }
}

Calculator.prototype.calculatePercent = function() {
  this.firstNums /= 100
  this.updateDisplay();
}

Calculator.prototype.updateDisplay = function() {
  var calcWindow = document.getElementsByClassName('calc-display-window')[0];
  calcWindow.innerText = this.firstNums;
}

Calculator.prototype.clearDisplay = function() {
  this.decimalCheck = false;
  this.firstNums = '0';
  this.secondNums = '';
  this.updateDisplay();
}

Calculator.prototype.posNeg = function() {
  this.firstNums *= -1;
  this.updateDisplay()
}

Calculator.prototype.pickOperation = function(num1, num2, oper) {
  let operations = {
    '+': function(num1,num2) { return num1 + num2 },
    '-': function(num1,num2) { return num1 - num2 },
    '*': function(num1,num2) { return num1 * num2 },
    '/': function(num1,num2) { return num1 / num2 }
  }
  return operations[op](num1, num2)
}

Calculator.prototype.enableOverwrite = function(){
  this.overwrite = true
  this.decimalCheck = false
}

Calculator.prototype.resolveEquation = function(){
  if (this.saveOperation && !this.overwrite ){
    this.operand = this.firstNums
    this.saveOperation = false
  }
  if( this.total !== null ){
    this.total = this.pickOperation(parseFloat(this.total), parseFloat(this.operand) || null, this.operator)
    this.firstNums = this.total
  }
  this.enableOverwrite()
  this.updateDisplay()
}

Calculator.prototype.handleOperator = function(op){
    this.operator = op
    if (!this.overwrite){
      this.saveOperation = true
      this.resolveEquation()
    }
    this.total = this.firstNums
    this.operand = this.firstNums
    this.enableOverwrite()
    this.saveOperation = true
}

Calculator.prototype.equals = function(){
  this.resolveEquation()
}

// Calculator.prototype.addNums = function() {

// }

// Calculator.prototype.resolveOperation = function() {

// }

// conditional if match % call percent function
// calculator percent function
// take num and divide by 100







  // function toggleColor(event) {
  //   document.getElementsByClassName('calc-display-num')[0].classList.toggle("black");
  //   document.getElementsByClassName('calc-display-num')[0].classList.toggle("red");
  // }