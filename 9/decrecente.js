var nota1 = parseFloat(prompt("Digite o 1 numero: "))
var nota2 = parseFloat(prompt("Digite o 2 numero: "))
var nota3 = parseFloat(prompt("Digite o 3 numero: "))




if (nota1 > nota2 && nota3 > nota2) {
    console.log(true)
    console.log(nota1 +nota3+ nota2)
    alert(nota1 +nota3+ nota2)



}else if (nota1 > nota2 > nota3) {
    console.log(true)
    console.log(nota1 + nota2 + nota3)
    alert(nota1 + nota2 + nota3)



}else if (nota2 > nota3 && nota1 < nota3) {
    console.log(true)
    console.log(nota2+nota3+nota1)
    alert(nota2+nota3+nota1)



}else if (nota3 > nota1 && nota2 < nota1) {
    console.log(true)
    console.log(nota3+nota1+nota2)
    alert(nota3+nota1+nota2)



}else if (nota3 > nota1 > nota2) {
    console.log(true)
    console.log(nota3+nota2+nota1)
    alert(nota3+nota2+nota1)
}else{

    console.log(true)
    console.log("invalido")
    alert("invalido")
}