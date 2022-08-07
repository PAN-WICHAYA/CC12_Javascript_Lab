class User {
  name;
  password;
  role;
  constructor(name, password, role) {
    console.log('Creating Object');
    this.name = name;
    this.password = password;
    this.role = role || 'normal-user';
  }
  login(password) {
    console.log('Login' + password);
  }
  changePassword(newPassword) {
    console.log('Password changed');
  }
}

const a = new User('a', '1234');
const b = new User('b', '5678', 'admin');
const c = new User('c', '7890');
console.log(a);
console.log(b);
console.log(c);

class Admin extends User {
  updateProduct(productData) {
    console.log('Updated products');
  }
}

class Customer extends User {
  createOrder(cart) {
    console.log('Created Order');
  }
}

const admin = new Admin('admin');
console.log(admin);
const customer1 = new Customer('Pan');
console.log(customer1.login('1234'));
// console.log(customer1.createOrder());
