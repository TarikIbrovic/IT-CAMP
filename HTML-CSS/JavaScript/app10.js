// function kolikoMalih(recenica) {
//   let brojac = 0;
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//       brojac++;
//     }
//   }
//   return brojac;
// }
// console.log(kolikoMalih("da li BROJI razmake"));

// function kojihVise(recenica) {
//   let brojacMalih = 0;
//   let brojacVelikih = 0;
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica[i] !== recenica[i].toUpperCase()) {
//       brojacMalih++;
//     } else if (recenica[i] !== recenica[i].toLowerCase()) {
//       brojacVelikih++;
//     }
//   }
//   if (brojacMalih > brojacVelikih) {
//     return 'Malih ima (brojacMalih) i njih je vise.'
//   } else if (brojacMalih < brojacVelikih) {
//     return 'Velikih ima (brojacVelikih) i njih je vise.'
//   }
// }

// const toLower = (recenica) => {
//   let novaRecenica = "";
//   for (let i = 0; i < recenica.length; i++) {
//     novaRecenica += recenica[i].toLowerCase();
//   }
//   return novaRecenica;
// };

// console.log(toLower("ISPISI sva Mala slovA"));

const poslednji = (recenica) => {
  return recenica.lastIndexOf(" ");
};
console.log(poslednji("neka recenica hahahahah"));

function isPalindrom() {
  let novaRec = "";
  let rec = "";
  // Pravljenje obrnutog stringa: //
  for (let i = rec.length - 1; i >= 0; i--) {
    novaRec += rec[i];
  }
  if (rec === novaRec) {
    return "data rec je polindrom";
  }
}

console.log(isPalindrom("obrnuto"));
