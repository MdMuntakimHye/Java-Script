const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];
myArray.pop();
myArray.push("Goku","Jinwoo");
for(let i=0;i<myArray.length ;i++){
    myArray[i] = `${myArray[i]}(${i}) `;
}
const myString = myArray.join("-");
console.log(myString);
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];
const indexOfEagles = birds.indexOf("Eagles");
console.log(indexOfEagles);
birds.splice(indexOfEagles,1);
console.log(birds);
function birdsWithE(birds) {
    return birds.startsWith("E");
}

const eBirds = birds.filter(birdsWithE);
//console.log(startsWithE);
const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

for (const product of products){
  const subArray = product.split(":");
  console.log(subArray);
}
const myArray3 = ["cats", "dogs", "chickens"];

myArray3[0] = "horses";
myArray3[1] = "pigs";

myArray3.unshift("crocodiles");
console.log(myArray3);