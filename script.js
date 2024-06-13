var swiper = new Swiper('.contenedor-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '1',
    coverflowEffect: {
        rotate: 15,
        stretch: 600,
        depth: 400,
        modifier: 0.5,
        slideShadows: false,
    },
    loop: true,


navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});
// ¡para los botones
document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    swiper.slidePrev();
});

document.querySelector('.swiper-button-next').addEventListener('click', function () {
    swiper.slideNext();
});
