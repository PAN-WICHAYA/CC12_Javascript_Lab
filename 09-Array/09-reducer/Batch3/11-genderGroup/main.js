const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
let maleArr = [];
let femaleArr = [];

const genderGroup = persons.reduce((acc, item) => {
  if (item.sex === 'M') {
    // check gender
    maleArr.push(item.name); //push name into array
    acc[item.sex] = maleArr; // create key-value  ###key ไม่ซ้ำกัน จึงสามารถ iterate ได้ โดยไม่ creat key ใหม่
  } else {
    femaleArr.push(item.name);
    acc[item.sex] = femaleArr;
  }
  return acc;
}, {});
console.log(genderGroup);
