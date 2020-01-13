// TASK #06:
// Найти среднее арифметическое всех целых чисел от 1 до 500.

let sum = 0;
let average;

for (let number = 1; number <= 500; number++) {
    sum += number;
}

average = sum / 500;

document.write(average);