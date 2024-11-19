// Base de dados de produtos
window.database = [
    // Produtos exibidos na home
    {
        qnt: "3 | 2",
        id: 1,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product1.png",
            img2: "./imagens/product1.png",
            img3: "./imagens/product1.png",
            img4: "./imagens/product1.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: 5,
        id: 2,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product2.png",
            img2: "./imagens/product2.png",
            img3: "./imagens/product2.png",
            img4: "./imagens/product2.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: 5,
        id: 3,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product3.png",
            img2: "./imagens/product3.png",
            img3: "./imagens/product3.png",
            img4: "./imagens/product3.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: 1,
        id: 4,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product4.png",
            img2: "./imagens/product4.png",
            img3: "./imagens/product4.png",
            img4: "./imagens/product4.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: 5,
        id: 5,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product5.png",
            img2: "./imagens/product5.png",
            img3: "./imagens/product5.png",
            img4: "./imagens/product5.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: "3 | 2",
        id: 6,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product1.png",
            img2: "./imagens/product1.png",
            img3: "./imagens/product1.png",
            img4: "./imagens/product1.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: 5,
        id: 7,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product2.png",
            img2: "./imagens/product2.png",
            img3: "./imagens/product2.png",
            img4: "./imagens/product2.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: 5,
        id: 8,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product3.png",
            img2: "./imagens/product3.png",
            img3: "./imagens/product3.png",
            img4: "./imagens/product3.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: 1,
        id: 9,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product4.png",
            img2: "./imagens/product4.png",
            img3: "./imagens/product4.png",
            img4: "./imagens/product4.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },
    {
        qnt: 5,
        id: 9,
        tituloProduto: "Peças Dry Fit",
        preco: 193.03,
        descricao: "As Peças Dry Fit com material leve e respirável, absorvendo o suor de maneira eficiente.",
        imagemProduto: {
            img1: "./imagens/product5.png",
            img2: "./imagens/product5.png",
            img3: "./imagens/product5.png",
            img4: "./imagens/product5.png"
        },
        categoriaProduto: "Roupas",
        classificacaoProduto: "Novidades",
        exibirHome: true
    },

    // Produtos exibidos na página 'product'
    {
        qnt: 10,
        id: 10,
        tituloProduto: "Jaqueta Corta-Vento",
        preco: 250.00,
        descricao: "Jaqueta corta-vento para todos os climas.",
        imagemProduto: {
            img1: "./imagens/product3.png"
        },
        categoriaProduto: "Unissex",
        exibirHome: false // Disponível apenas em products.html
    }
];
const products = [
    {
        id: 1,
        name: "Produto Exemplo",
        description: "Descrição do produto",
        price: 99.99,
        stock: 25,
        image: "img/produto1.jpg"
    },
    {
        id: 2,
        name: "Outro Produto",
        description: "Outra descrição do produto",
        price: 49.99,
        stock: 30,
        image: "img/produto2.jpg"
    }
    // Adicione outros produtos conforme necessário
];
