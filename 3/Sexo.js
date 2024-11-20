var sexo = prompt("Digite o seu sexo de acordo com as seguinte letras M = masculino ou F = feminino: ")


if (sexo == "M" || sexo == "m") {
    console.log("Seu sexo é Masculino" + sexo)
    alert("Seu sexo é Masculino" + sexo)
} else if (sexo == "F" || sexo == "f") {
    console.log("Seu sexo é Feminino ")
    alert("Seu sexo é Feminino")
} else {
    console.log("Sexo invalido")
    alert("Sexo invalido")
}