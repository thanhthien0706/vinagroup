document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.vg-nav-toggle');
  const nav = document.querySelector('.vg-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
  }
});
