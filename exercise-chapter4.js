const readlineSync = require('readline-sync');

const score = readlineSync.question('Berapa nilai ujian? (0 - 100) ');
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade: " + grade);
