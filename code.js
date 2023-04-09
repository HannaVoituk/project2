let sum = 0;
let count = 0;
function myFunction (a,b){
for (let i = a; i < b; i++){
    if (i % 2 == 0){
        sum += i;
        count ++;
    }
}
}
myFunction(1, 5);
console.log (`Сумма четных чисел в диапазоне равна: ${sum}`);
console.log (`Количество четных чисел в диапазоне равно: ${count}`);

