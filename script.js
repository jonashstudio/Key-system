// script.js
let currentStep = parseInt(localStorage.getItem('currentStep')) || 1;
const totalSteps = 2;
const adWaitTime = 60; // seconds to wait before enabling continue
const adUrls = [
  'https://workink.net/23PZ/Ronash%20hub',
  'https://link-target.net/1424046/HPxPeiwfkobC'
];

function updateProgress() {
  document.getElementById('progress').textContent = `Progress: ${currentStep - 1}/${totalSteps}`;
  localStorage.setItem('currentStep', currentStep);
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
  document.getElementById(`countdown${step}`).classList.remove('hidden');
  document.getElementById(`continue${step}`).classList.remove('hidden');
  
  let timeLeft = adWaitTime;
  const countdownEl = document.getElementById(`countdown${step}`);
  countdownEl.textContent = `Please complete the ad. Continue available in ${timeLeft} seconds...`;
  
  const interval = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = `Please complete the ad. Continue available in ${timeLeft} seconds...`;
    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownEl.textContent = 'You can now continue.';
      document.getElementById(`continue${step}`).disabled = false;
    }
  }, 1000);
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
  localStorage.removeItem('currentStep'); // Reset for next time if needed
}

// Initial setup
updateProgress();
showNextStep();

// Check if key already generated (for demo)
if (localStorage.getItem('generatedKey') && currentStep > totalSteps) {
  updateProgress();
  document.querySelectorAll('.step').forEach(el => el.classList.add('hidden'));
  generateKey(); // Will display the stored key
                                                                    }
