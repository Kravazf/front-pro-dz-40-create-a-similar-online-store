const initialProducts = [
  {
    nameProduct: 'Iphone 14',
    imgProduct: 'images/iphone14.jpg',
    category: 'Mobile Phones',
		price: 999,
    description: 'Apple iPhone 14 Pro 128GB (Deep Purple)',
    videoUrl: 'https://youtu.be/tfZi4vVB2qM'
  },
  {
    nameProduct: 'Iphone 13',
    imgProduct: 'images/iphone13.jpg',
    category: 'Mobile Phones',
		price: 950,
    description: 'Apple iPhone 13 256GB (Blue)',
    videoUrl: 'https://youtu.be/ngJD5j7YbbE'
  },
  {
    nameProduct: 'Iphone 12',
    imgProduct: 'images/iphone12.jpg',
    category: 'Mobile Phones',
		price: 800,
    description: 'Apple iPhone 12 256GB (Purple)',
    videoUrl: 'https://youtu.be/kdPnauqWZms'
  },
  {
    nameProduct: 'AMD Ryzen',
    imgProduct: 'images/AMDRyzen.webp',
    category: 'Desktops',
		price: 1100,
    description: 'Системний блок QUBE Ігровий QB i5 11400F GTX 1660 SUPER 6GB 1622',
    videoUrl: 'https://youtu.be/LkesphDyB_w'
  },
  {
    nameProduct: 'ARTLINE Gaming X72v06',
    imgProduct: 'images/ARTLINEGamingX72v06.webp',
    category: 'Desktops',
		price: 1200,
    description: 'Комп\'ютер ARTLINE Gaming X72v06',
    videoUrl: 'https://youtu.be/1ROW9w1aFFs'
  },
  {
    nameProduct: 'IntelCore i5-11400F',
    imgProduct: 'images/IntelCorei5-11400F.webp',
    category: 'Desktops',
		price: 1300,
    description: 'Ігровий ПК AMD Ryzen 5 3600 (6(12) ядер по 3.6-4.2 GHz) NEW / 16GB DDR4 NEW / 500GB SSD NEW / GeForce GTX 1060, 6 GB GDDR5, 192-bit / 500W NEW б/в',
    videoUrl: 'https://youtu.be/-peR-lW4E98'
  },
  {
    nameProduct: 'Acer Aspire 7',
    imgProduct: 'images/AcerAspire7.webp',
    category: 'Laptops',
		price: 1100,
    description: 'Ноутбук Acer Aspire 7 A715-42G-R0VS (NH.QBFEU.00A) Charcoal Black / AMD Ryzen 5 5500U / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
    videoUrl: 'https://youtu.be/rHEv34VHSjg'
  },
  {
    nameProduct: 'ASUS Laptop X515EA-BQ2066',
    imgProduct: 'images/ASUSLaptopX515EA-BQ2066.webp',
    category: 'Laptops',
		price: 900,
    description: 'Ноутбук ASUS Laptop X515EA-BQ2066 (90NB0TY1-M00VF0) Slate Grey / 15.6" IPS Full HD / Intel Core i3-1115G4 / RAM 12 ГБ / SSD 512 ГБ',
    videoUrl: 'https://youtu.be/m0m5NUICwP0'
  },
  {
    nameProduct: 'Lenovo Idea Pad 3',
    imgProduct: 'images/LenovoIdeaPad3.webp',
    category: 'Laptops',
		price: 770,
    description: 'Ноутбук Lenovo IdeaPad 3 15IAU7 (82RK00FHRA) Arctic Grey / 15.6" IPS Full HD / Intel Core i5-1235U / RAM 16 ГБ / SSD 512 ГБ',
    videoUrl: 'https://youtu.be/NvVFETD72pg'
  }
];

let currentProducts = [...initialProducts];

function generateCategoryElements(products) {
  const categoriesContainer = document.querySelector('.categories');
  categoriesContainer.textContent = '';

  const categoryTitle = document.createElement('h3');
  categoryTitle.innerText = 'Products catalogue:';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('category-list');

  const categories = [...new Set(products.map(product => product.category))];

  categories.forEach(category => {
    const listItem = document.createElement('li');
    listItem.classList.add('category-item');

    const title = document.createElement('h4');
    title.textContent = category;

    listItem.appendChild(title);
    categoryList.appendChild(listItem);

    listItem.addEventListener('click', () => {
      renderProductsByCategory(category);
    });
  });

  categoriesContainer.appendChild(categoryTitle);
  categoriesContainer.appendChild(categoryList);
}

function renderProductsByCategory(category) {
  const productsContainer = document.querySelector('.products');
  productsContainer.textContent = '';

  const filteredProducts = currentProducts.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

function createProductCard(item) {
  const cardProduct = document.createElement('div');
  cardProduct.classList.add('cardProduct');

  const title = document.createElement('h4');
  title.innerText = item.nameProduct;

  const imgProduct = document.createElement('img');
  imgProduct.classList.add('img');
  imgProduct.src = item.imgProduct;

  cardProduct.append(title, imgProduct);

  cardProduct.addEventListener('click', () => {
    const productInfo = createProductInfo(item);
    const productInfoContainer = document.querySelector('.product-info');
    productInfoContainer.innerHTML = '';
    productInfoContainer.appendChild(productInfo);
  });

  return cardProduct;
}

function createProductInfo(item) {
  const CardProductsInfo = document.createElement('div');
  CardProductsInfo.classList.add('cardProduct');

  const productsTitle = document.createElement('h3');
  productsTitle.innerText = `More information about ${item.nameProduct}:`;

  const textDescription = document.createElement('p');
  textDescription.innerText = item.description;

  const productInfoVideoUrl = document.createElement('a');
  productInfoVideoUrl.href = item.videoUrl;
  productInfoVideoUrl.innerText = `Watch video about: ${item.nameProduct}`;

  const wrapProductBuyButton = document.createElement('div');
  wrapProductBuyButton.classList.add('buy-button');

  const productBuyButton = document.createElement('a');
  productBuyButton.innerText = `Buy for ${item.price} $`;

  productBuyButton.addEventListener('click', () => {
    alert(`You have purchased the ${item.nameProduct}`);
    resetProgramState();
  });

  CardProductsInfo.append(productsTitle, textDescription, productInfoVideoUrl, wrapProductBuyButton);
  wrapProductBuyButton.appendChild(productBuyButton);

  return CardProductsInfo;
}

function resetProgramState() {
  currentProducts = [...initialProducts];
  generateCategoryElements(currentProducts);

  const productsContainer = document.querySelector('.products');
  productsContainer.innerHTML = '';

  const productInfoContainer = document.querySelector('.product-info');
  productInfoContainer.innerHTML = '';

  const categoriesContainer = document.querySelector('.categories');
  categoriesContainer.style.display = 'block';
}

generateCategoryElements(currentProducts);

