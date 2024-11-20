var letra = prompt("Digite o seu sexo de acordo com as seguinte letras M = masculino ou F = feminino: ")


if (letra == "a" || letra == "e"|| letra == "i"|| letra == "o"|| letra == "u") {
    console.log("Vogal" + letra)
    alert("Vogal" + letra)
} else {
    console.log("Consoante")
    alert("Consoante")
}