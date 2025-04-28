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

// soal 7
// Write a code to swap the case of each character from string

let input1 = "The QuiCk BrOwN Fox";
let output = input1
  .split("")
  .map((char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  )
  .join("");

console.log(output);

// soal 8
// Write a code to find the largest of two given integers

let angka1: number = 27;
let angka2: number = 42;

if (angka1 > angka2) {
  console.log(`${angka1}`);
} else {
  console.log(`${angka2}`);
}

// soal 9
// Write a conditional statement to sort three numbers
let num1: number = 188;
let num2: number = 25;
let num3: number = 35;

if (num1 > num2) {
  [num1, num2] = [num2, num1];
}
if (num1 > num3) {
  [num1, num3] = [num3, num1];
}
if (num2 > num3) {
  [num2, num3] = [num3, num2];
}

console.log(num1, num2, num3);

// soal 10
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.

let input: string | number | boolean = "hello";
if (typeof input === "string") {
  console.log(1);
} else if (typeof input === "number") {
  console.log(2);
} else {
  console.log(3);
}

// soal 11
// Write a code to change every letter a into * from a string of input

let Sentence: string = "An apple a day keeps the doctor away";
let Output: string = Sentence.replace(/a/gi, "*");
console.log(Output);
