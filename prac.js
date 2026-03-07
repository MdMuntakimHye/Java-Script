const browserType = "mozilla";
browserType.length;

// if(browserType.includes("zilla")){
//     console.log("found zilla");
// }else{
//     console.log(" zilla not found");
// }

if (browserType.startsWith("zilla")) {
    console.log("it starts with zilla");
} else {
 console.log("it doesn't");   
}

if (browserType.endsWith("zilla")) {
    console.log("it ends with zilla");
} else {
 console.log("it doesn't end with zilla");   
}

const tagline = "I want to be a developer, who isn't just a developer but also builds"
const firstOccurence = tagline.indexOf("developer");
const secondOCCURRENCE = tagline.indexOf("developer",firstOccurence+1);
//we could also write like this.
const secondOccurence = tagline.indexOf("developer",tagline.indexOf("developer")+1);
console.log(firstOccurence);
console.log(secondOccurence);
console.log(secondOCCURRENCE);
console.log(`extracting substring from a string
    `);
    console.log(browserType.slice(2));
console.log(`changing case to upper and lower
    `);
console.log(browserType.toLowerCase());
console.log(`to upper case
    `);
console.log(`uppercase is ${browserType.toUpperCase()}`);

console.log(`updating parts of string`);
const updated = browserType.replace("moz","van");

console.log(updated);
console.log(browserType);
console.log("this doesn't replace change the string it was called on");
console.log(`to replace it we'd have to use let
    `);
let browsertype = "mozilla";
browsertype = browsertype.replace("moz","van");
console.log(browsertype);

console.log(`replace only changes the first occurrence.
    to change all occurrence , we'll use replaceALL()`);

let quote = "to be or not to be";
quote = quote.replaceAll("be","code");
console.log(quote);