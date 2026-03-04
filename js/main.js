document.addEventListener("DOMContentLoaded", () => {

  // Expandable service drawers
  const buttons = document.querySelectorAll(".drawer-toggle");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.classList.toggle("active");
      button.textContent = content.classList.contains("active")
        ? "Show Less"
        : "Learn More";
    });
  });

  // Subtle fade-in animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });

});