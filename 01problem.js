// WAJP to compute the absolute difference between a specified number and 19. Return triple their absolute difference if specified number is greater than 19.

function diff_num(n) {
  if ( n <= 19 ) {
    return ( 19 - n );
    }
  else {
    return ( n - 19 ) * 3;
    }
  }

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));
