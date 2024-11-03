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

// Carousel and Detail View Functionality
const carouselItems = document.querySelectorAll('.carousel-item');
let currentCarouselIndex = 0;

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

document.querySelectorAll('.details-btn').forEach((button, idx) => {
    button.addEventListener('click', () => {
        showDetailSection(idx);
    });
});

function showDetailSection(index) {
    const detailsSections = document.querySelectorAll('.details');
    detailsSections.forEach((section, i) => {
        section.style.display = i === index ? 'flex' : 'none';
    });
    carouselItems[currentCarouselIndex].style.display = 'none';
}

document.querySelectorAll('.close-btn').forEach((button, idx) => {
    button.addEventListener('click', () => {
        hideDetailSection(idx);
    });
});

function hideDetailSection(index) {
    const detailsSections = document.querySelectorAll('.details');
    detailsSections[index].style.display = 'none';
    carouselItems[currentCarouselIndex].style.display = 'flex';
}

// Initial display setup
showCarouselItem(currentCarouselIndex);
