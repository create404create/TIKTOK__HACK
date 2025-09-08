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

function startAttack() {
  let attackPanel = document.getElementById("attackPanel");
  let passwordsDiv = document.getElementById("passwords");
  let timerEl = document.getElementById("timer");

  attackPanel.classList.remove("hidden");
  passwordsDiv.innerHTML = "";

  let fakePasswords = [
    "123456", "password", "tiger123", "farooq786", "admin", "letmein",
    "love123", "dragon", "qwerty", "pakistan786", "pass123", "hackme",
    "kingtiger", "tiktok123", "badshah786", "abc123", "123123", "mypassword"
  ];

  let i = 0;
  let interval = setInterval(() => {
    if (i < fakePasswords.length) {
      let p = document.createElement("p");
      p.textContent = "Trying password: " + fakePasswords[i];
      passwordsDiv.appendChild(p);
      passwordsDiv.scrollTop = passwordsDiv.scrollHeight;
      i++;
    }
  }, 1500);

  let timeLeft = 60;
  let timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      clearInterval(interval);
      passwordsDiv.innerHTML += "<p style='color:lime'>✅ Attack finished</p>";
    }
  }, 1000);
}
