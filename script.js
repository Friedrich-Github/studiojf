const langButtons = document.querySelectorAll('.lang-switcher button');
const langElements = document.querySelectorAll('[data-lang]');

// Standard: Englisch
let currentLang = localStorage.getItem('lang') || 'en';
setLanguage(currentLang);

// Beim Klick Sprache wechseln
langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  currentLang = lang;

  // Buttons markieren
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Alle Texte ein-/ausblenden
  langElements.forEach(el => {
    el.classList.toggle('hidden', el.dataset.lang !== lang);
  });

  // Lokal speichern
  localStorage.setItem('lang', lang);
}
