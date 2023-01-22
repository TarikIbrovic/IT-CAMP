const prom1 = 55;
const prom2 = !55;
const prom3 = !!55;

const prom4 = !!true;
const prom5 = !"";
const prom6 = !(55 + "");

console.log(prom1);
console.log(prom2);
console.log(prom3);
console.log(prom4);
console.log(prom5);
console.log(prom6);

x = 15;
let y = 16;

console.log(x + y);

add(10, 15);

function add(a, b) {
  console.log(a + b);
}

// Rekurzivna funkcija poziva izvrsenje same sebe unutar funkcije. //
// Efekat petlje mozemo postici rekurzivnom funkcijom. //

// Ispisati brojeve od 10 do 1. //
for (i = 10; i >= 1; i--) {
  console.log(i);
}

const ispisivanje = (n) => {
  console.log(n);
  if (n - 1 > 0) {
    ispisivanje(n - 1);
  }
};

ispisivanje(10);

// flat() metoda se koristi kada unutar niza imamo element koji je niz, i zelimo da sve podelemente izvucemo na nacin da oni predstavljaju elemente glavng niza. //
