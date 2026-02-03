document.addEventListener('DOMContentLoaded', () => {

    // Elements
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeToggleMobile = document.querySelector('.theme-toggle-mobile');
    const rtlToggleBtn = document.getElementById('rtlToggle');
    const html = document.documentElement;

    // --- Sticky Navbar Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md', 'bg-white/90', 'dark:bg-slate-900/90');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white/90', 'dark:bg-slate-900/90');
        }
    });

    // --- Mobile Menu Toggle ---
    mobileMenuBtn.addEventListener('click', () => {
        const isClosed = mobileMenu.classList.contains('translate-x-full');
        if (isClosed) {
            mobileMenu.classList.remove('translate-x-full');
            // Change icon to close
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            mobileMenu.classList.add('translate-x-full');
            // Change icon back to bars
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    });

    // --- Dark/Light Mode Logic ---
    function setTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            html.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }

    // Initialize Theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Theme Toggle Click Event
    function toggleTheme() {
        if (html.classList.contains('dark')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);


    // --- RTL Toggle Logic ---

    function toggleRTL() {
        const currentDir = html.getAttribute('dir');
        const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
        html.setAttribute('dir', newDir);

        if (rtlToggleBtn) rtlToggleBtn.textContent = newDir === 'ltr' ? 'RTL' : 'LTR';

        const rtlToggleMobile = document.querySelector('.rtl-toggle-mobile');
        if (rtlToggleMobile) rtlToggleMobile.textContent = newDir === 'ltr' ? 'RTL' : 'LTR';

        localStorage.setItem('dir', newDir);
    }

    // Initialize RTL from local storage
    if (localStorage.getItem('dir') === 'rtl') {
        html.setAttribute('dir', 'rtl');
        if (rtlToggleBtn) rtlToggleBtn.textContent = 'LTR';
        const rtlToggleMobile = document.querySelector('.rtl-toggle-mobile');
        if (rtlToggleMobile) rtlToggleMobile.textContent = 'LTR';
    }

    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', toggleRTL);
    }

    // Mobile RTL Listener
    const rtlToggleMobile = document.querySelector('.rtl-toggle-mobile');
    if (rtlToggleMobile) {
        rtlToggleMobile.addEventListener('click', toggleRTL);
    }

});
