// Simple scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .hero");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        sec.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
// Mobile Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Change icon (bars <-> x)
    hamburger.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
});
