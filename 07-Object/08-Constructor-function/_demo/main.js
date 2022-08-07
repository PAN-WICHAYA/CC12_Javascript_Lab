// Normal function
function myNormalFN() {
  return 5;
}

// when execute
let result = myNormalFN();
console.log(result);

//##### Constructor Function

function MyConstructorFN() {
  // some code
}

// when execute

let instance = new MyConstructorFN();

//######DEMO 1

function User(name) {
  // STEP1 this = {} //สร้าง empty obj
  // STEP2 เพ่ิ่ม property ให้กับ obj (this)
  this.name = name;
  this.isAdmin = true;
  // return this === instance created by new keyword
}

let user = new User('john');
alert(user.name); // john
alert(user.isAdmin); // true

function UserTest(name) {
  this.name = name;
  this.sayHi = function () {
    alert('My name is: ' + this.name);
  };
}
let john = new UserTest('John');
john.sayHi(); // My name is: John
