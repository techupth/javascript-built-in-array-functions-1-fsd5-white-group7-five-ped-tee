const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];
//ให้ Declare ตัว Function ชื่อ getCompletedTodo ทำหน้าที่ในการกรอง Todo ที่ทำเสร็จแล้ว (Property completed ที่มี Value เป็น true)
function getCompletedTodo(todos) {
  // Start coding here
  const newTodos = todos.filter((todo) => todo.completed);
  return newTodos;
}

const result = getCompletedTodo(todos);
console.log(result);
/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
