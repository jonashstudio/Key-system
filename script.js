// script.js
let currentStep = 1;
const totalSteps = 3;
const adUrls = [
  'https://workink.net/23PZ/Ronash%20hub',
  'https://workink.net/23PZ/Ronash%20hub', // Replace with actual ad link for step 2 if available
  'https://workink.net/23PZ/Ronash%20hub'  // Replace with actual ad link for step 3 if available
];

function updateProgress() {
  document.getElementById('progress').textContent = `Progress: ${currentStep - 1}/${totalSteps}`;
}

function showNextStep() {
  if (currentStep <= totalSteps) {
    document.getElementById(`step${currentStep}`).classList.remove('hidden');
  } else {
    generateKey();
  }
}

function startAd(step) {
  window.open(adUrls[step - 1], '_blank');
  document.querySelector(`#step${step} .continue-btn`).classList.remove('hidden');
}

function completeStep(step) {
  document.getElementById(`step${step}`).classList.add('hidden');
  currentStep++;
  updateProgress();
  showNextStep();
}

function generateKey() {
  // Generate a random key (UUID-like)
  const key = crypto.randomUUID ? crypto.randomUUID() : 
    Math.random().toString(36).substring(2) + Date.now().toString(36);
  
  document.getElementById('key-section').classList.remove('hidden');
  document.getElementById('generated-key').textContent = key;
  
  // Save to localStorage for demo persistence (optional)
  localStorage.setItem('generatedKey', key);
}

// Initial setup
updateProgress();
showNextStep();

// Check if key already generated (for demo)
if (localStorage.getItem('generatedKey')) {
  currentStep = totalSteps + 1;
  updateProgress();
  document.querySelectorAll('.step').forEach(el => el.classList.add('hidden'));
  generateKey(); // Will display the stored key
}
