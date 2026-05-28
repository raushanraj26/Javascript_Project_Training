function rolldice(){
    const numdice=document.getElementById("numdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimage=document.getElementById("diceimages");
 const values=[];
 const images=[];
 const filenames = [
        "one.webp",
        "two.webp",
        "three.webp",
        "four.webp",
        "five.webp",
        "six.webp"
    ];
if(numdice<0){
    window.alert("Number of dice should be positive only");
}
 for(let i=0;i<numdice;i++){
    const value=Math.floor(Math.random()*6)+1;
    values.push(value);
     images.push(
            `<img src="images/${filenames[value - 1]}">`
        );
    // images.push(`<img src="images/${value}.webp">`);
 }
diceresult.textContent=`dice: ${values.join(',')}`
diceimage.innerHTML=images.join('')
}