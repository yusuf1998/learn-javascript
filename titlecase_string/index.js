function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    var result = str.join(' ');
    alert(result);
}

var str = prompt("masukkan kata yang ingin di titlecase");
var cond = confirm(`Proses ?`);
if (cond == true) {
    titleCase(str);
} else {
    alert('Dibatalkan');
}