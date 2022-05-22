document.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showBackToTopButton();
  activeStyleAtCurrentSection(home);
  activeStyleAtCurrentSection(about);
  activeStyleAtCurrentSection(services);
  activeStyleAtCurrentSection(comments);
  activeStyleAtCurrentSection(contact);
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

function showBackToTopButton() {
  if (scrollY > 500) {
    backToTopButton.classList.add("showButton");
  } else {
    backToTopButton.classList.remove("showButton");
  }
}

function activeStyleAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;
  const sectionId = section.getAttribute("id");

  const passedTop = targetLine >= sectionTop;
  const passedBottom = targetLine >= sectionBottom;

  const sectionBoundaries = passedTop && !passedBottom;

  const menuElement = document.querySelector(
    `#navigation .menu a[href*=${sectionId}]`
  );

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

// SWIPER
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

// SCROLLREVEAL
ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  mobile: false,
}).reveal(`
  #home,
  #about,
  #services,
  #services p,
  #services .card,
  #services .card .cards,
  #comments,
  #comments .posts,
  #contact
`);
