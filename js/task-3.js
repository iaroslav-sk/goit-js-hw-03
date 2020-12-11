const findBestEmployee = function (employees) {
  let array = Object.values(employees);
  let bigestNumber = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > bigestNumber) {
      bigestNumber = array[i];
    }
  }
  const keys = Object.keys(employees);

  for (const key of keys) {
    if (employees[key] !== bigestNumber) continue;
    return key;
  }
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
