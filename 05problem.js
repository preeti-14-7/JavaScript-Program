//Write a JavaScript Program to Check if the two given Numbers Have 
//Same Last Digit or not


function CheckLastDigit(number1,number2)
{
     let a = number1%10;
     let b = number2%10;
    
     if(a === b)
     {
        return(true);
     }
    
     return(false);
}

console.log(CheckLastDigit(15,5));
