/*string method used to perform some operation on string*/

//some commonly used string method

//get length
let text = "javascript";
console.log(text.length)//length mehtod


//change case
let text1 = "javascript";
let text2 = "JAVASCRIPT";

console.log(text.toUpperCase());// JAVASCRIPT
console.log(text2.toLowerCase());//javascript

//slice srting for a certain position
console.log(text.slice(0, 4));//java
console.log(text.slice(4));//script


//replace string
let sentence = "i love java";
console.log(sentence.replace("java", "javascript"));


//string to array
console.log(sentence.split(" ")); //[ 'i', 'love', 'java' ]

//remove extra spaces
let word = "   hi    ";
console.log(word.trim());//hi

//check matches 
let check = "jack love java";
console.log(check.includes("ja"));//true
console.log(check.includes("javascript"));//false

//search index
let search = "jave";
console.log(search.indexOf("v"));//2
console.log(search.indexOf("s"));//-1

//repaet string 
let repaet = "hi";
console.log(repaet.repeat(3));// hihihi 








/**** Date objects method ****/


/*** we can get current date and time and also set custom date ***/

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());


//set coustom event
let meetinDate = new Date(2026, 7, 15, 6);
console.log(meetinDate);
