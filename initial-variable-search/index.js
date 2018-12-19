const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
];

function searchName(str) {
    let result = names.filter(
        names => names.includes(str)
    );
    return result;
}

let searchNameStr = prompt("Cari nama");
var condition = confirm(`Proses ?`);
if (condition == true) {
    let resultName = searchName(searchNameStr);
    if (resultName == "")
        alert(`Maaf data kosong`)
    else
        alert(resultName);
} else {
    alert('Dibatalkan');
}