document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-content');
    const toggleContactsButton = document.getElementById('toggleContacts');
    const contactInfo = document.getElementById('contact-info');

    // Function to show a specific section and hide others
    const showSection = (id) => {
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none'; // Ensure it's hidden from layout
        });
        const activeSection = document.getElementById(id);
        if (activeSection) {
            activeSection.classList.add('active');
            activeSection.style.display = 'block'; // Display the active section
        }
    };

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('href').substring(1); // Get section ID from href
            showSection(targetId);
        });
    });

    // Toggle contact information visibility
    toggleContactsButton.addEventListener('click', () => {
        const isHidden = contactInfo.classList.toggle('hidden');
        if (isHidden) {
            toggleContactsButton.innerHTML = 'Show Contacts <i class="fas fa-chevron-down"></i>';
        } else {
            toggleContactsButton.innerHTML = 'Hide Contacts <i class="fas fa-chevron-up"></i>';
        }
    });

    // Initialize: show the 'About' section by default on page load
    showSection('about');

    // Initialize contact info visibility based on its initial state
    // As per the HTML, contact-info does NOT have the 'hidden' class initially,
    // so it starts visible, and the button should reflect "Hide Contacts".
    if (contactInfo.classList.contains('hidden')) {
        toggleContactsButton.innerHTML = 'Show Contacts <i class="fas fa-chevron-down"></i>';
    } else {
        toggleContactsButton.innerHTML = 'Hide Contacts <i class="fas fa-chevron-up"></i>';
    }
});