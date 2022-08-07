// const changeStringPattern = (str) => {
//   let splitStr = str.split('-');
//   console.log(splitStr);
//   let newWord =
//     splitStr[0] + splitStr[1].slice(0, 1).toUpperCase() + splitStr[1].slice(1);

//   return newWord;
// };

// console.log(changeStringPattern('background-color'));

let str = 'background-color';
let str2 = 'element-of-array';

const changeStrPattern = (str) => {
  let strArr = str.split('-');
  const result = strArr.map((item, index) => {
    if (index >= 1) {
      return item.slice(0, 1).toUpperCase() + item.slice(1);
    }
    return item;
  });

  return result.join('');
};

console.log(changeStrPattern(str));
console.log(changeStrPattern(str2));
