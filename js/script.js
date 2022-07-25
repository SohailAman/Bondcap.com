// -------

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 1000,
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// -________-
