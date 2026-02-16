/* Tim Simpson */

const showEx1 = () => {

    document.getElementById("ex1").classList.remove("hide");
    document.getElementById("ex2").classList.add("hide");

    document.getElementById("main-items").classList.add("hide");
    document.getElementById("nav-toggle").classList.remove("closed");
};

const showEx2 = () => {

    document.getElementById("ex2").classList.remove("hide");
    document.getElementById("ex1").classList.add("hide");

    document.getElementById("main-items").classList.add("hide");
    document.getElementById("nav-toggle").classList.remove("closed");
};

const toggleNav = () =>{

    document.getElementById("main-items").classList.toggle("hide");
    document.getElementById("nav-toggle").classList.toggle("closed");
};

const updateSliderMessage = () => {

    const slider = document.getElementById("minutesSlider");
    const valueSpan = document.getElementById("minutesValue");
    const msg = document.getElementById("sliderMessage");

    const mins = parseInt(slider.value);
    valueSpan.textContent = mins;

    if (mins > 45) {

        msg.textContent = "We have time relax.";
    } else if (mins >= 30) {

        msg.textContent = "Better leave soon";
    } else if (mins >= 15) {

        msg.textContent = "Get moving now!";
    } else {

        msg.textContent = "Less than 15 minutes. It's now or never!";
    }
};

window.onload = () => {

    document.getElementById("nav-toggle").onclick = toggleNav;

    document.getElementById("exerciselink1").onclick = showEx1;

    document.getElementById("exerciselink2").onclick = showEx2;

    const slider = document.getElementById("minutesSlider");
    
    slider.addEventListener("input", updateSliderMessage);
    updateSliderMessage();

    document.getElementById("checkTimeBtn").onclick = checkCountdown;
};

const checkCountdown = () => {

    const output = document.getElementById("countdownMessage");
    const now = new Date();
    const classTime = new Date();
    classTime.setHours(8, 30, 0, 0);
    const diffMs = classTime - now;
    const diffMins = Math.round(diffMs / 60000);

    let message = `Class time is 8:30 AM. `;

    if (diffMins > 15) {

        message += `You got ${diffMins} minutes — you have a decent amount of time.`;
    } else if (diffMins >= 10) {

        message += `You got ${diffMins} minutes — time to start moving!`;
    } else if (diffMins >= 5) {

        message += `You got ${diffMins} minutes — I mean are you even going to make it?`;
    } else if (diffMins >= 0) {

        message += `You got ${diffMins} minutes — Late but you can still make it!`;
    } else {

        const late = Math.abs(diffMins);

        if (late <= 5) {
            message += `Class started ${late} minutes ago, all good.`;
        } else if (late <= 15) {
            message += `Class started ${late} minutes ago, saying you had a good reason for being late might be a good idea.`;
        } else {
            message += `Class started ${late} minutes ago, don't even bother showing up.`;
        }
    }
    output.textContent = message;
};

