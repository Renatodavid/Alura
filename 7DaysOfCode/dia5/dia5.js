var foodItems = [];

document.getElementById('addBtn').addEventListener('click', showModal);
document.getElementById('noBtn').addEventListener('click', showList);
document.getElementById('yesBtn').addEventListener('click', addFood);

function showModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function showList() {
  document.getElementById('foodList').innerHTML = ''; // Limpa a lista
  foodItems.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.textContent = item.name + ' - Categoria: ' + item.category;
    document.getElementById('foodList').appendChild(listItem);
  });
  document.getElementById('showListBtn').style.display = 'none';
  document.getElementById('foodList').style.display = 'block';
}

function addFood() {
  closeModal();
  var foodName = prompt('Qual comida você deseja adicionar?');
  if (foodName !== null && foodName.trim() !== '') {
    var category = prompt('Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, álcool)');
    if (category !== null && category.trim() !== '') {
      foodItems.push({ name: foodName, category: category });
      if (foodItems.length >= 10) {
        document.getElementById('addBtn').style.display = 'none';
        document.getElementById('showListBtn').style.display = 'block';
      }
    }
  }
}
