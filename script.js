const dynamicText = document.getElementById("dynamic-text");
const texts = ["Business Analyst", "Problem Solver"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = texts[index].substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = texts[index].substring(0, charIndex + 1);
        charIndex++;
    }

    dynamicText.textContent = currentText;

    if (!isDeleting && charIndex === texts[index].length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Move to next text
    }

    setTimeout(type, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", type);
