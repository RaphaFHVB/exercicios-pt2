var nota1 = parseFloat(prompt("Digite a nota: "))
var nota2 = parseFloat(prompt("Digite a nota: "))
var media

media = nota1 + nota2 /2



if (media == 10) {
    console.log(true)
    console.log("Passou com distinção: " + nota1)
    alert("Passou com distinção: " + nota1)



}else if (media >= 6) {
    console.log(true)
    console.log("Pasou de ano: " + nota2)
    alert("Pasou de ano: " + nota2)
}else{

    console.log(true)
    console.log("Reprovado!!!: " + nota2)
    alert("Reprovado!!!: " + nota2)
}
