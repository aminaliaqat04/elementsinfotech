// Window Scroll
// window.onscroll = function () {
//   console.log(window.scrollY);
//   if (window.scrollY <= 0) {
//     showNavbar();
//   } else if (!$("#navbar").hasClass("scrolled")){
//     hideNavbar();
//   }
// }

function hideNavbar() {
  $("#navbar").addClass("hide-navbar");
  setInterval(() => {
    $("#navbar").removeClass("hide-navbar");
    $("#navbar").addClass("scrolled");
  }, 500);
}
function showNavbar() {
  console.log(a);
  $("#navbar").addClass("hide-navbar");
  setInterval(() => {
    $("#navbar").removeClass("hide-navbar");
    $("#navbar").removeClass("scrolled");
  }, 500);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Meet the Team Slider
var sliderSelector = ".swiper-container",
  options = {
    init: false,
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    centeredSlides: true,
    slideToClickedSlide: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 1,
      },
    },
  };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

// Mobile Navbar
$(".navT").on("click", function () {
  $(this).toggleClass("active");
  $("#mobile-menu").toggleClass("max-h-0");
  $("#mobile-menu").toggleClass("max-h-full");
});

$("a").on("click", function () {
  $("#mobile-menu").removeClass("max-h-full");
  $("#mobile-menu").addClass("max-h-0");
  $(".navT").removeClass("active");
});
