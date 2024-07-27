document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const charCount = document.getElementById("charCount");
  const charRemaining = document.getElementById("charRemaining");
  const maxChars = 100;

  textInput.addEventListener("input", () => {
    const currentLength = textInput.value.length;
    charCount.textContent = currentLength;
    charRemaining.textContent = maxChars - currentLength;

    if (currentLength >= maxChars) {
      textInput.value = textInput.value.substring(0, maxChars);
    }
  });
});
