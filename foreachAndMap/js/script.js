const myArrayMap = [5, 6, 7, 8, 9];

const myArrayForEach = [
  { id: 1, name: 'arthur' },
  { id: 2, name: 'fagner' },
  { id: 3, name: 'kaio' }
];

const result = myArrayMap.map((value, index) => 2);
console.log(result);

const result2 = myArrayForEach.forEach((value) => console.log(value.name));
console.log(result2);