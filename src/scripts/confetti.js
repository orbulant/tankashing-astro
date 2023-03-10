import confetti from "canvas-confetti";

// Find our component DOM on the page.
const buttons = document.querySelectorAll("[data-confetti-button]");

// Add event listeners to fire confetti when a button is clicked.
buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonOnClick());
});

let count = 0;

function handleButtonOnClick() {
  count++;

  coolAssConfetti();

  if (count < 10) {
    return;
  }

  if (
    !window.location.pathname.includes("secrets") &&
    !window.location.pathname.includes("love")
  ) {
    window.location.href = "/secrets";
  }

  if (count < 20) {
    return;
  }

  if (window.location.pathname.includes("secrets")) {
    window.location.href = "/love";
  }
}

function coolAssConfetti() {
  let count = 100;
  let defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
