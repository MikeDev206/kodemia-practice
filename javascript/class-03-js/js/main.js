//.length(property)
//.charAt(index)
//.concat()
//.include()


//1st chllng
//Dada una palabra imprimir en pantalla si la palabra tiene menos de 8 letras

var word = "prro";

//.length()

if (word.length === 8) {
    console.log("Indeed it has 8 letters");
} else {
    console.log("Nope, try again pls");
}

//Solution 

var word = "parrot";

if(word.length < 8) {
    console.log("Su longitud es menor a 8");
}

//2nd chllng
//Dada una palabra verificar si esa palabra tiene el sig. conjunto de letras --> 'ing'


//.include()
var word = "prro";

if(word.includes('i','n','g')) {
    console.log("Yes it has 'ing'. Nailed it!");
} else {
    console.log("No dude, try again :/ ");
}

//ARRAYS
//LOOPS STATEMENTS

//Hay 3 loops principales while, do while, for-loop

// sintaxis while: while (condition) {
//
// }

//example: tengo una variable llamada number que es igual a 1 y quiero ejecutar un hola mientras el numero valga uno


var number = 1;

while (number === 1) {
    console.log('Hello dogs!');
    number++ //aquí se ejecuta un incremento para que no se cumpla un ciclo infinito 
}

//1st exercise
//Teniendo una variable 0 y hasta el 100 identificar cuales son los numeros pares e imprimir en pantalla

var number = 0; 

while (number <= 100) {
    if (number % 2 === 0){
        console.log(number);
    }
    number++
}

//solution 
var firstNumber = 0; 

while (firstNumber <= 100) {
    if (firstNumber % 2 === 0){
        console.log(firstNumber);
    }
    firstNumber++
}



// do while loop primero ejecuta código y después evalua la condición do {sentencia} while (condicion);

var secondNumber = 1;

do {
    console.log(secondNumber);
    secondNumber++
} while (secondNumber <= 10)


//for loop se inicializa, ve la condición, ejecuta lo que deba ejecutar y después se incrementa o decrementa
//for no necesita que se declare la variable fuera (para eso está let)

//sintaxis
for (var count = 0; count <= 10; count++) {
    console.log(count);
}


//1st challenge
//Dado un array 'mascotas' crear un ciclo que me entregue uno por uno 

var pets = ['cat','dog','catdog','parrot','prro','dolphin']

for (let count = 0; count < pets.length; count++) {
    console.log(pets[count]);
}

//2nd challenge 
//Verificar que la palabra {word} tiene al menos 3 vocales

var word = 'cagandotio';
var vowels = ['a','e','i','o','u'];
var vowelCounter = 0;

for (let index = 0; index < word.length; index++) {
    if (vowels.includes(word[index])){
        vowelCounter++
    }
} if (vowelCounter > 3) {
    console.log('Yup, it has at least 3 vowels');
} else {
    console.log('Keep trying bruh...!');
}

    




//3rd challenge 
//Cuantos multiplos de 8 hay dentro del rango {numberOne}--{numberTwo} 
//a. validar que numberOne sea menor que numberTwo
//b. verificar que ambos son positivos

var numberOne = 8;
var numberTwo = 100;
var totalRangeNumbers = 0;
for (let element = numberOne; element <= numberTwo; element++) {
    if((element % 8) === 0){
        totalRangeNumbers++;
    }
} console.log("There are" + totalRangeNumbers + "multiple of 8 in this range");


//4th challenge
//Se tiene una lista con el nombre de cada uno de los empleados con los días que faltaron al trabajo
//ej. [[David,4],[Jose,2],[Esteban,10],[Mike,0],[Eduardo,22]]
//a. Si el sueldo diario son $450.00, y por cada día faltado se descuenta el 2% del salario (es acumulable),
//¿cuánto es el sueldo final del empleado? 

var empleados = [['David',4],['Josue',2],['Esteban',10],['Mike',0],['Eduardo',22],['Karen',5],['Leonore',6]];
const SUELDO_DIARIO = 450.00;
const DIAS_LABORADOS = 30;
const DESCUENTO = 2;
const SUELDO_MENSUAL = SUELDO_DIARIO * DIAS_LABORADOS;

for (let index = 0; index < empleados.length; index++) {
    let empleadoActual = empleados[index];
    let diasFaltados = empleadoActual[1];
    let porcentajeDescuento= diasFaltados * DESCUENTO;
    let descuentoTotal = SUELDO_MENSUAL * (porcentajeDescuento/100); 
    let sueldoFinal = SUELDO_MENSUAL - descuentoTotal;
    console.log(`${empleadoActual[0]}: $${sueldoFinal}`);
}


//FUNCTIONS

//1st challenge 
//Hacer una calculadora con solo dos números

var firstNumber = 2;
var secondNumber = 3;

function addition(firstNumber,secondNumber) {
    return firstNumber + secondNumber
}

function substraction(firstNumber,secondNumber) {
    return firstNumber - secondNumber
}

function multiplication(firstNumber,secondNumber) {
    return firstNumber * secondNumber
}

function division(firstNumber,secondNumber) {
    return firstNumber / secondNumber
}

function calculator(firstNumber,secondNumber,operation) {
    if(operation == "a") {
        return `The result is: ${addition(firstNumber,secondNumber)}` ;
    }
    if (operation == "s") {
        return `The result is: ${substraction(firstNumber,secondNumber)}` ;
    }
    if (operation == "m") {
        return `The result is: ${multiplication(firstNumber,secondNumber)}` ;
    }
    if (operation == "d") {
        return `The result is: ${division(firstNumber,secondNumber)}` ;
    }
} 

//homework
// 1.- Dado un array de numeros, entregar el producto total
// Ej -> [1,2,3,4,5]
// El resultado seria 1 * 2 * 3 * 4 * 5 

var numbers = [1,2,3,4,5];

for(let index = 0; index <= numbers.length; index++) {
    
}


// 2.- Dado un array de números (MXN), entregar los numeros en USD 
// Ej -> [123,142.09,384]
// 3.- Dados dos arrays ['Alex', 'Juan']  ['Lopez Hernandez','Navarro Osorio'], construir un nuevo array con los nombres completos según la position
// Ej -> ['Alex Lopez Hernandez', 'Juan Navarro Osorio']

var name = ['Alex','Juan'] 
var apellidos = ['Lopez Hernandez', 'Navarro Ososrio']

var fullName = name.concat(apellidos);


//4. Escribir una función que acepte como argumento un string y capitalice cada palabra dentro del string

const capitalize = (phrase) => {
    let phraseArray = phrase.split(' ')
    for (let index = 0; index < phraseArray.length; index++) {
       let firstWord = phraseArray[index][0].toUpperCase()
       let lastWord = phraseArray[index].slice(1).toLowerCase()
       phraseArray[index] = `${firstWord}${lastWord}`
        
    } 
    return phraseArray.join(' ');
}