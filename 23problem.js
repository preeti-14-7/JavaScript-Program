//------ lib.js ------</span>
export const sqrt = Math.sqrt;</span>
export function square(x) {</span>
return x * x;</span>
}
export function diag(x, y) {
return sqrt(square(x) + square(y));
}

//------ main.js ------</span>
 { square, diag } from 'lib';
console.log(square(5)); // 25
console.log(diag(4, 3)); // 5