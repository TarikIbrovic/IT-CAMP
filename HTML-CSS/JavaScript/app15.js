function types(niz) {
  let stringTipa = 0;
  let numberTipa = 0;
  let booleanTipa = 0;
  let nizTipa = 0;
  for (item of niz) {
    if (typeof item === "string") {
      stringTipa++;
    } else if (typeof item === "number") {
      numberTipa++;
    } else if (typeof item === "boolean") {
      booleanTipa++;
    } else if (item instanceof Array) {
      nizTipa++;
    }
  }
}

// Novi zapis for petlje, koji se odnosi na sve iterirajuce objekte. //
// for (let i of nizz) {
//   console.log(i);
// }

// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata. //
//unshift () prikazuje novu duzinu niza. //

const niz = ["cetvrtak", "petak", "subota"];

niz.unshift("sreda");
console.log(niz);

console.log(niz.unshift("ponedeljak", "utorak"));
console.log(niz);

// shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1. //
// shift() metoda vraca izbrisani element. //
console.log(niz.shift());
console.log(niz);

// concat() metoda se koristi za spajanje nizova. concat() metoda pravi novi niz. S tim sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz. //

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se ne sme naci nigde, //

const neparnePozicije = (niz) => {
  const neparni = [];
  for (let i = 0; i < niz.length; i += 2) {
    neparni.push(niz[i]);
  }
  return neparni;
};

console.log(neparnePozicije([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function pozitivni(niz) {
  const pozitivni = [];
  for (let broj of niz) {
    if (broj > 0) {
      pozitivni.unshift(broj);
    }
  }
  return pozitivni;
}

console.log(pozitivni([]));
