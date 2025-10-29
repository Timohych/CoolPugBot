document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme === 'dark');
    } else if (prefersDarkScheme.matches) {
        document.body.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(!isDark);
    });

    function updateThemeIcon(isDark) {
        const iconPath = themeToggle.querySelector('path');
        if (isDark) {
            iconPath.setAttribute('d', 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z'); // иконка луны
        } else {
            iconPath.setAttribute('d', 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 6a6 6 0 0 1 0 12 6 6 0 0 1 0-12z'); // иконка солнца
        }
    }
});