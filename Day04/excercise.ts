// soal slide 3
// soal 1

let angka: number = 4;
let maksAngka: number = 10;

for (let i: number = 1; i <= maksAngka; i++) {
  console.log(`${angka} x ${i}`);
}

// soal 2

let kata: string = "madam";
let kebalikan = kata.split("").reverse().join("");
if (kata === kebalikan) {
  console.log("palindrome");
} else {
  console.log("bukan palindrome");
}

// soal 3
let misalJarak: number = 5400;
if (misalJarak >= 1000) {
  console.log(`${misalJarak / 1000} km`);
} else {
  console.log(`${misalJarak} meter`);
}

// soal 4
let hargaBarang: number = 10000;
console.log(
  hargaBarang.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  })
);

// soal 5

let kataPertama: string = "hello";
let searchString: string = "ell";
let kataKedua: string = "world";
let hasilnya: string = "";

if (kataPertama.includes(searchString)) {
  let hasil: string = kataPertama.replace(searchString, "");
  hasilnya = `${hasil} ${kataKedua}`;
} else {
  console.log(`${kataPertama} ${""} ${kataKedua}`);
}

console.log(hasilnya);

// soal 6

let firstWord: string = "hello";
let secondWord: string = "world";
const sentence = `${firstWord} ${secondWord}`;

console.log(
  `${sentence
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ")}`
);
