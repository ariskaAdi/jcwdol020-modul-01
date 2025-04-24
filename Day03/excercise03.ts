// soal 1
// ganjil genap
let nomor: number = 10;

if (nomor % 2 == 0) {
  console.log("genap");
} else {
  console.log("ganjil");
}

// soal 2
// bilangan prima

let bilangan: number = 5;
let result2: string = "";

if (bilangan % 2 == 0) {
  result2 = "bukan bilangan prima";
} else {
  result2 = "bilangan prima";
}

console.log(result2);

// soal 3
// penjumlahan dari perulaangan bilangan
let result3: number = 0;
let inputAngkaBaru: number = 3;

for (let i: number = 1; i <= inputAngkaBaru; i++) {
  result3 += i;
}
console.log(result3);

// soal 4

let contohAngka: number = 1;
let inputAngka: number = 6;

for (let i = contohAngka; i <= inputAngka; i++) {
  contohAngka *= i;
}

console.log(contohAngka);
