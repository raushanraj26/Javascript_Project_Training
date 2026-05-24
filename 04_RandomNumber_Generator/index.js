let btn=document.getElementById("btn");
let label1=document.getElementById("label1");
let label2=document.getElementById("label2");
let label3=document.getElementById("label3");
const max=6;
const min=1;

btn.onclick=function(){
    let rand1=Math.floor(Math.random()*max)+min;
     let rand2=Math.floor(Math.random()*max)+min;
      let rand3=Math.floor(Math.random()*max)+min;

      label1.textContent=rand1;
      label2.textContent=rand2;
      label3.textContent=rand3;

}