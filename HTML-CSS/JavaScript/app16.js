// splice() metoda uzima minimum 2 argumenta: //
// Prvi argumnet predstavlja poziciju od koje ce se vrsiti neke promene; //
// Drugi argument predstavlja broj elemenata koje brisemo iz niza. //

// Treci argument predstavlja vrednost koja ce se dodati na mestu koje smo definisali prvim argumentom. //
// Svi ostali argumenti su takodje vrednosti koje se dodaju unutar niza. //

const niz = ["hamed", "miona", "alma", "bakir", "merisa", "alen", "amer"];
// niz.splice(1, 2);
// niz.splice(4, 1);
// console.log(niz);

// niz.splice(0, 1);
// console.log(niz);

// splice() metoda nam vraca niz sa izbrisanim elementima. //

// slice() metoda vraca novi niz sa uzetim delom originalnog niza. //
const skraceniNiz = niz.slice(3, 5);
console.log(skraceniNiz);

const skraceniNiz2 = niz.slice(5);
console.log(skraceniNiz2);

// Sortiranje nizova //

const voce = ["jagoda", "ananas", "jabuka", "banana"];

// sort() metoda nam sortira niz abecedno. //

// voce.sort();
// console.log(voce);

// reverse() metoda sortira niz obrnutim redosledom (u odnosu na predhodno satnej). //

voce.reverse();
console.log(voce);

const brojevi = [24, 36, 22, 45, 99, -99];
console.log(brojevi);
// brojevi.sort();
// brojevi.reverse();
// console.log(brojevi);
// const brojevi2 = ["21", "1000", "9"];
// brojevi2.sort();
// console.log(brojevi2);

// sort() metoda sama ne vrsi ispravno sortiranje kad se radi o brojevima, //
// Za resavanje datog problema se koristi callback funkcija unutar sort metoda. //

// Funkicja koje se salje kao argument unutar neke druge funkcije se zove callback funkcija. //

// Funkcija za porednjenje 2 broja: //
// function poredjaj(a, b) {
//   return a - b;
// }

// brojevi2.sort(poredjaj);
// console.log(brojevi2);

brojevi.sort((a, b) => a - b);
console.log(brojevi);

// Ako zelimo da nas niz sortira brojeve u random. //
brojevi.sort(() => 0.5 - Math.random());
console.log(brojevi);
