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

/* ==========================
   Mobile Navigation Logic
========================== */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("primary-navigation");
const header = document.getElementById("site-header");

// Toggle Menu
hamburger?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");

  hamburger.setAttribute("aria-expanded", isOpen);
});

// Close Menu When Clicking a Link
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Close Menu on ESC Key (Accessibility Upgrade)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

// Sticky Header Shadow on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
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