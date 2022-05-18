const videoMaterialslSlider = new Swiper('.js-video-materials-slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.js-video-materials---next',
    prevEl: '.js-video-materials---prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  spaceBetween: 30,
  slidesPerView: 4,
});
