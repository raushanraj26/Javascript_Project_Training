// console.log("Hello world")
// window.alert("Welcome to my website")

// let heading=document.getElementById("myH2");
// console.log(heading);
// heading.textContent="Welcome to my website";

// let p=document.getElementById("myp");
// p.textContent("My name is Raushan Raj");


// How to accept user input

// 1.Window prompt
// 2.Htnl textbox

let heading=document.getElementById("myh1");
document.getElementById("mysubmit").onclick=function()
{
    let name=document.getElementById("myname").value;
    heading.textContent=`hello ${name}`;

}