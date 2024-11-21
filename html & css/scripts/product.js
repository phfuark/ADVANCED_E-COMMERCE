// Obtém o ID do produto da URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');  // Exemplo: "product.html?id=1"

// Encontra o produto no database.js
const product = products.find(item => item.id == productId);

// Preenche os elementos da página com as informações do produto
if (product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-img').src = product.image;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `Preço: R$ ${product.price.toFixed(2)}`;
    document.getElementById('product-stock').textContent = `Estoque: ${product.stock} unidades`;
} else {
    // Caso o produto não seja encontrado, exibe uma mensagem
    document.querySelector('.product-details').innerHTML = "<p>Produto não encontrado.</p>";
}

// Lógica do botão "Adicionar ao Carrinho"
document.getElementById('add-to-cart').addEventListener('click', function() {
    alert(`Produto ${product.name} adicionado ao carrinho!`);
});
