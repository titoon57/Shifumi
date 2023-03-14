let nbEtages = prompt("Saisissez le nombre d'étages que vous souhaitez :");
caractere = "1"

for (let i = 1; i <= nbEtages; i++) {
    console.log(caractere.repeat(i));
}