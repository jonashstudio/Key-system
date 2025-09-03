const keyLifetime = 24 * 60 * 60 * 1000; // 24h validity

// Generate a random key
function generateKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "RONASH-";
  for (let i = 0; i < 8; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}

// Get Key → opens Linkvertise first
function getKey() {
  // Open Linkvertise
  window.open("https://link-hub.net/1392426/izgbI46tRU33", "_blank");
  
  // Generate new random key
  const newKey = generateKey();
  localStorage.setItem("ronashKey", newKey);
  localStorage.setItem("ronashTime", Date.now());
  
  // Show key to user
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
      msg.textContent = "✅ Access Granted! Your loadstring is below:";
      msg.className = "success";
      
      // Show the Roblox loadstring
      showLoadstring();
      
    } else {
      msg.textContent = "⌛ Key expired. Please get a new one.";
      msg.className = "error";
    }
  } else {
    msg.textContent = "❌ Invalid Key!";
    msg.className = "error";
  }
}

// Display the loadstring in a copyable box
function showLoadstring() {
  // Check if box already exists
  if (document.getElementById("loadstringBox")) return;

  const container = document.querySelector(".container");
  const box = document.createElement("textarea");
  box.id = "loadstringBox";
  box.readOnly = true;
  box.style.width = "100%";
  box.style.height = "70px";
  box.style.marginTop = "15px";
  box.style.padding = "10px";
  box.style.borderRadius = "10px";
  box.style.fontSize = "14px";
  box.style.background = "rgba(0,0,0,0.2)";
  box.style.color = "white";
  box.value = `loadstring(game:HttpGet("https://raw.githubusercontent.com/jonashstudio/RonashOnTop.github.io/refs/heads/main/script.lua"))()`;

  container.appendChild(box);

  // Optional: automatically select text for easy copy
  box.select();
  document.execCommand("copy");
  alert("📋 Loadstring copied to clipboard!");
}
