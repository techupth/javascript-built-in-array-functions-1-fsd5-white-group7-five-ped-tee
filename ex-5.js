const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator,currentValue) {
  // let totalScore = 0
  // let AverageScore = 0 
  // for (let i = 0 ; i < students.length ; i++){
  //   totalScore = students[i].score + totalScore
  //   AverageScore = totalScore/(i+1)
  // }
  // console.log(AverageScore)
  // return AverageScore
  accumulator = accumulator+currentValue.score
  return accumulator
}
const result = students.reduce(getAverageStudentScore,0)/students.length
console.log(result)// Output: 87.5

