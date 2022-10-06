// WAP to find number of trailing zeros in a factorial of a number

const factorial = (num) => {
    let ans = 0;
    for (let i = 5; i <= num; i *= 5) {
        ans += num / i;
    }
    return ans;
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));
console.log(factorial(20));