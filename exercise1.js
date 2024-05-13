const process = require('node:process');
console.log(numberToComputers());

function numberToComputers(number) {
    if (!Number.isInteger(number)) {
        return 'необходимо целое число компьютеров'
    }
    const numberMod100 = number % 100;

    if (5 <= numberMod100 <= 20 || numberMod100 % 10 > 4) {   //случаи 5-20 и 10n + 5-9
        return `${number} компьютеров`
    }
    if (numberMod100 % 10 <= 4) { //случаи 10n + 2-4
        return `${number} компьютера`
    }
    if (numberMod100 % 10 === 1) { //случаи 10n + 1
        return `${number} компьютер`
    }
}


