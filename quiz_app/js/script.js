const quizData = [
    {
        question: 'How old is Cristiano Ronaldo',
        a: '34',
        b: '35',
        c: '36',
        d: '37',
        correct: 'c' 
    }, {
        question: 'what is the most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'which football club has the most fans in the world 2021?',
        a: 'Real Madrid',
        b: 'Barcelona',
        c: 'Manchester United',
        d: 'Chelsea',
        correct: 'a'
    }, {
        question: 'The most famous place in the word?',
        a: 'Eiffel Tower',
        b: 'Great Wall of China',
        c: 'Kremlin',
        d: 'Leaning Tower of Pisa',
        correct: 'a'
    }, {
        question: 'Who is the richest person in the world in 2021?',
        a: 'Larry Page',
        b: 'Jeff Bezos',
        c: 'Elon Musk',
        d: 'Bill Gates',
        correct: 'b'
    }
    
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});