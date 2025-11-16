// Dark / Light mode toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark')
    ? '☀️ Light'
    : '🌙 Dark';
});

// Section fade-in animation on scroll
const sections = document.querySelectorAll("section");
const reveal = () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
};
window.addEventListener("scroll", reveal);
reveal();
