/* Tim Simpson */
/* Used AI suggestions to help match with given example */

const water = document.getElementById("water");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  const x = Math.random() * 90;
  bubble.style.left = x + "%";

  const size = Math.random() * 10 + 8;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  const duration = Math.random() * 3 + 3;
  bubble.style.animationDuration = duration + "s";
  water.appendChild(bubble);
  setTimeout(() => bubble.remove(), duration * 1000);
}

function bubbleLoop() {
  for (let i = 0; i < 5; i++) {
    setTimeout(createBubble, i * 400);
  }
}

bubbleLoop();
setInterval(bubbleLoop, 2000);