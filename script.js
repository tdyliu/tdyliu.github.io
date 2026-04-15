const themeToggle = document.getElementById('theme-toggle');
const modeIcon = document.getElementById('mode-icon');
const toggleIcon = document.getElementById('toggle-icon');
const htmlElement = document.documentElement;

// Function to update the UI based on theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        modeIcon.className = 'bi bi-moon-stars';
        toggleIcon.className = 'bi bi-toggle-on fs-4';
    } else {
        modeIcon.className = 'bi bi-brightness-high-fill';
        toggleIcon.className = 'bi bi-toggle-off fs-4';
    }
}

// Check for saved user preference on load
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle click event
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});