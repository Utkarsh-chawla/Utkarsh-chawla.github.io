// Text transition functionality
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

// Carousel functionality
let currentItem = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const detailsSections = document.querySelectorAll('.details');

// Function to show the next carousel item
function showNextItem() {
    carouselItems[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % carouselItems.length;
    carouselItems[currentItem].classList.add('active');
}

// Function to show the previous carousel item
function showPreviousItem() {
    carouselItems[currentItem].classList.remove('active');
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentItem].classList.add('active');
}

// Add click event listeners to "View Details" buttons
document.querySelectorAll('.details-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all carousel items and show the details section for the clicked item
        carouselItems.forEach(item => item.classList.remove('active'));
        detailsSections[index].classList.add('active');
    });
});

// Add click event listeners to "Close" buttons in each details section
document.querySelectorAll('.close-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide the details section and show the carousel again
        detailsSections[index].classList.remove('active');
        carouselItems[currentItem].classList.add('active');
    });
});
