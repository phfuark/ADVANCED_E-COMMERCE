// Captura o ID do produto da URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Busca o produto no banco de dados
const product = window.database.find(p => p.idProduto == productId);

if (product) {
    // Exibe os dados do produto
    document.querySelector(".product-name").innerText = product.tituloProduto;
    document.querySelector(".product-description").innerText = product.descricao;
    document.querySelector(".product-price").innerText = `R$ ${product.preco.toFixed(2)} (NO PIX)`;
    document.querySelector(".product-image").src = product.imagemProduto.img1;
} else {
    console.error("Produto não encontrado!");
}
