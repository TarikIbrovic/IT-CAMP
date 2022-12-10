// const sumaCiFara = (broj) => {
//     if (isNaN(broj) || broj < 1000 || broj > 9999) {
//         return "Argument nije korektan"
//     } else {
//         const cifraJedinice = broj%10
//         const cifradesetice = Math.trunc((broj%100) / 10)
//         const cifraStotine = Math.trunc((broj%1000) / 100)
//         const cifraHiljade = Math.trunc(broj / 1000)
//         return {
//             cifraJedinice +
//             "\n" +
//             cifradesetice +
//             "\n" +
//             cifraStotine +
//             "\n" +
//             cifraHiljade +
//             "\n"
//         }
//     }
// }
// console.log(sumaCiFara()) //

// split() metoda nam vraca niz na osnovu nekog stringa na koji je primenjena. //

const recenica =
  "Ovde je prilicno hladno, ali smo dobili obecanje da ce uskoro poceti grejanje. Ako se to ne desi, bice odlaganja casova.";

// Ako se kod split() metode izostavi, argument dobicemo niz od jednog elementa. //
const niz = recenica.split();
console.log(niz);

const niz2 = recenica.split(".");
console.log(niz2);

const niz3 = recenica.split("#");
console.log(niz3);

//Napraviti niz od stringa, tako da se elementi  niza prave od svake reci "decembar". Rec "decembar" ne sme biti deo nijednog elementa niza. //
const recenica2 =
  "Decembar je poslednji mesec u godini. U decembar pocinje zima, decembar je najhladniji mesec u godini,";
const niz4 = recenica2.split(/decembar/i);

// Search  metode : //

// indexOf() metoda nam vraca poziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu. //

const pozicija = recenica2.indexOf("j");
console.log(pozicija);

const pozicija2 = recenica.indexOf("mesec");
console.log(pozicija2);

const pozicija3 = recenica2.indexOf("asdasd");
console.log(pozicija3);

// Drugi argument predstavlja poziciju od koje krecemo sa trazenjem stringa. //
const pozicija4 = recenica2.indexOf("mesec", 30);
console.log(pozicija4);

const funkcija1 = (recenica3) => {
  const funkcija1 = recenica3.indexOf("ko osvaja");
  if (funkcija1 === -1) {
    return "Nismo pronasli dati string";
  } else if (funkcija1 )
};
