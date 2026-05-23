let counter=document.getElementById("counter");
let incbtn=document.getElementById("incbtn");
let resetbtn=document.getElementById("reset");
let decbtn=document.getElementById("decbtn");

let count=0;

incbtn.onclick=function(){
    count++;
    counter.textContent=count;
}
decbtn.onclick=function(){
    if (count <= 0) {
        window.alert("Counter can't be negative!!");
        return;
    }
    count--;
   
    counter.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    counter.textContent=count;

}