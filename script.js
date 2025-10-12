// Set dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
  
    // Prevent right-clicking images
    document.querySelectorAll("img").forEach(img => {
      img.addEventListener("contextmenu", e => e.preventDefault());
    });
  });