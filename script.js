/* =========================================================
   LANGUAGE SWITCH
   ========================================================= */

const langButtons = document.querySelectorAll('.lang-switcher button');
const langElements = document.querySelectorAll('[data-lang]');

// default language = English
setLanguage("en");

// handle button click
langButtons.forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.setlang);
  });
});

function setLanguage(lang) {
  // highlight active button
  langButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.setlang === lang);
  });

  // show/hide language content
  langElements.forEach(el => {
    el.classList.toggle("hidden", el.dataset.lang !== lang);
  });

  // save preference
  localStorage.setItem("lang", lang);
}


/* =========================================================
   SECTION HIGHLIGHT ON SCROLL
   (Navigation gets font-weight 950 on active section)
   ========================================================= */

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

function activateSectionOnScroll() {
  let current = "";

  sections.forEach(section => {
    const offset = section.offsetTop - 150; // activate earlier while scrolling
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
   SMOOTH SCROLLING FOR NAVIGATION (optional but elegant)
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
