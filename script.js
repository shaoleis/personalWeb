const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const savedTheme = window.localStorage.getItem('theme');

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
} else {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  root.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
}

toggle?.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', nextTheme);
  window.localStorage.setItem('theme', nextTheme);
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});
