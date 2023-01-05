// Niz predstavlja strukturu podataka koja moze sadrzati vise od jedne vrednosti. //

//Nizovi u JavaScriptu su heterogeni (mogu sadrzati elemente razlicitih tipova). //

const niz = [];
console.log(niz);

// Dozvoljeno je, cesto i prakticnije pisati svaki element niza u novom redu. //

// Mozemo prvo kreirati prazan niz pa nakon toga dodavati ruvno elemente. //

const automobili = [];
automobili[0] = automobili[1] = automobili[5] = console.log(automobili);

// Istu sintaksu mozemo iskoristiti za promenu vrednosti elementa. //

automobili[0] = console.log(automobili);

// Niz mozemo definisati preko new keyword : //
const niz2 = new Array();
console.log(niz2);

// Radi jednostavnosti, citljivosti koda i brzine izvrsavanja je bolje koristiti [] nego new. //

const niz3 = [40];
console.log(niz3);
// new Array ce napraviti niz od 40 praznih mesta. //
const niz4 = new Array(40);
console.log(niz4);

// Pristupanje elementa se vrsi preko indeksa: //
console.log(automobili[1]);

// Postoje dva nacina za ispitivanje da li je neka promenljiva niz: //
console.log(typeof automobili);

// 1. Array.isArray(potencijalnoNiz)
console.log(Array.isArray(automobili));
console.log(Array.isArray("neki string"));

// 2. potencijalnoNiz instanceof Array //
console.log(automobili instanceof Array);
console.log(25 instanceof Array);

// Elementi niza mogu biti bilo koje vrednosti: //
// Date, Array, Boolean, Function, Number.... //

// Za proveru duzine niza koristimo length: //
console.log(automobili.length);

// Za dodavanje elementa na kraju niza se koristi push() metoda. //

const dani = ["ponedeljak", "utorak"];
dani.push("sreda");
console.log(dani);
// push() metoda nam omogucava dodavanje vise od jednog elementana na kraju niza. //
dani.push("cetvrtak", "peatak");
console.log(dani);
// dani.push(...) vraca novu duzinu niza. //

// da li neko imda ideju kako da dodamo element na poslednjem mestu u nizu ako  ne znamo duzinu niza i  ako ne koristimo push() metodu? //

dani[dani.lenght] = "subota";
console.log(dani);

// Nizovi su zapravo vrsta objekta koji imaju brojevne indekse. //

// Za pretvaranje niza u string mozemo koristiti 2 metode: //
// 1. toString()
// 2. join()

const daniStr = dani.toString();
const daniniz = daniStr.split();

// pop() brise poslednji element iz niza. //
dani.pop();
console.log(dani);
