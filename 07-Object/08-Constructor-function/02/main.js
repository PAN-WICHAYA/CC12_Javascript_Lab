function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.read = function () {
    this.input1 = +prompt('Enter number');
    this.currentValue += this.input1;
  };
  this.show = function () {
    alert(this.currentValue);
  };
}

let acc = new Accumulator(30);

// console.log(acc.currentValue);
acc.read();

acc.show();
