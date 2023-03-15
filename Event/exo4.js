const container = document.querySelector("#container");
const generateBtn = document.querySelector("#generate-btn");

  generateBtn.addEventListener("click", function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    container.style.backgroundColor = color;
  });