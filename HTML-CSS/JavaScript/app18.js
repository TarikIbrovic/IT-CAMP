const addSomething = (num) => {
  let newNum = "";
  for (let i = 0; i <= num.length - 1; i++) {
    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
      newNum += num[i] + "-";
    } else {
      newNum += num[i];
    }
  }
  return newNum;
};

console.log(addSomething("025468"));

// callback funkcije //

// callback funkcija  predstavlja funkciju koju saljemo kao argument neke druge funkcije. //
// Sam argument ne treba da bude izvrsavanje callback funkcije vec referenca na datu radnju. //

function glavnaFunkcija(func) {
  console.log("Radnja unutar glavne funkcije.");
  func();
  console.log("Kraj glavne funkcije.");
}

function callback() {
  console.log("Radnja unutar callback funkcije.");
}

glavnaFunkcija(callback);

// Napraviti glavnu funkciju unutar koje ce se desiti ispis sta ona predstavlja, a celu stva ce da izvrsi callback funkcija. Callback funkcija ima 2 parametra, i ispisuje rezultat par1 stepenovan par2. //

function mainFunction(callback2) {
  console.log("Prvi broj stepenovan sa drugim je:");
  callback2(2, 3);
}

const callback2 = (par1, par2) => {
  console.log(par1 ** par2);
};

mainFunction(callback2);

// Javascript Array Iteration //

// Array Iteration metode prolaze kroz svaki element niza. //

// forEach() metoda poziva callback funkciju za svaki element niza. //

const niz = [];

// forEach() moze imati 3 parametra: //
// 1. element niza //
// 2. index niza //
// 3. ceo niz //
niz.forEach((element) => {
  console.log(element);
});

niz.forEach((element, index) => {
  console.log();
});

// map() metoda kreira novi niz (iste duzine kao originalni) sa logikom predstavljenom unutar callback funkcije unutar date metode. //

// Preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza. //

// const niz2 = niz.map(function (element) {
//   return element;
// });

const niz2 = niz.map((element) => element);
console.log(niz2);

// Preko map() metode napraviti novi niz gde ce imena svih pocinjati velikim slovom. //

const niz3 = niz.map((element) => element[0].toUpperCase() + element.slice(1));
console.log(niz3);

const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadratirati. //
