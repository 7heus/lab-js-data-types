/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred ";
const s2 = "fed ";
const s3 = "Ted ";
const s4 = "bread ";
const s5 = "and ";

// Concatenate the string variables into one new string

let tongueTwister = "";
tongueTwister += tongueTwister.concat(s1, s2, s3, s4, s5, s3, s2, s1, s4);

// Print out the concatenated string

console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// Print the cameLtaiL-formatted string
// In the typical camelCase naming convention used in JavaScript, the first letter of each new word is capitalized. Now, imagine if the world of coding had a different history, where the usual camelCase rule was to capitalize the last letter of each new word. What would we call this naming convention?

// Well, we got the answer! Behold, a new naming convention - "cameLtaiL"! 🐪

// Create a new variable named result by concatenating the strings part1 and part2, and converting their last letters to uppercase to form a new "cameLtaiL" formatted string: "javAscripT"

// Once done, print out the result string using console.log().

function upperLastChar(str) {
  const lastChar = str.substring(str.length - 1).toUpperCase();
  return str.slice(0, -1) + lastChar;
}

const result = `${upperLastChar(part1)}${upperLastChar(part2)}`;

console.log(result);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * (15 / 100);

// Print out the tipAmount

console.log(tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let rand = Math.random() * 10;
rand = Math.round(rand);

// Print the generated random number

console.log(rand);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//answer = false
console.log(expression1);

const expression2 = a || b;
//answer = true
console.log(expression2);

const expression3 = !a && b;
//answer = false
console.log(expression3);

const expression4 = !(a && b);
//answer = true
console.log(expression4);

const expression5 = !a || !b;
//answer = true
console.log(expression5);

const expression6 = !(a || b);
//answer = false
console.log(expression6);

const expression7 = a && a;
//answer = true
console.log(expression7);
