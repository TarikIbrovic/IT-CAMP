const recenica = "Danas smo podelili sertifikate za";

let recenica2 = recenica.replace("Danas", "Juce");
console.log(recenica2);
recenica2 = recenica.replace("s", "t");
console.log(recenica2);

recenica2 = recenica.replace(/s/g, "t");
console.log(recenica2);

// 1. i (insensitive)

recenica2 = recenica.replace(/s/i, "A");
console.log(recenica2);

recenica2 = recenica.replace(/s/gi, "A");
console.log(recenica2);

console.log(recenica.toLocaleUpperCase());

console.log(recenica.toLocaleLowerCase());
console.log(recenica);

let a = "Danas je 16. cas JavaScripta";
let b = "Bice JavaScripta preko 50 casova.";
let c = a + " " + b;
console.log(c);

c = a.concat(b);
console.log(c);

c = a.concat(" ", b, "\nNakon toga cemo raditi react");
console.log(c);

// Napomena. //
// Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti). //

// Napraviti funkciju koja kod stringa koji predstavlja
