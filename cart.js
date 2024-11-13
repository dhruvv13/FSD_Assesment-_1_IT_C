

const pricePerUnit = 5000; 


const quantityInput = document.getElementById('quantity-input');
const totalPriceElement = document.getElementById('total-price');
const buyNowButton = document.getElementById('buy-now-button');


function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value); 
    const totalPrice = (quantity * pricePerUnit).toFixed(2); 
    totalPriceElement.textContent = `Total Price: $${totalPrice}`; 
}


quantityInput.addEventListener('input', updateTotalPrice);


buyNowButton.addEventListener('click', function() {
    const quantity = parseInt(quantityInput.value); 
    const totalPrice = (quantity * pricePerUnit).toFixed(2); 
    alert(`You added ${quantity} items to your cart for $${totalPrice}`); 
});


updateTotalPrice();