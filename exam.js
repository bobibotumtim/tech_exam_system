  // Question bank
const questionBank = {
  // ==================== JAVA BASIC ====================
  'java-basic': [
    {
      question: 'What is JVM in Java?',
      options: ['Java Virtual Machine', 'Java Variable Method', 'Java Very Much', 'None of the above'],
      correct: 0
    },
    {
      question: 'Which keyword is used to create a class in Java?',
      options: ['class', 'Class', 'new', 'object'],
      correct: 0
    },
    {
      question: 'What is the default value of a boolean variable?',
      options: ['true', 'false', 'null', '0'],
      correct: 1
    },
    {
      question: 'Which method is the entry point of a Java program?',
      options: ['start()', 'main()', 'run()', 'init()'],
      correct: 1
    },
    {
      question: 'What is the size of int in Java?',
      options: ['8 bits', '16 bits', '32 bits', '64 bits'],
      correct: 2
    },
    {
      question: 'Which operator is used for string concatenation?',
      options: ['+', '&', '||', 'concat'],
      correct: 0
    },
    {
      question: 'What is the correct syntax to print in Java?',
      options: ['print("Hello")', 'System.out.println("Hello")', 'console.log("Hello")', 'echo "Hello"'],
      correct: 1
    },
    {
      question: 'Which data type is used to store a single character?',
      options: ['string', 'char', 'character', 'letter'],
      correct: 1
    },
    {
      question: 'What is the extension of Java source files?',
      options: ['.java', '.class', '.jar', '.jav'],
      correct: 0
    },
    {
      question: 'Which keyword is used to create a constant in Java?',
      options: ['const', 'final', 'static', 'constant'],
      correct: 1
    }
  ],

  // ==================== JAVA INTERMEDIATE ====================
  'java-intermediate': [
    {
      question: 'What is inheritance in Java?',
      options: [
        'A way to reuse code from parent class',
        'A way to hide data',
        'A way to create objects',
        'A way to delete objects'
      ],
      correct: 0
    },
    {
      question: 'Which keyword is used to inherit a class?',
      options: ['inherits', 'extends', 'implements', 'super'],
      correct: 1
    },
    {
      question: 'What is polymorphism?',
      options: [
        'Ability to take many forms',
        'Single form only',
        'No form',
        'Abstract form'
      ],
      correct: 0
    },
    {
      question: 'Which collection allows duplicate elements?',
      options: ['Set', 'Map', 'List', 'TreeSet'],
      correct: 2
    },
    {
      question: 'What is encapsulation?',
      options: [
        'Wrapping data and methods together',
        'Hiding implementation details',
        'Both A and B',
        'None of the above'
      ],
      correct: 2
    },
    {
      question: 'Which interface is used for sorting in Java?',
      options: ['Sortable', 'Comparable', 'Ordering', 'Sorted'],
      correct: 1
    },
    {
      question: 'What is the difference between ArrayList and LinkedList?',
      options: [
        'ArrayList uses array, LinkedList uses nodes',
        'No difference',
        'ArrayList is slower',
        'LinkedList cannot store objects'
      ],
      correct: 0
    },
    {
      question: 'What is an abstract class?',
      options: [
        'A class that cannot be instantiated',
        'A class with only abstract methods',
        'A class without methods',
        'A final class'
      ],
      correct: 0
    },
    {
      question: 'Which keyword is used for exception handling?',
      options: ['try-catch', 'handle', 'exception', 'error'],
      correct: 0
    },
    {
      question: 'What is the purpose of the "super" keyword?',
      options: [
        'To call parent class constructor',
        'To create objects',
        'To delete objects',
        'To define variables'
      ],
      correct: 0
    }
  ],

  // ==================== JAVA ADVANCED ====================
  'java-advanced': [
    {
      question: 'What is a Stream in Java 8?',
      options: [
        'A sequence of elements supporting sequential and parallel operations',
        'A file input/output class',
        'A network connection',
        'A thread class'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of Optional class?',
      options: [
        'To avoid NullPointerException',
        'To create optional parameters',
        'To make variables optional',
        'To delete null values'
      ],
      correct: 0
    },
    {
      question: 'What is a lambda expression?',
      options: [
        'A way to implement functional interfaces',
        'A loop structure',
        'A conditional statement',
        'A class definition'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between synchronized and volatile?',
      options: [
        'synchronized provides mutual exclusion, volatile ensures visibility',
        'No difference',
        'volatile is faster',
        'synchronized is deprecated'
      ],
      correct: 0
    },
    {
      question: 'What is a CompletableFuture?',
      options: [
        'A class for asynchronous programming',
        'A completed task',
        'A future date',
        'A thread pool'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of @FunctionalInterface annotation?',
      options: [
        'To indicate an interface has exactly one abstract method',
        'To make interface functional',
        'To create functions',
        'To define methods'
      ],
      correct: 0
    },
    {
      question: 'What is method reference in Java 8?',
      options: [
        'A shorthand for lambda expressions',
        'A way to call methods',
        'A reference variable',
        'A pointer to method'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between ConcurrentHashMap and Hashtable?',
      options: [
        'ConcurrentHashMap allows concurrent reads, Hashtable locks entire map',
        'No difference',
        'Hashtable is faster',
        'ConcurrentHashMap is deprecated'
      ],
      correct: 0
    },
    {
      question: 'What is a ThreadLocal variable?',
      options: [
        'A variable that is local to each thread',
        'A global variable',
        'A static variable',
        'A final variable'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of @Autowired in Spring?',
      options: [
        'To inject dependencies automatically',
        'To create beans',
        'To wire cables',
        'To connect databases'
      ],
      correct: 0
    }
  ],

  // ==================== PYTHON BASIC ====================
  'python-basic': [
    {
      question: 'What is the correct way to print in Python?',
      options: ['print("Hello")', 'console.log("Hello")', 'echo "Hello"', 'System.out.println("Hello")'],
      correct: 0
    },
    {
      question: 'Which keyword is used to define a function in Python?',
      options: ['function', 'def', 'func', 'define'],
      correct: 1
    },
    {
      question: 'What is the correct file extension for Python files?',
      options: ['.python', '.py', '.pt', '.pyt'],
      correct: 1
    },
    {
      question: 'How do you create a variable in Python?',
      options: ['var x = 5', 'int x = 5', 'x = 5', 'let x = 5'],
      correct: 2
    },
    {
      question: 'Which data type is used for text in Python?',
      options: ['text', 'string', 'str', 'char'],
      correct: 2
    },
    {
      question: 'What is the output of: print(2 + 3)?',
      options: ['23', '5', 'Error', '2+3'],
      correct: 1
    },
    {
      question: 'How do you create a comment in Python?',
      options: ['// comment', '/* comment */', '# comment', '<!-- comment -->'],
      correct: 2
    },
    {
      question: 'Which operator is used for exponentiation?',
      options: ['^', '**', 'exp', 'pow'],
      correct: 1
    },
    {
      question: 'What is the correct way to create a list?',
      options: ['list = (1, 2, 3)', 'list = {1, 2, 3}', 'list = [1, 2, 3]', 'list = <1, 2, 3>'],
      correct: 2
    },
    {
      question: 'How do you check the type of a variable?',
      options: ['typeof(x)', 'type(x)', 'x.type()', 'gettype(x)'],
      correct: 1
    }
  ],

  // ==================== PYTHON INTERMEDIATE ====================
  'python-intermediate': [
    {
      question: 'What is a list comprehension?',
      options: [
        'A concise way to create lists',
        'A way to compress lists',
        'A list method',
        'A list type'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between a list and a tuple?',
      options: [
        'Lists are mutable, tuples are immutable',
        'No difference',
        'Tuples are faster',
        'Lists cannot store numbers'
      ],
      correct: 0
    },
    {
      question: 'What is a dictionary in Python?',
      options: [
        'A collection of key-value pairs',
        'A book of words',
        'An ordered list',
        'A set of values'
      ],
      correct: 0
    },
    {
      question: 'What does the "lambda" keyword do?',
      options: [
        'Creates an anonymous function',
        'Creates a loop',
        'Defines a class',
        'Imports a module'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of *args in a function?',
      options: [
        'To accept variable number of arguments',
        'To multiply arguments',
        'To create pointers',
        'To define required arguments'
      ],
      correct: 0
    },
    {
      question: 'What is a generator in Python?',
      options: [
        'A function that yields values one at a time',
        'A random number generator',
        'A class generator',
        'A file generator'
      ],
      correct: 0
    },
    {
      question: 'What does the "with" statement do?',
      options: [
        'Ensures proper resource management',
        'Creates a loop',
        'Defines a function',
        'Imports modules'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between "==" and "is"?',
      options: [
        '"==" compares values, "is" compares identity',
        'No difference',
        '"is" is faster',
        '"==" is deprecated'
      ],
      correct: 0
    },
    {
      question: 'What is a decorator in Python?',
      options: [
        'A function that modifies another function',
        'A design pattern',
        'A class method',
        'A variable type'
      ],
      correct: 0
    },
    {
      question: 'What does the "enumerate" function do?',
      options: [
        'Returns index and value pairs',
        'Counts elements',
        'Creates numbers',
        'Sorts a list'
      ],
      correct: 0
    }
  ],

  // ==================== PYTHON ADVANCED ====================
  'python-advanced': [
    {
      question: 'What is a metaclass in Python?',
      options: [
        'A class of a class',
        'A parent class',
        'An abstract class',
        'A final class'
      ],
      correct: 0
    },
    {
      question: 'What is the Global Interpreter Lock (GIL)?',
      options: [
        'A mutex that protects Python objects',
        'A global variable',
        'A security feature',
        'A compilation flag'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of __slots__?',
      options: [
        'To restrict attributes and save memory',
        'To create slots',
        'To define methods',
        'To inherit classes'
      ],
      correct: 0
    },
    {
      question: 'What is a context manager?',
      options: [
        'An object that defines __enter__ and __exit__ methods',
        'A file manager',
        'A memory manager',
        'A thread manager'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between @staticmethod and @classmethod?',
      options: [
        '@classmethod receives class as first argument, @staticmethod does not',
        'No difference',
        '@staticmethod is faster',
        '@classmethod is deprecated'
      ],
      correct: 0
    },
    {
      question: 'What is monkey patching?',
      options: [
        'Dynamically modifying a class or module at runtime',
        'Fixing bugs',
        'Testing code',
        'Debugging'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of asyncio?',
      options: [
        'To write asynchronous code',
        'To create threads',
        'To handle files',
        'To manage memory'
      ],
      correct: 0
    },
    {
      question: 'What is a descriptor in Python?',
      options: [
        'An object that defines __get__, __set__, or __delete__',
        'A description string',
        'A documentation tool',
        'A type hint'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between deepcopy and copy?',
      options: [
        'deepcopy creates independent copy, copy creates shallow copy',
        'No difference',
        'copy is faster',
        'deepcopy is deprecated'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of __new__ method?',
      options: [
        'To create a new instance of a class',
        'To initialize an instance',
        'To delete an instance',
        'To copy an instance'
      ],
      correct: 0
    }
  ],

  // ==================== C++ BASIC ====================
  'cpp-basic': [
    {
      question: 'What is the correct way to declare a variable in C++?',
      options: ['int x;', 'var x;', 'x = int;', 'declare x;'],
      correct: 0
    },
    {
      question: 'Which header file is used for input/output?',
      options: ['<stdio.h>', '<iostream>', '<io.h>', '<input.h>'],
      correct: 1
    },
    {
      question: 'What is the correct syntax to output "Hello" in C++?',
      options: ['print("Hello")', 'cout << "Hello"', 'System.out.println("Hello")', 'echo "Hello"'],
      correct: 1
    },
    {
      question: 'Which operator is used to access members of a class?',
      options: ['->', '.', '::', '->*'],
      correct: 1
    },
    {
      question: 'What is the size of int in C++ (typically)?',
      options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on compiler'],
      correct: 3
    },
    {
      question: 'Which keyword is used to define a constant?',
      options: ['constant', 'const', 'final', 'static'],
      correct: 1
    },
    {
      question: 'What is the correct way to create a comment?',
      options: ['# comment', '<!-- comment -->', '// comment', '/* comment'],
      correct: 2
    },
    {
      question: 'Which loop is guaranteed to execute at least once?',
      options: ['for', 'while', 'do-while', 'foreach'],
      correct: 2
    },
    {
      question: 'What is the return type of main() function?',
      options: ['void', 'int', 'char', 'float'],
      correct: 1
    },
    {
      question: 'Which operator is used for dynamic memory allocation?',
      options: ['malloc', 'alloc', 'new', 'create'],
      correct: 2
    }
  ],

  // ==================== C++ INTERMEDIATE ====================
  'cpp-intermediate': [
    {
      question: 'What is a pointer in C++?',
      options: [
        'A variable that stores memory address',
        'A pointing device',
        'A reference',
        'A constant'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between struct and class?',
      options: [
        'struct members are public by default, class members are private',
        'No difference',
        'struct is faster',
        'class cannot have methods'
      ],
      correct: 0
    },
    {
      question: 'What is a constructor?',
      options: [
        'A special method called when object is created',
        'A method to construct strings',
        'A building tool',
        'A destructor'
      ],
      correct: 0
    },
    {
      question: 'What is operator overloading?',
      options: [
        'Giving new meaning to existing operators',
        'Using too many operators',
        'Overloading the system',
        'Creating new operators'
      ],
      correct: 0
    },
    {
      question: 'What is a virtual function?',
      options: [
        'A function that can be overridden in derived class',
        'A function that does not exist',
        'A pure function',
        'A static function'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of "this" pointer?',
      options: [
        'Points to the current object',
        'Points to parent class',
        'Points to next object',
        'Points to previous object'
      ],
      correct: 0
    },
    {
      question: 'What is a template in C++?',
      options: [
        'A blueprint for creating generic classes/functions',
        'A design pattern',
        'A file template',
        'A class template'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between delete and delete[]?',
      options: [
        'delete for single object, delete[] for arrays',
        'No difference',
        'delete[] is faster',
        'delete is deprecated'
      ],
      correct: 0
    },
    {
      question: 'What is a friend function?',
      options: [
        'A function that can access private members of a class',
        'A friendly function',
        'A public function',
        'A static function'
      ],
      correct: 0
    },
    {
      question: 'What is inheritance in C++?',
      options: [
        'Deriving a class from another class',
        'Inheriting money',
        'Copying code',
        'Including files'
      ],
      correct: 0
    }
  ],

  // ==================== C++ ADVANCED ====================
  'cpp-advanced': [
    {
      question: 'What is RAII (Resource Acquisition Is Initialization)?',
      options: [
        'A programming idiom for resource management',
        'A design pattern',
        'A memory allocation technique',
        'A compilation flag'
      ],
      correct: 0
    },
    {
      question: 'What is a smart pointer?',
      options: [
        'A pointer that automatically manages memory',
        'An intelligent pointer',
        'A fast pointer',
        'A pointer to smart objects'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between unique_ptr and shared_ptr?',
      options: [
        'unique_ptr has exclusive ownership, shared_ptr allows shared ownership',
        'No difference',
        'shared_ptr is faster',
        'unique_ptr is deprecated'
      ],
      correct: 0
    },
    {
      question: 'What is move semantics?',
      options: [
        'Transferring resources instead of copying',
        'Moving objects in memory',
        'A design pattern',
        'A compilation optimization'
      ],
      correct: 0
    },
    {
      question: 'What is a lambda expression in C++11?',
      options: [
        'An anonymous function object',
        'A Greek letter',
        'A loop structure',
        'A class definition'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of std::forward?',
      options: [
        'Perfect forwarding in template functions',
        'Moving forward in code',
        'Forwarding pointers',
        'Sending data forward'
      ],
      correct: 0
    },
    {
      question: 'What is a variadic template?',
      options: [
        'A template that accepts variable number of arguments',
        'A variable template',
        'A template with variations',
        'A template array'
      ],
      correct: 0
    },
    {
      question: 'What is the difference between std::vector and std::array?',
      options: [
        'vector is dynamic, array is fixed size',
        'No difference',
        'array is faster',
        'vector is deprecated'
      ],
      correct: 0
    },
    {
      question: 'What is a memory leak?',
      options: [
        'Memory that is allocated but not freed',
        'Memory that leaks out',
        'A hardware problem',
        'A compilation error'
      ],
      correct: 0
    },
    {
      question: 'What is the purpose of constexpr?',
      options: [
        'To evaluate expressions at compile time',
        'To create constants',
        'To express constraints',
        'To define expressions'
      ],
      correct: 0
    }
  ]
};

// Get current exam
const examId = localStorage.getItem('currentExam') || 'java-basic';
const questions = questionBank[examId] || questionBank['java-basic'];

// Exam state
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);

// Update exam title
document.getElementById('examTitle').textContent = examId.replace('-', ' ').toUpperCase() + ' Exam';

// Load question
function loadQuestion() {
  const question = questions[currentQuestion];
  
  // Update question number and progress
  document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById('progressPercentage').textContent = `${Math.round(progress)}%`;
  document.getElementById('progressFill').style.width = `${progress}%`;
  
  // Update question text
  document.getElementById('questionText').textContent = question.question;
  
  // Load options
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    if (userAnswers[currentQuestion] === index) {
      optionDiv.classList.add('selected');
    }
    optionDiv.textContent = option;
    optionDiv.onclick = () => selectOption(index);
    optionsContainer.appendChild(optionDiv);
  });
  
  // Update navigation buttons
  document.getElementById('prevBtn').disabled = currentQuestion === 0;
  
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = currentQuestion === questions.length - 1 ? 'Submit' : 'Next';
  
  // Update Next button style based on answer selection
  updateNextButtonState();
}

// Update Next button state
function updateNextButtonState() {
  const nextBtn = document.getElementById('nextBtn');
  const hasAnswer = userAnswers[currentQuestion] !== null;
  
  if (hasAnswer) {
    nextBtn.classList.remove('btn-disabled');
    nextBtn.classList.add('btn-primary');
  } else {
    nextBtn.classList.remove('btn-primary');
    nextBtn.classList.add('btn-disabled');
  }
}

// Select option
function selectOption(index) {
  userAnswers[currentQuestion] = index;
  loadQuestion();
}

// Next question
function nextQuestion() {
  // Validate: Must select an answer before proceeding
  if (userAnswers[currentQuestion] === null) {
    alert('⚠️ Please select an answer before proceeding!');
    return;
  }

  if (currentQuestion === questions.length - 1) {
    // Submit exam
    submitExam();
  } else {
    currentQuestion++;
    loadQuestion();
  }
}

// Previous question
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

// Submit exam
function submitExam() {
  // Calculate score
  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      score++;
    }
  });
  
  // Save results
  localStorage.setItem('examScore', score);
  localStorage.setItem('examTotal', questions.length);
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  localStorage.setItem('examQuestions', JSON.stringify(questions)); // Save questions for review
  
  // Redirect to results
  window.location.href = 'result.html';
}

// Initialize
loadQuestion();
