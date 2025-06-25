// 🌗 Dark/Light Mode Toggle
const toggleBtn = document.getElementById('darkToggle');
const body = document.body;

// Set initial theme from localStorage or default
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add('light-mode'); // default mode
}

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  }
});
