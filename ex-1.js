// Exercise #1 : Get Word Length

let words = ["hello", "world"];

// function getWordLengths(words) {
//   // Start coding here
//   return words.length;
// }

// const result = words.map(getWordLengths);

// console.log(result); // Output: [5, 5]

function getWordLengths(words) {
  return words.map((letter, words) => letter.length);
}

const result = getWordLengths(words);
console.log(result);
