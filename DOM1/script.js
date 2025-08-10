
//---------- DOM Manipulation -------------->

// 4 pillarss of DOM

// 1. Selection of an Element 
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener



// 1. Selection of an Element ------------------->


/*
let h1 = document.querySelector('h1');
console.log(h1);   */

// 2. Changing HTML ----------------------------->

/*
let a = document.querySelector('h1');
a.innerHTML = "Changed Content";   */

// 3. Changing CSS ------------------------------>

/*
let a  = document.querySelector('h1');
a.style.color = "red";
a.style.backgroundColor = "black"; */


/*
let a = document.querySelector('h1');
a.innerHTML = "Kaise ho aap log";
a.style.color = "yellow";
a.style.backgroundColor = "black";   */

// 4. Event Listener --------------------------->

/*
let a = document.querySelector('h1');
a.addEventListener('click', function() {
    console.log("hey");
    a.style.color = "blue";
    a.style.backgroundColor = "green";
    a.innerHTML = "Changed on Click";
})  */

/*
let bulb = document.querySelector('.bulb');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    bulb.style.backgroundColor = "yellow";
})    */


/*
let bulb = document.querySelector('.bulb');
let btn = document.querySelector('button');

let flag = 0;

btn.addEventListener('click', function(){
    if(flag == 0) {
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OFF";
        console.log("Cliocked ");
        flag = 1;
    }else {
        bulb.style.backgroundColor = "transparent";
        btn.innerHTML = "ON";
        console.log("Again Cliocked ");
        flag = 0;
    }
})        */


/*
let h1 = document.querySelectorAll('h1');
console.log(h1);

h1.forEach(function(e) {
    console.log(e);
})   */


/*
let box = document.getElementById('box');
console.log(box);   */


/*
let box = document.getElementsByClassName('box');
console.log(box);   */

/*
let h1 = document.querySelector('h1');
h1.innerHTML = "bye";  */

/*
let box = document.querySelector('#box');
box.innerHTML = "<h1>wwww</h1>"   */


/*
let box = document.querySelector('#box');
box.textContent = "<h1>wwww</h1>"   */



// 5. setTimeout and setInterval and clearInterval ----->


/*
setTimeout(function() {
    console.log("Hello");
},4000);  */


/*
setInterval(function() {
    console.log("Hello"); 
},1000);   */



/*
let getTime = setInterval(curTime, 1000);

function curTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('heads').innerHTML = time;
    console.log(time);
}   */



/*
let set = setInterval(function() {
    console.log("Hello"); 
},1000);  


clearInterval(set);
console.log(set);  */


/*
let getTime = setInterval(curTime, 1000);

function curTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('heads').innerHTML = time;
    console.log(time);
}  



function stop () {
    clearInterval(getTime);
}

stop();  */



/*
let a = document.createElement('h1');
a.innerHTML = "hhhhhh"
a.style.color = "red";  
document.body.appendChild(a);  */


/*
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, I'm a new div!";
document.body.appendChild(newDiv);  */
