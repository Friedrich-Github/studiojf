/* === LANGUAGE SWITCH — FINAL WORKING VERSION === */

const langButtons = document.querySelectorAll('.lang-switcher button');
const langElements = document.querySelectorAll('[data-lang]');

// load English by default
setLanguage("en");

// handle clicks
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.setlang);
  });
});

function setLanguage(lang) {
  // update button highlighting
  langButtons.forEach(btn =>
    btn.classList.toggle("active", btn.dataset.setlang === lang)
  );

  // show/hide content
  langElements.forEach(el =>
    el.classList.toggle("active-lang", el.dataset.lang === lang)
  );

  localStorage.setItem("lang", lang);
}

/* === SECTION HIGHLIGHT ON SCROLL === */

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

/* === SMOOTH SCROLL === */

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});



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
