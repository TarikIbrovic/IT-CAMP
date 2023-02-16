// toUpperCase(); - metoda koja pretvara ceo string u velika slova.
// toLowerCase(); - metoda koja pretvara ceo string u mala slova.
// .length metoda nam sluzi za dobijanje duzine stringa
// Postoje 3 metode za ekstraktovanje (uzimanje dela) stringa:
// 1. slice(start, end) end nije ukljucen u opseg.
// 2. substring(start, end) razlika u odnosu na slice je da substring ne
// prihvata negativne indekse.
// 3. substr(start, length)
// replace() metoda vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta. Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa.
// concat() metoda vrsi spajanje dva ili vise stringova.
// Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti).
// trim() metoda brise razmake sa obe strane stringa.
// split() metode nam vraca niz na osnovu nekog stringa na koji je primenjen.
// indexOf() metoda nam vraca prvu poziciju gde se zapravo nalazi poslati argument(jedan ili vise karaktera) kada se radi o nekom stringu.Drugi argument predstavlja poziciju od koje krecemo sa trazenjem stringa.
// lastIndexOf() metoda nam vraca poslednju poziciju gde se zapravo nalazi poslati argument(jedan ili vise karaktera) kada se radi o nekom stringu.
// Ako trazimo poziciju nepostojeceg stringa unutar nase recenice, rezultat ce biti broj -1
// search() metoda nam daje poziciju (index) nekog stringa (argumenta metode).
// Razlike izmedju indexOf() i search() metoda:
// 1.indexOf() metoda dozvoljava drugi argument (pozicija odakle krece trazenje stringa)
// 2.search() metoda dozvoljava Regular Expressions.
// match() metoda nam vraca niz(pronadjenih elemenata).
// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u stringu na koji primenjujemo metodu.     Includes() metoda dozvoljava drugi argument sto zapravo predstavlja poziciju od koje ce se traziti dati string.
// startsWith() i endsWith() metode nam vracaju boolean u zavisnosti od toga da li dati string pocinje (zavrsava) argumentom metode.
// toString() pretvara broj u string. Ova metoda pretvara bilo koji tip podatka u string.
// toExponential() - nam vraca string broja, zaokruzen na onoliko decimala, koliki je argument metode.
// toFixed() - vraca string broja, koji ce biti zaokruzen na onoliko decimala koliki je zapravo argument.
// toPrecision() metoda vraca string broja, sa onoliko cifara koliki je argument funkcije.
// valueOf() metoda vraca vrednost neke promenljive. Ova metoda vazi za sve tipove podataka u JavaScriptu.
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// MATH METODE ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.min() nam vraca najmanji broj od poslatih. Argumenata moze imati neograniceno.
// Math.max() nam vraca najveci broj od poslatih. Argumenata moze imati neograniceno.
// Math.random() nam vraca broj izmedju 0(ukljucujuci) i 1(nije ukljucena).
// Math.log(x)    - vraca vrednost logaritma broja x za osonvu e
// Math.log2(x)   - vraca vrednost logaritma broja x za osonvu 2
// Math.log10(x)  - vraca vrednost logaritma broja x za osonvu 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// METODE ZA PRIKAZIVANJE DATUMA /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. toString()
// 2. toUTCString()
// 3. toDateString()
// 4. toISOString()
// 5. toTimeString()
// 6. toLocaleTimeString()
/////////////////////////// Get metode - Koristimo ih za dobijanje informacija iz Date objekta.
// getFullYear()
// getMonth()
// getDate()
// getDay()
// getHours()
// getMinutes()
// getSeconds()
// getMiliseconds()
// getTime()
/////////////////////////// Set metode - Dozvoljavaju menjanje nekih rednosti koda Date objekta.
// setFullYear()
// setMonth()
// setDate()
// setHours()
// setMinutes()
// setMiliseconds()
// setTime()
////////////////////////////
// push() metoda nam omogucava dodavanje vise od jednog elementa
// Za pretvaranje niza u string mozemo iskoristiti dve metode.
// 1. toString()
// 2. join()
// pop() metoda brise poslednji element iz niza.
// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.
// shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1. shift() metoda vraca izbrisani element. Kao kod pop() metode.
// concat() metoda se koristi za spajanje nizova. concat() metoda pravi novi niz.
//// splice() metoda je najmocnija alatka kod nizova u JavaScriptu. Omogucava nam promene u nizu na zeljenoj poziciji. Mozemo dodati (koliko hocemo) elemenata na nekom mestu. Mozemo izbrisati (koliko hocemo) elemenata na nekom mestu. splice() metoda uzima minimum 2 argumenta: Prvi argument predstavlja poziciju od koje ce se vrsiti neke promene. Drugi argument predstavlja broj elemenata koje brisemo iz niza. splice() metoda nam vraca niz sa izbrisanim elementima. ////
// sort() metoda sortira niz abecedno.
// reverse() metoda sortira niz obrnutim redosledom(u odnosu na prethodno stanje).
// Ako zelimo sortiranje (Z-A) moramo prvo izvrsiti sort(), pa onda reverse().
// sort() metoda sama ne vrsi ispravno sortiranje kada se radi o brojevima.
// keys() metoda vraca Array Iterator Object sa kljucevima(indeksima) nekog niza.
// entries() metoda vraca Array Iterator Object sa key\value parovima nekog niza.
// forEach() metoda poziva callback funkciju za svaki element niza.
// map() metoda kreira novi niz (iste duzine) sa logikom predstavljenom unutar callback funkcije unutar date metode.
// filter() metoda kreira novi niz sa onim elementima koji su prosli test. Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenjuje metoda, takodje moze biti prazan niz.
// reduce() metoda vraca jednu vrednost. Iteracija se vrsi kroz ceo niz.
// every() metoda proverava da li su svi elementi niza zadovoljili uslov.  (vraca boolean)
// some() metoda proverava da li bar jedan element niza zadovoljava uslov. (vraca boolean)
// find() metoda vraca vrednost prvog elementa koji je prosao test funkcije.
// findIndex() metoda vraca index prvog elementa koji je zadovoljio uslov.
// flat() metoda se koristi kada unutar niza imamo element koji je niz, i zelimo da sve podelemente izvucemo na nacin da oni predstavljaju elemente glavnog niza.
// JSON.stringify() pretvara nas objekat u JSON format pa JSON u string.
// 2. JSON.parse() Analizira se neki string i u slucaju mogucnosti pretvara u objekat (nama citljiv podatak)
// Object.freeze(obj) metoda čini taj objekat nepromenljivim.
// Object.seal(obj) čini objekat promenljivim s tim što nema mogućnost dodavanja(brisanja) novih svojstava i metoda.
// Object.keys(obj) vraća niz ključeva
// Object.entries(obj) vraća niz nizova.
// call() metoda za prvi argument ima objekat na koji se primenjuje, ostali argumenti metode koja se izvrsava.
// apply() metoda za prvi argument ima objekat na koji se primenjuje, drugi argument je niz gde smestamo argumente metode koja se izvrsava,
// bind() zahteva prethodno definisanje promenljive (funkcije) za odredjeni objekat, pa onda pozivanje funkcije sa eventualnim argumentima.
// Postoji built-in metoda u JavaScriptu koja proverava a li je neki broj Integer (ceo):
// Number.isInteger();

// const prvibroj = Number(prompt("Unesite prvi broj:"));
// const drugibroj = +prompt("Unesite drugi broj:");

// if (isNaN(prvibroj) || isNaN(drugibroj)) {
//   console.log("Unete vrednosti moraju biti brojevi");
// } else if (prvibroj === drugibroj) {
//   console.log("ispisi kvadrat beoja:" + prvibroj * drugibroj);
// } else if (prvibroj !== drugibroj);
// {
//   console.log("pravougaonik:" + prvibroj * drugibroj);
// }

// const x = Number(prompt("Unesi prvi broj:"));
// const y = +prompt("Unesi drugi broj:");

// if (isNaN(x) || isNaN(y)) {
//   console.log("unete vrednosti moraju biti beojevi");
// } else if (y === 0) {
//   console.log("deljenje nije moguce:");
// } else {
//   console.log("rezultat:" + x / y);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let broj = 50; broj <= 100; broj++) {
//   if (broj % 5 === 0) {
//     console.log(broj);
//   }
// }

// for (let broj = 6; broj <= 14; broj++) {
//   console.log(broj * 2);
// }

// let suma = 0;
// for (let i = 10; i < 21; i++) {
//   if (i % 2 !== 0) {
//     suma += i;
//   }
// }
// console.log(suma);

// let broj1 = +prompt("unesite prvi broj:");
// let broj2 = +prompt("unesite drugi broj:");

// if (isNaN(broj1) || isNaN(broj2)) {
//   console.log("unete vrednosti moraju biti brojevi");
// } else if (broj1 < broj2) {
//   while (broj1 <= broj2) {
//     console.log(broj1);
//     broj1++;
//   }
// } else if (broj2 < broj1) {
//   while (broj2 <= broj1) {
//     console.log(broj2);
//     broj2++;
//   }
// } else if (broj1 === broj2) {
//   console.log("brojevi moraju biti razliciti");
// }

// switch (new Date().getDay()) {
//     case 1:
//       console.log("Danas je ponedeljak");
//       break;
//     case 2:
//       console.log("Danas je utorak");
//       break;
//     case 3:
//       console.log("Danas je sreda");
//       break;
//     case 4:
//       console.log("Danas je cetvrtak");
//       break;
//     case 5:
//       console.log("Danas je petak");
//       break;
//     default:
//       console.log("Ugodno provedite vikend.");
//   }

// let broj = Number(prompt("unesite neki broj od [12,16)"));
// const brojZaPrikaz = broj;

// for (broj; broj >= 1; broj--) {
//   console.log(broj);
//   console.log(broj ** 2);
//   console.log(broj - 25);
// }

// const recenica = prompt("unesite neku recenicu:");
// const duzina = recenica.length;

// for (let i = 0; i < duzina; i++) {
//   if (recenica[i] === "a") {
//     console.log(5);
//   } else if (recenica[i] === "s") {
//     continue;
//   } else {
//     console.log(recenica[i]);
//   }
// }

// const recenica = prompt("unesite neki string:");
// let brojac = 0;
// let i = 0;
// while (i < recenica.length) {
//   if (recenica[i] === "m" || recenica[i] === "M") {
//     brojac++;
//   }
//   i++;
// }
// console.log(brojac);

// let brojac = 0;
// const recenica = prompt("unesite neki string");
// for (let i = 0; i < recenica.length; i++) {
//   if (isNaN(recenica[i])) {
//     continue;
//   } else {
//     brojac++;
//   }
// }
// // console.log(brojac);

// const recenica = prompt("unesite neku recenicu:");
// let novaRecenica = "";

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === "a" && recenica[i + 1] === "n") {
//     novaRecenica += "d";
//   } else if (recenica[i] === "a") {
//     novaRecenica += "t";
//   } else {
//     novaRecenica += recenica[i];
//   }
// }
// console.log(novaRecenica);

// const unesi = () => {
//   const broj = Number(prompt("unesi neki broj:"));
//   if (isNaN(broj)) {
//     return "uneta vredost mora biti broj" + broj;
//   } else if (broj === 0) {
//     return "broj je nula" + " " + broj;
//   } else if (broj > 0) {
//     return "broj je pozitivan" + " " + broj;
//   } else {
//     return "broj je negativan" + " " + broj;
//   }
// };
// console.log(unesi());

// const string = "Danas je bilo lepo vreme.";
// console.log(string.slice());

// const string = "Danas je bilo lepo vreme.";
// console.log(string.substr());

// const string = "Danas je bilo lepo vreme.";
// console.log(string.substring());

// const recenica = "Danas smo podelili sertifikate za HTML, CSS i JavaScript.";

// let recenica2 = recenica.replace("Danas", "Juce");
// console.log(recenica2);
// recenica2 = recenica.replace("s", "t");
// console.log(recenica2);
// recenica2 = recenica.replace(/s/g, "t");
// console.log(recenica2);
// recenica2 = recenica.replace(/s/i, "A");
// console.log(recenica2);
// recenica2 = recenica.replace(/s/gi, "A");
// console.log(recenica2);

// const recenica =
//   "Ovde je prilicno hladno, ali smo dobili obecanje da ce uskoro poceti grejanje. Ako se to ne desi, bice odlaganja casova.";

// // Ako se kod split() metode izostavi argument, dobicemo niz od jednog elementa.
// const niz = recenica.split();
// console.log(niz);

// const bezZnaka = (string, znak) => {
//   //   const noviString = string.replace(/znak/g , "");
//   let noviString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== znak) {
//       noviString += string[i];
//     }
//   }
//   return noviString;
// };

// console.log(bezZnaka("Madagaskar", "a"));

// const zadnjaslova = (recenica, n) => {
//   const poslednjaslova = recenica.slice(-n);
//   return poslednjaslova;
// };
// console.log(zadnjaslova());
