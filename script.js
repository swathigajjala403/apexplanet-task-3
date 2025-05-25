// QUIZ SCRIPT
const questions = [
  {
    question: "What is the capital of India?",
    answers: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correct: "Delhi"
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "2", "5"],
    correct: "4"
  }
];

let current = 0;
const questionEl = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const result = document.getElementById("result");

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  answers.forEach((btn, i) => {
    btn.textContent = q.answers[i];
    btn.onclick = () => checkAnswer(q.answers[i], q.correct);
  });
}

function checkAnswer(selected, correct) {
  result.textContent = selected === correct ? "✅ Correct!" : "❌ Wrong!";
  setTimeout(() => {
    current++;
    if (current < questions.length) {
      result.textContent = "";
      showQuestion();
    } else {
      questionEl.textContent = "Quiz Finished!";
      document.querySelector(".quiz-container ul").style.display = "none";
    }
  }, 1000);
}

showQuestion();

// JOKE API SCRIPT
async function getJoke() {
  const jokeEl = document.getElementById("joke");
  jokeEl.textContent = "Loading...";
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeEl.textContent = `${data.setup} — ${data.punchline}`;
  } catch {
    jokeEl.textContent = "Failed to fetch joke.";
  }
}
