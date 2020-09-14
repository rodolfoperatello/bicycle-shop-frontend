const productListElement = document.querySelector(".product-list");
const products = [
  {
    id: 1,
    imageSrc: "./assets/images/products/mountain-bike.png",
    name: "Mountain Bike Everest",
    category: "Bike",
    price: "R$ 2250,00",
  },
  {
    id: 2,
    imageSrc: "./assets/images/products/speed-bike.png",
    name: "Speed Bike Emigrantes",
    category: "Bike",
    price: "R$ 5640,00",
  },
  {
    id: 3,
    imageSrc: "./assets/images/products/classic-bike.png",
    name: "Chinatown Classic Bike",
    category: "Bike",
    price: "R$ 799,90",
  },
  {
    id: 4,
    imageSrc: "./assets/images/products/gloves.png",
    name: "Luvas Tyson",
    category: "Gloves",
    price: "R$ 189,90",
  },
  {
    id: 5,
    imageSrc: "./assets/images/products/squeezer.png",
    name: "Squeezer Squirtle",
    category: "Squeezer",
    price: "R$ 30,00",
  },
  {
    id: 6,
    imageSrc: "./assets/images/products/helmet.png",
    name: "Capacete Dragon Born",
    category: "Helmet",
    price: "R$ 650,90",
  },
];

function showProducts() {
  let htmlStructure = "";

  for (let i = 0; i <= products.length - 1; i++) {
    const structure = `<li class="card">
      <img
        class="card__image"
        src="${products[i].imageSrc}"
        alt="Imagem ${products[i].name}"
      />
      <div class="card__info">
        <p class="card__info__text">${products[i].name}
        <span class="display--block font-size--1">${products[i].price}</span>
        </p>
        <button class="button">Adicionar ao Carrinho</button>
      </div>
    </li>
    `;

    htmlStructure += structure;
  }

  productListElement.innerHTML += htmlStructure;
}

showProducts();
