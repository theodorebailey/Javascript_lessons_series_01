// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


// I = string
// string S, uppercase letters
// 6 Letters = 1 b, 3 a's, 2 n's can be deleted

// P =
// FIND INSTANCES OF BANANA - return value


// O
// return number of BANANA's found
// one instance = 1
// two instances = 2 
// 0 instances return 0


function solution(S) {
    // Implement your solution here

    // save length of string to array
    const n = S.length;

    // create object to store values
    const letterObj = {
        A: 0,
        B: 0,
        N: 0
    }

    // loop through string
    // if instance "Letter" found, increment object count
    for (let i = 0; i < n; i ++) {
        if (S[i] === "A") letterObj.A ++;
        if (S[i] === "B") letterObj.B ++;
        if (S[i] === "N") letterObj.N ++;
    }

    // Math.min - find smallest integer
    let bananaCount = Math.min(
        // round down, instances of A B N by how many we need
        Math.floor(letterObj.A / 3),
        Math.floor(letterObj.B / 1),
        Math.floor(letterObj.N / 2),
    )

    return bananaCount;
}


