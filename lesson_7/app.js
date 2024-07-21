document
  .getElementById("generateButton")
  .addEventListener("click", generateNumbers);

function generateNumbers() {
  let numbers = [];
  while (numbers.length < 6) {
    let num = Math.floor(Math.random() * 99) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  for (let i = 0; i < 6; i++) {
    document.getElementById("num" + (i + 1)).textContent = numbers[i];
  }
}
