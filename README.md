# 📝 Tech Skill Exam System

A modern online examination system for testing programming skills in Java, Python, and C++.

## ✨ Features

- **Multiple Exams** - 9 different exams across 3 programming languages
- **3 Difficulty Levels** - Basic, Intermediate, and Advanced
- **Progress Tracking** - Visual progress bar and question counter
- **Instant Results** - Get your score immediately after submission
- **Responsive Design** - Works on all devices
- **Filter by Category** - Filter exams by programming language

## 🚀 Quick Start

### Run the Application

```bash
cd tech-exam-system
npx serve .
```

Open browser at: `http://localhost:3000`

## 📁 File Structure

```
tech-exam-system/
├── index.html          # Home page - Exam listing
├── exam.html           # Exam page - Take exam
├── result.html         # Result page - View score
├── styles.css          # All styles
├── script.js           # Home page logic
├── exam.js             # Exam logic
├── result.js           # Result logic
└── README.md           # This file
```

## 🎯 How It Works

### 1. Home Page
- Display 9 exams in grid layout
- Filter by: All, Java, Python, C++
- Click "Take Exam" to start

### 2. Exam Page
- 10 questions per exam
- Progress bar shows completion
- Select one answer per question
- Navigate with Previous/Next buttons
- Submit on last question

### 3. Result Page
- Shows score (e.g., 7/10)
- Shows percentage (e.g., 70%)
- Options to review or go back home

## 📊 Exam Categories

### Java
- **Java Basic** - Syntax, variables, data types
- **Java Intermediate** - OOP, collections
- **Java Advanced** - Streams, concurrency, Spring Boot

### Python
- **Python Basic** - Variables, loops, conditions
- **Python Intermediate** - Data structures, functions
- **Python Advanced** - OOP, decorators

### C++
- **C++ Basic** - Syntax, variables, control structures
- **C++ Intermediate** - Classes, pointers, templates
- **C++ Advanced** - Memory management, STL

## 🎨 Customization

### Add New Questions

Edit `exam.js` and add to `questionBank`:

```javascript
const questionBank = {
  'java-basic': [
    {
      question: 'Your question here?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correct: 0  // Index of correct answer (0-3)
    },
    // Add more questions...
  ]
};
```

### Add New Exam

Edit `script.js` and add to `exams` array:

```javascript
{
  id: 'javascript-basic',
  title: 'JavaScript Basic',
  description: 'Test your JavaScript fundamentals.',
  category: 'javascript',
  questions: 10
}
```

Then add questions in `exam.js`.

### Change Colors

Edit `styles.css`:

```css
.btn-primary {
  background: #3498db;  /* Change primary color */
}

.navbar {
  background: #2c3e50;  /* Change navbar color */
}
```

## 💾 Data Storage

Uses `localStorage` to store:
- Current exam ID
- User answers
- Exam score
- Total questions

## 🔧 Future Enhancements

- [ ] Timer for each exam
- [ ] Review answers after submission
- [ ] Save results to database
- [ ] User authentication
- [ ] Leaderboard
- [ ] More programming languages
- [ ] Randomize questions
- [ ] Difficulty-based scoring

## 📱 Responsive Design

- **Desktop**: Full grid layout
- **Tablet**: 2-column grid
- **Mobile**: Single column, stacked buttons

## 🛠️ Technologies

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript
- LocalStorage API

**Made with ❤️ for tech learners**

⭐ Happy learning<3
