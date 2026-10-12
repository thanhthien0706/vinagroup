document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.vg-nav-toggle');
  const nav = document.querySelector('.vg-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
      toggle.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
    });
  }
});
