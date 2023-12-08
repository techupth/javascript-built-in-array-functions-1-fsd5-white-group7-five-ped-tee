//Exercise #4 : Get Completed Todo
// ให้ Declare ตัว Function ชื่อ getCompletedTodo ทำหน้าที่ในการกรอง Todo ที่ทำเสร็จแล้ว (Property completed ที่มี Value เป็น true)
// Function getCompletedTodo มี Parameter 1 อัน คือ Array ของ Todo ชื่อว่า todos
// Function อันนี้จะ Return ตัว Array ของ Object ข้อมูล Todo ที่ทำเสร็จแล้ว
// จากนั้นให้ลอง Execute ตัว Function getCompletedTodo เพื่อทดสอบผลลัพธ์
// กำหนดให้ใช้ Built-in Array Function (Array.filter) ในการแก้โจทย์ข้อนี้

const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

// function getCompletedTodo(todos) {
//   // Start coding here
//   return todos.completed === true;
// }

// const result = todos.filter(getCompletedTodo);
// console.log(result);

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/

function getCompletedTodo(todos) {
  return todos.filter((checkObj) => checkObj.completed === true);
}

console.log(getCompletedTodo(todos));

//const result = getCompletedTodo(todos);
//console.log(`Output: ${result}`);
//console.log(`Output: ${JSON.stringify(result, null, 2)}`);
