const mycheckbox=document.getElementById("subscribe");

const visabtn=document.getElementById("visa");
const masterbtn=document.getElementById("mastercard");
const paypalbtn=document.getElementById("paypal");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentgateway");

const submitbtn=document.getElementById("submit");

submitbtn.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent="You are subscribed!! Thankyou!"
    }else{
        subresult.textContent="You are Not subscribed!!"
    }

    if(visabtn.checked){
        paymentresult.textContent="You are paying with Visa card."
    }else if(masterbtn.checked){
         paymentresult.textContent="You are paying with  Mastercard."
    }else if(paypalbtn.checked){
        paymentresult.textContent="You are paying with  PayPal."
    }
}
