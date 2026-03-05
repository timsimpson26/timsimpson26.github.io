

/* Fact rotator logic */

const facts = [
  "Switzerland has four national languages: German, French, Italian, and Romansh.",
  "The Matterhorn is one of the most photographed mountains in the world.",
  "Switzerland is home to over 1,500 lakes.",
  "Swiss trains are famous for their punctuality.",
  "Fondue originated in Switzerland."
];

let factIndex = 0;
const factText = document.getElementById("fact-text");
const factRotator = document.getElementById("fact-rotator");
let factInterval;

function showFact(index) {
  factText.textContent = facts[index];
}

function startFactRotation() {
  factInterval = setInterval(() => {
    factIndex = (factIndex + 1) % facts.length;
    showFact(factIndex);
  }, 4000);
}

function stopFactRotation() {
  clearInterval(factInterval);
}

if (factText && factRotator) {
  showFact(factIndex);
  startFactRotation();

  factRotator.addEventListener("mouseenter", stopFactRotation);
  factRotator.addEventListener("mouseleave", startFactRotation);
  factRotator.addEventListener("focus", stopFactRotation);
  factRotator.addEventListener("blur", startFactRotation);
}


/* Json loading logic */

document.addEventListener("DOMContentLoaded", loadSwissItems);

async function loadSwissItems() {
  const container = document.getElementById("json-output");

  if (!container) return;

  try {
    const response = await fetch("/project/part7/data/items.json");

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();

    container.innerHTML = ""; 

    if (!data || !Array.isArray(data.items)) {
      container.textContent = "No items found in JSON data.";
      return;
    }

    data.items.forEach(item => {
      const card = document.createElement("div");
      card.className = "card json-card";

      card.innerHTML = `
        <div class="image-container">
          <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="card-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="meta">
            <span class="price">$${item.price}</span>
            <span class="cat">${item.category}</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("JSON Load Error:", error);
    container.innerHTML = `
      <p style="color: red; text-align: center; padding: 20px;">
        Failed to load Swiss items: ${error.message}<br>
        (Check console for details – make sure you're using Live Server)
      </p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msgDiv = document.getElementById("contact-msg");

  if (!form || !msgDiv) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    msgDiv.textContent = "";
    msgDiv.style.color = "";

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const formData = new FormData(form);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      const json = await response.json();

      if (json.success) {
        msgDiv.textContent = "Thank you! Your message has been sent successfully.";
        msgDiv.style.color = "var(--brand-green)";
        form.reset(); 
      } else {
        msgDiv.textContent = json.message || "Sorry, something went wrong. Please try again.";
        msgDiv.style.color = "#d32f2f";
      }
    } catch (err) {
      msgDiv.textContent = "Network error – please check your connection and try again.";
      msgDiv.style.color = "#d32f2f";
      console.error("Form submission error:", err);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
});