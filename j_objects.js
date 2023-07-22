let radius = 1;
let x = 1;
let y = 1;

// group related variables
// add functions 
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log("draw")
    },
    move: function () {
        console.log("move")
    }
}

// add functions to an object
// function draw() {}
// function move() {}

circle.draw();

// FACTORY FUNCTIONS - produce objects

// notice the parameter
function createCircle (radius) {
    // we don't want to define the functions so rigidly
    return {
        radius,
        isVisible: true,
        draw () {
            console.log("draw")
        },
        move () {
            console.log("move")
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1)

const circle2 = createCircle(2);
console.log(circle2);


// constructor function

function Circle (radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

// NEW OPERATOR
// creates empty object, set properties in object, finally operator will return object from function
const constructCircle = new Circle(1);

// creating empty object
const m = {};

// DIFFERENCES
// FACTORY - create function + call function + return new object, camel naming
// CONSTRUCTOR - new operator + this keyword, pascal naming, familiar to C# + Java


// Objects are dynamic

const square = {
    angle: 90,
    
}

square.color = "blue";

square.draw = function () {
    console.log("...")
}

console.log(square);

delete square.color;
delete square.draw;

console.log(square);

// Factory function
function squareConstructor (radius) {
    return {
        angle,
        draw: function () {
            console.log("draw")
        }
    };
}

const square1 = (90);

// constructor function
function Rectangle(angle) {
    this.angle = radius;
    this.draw = function () {
        console.log("draw");
    }
}

// rectangle1.constructor in terminal;
const rectangle1 = new Rectangle(90);

console.log(rectangle1);

// a = a new object
let a = {};
// to create a string
new String();
// string literals, creating a string object, with properties
let string = "";
// boolean 
new Boolean();
// properties of object
let boolean = true;
let bool = false;


// IMPORTANT
// every object has a constructor property
// the constructor property references the function used to create the object
// IMPORTANT


// functions are objects
function Pentagon (angle) {
    this.angle = angle;
    this.draw = function () {
        console.log("draw");
    }
}

const pent1 = new Pentagon(108);

// functions are objects 

function Octogon(angle) {
    this.angle = angle;
    this.draw = function () {
        console.log("draw");
    }
}

const Octogon1 = new Function('angle', `
    this.angle = angle;
    this.draw = function () {
        console.log("draw");
    }
`);

const octogon = new Octogon1(135);

console.log(octogon);

// call empty object into function
Octogon.call({}, 1);

const anotherOctogon = new Octogon(135);

