// cart.js

// Recupera os itens do carrinho do localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Salva os itens no localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Adiciona um produto ao carrinho
function addToCart(productId) {
    const cart = getCart();

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        const product = database.find(p => p.id === productId);
        if (product) {
            cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
        }
    }

    saveCart(cart);
    alert("Produto adicionado ao carrinho!");
}

// Renderiza os itens no carrinho
function renderCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const product = `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Quantidade: ${item.quantity}</p>
                <p>Preço: R$ ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += product;
    });

    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Chama a função renderCart quando o carrinho é carregado
if (window.location.pathname.includes("cart.html")) {
    renderCart();
}
function addToCart(productId) {
    const cart = getCart();
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementa a quantidade apenas se o produto já estiver no carrinho
    } else {
        const product = database.find(p => p.id === productId); // Busca no banco de dados
        if (product) {
            cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 }); // Adiciona com quantidade inicial de 1
        }
    }

    saveCart(cart);
    alert("Produto adicionado ao carrinho!");
}
