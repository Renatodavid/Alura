document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let linguagem = document.getElementById('linguagem').value;

    if (nome.trim() === '' || idade.trim() === '' || linguagem.trim() === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Olá ' + nome + '! Você tem ' + idade + ' anos e gosta da linguagem de computação ' + linguagem + '.');
       
    }
});