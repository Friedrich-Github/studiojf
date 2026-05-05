const langButtons = document.querySelectorAll('.lang-switcher button');
const langElements = document.querySelectorAll('[data-lang]');

let currentLang = localStorage.getItem('lang') || 'en';
setLanguage(currentLang);

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
