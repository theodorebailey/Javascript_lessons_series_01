
function minMax (num1, num2) {
    
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(minMax(1, 4))
console.log(minMax(4, 1))

function max (n1, n2) {
    
    // always default to declaring value to null
    let output = 0;
    
    (n1 > n2) ? console.log(n1) : console.log(n2)
    
}

max(2, 10);
max(10, 2);

function max (n1, n2) {
    
    // always default to declaring value to null
    let output = 0;
    
    return (n1 > n2) ? n1 : n2;
    
}

console.log(max(2, 10));
console.log(max(10, 2));

function isLandscape (width, height) {
    if (width > height) {
        return true;
    } else {
        return false;
    }
}

console.log(isLandscape(100, 200));
console.log(isLandscape(200, 100));

function isPortrait (width, height) {
    // don't need to explicitly state true and false, truth is implied if it evalautes to true
    return (height > width ? true : false)
}

console.log(isPortrait(100, 200));
console.log(isPortrait(200, 100));

function isTertiaryLandscape (width, height) {
    // cleaner code 
    return (width > height);
}

console.log(isTertiaryLandscape(100, 200));
console.log(isTertiaryLandscape(200, 100));


let string;

function fizzBuzz (input) {
    
    if (input % 2 == 0 && input % 5 == 0) {
        return string = "fizzbuzz";
    } else if (input % 2 == 0) {
        return string = "fizz";
    } else if (input % 5 == 0) {
        return string = "buzz";
    } else {
        return undefined;
    }
    
}

for (i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}


for (i = 1; i <= 100; i++) {
    function fizzBuzz (input) {
        // declare value, otherwise value returned as undefined
        let string = "";
        
        // check number is NOT NOT a number, confusing
        if (!isNaN(input)) {
            
            // add fizz
            (input % 3 == 0) ? string+= "fizz" : null;
            
            // add buzz
            (input % 5 == 0) ? string+= "buzz" : null;
        
        }
        return string;
    }

    console.log(fizzBuzz(i))
}

for (i = 1; i <= 100; i++) {
    function fizzBuzz (input) {
        // declare value, otherwise value returned as undefined
        let string = "";
        
        // check number is NOT NOT a number, confusing
        if (!isNaN(input)) {
            
            // add fizz
            (input % 3 == 0) ? string+= "fizz" : null;
            
            // add buzz
            (input % 5 == 0) ? string+= "buzz" : null;
        
        }
        return string || i;
    }
    
    console.log(fizzBuzz(i))
}

function fizzBuzz (input) {
    
    let out = "";
    
    if (!isNaN(input)) {
        
        if (i % 3 == 0) out+= "Fizz"
        if (i % 5 == 0) out+= "Buzz"
    
        console.log(out || input)
        
    }
}

for (i = 1; i <= 100; i++) {
    
    fizzBuzz()
}




// remove unecessary function
for (i = 1; i <= 100; i++) {

    // create storage
    let string = "";
    
    (i % 3 == 0) ? string+= "Fizz" : null;
    
    (i % 5 == 0) ? string+= "Buzz" : null;
    
    console.log(string || i);
}

// My favourite

for (i = 1; i <= 100; i++) {
    
    let out = "";
    
    if (i % 3 == 0) out+= "Fizz"
    if (i % 5 == 0) out+= "Buzz"
    
    console.log(out || i)
    
}

for (i = 1; i <= 100; i++) {
    
    if (i % 2 == 0) {
        // ensure we still iterate on even numbers as continue will skip increment below it
        i++
        // continue statement will return us to loop beggining
        continue
    }
    
    // log to console before increment
    console.log(i)
    // after logging
    i++
}



for (i = 1; i <= 100; i++) {
    
    if (i % 2 == 0) {
        i++
        continue
    }
    
    // remove a line of code
    console.log(i++)
  
}

for (i = 1; i <= 100; i++) {
    
    if (i % 2 == 0) {
        i++
        continue
    }
    
    // iterates before logging: becomes even
    console.log(++i)
  
}



function speedCheck (speed) {
    
    let points = 0;
    let limit = 70;
    let dividend = 5;
    
    // 5 -> 
    // Math.floor(1.3)
    // 12 points -> suspend
    
    limit = speed - limit
    
    
    
    if (points == 0) return "Safe driving"
    if (points > 0 && points < 12) return "You have been docked " + `${points}` + "."
    if (points > 12) return "You have been disqualified FROM DRIVING!"
}

console.log(speedCheck(70))


// speed check with every 5 limit over 1 point added till 12 points disqualifies
function speedCheck (speed) {
    
    let limit = 70;
    let increment = 5;
    let points = 0;

    let exceededLimit = speed - limit
    let quotient = Math.floor(exceededLimit / increment);
    
    
    if (quotient > 0) {
        points = quotient * increment;
    }
    
    if (points == 0) return "Safe driving"
    if (points > 0 && points < 12) return "You have been docked " + `${points}` + "."
    if (points > 12) return "You have been disqualified FROM DRIVING!"

}

console.log(speedCheck(-1))
console.log(speedCheck(0))
console.log(speedCheck(69))
console.log(speedCheck(70))
console.log(speedCheck(71))
console.log(speedCheck(75))
console.log(speedCheck(80))
console.log(speedCheck(85))
console.log(speedCheck(90))
console.log(speedCheck(141))


function speedCheck (speed) {
    
    let limit = 70;
    let increment = 5;
    let points = 0;
    
    // remove speed which doesn't factor
    let exceededLimit = speed - limit
    // calculate increments of 5 for points
    if (speed > 70) points = Math.floor(exceededLimit / increment);
    
    if (points == 0) return "Safe driving";
    // if (speed > 70) return "Please slow down";
    if (points > 0 && points < 12) return "You have been docked " + `${points}` + " points.";
    if (points >= 12) return "You have been disqualified FROM DRIVING!";

}

console.log(speedCheck(-1))
console.log(speedCheck(0))
console.log(speedCheck(69))
console.log(speedCheck(70))
console.log(speedCheck(71))
console.log(speedCheck(75))
console.log(speedCheck(80))
console.log(speedCheck(85))
console.log(speedCheck(90))
console.log(speedCheck(141))


// show odd and even numbers 
// start at 1, <= , for loop will allow for a return statement to be used which stops undefined being added to the console
function showNumbers (input) {
    
    // issues 
    return (input % 2 == 0) ? "even" : "odd"
    
}

for (i = 1; i <= 50; i++) {
    console.log(showNumbers(i))
}


// allows for user input
// issues with return statement
// required to store information, log to console results joined and seperated by line break
function limit (input) {
    
    let arr = [];
    
    for (let i = 1; i <= input; ++i) {        
         (i % 2 == 0) ? console.log(i, "even") : console.log(i,"odd");
    }
    
    return arr;
    
}

let userInput = prompt("Please provide a numerical input: ");
let results = limit(userInput);
console.log(results.join("\n"));

// removing unecessary features
function limit (input) {
 
    for (let i = 1; i <= input; i++) {        
         (i % 2 == 0) ? console.log(i, "even") : console.log(i,"odd");
    }
}

let userInput = prompt("Please provide a numerical input: ");
limit(userInput);


// removing undefined
// very verbose
function showNumbers (input) {
    
    for (i=1;i<=input;i++) {

        (i % 2 == 0) ? console.log(i,"even") : console.log(i,"odd")
        
    }
    
    return "";
}

let userInput = prompt("Please provide a number: ")

let result = showNumbers(userInput);
if (result !== "") {
console.log(result)
}

function showNumbers (input) {
    
    for (i=1;i<=input;i++) (i%2==0) ? console.log("even") : console.log("odd")
    
    return "end"
    
}

// not logging to console return value of function
showNumbers(10)