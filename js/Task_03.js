// TASK #03:
// Вывести таблицу умножения на 7.

let result;

for (let multiplier = 1, number = 7; multiplier <= 10; multiplier++) {
    result = number * multiplier;

    let div = document.createElement('div');
    div.innerHTML = `7 * ${multiplier} = ` + result;
    document.body.append(div);
}