// TASK #09:
// Дано натуральное число. 
// - найти и вывести на страницу все его делители. 
// - определить количество его четных делителей;
// - найти сумму его четных делителей.

let userNumber = parseInt(prompt('Enter the number'));

let divider;
let dividerEven;
let sum = 0;

for (let counter = 1; counter <= userNumber; counter++) {
    divider = userNumber / counter;

    if (parseInt(divider) === divider) {
        console.log('Divider: ' + divider);    
    } 


    if (divider % 2 === 0) {
        dividerEven = divider;
        console.log('Even divider: ' + dividerEven);
        sum += dividerEven;
    }   
}

console.log('Sum of even dividers: ' + sum);





