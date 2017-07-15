var numbers = [];

function operation(operator) {
  let sumStr = 0;
  let sum = 0;

  if (numbers.length > 0) {
    switch (operator) {
      case "add":
        storeValues();
        sum = numbers.reduce(function(a, b) {
          return a + b;
        });
        sumStr = sum.toString();
        document.getElementById("js-calc-sum").innerHTML = "Total: " + sumStr;
        break;

      case "subtract":
        storeValues();
        sum = sum > 0 ? sum : numbers[0];
        for (let i = numbers.length - 1; i >= 1; i--) {
          sum = sum - numbers[i];
        }
        sumStr = sum.toString();
        document.getElementById("js-calc-sum").innerHTML = "Total: " + sumStr;
        break;

      case "multiply":
        storeValues();
        sum = sum > 0 ? sum : numbers[0];
        for (let i = numbers.length - 1; i >= 1; i--) {
          sum = sum * numbers[i];
        }
        sumStr = sum.toString();
        document.getElementById("js-calc-sum").innerHTML = "Total: " + sumStr;
        break;

      case "division":
        storeValues();
        sum = sum > 0 ? sum : numbers[0];
        for (let i = numbers.length - 1; i >= 1; i--) {
          sum = sum / numbers[i];
        }
        sumStr = sum.toString();
        document.getElementById("js-calc-sum").innerHTML = "Total: " + sumStr;
        break;
    }
  } else {
    storeValues();
  }
}

function storeValues() {
  numbers.push(Number(document.getElementById("js-calc-input").value));
  document.getElementById("js-calc-input").value = "";
  return numbers;
}

document.getElementById('js-clear-btn').addEventListener("click", function(){
  numbers = [];
  document.getElementById("js-calc-sum").innerHTML = "";
  document.getElementById("js-calc-input").value = "";
});