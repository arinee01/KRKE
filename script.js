document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-item a');

    function navigate() {
        // Get hash from URL or default to 'home'
        let hash = window.location.hash.substring(1) || 'home';

        // Find matching section, fallback to home if not found
        let targetSection = document.getElementById(hash);
        if (!targetSection) {
            hash = 'home';
            targetSection = document.getElementById('home');
        }

        // Hide all sections, show target
        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');

        // Update nav links active state
        navLinks.forEach(link => {
            const linkHash = link.getAttribute('href').substring(1);
            if (linkHash === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', navigate);

    // Initial navigation
    navigate();

    // Accordion controls for scenarios
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');

    if (expandAllBtn && collapseAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            const allScenarios = document.querySelectorAll('.scenario-item');
            allScenarios.forEach(scenario => scenario.setAttribute('open', ''));
        });

        collapseAllBtn.addEventListener('click', () => {
            const allScenarios = document.querySelectorAll('.scenario-item');
            allScenarios.forEach(scenario => scenario.removeAttribute('open'));
        });
    }
});
