const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];
//ทำหน้าที่ในการนำชื่อ Topic ของ Todo ทุกอันออกมาใส่ใน Array อันใหม่ (Array.map)

function getTodoTopics(todos) {
  // Start coding here
  const newTodos = todos.map((todo) => todo.topic); //ไม่มีคุณสมบัติ length แทนที่จะใช้ todo.length ให้ใช้ todo.topic เพื่อดึงค่า topic ออกมา
  return newTodos;
}

const result = getTodoTopics(todos);
console.log(result);
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
