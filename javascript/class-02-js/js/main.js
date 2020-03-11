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

//Obtener el área de un círculo

const PI = 3.1416;
var radius = 4;
var circleArea = PI * (radius ** 2);

console.log(circleArea);

//Conditionals

var color = "red";

if (color === "blue") {
    console.log('The color is blue');
} else {
    console.log("The color isn't blue bitch!");
}

//2nd conditional

var pet = "dog";

if (pet === "dog" || pet === "parrot") {
    console.log("It's a dog");
} else if (pet === "parrot") {
    console.log("It's a parrot");
} else if (pet === "cat") {
    console.log("It's a cat");
} else {
    console.log("It is an ilegal pet prro! >:v");
}

//Conditional chllng
//Dada una variable identificar si es par o no

var number = 7;

if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("U're dumb as a peanut dude :/ ");
}

//class solution

var number = 10;

if (number % 2 === 0) {
    console.log('Si es par');
} else {
    console.log('No es par');
}

//Methods
//.length not a method a property

var pet = "parrot";