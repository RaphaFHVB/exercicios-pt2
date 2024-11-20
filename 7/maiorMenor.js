var nota1 = parseFloat(prompt("Digite o 1 numero: "))
var nota2 = parseFloat(prompt("Digite o 2 numero: "))
var nota3 = parseFloat(prompt("Digite o 3 numero: "))




if (nota1 > nota2 && nota3 > nota2) {
    console.log(true)
    console.log("numero 1 e o maior: " + nota1 + " E o numero 2 e o menor: " + nota2)
    alert("numero 1 e o maior: " + nota1 + "E o numero 2 e o menor: " + nota2)



}else if (nota1 > nota2 > nota3) {
    console.log(true)
    console.log("numero 1 e o maior: " + nota1+ " E o numero 2 e o menor: " + nota2)
    alert("numero 1 e o maior: " + nota1+ "E o numero 2 e o menor: " + nota2)



}else if (nota2 > nota3 && nota1 < nota3) {
    console.log(true)
    console.log("numero 2 e o maior: " + nota1 + " E o numero 1 e o menor: " + nota2)
    alert("numero 2 e o maior: " + nota1 + "E o numero 1 e o menor: " + nota2)



}else if (nota2 > nota1 > nota3) {
    console.log(true)
    console.log("numero 2 e o maior: " + nota1+ " E o numero 3 e o menor: " + nota2)
    alert("numero 2 e o maior: " + nota1+ "E o numero 3 e o menor: " + nota2)



}else if (nota3 > nota1 && nota2 < nota1) {
    console.log(true)
    console.log("numero 3 e o maior: " + nota1 + " E o numero 2 e o menor: " + nota2)
    alert("numero 3 e o maior: " + nota1 + "E o numero 2 e o menor: " + nota2)



}else if (nota3 > nota1 > nota2) {
    console.log(true)
    console.log("numero 3 e o maior: " + nota1+ " E o numero 2 e o menor: " + nota2)
    alert("numero 3 e o maior: " + nota1+ "E o numero 2 e o menor: " + nota2)
}else{

    console.log(true)
    console.log("invalido")
    alert("invalido")
}