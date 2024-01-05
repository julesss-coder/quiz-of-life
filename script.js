const correctAnswers = {
  q1: "A",
  q2: "B",
  q3: "A",
  q4: "B",
  q5: "B",
};

const quotes = [
  "What are the three miracles most likely to happen to you today?",
  "When they say 'Be yourself,' which self do they mean?",
  "You need regular doses of unreasonable beauty, sublime anomalies, beguiling ephemera, and inexplicable joys.",
  "Thanks to impermanence, everything is possible. - Thich Nhat Hanh",
  "Bear in mind that you are the Chosen One, and so is everyone else.", 
  "Change is good - you go first.",
  "A moral code will corrupt its users unless it ensures that their primary motivation for being good is because it's fun.",
  "For best results, break the new rules as skillfully as you break the old rules, and periodically break the way you break all the rules."
];


const form = document.querySelector(".quiz-form");
const quizResult = document.querySelector(".quiz-result");
const percentageEl = document.querySelector(".percentage");
const quote = document.querySelector(".quote");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;

  const formData = new FormData(form);
  for (const [question, answer] of formData.entries()) {
    if (correctAnswers[question] === answer) {
      score++;
    }
  }

  let percentage = score/5 * 100;
  scrollTo(0, 0);

  if (quizResult.classList.contains("d-none") === true) {
    quizResult.classList.toggle("d-none");
  }

  let index = Math.floor(Math.random() * 8);
  quote.textContent = quotes[index];

  let base = 0;

  let timer = setInterval(() => {
    base++;
    percentageEl.textContent = `${base}%`;
    if (base === percentage) {
      clearInterval(timer);
    }
  }, 10);
});
