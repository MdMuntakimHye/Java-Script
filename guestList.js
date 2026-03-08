const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];
// let admitted = "Admitted: ";
// let refused = "Refused: ";

// for(const person of people){
//     if(person === "Phil" || person === "Lola"){
//         refused = refused + `${person}, `;
//     } else {
//         admitted = admitted + `${person}, `;
//     }
// }

const admitted = people.filter(p => p==="Phil" || p=== "Lola");
const refused = people.filter(p => p !== "Phil" && p !== "Lola");
console.log(admitted.join(","));
console.log(refused.join(","));