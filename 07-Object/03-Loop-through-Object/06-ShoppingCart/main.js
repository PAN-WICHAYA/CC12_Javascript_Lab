let product = prompt("Enter product's name");
let quantity = +prompt('Enter quantity of product');
let price = +prompt("Enter product's price");
let discount = +prompt('Enter discount');

const shoppingCart = {
  product,
  quantity,
  price,
  discount,
  calPrice: function () {
    return shoppingCart['price'] * (1 - shoppingCart['discount']);
  },
};

console.log(shoppingCart);
console.log(shoppingCart.calPrice());
