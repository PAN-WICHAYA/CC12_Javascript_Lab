function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   // return confirm('Did parents allow you?');
  // }

  // วิธีที่2
  // return age > 18 ? true : confirm('Did your parent allow?');

  // วิธีที่3
  return age > 18 || confirm('Did your parent allow?');
}
checkAge(16);
