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

// ALWAYS DEFAULT TO ENGLISH
setLanguage('en');

// Sprache wechseln
langButtons.forEach(button => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.setlang);
  });
});

function setLanguage(lang) {

  // Buttons markieren
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.setlang === lang);
  });

  // Texte ein-/ausblenden
  langElements.forEach(el => {
    el.classList.toggle('hidden', el.dataset.lang !== lang);
  });

  // Sprache merken
  localStorage.setItem('lang', lang);
}

/* === SECTION HIGHLIGHT ON SCROLL === */

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

function activateSectionOnScroll() {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (scrollY >= top) {
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

