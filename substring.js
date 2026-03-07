const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";
const subStringIndex = quote.indexOf("green eggs and ham");

const subStringLength = quote.length;
console.log(`the quote is ${subStringLength} characters long`);
console.log(`final quote is : ${quote.slice(0,subStringIndex+1)}`);