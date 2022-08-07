let roundDown = (sale) => {
  let points = Math.floor(sale / 100);
  return points;
};

let inputSale = prompt('ENTER SALE');

console.log(roundDown(inputSale));
