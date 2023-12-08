//Exercise #3 : Get Todo Topics

// ให้ Declare ตัว Function ชื่อ getTodoTopics ทำหน้าที่ในการนำชื่อ Topic ของ Todo ทุกอันออกมาใส่ใน Array อันใหม่
// Function getTodoTopics มี Parameter 1 อัน คือ Array ของ Todo ชื่อว่า todos
// Function อันนี้จะ Return ตัว Array ของ String ที่เป็นชื่อ Topic ของ Todo
// จากนั้นให้ลอง Execute ตัว Function getTodoTopics เพื่อทดสอบผลลัพธ์
// กำหนดให้ใช้ Built-in Array Function (Array.map) ในการแก้โจทย์ข้อนี้

const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

// function getTodoTopics(todos) {
//   // Start coding here
//   return `'${todos.topic}'`;
// }

// const output = todos.map(getTodoTopics);
// console.log(`Output: ${output}`);
/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/

//  function getTodoTopics(todos) {
//  //Start coding here
// 	return todos.topic;
//    }

//   const output = todos.map(getTodoTopics);
//    console.log("Output:"+JSON.stringify(output));
///'Output:["Doing pre-work","Workout","Playing computer games","Relax","Clean the room"]'

function getTodoTopics(todos) {
  let newArr = [];
  todos.map((findTopic) => newArr.push(findTopic.topic));
  return newArr;
}

const output = getTodoTopics(todos);
console.log(`[ Output: ${output} ]`);
