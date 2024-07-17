document.querySelector("#calculate").addEventListener("click", () => {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height && weight) {
    let bmi = calculateBMI(height, weight);
    displayResults(bmi);
  } else {
    alert("Пожалуйста укажите рост и вес");
  }
});

function calculateBMI(height, weight) {
  let heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function displayResults(bmi) {
  let interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Недостаточный вес";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Нормальный вес";
  } else if (bmi >= 25 && bmi <= 29.9) {
    interpretation = "Избыточный вес";
  } else {
    interpretation = "Ожирение";
  }

  document.querySelector("#bmi").textContent = `BMI: ${bmi}`;
  document.querySelector("#interpretation").textContent = interpretation;
}
