const themeToggle = document.getElementById('theme-toggle');
const modeIcon = document.getElementById('mode-icon');
const toggleIcon = document.getElementById('toggle-icon');
const htmlElement = document.documentElement;

// Function to update the UI based on theme
function setTheme(theme) {
    // If using Bootstrap 5.3, this line handles the color swap automatically
    htmlElement.setAttribute('data-bs-theme', theme); 
    
    // Fallback if you write your own CSS later
    htmlElement.setAttribute('data-theme', theme); 
    
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        console.warn('localStorage unavailable, theme will not persist:', e);
    }

    // Update the icons
    if (theme === 'dark') {
        modeIcon.className = 'bi bi-moon-stars';
        toggleIcon.className = 'bi bi-toggle-on fs-4';
    } else {
        modeIcon.className = 'bi bi-brightness-high-fill';
        toggleIcon.className = 'bi bi-toggle-off fs-4';
    }
}

// Check for saved user preference on load, DEFAULT TO 'dark'
let savedTheme = 'dark';
try {
    savedTheme = localStorage.getItem('theme') || 'dark';
} catch (e) {
    console.warn('localStorage unavailable, defaulting to dark theme:', e);
}
setTheme(savedTheme);

// Toggle click event
themeToggle.addEventListener('click', () => {
    // Check current theme, default to dark if null
    const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});