// ==========================
// SWISS FACT ROTATOR (external file)
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const facts = [
        "Switzerland has 4 national languages: German, French, Italian and Romansh.",
        "The Swiss rail network is one of the most punctual in the world.",
        "The Matterhorn stands at 4,478 meters (14,692 ft).",
        "There are over 1,500 lakes in Switzerland.",
        "Swiss chocolate makers have been producing chocolate since the early 1800s.",
        "Switzerland is home to over 2,000 species of plants in the Alps."
    ];

    const factText = document.getElementById("fact-text");
    const rotator = document.getElementById("fact-rotator");

    let index = 0;
    let interval = null;
    const ROTATE_MS = 5000;
    const FADE_MS = 400;

    function showFact(i) {
        // fade out, change text, fade in
        factText.classList.remove("visible");
        // small delay to allow CSS fade-out to run
        setTimeout(() => {
            factText.textContent = facts[i];
            factText.classList.add("visible");
        }, FADE_MS / 2);
    }

    function startRotation() {
        if (interval) return;
        interval = setInterval(() => {
            index = (index + 1) % facts.length;
            showFact(index);
        }, ROTATE_MS);
    }

    function stopRotation() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    // Init
    showFact(index);
    startRotation();

    // Pause/resume on hover & focus for accessibility
    rotator.addEventListener("mouseenter", stopRotation);
    rotator.addEventListener("mouseleave", startRotation);
    rotator.addEventListener("focus", stopRotation);
    rotator.addEventListener("blur", startRotation);

    // optional keyboard control when focused
    rotator.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            index = (index + 1) % facts.length;
            showFact(index);
        } else if (e.key === 'ArrowLeft') {
            index = (index - 1 + facts.length) % facts.length;
            showFact(index);
        }
    });

});