const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];
//ให้ Declare ตัว Function ชื่อ getAverageStudentScore ทำหน้าที่ในการหาค่าเฉลี่ยของคะแนนนักเรียน ณ โรงเรียนแห่งหนึ่ง //เลขทั้งหมดมาบวกกันแล้วหารเพื่อหาค่าเฉลี่ย
function getAverageStudentScore(students) {
  // Start coding here
  const totalScore = students.reduce((accumulator, currentValue) => {
    //     (accumulator, currentValue, index, array) => ใส่ในวง่เล็บได้มากสุด4ตัวนี้
    return accumulator + currentValue.score;
  }, 0);

  const average = totalScore / students.length;
  return average;
}
const result = getAverageStudentScore(students);
console.log(result); // Output: 87.5
