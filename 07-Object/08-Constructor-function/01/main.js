function ObjectCal() {
  this.read = function () {
    this.value1 = +prompt('Enter 1st value');
    this.value2 = +prompt('Enter 2nd value');
  };

  this.sum = function () {
    alert(this.value1 + this.value2);
    return this.value1 + this.value2;
  };
  this.mul = function () {
    alert(this.value1 * this.value2);
    return this.value1 * this.value2;
  };
}

let cal1 = new ObjectCal();

cal1.sum(); //ลองเรียกก่อน input ค่าให้ value1 value2
cal1.read();
cal1.sum();
cal1.mul();
console.log(cal1.value1);
console.log(cal1.sum());
