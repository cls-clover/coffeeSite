const swiper = new Swiper('.swiper', {
    loop: true,

    grabCursor: true,

    slidesPerView: 2,
    spaceBetween: 30,

    observer: true,
    observeParents: true,

    // кол-во пролистываемых слайдов
    // slidesPerGroup: 2,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        // возможность перетаскивать скролл
        // draggable: true
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        // pageUpDown: true, //не работает
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }

});