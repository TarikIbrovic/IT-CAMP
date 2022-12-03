const isecak = "Recenica za primenu slice metode jednim argumentom.".slice(12);
console.log(isecak);

// var a = 10
// let b = 20
// const c = 30
// d = 5 //

// HOISTING //
// Hoisting predstavlja deklarisanje promenljivih pre same dodele vrednosti (u pozadini). //
// Prilikom citanja koda se "izvlaci" deklaracija na vrhu. //

prom1 = 23;
console.log(prom1);

// var prom1; mozemo izvrsiti naknadnu deklaraciju vec koriscene promenljive preko var keyword //

// let prom1; kasnije deklarisanje preko let keyword nije moguce. //

// const prom1 kasnije deklarisanje preko const keyword nije moguce. //

// Postoje 3 metode za ekstraktovanje (uzimanje) jednog karaktera nekog stringa: //
// 1. charAt(index) - vraca nam karakter nekog stringa za poslatim indeksom //
// 2. charCodeAt(index) - vraca nam kod karatktera nekog stringa za poslatim indeksom. //
// 3. string[index] - vrlo slicno charAt metodi (sa jednog razlikom) //

const novaRecenica = "adasdasd";
const char1 = novaRecenica.charAt(3);
const char11 = novaRecenica.charAt(46); // rezultat ce biti "" //
console.log(char1);

const char2 = novaRecenica.charCodeAt(3);
console.log(char2);

const cha3 = novaRecenica[3];
const cha33 = novaRecenica[32]; // rezultat ce biti undefirnd //
console.log(char3);

console.log(char11);
console.log(char33);
