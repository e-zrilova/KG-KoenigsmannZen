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

const zenFeedback = new Swiper(".js-zen-feedback-slider", {
  cssMode: true,
  navigation: {
    nextEl: ".js-zen-feedback-slider--next",
    prevEl: ".js-zen-feedback-slider--prev",
  },
  mousewheel: true,
  keyboard: true,
  spaceBetween: 64,
  slidesPerView: 6,
});


const specificationInfoBtn = document.querySelectorAll('.js-specification__btn')
const specificationInfoDesc = document.querySelectorAll('.js-specification__block-desc');
const specificationTitleDesc = document.querySelectorAll('.js-specification-text');

if (specificationInfoBtn) {
  specificationInfoBtn.forEach((item) => {
    item.addEventListener('click', () => {
      const parentNode = item.closest('.specification__item');
      const currentDescriptionNode = parentNode.querySelector('.js-specification__block-desc');
      const currentTitleNode = parentNode.querySelector('.js-specification-text');

      specificationTitleDesc.forEach(titleNode => titleNode.classList.remove('active'));
      currentTitleNode.classList.add('active');

      specificationInfoDesc.forEach(descNode => descNode.classList.remove('active'));
      currentDescriptionNode.classList.add('active');

    });
  });
}


const inspectionBtn = document.querySelectorAll('.js-inspection__decor-wrapper')
const inspectionImg = document.querySelectorAll('.js-inspection__img-zoom');

if (inspectionBtn) {
  inspectionBtn.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

if (inspectionImg) {
  inspectionImg.forEach((item) => {
    item.addEventListener('click', () => {
      const currentBtn = item.previousElementSibling;
      currentBtn.classList.remove('active');
    });
  });
}