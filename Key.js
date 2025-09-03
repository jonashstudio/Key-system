function getKey() {
  // Open Linkvertise in the current tab or new tab
  const linkvertiseURL = "https://link-hub.net/1392426/izgbI46tRU33";

  // Open in a new tab
  const newTab = window.open(linkvertiseURL, "_blank");

  if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
    alert("⚠️ Please allow popups so Linkvertise can open!");
    return;
  }

  // Wait a few seconds before showing the key
  setTimeout(() => {
    const newKey = generateKey();
    localStorage.setItem("ronashKey", newKey);
    localStorage.setItem("ronashTime", Date.now());
    alert("✅ Your Ronash Hub key:\n\n" + newKey + "\n\n(Valid for 24 hours)");
  }, 3000); // 3 seconds delay to ensure Linkvertise opens
}
