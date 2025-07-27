const themeToggleBtn = document.getElementById('change-theme-btn');

function updateIcon(theme) {
  themeToggleBtn.textContent = theme === 'dark' ? '🌙' : '🌤️';
}

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
  updateIcon(theme);
}

// Обработка клика по кнопке
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});

// Применить тему при загрузке страницы
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// 🐈 Мяуканье при клике
const meowEmoji = document.getElementById('meow-emoji');
const meowSound = document.getElementById('meow-sound');

if (meowEmoji && meowSound) {
  meowEmoji.addEventListener('click', () => {
    meowSound.currentTime = 0;
    meowSound.play();
  });
}

if (meowEmoji && meowSound) {
  meowEmoji.addEventListener('click', () => {
    console.log("🐱 Котик нажат!");
    meowSound.currentTime = 0;
    meowSound.play();
  });
}
