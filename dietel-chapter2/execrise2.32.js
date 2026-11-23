let prompt = require('prompt-sync')();

let numberOne = Number(prompt("Enter first number: "));
let numberTwo = Number(prompt("Enter second number: "));
let numberThree = Number(prompt("Enter third number: "));
let numberFour = Number(prompt("Enter fourth number: "));
let numberFive = Number(prompt("Enter fifth number: "));

let counterOne = 0;
let counterTwo = 0;
let counterThree = 0;

//Positive Count
if (numberOne > 0) {
    counterOne += 1
}
if (numberTwo > 0) {
    counterOne += 1
}
if (numberThree > 0) {
    counterOne += 1
}
if (numberFour > 0) {
    counterOne += 1
}
if (numberFive > 0) {
    counterOne += 1
}

//Negative Count
if (numberOne < 0) {
    counterTwo += 1
}
if (numberTwo < 0) {
    counterTwo += 1
}
if (numberThree < 0) {
    counterTwo += 1
}
if (numberFour < 0) {
    counterTwo += 1
}
if (numberFive < 0) {
    counterTwo += 1
}

//Zeros Count
if (numberOne === 0) {
    counterThree += 1
}
if (numberTwo === 0) {
    counterThree += 1
}
if (numberThree === 0) {
    counterThree += 1
}
if (numberFour === 0) {
    counterThree += 1
}
if (numberFive === 0) {
    counterThree += 1
}

console.log("The number of positive integer: ", counterOne);
console.log("The number of negative integer: ", counterTwo);
console.log("The number of zeros integer: ", counterThree);
