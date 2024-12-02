document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const productName = productCard.querySelector('h4').innerText;
        addToCart(productName);
    });
});

function addToCart(productName) {
    const cartItems = document.querySelector('.cart-items');
    const newItem = document.createElement('div');
    newItem.innerText = productName;
    cartItems.appendChild(newItem);
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality not implemented yet.');
});

