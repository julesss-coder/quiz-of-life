/*
map of questions and correct answers

anwers = submit form info
score = 0
for each answer in answers
  if answer is correct
    score++

*/
const correctAnswers = {
  q1: "A",
  q2: "B",
  q3: "A",
  q4: "B",
  q5: "B",
};


const form = document.querySelector(".quiz-form");
const quizResult = document.querySelector(".quiz-result");
const percentageEl = document.querySelector(".percentage");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;

  const formData = new FormData(form);
  for (const [question, answer] of formData.entries()) {
    if (correctAnswers[question] === answer) {
      score++;
    }
  }

  let percentage = (score/5 * 100).toFixed(2);
  quizResult.classList.toggle("d-none");
  percentageEl.textContent = `${percentage}%`;
});
