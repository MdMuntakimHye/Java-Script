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
const admitted = "Admitted: ";
const refused = "Refused: ";

for(const person of people){
    if(person === "Phil" || person === "Lora"){
        refused = refused + `${person}`;
    } else {
        admitted = admitted + `${person}`;
    }
}
console.log(admitted);
console.log(refused);