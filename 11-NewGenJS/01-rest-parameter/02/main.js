const filterOutOdds = (...numbers) => {
  return numbers.reduce((acc, item) => {
    if (item % 2 === 0) {
      acc.push(item);
    }
    return acc;
  }, []);
};

console.log(filterOutOdds(3, 1, 2, 4, 6, 5, 7, 8));
