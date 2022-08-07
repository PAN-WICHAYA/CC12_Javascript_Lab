const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD',
};

//########### for in method.
// const cloneNotebook = {};

// for (key in notebook) {
//   cloneNotebook[key] = notebook[key];
// }
// console.log(notebook);
// console.log(cloneNotebook);
// console.log(cloneNotebook === notebook);

//########### assign method

const cloneNotebook = Object.assign({}, notebook);
console.log(notebook);
console.log(cloneNotebook);
console.log(cloneNotebook === notebook);
