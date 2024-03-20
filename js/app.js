var swiper = new Swiper(".hero-slider", {
    loop: true,
    direction: "horizontal",
    grabCursor: true,
    autoplay: true,
    speed: 1000,

    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
});