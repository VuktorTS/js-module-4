// const numbers = [5, 8, 9, 10, 35, 78];

// numbers.forEach((number, index, array) => {
//   console.log("number: ", number);
//   console.log("index: ", index);
//   console.log("array: ", array);
// });

// function foo(callback) {
//   callback(10);
// }

// function logger(value) {
//   console.log("value: ", value);
// }

// foo(logger);

const arr = [2, 6, 1, 7, 3];

function each(arr, callback) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    total = callback(total, arr[i]);
  }
  return total;
}

console.log(each(arr, add));
console.log(each(arr, sum));
console.log(each(arr, division));

function add(first, second) {
  return first + second;
}

function sum(first, second) {
  return first * second;
}

function division(first, second) {
  return first / second;
}
