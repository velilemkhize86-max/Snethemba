// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') nav.classList.remove('open'); });

// Theme toggle (remembers the choice in the browser)
const themeBtn = document.getElementById('themeBtn');
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
setTheme(saved || 'light');
themeBtn.addEventListener('click', () => {
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
