// variable sebagai penampung data
// penulisan variable - camelCase atau snake_case
// keyword var, let, const
// data variable string, number, boolean, null, undefined, object, array

// variable deklarasi
var name;

// variable iniisialisasi
var nama = "adi";
console.log(nama);

// keyword var : redeclare, reassign
var kota = "jakarta";
console.log(kota);
var kota = "bandung"; // redeclare
console.log(kota);
kota = "semarang"; // reassign
console.log(kota);

// keyword let : non-redeclare, reassign
let a = "apel";
// let a = "jeruk" // non-redeclare
a = "semangka"; // reassign
console.log(a);

// keyword const : non-redeclare, non-reassign
const PI = 3.14;

// Tipe data: KUMPULAN MODEL TIPE DATA
// primitive
let country = "indonesia"; //string
let age = 20; //number
let isMarried = false; //boolean
const data = null; //null
const dataUndefined = undefined; //undefined

// Non-primitive

const fruit = ["apel", "jeruk", "semangka"]; //array
const job = {
  name: "programmer",
  salary: 1000000,
}; //object
