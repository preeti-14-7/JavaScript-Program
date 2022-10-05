// map, filter and reduce

// map, filter and reduce are the Higher Order Functions.


// -----------------------------------------map function--------------------------------------------

// It is basically used to transform a array. The map() method creates a new array with the results of calling a function for every array element.

// const output = arr.map(_function_) this _function_ tells map that what transformation I want on each element of array

const arr = [5, 1, 3, 2, 6];

// Task 1: Double the array element: [10, 2, 6, 4, 12]
// Transformation logic
function double(x){
    return x*2;
}

const doubleArr = arr.map(double); // Internally map will run double function for each element of array and create a new array and returns it.

// or more simply we can write using arrow function
doubleArr = arr.map(x => x*2);

console.log(doubleArr); // [10, 2, 6, 4, 12]


// Task 2: Triple the array element
// Transformation logic
function triple(x) {
  return x * 3;
}
const tripleArr = arr.map(triple);

// or more simply we can write using arrow function
tripleArr = arr.map(x => x*3);

console.log(tripleArr); // [15, 3, 9, 6, 18]

// Task 3: Convert array elements to binary
// Transformation logic:
function binary(x) {
	return x.toString(2);
}
const binaryArr = arr.map(binary);

// or more simply we can write using arrow function
binaryArr = arr.map(x => x.toString(2));
console.log(binaryArr); // [101, 1, 11, 10, 110]



// -----------------------------------------filter function----------------------------------------------

// Filter function is basically used to filter the value inside an array. The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.


const array = [5, 1, 3, 2, 6];

// filter odd values
function isOdd(x) {
  return x % 2;
}
const oddArr = array.filter(isOdd); // [5,1,3]

// Other way of writing the above:
oddArr = arr.filter((x) => x % 2);

// Filter function creates an array and store only those values which evaluates to true.



// -----------------------------------------reduce function----------------------------------------------

// It is a function which take all the values of array and gives a single output of it. It reduces the array to give a single output.



array = [5, 1, 3, 2, 6];

// Calculate sum of elements of array - Non functional programming way
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(array)); // 17

// reduce function way
const sumOfElem = arr.reduce(function (accumulator, current) {
  // current represent the value of array
  // accumulator is used the result from element of array.
  // In comparison to previous code snippet, *sum* variable is *accumulator* and *arr[i]* is *current*
  accumulator = accumulator + current;
  return accumulator;
}, 0); //In above example sum was initialized with 0, so over here accumulator also needs to be initialized, so the second argument to reduce function represent the initialization value.
console.log(sumOfElem); // 17

// Other way of writing the above:
sumOfElem = arr.reduce((accumulator, current) => accumulator + current, 0); // 17




array = [5, 1, 3, 2, 6];

// find max inside array: Non functional programming way:
function findMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++ {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
console.log(findMax(array)); // 6

// using reduce
output = arr.reduce((acc, current) => {
	if (current > acc ) {
		acc = current;
	}
	return acc;
}, 0);
console.log(output); // 6


// acc is just a label which represent the accumulated value till now,
// so we can also label it as max in this case
const output = arr.reduce((max, current) => {
	if (current > max) {
		max= current;
	}
	return max;
}, 0);
console.log(output); // 6

// Other way of writing the above:
output = arr.reduce((max, current) => current > max ? current : max, 0); // 6





// source: https://www.youtube.com/watch?v=zdp0zrpKzIE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP
// namaste javascript playlist