// every() metoda proverava da li su svi elementi iz niza zadovoljili uslov. //
// every() metoda vraca boolean

// da li su svi u grupi punoletni //
// const godine = [16, 19, 18, 19, 15, 17, 17, 21, 20];
// const isEvery = godine.every((godine) => godina > 17);
// console.log(isEvery);

const niz = [];
const slova = niz.every((ime) => ime.length >= 5);
console.log(slova);

// some() metoda proverava da li bar jedan element niza zadovoljava uslov. //
// some() metoda vraca boolean. //

const isSomeName = niz.some((name) => name.length === 9);
console.log(isSomeName);

const isSomeName2 = niz.some((name) => name.length === 5);
console.log(isSomeName2);

const check = (arr) => {
  for (let el of arr) {
    if (el.length === 7) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

console.log(check(niz));
console.log(
  check("nije sedam karaktera", "opet nije sedam karaktera", "i jos jednom")
);

// find() metoda vraca vrednost prvog elementa koji je prosao test funkcije. //
const brojevi = [4, 9, 16, 25, 29];

// Koji je prvi element niza veci od 18: //

const veciOdOsamnaest = brojevi.find((broj) => broj > 18);
console.log(veciOdOsamnaest);

// Ako nijedan element nije zadovoljio uslov find metoda vraca unefiend. //
const veciOdOsamnaest1 = brojevi.find((broj) => broj > 30);
console.log(veciOdOsamnaest1);

const nesto = Array.from("ABCDE");

console.log(nesto);

const removeDuplicates = (arr) => {
  const newArr = [];
  for (let el of arr) {
    if ()
     {
      continue;
    } else {
      newArr.push;
      el;
    }
  }
  return newArr;
};
console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 6]));

const newArr = color.map((element, index) => {
    if (index === 0) {
        return "1" + o[index] + " choice is " + element
    } else if (index === 1) {
        return "2" + o[index] + " choice is " + element
    } else if (index === 2) {
        return "3" + o[index] + " choice is " + element
})
