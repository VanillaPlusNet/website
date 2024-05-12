const swiper = new Swiper('.Image_swiper', {
    spaceBetween: 32,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.Image_swiper-button-next',
        prevEl: '.Image_swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

});