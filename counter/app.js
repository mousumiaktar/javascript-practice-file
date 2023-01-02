// FIRST WAY
const counter = document.getElementById('counter');
let increase = document.getElementById('increase');
let reset = document.getElementById('reset');
let decrease = document.getElementById('decrease');

let count = 0;

increase.addEventListener('click',()=>{
    count++;
    counter.innerHTML = count;
})
decrease.addEventListener('click',()=>{
    count--;
    counter.innerHTML = count;
})
reset.addEventListener('click',()=>{
    count=0;
    counter.innerHTML = count;
});

// SECOND WAY
// let count = 0;


// document.getElementById("increase").onclick = function(){
//     count += 1;
//     document.getElementById("counter").innerHTML = count
// }
// document.getElementById("decrease").onclick = function(){
//     count -= 1;
//     document.getElementById("counter").innerHTML = count
// }
// document.getElementById("reset").onclick = function(){
//     count = 0;
//     document.getElementById("counter").innerHTML = count
// }

