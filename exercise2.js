const process = require('node:process');
console.log(getSharedDividers([...process.argv.slice(2)]))

function getSharedDividers(numbers) {
    const minNumber = Math.min(...numbers);
    const minNumberDividers = getDividers(minNumber);
    return minNumberDividers.filter((divider) => {
        let isSharedDivider = true;
        numbers.map((number) => {
            if (number % divider !== 0) {
                isSharedDivider = false;
            }
        });
        return isSharedDivider;
    });
}

function getDividers(number) {
    const dividers = [];
    for (let i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            dividers.push(i)
        }
    }
    return dividers;
}

