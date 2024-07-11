let userInput = prompt("Введите число от 2 до 10:");
let number = parseInt(userInput);

if ((number < 2, number > 10)) {
  console.log(" Введите число от 2 до 10.");
} else {
  let multipliers = [];
  for (let i = 1; i <= 10; i++) {
    multipliers.push(i);
  }

  function displayMultiplicationTable(num) {
    for (let i = 0; i < multipliers.length; i++) {
      console.log(`${num} ${multipliers[i]} = ${num * multipliers[i]}`);
    }
  }

  displayMultiplicationTable(number);
}

//

let grades = [40, 55, 22, 89, 14, 78, 56, 47, 59];

function convertGrade(grade) {
  if (grade < 20) {
    return 1;
  } else if (grade < 40) {
    return 2;
  } else if (grade < 60) {
    return 3;
  } else if (grade < 80) {
    return 4;
  } else {
    return 5;
  }
}

for (let i = 0; i < grades.length; i++) {
  let grade = grades[i];
  let convertedGrade = convertGrade(grade);
  console.log(`${grade} баллов это ${convertedGrade}`);
}
