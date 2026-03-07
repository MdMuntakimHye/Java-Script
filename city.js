//const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  // write your code just below here
  const lowerCase = city.toLowerCase();
  //console.log(lowerCase);
  const cityNameWithoutFirstLetter = lowerCase.slice(1);
  const firstLetter = city.slice(0,1) ;
  const firstLetterUpperCase = firstLetter.toUpperCase();

  const result = city;
  //console.log(firstLetterUpperCase);
  //console.log(cityNameWithoutFirstLetter);
  //console.log(`${firstLetterUpperCase}${cityNameWithoutFirstLetter}`);
  //a better solution would be 
  const capitalized = lowerCase[0].toUpperCase()+lowerCase.slice(1);
  console.log(capitalized);

  //const listItem = document.createElement("li");
  //listItem.textContent = result;
  //list.appendChild(listItem);
}

