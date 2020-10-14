const products = [
  {
    id: 1,
    imageSrc: "./assets/images/products/mountain-bike.png",
    name: "Mountain Bike Everest",
    category: "bike",
    price: "R$ 2250,00",
  },
  {
    id: 2,
    imageSrc: "./assets/images/products/speed-bike.png",
    name: "Speed Bike Emigrantes",
    category: "bike",
    price: "R$ 5640,00",
  },
  {
    id: 3,
    imageSrc: "./assets/images/products/classic-bike.png",
    name: "Chinatown Classic Bike",
    category: "bike",
    price: "R$ 799,90",
  },
  {
    id: 4,
    imageSrc: "./assets/images/products/gloves.png",
    name: "Luvas Tyson",
    category: "equipment",
    price: "R$ 189,90",
  },
  {
    id: 5,
    imageSrc: "./assets/images/products/squeezer.png",
    name: "Squeezer Squirtle",
    category: "equipment",
    price: "R$ 30,00",
  },
  {
    id: 6,
    imageSrc: "./assets/images/products/helmet.png",
    name: "Capacete Dragon Born",
    category: "equipment",
    price: "R$ 650,90",
  },
];

const getProducts = () => {
  return [...products];
};

export { getProducts };
