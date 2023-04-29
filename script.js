// Event Propagation in JS


// Question 1 - What is Event Propagation?

// we have div, form and button inside each other with theirs events.
// when the button is pressed it will be triggered events in form & div
// the process of choosing what to execute and when is called --> Event Propagation
 
{/* <div>
        DIV
        <form action="">
            FORM
            <button>BUTTON</button>
        </form>
</div> */}


//********************************************************************************************************** */


// Question 2 - What is Event Bubbling?

// from down to up  (button -> form -> div) (form -> div)  default behavior display massage/alert!

// let div = document.querySelector("div");
// let form = document.querySelector("form");
// let button = document.querySelector("button");

// div.addEventListener("click", function() {
//     alert("div");
// });

// form.addEventListener("click", function() {
//     alert("form");
// });

// button.addEventListener("click", function() {
//     alert("button");
// });

// events don't bubbling is:  focus, blur


//********************************************************************************************************** */




// Question 3 - event.currentTarget vs event.target vs this.target  

// let div = document.querySelector("div");
// let form = document.querySelector("form");
// let button = document.querySelector("button");

// div.addEventListener("click", funcAlert);
// form.addEventListener("click", funcAlert);
// button.addEventListener("click", funcAlert);

// function funcAlert() {
//     alert("currentTarget = " + event.currentTarget.tagName + //currentTarget = FORM
//     ", target = " + event.target.tagName +//currentTarget = FORM, target = BUTTON
//     ", this = " + this.tagName);  //currentTarget = FORM, target = BUTTON, this = FORM
// };


//********************************************************************************************************** */




// Question 4 - What is Event Capturing / Trickling? ****!

// executing event from top to bottom (div -> form -> button). Achieve by adding event listener

// let div = document.querySelector("div");
// let form = document.querySelector("form");
// let button = document.querySelector("button");

// div.addEventListener("click", function() {
//     alert("div");
// }, { capture: true });

// form.addEventListener("click", function() {
//     alert("form");
// }, { capture: true });

// button.addEventListener("click", function() {
//     alert("button");
// }, { capture: true });



//*********************************************************************************************************** */



// Question 5 - How to Stop Bubbling / Capturing?  / STOP Propagation ?

// by just add "e.stopPropagation()" for all or to the needed point


// let div = document.querySelector("div");
// let form = document.querySelector("form");
// let button = document.querySelector("button");

// div.addEventListener("click", function(e) {
//     e.stopPropagation();
//     alert("div");
// });

// form.addEventListener("click", function(e) {
//     e.stopPropagation();
//     alert("form");
// });

// button.addEventListener("click", function(e) {
//     e.stopPropagation();
//     alert("button");
// });



//******************************************************************************************************** */



// Question 6 - What is Event Delegation?   ****!

// whe add Delegation to parent element not to descendent element to prevent consummation of resources

document.querySelector(".products").addEventListener("click", (event) => {
    console.log(event.target);   // -->  <span class="speaker"> , <span class="laptop"> ......
    if (event.target.tagName === "SPAN"){ // relocate to chosen area by class name
        window.location.href += "/" + event.target.className;  // http://127.0.0.1:5500/index.html?/mobile
    }
});



//********************************************************************************************************** */


// Question 7 - Output Based Question 

// how to make wen press 'button' to display message from 'form -> button -> div' end stop?


let div = document.querySelector("div");
let form = document.querySelector("form");
let button = document.querySelector("button");

div.addEventListener("click", function() {
    alert("div"); // 3
});

form.addEventListener("click", function() {
    alert("form");  // 1
}, { capture: true });

button.addEventListener("click", function() {
    alert("button"); // start  //2
});



//************************************************************************************************************ */



// Question 7 - Create Modal which closes by clicking on negative space?

// go to modal files