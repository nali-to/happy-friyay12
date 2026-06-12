function photoSurprise() {
  const photoMessage = document.getElementById("photoMessage");
  photoMessage.classList.remove("hidden");
  photoMessage.innerText = "My favorite view will always be us together 🥹💛";

  for (let i = 0; i < 15; i++) {
    createSparkle();
  }
}

function introSurprise() {
  const introMessage = document.getElementById("introMessage");
  introMessage.classList.remove("hidden");
  introMessage.innerText = "I miss you extra today, but we are getting closer 🥹💛";

  for (let i = 0; i < 20; i++) {
    createHeart();
    createSparkle();
  }
}

function showMessage() {
  const message = document.getElementById("loveMessage");
  message.classList.remove("hidden");

  for (let i = 0; i < 25; i++) {
    createHeart();
  }
}

function revealCountdownMessage(number) {
  const countdownMessage = document.getElementById("countdownMessage");
  countdownMessage.classList.remove("hidden");

  if (number === 12) {
    countdownMessage.innerText = "12 days until I get to hold you again. I cannot wait 🥹";
  }

  if (number === 14) {
    countdownMessage.innerText = "14 days until our big day. My heart is so ready 🤍";
  }

  if (number === 15) {
    countdownMessage.innerText = "15 days until we return to the country where everything started 🌍💕";
  }

  for (let i = 0; i < 12; i++) {
    createHeart();
  }
}

function startLoveSurprise() {
  const box = document.getElementById("surpriseBox");
  const text = document.getElementById("surpriseText");
  const subtext = document.getElementById("surpriseSubtext");

  box.classList.remove("hidden");

  let count = 3;
  text.innerText = count;
  subtext.innerText = "Friyay surprise loading...";

  const countdown = setInterval(() => {
    count--;

    if (count > 0) {
      text.innerText = count;
    } else {
      clearInterval(countdown);
      text.innerText = "Friyay unlocked 💛";
      subtext.innerText = "You are loved, missed, chosen, and so worth the wait.";

      for (let i = 0; i < 45; i++) {
        createHeart();
        createSparkle();
      }
    }
  }, 1000);
}

function showNote(number) {
  const noteText = document.getElementById("noteText");
  noteText.classList.remove("hidden");

  if (number === 1) {
    noteText.innerText = "I love you because you make ordinary days feel special.";
  }

  if (number === 2) {
    noteText.innerText = "I love you because even the distance feels easier when it is you.";
  }

  if (number === 3) {
    noteText.innerText = "I love you because you are my favorite person and my safest place.";
  }

  for (let i = 0; i < 12; i++) {
    createSparkle();
  }
}

function finalMessage() {
  const finalText = document.getElementById("finalText");
  finalText.classList.remove("hidden");
  finalText.innerText = "Happy Friyay, my love. I cannot wait for all the days that are coming with you 🤍";

  for (let i = 0; i < 50; i++) {
    createHeart();
    createSparkle();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = ["💛", "💕", "🤍", "✨", "💖"][Math.floor(Math.random() * 5)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.fontSize = Math.random() * 18 + 18 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.innerHTML = ["✨", "💛", "💕", "🤍"][Math.floor(Math.random() * 4)];

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1200);
}

setInterval(createHeart, 900);
