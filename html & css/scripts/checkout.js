import { loadCartItems, setupCartActions, shop } from "./functions.js";

let cartItems = JSON.parse(localStorage.getItem("listaCompras")) || [];
let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

const cartItemsHTML = document.querySelector("#checkout .grid_col_1");
const finalizarCompraButton = document.querySelector(".checkout_btn");

loadCartItems(cartItems, cartItemsHTML);
setupCartActions(cartItems, cartItemsHTML);

if (finalizarCompraButton) {
    finalizarCompraButton.addEventListener("click", () => shop(pedidos));
}
