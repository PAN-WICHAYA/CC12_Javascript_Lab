ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร

```js
var name = 'Joe';
function makeUser() {
  console.log(this);
  return {
    name: 'John',
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name); // *
```
