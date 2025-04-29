// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers: number[] = [];

for (let i: number = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
