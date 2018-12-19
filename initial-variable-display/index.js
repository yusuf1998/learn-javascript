const names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];

// Display ALl Names
console.log(`Display All Names:`);
let textName = "";
for (name in names) {
  textName += names[name];
  console.log(names[name]);
}

// Display Only Mr.
console.log(`Display Only Mr.`);
let nameMr = names.filter(names => names.includes("Mr."));
console.log(nameMr);


// Add gender 
console.log(`Add gender after name`);
names.forEach(function (elementName) {
  let textName = "";
  if (elementName.includes("Mr.")) {
    textName += elementName + " (Male)";
  } else {
    textName += elementName + " (Female)";
  }
  console.log(textName);
});


// Merge Array

const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];
const mergeName = names1.concat(names2);

console.log(`Merge Array`);
console.log(names1);
console.log(names2);
console.log(`Merge Array Result : ${mergeName}`)

// Modify Names and Remove All String
const allNames = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];
console.log(`Before : `)
console.log(allNames);
console.log(`After : `)
names.forEach(function (elementName) {
  let fixName = "";
  if (typeof (elementName) == "string")
    fixName += elementName

  console.log(fixName);
});