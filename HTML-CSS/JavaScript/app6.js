// funkcija u JavaScriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja liste. //
// Mozemo je definisati putem:
// 1. function keyword
// 2. arrow function sintakse. //

// 1. function keyword:

// Pravmo funckiju koja sabira broj 3 i broj 5: //
function zbirTriIPet() {
  const zbir = 3 + 5;
  return zbir;
}

console.log(zbirTriIPet());

// Pravimo funkciju koja sabira dva broja: //
function zbirDvaBroja(par1, par2) {
  return par1 + par2;
}

console.log(zbirDvaBroja(5, 22));

// Napraviti funkciju koja vraca zbir kdvadrata dva broja. //

function zbirKvadrata(par1, par2) {
  return par1 ** 2 + par2 ** 2;
}

console.log(zbirKvadrata(10, 5));

const aritmetickaVrednost = function (par1, par2, par3) {
  return (par1 + par2 + par3) / 3;
};

function zadatak1(par1, par2) {
  if (par1 == par2) {
    {
      console.log("ovo je kvadrat");
    }
  } else {
    console.log("ovo je pravougaonik");
  }
  return par1 * par2;
}

console.log(zadatak1(10, 11));

// 2. Arrow function: //

// const myFunction = () => {

// }

// const proizvodDvaBroja = (br1, br2) => {
//   return br1 * br2;
// };

// console.log(proizvodDvaBroja(2, 16));

// const kvadratBroja = (broj) => broj ** 2;

// const brojevi = () => {
//   let broj = Number(prompt("unesite neki broj"));
//   if (isNaN(broj)) {
//     return "uneta vrednost nije broj";
//   } else if (broj === 0) {
//     return "uneta je nula";
//   } else if (broj > 0) {
//     return "unet je pozitivan broj";
//   }
// };
// console.log(brojevi());

const email = (br1, br2) => {
  if (br1 < 9 || br1 > 16) {
    return "email nije stigao na vreme";
  } else if (br2 < 0 || br2 > 59) {
    return "email nije stigao na vreme";
  } else if (br1 >= 9 || br1 < 17) {
    return "email je stigao na vreme";
  } else br2 > 0 || br2 < 60;
  return "email je stigao na vreme";
};
console.log(email(9, 0));
