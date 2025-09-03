const keyLifetime = 24 * 60 * 60 * 1000; // 24h validity

// Redirect to Linkvertise
function getKey() {
  window.location.href = "https://link-hub.net/1392426/izgbI46tRU33";
}

// Verify key
function checkKey() {
  const input = document.getElementById("keyInput").value.trim();
  const savedKey = localStorage.getItem("ronashKey");
  const savedTime = parseInt(localStorage.getItem("ronashTime"),10);
  const now = Date.now();
  const msg = document.getElementById("message");
  const loadBox = document.getElementById("loadstringBox");

  if(!savedKey){
    msg.textContent = "⚠️ Please get a key first!";
    msg.className = "error";
    loadBox.style.display = "none";
    return;
  }

  if(input === savedKey){
    if(now - savedTime < keyLifetime){
      msg.textContent = "✅ Access Granted! Your loadstring is below:";
      msg.className = "success";
      loadBox.style.display = "block";
      loadBox.value = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/jonashstudio/RonashOnTop.github.io/refs/heads/main/script.lua"))()';
      loadBox.select();
      document.execCommand("copy");
      alert("📋 Loadstring copied to clipboard!");
    } else {
      msg.textContent = "⌛ Key expired. Please get a new one.";
      msg.className = "error";
      loadBox.style.display = "none";
    }
  } else {
    msg.textContent = "❌ Invalid Key!";
    msg.className = "error";
    loadBox.style.display = "none";
  }
}
