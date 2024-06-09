// console.log('hello world');
// let num = 'Nutan';
// console.log(num);
// //object
// let person = {
//     name: 'Mosh',
//     age: 30
// }
// console.log(person);

// //array
// let color = ['Red', 'Blue'];
// console.log(color);

// //fucntion
// function greet(name) {
//     console.log('hello' + name);
// }
// greet('Nutan');
// greet('Rahul');


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