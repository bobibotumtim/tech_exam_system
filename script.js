// Exam data
const exams = [
  {
    id: 'java-basic',
    title: 'Java Basic',
    description: 'Test your fundamental knowledge of Java syntax and concepts.',
    category: 'java',
    questions: 10
  },
  {
    id: 'java-intermediate',
    title: 'Java Intermediate',
    description: 'Challenge yourself with object-oriented and collection-based questions.',
    category: 'java',
    questions: 10
  },
  {
    id: 'java-advanced',
    title: 'Java Advanced',
    description: 'Test advanced Java skills like Streams, Concurrency, and Spring Boot.',
    category: 'java',
    questions: 10
  },
  {
    id: 'python-basic',
    title: 'Python Basic',
    description: 'Start your Python journey with variables, loops, and conditions.',
    category: 'python',
    questions: 10
  },
  {
    id: 'python-intermediate',
    title: 'Python Intermediate',
    description: 'Explore data structures, functions, and modules in Python.',
    category: 'python',
    questions: 10
  },
  {
    id: 'python-advanced',
    title: 'Python Advanced',
    description: 'Master advanced Python topics including OOP and decorators.',
    category: 'python',
    questions: 10
  },
  {
    id: 'cpp-basic',
    title: 'C++ Basic',
    description: 'Learn the basics of C++ syntax, variables, and control structures.',
    category: 'cpp',
    questions: 10
  },
  {
    id: 'cpp-intermediate',
    title: 'C++ Intermediate',
    description: 'Improve your understanding of classes, pointers, and templates.',
    category: 'cpp',
    questions: 10
  },
  {
    id: 'cpp-advanced',
    title: 'C++ Advanced',
    description: 'Dive into memory management, STL, and advanced object-oriented design.',
    category: 'cpp',
    questions: 10
  }
];

// Load exams
function loadExams(filter = 'all') {
  const examsGrid = document.getElementById('examsGrid');
  examsGrid.innerHTML = '';

  const filteredExams = filter === 'all' 
    ? exams 
    : exams.filter(exam => exam.category === filter);

  filteredExams.forEach(exam => {
    const examItem = document.createElement('div');
    examItem.className = 'exam-item';
    examItem.innerHTML = `
      <h3>${exam.title}</h3>
      <p>${exam.description}</p>
      <button class="btn btn-primary" onclick="startExam('${exam.id}')">Take Exam</button>
    `;
    examsGrid.appendChild(examItem);
  });
}

// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    loadExams(filter);
  });
});

// Start exam
function startExam(examId) {
  localStorage.setItem('currentExam', examId);
  window.location.href = 'exam.html';
}

// Initialize
loadExams();
