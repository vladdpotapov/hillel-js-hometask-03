// TASK #08:
// Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3.

for (let number = 100; number <= 200; number++) {
    if (number % 3 === 0) {
        document.write(number + ' | ');
    }
}