// script.js
const products = [
    {
        name: "Produto 1",
        image: "https://via.placeholder.com/200", // Substitua pela URL da imagem do produto
        link: "#"
    },
    {
        name: "Produto 2",
        image: "https://via.placeholder.com/200", // Substitua pela URL da imagem do produto
        link: "#"
    },
    {
        name: "Produto 3",
        image: "https://via.placeholder.com/200", // Substitua pela URL da imagem do produto
        link: "#"
    }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <a href="${product.link}" target="_blank" rel="noopener noreferrer">Comprar</a>
    `;
    productList.appendChild(productDiv);
});