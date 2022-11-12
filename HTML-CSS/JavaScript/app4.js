// Stringovi su immutable promenljive, nije moguce vrsiti modifikaciju postojeceg stringa //
// Alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god zelimo. //

// let rec1 = "Petak";
// console.log(rec1[2]);

// // tuUpperCase() - metoda koja pretvara ceo string u velika slova. //

// let PETAK = rec1.toUpperCase();

// console.log(PETAK);

// // tuLowerCase() - metoda koja pretvara ceo string u mala slova. //

// let petak = PETAK.toLowerCase();
// console.log(petak);

// const recenica0 =
//   "Zelimo DATu reCENIcu prikazaTI MALIM, isto taKO i VELIkim slovima";

// const recenica01 = recenica0.toLowerCase();
// const recenica02 = recenica0.toLocaleUpperCase();

const recenica = "sledece subote cemo imati test";

let novaRecenica = "";
for (let i = 0; i < recenica.length; i++) {
  if (i === 0) {
    novaRecenica += recenica[i].toUpperCase();
  } else if (recenica[i - 1] == " ") {
    novaRecenica += recenica[i].toUpperCase();
  } else {
    novaRecenica += recenica[i];
  }
}
console.log(recenica);
console.log(novaRecenica);

const recenica1 = "sledece subote cemo imati test";

let novaRecenica1 = "";
for (let i = 0; i < recenica1.length; i++) {
  if (i === recenica1.length - 1) {
    novaRecenica1 += recenica1[i].toUpperCase();
  } else if (recenica1[i + 1] == " ") {
    novaRecenica1 += recenica1[i].toUpperCase();
  } else {
    novaRecenica1 += recenica1[i];
  }
}
console.log(recenica1);
console.log(novaRecenica1);
