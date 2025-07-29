/* 
function abcd(){
    
    if(true){
       var a = 12;
    }
    console.log(a)
}

abcd() */
/*
const { startTransition } = require("react"); */

// var function scope

//-------------------------------------------------

/*
var a = 12;

function abcd(){
    
    if(true){
       console.log("global scope")
    }
    console.log(a)
}

abcd()  */

// var global scope

//-------------------------------------------------


/*
{
    let a = 12;
}
*/

// let block scope


/*
const a = 10
{
    
    console.log(a)
}  */

/*
function abcd(){
    var a = 12;
    console.log(a)
}

abcd() */

/*

let likes = 100;


function likePost() {
    return ++likes;
}

console.log(likePost())

*/

/*
console.log(!!0) */

// for -------------------------------------------
// 1-100
/*
for(let i = 1; i<101; i++){
    console.log(i)
}  */

/*
for(let i = 20; i>0; i--){
    console.log(i)
} */

// while -----------------------------------------
/*
start
while(end){
     // code
     change
}  */


// 1-32
/*
let i = 1;
while (i < 33){
    console.log(i);
    i++;
} */


// do while --------------------------------------
/*
let i = 1;
do{
    console.log(i);
    i++;
}
while(i<10) */


/*
let i = 12;
do{
    console.log(i);
    i++;
}
while(i<2)  */

// break -------------------------------------
/*
for(let i = 1; i<201; i++){
    console.log(i);
    if(i === 32){
        break;
    }
}  */

// continue ---------------------------------------
/*
for(let i = 1; i<201; i++){
    if(i === 32){
        continue;
    }
    console.log(i);
} */


// Q:-1:- Print numbers from 1 to 10 using a for loop
/*
for(let i = 1; i<11; i++){
    console.log(i);
} */

// Q:-2:- Print numbers from 10 to 1 using a while loop
/*
let i = 10;
while(i>0){
    console.log(i);
    i--;
}  */

// Q:-3:- Print even numbers from 1 to 20 using a for loop

/*
for(let i = 1; i < 21; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
*/


/*
for(let i = 2; i < 21; i=i+2){
    console.log(i)
} */


// Q:-4:- Print odd numbers from 1 to 15 using a while loop
/*
let i = 1;
while(i<16){
    if(i % 2 != 0){
        console.log(i);
    }
    i++;
}  
*/


/*
let i = 1;
while(i<16){
    if(i%2 === 1){
        console.log(i);
    }
    i++;
}  */


// Q:-5:- Print the multiplication table of 5 (i.e., 5 * 1 = 5 ... 5 * 10 = 50)
/*
for(let i = 1; i<51; i++){
    if(i % 5 === 0){
        console.log(i)
    }
}  */

/*
for(let i = 1; i < 11; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}  */

// Q:-6:- Find the sum of number from 1 to 100 using a loop.
/*
let sum = 0;
for(let i = 1; i < 101; i++){
    sum = sum + i;
}
console.log(sum)  */

// Q:-7:- Print all numbers between 1 to 50 that are divisible by 3.
/*
for(let i = 1; i<51; i++){
    if(i % 3 === 0){
        console.log(i);
    }
} */

// Q:-8:- Ask the user for a number and print whether each number from 1 to that number is even or odd.

// (e.g., "1 is odd", "2 is even", ...)
/*
let val = prompt("give a number");

for(let i = 1; i <= val; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`);
    } else{
        console.log(`${i} is odd`);
    }
}  */

// Q:-9:- Count how many numbers between 1 to 100 are divisible by both 3 and 5.
/*
for(let i=1; i<101; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log(i);
    }
}  */


// break ========================================
/*
for(let i=1; i<101; i++){
    console.log(i);
    if(i % 7 === 0){
        break;
    }
}  */

// continue ===================================
/*
for(let i=1; i<21; i++){
    if(i%3 === 0){
        continue;
    }
    console.log(i)
}  */

/*
let count = 0;
for(let i=1; i<101; i++){
    if(i%2==1){
        count++;
        console.log(i);
    }
    if(count === 5){
        break;
    }
}  */


// Q:-1:- Print numbers from 1 to 10 using a for loop.
/*
for(let i=1; i<=10; i++){
    console.log(i);
}  */

// Q:-2:- print numbers from 10 to 1 using a while loop.
/*
let i=10;
while(i>0){
    console.log(i);
    i--;
}  */
/*
for(let i=10; i>0; i--){
    console.log(i)
}  */

// Q:-3:- Print even numbers from 1 to 20 using a for loop.
/*
for(let i=2; i<=20; i +=2){
    console.log(i);
} */

/*
for(let i=1; i<=20; i++){
    if(i%2 === 0){
        console.log(i);
    }
} */

// Q:-4:- Print odd numbers from 1 to 15 using a while loop.
/*
let i=1;
while(i<=15){
    console.log(i);
    i += 2;
} */

/*
let i=1;
while(i<=15){
    if(i%2 === 1){
        console.log(i);
    }
    i++;
} */

// Q:-5:- Print the multiplication table of 5 (i.e., 5 * 1 = 5 ... 5 * 10 = 50)
/*
for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}  */

// Q:-6:- Find the sum of numbers from 1 to 100 using a loop.
/*
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);  */

// Q:-7:- print all numbers between 1 to 50 that are divisible by 3.
/*
for(let i=1; i<=50; i++){
    if(i % 3 === 0){
        console.log(i)
    }
} */

// Q:-8:- Ask the user for a number and print whether each number from 1 to that number is even or odd.

// (e.g., "1 is odd", "2 is even", ...)
/*
let n = prompt("Give a number : ");
for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}  */

// Q:-9:- Count how many numbers between 1 to 100 are divisible by both 3 and 5.

/*
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}  */



// Q:-1:- Stop at first multiple of 7

// write a loop from 1 to 100 that:
// . Prints each number 
// . Stops completely when it finds the first number divisible by 7

/*
for(let i=1; i<=100; i++){
    console.log(i)
    if(i%7 === 0){
        break;
    }
}  */

// Q:-2:- Skip Multiples of 3
// Write a loop from 1 to 20 that:
// . Skips numbers divisible by 3
// . Print all others

/*
for(let i=1; i<=20; i++){
    if(i%3 === 0){
        continue;
    }
    console.log(i);
}  */

// Q:-3:- Print first 5 odd numbers only

// Write a loop from 1 to 100 that:
// . Prints only 5 odd numbers
// . then stops the loop

/*

let count = 0;
for(let i=1; i<101; i++){
    
    if(i%2 === 1){
        count++;
        console.log(i);
    }

    if(count === 5){
        break;
    }
    
}  */

//----------------------------------------
// Function------------------
// function declarations
/*
function dance(){
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
}

dance();
dance();
dance();   */

//------------------------------------
// function expression
/*
let fnc = function(){
    console.log("hey")
}

fnc();   */

// Fat arrow function
/*
let fnc = () => {
    console.log("hey");
}

fnc(); */

//----------------------------
/*
function dance(v1){
    console.log(`${v1} naach raha hai`);
}

dance("ghoda");
dance("hirad");
dance("cheel");
dance("lakadbaggha");
dance("horse");  */

//--------------------------------
// parameters vs arguments
/*
function add(v1, v2){
    console.log(v1 + v2);
}

add(1, 2);
add(11, 22);
add(111, 222);  
*/

//----------------------------------------------

// Default parameter ------------------------
/*
function add(v1 = 0, v2 = 1){
    console.log(v1, v2);
}

add();  */

//

// Rest parameter --------------------------------
// jab arguments kai saare ho to humein utne hi parameter banaane padege, issey bachne ke liye, hum rest ka use karte hai ... agar ... function ke parameter space main lage to wo rest operator hai
// and agar wo arrays and objects main lage to wo spread operator 

/*
function abcd(...val){
    console.log(val);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  */

// ------------------------------------
/*
function abcd(a, b, c, ...val){
    console.log(a, b, c, val);
}

abcd(1, 2, 3, 4, 5, 6)   */

//--return matlab jaha se aaye ho wahi daal denge
/*
function abcd(){
    return 12;
}

let val = abcd();
console.log(val)  */

//------------------------------
/*
function abcd(v){
    return 12 + v;
}

let val = abcd(23);
console.log(val); */

// First class function -> functions ko values ki tarah treat kar sakte hai

/*
let abcd = 12; */
/*
let abcd = function(){

}  */


/*
function abcd(val){
    val();
}

abcd(function () {
    console.log("hey");
});   */


// Higher order function -> hof wo function hota hai jo ki return kare function ya fir accept kare ek function apne parameter mein


/*
function abcd(val){

}

abcd(function(){
    
})  */



/*
function abcd(){
    return function () {
        console.log("heyehye");
    };
}

abcd()();  */



//------------ pure vs impure functions ----------

// aisa function jo ki baahar ki value ko naa badle wo hai pure function

/*
let a = 12;

function abcd(){    //  pure function
    console.log("hey")
} 

function hui(){     //   impure function
    a++;
    console.log(a)
}

hui()
*/

// aisa function jo baahar ki value ko badal de wo hai impure functions


///------------------------closures ------------>

// closures -> ek function jo return kare ek aur function aur return hone waala function humesha use  karega parent function ka koi variable

/*
function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

abcd()()  */

//--------Lexical scoping -------------------->
/*
function abcd(){
    let a = 12;
    function defg(){
        let b = 13;
        function ghij(){
            let c = 14;
        }
    }
}   */

//--IIFE (Immediately Invoked Function Expressions) --->


/*
(function(){
    console.log("Sonu");
})();  */



//--------- Hoisting -------------------->

/*
console.log(x); // undefined
var x = 5;  */


/*
abcd();

function abcd(){
    console.log("hey");
}  */


// Q:-1:- What's the difference between function declaration and expression in terms of hoisting ?

// function declaration ->


/*

abcd()

function abcd(){
   console.log("sonu")
}    

*/

// function expression ->

// function expression error de deta hai

/*  

abcd()

let abcd = function(){
    console.log("sonu")
}   */


//Q:-2:- log kya hoga

/*
greet();

function greet(){
    console.log("Hello");
}  */


//Q:-3:- Function convert in fat arrow function
/*
function multiply(a, b){
    return a * b;
} */

/*
let multiply = (a, b) => {
    return a * b;
};

multiply()  */

//Q:-4:- Identify in parameter and argument

/*
function welcome(name) {
    console.log(name);
}

welcome("sonu");  */


// Q:-1:- What's the difference between function declaration and expression in terms of hoisting ?


/*

abcd()      

function abcd(){      // function declaration hoisting
    console.log("sonu");
}   */


/*
abcd()

let abcd = function(){  // function statement hoisting
    console.log("sonu")
}
*/

// Q:-2:- Log kya hoga

/*

greet();

function greet(){
    console.log('Hello!');
}  

*/

// Q:-3:- Function convert in fat arrow function
/*
function multiply(a, b){
    return a * b;
}
*/


/*

let multiply = (a, b) => {
    console.log("sonu")
    return a * b;
}

multiply()

*/

// Q:-4:- Identify in parameter and argument

/*

function welcome(name){
    console.log(name);
}

welcome("Sonu");

*/


// Q:-5:- Kitne perameter hai or kitne argument hai 
/*
function demo(a, b, c) {   // three perameter hai

}

demo(1, 2);     // two argument hai

*/

// Q:-6:- predict output

/*
function sayHi(name = "Guest") {
    console.log("Hi", name);
}

sayHi();    */

// Q:-7:- What does the ... operator mean in parameters ?
/*
function abcd(...val){
    console.log(val);
}

abcd(1,2,3,4,5,6);  */

// Q:-8:- Use rest parameter to accept any number of scores and return the total


/*

function getScore(...scores) {
    console.log(scores)
}

getScore(10, 12, 14, 18);  */

/*
function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total = total + val;
    });
    return total;
}

console.log(getScore(10, 12, 14, 18));  */

// Q:-9:- fixce the function using  early return 
/*
function checkAge(age) {
    if (age < 18) {
        console.log("Too young");
    } else {
        console.log("Allowed");
    }
}
*/

/*
function checkAge(age) {
    if (age < 18)  return "Too young";
    return "Allowed";
}

console.log(checkAge(12));  */



// Q:- 10:- Return in the value of function


/*
function f() {
    return;
}

console.log(f());  */

// Q:- 11:- What does it mean when we say "functions are first-class citizens"?


// Q:-12:- Can you assign a function to a variable and then call it ? Show how

/*
let a = function(){

}

a();  */


// Q:-13:- Pass a function into another function and execute it inside.

/*

function abcd(val) {
    val();
}

abcd(function () {
    console.log("hey");
});   */


// Q:-14:- What is a higher-order function?

/*

function abcd(){
    return function(){
        console.log("return")
    };
}

abcd()()    */

/*
function abcd(val){
    val();
}

abcd(function(){
    console.log("accept")
})    */


// Q:-15:- Identify in Higher order function

/*
[1, 2, 3].map(function (x) {
    return x * 2;
});  */

// Q:-16:- Piyor and Inpiyor function 

/*
let total = 0;      // Inpiyor function
function addToTotal(num) {
    total += num;
}  */ 


/*
function abcd(){
    console.log("Piyor function");
}

abcd();   */


// Q:-17:- Convert the above function into a pure function


/*
let total = 0;

function addToTotal(num) {
    let newtotal = total;
    newtotal += num;
}   */


// Q:-18:- What is a closure? When is it created?

/*
function abcd() {
    let val = 0;
    return function () {
        console.log(val);
    };
}  */

// Q:-19:- kya log hoga ?

/*
function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter();
counter();   */

// Q:-20:- Convert this normal function into an IIFE

/*
(function init() {
    console.log("Initialized");
})();
*/

// Q:-21:- What is the use of IIFE? Name one real-world use case.

/*
let shery = (function () {
    let score = 0;
    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        },
    };
})();    */

// Q:-22:- What will be the output here and why?

/*
greet();

var greet = function () {
    console.log("Hi");
};  */

// Q:-23:- What will be the output here and why?

/*
greet();

function greet() {
    console.log("Hi!");
}  */



// Q:-24:- Write a BMI calculator   

/*
function bmi(weight, height) {
    return weight / (height * height);
}

console.log(bmi(69, 1.7).toFixed(2));   */

// Q:-25:- Create a reusable discount calculator (HOF)

/*
function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
}

let discounter = discountCalculator(10);
console.log(discounter(200));  */



/*

function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(1200));
console.log(twenty(1200));    */


// Q:-26:- Build a counter using Closure


/*
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());
console.log(c());  */

// Q:-27:- Create a pure function to transform a value 

/*
function double(val) {
    return val * 2;
}

console.log(double(15));  */

// Q:-28:- Use IIFE to isolate variables

/*

(function () {
    const password = "secret password";
    console.log(password);
})();

console.log(password);   */



//----------------------Arrays---------------->

/*
Array-> Ek variable me ek se jyada elements(values) store kar sakte hai   */

// ek se jyada elements ke liye hai

/*
let marks = [10, 40, 52, 37, 92];
marks[3] = 2;
console.log(marks)   */



// Array Methods:-> push, pop, shift, unshift, splice, slice, reverse, sort, map, filter, reduce, find, some, every(intro level)

// push-------------->

/*
let arr = [1, 2, 3, 4, 5];
arr.push(7000);
console.log(arr);  */

// pop----------------->

/*
let arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr);  */

// shift----------------->

/*
let arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr)  */

// unshift----------------->

/*
let arr = [1, 2, 3, 4, 5];
arr.unshift("add");
console.log(arr)
*/

// splice------------------->

/*
let arr = [1, 2, 3, 4, 5];
arr.splice(2,2);
console.log(arr) */

// slice--------------------->

/*
let arr = [1, 2, 3, 4, 5];
let newarr = arr.slice(0, 4);

console.log(newarr);
console.log(arr);  */

// reverse-------------------->

/*
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);  */

// sort------------------------>

/*
let arr = [11, 62, 3, 4, 25];
arr.sort(function (a, b) {
    return a-b;
})

console.log(arr);  */


// forEach---------------------->

/*
let arr = [11, 62, 3, 4, 25];

arr.forEach(function (val) {
    console.log(val);
});  */


// map---------------------------->

// map sirf tab youse karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par

// map dikhte hi saath man mein ek blank array bana liya karo

// jab bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kuchh values ko rakhega tab map lagega

/*
let arr = [11, 62, 3, 4, 25];

let newarr = arr.map(function(val){
    return 12;
})

console.log(newarr);  */

// filter---------------------------->

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newarr = arr.filter(function (val) {
    if(val > 4) return true;
})


console.log(newarr);  */

// reduce------------------------------->

// Ek array se ek value banana

/*
let arr = [1, 2, 3, 4, 5, 6];

let ans = arr.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);

console.log(ans);  */

// find------------------------------------>

/*
let arr = [1, 2, 3, 1, 4, 5, 6];

let va = arr.find(function (val) {
    return val === 1;
})

console.log(va);   */


/*
let arr = [
    { id: 1, key: 1},
    { id: 2, key: 2},
    { id: 3, key: 1},
];

let va = arr.find(function (val) {
    return val.key === 1;
});

console.log(va);  */

// some-------------------------------------->

/*
let arr = [10, 30, 32, 90];

let any = arr.some(function (val) {
    return val > 85;
});

console.log(any);  */


// every--------------------------------------->

/*
let arr = [10, 30, 32, 90];

let eve = arr.every(function (val) {
    return val > 5;
})

console.log(eve);  */

//---------------------------------------------

// Destructuring, spread operator ------------->

// Destructuring--------------------->

/*
let arr = [1, 2, 3, 4, 5];

let [a, b, , c] = arr;

console.log([a, b, c]);
console.log(a, b, c);  */

// spread operator----------------------------->

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [...arr];
arr2.pop();

console.log(arr);
console.log(arr2);  */


// Q:-1:- Create an array with 3 fruits and print the second fruit

/*
let fruit = ["apple", "guava", "banana"];

console.log(fruit[1]) */

/*
let fruit = ["apple", "guava", "banana"];
let [f, s, t] = fruit;
console.log(s);  */

// Q:-2:- Add "Mango" at the end and "Pineapple" at the beginning of this array

/*

let fruits = ["Apple", "Banana"];

fruits.push("Mango");
fruits.unshift("Pineapple");

console.log(fruits);  */

// Q:-3:- Replace "Banana" with "Kiwi" in the array above

/*
let fruits = ["Apple", "Banana"];

fruits.pop();
fruits.push("Kiwi");

console.log(fruits);  */

// Q:-4:- What's the difference between .push() and .unshift()

/*
let arr = [1, 2, 3, 4];
arr.push("9");
arr.unshift("6");
console.log(arr); */

// Q:-5:- Remove the last item from this array using a method

/*
let numbers = [1, 2, 3, 4];
numbers.pop();
console.log(numbers); */

// Q:-6:- Insert "Red" and "Blue" at index 1 in this array

/*
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");
console.log(colors);  */

// Q:-7:- Extract only the middle 3 elements from this array 

/*
let items = [1, 2, 3, 4, 5, 6];
let newarr = items.slice(2, 5);
console.log(newarr);   */

// Q:-8:- Sort this array alphabetically and then reverse it

/*
let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse();
console.log(names);   */

// Q:-9:- Use .map() to square each number

/*
let arr = [1, 2, 3, 4];
let newarr = arr.map(function (val) {
    return val * val;
});

console.log(newarr);    */

// Q:-10:-Use .filter() to keep numbers greater than 10

/*
let arr = [5, 12, 8, 20, 3];
let newarr = arr.filter((val) => {
    return val > 10;
});

console.log(newarr);   */


// Q:-11:- Use .reduce() to find the sum of this array

/*
let arr = [10, 20, 30];

let sum = arr.reduce(function (acc, val) {
    return acc + val;
}, 0);

console.log(sum);   */

// Q:-12:- Use .find() to get the first number less than 10

/*
let arr = [12, 15, 3, 8, 20];

let ans = arr.find(function (val) {
    return val < 10;
});

console.log(ans); */


// Q:-13:- Use .some() to check if any student has scored below 35

/*
let arr = [45, 60, 28, 90];
let ans = arr.some(function (val) {
    return val < 35;
});

console.log(ans);  */


// Q:-14:- Use .every() to check if all numbers are even

/*
let arr = [2, 4, 6, 8, 10];

let ans = arr.every(function (val) {
    return val % 2 === 0;
})

console.log(ans);   */

// Q:-15:- Destructure this array to get firstName and lastName

/*
let fullName = ["Harsh", "Sharma"];
let [firstName, lastName] = fullName;

console.log(firstName);
console.log(lastName);  */

// Q:-16:- Merge two arrays using spread operator

/*
let a = [1, 2];
let b = [3, 4];

let c = [...a, ...b];

console.log(c);  */


// Q:-17:- Add "India" to the start of this array using spread 

/*
let countries = ["USA", "UK"];
countries = ["India", ...countries];

console.log(countries);  */

// Q:-18:- Clone this array properly (not by reference)

/*
let arr = [1, 2, 3];
let arr2 = [...arr];

console.log(arr2);  */



// ------------Object-------------------->

// ek bande ke bare me bata karte hai to object banate hai

/*
let obj = {
    name: "harsh",
    age: 26,
    khaana: "daal chaawal",
};

console.log(obj);
console.log(obj.age);  */

// key-value structure ----------------------->

/*
let obj = {
    name: "harsh"
}  */

// Dot vs bracket notation ------------------->

/*
obj.name  */

/*
obj['name']  */

// Nesting and deep access---------------------->

/*
const user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        pin: 462001,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};  


console.log(user);
console.log(user.address.location.lng);   */


// Object destructuring --------------------->

/*
const user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        pin: 462001,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};  

let {lat, lng} = user.address.location;

console.log(lat);
console.log(lng);  */


// Looping :- for-in, Object.keys, Object.entries---------------------------------->

// for-in -------------------------------->

/*
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
};

for(let key in obj) {
    console.log(key, obj[key]);
}    */


// Object.keys ------------------------------>

/*
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
};

console.log(Object.keys(obj));   */

// Object.entries ----------------------------->

/*
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
};

console.log(Object.entries(obj));    */


// Copying objects:- spread, Object.assign, deep clone ---------------------------------------->

// spread ------------------------------------>

/*
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
};

let obj2 = {...obj};
console.log(obj2);
console.log(obj);   */

// Object.assign ------------------------------>

/*
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
};

let obj2 = Object.assign({ price: Infinity }, obj);
console.log(obj2);  */

// deep clone --------------------------------->

/*
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
    address: {
        city: "bhopal",
    },
};

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.address.city = "Indore";
console.log(obj2);
console.log(obj);   */


/*
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
    address: {
        city: "bhopal",
    },
};

let obj2 = { ...obj };
obj2.address.city = "Indore";

console.log(obj2);
console.log(obj);  */


// Optional chaining ------------------------>

/*
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
    addresses: {
        city: "bhopal",
    },
};

console.log(obj?.address?.city);  */

// computed properties ----------------------->

/*
let role = "admin";

let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
    addresses: {
        city: "bhopal",
    },
    [role]: "harsh",
};

console.log(obj);   */


// Q:-1:- Create an object for a student with name, age, and isEnrolled

/*
let obj = {
    name: "harsh",
    age: 26,
    isEnrolled: true,
}

console.log(obj);  */

// Q:-2:- Can an object key be a number or boolean? Try this

/*
const obj = {
    true: "yes",
    42: "answer",
};

console.log(obj[true]);
console.log(obj);    */

// Q:-3:- Access the value of "first-name" from this object

/*
const user = {
    "first-name": "Harsh",
};

console.log(user["first-name"])    */


// Q:-4:- Given a dynamic key let key = "age", how will you access user[key]

/*
let key = "age";

const user = {
    age: 26,
};

console.log(user[key]);   */

// Q:-5:- From the object below, print the latitude

/*
const locations = {
    city: "Bhopal",
    coordinats: {
        lat: 23.2,
        lng: 77.4,
    },
};

console.log(locations.coordinats.lat);   */

// Q:-6:- What will happen if coordinates is missing? How can you prevent errors?

/*
const locations = {
    city: "Bhopal",
    coordinate: {
        lat: 23.2,
        lng: 77.4,
    },
};

console.log(locations?.coordinates?.lat);  */

// Q:-7:- Destructure the city and lat from the location object above

/*
const locations = {
    city: "Bhopal",
    coordinate: {
        lat: 23.2,
        lng: 77.4,
    },
};

let { city } = locations;
let { lat } = locations.coordinate;

console.log(city);
console.log(lat);  */

// Q:-8:- Destructure the key "first-name" as a variable called firstName

/*
const user = {
    "first-name": "Harsh",
};

let { "first-name": firstName } = user;
console.log(firstName);   */


// Q:-9:- Use for-in to log all keys in this object

/*
let course = {
    title: "JavaScript",
    duration: "4 weeks",
};

for(let key in course){
    console.log(key, course[key]);
}    */

// Q:-10:- Use Object.entries() to print all key-value pairs as 

/*
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

Object.entries(course).forEach(function (val) {
    console.log(val[0] + " : " + val[1]);
})  */


// Q:-11:- Copy this Object in using spread operator

/*
const original = { a: 1, b: 2 };
const copy = { ...original };

console.log(copy);   */

// Q:-12:- What is problem this

/*
const obj1 = { info: { score: 80 } };
const clone = { ...obj1 };
clone.info.score = 100;
console.log(obj1.info.score);  // ?  */


// Q:-13:- Deep clone the obj1 safely

/*
const obj1 = { info: { score: 80 } };
let newobj = JSON.parse(JSON.stringify(obj1));
newobj.info.score = 100;

console.log(newobj);
console.log(obj1);    */


// Q:-14:- Rewrite this safely using optional chaining

/*
const person = {};
console.log(person?.profile?.name);   */

// Q:-15:- Use a variable to dynamically assign a property

/*
const key = "role";
let obj = {
    name: "harsh",
    [key]: "admin",
};

console.log(obj);  */


