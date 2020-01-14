let result;


for (let multiplier = 1, number = 1; multiplier <= 10; multiplier++) {
    result = number * multiplier;

    let div = document.createElement('div');
    div.innerHTML = `<hr>1 * ${multiplier} = ` + result;
    document.body.append(div);

}

for (let multiplier = 1, number = 2; multiplier <= 10; multiplier++) {
    result = number * multiplier;

    let div = document.createElement('div');
    div.innerHTML = `<hr>2 * ${multiplier} = ` + result;
    document.body.append(div);

}


