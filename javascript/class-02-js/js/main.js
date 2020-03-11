// 1st challenge
// A partir de tu { age } edad, dime cuantos días has vivido

var age = 25;
var days = 365;

console.log(age * days);

// 2nd challenge
// Tengo 2500 soles, ¿Cuántos dólares y cuantos euros tengo?

var PEN = 2500;
var MXN = 6.10;
var USD = 0.046;
var EUR = 0.041;
var result = MXN * PEN;

console.log(`The PEN value in MXN is ${result}`)
console.log(`So you owe ${result * USD} dollars`);
console.log(`& ${result * EUR} euros.`);