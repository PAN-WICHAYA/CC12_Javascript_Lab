let a = 1; // a = 1
let b = 2; // a = 1, b = 2
let c = a++; // a = 2, b = 2, c = 1 ###assign a ไปที่ c ก่อน แล้วค่อยอัพเดทค่า a
let d = ++c; // a = 2, b = 2, c = 2, d = 2  ###update ค่า c ก่อน แล้วค่อย assign ค่าไปที่ d
let e = ++d + d++ + d; // 3 + 3 + 4 #### e = 10
