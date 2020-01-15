// TASK #13:
// Дано целое число. Вывести все целые числа от 1 до 100, 
// квадрат которых не превышает числа N.

let userNumber = parseInt(prompt('Enter the number'));

for (let i = 1, square; i <= 100; i++) {
    square = i * i;

    if (square <= userNumber) {
        document.write(i + ' | ');
    }
}