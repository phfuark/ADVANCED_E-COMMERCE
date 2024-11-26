export function loadProducts(productList, load) {
    /* carrega os produtos na home e na pagina de prododus*/
  
    productList.forEach((produto) => {
      const valParcela = (produto.preco / 10).toFixed(2);
      const html = `
        <div class="product-card" id="prod${produto.codigoProduto}">
          <div>
            <img src="${produto.imagemProduto.img1}" alt="${produto.tituloProduto}" />
          </div>
          <div class="product-card-info-container">
            <h2 class="product-card-title" title="${produto.tituloProduto}">
              ${produto.tituloProduto}
            </h2>
            <h4 class="product-card-reference">Cod. ${produto.codigoProduto}</h4>
            <h3 class="product-card-price">R$ ${produto.preco.toFixed(2)}</h3>
            <h4 class="product-card-installment">
              10x de R$ ${valParcela} s/juros
            </h4>
          </div>
          <a href="./product.html">
            <button id="btn${produto.codigoProduto}" class="product-card-btn">COMPRAR</button>
          </a>
        </div>
      `;
      document.getElementById('product-container').innerHTML += html;
    });  
  }
  
  // captura o codigo/id do produto
  export function getProdId(){
    let itens = document.querySelectorAll(".idprod")
    console.log(itens)
    itens.forEach(item => item.addEventListener('click',(evento)=>{
        let prodID = evento.target.id
        localStorage.setItem('prodId',prodID)
        
    }))
  }
  
  // localiza o produto na base de dados
  export function findProduct(productList, productId){
    let produto = productList.find(produto => produto.codigoProduto == productId)
    return produto
  }
  
  //carrega o produto na pagina do produto
  
  export function loadProduct(produto,selecaoProduto){
  
  const productCategory = document.querySelector("#product-category");
  productCategory.innerText = `${produto.categoriaProduto}`;
  
  const productTitle = document.querySelector("#product-title")
  
  productTitle.children[0].innerText = `COD: ${produto.codigoProduto}`
  productTitle.children[1].innerText = `${produto.tituloProduto}`
  
  
   const HTML = `<div class="product_images_container">
  
   <div class="images_selector">
  
     <i class="bi bi-chevron-double-up"></i>
   <ul>
     <li><img src="${produto.imagemProduto.img1}" alt="" class="product_thumb"></li>
     <li><img src="${produto.imagemProduto.img2}"" alt="" class="product_thumb"></li>
     <li><img src="${produto.imagemProduto.img3}"" alt="" class="product_thumb"></li>
     <li><img src="${produto.imagemProduto.img4}"" alt="" class="product_thumb"></li>
   </ul>
   <i class="bi bi-chevron-double-down"></i>
   </div>
   <div class="images_main">
     <img src="${produto.imagemProduto.img1}" alt="">
   </div>
  </div>
  
  
  <div class="product_description_container">
   <h3 class="main-text">
     Descrição
  
   </h3>
   <p class="product_description">
     ${produto.descricao}
   </p>
  </div>`
  selecaoProduto.innerHTML = HTML
  
  const price = document.querySelector(".product_price_container")
  const parcela = (produto.preco/10).toFixed(2)
  price.children[0].innerText = `R$ ${produto.preco.toFixed(2)}`
  price.children[1].innerText = `Ou em ate 10x sem juros de R$ ${parcela} no cartão de credito`
  
  
  
  }
  
  // Calcula o total do carrinho
export function cartTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.preco * item.quantity, 0);
}

// Renderiza os itens no carrinho
export function loadCartItems(cartItems, cartItemsHTML) {
  cartItemsHTML.innerHTML = ""; // Limpa a lista antes de renderizar

  if (cartItems.length === 0) {
      cartItemsHTML.innerHTML = "<p>Seu carrinho está vazio</p>";
      return;
  }

  cartItems.forEach(item => {
      const html = `
          <div class="cart_item" id="${item.codigoProduto}">
              <div class="cart_item_main_img">
                  <img src="${item.imagemProduto.img1}" alt="${item.tituloProduto}">
              </div>
              <div class="cart_item_info">
                  <p>${item.tituloProduto}</p>
                  <p>R$ ${item.preco} <span>Un.</span></p>
                  <h3>R$ ${(item.preco * item.quantity).toFixed(2)}</h3>
                  <div class="cart_item_qtd_selector">
                      <button class="decrease" data-id="${item.codigoProduto}">-</button>
                      <span>${item.quantity}</span>
                      <button class="increase" data-id="${item.codigoProduto}">+</button>
                      <button class="remove" data-id="${item.codigoProduto}">Remover</button>
                  </div>
              </div>
          </div>
      `;
      cartItemsHTML.innerHTML += html;
  });

  // Atualiza o valor total
  updateCartTotal(cartItems);
}

// Atualiza o preço total no HTML
export function updateCartTotal(cartItems) {
  const total = cartTotal(cartItems);
  localStorage.setItem("totalValue", total);
  const totalElement = document.querySelector(".total.container-flex:nth-child(3) h3:nth-child(2)");
  if (totalElement) {
      totalElement.innerHTML = `R$ ${total.toFixed(2)}`;
  }
}

// Gerencia ações de remoção e alteração de quantidade
export function setupCartActions(cartItems, cartItemsHTML) {
  cartItemsHTML.addEventListener("click", (event) => {
      const button = event.target;
      const itemId = button.dataset.id;
      const itemIndex = cartItems.findIndex(item => item.codigoProduto === itemId);

      if (button.classList.contains("remove")) {
          // Remove o item
          cartItems.splice(itemIndex, 1);
      } else if (button.classList.contains("increase")) {
          // Aumenta a quantidade
          cartItems[itemIndex].quantity += 1;
      } else if (button.classList.contains("decrease")) {
          // Diminui a quantidade (mínimo de 1)
          if (cartItems[itemIndex].quantity > 1) {
              cartItems[itemIndex].quantity -= 1;
          }
      }

      // Atualiza o localStorage e re-renderiza o carrinho
      localStorage.setItem("listaCompras", JSON.stringify(cartItems));
      loadCartItems(cartItems, cartItemsHTML);
  });
}

// Finaliza a compra
export function shop(pedidos) {
  const order = {
      id: pedidos.length > 0 ? pedidos[pedidos.length - 1].id + 1 : 1,
      items: JSON.parse(localStorage.getItem("listaCompras")),
      totalValue: parseFloat(localStorage.getItem("totalValue")),
      date: new Date().toISOString()
  };

  pedidos.push(order);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
  alert("Pedido realizado com sucesso!");
  localStorage.removeItem("listaCompras");
  localStorage.removeItem("totalValue");
  window.location = "./index.html";
}
