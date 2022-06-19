(function(){
    console.log("Hello world")
}());

const makanan = (jenis) => "jenis nya adalah " + jenis
let detailMakanan = makanan("kuah")
console.log(detailMakanan)


let keranjang = []
function menambahkankeranjang(namaProduk){
    keranjang = [namaProduk,...keranjang]
}

menambahkankeranjang("Jaket")
menambahkankeranjang("Kemeja")
menambahkankeranjang("Celana")
console.log(keranjang)


const name = "jamil"
console.log(name && "hamdi")