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

function createCircle () {
    // we don't want to define the functions so rigidly
    return {
        radius: radius,
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
