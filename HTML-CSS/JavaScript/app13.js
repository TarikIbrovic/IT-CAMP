// const NZS = (br1, br2) => {
//   const veci = Math.max(br1, br2);
//   let i = veci;
//   let nzs;
//   while (true) {
//     if (i % br1 === 0 && i % br2 === 0) {
//         nzs = i
//         break
//     }
//     i++
//   }

// };

// Date Objects //

// Kreiranje datuma //

// Kreiranje se vrsi preko new keyword //

// Kreiranje datuma mozemo izvrsiti na 4 nacina : //

// 1. new Date() //

const trenutnoVreme = new Date();
console.log(trenutnoVreme);

// 2. new Date(year, month, day, hours, minutes. seconds, miliseconds)

// Meseci se racunaju od 0 do 11. //
// Ako pravimo datume na ovaj nacin, moramo imati min 2 argumenta, a max 7. //
const datumRodjenja = new Date();
console.log(datumRodjenja);
const datum = new Date();
console.log(datum);

// 3. Slanjem jednog argumenta unutar Date(). //
datum = new Date();
console.log(datum);

// 4. Slanjem stringa u Date() kao argument. Sting ce biti parse_ovan i dobicemo datum na osnovu toga. //

datum = new Date();
console.log(datum);

// Jedna i dve cifre godine ce biti interpretirane kao: //
// 19xx ili 190x. //

datum = new Date();
console.log(datum);
