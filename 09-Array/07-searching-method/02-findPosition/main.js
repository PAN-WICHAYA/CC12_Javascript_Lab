const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
let result = [];
let aIndex = alphabets.filter(function (item, index, array) {
  if (item === 'a') {
    result.push(index);
    return true;
  }
});

console.log(result);
