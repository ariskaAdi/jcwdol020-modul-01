// string
let nameTengah: string = "adi";
let alamat: string = "malang";

// penggabungan string menggunakan +
let dataPribadi: string = nameTengah + " " + alamat;
console.log(dataPribadi);

// menggunakan template literal
dataPribadi = `${nameTengah} ${alamat}`;
console.log(dataPribadi);

// typeof
console.log(typeof nameTengah);

// fungsi bawaan string
let greeteing: string = "hello world";
console.log(greeteing.length);

// toUpperCase, toLowerCase
console.log(greeteing.toUpperCase());
console.log(greeteing.toLowerCase());

//includes, startsWith, endsWith -> mengecek kata dalam sebuah kalimat
console.log(greeteing.includes("hello"));
console.log(greeteing.startsWith("hello"));
console.log(greeteing.endsWith("world"));

//split -> memecah string menjadi array
console.log(greeteing.split(" "));

//replace -> mengganti kata dalam kalimat
console.log(greeteing.replace("hello", "hi"));
