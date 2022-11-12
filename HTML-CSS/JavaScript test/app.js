// 1.	(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

let broj = +prompt("unesite realan broj");
if (isNaN(broj)) {
  console.log("podatak mora biti broj");
} else {
  console.log(broj * broj);
}
console.log(broj);
