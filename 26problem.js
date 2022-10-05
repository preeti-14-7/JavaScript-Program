// Print fist 10 Fibonacci numbers
var f0 = 0;
console.log(f0);

var f1 = 1;
console.log(f1);

for(var i = 2; i < 10; i++)
{
    var fi = f1 + f0;
    console.log(fi);
    
    f0 = f1;
    f1 = fi;
}