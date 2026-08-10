//first button
let firstBtn = document.querySelector("#btn1");
let btnPara = document.querySelector("#btn1text");

firstBtn.addEventListener("click", () => {
    btnPara.textContent = "button clicked";
});


//box mouseenter and mouseleave
let box = document.querySelector("#box");
let boxText = document.querySelector("#boxtext");

box.addEventListener("mouseenter", () => {
    boxText.textContent = "Mouse on Me!";
});

box.addEventListener("mouseleave", () => {
    boxText.textContent = "Mouse out of me!";
});




//counter 
let btn = document.querySelector("#btn2");
let counterSection = document.querySelector("#countsection");
let count = 0;

btn.addEventListener("click", () => {
    count = count + 1;
    counterSection.textContent = count;
});


//remove button
let button = document.querySelector("#btn3");

button.addEventListener("click", () => {
    button.remove();
});