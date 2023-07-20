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
const x = {};

// DIFFERENCES
// FACTORY - create function + call function + return new object, camel naming
// CONSTRUCTOR - new operator + this keyword, pascal naming, familiar to C# + Java