const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800
const result1 = array1.map((item) => {
  return item * 2;
});
console.log(result1);

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const result2 = array2.map((item) => {
  return String(item);
});
console.log(result2);

const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]

const result3 = array3.map((item) => {
  return typeof item;
});
console.log(result3);

const array4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
const result4 = array4.map((item) => {
  return item.toUpperCase();
});
console.log(result4);

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const result5 = array5.map((item) => {
  if (item % 2 === 0) {
    return 'even';
  }
  return 'odd';
});
console.log(result5);

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const result6 = array6.map((item) => {
  if (item < 0) {
    return item * -1;
  } else {
    return item;
  }
});
console.log(result6);

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const result7 = array7.map((item) => {
  return item.toFixed(2);
});
console.log(result7);

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const result8 = array8.map((item) => {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[item];
});
console.log(result8);

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
const result9 = array9.map((item) => {
  return Math.sqrt(Math.sqrt(item));
  //Math.cbrt(item);
});
console.log(result9);

const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];
// result: ["apple", "banana", "watermelon"]
const result10 = array10.map((item) => {
  return item.name;
});
console.log(result10);

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];
// result: [14, 18, 32]

const result11 = array11.map((item) => {
  return item.age;
});

console.log(result11);

const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' },
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
const result12 = array12.map((item) => {
  return `${item.name} ${item.surname}`;
});
console.log(result12);

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' },
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const CURRENT_YEAR = 2021;
const result13 = array13.map((item) => {
  let currentObj = { ...item }; //Clone obj ใน item
  let age = CURRENT_YEAR - Number(item.birth.slice(0, 4));
  currentObj['age'] = age;

  return currentObj;
});

console.log(result13);

const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' },
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

const result14 = array14.map((item) => {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let year = item.birth.slice(0, 4);
  let month = months[item.birth.slice(5, 7) - 1].toLowerCase();
  let day = item.birth.slice(8);

  return `<tr><td>${item.name}</td><td>${day} ${month} ${year}</td></tr>`;
});

console.log(result14);
