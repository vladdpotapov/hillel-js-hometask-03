// TASK #14:
// Дано целое число. 
// Выяснить, является ли оно простым (простым называется число, большее 1, 
// не имеющих других делителей кроме 1 и самого себя).

let userNumber = parseInt(prompt('Enter the number'));
let divider;
let rest = true;

for (let count = 2; count < userNumber; count++) {
    
    if (userNumber < 1 || userNumber % count === 0) {
        rest = false;
    }
}

if (rest === false) {
    document.write('The number: ' + userNumber + ' is not prime');
} else {
    document.write('The number: ' + userNumber + ' is prime');
}