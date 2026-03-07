const iftarItems = ["Jilapi","piaju","muri","beguni"];
//console.log(iftarItems);
iftarItems[0] = "beguni";
console.log(iftarItems);  
const arraySize = iftarItems.length;
console.log(arraySize);
//index of an item of an array
console.log(iftarItems.indexOf("beguni"));
console.log(iftarItems.indexOf("muri"));
//if we want to add items at the last position to an array we use push()
iftarItems.push("cheese");
console.log(iftarItems);
//to add items at the start of an array we use unshift()
iftarItems.unshift("lemonade");
console.log(iftarItems);
//the new length of the array is returned when we use push()
iftarItems.push("cholabut");
//const length = iftarItems.push("cholabut");
//console.log(iftarItems.length);
console.log(iftarItems);
console.log(`the length of the new array after pushing cholabut is ${iftarItems.length}`);
//to delete items at the start we use shift()
//iftarItems.shift();
const removedItem = iftarItems.shift();
console.log(removedItem);
console.log(`after removing 1st item we get ${iftarItems}`);
//to delete last item from array we use pop();
const removedLastItem = iftarItems.pop();
console.log(removedLastItem);
console.log(iftarItems);
//if we know the index of an item , we can remove it from the array using splice()
const index =  iftarItems.indexOf("beguni");
iftarItems.splice(index,2);
console.log(iftarItems);
//if we want to remove the second beguni as well, we have to specify we're not gonna remove the first one by specifying the position
const secondIndex = iftarItems.indexOf("beguni",index+1);
iftarItems.splice(secondIndex,2);
console.log(iftarItems);
