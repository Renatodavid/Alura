'use strict';
let perguntas = [
    "Qual é a capital da França?",
    "Qual é a cor do céu em um dia claro?",
    "Qual é o planeta mais próximo do sol?"
];

let respostas = [
    ["Paris", "Londres", "Berlim"],
    ["Azul", "Verde", "Vermelho"],
    ["Mercúrio", "Vênus", "Terra"]
];

let indicePergunta = 0;
let tentativasRestantes = 3;

function exibirPergunta() {
    document.getElementById("pergunta").innerText = perguntas[indicePergunta];

    let opcoesHTML = "";
    for (let i = 0; i < respostas[indicePergunta].length; i++) {
        opcoesHTML += `<input type="radio" name="opcao" value="${i}"> ${respostas[indicePergunta][i]}<br>`;
    }
    document.getElementById("opcoes").innerHTML = opcoesHTML;
}

function verificarResposta() {
    let respostaUsuario = document.getElementById("respostaUsuario").value;
    if (respostaUsuario !== "") {
        let respostaCorreta = false;
        
        while (tentativasRestantes > 0 && !respostaCorreta) {
            switch (indicePergunta) {
                case 0:
                    if (respostaUsuario.toLowerCase() === respostas[indicePergunta][0].toLowerCase()) {
                        respostaCorreta = true;
                    }
                    break;
                case 1:
                    if (respostaUsuario.toLowerCase() === respostas[indicePergunta][0].toLowerCase()) {
                        respostaCorreta = true;
                    }
                    break;
                case 2:
                    if (respostaUsuario.toLowerCase() === respostas[indicePergunta][0].toLowerCase()) {
                        respostaCorreta = true;
                    }
                    break;
                default:
                    console.log("Ocorreu um erro.");
            }

            if (!respostaCorreta) {
                tentativasRestantes--;
                if (tentativasRestantes > 0) {
                    alert(`Resposta incorreta. Você tem mais ${tentativasRestantes} tentativa(s).`);
                  
                } else {
                    alert("Suas tentativas acabaram. A resposta correta era " + respostas[indicePergunta][0] + ".");
                   
                }   
            }
        }

        if (respostaCorreta) {
            alert("Resposta correta!");
            proximaPergunta();
        } else {
            reiniciarJogo();
        }
    } else {
        alert("Por favor digite.");

    }
}

function proximaPergunta() {
    if (indicePergunta < perguntas.length - 1) {
        indicePergunta++;
        exibirPergunta();
    } else {
        alert("Parabéns! Você acertou todas as perguntas!");
        window.location.href = "https://github.com/Renatodavid/Alura/tree/main/7DaysOfCode"; // Redireciona para o seu GitHub
    }
}


function reiniciarJogo() {
    indicePergunta = 0;
    tentativasRestantes = 4;
    exibirPergunta();
}

// Iniciar o jogo quando a página carrega
window.onload = exibirPergunta;