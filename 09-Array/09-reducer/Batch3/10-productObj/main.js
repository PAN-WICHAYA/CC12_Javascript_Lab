const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' },
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

const productsObj = products.reduce((acc, item) => {
  let keyArr = Object.keys(item); // create array of key-object
  let key = item[keyArr[0]]; // using value of key(id) tobe a key
  valObj[keyArr[1]] = item[keyArr[1]]; //create object value

  acc[key] = valObj; // Put key-value to acc-obj
  return acc;
}, {});

console.log(productsObj);
