const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("convert1");
const tocelsius = document.getElementById("convert2");
const result = document.getElementById("result");

let temp;

function convert(){

    if(tofahrenheit.checked){

        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;

        result.textContent = temp.toFixed(1) + "°F";

    }
    else if(tocelsius.checked){

        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;

        result.textContent = temp.toFixed(1) + "°C";

    }
    else{

        result.textContent = "Select a unit";

    }
}