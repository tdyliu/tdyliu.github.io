const root = document.documentElement;
let theme;
try { theme = localStorage.getItem('theme'); } catch (e) { /* storage blocked: follow system */ }
root.dataset.theme = theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  const sync = () => { btn.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode'; };
  sync();
  btn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) { /* not persisted */ }
    sync();
  });
});
