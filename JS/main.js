let navbar_toggler = document.querySelector('.navbar-toggler'),
    navbar_collapse = document.querySelector('.navbar-collapse'),
    cart_container = document.querySelector('.cart-container'),
    cart_btn = document.getElementById('cart-btn'),
    productList = document.querySelector('.products-list')

eventListeners();

// All event Listener
function eventListeners() {

    window.addEventListener('DOMContnetLoaded', () => {
        loadJSON();
    })

    navbar_toggler.addEventListener('click', () => {
        navbar_collapse.classList.toggle('show-navbar')
    });
    // Show Hidden Cart container
    cart_btn.addEventListener('click', () => {
        cart_container.classList.toggle('show-cart-container');
    });
}

function loadJSON() {
    fetch('./furniture.json')
        .then(response => response.json())
        .then(data => console.log(data));
}