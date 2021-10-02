/**
 * Write function called areParenthesisValid that takes string
 * and finds out if parenthesis in this string are valid
 * */

function sameFrequency(str) {
  let currentlyLeftOpen = 0;

  for (let chr of str) {
    switch (chr) {
      case "(":
        currentlyLeftOpen++;
        break;
      case ")":
        currentlyLeftOpen--;
        break;
    }

    if (currentlyLeftOpen < 0) return false;
  }

  return currentlyLeftOpen === 0;
}

function assert(thing) {
  if (!thing) {
    throw new Error("AssertionError");
  }
}

// Examples:
assert(sameFrequency("((1+1))") === true);
assert(sameFrequency("(((ab)c)") === false);
assert(sameFrequency(")(") === false);
