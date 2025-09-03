const keyLifetime = 24 * 60 * 60 * 1000; // 24h

// Generate random key
function generateKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "RONASH-";
  for (let i = 0; i < 8; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}

// Get Key → goes through Linkvertise first
function getKey() {
  window.open("https://linkvertise.com/123456/ronash-hub-key", "_blank"); // replace with your link
  const newKey = generateKey();
  localStorage.setItem("ronashKey", newKey);
  localStorage.setItem("ronashTime", Date.now());
  alert("✅ Your Ronash Hub key:\n\n" + newKey + "\n\n(Valid for 24 hours)");
}

// Verify Key
function checkKey() {
  const input = document.getElementById("keyInput").value.trim();
  const savedKey = localStorage.getItem("ronashKey");
  const savedTime = parseInt(localStorage.getItem("ronashTime"), 10);
  const now = Date.now();
  const msg = document.getElementById("message");

  if (!savedKey) {
    msg.textContent = "⚠️ Please get a key first!";
    msg.className = "error";
    return;
  }

  if (input === savedKey) {
    if (now - savedTime < keyLifetime) {
      msg.textContent = "✅ Access Granted!";
      msg.className = "success";
      setTimeout(() => {
        window.location.href = "https://your-script-link.com"; // put your script link here
      }, 1500);
    } else {
      msg.textContent = "⌛ Key expired. Please get a new one.";
      msg.className = "error";
    }
  } else {
    msg.textContent = "❌ Invalid Key!";
    msg.className = "error";
  }
    }
