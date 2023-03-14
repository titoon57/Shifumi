let tempCelsius = parseFloat(prompt("Entrez votre température en Celsius :"));
let convertFahr = tempCelsius * (9/5) + 32

console.log("la conversion de votre température en Fahrenheit est de : " + convertFahr.toFixed(2));