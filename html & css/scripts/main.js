window.addEventListener("load", () => {
    // Função para renderizar os produtos
    function renderProducts() {
        const productGrid = document.getElementById("productGrid");
        const productGrid2 = document.getElementById("productGrid2");

        // Verifica se a base de dados foi carregada
        if (!window.database) {
            console.error("Erro: O database.js não foi carregado.");
            return;
        }

        // Renderiza produtos normais
        window.database.forEach(product => {
            if (product.exibirHome) {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                // Adiciona conteúdo HTML do produto
                productDiv.innerHTML = `
                    <img src="${product.imagemProduto.img1}" alt="${product.tituloProduto}">
                    <div class="name">${product.tituloProduto}</div>
                    <div class="qnt">5 uni.</div>
                    <br>
                    <div class="descricao">${product.descricao}</div>
                    <br><br> 
                    <div class="price">R$ ${product.preco.toFixed(2)} (NO PIX)</div>
                    <button>Compre Agora!</button>
                `;

                // Adiciona ao grid de produtos
                if (productGrid) {
                    productGrid.appendChild(productDiv);
                } else {
                    console.error("Erro: Elemento com ID 'productGrid' não encontrado.");
                }
            }
        });

        // Renderiza produtos em destaque
        window.database.forEach(product => {
            if (product.categoriaProduto === "Destaque") {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                // Adiciona conteúdo HTML do produto em destaque
                productDiv.innerHTML = `
                    <img src="${product.imagemProduto.img1}" alt="${product.tituloProduto}">
                    <div class="name">${product.tituloProduto}</div>
                    <div class="qnt">5 uni.</div>
                    <br>
                    <div class="descricao">${product.descricao}</div>
                    <br><br> 
                    <div class="price">R$ ${product.preco.toFixed(2)} (NO PIX)</div>
                    <button>Compre Agora!</button>
                `;

                // Adiciona ao grid de produtos em destaque
                if (productGrid2) {
                    productGrid2.appendChild(productDiv);
                } else {
                    console.error("Erro: Elemento com ID 'productGrid2' não encontrado.");
                }
            }
        });
    }

    // Chama a função para renderizar os produtos
    renderProducts();
});
