document.addEventListener("DOMContentLoaded", (event) => {
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");
  const resultElement = document.getElementById("result");
  const checkButton = document.getElementById("checkButton");

  let num1, num2;

  function generateRandom(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
  }

  function generateQuestion() {
    num1 = generateRandom(10);
    num2 = generateRandom(10);
    questionElement.textContent = `Сколько будет ${num1} на ${num2}?`;
    answerElement.value = "";
    resultElement.textContent = "";
    resultElement.style.color = "red";
  }

  function checkAnswer() {
    const userAnswer = parseInt(answerElement.value);
    if (isNaN(userAnswer)) {
      resultElement.textContent = "Введите числовое значение!";
      return;
    }
    const correctAnswer = num1 * num2;
    if (userAnswer === correctAnswer) {
      resultElement.textContent = "Правильно!";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Неправильно. Попробуйте еще раз.";
    }
  }

  checkButton.addEventListener("click", checkAnswer);
  generateQuestion();
});
