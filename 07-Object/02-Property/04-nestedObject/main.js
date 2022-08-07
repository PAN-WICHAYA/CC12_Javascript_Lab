const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok',
    },
  },
};

console.log(product1.distributor.address.province);

const product2 = {};

// console.log(product2.distributor) // undefined
// console.log(product2.distributor.address) // Error เพราะว่า่ undefined.address

console.log(product2.distributor?.address?.province); // chaining dot when before ? is object
