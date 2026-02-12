/**
 * Peak & Pine Adventure Guide
 * Project Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navigation: Mobile Menu Toggle ---
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle hamburger icon to X
            menuButton.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // --- 2. Footer: Dates & Last Modified ---
    const yearSpan = document.getElementById('currentYear');
    const modifiedSpan = document.getElementById('lastModified');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }

    // --- 3. Interaction: Adventure Action ---
    const actionBtn = document.getElementById('actionButton');
    const dynamicText = document.getElementById('dynamicText');

    if (actionBtn && dynamicText) {
        actionBtn.addEventListener('click', (e) => {
            // Preventing default link behavior for the demo
            e.preventDefault();
            
            // Interaction to show the site is working
            dynamicText.style.backgroundColor = '#E07A5F33'; // Light version of accent
            dynamicText.style.padding = '10px';
            dynamicText.style.borderRadius = '5px';
            dynamicText.innerHTML = "<strong>Search Initiated!</strong> We are scanning our PNW database for the best spring trails in Olympic National Park...";
            
            actionBtn.textContent = "Searching...";
            actionBtn.style.opacity = "0.7";
        });
    }
});