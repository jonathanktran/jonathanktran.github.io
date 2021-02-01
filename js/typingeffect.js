let fullText = "Hey, I'm Jonny.";
let index = 0;
let typedText = "";

(function type() {
  typedText = fullText.slice(0, ++index);

  document.querySelector(".typing").textContent = typedText;

  if (index != fullText.length) {
    setTimeout(type, 150);
  }
})();
