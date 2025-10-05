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

// 24-hour cooldown in milliseconds
const COOLDOWN = 24 * 60 * 60 * 1000;

function canGenerate() {
  const lastTime = localStorage.getItem("lastGenerated");
  if (!lastTime) return true;
  const now = Date.now();
  return now - lastTime >= COOLDOWN;
}

function getRemainingTime() {
  const lastTime = localStorage.getItem("lastGenerated");
  const now = Date.now();
  const remaining = COOLDOWN - (now - lastTime);
  if (remaining <= 0) return 0;
  return remaining;
}

function formatTime(ms) {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return `${hours}h ${minutes}m ${seconds}s`;
}

generateBtn.addEventListener("click", () => {
  if (!canGenerate()) {
    const remaining = getRemainingTime();
    keyOutput.innerHTML = `<span style="color:#ff5555;">You already generated a key! Next key in ${formatTime(remaining)}</span>`;
    return;
  }

  // Pick random key from the list
  const key = KEYS[Math.floor(Math.random() * KEYS.length)];

  // Show key and add glow
  keyOutput.innerHTML = `Your Key:<br><span style="font-size:1.2em;">${key}</span>`;
  keyOutput.classList.add("glow");

  copyBtn.style.display = "inline-block";
  copyBtn.dataset.key = key;

  // Save generation time to localStorage
  localStorage.setItem("lastGenerated", Date.now());
});

// Copy key to clipboard
copyBtn.addEventListener("click", () => {
  const key = copyBtn.dataset.key;
  navigator.clipboard.writeText(key);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy Key"), 1500);
});

// On page load, check cooldown
window.addEventListener("load", () => {
  if (!canGenerate()) {
    const remaining = getRemainingTime();
    keyOutput.innerHTML = `<span style="color:#ff5555;">You already generated a key! Next key in ${formatTime(remaining)}</span>`;
  }
});
