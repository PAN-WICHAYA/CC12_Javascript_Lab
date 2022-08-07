const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

const summary = [{ netPrice: 900 }, { netPrice: 475 }, { netPrice: 100 }];

const calSum = (salesArray) => {
  const summaryArray = [];
  for (let item of salesArray) {
    let currentObj = {};
    let netPrice;
    if (item.discount) {
      netPrice = item.price * (1 - item.discount);
    } else {
      netPrice = item.price;
    }

    currentObj.netPrice = netPrice;
    summaryArray.push(currentObj);
  }
  return summaryArray;
};

console.log(calSum(sales));
