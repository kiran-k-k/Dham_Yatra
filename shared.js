document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    injectFooter();
});

function injectNavbar() {
    const navbarHook = document.getElementById('navbar-hook');
    if (!navbarHook) return;

    const currentPath = window.location.pathname;
    const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';

    const homeLink = isHomePage ? '#home' : 'index.html';
    const statesLink = isHomePage ? '#states' : 'index.html#states';
    
    // Determine active nav link
    let activeLink = '';
    if (isHomePage) {
        activeLink = 'home';
    } else if (currentPath.includes('map.html')) {
        activeLink = 'map';
    } else if (currentPath.includes('about.html')) {
        activeLink = 'about';
    } else if (currentPath.includes('Contact.html')) {
        activeLink = 'contact';
    } else if (
        currentPath.includes('Tamil_Nadu.html') || 
        currentPath.includes('Andhra_Pradesh.html') || 
        currentPath.includes('Karnataka.html') || 
        currentPath.includes('Kerala.html') || 
        currentPath.includes('Maharashtra.html') || 
        currentPath.includes('Uttar_Pradesh.html')
    ) {
        activeLink = 'states';
    }

    navbarHook.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt="Dham Yatra Logo">
                    </a>
                    <a href="index.html">
                        <span>DHAM YATRA</span>
                    </a>
                </div>
                <div class="nav-menu" id="nav-menu">
                    <a href="${homeLink}" class="nav-link ${activeLink === 'home' ? 'active-link' : ''}">Home</a>
                    <a href="${statesLink}" class="nav-link ${activeLink === 'states' ? 'active-link' : ''}">States</a>
                    <a href="map.html" class="nav-link ${activeLink === 'map' ? 'active-link' : ''}">India Map</a>
                    <a href="about.html" class="nav-link ${activeLink === 'about' ? 'active-link' : ''}">About</a>
                    <a href="Contact.html" class="nav-link ${activeLink === 'contact' ? 'active-link' : ''}">Contact</a>
                </div>
                <div class="nav-toggle" id="nav-toggle">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    `;

    // Add mobile toggle behavior
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('toggle-active');
        });

        // Close menu when a link is clicked (useful for mobile smooth scrolls)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('toggle-active');
            });
        });
    }

    // Scroll effect for navbar styling
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
    });
}

function injectFooter() {
    const footerHook = document.getElementById('footer-hook');
    if (!footerHook) return;

    footerHook.innerHTML = `
        <footer class="footer">
            <div class="container footer-content">
                <div class="footer-brand">
                    <img src="images/logo.png" alt="Dham Yatra Logo" class="footer-logo">
                    <h3>DHAM YATRA</h3>
                </div>
                <p class="footer-text">Explore the spiritual heritage, architecture, and sacred geometry of India's finest temples.</p>
                <div class="footer-divider"></div>
                <p class="footer-copy">🙏 Thank You For Visiting DHAM YATRA 🙏</p>
                <p class="copyright-subtext">&copy; ${new Date().getFullYear()} Dham Yatra. All rights reserved.</p>
            </div>
        </footer>
    `;
}
