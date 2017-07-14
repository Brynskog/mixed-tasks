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
        document.getElementById("js-calc-sum").innerHTML = 'Total: ' + sumStr;
        break;

      case "subtract":
       storeValues();
        sum = numbers[0]; 
        for (let i = numbers.length - 1; i >= 1; i--){
                sum = sum - numbers[i];
            }
        sumStr = sum.toString();
        document.getElementById("js-calc-sum").innerHTML = 'Total: ' + sumStr;
        break;

      case "multiply":
       storeValues()
        
        break;

      case "division":
       storeValues();
        
        break;
    }
  } else{
      storeValues();
  }
};

function storeValues() {
  numbers.push(Number(document.getElementById("js-calc-input").value));
  document.getElementById("js-calc-input").value = "";
  return numbers;
};
