// array
// tipe data yang berisi sekumpilan data
// setiap data memiliki alamat index dimulai dari 0
// mempermudah pengelolaan data

let gadgetList: string[] = ["headphone", "laptop", "TWS", "pen"];
gadgetList[1] = "macbook";
console.log(gadgetList[2]);
// mengubah isi dari array berdasrkan index
// dari data array menjadi data array berbentuk list

for (let i: number = 0; i < gadgetList.length; i++) {
  console.log(`${i + 1}. ${gadgetList[i]}`);
}

// array.push() -> menambah data baru pada akhir array
// array.pop() -> menghapus data terakhir pada array
// array.unshift() -> menambah data pada awal array
// array.shift() -> menghapus data awal array
// array.splice() -> mengahapus/menyisipkan/memperbarui pada index tertentu
// menghapus array.splice(pilihan index, jumlah yang dihapus)
// menyisipkan array.splice(pilihan index, jumlah yang dipilih, "data baru
// memperbarui data array.splice(pilihan index, jumlah yang dihapus, "data baru
// array.indexOf("data") -> mencari index suatu data
// penggabungan 2 data array
// array.concat(data1, data 2)
