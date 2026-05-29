function generatePassword(length,includelowercase,includeuppercase,includenumbers,includesymbols)
{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

let allowedChars="";
let password="";
allowedChars +=includelowercase?lowercaseChars:"";
allowedChars +=includeuppercase?uppercaseChars:"";
allowedChars +=includenumbers?numberChars:"";
allowedChars +=includesymbols?symbolChars:"";

if(length<=0){
    return `(password length must be atleast 1)`;
}

//check ek bhi charactes allow hai ya nhi
if(allowedChars.length===0){
    return `(At least 1 set of characters need to be selected)`;
}
for(let i=0;i<length;i++){
    const randindex=Math.floor(Math.random()*allowedChars.length());
    password += allowedChars[randindex];
}
}

