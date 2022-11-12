// KONDICIONALI //

// Ako je broj godina unet od strane korisnika >= 18, //
// neka se ispise poruka "punoletni ste" //
// u suprotnom "maloletni ste" //
// const godine = Number(prompt("Unesite bro godina=")); //
// if (godine >= 18) {
//   console.log("Punoletni ste.");
// } else if (godine < 12) {
//   console.log("vi ste decijeg doba");
// } else if (godine > 12 && godine <= 17) 
//     else () { 
//   console.log("Niste uneli broj godina.");
// }

// Switch naredba //
// Sintaksa : //
// switch (izraz) {
//     case x:
//         // Blok koda koji se izrsava u slucaju da je izraz = x
//         break
//   case y:
//     // Blok koda koji se izvrsava u slucaju da je izraz = y
//     break
//   case z:
//     // Blok koda koji se izvrsava u slucaju da je izraz = z
//     break
//   default:
//     // Blok koda koji se izvrsava u slucaju da izraz nije jednak ni x, ni y, ni z //
// }

const broj = +prompt("Unesite broj izmedju 12 i 15: ")
switch (broj) {
    case 12:
        console.log("Unet je broj 12.")
        break
        case 13:
            console.log("Unet je broj 13.")
            break
            case 14:
                console.log("Unet je broj 14.")
                case 15:
                    console.log("Unet je broj 15.")
                    default
}
