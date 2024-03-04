function encriptar() {
    let texto = document.getElementById('inputTexto').value;
    texto = texto.split('');
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                texto[i] = 'ai';
                break;
            case 'e':
                texto[i] = 'enter';
                break;
            case 'i':
                texto[i] = 'imes';
                break;
            case 'o':
                texto[i] = 'ober';
                break;
            case 'u':
                texto[i] = 'ufat';
                break;
            default:
                break;
        }
    }
    document.getElementById('conteudoTransformado').value = texto.join('');
}

function desencriptar() {
    let texto = document.getElementById('inputTexto').value;
    texto = texto.split('');
    let resultado = [];
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a' && texto[i + 1] == 'i') {
            resultado.push(texto[i]);
            resultado = 1;
        } else if (texto[i] == 'e' && texto[i + 1] == 'n' && texto[i + 2] == 't' && texto[i + 3] == 'e' && texto[i + 4] == 'r') {
            resultado.push(texto[i]);
            resultado = 1;
        } else if (texto[i] == 'i' && texto[i + 1] == 'm' && texto[i + 2] == 'e' && texto[i + 3] == 's') {
            resultado.push(texto[i]);
            resultado = 1;
        } else if (texto[i] == 'o' && texto[i + 1] == 'b' && texto[i + 2] == 'e' && texto[i + 3] == 'r') {
            resultado.push(texto[i]);
            resultado = 1;
        } else if (texto[i] == 'u' && texto[i + 1] == 'f' && texto[i + 2] == 'a' && texto[i + 3] == 't') {
            resultado.push(texto[i]);
            resultado = 1;
        } else {
            resultado.push(texto[i]);
        }
    }
    document.getElementById('conteudoTransformado').value = resultado.join('');
}

async function copiarTexto() {
    let copiarTexto = document.getElementById('inputTexto').value;
    let text = copiarTexto;
    try {
        await navigator.clipboard.writeText(text);
        alert("Texto copiado com sucesso!");
    } catch (error) {
        alert("Não foi possível copiar o texto");
    }
}

document.getElementById('botao-crip').addEventListener('click', encriptar);
document.getElementById('botao-descrip').addEventListener('click', desencriptar);
document.getElementById('botao-copiar').addEventListener('click', copiarTexto);
