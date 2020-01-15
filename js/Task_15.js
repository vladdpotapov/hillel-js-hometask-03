// TASK #15:
// Дано некоторое число. Определить, можно ли получить это число путем 
// возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно 
// поучить, а 13 - нельзя).

let userNumber = parseInt(prompt('Enter the number'));
let givenNumber = 3;
let result;

for (let count = 1; count <= userNumber; count++) {
    result = givenNumber ** count;

    if (result === userNumber) {
        document.write(givenNumber + ' in ' + count + ' degree ' + ' = ' + userNumber);
    }

}
