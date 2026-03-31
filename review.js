// Get exam data from localStorage
const examId = localStorage.getItem('currentExam') || 'java-basic';
const score = parseInt(localStorage.getItem('examScore')) || 0;
const total = parseInt(localStorage.getItem('examTotal')) || 10;
const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
const questions = JSON.parse(localStorage.getItem('examQuestions')) || [];

// Update page title
document.getElementById('examTitle').textContent = examId.replace('-', ' ').toUpperCase() + ' Exam - Review';

// Display score
document.getElementById('reviewScore').textContent = `${score} / ${total}`;
const percentage = Math.round((score / total) * 100);
document.getElementById('reviewPercentage').textContent = `${percentage}%`;

// Load review questions
function loadReview() {
  const reviewContainer = document.getElementById('reviewQuestions');
  reviewContainer.innerHTML = '';

  questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.correct;
    const isCorrect = userAnswer === correctAnswer;

    const questionCard = document.createElement('div');
    questionCard.className = `review-question-card ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`;
    
    // Question header
    const header = document.createElement('div');
    header.className = 'review-question-header';
    header.innerHTML = `
      <div class="question-info">
        <span class="question-number">Question ${index + 1}</span>
        <span class="answer-status ${isCorrect ? 'status-correct' : 'status-incorrect'}">
          ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
        </span>
      </div>
    `;
    questionCard.appendChild(header);

    // Question text
    const questionText = document.createElement('h3');
    questionText.className = 'review-question-text';
    questionText.textContent = question.question;
    questionCard.appendChild(questionText);

    // Options
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'review-options';

    question.options.forEach((option, optIndex) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'review-option';

      // Mark user's answer
      if (userAnswer === optIndex) {
        optionDiv.classList.add('user-answer');
        if (isCorrect) {
          optionDiv.classList.add('correct');
        } else {
          optionDiv.classList.add('incorrect');
        }
      }

      // Mark correct answer
      if (correctAnswer === optIndex) {
        optionDiv.classList.add('correct-answer');
      }

      // Option content
      optionDiv.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + optIndex)}</span>
        <span class="option-text">${option}</span>
        ${userAnswer === optIndex ? '<span class="option-badge">Your Answer</span>' : ''}
        ${correctAnswer === optIndex ? '<span class="option-badge correct-badge">Correct Answer</span>' : ''}
      `;

      optionsContainer.appendChild(optionDiv);
    });

    questionCard.appendChild(optionsContainer);
    reviewContainer.appendChild(questionCard);
  });
}

// Navigation functions
function backToResult() {
  window.location.href = 'result.html';
}

function retakeExam() {
  // Clear previous answers
  localStorage.removeItem('userAnswers');
  localStorage.removeItem('examScore');
  window.location.href = 'exam.html';
}

function backToHome() {
  window.location.href = 'index.html';
}

// Initialize
loadReview();
