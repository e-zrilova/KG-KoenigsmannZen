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
  slidesPerView: 3,
});
const galleryZenSlider = new Swiper('.js-gallery-zen-slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.js-gallery-zen-slider---next',
    prevEl: '.js-gallery-zen-slider---prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  slidesPerView: 1,
});

const photosOfBuyers = new Swiper(".js-photos-of-buyers-slider", {
  cssMode: true,
  navigation: {
    nextEl: ".js-photos-of-buyers-slider--next",
    prevEl: ".js-photos-of-buyers-slider--prev",
  },
  mousewheel: true,
  keyboard: true,
  spaceBetween: 64,
  slidesPerView: 6,
});