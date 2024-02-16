const onInit = () => {
    const theme = localStorage.getItem('preference-theme') || 'light';
    setTheme(theme);
}

const onMenuToggle = () => {
    const menu = document.querySelector('.links');
    menu.classList.toggle('active');
}

const onThemeToggle = () => {
    const theme = localStorage.getItem('preference-theme') === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    localStorage.setItem('preference-theme', theme);
};

const onSearch = () => {
    const search = document.querySelector('.search-panel');
    search.classList.toggle('active');
}
const onSearchEnter = (e) => {
    if (e.key === 'Enter') {
        const search = document.querySelector('.search-panel');
        search.classList.remove('active');
        window.location.href = `/search.html?query=${e.target.value}`;
    }
}

const setTheme = (theme) => {
    document.querySelector('body').dataset.theme = theme;
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.classList.remove('bx-sun', 'bx-moon');
    const icon = theme === 'dark' ? 'bx-sun' : 'bx-moon';
    themeIcon.classList.add(icon);
};
const onLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
}