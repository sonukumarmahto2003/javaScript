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
add(111, 222);  */

