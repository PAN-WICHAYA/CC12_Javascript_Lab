let theSentinel = () => {
  const obj = {};
  const THE_SENTINEL = 'stop';
  do {
    key = prompt("Enter key's name or type 'stop' to exit");
    value = prompt('Enter Value');
    if (
      key !== null &&
      key.trim() !== '' &&
      key.toLowerCase() !== THE_SENTINEL &&
      value.toLowerCase() !== THE_SENTINEL
    ) {
      obj[key] = value;
    }
  } while (
    key.toLowerCase() !== THE_SENTINEL &&
    value.toLowerCase() !== THE_SENTINEL
  );

  console.log(obj);
  return obj;
};

theSentinel();

// let get = () => {
//   const THE_SENTINEL = 'stop';
//   const obj = {};
//   do {
//     key = prompt('enter key');
//     value = prompt('enter value');
//     if (
//       key !== null &&
//       key.trim() !== '' &&
//       key.toLowerCase() !== THE_SENTINEL &&
//       value.toLowerCase() !== THE_SENTINEL
//     ) {
//       obj[key] = value;
//     }
//   } while (key !== THE_SENTINEL && value !== THE_SENTINEL);

//   console.log(obj);
//   return obj;
// };

// get();

//รับค่า 2 valu == key , value
// สร้าง obj ใส่ key : value
//รับค่าไป เรื่อยๆ
//เช็ค ว่า key หรือ value เป็น stop ?
