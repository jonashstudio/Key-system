// --- CONFIG ---
const EXTERNAL_LINK = "https://link-target.net/1406617/zltdErmaz5UJ"; // open this first
// Full list of keys you gave (kept in same order)
const KEYS = [
  "ronashhub_20251004_001","ronashhub_20251004_002","ronashhub_20251004_003","ronashhub_20251004_004",
  "ronashhub_20251004_005","ronashhub_20251004_006","ronashhub_20251004_007","ronashhub_20251004_008",
  "ronashhub_20251004_009","ronashhub_20251004_010","ronashhub_20251004_011","ronashhub_20251004_012",
  "ronashhub_20251004_013","ronashhub_20251004_014","ronashhub_20251004_015","ronashhub_20251004_016",
  "ronashhub_20251004_017","ronashhub_20251004_018","ronashhub_20251004_019","ronashhub_20251004_020",
  "ronashhub_20251004_021","ronashhub_20251004_022","ronashhub_20251004_023","ronashhub_20251004_024",
  "ronashhub_20251004_025","ronashhub_20251004_026","ronashhub_20251004_027","ronashhub_20251004_028",
  "ronashhub_20251004_029","ronashhub_20251004_030","ronashhub_20251004_031","ronashhub_20251004_032",
  "ronashhub_20251004_033","ronashhub_20251004_034","ronashhub_20251004_035","ronashhub_20251004_036",
  "ronashhub_20251004_037","ronashhub_20251004_038","ronashhub_20251004_039","ronashhub_20251004_040",
  "ronashhub_20251004_041","ronashhub_20251004_042","ronashhub_20251004_043","ronashhub_20251004_044",
  "ronashhub_20251004_045","ronashhub_20251004_046","ronashhub_20251004_047","ronashhub_20251004_048",
  "ronashhub_20251004_049","ronashhub_20251004_050","ronashhub_20251004_051","ronashhub_20251004_052",
  "ronashhub_20251004_053","ronashhub_20251004_054","ronashhub_20251004_055","ronashhub_20251004_056",
  "ronashhub_20251004_057","ronashhub_20251004_058","ronashhub_20251004_059","ronashhub_20251004_060",
  "ronashhub_20251004_061","ronashhub_20251004_062","ronashhub_20251004_063","ronashhub_20251004_064",
  "ronashhub_20251004_065","ronashhub_20251004_066","ronashhub_20251004_067","ronashhub_20251004_068",
  "ronashhub_20251004_069","ronashhub_20251004_070","ronashhub_20251004_071","ronashhub_20251004_072",
  "ronashhub_20251004_073","ronashhub_20251004_074","ronashhub_20251004_075","ronashhub_20251004_076",
  "ronashhub_20251004_077","ronashhub_20251004_078","ronashhub_20251004_079","ronashhub_20251004_080",
  "ronashhub_20251004_081","ronashhub_20251004_082","ronashhub_20251004_083","ronashhub_20251004_084",
  "ronashhub_20251004_085","ronashhub_20251004_086","ronashhub_20251004_087","ronashhub_20251004_088",
  "ronashhub_20251004_089","ronashhub_20251004_090","ronashhub_20251004_091","ronashhub_20251004_092",
  "ronashhub_20251004_093","ronashhub_20251004_094","ronashhub_20251004_095","ronashhub_20251004_096",
  "ronashhub_20251004_097","ronashhub_20251004_098","ronashhub_20251004_099","ronashhub_20251004_100",
  "ronashhub_20251004_101","ronashhub_20251004_102","ronashhub_20251004_103","ronashhub_20251004_104",
  "ronashhub_20251004_105","ronashhub_20251004_106","ronashhub_20251004_107","ronashhub_20251004_108",
  "ronashhub_20251004_109","ronashhub_20251004_110","ronashhub_20251004_111","ronashhub_20251004_112",
  "ronashhub_20251004_113","ronashhub_20251004_114","ronashhub_20251004_115","ronashhub_20251004_116",
  "ronashhub_20251004_117","ronashhub_20251004_118","ronashhub_20251004_119","ronashhub_20251004_120",
  "ronashhub_20251004_121","ronashhub_20251004_122","ronashhub_20251004_123","ronashhub_20251004_124",
  "ronashhub_20251004_125","ronashhub_20251004_126","ronashhub_20251004_127","ronashhub_20251004_128",
  "ronashhub_20251004_129","ronashhub_20251004_130","ronashhub_20251004_131","ronashhub_20251004_132",
  "ronashhub_20251004_133","ronashhub_20251004_134","ronashhub_20251004_135","ronashhub_20251004_136",
  "ronashhub_20251004_137","ronashhub_20251004_138","ronashhub_20251004_139","ronashhub_20251004_140",
  "ronashhub_20251004_141","ronashhub_20251004_142","ronashhub_20251004_143","ronashhub_20251004_144",
  "ronashhub_20251004_145","ronashhub_20251004_146","ronashhub_20251004_147","ronashhub_20251004_148",
  "ronashhub_20251004_149","ronashhub_20251004_150","ronashhub_20251004_151","ronashhub_20251004_152",
  "ronashhub_20251004_153","ronashhub_20251004_154","ronashhub_20251004_155","ronashhub_20251004_156",
  "ronashhub_20251004_157","ronashhub_20251004_158","ronashhub_20251004_159","ronashhub_20251004_160",
  "ronashhub_20251004_161","ronashhub_20251004_162","ronashhub_20251004_163","ronashhub_20251004_164",
  "ronashhub_20251004_165","ronashhub_20251004_166","ronashhub_20251004_167","ronashhub_20251004_168",
  "ronashhub_20251004_169","ronashhub_20251004_170","ronashhub_20251004_171","ronashhub_20251004_172",
  "ronashhub_20251004_173","ronashhub_20251004_174","ronashhub_20251004_175","ronashhub_20251004_176",
  "ronashhub_20251004_177","ronashhub_20251004_178","ronashhub_20251004_179","ronashhub_20251004_180",
  "ronashhub_20251004_181","ronashhub_20251004_182","ronashhub_20251004_183","ronashhub_20251004_184",
  "ronashhub_20251004_185","ronashhub_20251004_186","ronashhub_20251004_187","ronashhub_20251004_188",
  "ronashhub_20251004_189","ronashhub_20251004_190","ronashhub_20251004_191","ronashhub_20251004_192",
  "ronashhub_20251004_193","ronashhub_20251004_194","ronashhub_20251004_195","ronashhub_20251004_196",
  "ronashhub_20251004_197","ronashhub_20251004_198","ronashhub_20251004_199","ronashhub_20251004_200"
];

// --- localStorage key where issuance metadata is stored ---
const STORAGE_KEY = "ronash_key_issued_map_v1"; // stores map: { key: expireAtMillis }
const openBtn = document.getElementById("openLinkBtn");
const copyBtn = document.getElementById("copyKeyBtn");
const out = document.getElementById("keyOutput");

// load issued map from localStorage
function loadIssuedMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function saveIssuedMap(m) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(m));
}

function findNextAvailableKey() {
  const issued = loadIssuedMap();
  const now = Date.now();
  for (let k of KEYS) {
    if (!issued[k]) return k; // never issued
    // if issued but expired, allow reuse
    if (issued[k] && issued[k] < now) return k;
  }
  return null; // none available
}

function markKeyIssued(key) {
  const issued = loadIssuedMap();
  const expireAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  issued[key] = expireAt;
  saveIssuedMap(issued);
  return expireAt;
}

openBtn.addEventListener("click", () => {
  // 1) open external link in new tab
  window.open(EXTERNAL_LINK, "_blank", "noopener");

  // 2) get next key and show to user
  const key = findNextAvailableKey();
  if (!key) {
    out.textContent = "No keys available right now. Try again later.";
    copyBtn.style.display = "none";
    return;
  }

  const expireAt = markKeyIssued(key);
  const expireDate = new Date(expireAt);
  out.innerHTML = `${key} <br><small style="color:#99a3b2">Expires: ${expireDate.toLocaleString()}</small>`;
  copyBtn.style.display = "inline-block";
  // store displayed key on copy button dataset
  copyBtn.dataset.key = key;
});

// copy current key
copyBtn.addEventListener("click", () => {
  const key = copyBtn.dataset.key;
  if (!key) return;
  navigator.clipboard.writeText(key).then(() => {
    copyBtn.textContent = "Copied";
    setTimeout(() => copyBtn.textContent = "Copy Key", 1200);
  }).catch(() => {
    copyBtn.textContent = "Copy failed";
  });
});
