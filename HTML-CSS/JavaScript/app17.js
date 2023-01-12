// III nacin //

const brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function maxElement2(niz) {
  let max = Number.NEGATIVE_INFINITY;
  for (let broj of niz) {
    if (broj > max) {
      max = broj;
    }
  }
  return max;
}

console.log(maxElement(brojevi));

// indexOf() metoda vraca poziciju elementa koji predstavljaargument date metode. //

const niz = [];

const bakir = niz.indexOf();
console.log(bakir + 1);

const hamed = niz.indexOf();
console.log(hamed);

// lastindexOf() metoda vraca poziciju poslednjeg pojavljivanja elementa koji predstavlja argument date metode. //
// lastindexOf() metoda vraca -1 ako se neki element ne nalazi u nizu. //

// Array.from() nam vraca niz, koji se pravi od nekog objekta koji ima length. //

const noviNiz = Array.from("SVAKO SLOVO CE BITI POSEBAN ELEMENT NIZA");
console.log(noviNiz);

// includes() metoda nam varaca boolean u zavisnosti od toga da i se argument nalazi u nizu. //

// keys() metoda vraca Array Iterator Object sa kljucevima (indeksima) nekog niza. //

const indeksi = niz.keys();
console.log(indeksi);

for (let index of indeksi) {
  console.log(index);
}

// entries() metoda vraca Array Iterator sa key\value parovima nekog niza. //

const entries = niz.entries();
console.log(entries);

for (let pair of entries) {
  console.log(pair);
}

const getElement = (niz, n) => {
  if (n > niz.length) {
    return niz;
  } else if (n === undefined) {
    return niz[0];
  } else {
    return niz.slice(0, n);
  }
};

console.log(getElement([1, 2, 3, 4, 5, 45, 3, 1]));
