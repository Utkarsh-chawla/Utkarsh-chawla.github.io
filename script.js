const texts = ["Business Analyst", "Problem Solver", "Entrepreneur"];
let index = 0;

function typeWriterEffect(text, i, fnCallback) {
    if (i < text.length) {
        document.querySelector('.changing-text').textContent += text.charAt(i);
        setTimeout(() => {
            typeWriterEffect(text, i + 1, fnCallback);
        }, 100);
    } else {
        setTimeout(() => {
            eraseText(text, 0, fnCallback);
        }, 1000);
    }
}

function eraseText(text, i, fnCallback) {
    if (i < text.length) {
        document.querySelector('.changing-text').textContent = text.substring(0, text.length - i);
        setTimeout(() => {
            eraseText(text, i + 1, fnCallback);
        }, 50);
    } else {
        index++;
        if (index >= texts.length) index = 0;
        setTimeout(() => {
            typeWriterEffect(texts[index], 0, fnCallback);
        }, 500);
    }
}

typeWriterEffect(texts[index], 0, () => {});

document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        document.getElementById(target).style.display = 'block';
    });
});

document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.detail-view').style.display = 'none';
    });
});

// Optional: Smooth scroll functionality
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
