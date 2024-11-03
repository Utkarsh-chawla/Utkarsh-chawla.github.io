const dynamicText = document.querySelector('.dynamic-text');
const roles = ["Business Analyst", "Problem Solver", "Data Enthusiast"];
let currentIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[currentIndex];
    if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, currentCharIndex--);
        if (currentCharIndex < 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % roles.length;
            setTimeout(type, 500); // Pause before starting to type
        } else {
            setTimeout(type, 100); // Typing speed
        }
    } else {
        dynamicText.textContent = currentRole.substring(0, currentCharIndex++);
        if (currentCharIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause before deleting
        } else {
            setTimeout(type, 100); // Typing speed
        }
    }
}

// Start typing
document.addEventListener('DOMContentLoaded', () => {
    type();
    // Show home section initially
    document.querySelector('#home').classList.add('active');
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
