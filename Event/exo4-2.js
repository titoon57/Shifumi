const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const colorBox = document.getElementById("color-box");
const generateButton = document.getElementById("generate-color");

generateButton.addEventListener("click", () => {
  if (!redInput.value || !greenInput.value || !blueInput.value) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const red = parseInt(redInput.value);
  const green = parseInt(greenInput.value);
  const blue = parseInt(blueInput.value);

  if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
    alert("Les valeurs doivent être comprises entre 0 et 255 !");
    return;
  }

  const color = `rgb(${red}, ${green}, ${blue})`;

  colorBox.style.backgroundColor = color;
  
  redInput.value = "";
  greenInput.value = "";
  blueInput.value = "";
});