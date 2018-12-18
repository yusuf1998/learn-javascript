function titleCase(char) {
    char = char.toLowerCase();
    char = char.split(' ');
    for (var i = 0; i < char.length; i++) {
        char[i] = char[i].charAt(0).toUpperCase() + char[i].slice(1);
    }
    var result = char.join(' ');
    alert(result);
}

var char = prompt("Masukkan kata yang ingin di titlecase");
var cond = confirm(`Proses ?`);
if (cond == true) {
    titleCase(char);
} else {
    alert('Dibatalkan');
}