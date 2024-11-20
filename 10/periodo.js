var sexo = prompt("Digite o seu periodo de acordo com as seguinte letras M = matutino ou V = vespetino e N = noturno: ")


if (sexo == "M" || sexo == "m") {
    console.log("Bom dia!!!")
    alert("Bom dia!!!")
} else if (sexo == "V" || sexo == "v") {
    console.log("Boa tarde!!! ")
    alert("Boa tarde!!!")
} else if(sexo == "N" || sexo == "n"){
    console.log("Boa noite!!!")
    alert("Boa noite!!!")
}