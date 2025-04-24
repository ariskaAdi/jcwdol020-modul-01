// soal slide 3
// soal 1

let angka: number = 9;
for (let i: number = 1; i < angka; i++) {
  console.log(`${angka} x ${i}`);
}

// soal 2

let kata: string = "aku";
let kebalikan = kata.split("").reverse().join("");
if (kata === kebalikan) {
  console.log("palindrome");
} else {
  console.log("bukan palindrome");
}

// soal 3
let misalJarak: number = 1000;
if (misalJarak >= 1000) {
  console.log(`${misalJarak / 1000} km`);
}

// soal 4
let hargaBarang: number = 10000;
console.log(
  hargaBarang.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  })
);
