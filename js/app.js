// Login form on click
let loginForm = document.querySelector(".header .login-form");
let cart = document.querySelector(".header .cart");

document.querySelector("#user-btn").onclick = () =>{
    loginForm.classList.toggle("active");
};

document.querySelector("#cart-btn").onclick = () =>{
    cart.classList.toggle("active");
};





var swiper = new Swiper(".hero-slider", {
    loop: true,
    direction: "horizontal",
    grabCursor: true,
    autoplay: true,
    speed: 1000,
    effect: 'fade',

    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    fadeEffect: {
        crossFade: true
    },
});
