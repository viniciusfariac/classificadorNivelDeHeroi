const prompt = require('readline-sync');


let nome = prompt.question("Digite o nome do heroi: ")
let xp = prompt.question("Digite o xp do heroi: ")

let nivel

while (isNaN(xp) || xp < 0) {
    console.log("Digite um valor que seja número ou positivo")
    xp = Number(prompt.question("Digite o XP do heroi: "));
}


if(xp <= 1000){
    nivel = "Ferro"
} else if(xp <= 2000){
    nivel = "Bronze"
} else if (xp <= 5000){
    nivel = "Prata"
} else if (xp <= 7000){
    nivel = "Ouro"
} else if (xp <= 8000){
    nivel = "Platina"
} else if (xp <= 9000){
    nivel = "Ascendente"
} else if (xp <= 10000){
    nivel = "Imortal"
}
else{
    nivel = "Radiante"
}

console.log(`O nome do herói é: ${nome} seu nível é: ${nivel} e seu xp ${xp}`)