function removeRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(randomIndex);
  const newArr = [...arr];
  newArr.splice(randomIndex, 1);
  return newArr;
}
console.log(removeRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
