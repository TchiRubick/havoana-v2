const mockInventories = [
  {name: 'Raisin', price: 45666, barcode: 123456789, qtt: 17, cost: 19566, img: null}, 
  {name: 'Raisin', price: 45666, barcode: 234567891, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 345678912, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 456789123, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 789123456, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 134567895, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 987456321, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 989895646, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 984562111, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 321545988, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 546468888, qtt: 17, cost: 19566, img: null},
  {name: 'Raisin', price: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: null},
];

export const findOneByName = (name: string) => mockInventories.find((i) => name === i.name);

export const findOneByBarcode = (barcode: number) => mockInventories.find((i) => barcode === i.barcode);

export const getList = () => mockInventories;
