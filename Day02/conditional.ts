// conditional statement

let namaku: string = "adi";
let umur: number = 19;

let pesan: string = "";
if (umur >= 20) {
  pesan = `hallo ${namaku}, kamu sudah dewasa`;
} else {
  pesan = `hallo ${namaku}, kamu belum dewasa`;
}

console.log(pesan);

// ternary operator

let umurku: number = 19;
let verified = umurku > 17 ? "berhasil" : "gagal";
console.log(verified);

// switch case

let job: string = "programmer";

switch (job) {
  case "programmer": // pengecekan apakah job sama dengan programmer
    console.log("hallo programmer"); //task jika job sama dengan programmer
    break; // keluar dari switch jika tidak ada break maka semua case akan dijalankan
  case "designer":
    console.log("hallo designer");
    break;
  default:
    console.log("hallo guest");
}

// excercise 02

let usia: number = 3;

if (usia < 5) {
  console.log("tiket gratis");
} else if (usia >= 5 && usia < 17) {
  console.log("tiket 20.000");
} else if (usia >= 17 && usia < 60) {
  console.log("tiket 50.000");
} else {
  console.log("tiket gratis");
}
// soal 2
const ketentuanEmail: string = "@gmail.com";
let dataEmail: string = "ariska@gmail.com";
let resultEmail: string = "";

// menggunakan if else

if (dataEmail.includes(ketentuanEmail)) {
  resultEmail = "email valid";
} else {
  resultEmail = "email invalid";
}
console.log(resultEmail);

// menggunakan switch case

switch (true) {
  case dataEmail.includes(ketentuanEmail):
    resultEmail = "email valid";
    break;
  default:
    resultEmail = "email invalid";
}

console.log(resultEmail);
