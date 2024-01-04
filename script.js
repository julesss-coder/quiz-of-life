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

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;

  const formData = new FormData(form);
  for (const [q, a] of formData.entries()) {
    if (correctAnswers[q] === a) {
      score++;
    }
  }
  console.log(`Your score: ${score}/5`);
});
