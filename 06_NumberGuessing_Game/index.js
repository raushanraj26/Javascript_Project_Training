const mini=1;
const maxi=100;
const answer=Math.floor(Math.random()*(maxi-mini+1))+mini;
let attempt=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`Enetr a number between ${mini}-${maxi}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");

    }else if(guess>maxi || guess<mini){
        window.alert("Number should be in range!");
    }else{
        attempt++;
        if(guess<answer){
            window.alert("Too low! TRY AGAIN");
        }else if(guess>answer){
window.alert("Too HIGH! TRY AGAIN");
        }else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempt}`);
            running=false;
        }
    }
}