let fruitsBasket = function () {
  const basket = {};
  let fruit = prompt('Enter fruit');
  let fruitNum = prompt('Enter quantity');

  if (fruitNum > 1 && fruit.toLowerCase().charAt(fruit.length - 1) !== 's') {
    fruit += 's';
  } else if (
    fruitNum > 1 &&
    fruit.toLowerCase().charAt(fruit.length - 1) === 's'
  ) {
    fruit += 'es';
  }

  basket[fruit] = fruitNum;
  console.log(basket);
  return basket;
};

fruitsBasket();

// str.charAt(str.length - 1);
