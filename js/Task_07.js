// TASK #07:
// Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80.

let sum = 0;

for (let number = 30; number <= 80; number++) {

    if (number % 2 === 0) {
        sum += number;
    } 

}

document.write(sum);
