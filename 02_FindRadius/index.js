const pi=3.14;
document.getElementById("submit").onclick=function(){
    let r=document.getElementById("radius").value;
    r=Number(r);
    let area=pi*r*r;
    document.getElementById("myh2").textContent=`Area is: ${area}`;
}
