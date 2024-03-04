let btnEncriptar = document.getElementById('btnEncriptar');
let btnDesencriptar= document.getElementById('btnDesencriptar');
let copia = document.getElementById('copia');

btnDesencriptar.addEventListener('click',btnDesencriptar, false);
btnEncriptar.addEventListener('click',btnEncriptar,false);
copia.addEventListener('click',copia,false);


function encriptar(){
    let texto = document.getElementById('inputTexto').value;
    texto=texto.split('');
    for(let i=0;i<texto.length;i++){
        switch(texto[i]){
            case 'a':
                texto[i]='ai';
                break;
            case 'e':
                texto[i]='enter';
                break;
            case 'i':
                texto[i]='imes';
                break;
            case 'o':
                texto[i]='ober';
                break;
            case 'u':
                texto[i]='ufat';
                break;
            default:
                break;

        }
    }
}

function Desencriptar(){
    let texto = document.getElementById('inputTexto').value;
    
}