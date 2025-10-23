document.addEventListener("DOMContentLoaded", () => {
  // dynamic footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // block right-click on images
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("contextmenu", e => e.preventDefault());
  });

  // form validation
  const form = document.getElementById("regForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const pw = form.password.value;
      const confirmPw = form.confirmPassword.value;
      if (pw !== confirmPw) {
        alert("Passwords do not match!");
        return;
      }
      alert("Registration successful!");
      form.reset();
    });

    // hover effects
    document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("mouseover", () => btn.style.backgroundColor = "#28a745");
      btn.addEventListener("mouseout", () => btn.style.backgroundColor = "#0b5ed7");
    });
  }
});
