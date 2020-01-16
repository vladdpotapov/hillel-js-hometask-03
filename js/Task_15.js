// TASK #15:
// Дано некоторое число. Определить, можно ли получить это число путем 
// возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно 
// поучить, а 13 - нельзя).

let userNumber = parseInt(prompt('Enter the number'));
let givenNumber = 3;
let result;
let degree;

for (let count = 1; count <= userNumber; count++) {

    if (givenNumber ** count === userNumber) {
        result = userNumber;
        degree = count;
    }
}

if (result === userNumber) {
    document.write('3 in ' + degree + ' = ' + userNumber + '<br>');
} else {
    document.write(userNumber + ' cannot be obtained by exponentiation ' + givenNumber + ' to any degree' + '<br>')
}

