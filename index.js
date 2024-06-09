//Calculator Program
const display = document.getElementById("display");

 function appendToDisplay(char) {
    display.value += char;
 }
  function calculate () {
    try{
    display.value = eval(display.value);
    } catch(error) {
        display.value = "Error in input";
    }
  }
   function clearDisplay() {
        display.value = "";
   }