// var x = 15;
// console.log(x);

// // 2. let - Definisanje promenljive za koju postoji mogucnost promene vrednosti.
// let y; // deklarisanje promenljive y (obezbedjivanje lokacijske memorije za promenljivu y)
// y = 14; // inicijalizacija promenljive y (dodela vrednosti vec deklarisanoj promenljivoj y)
// // let y = 14; - takodje dozvoljeno
// console.log(y);

// let a, b, c; // korektan nacin deklarisanja promenljivih

// // Redeklarisanje promenljive definisane putem let keyword nije dozvoljeno
// // ako se radi o istom prostoru.
// // let y;

// // Reinicijalizacija promenljive definisane putem let keyword je dozvoljeno
// // u bilo kom prostoru.
// y = 12;
// console.log(y);

// // Promenljive koje su definisane putem let ili const keyword nam obezbedjuju
// // Block Scope.
// {
//   //   console.log(y); - prepoznaje se promenljiva iz Global Scope.
//   //   Redeklaracija promenljive definisane putem let, u drugom prostoru je dozvoljena.
//   let y = 19;
//   console.log(y);
// }
// //  Ispisuje se 12, odnosno poslednje dodeljena vrednost unutar Global Scope.
// console.log(y);

// const z = 26;
// console.log(z);

// let x = 5;
// x++;
// console.log(x);

// x %= 2;
// console.log(x);

// let y = 11;
// console.log(++y);

// y += 5;
// console.log(y);

// let prvideo = "aaaaaa";
// let drugideo = "bbbbbb";
// console.log(prvideo + " " + drugideo);
// console.log(Boolean(prvideo + " " + drugideo));

// let a = 5;
// let b = 10;
// let c = a;

// console.log(a == c);
// console.log(a != b);
// console.log(a !== b);
// console.log(a === b);
// console.log(a < b);

// let isSunny = false;

// isSunny
//   ? console.log("Vreme je suncano." + "Ponesite naocare!")
//   : console.log("Vreme je kisovito." + "Ponesite kisobran!");

// let prom1 = 4;
// let prom2 = 19;
// let prom3 = -3;
// prom1 > 0 && prom2 > 0 && prom3 > 0
//   ? console.log("sve tri promenljive su pozitivni brojevi")
//   : console.log("nisu sve tri promenljive pozitivni brojevi");

// prom1 > 0 || prom2 > 0 || prom3 > 0
//   ? console.log("Nasli smo promenljivu koja je veca od nule.")
//   : console.log("Nema promenljive koja je veca od nule ili jednaka nuli.");

// isSunny = false;
// console.log(typeof isSunny);

// const obj = {
//   ime: "Aysuasyd",
//   prezime: "Bhdahsdahs",
// };

// console.log(obj instanceof Object);

// const ime = prompt("unesite vase ime: ");
// console.log(ime);

// const godine = prompt("unisite vasu starost: ");
// console.log(godine);
// console.log(typeof godine);

// const brgodina = Number(godine);
// // console.log(brgodina);
// // console.log(typeof brgodina);

// const godine = Number(prompt("unesite broj godina"));
// if (godine >= 18) {
//   console.log("punoletni ste");
// } else if (godine < 18 && godine > 0) {
//   console.log("maloletni ste");
// } else if (godine < 0) {
//   console.log("broj godina ne moze biti negativan");
// } else {
//   console.log("niste uneli broj godina");
// }

// const broj = +prompt("Unesite broj izmedju 12 i 15: ");
// switch (broj) {
//   case 12:
//     console.log("Unet je broj 12.");
//     break;
//   case 13:
//     console.log("Unet je broj 13.");
//     break;
//   case 14:
//     console.log("Unet je broj 14.");
//     break;
//   case 15:
//     console.log("Unet je broj 15.");
//     break;
//   default:
//     console.log("Nije unet trazeni broj.");
// }

// const x = Number(prompt("Unesite prvi broj: "));
// const y = +prompt("Unesite drugi broj: ");

// if (isNaN(x) || isNaN(y)) {
//   console.log("Vrednosti moraju biti brojevi.");
// } else if (y === 0) {
//   console.log("Deljenje nulom nije moguce.");
// } else {
//   console.log("Kolicnik unetih brojeva je: " + x / y);
// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i < 11; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

for (let a = 6; a <= 14; a++) {
  console.log(a * 2);
}
