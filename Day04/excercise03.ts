// Soal 1: Count Consonants in a String
let soal1: string = "The quick brown fox";
let vocal: string = "aiueoAIUEO";
let countSoal01: number = soal1
  .split("")
  .filter((i) => !vocal.includes(i)).length;
console.log(countSoal01);

// Soal 2: Check if a String is an Email
let soal02: string = "wow@gmail.com";
if (soal02.includes("@") && soal02.includes(".")) {
  console.log("email valid");
} else {
  console.log("email invalid");
}

// Soal 3: Convert String to Title Case
let soal03: string = "the quick brown fox";
let capitalized03: string = soal03
  .split(" ")
  .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
  .join(" ");
console.log(capitalized03);

// Soal 4: Find the Shortest Word in a String
let soal04: string = "The quick brown fox jumps";
let word04 = soal04.split(" ");
console.log(word04);
let kataPendek = word04.reduce((short, current) =>
  short.length > current.length ? current : short
);
console.log(kataPendek);

// Soal 5: Find the Sum of Digits in a String
let soal05: string = "abc123xyz";
let sumOfDigits = soal05
  .split("")
  .filter((char) => /\d/.test(char)) // Memfilter digit
  .reduce((sum, digit) => sum + parseInt(digit), 0); // Menjumlahkan digit
console.log(sumOfDigits); // Output: 6
