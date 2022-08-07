//จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมาก 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)

const checkAge = ({ firstName, lastName, age }) => {
  return age > 18 ? `Hello, ${firstName} ${lastName}` : `Access Denied`;
};
obj1 = { firstName: 'Wichaya', lastName: 'Charuchinda', age: 10 };
obj2 = { firstName: 'PAN', lastName: 'Charuchinda', age: 20 };

console.log(checkAge(obj1));
console.log(checkAge(obj2));
