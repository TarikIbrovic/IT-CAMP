// const rec = "abcd";
// let novaRec = "";
// for (let i = 0; i < rec.length; i++) {
//   if (i === 0) {
//     novaRec += rec[i + 1];
//   } else if (i === 1) {
//     novaRec += rec[i - 1];
//   } else if (i === 2) {
//     novaRec += rec[i + 1];
//   } else if (i === 3) {
//     novaRec += rec[i - 1];
//   }
// }

// console.log(novaRec);

// function menjanje(recenica) {
//   let novaRecenica = "";
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica.length !== 0 && i === recenica.length - 1) {
//       novaRecenica += recenica[i];
//     } else if (i % 2 === 0) {
//       novaRecenica += recenica[i + 1];
//     } else if (i % 2 !== 0) {
//       novaRecenica += recenica[i - 1];
//     }
//   }
//   return novaRecenica;
// }

// console.log(menjanje("danas radimo nesto"));

const drugi = (recenica1, recenica2) => {
  const duzina1 = recenica1.length;
  const duzina2 = recenica2.length;
  //   if (duzina1 > duzina2) {
  //     duzina = duzina1;
  //   } else {
  //     duzina = duzina2;
  //   }
  const duzina = duzina1 > duzina2 ? duzina1 : duzina2;
  let recenica3 = "";
  for (let i = 0; i < duzina.length; i++) {
    if (recenica1[i] !== undefined && recenica2[i] !== undefined) {
      recenica3 += recenica1[i] + recenica2[i];
    } else if (recenica1[i] === undefined) {
      recenica3 += recenica2[i];
    } else if (recenica2[i] === undefined) {
      recenica3 += recenica1[i];
    }
  }
  return recenica3;
};

console.log(drugi("pera", "sladoled"));

const protectEmail = (email) => {
  for (let i = 0; i < email.length; i++) {
    if (
      email[i] === "." ||
      email[i] === "_" ||
      email[i] === "1" ||
      email[i] === "2" ||
      email[i] === "3" ||
      email[i] === "4" ||
      email[i] === "5" ||
      email[i] === "6" ||
      email[i] === "7" ||
      email[i] === "8" ||
      email[i] === "9"
    ) {
      index = i;
      break;
    }
  }
  const indexAt = email.indexOf("@");
  const prviDeo = email.slice(0, index);
  const drugiDeo = email.slice(indexAt);
  const noviEmail = prviDeo.concat(drugiDeo);
  return noviEmail;
};

console.log(protectEmail(""));
