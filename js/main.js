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

// const arr = [2, 6, 1, 7, 3];

// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//     console.log("arr[i]: ", arr[i]);
//     console.log("total: ", total);
//   }
//   return total;
// }

// console.log(each(arr, add));
// console.log(each(arr, sum));
// console.log(each(arr, division));

// function add(first, second) {
//   return first + second;
// }

// function sum(first, second) {
//   return first * second;
// }

// function division(first, second) {
//   return first / second;
// }

function nextDate(day, month, year) {
  const daysInMonth = [
    31,
    leapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  if (day < daysInMonth[month - 1]) {
    day += 1;
  } else {
    day = 1;
    if (month < 12) {
      month += 1;
    } else {
      month = 1;
      year += 1;
    }
  }

  return { day, month, year };
}

function leapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
function createResultElement() {
  const resultDiv = document.createElement("div");
  resultDiv.id = "result";
  resultDiv.style.width = "300px";
  resultDiv.style.height = "100px";
  resultDiv.style.margin = "100px auto";
  resultDiv.style.border = "4px solid green";
  resultDiv.style.textAlign = "center";
  resultDiv.style.color = "red";
  resultDiv.style.lineHeight = "100px";
  resultDiv.style.fontSize = "24px";
  document.body.appendChild(resultDiv);
  return resultDiv;
}

function promptUser() {
  const day = Number(prompt("Введіть день від 1 до 31:"));
  const month = Number(prompt("Введіть місяць від 1 до 12:"));
  const year = Number(prompt("Введіть рік з чьотирьох цифр:"));
  const resultDiv = createResultElement();

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1000 ||
    year > 9999
  ) {
    resultDiv.innerText = "Некоректні дані";
    return;
  }

  const next = nextDate(day, month, year);
  resultDiv.innerText =
    "Наступна дата: " + next.day + "." + next.month + "." + next.year + "  :)";
}

promptUser();
