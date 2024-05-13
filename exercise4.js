const process = require('node:process');
consoleMultiplyTable(process.argv[2]);

function consoleMultiplyTable(maxNumber) {
    const allNumbers = [];

    for (let i = 1; i <= maxNumber; i++) {
        allNumbers.push(i);
    }

    const lastLineArray = [maxNumber, ...multiplyArrayElements(allNumbers, maxNumber)];
    const numbersStringSize = lastLineArray.map(number => getNumberStringSize(number));

    console.log(getFirstLine(allNumbers, numbersStringSize));
    allNumbers.map((number) => {
        const lineNumbers = [number, ...multiplyArrayElements(allNumbers, number)]
        console.log(getStringFromNumbers(lineNumbers, numbersStringSize));
    });
}

function getFirstLine(allNumbers, numbersStringSize) {
    const firstLineNumbersStringSize = [...numbersStringSize];
    const firstNumberSize = firstLineNumbersStringSize.shift();
    let resultLine = ' '.repeat(firstNumberSize);
    resultLine += ' ' + getStringFromNumbers(allNumbers, firstLineNumbersStringSize);
    return resultLine;
}

function getStringFromNumbers(numbers, numbersStringSize) {
    let resultString = ''
    numbers.forEach((number, index) => {
        const addSpace = numbersStringSize[index] - getNumberStringSize(number);
        resultString += ' '.repeat(addSpace)+number+' ';
    })
    return resultString;
}

function getNumberStringSize(number) {
    return number.toString().length;
}

function multiplyArrayElements(array, multiplier) {
    return [...array.map((number) => number * multiplier)];
}

