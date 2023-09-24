// const numbers = [5, 8, 9, 10, 35, 78];

// numbers.forEach((number, index, array) => {
//   console.log("number: ", number);
//   console.log("index: ", index);
//   console.log("array: ", array);
// });

function foo(callback) {
  callback(10);
}

function logger(value) {
  console.log("value: ", value);
}

foo(logger);
