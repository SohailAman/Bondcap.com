let logo = document.querySelector("#scrolLogo");
let brandName = document.querySelector("#brand");
let home = document.querySelector("#home");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let fifth = document.querySelector("#fifth");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let backToTop = document.querySelector("#backToTop");

// home
const backSlide = () => {
  if (nine.classList.contains("swiper-slide-active")) {
    console.log("done");
    nine.classList.remove("swiper-slide-active");
    nine.classList.remove("swiper-slide");
    home.classList.add("swiper-slide-active");
  }
};
backToTop.addEventListener("click", () => {
  backSlide();
});

// first sec
const Sec1 = () => {
  if (second.classList.contains("swiper-slide-active")) {
    logo.style.opacity = "1";
    logo.classList.remove("whiteO");
    logo.classList.add("blackO");
    logo.style.transition = "opacity 1s cubic-bezier(.32, .35, .01, 1)";
    brandName.classList.add("slideOut");
  } else {
    logo.style.opacity = "0";
    logo.style.transition = "opacity 0 ";
    brandName.classList.remove("slideOut");
  }
};
setInterval(Sec1, 500);

// second sec
const Sec2 = () => {
  if (third.classList.contains("swiper-slide-active")) {
    logo.classList.add("whiteO");
    logo.classList.remove("blackO");
    logo.style.opacity = "1";
  }
};
setInterval(Sec2, 500);

// third sec
const Sec3 = () => {
  if (fourth.classList.contains("swiper-slide-active")) {
    logo.classList.remove("whiteO");
    logo.classList.add("blackO");
    logo.style.opacity = "1";
    logo.style.transition = "all 0.9s linear";
  }
};
setInterval(Sec3, 500);

// fourth sec
const Sec4 = () => {
  if (fifth.classList.contains("swiper-slide-active")) {
    logo.classList.add("whiteO");
    logo.classList.remove("blackO");
    logo.style.opacity = "1";
    logo.style.transition = "all 0.9s linear";
  }
};
setInterval(Sec4, 500);

// fifth sec
const Sec5 = () => {
  if (fifth.classList.contains("swiper-slide-active")) {
    logo.classList.add("whiteO");
    logo.classList.remove("blackO");
    logo.style.opacity = "1";
  }
};
setInterval(Sec5, 500);

// six sec
const Sec6 = () => {
  if (six.classList.contains("swiper-slide-active")) {
    logo.classList.add("whiteO");
    logo.classList.remove("blackO");
    logo.style.opacity = "1";
    logo.style.transition = "all 0.9s linear";
  }
};
setInterval(Sec6, 500);

// seven sec
const Sec7 = () => {
  if (seven.classList.contains("swiper-slide-active")) {
    logo.classList.remove("whiteO");
    logo.classList.add("blackO");
    logo.style.opacity = "1";
    logo.style.transition = "all 0.9s linear";
  }
};
setInterval(Sec7, 500);

// eight sec
const Sec8 = () => {
  if (eight.classList.contains("swiper-slide-active")) {
    logo.classList.remove("whiteO");
    logo.classList.add("blackO");
    logo.style.opacity = "1";
    logo.style.transition = "all 0.9s linear";
  }
};
setInterval(Sec8, 500);

// snine sec
const Sec9 = () => {
  if (nine.classList.contains("swiper-slide-active")) {
    logo.classList.remove("whiteO");
    logo.style.fill = "#fff";
    logo.style.opacity = "0";
    logo.style.transition = "all 0.4s linear";
  }
};
setInterval(Sec9, 500);

// ---swiper Home----

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 1000,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
});

// -________-
