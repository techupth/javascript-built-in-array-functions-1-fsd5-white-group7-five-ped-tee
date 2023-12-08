let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  const wordLength5Up = words.filter((word) => word.length >= 5);

  return wordLength5Up;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
// ให้ Declare ตัว Function ชื่อ get5CharWords ทำหน้าที่ในการกรอง Value แต่ละอันใน Array ที่มีความยาวตัวอักษร 5 ตัวขึ้นไป
