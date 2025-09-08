// Matrix background animation
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 35);

// Username check
function checkUser() {
  let username = document.getElementById("username").value.trim();
  let loading = document.getElementById("loading");
  let profile = document.getElementById("profile");
  let error = document.getElementById("error");

  profile.classList.add("hidden");
  error.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    if (username === "farooq..tiger...1") {
      profile.classList.remove("hidden");
    } else {
      error.classList.remove("hidden");
    }
  }, 2000);
}

// Fake brute force attack
function startAttack() {
  let attackPanel = document.getElementById("attackPanel");
  let logsDiv = document.getElementById("logs");
  let progressBar = document.getElementById("progress-bar");
  let timerEl = document.getElementById("timer");

  attackPanel.classList.remove("hidden");
  logsDiv.innerHTML = "";
  progressBar.style.width = "0%";

  let fakePasswords = [
    "123456", "password", "tiger123", "farooq786", "letmein", "qwerty", "dragon", "love123", 
    "kingtiger", "badshah786", "iloveyou", "secret", "mypassword", "admin", "pass123", "hackme"
  ];

  // Auto-generate more fake passwords
  for (let i = 0; i < 100; i++) {
    fakePasswords.push("user" + Math.floor(Math.random() * 99999));
  }

  let i = 0;
  let timeLeft = 60;
  let total = fakePasswords.length;

  let interval = setInterval(() => {
    if (i < total) {
      let log = document.createElement("p");
      log.textContent = `[+] Trying password: ${fakePasswords[i]} -> Response: Invalid`;
      logsDiv.appendChild(log);
      logsDiv.scrollTop = logsDiv.scrollHeight;

      i++;
      progressBar.style.width = ((i / total) * 100) + "%";
    } else {
      clearInterval(interval);
      logsDiv.innerHTML += `<p style='color:lime'>✅ Attack Finished: ACCESS DENIED </p>`;
    }
  }, 1000);

  // Timer countdown
  let timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
