let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]
const flattener = flattened.reduce((element, item, index) => {
  for (let i = 0; i < item.length; i++) {
    element.push(item[i]);
  }
  return element;
}, []);

console.log(flattener);
