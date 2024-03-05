const display = document.querySelector(".sua-classe-de-display");
const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const texto = document.getElementById(".btn-copiar");



function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (const [original, substituto] of matrizCodigo) {
        stringEncriptada = stringEncriptada.replaceAll(original, substituto);
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (const [original, substituto] of matrizCodigo) {
        stringDesencriptada = stringDesencriptada.replaceAll(substituto, original);
    }

    return stringDesencriptada;
}


const elementoTexto = document.getElementById("texto");

function copiar() {
    const texto = elementoTexto.value;

    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('Texto copiado com sucesso!');
            alert('Mensagem copiada com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
            alert('Erro ao copiar a mensagem. Por favor, tente novamente.');
        });
}



const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className === "light-theme") {
        this.textContent = "dark";
        
        document.querySelector('.informacao').style.color = 'rgb(5, 5, 5)';
    } else {
        this.textContent = "light";
       
        document.querySelector('.informacao').style.color = 'rgb(0, 0, 0)';
    }
    console.log('current class name:' + className);
});
