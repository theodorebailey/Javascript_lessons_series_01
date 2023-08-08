
// JavaScript Practice
// Get a problem
// Go away and solve it yourself
// Write a JavaScript Program to:

// check two numbers
// return true if one of the numbers is 100
// or if the sum of the numbers is 100


function checkNumbers(num1,num2) {
    
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if ((num1 == 100 || num2 == 100) || (num1 + num2 == 100)) {
            return true;
        } else {
            return false;
        }
    }
    
    return false;
}

// typeof requires a string value relevant to data type
// if statements with two statements require nested parenthesis
// remember to think before starting a transitional phase - i.e. comments in google docs
// remember to save your console logs, maybe. might not matter really

function check(n1,n2) {
    return (n1 == 100 || n2 == 100 ) || (n1 + n2 == 100) ? true : false;
}

console.log(check(50,50));
console.log(check(100, 1));
console.log(check(99, 1));


// What I've learned
// tertiary operators are extremely powerful
// you can chain statements in a tertiary operator
// you don't nest parenthesis in this case
// perfect for two conditions

const check = (a,b) => (a === 100 || b === 100) || (a + b) === 100;
// (a + b === 100);
// Both versions are correct and will give you the expected result, but using parentheses around (a + b) can help improve code readability and reduce the chance of operator precedence mistakes.

console.log(check(50,50));
console.log(check(100,50));
console.log(check(99,1))

// get the filename of a document

function ext(file) {
    
    // get file
    // split file and save to variable - arr
    // access second portion of array
    let arr = file.split(".");
    
    console.log(arr[1]);
}

// split can be used to break a function
// split will save the split string into an array

const exte = (file) => file.split(".")[1];


function ext(file) {
    
    // get last index of dot
    // add one to lastindex to get information preceding dot
    // use substring to access data after dot
    let lastDotIndex = file.lastIndexOf(".");
    return file.substring(lastDotIndex + 1);
}

console.log(ext("file.name"));

const fileExt = (file) => {
    
    let lastDotIndex = file.lastIndexOf(".");
    console.log(file.substring(lastDotIndex + 1))
}

fileExt("hello.name");

// lastIndexOf will return the last index of an item
// by adding one I can access everything after the last dot
// 


const fileExt = (str) => str.slice()

// just a reminder
const ext = (file) => {
    let lastDotIndex = file.lastIndexOf(".");
    return file.slice(lastDotIndex + 1);
    
}

console.log(ext("file.nane.gello"))


// function pass in file name access substring of argument from position +1 of final "."
// one line --> file.substring = 
const ext = (file) => file.substring(file.lastIndexOf(".") + 1);


// get a letter in the alphabet
// get the next letter in the alphabet

const next = (str) => {
    
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < alpha.length; j++) {
            if (str[i] === alpha[j]) {
                console.log(alpha[j + 1]);
            }
        }
    }
}

next("hello");

// replace every character in a given string with the character following it in the alphabet

// You could create a string with the whole alphabet
// or you can use unicode
// String.fromCharCode()
// .charCodeAt()

// We want to modify the contents of the string
// this means we will use .split("") --> split into an array

const next = (str) => {
    for (i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        let nxtChar = String.fromCharCode(charCode + 1);
        console.log(nxtChar);
        
    }
}

next("hello");


// arrow function to str argumen split string into array between indexes then map the array assining each index point to a parameter char which we will use to provide a String object from char code at position char + 1
const modify = (str) => str.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join("");

console.log(modify("hello"))

const moveCharForwards = (str) => str.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1))
console.log(moveCharForwards("hello"))

const moveCharForwards = (str) => str.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join("")
console.log(moveCharForwards("hello"))

// Write a javascript program to get current date with format d/m/y

const date = () => new Date().toString().split(" ");
let d = date()[2];
let m = date()[1];
let y = date()[3]
console.log(date());
console.log(d,m,y)




// new Date object to a string split by space and accessed relevant array indexes
const formatDate = (date = new Date().toString().split(" ")) => {
    const d = date[2]
    const m = date[1]
    const y = date[3]
    return `${d} / ${m} / ${y}`
  }
  
  console.log(formatDate())



// 
const formatDate = (date = new Date()) => {
    const d = date.getDay(); // gets Tuesday not the date
    const m = date.getMonth();
    const y = date.getFullYear();
    return `${d} / ${m} / ${y}`
  }
  
  console.log(formatDate())




const formatDate = (date = new Date()) => {
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    return `${d} / ${m} / ${y}`
  }
  
console.log(formatDate())

// write a JS program
// create a new string addding "New!" infront of the given string
// if the given string begins with "New!" already then return the original

// first attempt - need to remove "New"
const newStr = (str) => (str.substring(0,4) === "New!") ? console.log(str) : console.log(`New! ${str}`);

newStr("New! hello")

const newStr = (str) => (str.substring(0,4) === "New!") ? console.log(str.substring(4)) : console.log(`New! ${str}`);


// his method - using indexOf to search for the relevant string

const newOf = (str) => (str.indexOf("New!") === 0) ? str :  `New! ${str}`;

console.log(newOf("hello"))

// write a javascript program
// create a new string from a given string
// take the first + last three characters
// add them together
// string length must be +3
// if not return original

// substring and slice
const combineString = (str) => (str.length < 3) ? str : str.substring(0,3) + str.slice(-3);
// (str.substring(0,3) + str.slice(-3,0));
console.log(combineString("hello"))


// slice
const combineString = (str) => (str.length < 3) ? str : str.slice(0,3) + str.slice(-3);
// (str.substring(0,3) + str.slice(-3,0));
console.log(combineString("hello"))


// substring

const combineString = (str) => (str.length < 3) ? str : str.substring(0,3) + str.substring(str.length -3);

console.log(combineString("hello"))

// write a javascript program
// extract the first half of a string of even length

// First attempt
const firstHalfEven = (str) => str.length % 2 == 0 ? str.substring(0, str.length / 2) : str

console.log(firstHalfEven("hello"))
console.log(firstHalfEven("helloo"))

// trying to use AI
const firstHalfEven = (str) => str.length % 2 == 0? str.substring(0, Math.floor(str.length / 2) + (str.length % 2 === 0 ? 0 : 1)) : str;

console.log(firstHalfEven("hello"))
console.log(firstHalfEven("helloo"))

// back on the same 
const firstHalfEven = (str) => str.length % 2 == 0? str.substring(0, str.length / 2) : str

console.log(firstHalfEven("hello"))
console.log(firstHalfEven("helloo"))

// his answer
const firstHalfEven = (str) => str.substring(0, str.length / 2);

console.log(firstHalfEven("hello"))
console.log(firstHalfEven("helloo"))

// concatenate two strings
// except their first character

//first attempt 
const concatenateStrings = (str1, str2) => str1.substring(1,str1.length-1) + str2.substring(1,str2.length-1);

console.log(concatenateStrings("hello", "jesus"))

// realised ends cutting off - removed -1
const concatenateStrings = (str1, str2) => str1.substring(1,str1.length) + str2.substring(1,str2.length);

console.log(concatenateStrings("hello", "jesus"))
// that happens because substring ignores the last number being 5 with only 4 indexes

// slice with removed extras
const concatenateStrings = (str1, str2) => str1.slice(1) + str2.slice(1);

// given two values
// which one is nearest 100

const near100 = (a,b) => (a - 100 < b - 100) ? a : b;

console.log(near100(150, 200));
console.log(near100(150, 101));

// Math.abs
const near100 = (a, b) => (Math.abs(a - 100) < Math.abs(b - 100)) ? a : b;

console.log(near100(150, 200));
console.log(near100(150, 101));
console.log(near100(99, 1));
console.log(near100(50, 50));
console.log(near100(45, 55));

// write a program that 


// const near100 = (a, b) => (Math.abs(a - 100) < Math.abs(b - 100)) ? a : b;
const near100 = (a,b) => Math.abs(100 - a) < Math.abs(100 - b) ? a : b;

// Absolute removes the negative values which allows us to compare 2 positive values to see which one is smaller and therefore nearer to 100
// the SAME but different
const near100 = (a,b) => Math.abs(a - 100) < Math.abs(b - 100) ? a : b

// checks a given string
// tries to find 2 to 4 occurences of a specifiec character

// checks a given string
// tries to find 2 to 4 occurences of a specifiec character

// checks a given string
// tries to find 2 to 4 occurences of a specifiec character

// string and a character - the character will be checked
// count char in string
// see if between 2 and 4

const check = (str, char) => {
    let count = 0;
    for (i=0;i<str.length;i++) {
      if (str[i].toLowerCase() == char) count++;
    }
    
    return count < 5 && count > 1 ? count : "Not between 2 and 4";
}

console.log(check("hello you major dude yes oo", "o"));
console.log(check("hello you", "o"));

// using forEach value at index in split string into array
const check = (str, char) => {
    let count = 0;
    str.split("").forEach((c) => {
      if (c == char) count++;
    });
    return (count < 5 && count > 1) ? count : "Not between 2 and 4";
  }


// chat being stupidly complex

const checkOccurrences = (str, char) => (str.match(new RegExp(char, 'g')) || []).length >= 2 && (str.match(new RegExp(char, 'g')) || []).length <= 4;

// filter function will remove anything that isn't related to the call back function
const check = (str, char) => str.split("").filter(c => c === char).length;

// filter function will remove anything that isn't related to the call back function
const check = (str, char) => str.split("").filter(c => c === char).length;

const ans = (check) => check < 5 && check > 1 ? "yes" : "no"

console.log(ans(check("hello you major dude yes oo", "o")))
console.log(ans(check("hello you", "o")));

// or like the guy

// filter function will remove anything that isn't related to the call back function
const check = (str, char) => str.split("").filter(c => c === char).length;

const ans = (str, char) => check(str, char) < 5 && check(str, char) > 1 ? "yes" : "no"

console.log(ans("hello you major dude yes oo", "o"))
console.log(ans("hello you", "o"));