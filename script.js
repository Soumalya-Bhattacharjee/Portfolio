document.addEventListener("DOMContentLoaded", function () {
  const slideSections = document.querySelectorAll(".slide-section");

  const revealOnScroll = () => {
    slideSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Trigger animation when section is visible
      if (sectionTop < windowHeight && sectionBottom > 0) {
        section.classList.add("show");
      } else {
        section.classList.remove("show"); // remove so it can animate again
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
