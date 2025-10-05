// === FLOATING PARTICLES ===
for (let i = 0; i < 40; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 3 + Math.random() * 4 + "s";
  document.body.appendChild(p);
}

// === KEY GENERATION ===
const KEYS = Array.from({ length: 200 }, (_, i) =>
  `ronashhub_20251004_${String(i + 1).padStart(3, "0")}`
);

const generateBtn = document.getElementById("generateBtn");
const keyOutput = document.getElementById("keyOutput");
const copyBtn = document.getElementById("copyKeyBtn");

generateBtn.addEventListener("click", () => {
  // Pick random key from the list
  const key = KEYS[Math.floor(Math.random() * KEYS.length)];

  // Show key in UI and add glow animation
  keyOutput.innerHTML = `Your Key:<br><span style="font-size:1.2em;">${key}</span>`;
  keyOutput.classList.add("glow");

  copyBtn.style.display = "inline-block";
  copyBtn.dataset.key = key;
});

// Copy key to clipboard
copyBtn.addEventListener("click", () => {
  const key = copyBtn.dataset.key;
  navigator.clipboard.writeText(key);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy Key"), 1500);
});
