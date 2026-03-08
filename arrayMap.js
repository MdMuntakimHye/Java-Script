const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}

// function double(number) {
//    return number * 2;
// }
// const numbers = [5, 2, 7, 6];
// const doubled = numbers.map(double);
// console.log(doubled);
const numbers = [5, 2, 7, 6];
const doubled = numbers.map((number) => {return number *2});
console.log(`the doubled numbers are ${doubled}`);

// function uppercase(city) {
//     return city.toUpperCase();
// }
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const upcase = cities.map((city) => {return city.toUpperCase()});
console.log(`converted uppercase cities are ${upcase}`);


//you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter()
//Rule of thumb

//Use map() → “I want to change every item”

//Use filter() → “I want to keep only some items”

// function isLong(city) {
//     return city.length > 8;
// }
const cities2 = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities2.filter((city) => {return city.length > 8});
console.log(`Cities with more than 8 letters are ${longer}`);

//string to array
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const cities3 = data.split(",");
console.log(cities3);
const name = "rashik";
const letters = name.split("");
console.log(letters);
console.log(cities3.length);
console.log(cities3.length -1);
const animals = [
  "Tiger",
  "Elephant",
  "Kangaroo",
  "Penguin",
  "Dolphin",
  "Giraffe",
  "Wolf",
  "Panda"
];
//const animalsName = animals.join(",");
//we can specify different separators when using join
const animalsNameWithPlus = animals.join("*");
console.log(animalsNameWithPlus);
//we can also use toString() method . but it comes with a caveat. With join() you can specify different separators, whereas toString() always uses a comma.
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
//dogNames.toString(); // Rocket,Flash,Bella,Slugger
console.log(dogNames.toString());

let total = 0;
const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

for (const product of products) {
  const subArray = product.split(":");
  const name = subArray[0];
  const price = Number(subArray[1]);
 total += price;
  const itemText = `${name} — $${price}`;

  //const listItem = document.createElement("li");
  //listItem.textContent = itemText;
  //list.appendChild(listItem);
  console.log(subArray);
}

//totalBox.textContent = `Total: $${total.toFixed(2)}`;
