function removerItem() {
    let lista = document.getElementById('lista-compras');
    let itens = lista.getElementsByTagName('li');
    let itemRemover = prompt("Qual item deseja remover?");

    let itemEncontrado = false;
    for (var i = 0; i < itens.length; i++) {
      if (itens[i].textContent.toLowerCase() === itemRemover.toLowerCase()) {
        itemEncontrado = true;
        lista.removeChild(itens[i]);
        alert("Item removido: " + itemRemover);
        break;
      }
    }

    if (!itemEncontrado) {
      alert("Não foi possível encontrar o item na lista: " + itemRemover);
    }
  }
  function adicionarItem() {
    let item = prompt("Qual item deseja adicionar?");
    let lista = document.getElementById('lista-compras');
    let novoItem = document.createElement('li');
    novoItem.textContent = item;
    lista.appendChild(novoItem);
    alert("Item adicionado: " + item);
  }