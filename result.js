// Get exam results
const score = parseInt(localStorage.getItem('examScore')) || 0;
const total = parseInt(localStorage.getItem('examTotal')) || 10;
const examId = localStorage.getItem('currentExam') || 'java-basic';

// Update exam title
document.getElementById('examTitle').textContent = examId.replace('-', ' ').toUpperCase() + ' Exam';

// Display results
document.getElementById('scoreValue').textContent = `${score} / ${total}`;
const percentage = Math.round((score / total) * 100);
document.getElementById('percentageValue').textContent = `${percentage}%`;

// Review exam
function reviewExam() {
  window.location.href = 'review.html';
}

// Back to home
function backToHome() {
  window.location.href = 'index.html';
}
