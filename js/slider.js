var cardSwiper = new Swiper("#cardSlider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var coinSwiper = new Swiper("#coinSlider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".coinSlidePrv",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});


var BnbSlider = new Swiper("#BnbSlider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: ".coinSlideNext",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});


var assetsSlider = new Swiper("#assetsSlider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: ".assetSlidePrv",
    nextEl: ".assetSlideNext",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});