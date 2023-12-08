let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  const length = words.map((words) => words.length);

  return length;
}

let result = getWordLengths(words);

console.log(result); // Output: [5, 5]
//ให้ Declare ตัว Function ชื่อ getWordLengths ทำหน้าที่ในการนำ Value แต่ละอันใน Array เปลี่ยนเป็นจำนวนตัวอักษรของ Value นั้นๆ
