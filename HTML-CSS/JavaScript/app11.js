// const prvaIPoslednja = function (recenica) {
//   const pozicijaPrvogRazmaka = recenica.indexOf(" ");
//   const prvaRec = recenica.slice(0, pozicijaPrvogRazmaka);
//   const pozicijaPoslednjegRazmaka = recenica.lastIndexOf(" ");
//   const poslednjaRec = recenica.slice(pozicijaPoslednjegRazmaka);
//   const recenica2 = prvaRec.concat(" ", poslednjaRec);
//   return recenica2;
// };

// console.log(prvaIPoslednja("hocemo prvu i poslednju rec."));

// const stringoVI = function (string, pocetak, duzina) {
//   const noviString = string.substr(pocetak, duzina);
//   return noviString;
// };

// console.log(stringoVI("recenica kojoj cemo uzeti nekoliko karaktera", 5, 9));

// const znakoVI = function (string, znak) {
//   noviString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== znak) {
//       noviString += string[i];
//     }
//   }
//   return noviString;
// };

// console.log(znakoVI("madagaskar", "a"));

const task = (recenica, n) => {
  const poslednjihN = recenica.slice(-n);
  return poslednjihN;
};

console.log(task("danas radimo nesto", 5));
