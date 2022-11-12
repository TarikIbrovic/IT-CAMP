document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf koji je unet naknadno.";

paragraf = document.getElementById("paragraf");

paragraf.style.backgroundColor = "red";

console.log("Ovo je nas prvi ispis u ");

// TIPOVI PODATAKA U JAVASKRIPTU //

// Za proveru tipa neke promenljive (varijable) se koristi typeof operator //

// PRIMITIVNI TIPOVI PODATAKA //

// 1. Stringovi - predstavlja niz karaktera koji je zapisan unutar navodnika //
// (obicnih ili duplih.) //

console.log("Ovo je neki string napisan unutar duplih navodnika");
console.log(typeof "Ovo je neki string napisan unutar duplih navodnika");

// 2. Number - predstavlja broj, koji moze biti zapisan sa ili bez decimalnog zareza.
// Ne pravi se razlika izmedju celih, realnih i kompleksnih brojeva.

console.log(14);
console.log(typeof 14);

// 3. BigInt - se koristi za skladistenje brojeva cija granica prelazi granicu //
// number tipa podatka.
