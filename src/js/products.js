const productList = document.querySelector(".product-list");
const productInfo = [
  {
    imageSrc: "./assets/images/products/mountain-bike.png",
    imageAlt: "Imagem Mountain Bike Everest",
    name: "Mountain Bike Everest",
    price: "R$ 2250,00",
  },
  {
    imageSrc: "./assets/images/products/speed-bike.png",
    imageAlt: "Imagem Speed Bike Emigrantes",
    name: "Speed Bike Emigrantes",
    price: "R$ 5640,00",
  },
  {
    imageSrc: "./assets/images/products/classic-bike.png",
    imageAlt: "Imagem Chinatown Classic Bike",
    name: "Chinatown Classic Bike",
    price: "R$ 799,90",
  },
  {
    imageSrc: "./assets/images/products/gloves.png",
    imageAlt: "Imagem Luvas Tyson",
    name: "Luvas Tyson",
    price: "R$ 189,90",
  },
  {
    imageSrc: "./assets/images/products/squeezer.png",
    imageAlt: "Imagem Squeezer Squirtle",
    name: "Squeezer Squirtle",
    price: "R$ 30,00",
  },
  {
    imageSrc: "./assets/images/products/helmet.png",
    imageAlt: "Imagem Capacete Dragon Born",
    name: "Capacete Dragon Born",
    price: "R$ 650,90",
  },
];

function showProducts() {
  let htmlStructure = "";

  for (let i = 0; i <= productInfo.length - 1; i++) {
    const structure = `<li class="card">
      <img
        class="card__image"
        src="${productInfo[i].imageSrc}"
        alt="${productInfo[i].imageAlt}"
      />
      <div class="card__info">
        <p class="card__info__text">${productInfo[i].name}<span class="display--block font-size--1">${productInfo[i].price}</span>
        </p>
        <button class="button">Adicionar ao Carrinho</button>
      </div>
    </li>
    `;

    htmlStructure += structure;
  }
  productList.innerHTML += htmlStructure;
}

showProducts();
