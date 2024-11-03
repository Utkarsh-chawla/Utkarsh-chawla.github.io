const texts = ["Business Analyst", "Problem Solver", "Data Enthusiast"];
let index = 0;

function changeText() {
    const changingText = document.querySelector('.changing-text');
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 3000);

// Optional: Smooth scroll functionality
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show details function
function showDetails(company, description, contribution, tools, type, time) {
    document.getElementById('details-title').textContent = company;
    document.getElementById('details-description').textContent = description;
    document.getElementById('details-contribution').textContent = contribution;
    document.getElementById('details-tools').textContent = tools;
    document.getElementById('details-type').textContent = type;
    document.getElementById('details-time').textContent = time;

    const detailsContainer = document.getElementById('details-container');
    detailsContainer.classList.add('show'); // Show details
}

// Hide details function
function hideDetails() {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.classList.remove('show'); // Hide details
}
