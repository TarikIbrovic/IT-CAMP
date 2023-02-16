// const nthlargest = (arr, position) => {
//   arr.sort((a, b) => b - a);
//   return arr[position - 1];
// };

// console.log(nthlargest(12, 34, 2, 234, 123, 324, 1, 123, 43));

// const keysToValues = (obj) => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);
//   const newObj = {};
//   for (let i = 0; i <= values.length - 1; i++) {
//     newObj.values[i] = keys[i];
//   }
//   return newObj;
// };
// console.log();

// const student = {};

// const lengthObject = (obj) => {
//   const length = Object.keys(obj).length;
//   return length;
// };
// console.log();

// const newOne = (A, B) => {
//   const pomocniB = B.filter((element) => element < A.length);
//   for (let i = 0; i < pomocniB.length; i++) {
//     C.push(A[pomocniB[i]]);
//   }
//   return C;
// };

// console.log(newOne([23, 52, 38, 44], [3, 1, 1, 2]));

const funkcija = (arr) => {
  const br1 = 0;
  const br2 = 0;
  for (let br2 = 0; br2 < arr.length; br2++) {
    if (arr(br2) === arr(br2 - 2) * 2 && arr(br1) === arr(br1 + 1) - 10) {
      return br2;
    }
  }
  return arr;
};
console.log(funkcija(10, 20, 30, 60, 70));
