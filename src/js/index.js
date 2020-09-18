import { getProducts } from "./mocks/products.js";

const productsElement = document.querySelector("#product-list");

let productsElements = "";

getProducts().forEach((products) => {
  productsElements += `
    <li class="card">
      <img
        class="card__image"
        src="${products.imageSrc}"
        alt="Imagem ${products.name}"
      />

      <div class="card__info">
        <p class="card__info__text">${products.name}
          <span class="display--block font-size--1">${products.price}</span>
        </p>

        <button class="button">Adicionar ao Carrinho</button>
      </div>
    </li>
  `;
});

productsElement.innerHTML = productsElements;
