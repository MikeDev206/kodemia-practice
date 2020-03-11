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

console.log(`The PEN value in MXN is ${result} so you owe ${result * USD} dollars &  ${result * EUR} euros.`);

// class solution

var exchangeMxnToPen = 6.10;
var pen = 2500;

var totalMxn = pen * exchangeMxnToPen;

var exchangeMxnToUsd = 0.046;
var totalUsd = totalMxn * exchangeMxnToUsd;

var exchangeMxnToEur = 0.041;
var totalEur = totalMxn * exchangeMxnToEur;

console.log('Tengo ' + totalUsd + ' Dolares ');
console.log('Tengo ' + totalEur + ' Euros ');