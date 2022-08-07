const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

let result = tasks.findIndex(function (item, index, array) {
  return item.id === 2;
});

console.log(result);
