//Exercise #5 : Get Average Student Score
const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

// function getAverageStudentScore(accSum, students) {
//   // Start coding here
//   return accSum + students.score;
// }

// const avgCal = students.reduce(getAverageStudentScore, 0) / students.length;
// console.log(`Output: ${avgCal}`); // Output: 87.5

function getAverageStudentScore(students) {
  return (
    students.reduce((sumScore, arrScore) => sumScore + arrScore.score, 0) /
    students.length
  );
}
const avgCal = getAverageStudentScore(students);
console.log(`Output: ${avgCal}`); //Output: 87.5
