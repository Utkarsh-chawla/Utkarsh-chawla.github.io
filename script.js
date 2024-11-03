document.addEventListener("DOMContentLoaded", function() {
    const roles = ["Business Analyst", "Problem Solver"];
    let currentIndex = 0;
    const dynamicText = document.querySelector(".dynamic-text");

    function changeRole() {
        const currentRole = roles[currentIndex];
        const nextRole = roles[(currentIndex + 1) % roles.length];
        const fullText = currentRole + " ";

        dynamicText.innerHTML = fullText;

        // Simulate backspace effect
        let i = fullText.length;
        const backspace = setInterval(() => {
            if (i-- > 0) {
                dynamicText.innerHTML = fullText.substring(0, i);
            } else {
                clearInterval(backspace);
                // Switch to next role after a pause
                setTimeout(() => {
                    dynamicText.innerHTML = "";
                    currentIndex = (currentIndex + 1) % roles.length;
                    changeRole();
                }, 500);
            }
        }, 100);
    }

    changeRole();

    // Scroll animation
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        root: null,
        threshold: 0.1
    };
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});
