let arr = ['React', 'Vue', 'Angular'];

const copySorted = (arr) => {
  let newArr = [...arr];
  newArr.sort((a, b) => (a > b ? 1 : -1)); // 1 แปลว่า่สลับ , -1 แปลว่า ไม่สลับ
  return newArr;
};

let sorted = copySorted(arr);
console.log(sorted); // Angular, React, Vue
console.log(arr);
