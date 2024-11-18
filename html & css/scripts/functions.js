export function loadProducts(productList, container) {
    productList.forEach((produto) => {
        const valParcela = (produto.preco / 10).toFixed(2);
        const html = `
            <div class="product-card" id="prod${produto.codigoProduto}">
                <div>
                    <img src="${produto.imagemProduto.img1}" alt="${produto.tituloProduto}">
                </div>
                <div class="product-card-info-container">
                    <h2 class="product-card-title" title="${produto.tituloProduto}">${produto.tituloProduto}</h2>
                    <h4 class="product-card-reference">Cod. ${produto.codigoProduto}</h4>
                    <h3 class="product-card-price">R$ ${produto.preco.toFixed(2)}</h3>
                    <h4 class="product-card-installment">10x de R$ ${valParcela} s/juros</h4>
                </div>
                <a href="./product.html">
                    <button id="btn${produto.codigoProduto}" class="product-card-btn">COMPRAR</button>
                </a>
            </div>
        `;
        container.innerHTML += html;
    });
}
