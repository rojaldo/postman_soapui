
let student = {
    name: "John Doe",
    _age: 20,
    courses: ["Math", "Science", "History"],
    isEnrolled: true,

    details: {
        address: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },

    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },

};

function sum(a, b) {
    // check if a and b are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
    return a + b;
}

// 1.- Hacer una función que determine si un año es bisiesto o no.
// 2.- Un programa que calcule los días que faltan para navidad
// 3.- Una función que reciba 2 números y diga si tienen diferente signo
// 4.- Una función que diga si un número es divisible por 3 o 5
// 5.- Una función que añada al comienzo y al final de una cadena los 3 últimos caracteres
// 6.- Una función que cuente la ocurrencia de un caracter en una cadena
// 7.- Una función que invierta una cadena que entra como parámetro
// 8.- Una función que pase de un número que representa minutos al formato horas:minutos



function ejercicio3(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return undefined;
    }
    
    if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        return true;
    }
    
    return false;
}

function ejercicio4 (num) {
    if (typeof num !== 'number') {
        return undefined;
    }
    if (num % 3 === 0 || num % 5 === 0) {
        return true;
    }
    return false;   
}

function ejercicio5(myString) {
    if (typeof myString !== 'string' && myString.length > 3) {
        return undefined;
    }
    // get the last 3 characters of the string
    const subString = myString.slice(-3);
    console.log(`The last 3 characters of the string are: ${subString}`);
    
    return subString + myString + subString;
    

}

// Una función que pase de un número que representa minutos al formato horas:minutos
function ejercicio8(minutes) {
    if (typeof minutes !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
        return undefined;
    }
    
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    return (hours < 10 ? '0' + hours : hours) + ':' + (mins < 10 ? '0' + mins : mins);
}

console.log(ejercicio8(825)); // "2:05"

