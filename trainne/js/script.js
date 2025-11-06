const frutas = ['banana', 'maçã', 'pera']
for (let fruta of frutas) {
    console.log(frutas)
}


const pessoa = { nome: 'Arthur', idade: 20 }
for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}


const fruits = ['banana', 'maçã', 'pera']
for (let i in frutas) {
    console.log(i, frutas[i])
}


const bolos = ['cenoura', 'chocolate', 'moramgo']
for (let bolo of bolos) {
    console.log(bolo.toUpperCase())
}


document.getElementById("btn").addEventListener("click", function () {
    const nome = document.getElementById("nome").value
    alert('ola, $`(nome)!')
})




let resultado;
document.getElementById("calcular").addEventListener("click", function () {

    switch (operacao) {
        case "1":
            resultado = num1 + num2;
            break;
        case "2":
            resultado = num1 - num2;
            break;
        case "3":
            resultado = num1 * num2;
            break;
        case "4":
            if (num2 === 0) {
                resultado = "Erro: divisão por zero";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operação inválida";

            
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;   
    
    
    alert("resultado")
});