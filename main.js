document.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showButton();
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

function showButton() {
  if (scrollY > 500) {
    backToTopButton.classList.add("showButton");
  } else {
    backToTopButton.classList.remove("showButton");
  }
}

const swiper = new Swiper(".swiper", {
  // Parameters
  direction: "horizontal",
  spaceBetween: 32,
  loop: true,
  slidesPerView: 1,
  keyboard: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
});
