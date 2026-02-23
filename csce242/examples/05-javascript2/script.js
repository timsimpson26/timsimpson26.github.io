
// button click example
document.getElementById("btn-show-message").onclick = () => {
    document.getElementById("p-message").innerHTML = "Hello world";
};

// link click example
document.getElementById("a-click").onclick = (e) => {
    e.preventDefault(); // not go to the links destination
    e.currentTarget.innerHTML = "CLICKED";
};

//start and stop bouncing
document.getElementById("btn-bounce").onclick = (e) => {
    const ball = document.getElementById("ball");

    if(e.currentTarget.innerHTML.toLowerCase() === "start") {
        e.currentTarget.innerHTML = "Stop";
        ball.classList.add("bounce");
    } else {
        e.currentTarget.innerHTML = "Start";
        ball.classList.remove("bounce");
    }
}

// plant health example
document.getElementById("txt-num-days").onchange = (e) => {
    const numEntered = parseInt(e.currentTarget.value);
    const p = document.getElementById("p-plant-message");

    if(numEntered <= 0) {
        p.innerHTML = "Fed today";
    }
    else if (numEntered <= 2) {
        p.innerHTML = "Getting thirsty";
    }
    else if(numEntered <= 5) {
        p.innerHTML = "Very thirsty";
    }
    else {
        p.innerHTML = "Plant is dead :(";
    }

};

// toggle nav
document.getElementById("toggle-nav").onclick = (e) => {
    document.getElementById("main-nav").classList.toggle("show");
};


// counter 

const p = document.getElementById("p-count-display");
let count = 0;
let countInterval;
const startButton = document.getElementById("btn-start-count");

startButton.onclick = () => {
    countInterval = setInterval(()=>{
        startButton.disabled = true;
        p.innerHTML = count++;
    }, 500);
};

document.getElementById("btn-pause-count").onclick = (e) => {  
    startButton.disabled = false;
    clearInterval(countInterval);
};

document.getElementById("btn-stop-count").onclick = (e) => {  
    startButton.disabled = false;
    clearInterval(countInterval);
    count = 0;
};

// date 
setInterval(() => {
const today = new Date();
const month = today.getMonth();
const day = today.getDate();
const year = today.getFullYear();
const seconds = today.getSeconds();
const minutes = today.getMinutes();
const hours = today.getHours();

document.getElementById("p-date").innerHTML = `${month + 1}/${day}/${year}`;

}, 500);

/* Donation */
document.getElementById("btn-display-donation").onclick = () => {
    const errorP = document.getElementById("p-donation-error");
    errorP.innerHTML = ""; // Click button twice

    const donationText = document.getElementById("txt-donation").value;

    if(isNaN(donationText) || donationText <= 0) {
        errorP.innerHTML = " * Please enter a valid donation amount";
        return;
}

    donation = parseInt(donationText);
    const percentGoal = donation/5000 * 100;

    document.getElementById("p-donation").innerHTML = `Donation: $${donation} (${percentGoal}% of goal)`;

    document.querySelector(":root").style.setProperty("--donation", `${percentGoal}%`);
}

