function luasPersegi(sisi) {
    var result = (sisi ** 2);
    alert(`Nilai Luas Persegi = ${result}`);

}

function luasSegitiga(alas, tinggi) {
    var result = (alas * tinggi) / 2;
    alert(`Nilai Luas Segitiga = ${result}`);
}

function luasLingkaran(jarijari) {
    var pi = Math.PI;
    var pi = pi.toFixed(2);
    var result = pi * (jarijari ** 2);

    alert(`Nilai Luas Lingkaran = ${result}`);
}

function luasPersegiPanjang(panjang, lebar) {
    var result = (panjang * lebar);

    alert(`Nilai Luas Persegi Panjang = ${result}`);
}

var condRumus = prompt("Ingin Rumus Luas Apa ? hint : 1 => persegi, 2 => segitiga, 3 => lingkaran, 4 => Persegi Panjang");
if (condRumus === "1") { // untuk rumus persegi
    var sisi = prompt("Masukkan nilai sisi");
    var cond = confirm(`Proses ?`);
    if (cond == true) {
        luasPersegi(sisi);
    } else {
        alert('Batal');
    }
} else if (condRumus === "2") { // untuk rumus segitiga
    var alas = prompt("Masukkan nilai alas");
    var tinggi = prompt("Masukkan nilai tinggi");
    var cond = confirm(`Proses ?`);
    if (cond == true) {
        luasSegitiga(alas, tinggi);
    } else {
        alert('Batal');
    }
} else if (condRumus === "3") {
    var jarijari = prompt("Masukkan nilai jari-jari");
    var cond = confirm(`Proses ?`);
    if (cond == true) {
        luasLingkaran(jarijari);
    } else {
        alert('Batal');
    }
} else if (condRumus === "4") {
    var panjang = prompt("Masukkan nilai panjang");
    var lebar = prompt("Masukkan nilai lebar");
    var cond = confirm(`Proses ?`);
    if (cond == true) {
        luasPersegiPanjang(panjang, lebar);
    } else {
        alert('Batal');
    }
}