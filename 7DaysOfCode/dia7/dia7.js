function soma() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const resultado = num1 + num2;
    alert(`Resultado da soma: ${resultado}`);
}

function subtracao() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const resultado = num1 - num2;
    alert(`Resultado da subtração: ${resultado}`);
}

function multiplicacao() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const resultado = num1 * num2;
    alert(`Resultado da multiplicação: ${resultado}`);
}

function divisao() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    if (num2 !== 0) {
        const resultado = num1 / num2;
        alert(`Resultado da divisão: ${resultado}`);
    } else {
        alert("Não é possível dividir por zero.");
    }
}

function sair() {
    alert("Calculadora encerrada. Obrigado!");
}