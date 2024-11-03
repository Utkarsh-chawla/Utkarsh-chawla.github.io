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
        document.querySelector(`#details-${idx}`).classList.add('active');
    });
});

// Close button to hide details and slide back
document.querySelectorAll('.close-btn').forEach((button, idx) => {
    button.addEventListener('click', () => {
        document.querySelector(`#details-${idx}`).classList.remove('active');
    });
});
