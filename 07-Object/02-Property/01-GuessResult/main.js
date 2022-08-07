const user = {
  email: 'cc@gmail.com',
  isActive: true,
};

user.isActive = false;
console.log(user); // * user:{email:'cc@gmail.com',isActive:fasle}
user = {};
console.log(user); // เปลี่ยนค่าไม่ได้ เพราะเป็น const
