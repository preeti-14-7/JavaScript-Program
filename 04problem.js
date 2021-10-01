// Write a function called sameFrequency which takes two +ve integers
// and finds out if they have the same frequency of digits
// SAMPLE INPUT - (182,281) OUTPUT - true


function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    let frequencyNum1 = {};
    if (strNum1.length !== strNum2.length) {
        return false;
    }
   
    for (let i = 0; i < strNum1.length; i++) {
        let number = strNum1[i];
        frequencyNum1[number] ? frequencyNum1[number] += 1 : frequencyNum1[number] = 1; 
    }
    
    for (let i = 0; i < strNum2.length; i++) {
        let number = strNum2[i];
        if (!frequencyNum1[number]) {
            return false
        }
        else {
            frequencyNum1[number] -= 1
        }
    }
    return true;
   }
console.log(sameFrequency(182,281));