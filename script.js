document.addEventListener("DOMContentLoaded", function () {
  const launchDate = new Date("May 1, 2025 00:00:00").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "<h2>We're Live!</h2>";
      return;
    }

    document.getElementById("days").textContent = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").textContent = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").textContent = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }, 1000);

  document.getElementById("subscribe-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We'll notify you when we launch.");
  });
});
