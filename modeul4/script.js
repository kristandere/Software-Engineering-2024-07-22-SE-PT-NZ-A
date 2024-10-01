const productContainer = document.getElementById('product-container');
const categorySelect = document.getElementById('categorySelect');

let products = [];


const fetchData = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        products = response.data;
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayProducts = (items) => {
    productContainer.innerHTML = '';
    items.forEach(product => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>$${product.price}</strong></p>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += card;
    });
};

const filterByCategory = () => {
    const selectedCategory = categorySelect.value;
    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);
    displayProducts(filteredProducts);
};

categorySelect.addEventListener('change', filterByCategory);

fetchData();