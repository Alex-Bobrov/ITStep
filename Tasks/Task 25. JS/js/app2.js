// #1

let x = 1;
if (x % 2 == 0) {
    console.log("Задание №1 x - четное");
} else {
    console.log("Задание №1 x - нечетное");
}

// #2

let q = 14;
let w = 3;
if (q % 2 == 0) {
    console.log("Задание №2", q);
}
if (w % 2 == 0) {
    console.log("Задание №2", w);
}

// #3

let e = 1;
let r = 2;
if (e > r) {
    console.log("Задание №3", e);
} else {
    console.log("Задание №3", r);
}

// #4

let t = 2;
let y = 3;
let u = 1;
if (t > y && t > u) {
    console.log("Задание №4", t);
}
if (y > t && y > u) {
    console.log("Задание №4", y);
}
if (u > t && u > y) {
    console.log("Задание №4", u);
}

// #5

let i = 500;
let o = 1100;
let p = 1000;
if (i > o && i < p) {
    console.log("Задание №5", i);
}
if (i > p && i < o) {
    console.log("Задание №5", i);
}
if (o > p && o < i) {
    console.log("Задание №5", o);
}
if (o > i && o < p) {
    console.log("Задание №5", o);
}
if (p > i && p < o) {
    console.log("Задание №5", p);
}
if (p > o && p < i) {
    console.log("Задание №5", p);
}

// #6

sideA = 3;
sideB = 3;
sideC = 7;
if (((sideA + sideB) > sideC) && ((sideB + sideC) > sideA) && ((sideC + sideA) > sideB)){
    console.log("Задание №6", "YES");
} else{
    console.log("Задание №6", "NO");
}

// #7

// let pointX = 1;
// let pointY = 2;
// let radiusR = 4;
// if ((pointX **) + (pointY **) < (radiusR **)){
//     console.log(true);
// } else{
//     console.log(false);
// }



// # ЦИКЛЫ

// #1

var a = 1;
var sum = 1;

while (a <= 5) {

    sum *= a;
    a++;
    console.log(`Итерация ${a - 1} sum=${sum}, a=${a}`);
}

console.log(sum);
console.log(a);