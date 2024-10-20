const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3000/api/products');
    return response.data;
};

const displayProducts = (products) => {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const card = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                        <p class="card-text">${product.description}</p>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += card;
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    displayProducts(products);

    document.getElementById('category-select').addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        const filteredProducts = products.filter(product => 
            selectedCategory === '' || product.category === selectedCategory);
        displayProducts(filteredProducts);
    });
});