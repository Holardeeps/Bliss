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