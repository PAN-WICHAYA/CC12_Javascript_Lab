let userName = prompt('Enter unsername');

function sayHelloUser(name = 'Pan') {
  alert(`Hello, ${name}`);
}

sayHelloUser(userName);
sayHelloUser();
