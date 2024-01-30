const themeToggle = document.getElementById('theme-toggle');
const container = document.getElementById('container');
const scrollButtons = document.getElementById('scrollButtons');

themeToggle.addEventListener('change', function() {
  if (themeToggle.checked) {
    container.classList.add('dark');
  } else {
    container.classList.remove('dark');
  }
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    scrollButtons.classList.add('show');
  } else {
    scrollButtons.classList.remove('show');
  }
});
