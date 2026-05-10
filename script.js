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
