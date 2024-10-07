const restaurantContainer = document.getElementById('restaurant-container');
const locationSelect = document.getElementById('locationSelect');

let restaurants = [];


const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/restaurants');
        if (!response.ok) throw new Error('Network response was not ok');
        restaurants = await response.json();
        prependRestaurants(restaurants);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const prependRestaurants = (items) => {
    items.forEach(restaurant => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
                    <div class="card-body">
                        <h5 class="card-title">${restaurant.name}</h5>
                        <p class="card-text">${restaurant.description}</p>
                        <p class="card-text"><small class="text-muted">Posted on: ${new Date(restaurant.timestamp).toLocaleString()}</small></p>
                        <button class="btn btn-primary btn-reviews" data-id="${restaurant.id}">Reviews</button>
                        <button class="btn btn-success btn-order" data-id="${restaurant.id}">Order</button>
                    </div>
                </div>
            </div>
        `;
        restaurantContainer.insertAdjacentHTML('afterbegin', card);
    });
};

const filterByLocation = () => {
    const selectedLocation = locationSelect.value;
    const filteredRestaurants = selectedLocation === 'all' 
        ? restaurants 
        : restaurants.filter(restaurant => restaurant.location === selectedLocation);
    
    restaurantContainer.innerHTML = ''; 
    prependRestaurants(filteredRestaurants);
};


locationSelect.addEventListener('change', filterByLocation);


fetchData();
setInterval(fetchData, 4000); 