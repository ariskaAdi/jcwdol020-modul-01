// boolean hanya memiliki 2 nilai yaitu true dan false
let benar: boolean = true;
let salah: boolean = false;

// comparison operator ==, !=, ===, !== , >, <, >=, <=
let valueA: string | number = 10;
let valueB: string | number = 12;
console.log(valueA > valueB);
console.log(valueA == "10"); // fokus pencocokan data saja
console.log(valueA === "10"); // fokus pencocokan data dan tipe data

// logical operator && and, || or, ! not

console.log(valueA === 10 && valueB < 15); // jika salah satu nilai false maka hasil akan false

console.log(valueA === 10 || valueB < 10); // jika salah satun true maka hasil akan true

console.log(!true); // negasi

// boolean berdasekan data

// TRUTHY
console.log(Boolean("abc"));
// FALSY
console.log(Boolean(""));
