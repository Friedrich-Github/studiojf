/* === LANGUAGE SWITCH === */
const langButtons = document.querySelectorAll('.lang-switcher button');
const langElements = document.querySelectorAll('[data-lang]');

function setLanguage(lang) {
  langButtons.forEach(btn =>
    btn.classList.toggle("active", btn.dataset.setlang === lang)
  );

  langElements.forEach(el =>
    el.classList.toggle("hidden", el.dataset.lang !== lang)
  );

  localStorage.setItem("lang", lang);
}

// Default = English
setLanguage("en");

// Button click
langButtons.forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.setlang);
  });
});




const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

function activateSectionOnScroll() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-section");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-section");
    }
  });
}

window.addEventListener("scroll", activateSectionOnScroll);

/* Smooth Scroll */
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});



document.querySelectorAll("[data-slider]").forEach(slider => {

  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dot");

  const next = slider.querySelector("[data-next]");
  const prev = slider.querySelector("[data-prev]");

  let index = 0;

  function updateSlider() {

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    
    const counter = slider.querySelector(".counter");
    
    counter.textContent = `${index + 1}/${slides.length}`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });

  /* MOBILE SWIPE */

  let startX = 0;

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {

    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      index = (index + 1) % slides.length;
    }

    if (endX - startX > 50) {
      index = (index - 1 + slides.length) % slides.length;
    }

    updateSlider();
  });

  updateSlider();

});
