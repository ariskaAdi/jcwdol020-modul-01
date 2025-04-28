// 1. Count Vowels in a String
let kata01: string = "The QuiCk BrOwN Fox";
let vowels: string = "aiueoAIUEO";
let countKata: number = kata01
  .split("")
  .filter((i) => vowels.includes(i)).length;
console.log(countKata);

// Reverse a String
let input01: string = "hello";
let input02: string = input01.split("").reverse().join("");
console.log(input02);

// 3. Remove All Spaces
let soal3: string = "An apple a day";
let tanpaSpasi: string = soal3
  .split("")
  .filter((i) => i !== " ")
  .join("");
console.log(tanpaSpasi);

// 4. Check for Palindrome
let soal4: string = "madam";
let kebalikan04: string = soal4.split("").reverse().join("");
if (soal4 === kebalikan04) {
  console.log("palindrom");
} else {
  console.log("bukan palindrom");
}

// 5. Find the Longest Word in a String
let soal5: string = "The quick brown fox";
let words = soal5.split(" "); // Memecah string menjadi array kata
console.log(words);
let longestWord = words.reduce(
  (longest, current) => (current.length > longest.length ? current : longest),
  ""
);
console.log(longestWord); // Output: "quick"

// 6. Capitalize First Letter of Each Word
let soal6: string = "the quick brown fox";
let capitalized = soal6
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalized); // Output: "The Quick Brown Fox"

// 7. Check if a String Contains Only Digits
let soal7: number | string | boolean = 1;
if (typeof soal7 === "number") {
  console.log(true);
} else {
  console.log(false);
}

// 8. Count Occurrences of a Character
let soal08: string = "hello wolrd";
let kata08: string = "o";
let result08: number = soal08
  .split("")
  .filter((i) => kata08.includes(i)).length;
console.log(result08);

// 9. Remove Duplicates from a String
let soal9: string = "aabbcc";
let tanpaDuplikat: string = [...new Set(soal9)].join("");
console.log(tanpaDuplikat);

// 10. Check if Two Strings are Anagrams
let soal10a: string = "listen";
let soal10b: string = "silent";

let isAnagram =
  soal10a.split("").sort().join("") === soal10b.split("").sort().join("");
console.log(isAnagram); // Output: true
