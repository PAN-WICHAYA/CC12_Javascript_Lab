const user = {
  name: 'John',
  age: 27,
  isMarried: false,
};

for (let key in user) {
  console.log(key); // เก็บค่า key ไว้เป็น String "name", "age", "isMarried"
  console.log(user[key]); // จะต้อง access value ของแต่ละ key ด้วยวิธี SQUARE BRACKET เท่านั้น
}
