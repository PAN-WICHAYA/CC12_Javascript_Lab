function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // "Your name is Alejandro and you like purple"
getUserData({ firstName: 'Melissa' }); // "Youe name is Melissa and you like green"  // เพราะว่า ใน obj ไม่มี key ชื่อ favoriteColor ทำให้ดึงค่า default มาใช้
console.log(getUserData({})); //"Youe name is undefined and you like green" เพราะใน obj ไม่มี key ชื่อ firstName แล้วไม่ได้ set default ทำให้ return undefined
