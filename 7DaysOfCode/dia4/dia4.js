let numeroAdivinhar = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10
let tentativasMaximas = 3;
let tentativasRestantes = tentativasMaximas;

function checarPalpite() {
    const palpite = parseInt(document.getElementById("guess").value);

    if (palpite === numeroAdivinhar) {
        document.getElementById("resultado").textContent = "Parabéns! Você acertou o número!";
    } else {
        tentativasRestantes--;
        if (tentativasRestantes > 0) {
            document.getElementById("resultado").textContent = `Incorreto! Você ainda tem ${tentativasRestantes} tentativas restantes.`;
        } else {
            document.getElementById("resultado").textContent = `Suas tentativas acabaram! O número correto era ${numeroAdivinhar}.`;
            document.getElementById("guess").disabled = true; // Desabilita a entrada de palpite após o término das tentativas
        }
    }
}
