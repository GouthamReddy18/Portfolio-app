function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


// Intersection Observer for skill animations
const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, { threshold: 0.2 });

skills.forEach(skill => observer.observe(skill));
