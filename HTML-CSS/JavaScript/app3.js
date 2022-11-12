// const duzina = +prompt("Unesite duzinu terena: ");
// const sirina = +prompt("Unesite sirinu terena: ");
// const rastojanje = +prompt("Unesite rastojanje od ivice terena i ograde: ");

// if (isNaN(duzina)) || isNaN(sirina) || isNaN(rastojanje) {
//     console.log("Unete vrednosti moraju biti brojevi.")
// }else if (duzina < 90 || duzina > 90){
// console.log("Unete vrednosti moraju biti brojevi.")
// }else if (sirina < 45 || sirina > 90)
// console.log("Unete vrednosti moraju biti brojevi."){
// }else if (rastojanje < 2 || rastojanje > 10)
// else {
// const obimTerena = 2 * duzina + 2 * sirina;
// const obimOgrade = obimTerena + 8 * rastojanje;
// console.log("Potrebno je" + obimOgrade + "m za ogradjivanje terena.")
// }

let broj1 = +prompt("Unesite prvi broj:");
let broj2 = +prompt("Unesite drugi broj:");
let suma = 0;
let brojac = 0;

if (broj1 === broj2) {
  console.log("Uneti brojevi moraju biti razliciti.");
} else if (broj1 < broj2) {
  while (broj1 <= broj2) {
    if (broj1 % 5 === 0) {
      brojac++;
      suma += broj1;
    }
    broj2++;
  }
  console.log(
    "Aritmeticka sredina brojeva, od broja" +
      broj1 +
      "do broja" +
      broj2 +
      "iznosi" +
      suma / brojac +
      "."
  );
}

let recenica = "Danas cemo neke operacije sa stringovima";
console.log(recenica);
// console.log(typeof recenica); //

// Pristupanje nekom karakteru stringa: //

// Pristupanje nekom karakteru stringa se vrsi preko indeksa //
// INDEKSIRANJEIDE OD NULE. //
// U SVAKOM ITERIRAJUCEM OBJEKTU, POSLEDNJI KARAKTER IMA INDEX: //
// (UKUPNA DUZINA STRINGA) - 1 //
