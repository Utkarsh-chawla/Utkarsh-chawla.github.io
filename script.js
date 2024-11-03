const texts = ["Business Analyst", "Problem Solver", "Data Enthusiast"];
let index = 0;

function changeText() {
    const changingText = document.querySelector('.changing-text');
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 3000);

// Smooth scroll functionality
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show details with left slide transition
document.querySelectorAll('.details-btn').forEach((button, idx) => {
    button.addEventListener('click', () => {
        const detailsContainer = document.querySelector(`#details-${idx}`);
        detailsContainer.classList.add('active');
    });
});

// Back button to hide details and slide back
document.querySelectorAll('.back-btn').forEach((button, idx) => {
    button.addEventListener('click', () => {
        const detailsContainer = document.querySelector(`#details-${idx}`);
        detailsContainer.classList.remove('active');
    });
});
