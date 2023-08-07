
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