/* === LANGUAGE SWITCH — FINAL WORKING VERSION === */

const langButtons = document.querySelectorAll('.lang-switcher button');
const langElements = document.querySelectorAll('[data-lang]');

// Default = English
setLanguage("en");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.setlang;
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  langButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.setlang === lang);
  });

  langElements.forEach(el => {
    const isActive = el.dataset.lang === lang;
    el.classList.toggle("active-lang", isActive);
  });
}


/* =========================================================
   SECTION HIGHLIGHT ON SCROLL
   ========================================================= */

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

function activateSectionOnScroll() {
  let current = "";

  sections.forEach(section => {
    const offset = section.offsetTop - 150; 
    if (window.scrollY >= offset) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-section");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-section");
    }
  });
}

window.addEventListener("scroll", activateSectionOnScroll);


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
