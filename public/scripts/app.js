document.addEventListener("DOMContentLoaded", function() {
  var calc = new Calculator()
  var calcButtons = document.getElementsByClassName('calc-display-num')[0]
  calcButtons.addEventListener('click', function(event) {
    calc.displayNums(event)
  })
})

function Calculator() {
  this.firstNums = ''
}

Calculator.prototype.displayNums = function(event) {
  this.firstNums += event.target.innerText
  console.log(this.firstNums)
  var calcWindow = document.getElementsByClassName('calc-display-window')[0]
  calcWindow.innerText = this.firstNums;
}

// calculator match function
Calculator.prototype.
// conditional if match % call percent function

// calculator percent function
// take num and divide by 100


  // function toggleColor(event) {
  //   document.getElementsByClassName('calc-display-num')[0].classList.toggle("black");
  //   document.getElementsByClassName('calc-display-num')[0].classList.toggle("red");
  // }