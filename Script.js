const cars = [
    { model: 'Toyota Corolla', year: 2020, price: 20000, image: 'toyota.jpg' },
    { model: 'Honda Civic', year: 2019, price: 18000, image: 'honda.jpg' },
    { model: 'Ford Mustang', year: 2021, price: 35000, image: 'mustang.jpg' },
];

function displayCars() {
    const listings = document.getElementById('car-listings');
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');

        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h2>${car.model}</h2>
            <p>Year: ${car.year}</p>
            <p>Price: $${car.price}</p>
        `;

        listings.appendChild(carCard);
    });
}

document.addEventListener('DOMContentLoaded', displayCars);
