// #1
console.log("Task 1");

let arrayA = [];
arrayA[0] = 3;
let max = 100;
let min = 1;

for (let i = 1; i < 10; i++) {
    arrayA[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(arrayA);

console.log(arrayA[arrayA.length - 3], arrayA[arrayA.length - 2], arrayA[arrayA.length - 1]);

// #2
console.log("Task 2");

let arrayB = [];
arrayB[0] = 3;
let max1 = 100;
let min1 = 1;

for (let i = 1; i < 10; i++) {
    arrayB[i] = Math.floor(Math.random() * (max1 - min1 + 1)) + min;
}

console.log(arrayB);

for (var i = 0; i < arrayB.length; i++) {
    if (arrayB[i] != 0 && arrayB[i] % 3 == 0 ) {
        console.log();
    }
}    

