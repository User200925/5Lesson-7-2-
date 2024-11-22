let number = [2, 4, 9, 10, 45, 67, 8, 90]
console.log("Изначальный массив:", number)

let numbers = [2, 4, 9, 10, 45, 67, 8, 90];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log("Массив с чётными числами:", evenNumbers); // [2, 4, 10, 8, 90]
