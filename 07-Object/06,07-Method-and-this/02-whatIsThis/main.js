var name = 'Joe';
function makeUser() {
  console.log(this);
  return {
    name: 'John',
    ref: this, // this ตอนนี้ เป็น window เพราะ func ตอนประกาศอยู่ใน window context
  };
}
let user = makeUser();
console.log(user.ref.name); // Joe เนื่องจาก value (this) ใน key (ref) เป็น window
