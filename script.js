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

function getLastGenerated() {
  const last = localStorage.getItem("lastGenerated");
  return last ? parseInt(last) : null;
}

function canGenerate() {
  const last = getLastGenerated();
  if (!last) return true;
  const now = Date.now();
  return now - last >= COOLDOWN;
}

function getRemainingTime() {
  const last = getLastGenerated();
  if (!last) return 0;
  const now = Date.now();
  const remaining = COOLDOWN - (now - last);
  return remaining > 0 ? remaining : 0;
}

function formatTime(ms) {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return `${hours}h ${minutes}m ${seconds}s`;
}

function showCooldownMessage() {
  const remaining = getRemainingTime();
  keyOutput.innerHTML = `<span style="color:#ff5555;">You already generated a key! Next key in ${formatTime(remaining)}</span>`;
  copyBtn.style.display = "none";
}

function generateKey() {
  // Pick random key
  const key = KEYS[Math.floor(Math.random() * KEYS.length)];
  keyOutput.innerHTML = `Your Key:<br><span style="font-size:1.2em;">${key}</span>`;
  keyOutput.classList.add("glow");
  copyBtn.style.display = "inline-block";
  copyBtn.dataset.key = key;

  // Save current time
  localStorage.setItem("lastGenerated", Date.now());
}

generateBtn.addEventListener("click", () => {
  if (!canGenerate()) {
    showCooldownMessage();
    return;
  }
  generateKey();
});

// Copy key to clipboard
copyBtn.addEventListener("click", () => {
  const key = copyBtn.dataset.key;
  navigator.clipboard.writeText(key);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy Key"), 1500);
});

// On page load, show cooldown if needed
window.addEventListener("load", () => {
  if (!canGenerate()) {
    showCooldownMessage();
  }
});
