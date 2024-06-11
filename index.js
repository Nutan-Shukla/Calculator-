//Calculator Program
const display = document.getElementById("display");

 function appendToDisplay(char) {
    display.value += char;
 }
  function calculate () {
    try {
      let expression = display.value;
      let v = [];
      let i = 0;

      while (i < expression.length) {
          if (expression[i] === '*' || expression[i] === '/') {
              let x = parseInt(v.pop());
              let y = parseInt(expression[i + 1]);
              if (isNaN(x) || isNaN(y)) {
                  throw "Invalid input";
              }
              let ans;
              if (expression[i] === '*') {
                  ans = x * y;
              } else {
                  ans = x / y;
              }
              v.push(ans.toString());
              i += 2;
          } else {
              v.push(expression[i]);
              i++;
          }
      }

      let ans = parseInt(v[0]);
      i = 1;
      while (i < v.length) {
          if (v[i] === '+' || v[i] === '-') {
              let x = parseInt(v[i + 1]);
              if (isNaN(x)) {
                  throw "Invalid input";
              }
              if (v[i] === '+') {
                  ans += x;
              } else {
                  ans -= x;
              }
              i += 2;
          } else {
              ans += parseInt(v[i]);
              i++;
          }
      }
      display.value = ans;
  } catch (error) {x
      display.value = "Error in input";
    }
  }
   function clearDisplay() {
        display.value = "";
   }