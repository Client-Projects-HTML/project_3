document.addEventListener('DOMContentLoaded', () => {

    // Elements
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileHomeToggle = document.getElementById('mobileHomeToggle');
    const mobileHomeDropdown = document.getElementById('mobileHomeDropdown');
    const mobileLoginToggle = document.getElementById('mobileLoginToggle');
    const mobileLoginDropdown = document.getElementById('mobileLoginDropdown');
    const desktopLoginMenu = document.getElementById('desktopLoginMenu');
    const desktopLoginLink = document.getElementById('desktopLoginLink');
    const desktopLoginToggle = document.getElementById('desktopLoginToggle');
    const desktopLoginDropdown = document.getElementById('desktopLoginDropdown');
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

    // --- Mobile Home Dropdown ---
    if (mobileHomeToggle && mobileHomeDropdown) {
        const mobileHomeChevron = mobileHomeToggle.querySelector('i');

        function setMobileHomeDropdown(open) {
            mobileHomeToggle.setAttribute('aria-expanded', String(open));
            mobileHomeDropdown.classList.toggle('hidden', !open);
            if (mobileHomeChevron) {
                mobileHomeChevron.classList.toggle('rotate-180', open);
            }
        }

        mobileHomeToggle.addEventListener('click', () => {
            const isOpen = mobileHomeToggle.getAttribute('aria-expanded') === 'true';
            setMobileHomeDropdown(!isOpen);
        });

        mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('translate-x-full')) {
                setMobileHomeDropdown(false);
            }
        });
    }

    // --- Mobile Login Dropdown ---
    if (mobileLoginToggle && mobileLoginDropdown) {
        const mobileLoginChevron = mobileLoginToggle.querySelector('i');

        function setMobileLoginDropdown(open) {
            mobileLoginToggle.setAttribute('aria-expanded', String(open));
            mobileLoginDropdown.classList.toggle('hidden', !open);
            if (mobileLoginChevron) {
                mobileLoginChevron.classList.toggle('rotate-180', open);
            }
        }

        mobileLoginToggle.addEventListener('click', () => {
            const isOpen = mobileLoginToggle.getAttribute('aria-expanded') === 'true';
            setMobileLoginDropdown(!isOpen);
        });

        mobileLoginDropdown.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setMobileLoginDropdown(false));
        });

        mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('translate-x-full')) {
                setMobileLoginDropdown(false);
            }
        });
    }

    // --- Desktop Login Dropdown (Click-to-open) ---
    if (desktopLoginMenu && desktopLoginLink && desktopLoginToggle && desktopLoginDropdown) {
        let isDesktopLoginOpen = false;

        function setDesktopLoginDropdown(open) {
            isDesktopLoginOpen = open;
            desktopLoginToggle.setAttribute('aria-expanded', String(open));
            desktopLoginDropdown.classList.toggle('opacity-100', open);
            desktopLoginDropdown.classList.toggle('visible', open);
            desktopLoginDropdown.classList.toggle('translate-y-0', open);
            desktopLoginDropdown.classList.toggle('pointer-events-auto', open);
            desktopLoginDropdown.classList.toggle('opacity-0', !open);
            desktopLoginDropdown.classList.toggle('invisible', !open);
            desktopLoginDropdown.classList.toggle('translate-y-2', !open);
            desktopLoginDropdown.classList.toggle('pointer-events-none', !open);
        }

        desktopLoginToggle.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            setDesktopLoginDropdown(!isDesktopLoginOpen);
        });

        desktopLoginLink.addEventListener('click', (event) => {
            // First click opens dropdown for role selection. Second click navigates to login page.
            if (!isDesktopLoginOpen) {
                event.preventDefault();
                setDesktopLoginDropdown(true);
            }
        });

        desktopLoginDropdown.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setDesktopLoginDropdown(false));
        });

        document.addEventListener('click', (event) => {
            if (!desktopLoginMenu.contains(event.target)) {
                setDesktopLoginDropdown(false);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setDesktopLoginDropdown(false);
            }
        });
    }

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

    // --- Active Link Highlighting ---
    function highlightActiveLink() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';

        const navLinks = document.querySelectorAll('#navbar a, #mobileMenu a');
        const navButtons = document.querySelectorAll('#navbar button, #mobileMenu button');

        // Reset all links
        navLinks.forEach(link => {
            link.classList.remove('text-primary-600', 'dark:text-primary-400', 'font-semibold');
            if (!link.closest('#mobileMenu')) {
                link.classList.add('text-slate-600', 'dark:text-slate-300', 'font-medium');
            }
        });

        // Reset all buttons (dropdown triggers)
        navButtons.forEach(btn => {
            if (btn.id === 'themeToggle' || btn.id === 'rtlToggle' || btn.id === 'mobileMenuBtn' || btn.id === 'desktopLoginToggle') return;
            btn.classList.remove('text-primary-600', 'dark:text-primary-400', 'font-semibold');
            if (!btn.closest('#mobileMenu')) {
                btn.classList.add('text-slate-600', 'dark:text-slate-300', 'font-medium');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;

            // Normalize href for comparison
            const linkPage = href.split('/').pop();

            if (currentPage === linkPage) {
                // Apply active classes
                link.classList.add('text-primary-600', 'dark:text-primary-400', 'font-semibold');
                link.classList.remove('text-slate-600', 'dark:text-slate-300', 'font-medium');

                // If link is inside a dropdown, highlight the parent button
                const dropdown = link.closest('.group');
                if (dropdown) {
                    const dropdownBtn = dropdown.querySelector('button');
                    if (dropdownBtn) {
                        dropdownBtn.classList.add('text-primary-600', 'dark:text-primary-400', 'font-semibold');
                        dropdownBtn.classList.remove('text-slate-600', 'dark:text-slate-300', 'font-medium');
                    }
                }

                // Mobile dropdown parent toggle
                const mobileDropdown = link.closest('[id$="Dropdown"]');
                if (mobileDropdown) {
                    const mobileToggle = document.querySelector(`[aria-controls="${mobileDropdown.id}"]`);
                    if (mobileToggle) {
                        mobileToggle.classList.add('text-primary-600', 'dark:text-primary-400');
                        mobileToggle.classList.remove('text-slate-900', 'dark:text-white');
                        // Expand the dropdown by default if it contains the active link
                        mobileDropdown.classList.remove('hidden');
                        const chevron = mobileToggle.querySelector('i');
                        if (chevron) chevron.classList.add('rotate-180');
                    }
                }
            }
        });
    }

    highlightActiveLink();

});
