const process = require('node:process');

console.log(getPrimeNumbers(process.argv[2], process.argv[3]))
function getPrimeNumbers(startNumber, endNumber) {
    const primeNumbers = [];
    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
        if (isPrime(currentNumber)) {
            primeNumbers.push(currentNumber);
        }
    }
    return primeNumbers;
}


function isPrime(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


