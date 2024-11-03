const texts = ["Business Analyst", "Problem Solver", "Data Enthusiast"];
let index = 0;

function changeText() {
    const changingText = document.querySelector('.changing-text');
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 3000);

// Fade out effect on scroll
window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    const workSection = document.getElementById('work');
    const scrollPos = window.scrollY;

    // Check if scrolling past the home section
    if (scrollPos > 0) {
        const opacity = 1 - scrollPos / window.innerHeight;
        homeSection.style.opacity = opacity;
    } else {
        homeSection.style.opacity = 1; // Reset opacity if at the top
    }
});
