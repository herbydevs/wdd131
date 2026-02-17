
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Functionality
    const menuBtn = document.querySelector('#menuButton');
    const navLinks = document.querySelector('#navLinks');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 2. Visitor Counter (localStorage & Template Literals)
    const visitDisplay = document.querySelector('#visitCounter');
    if (visitDisplay) {
        // Retrieve or initialize visit count
        let visitCount = Number(window.localStorage.getItem('peak-pine-visits-v2')) || 0;

        // Conditional Branching for user feedback
        if (visitCount === 0) {
            visitDisplay.textContent = `Welcome to our  experience! This is your first visit.`;
        } else {
            visitDisplay.textContent = `Glad to see you again! This is visit #${visitCount + 1} to our beautiful portal.`;
        }

        // Increment and Save
        visitCount++;
        localStorage.setItem('peak-pine-visits-v2', visitCount);
    }

    // 3. Dynamic Year and Last Modified (Footer)
    const yearElem = document.querySelector('#currentYear');
    if (yearElem) yearElem.textContent = new Date().getFullYear();

    const modElem = document.querySelector('#lastModified');
    if (modElem) modElem.textContent = document.lastModified;

    // 4. Scroll Reveal Effect (Bonus Interactivity)
    const revealElements = document.querySelectorAll('.card, .feature-spotlight');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Initial styles for reveal elements
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
});