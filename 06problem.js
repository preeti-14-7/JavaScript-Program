//Write a Javascript problem that returns only the even numbers from an array.

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); //[2, 4, 6]
