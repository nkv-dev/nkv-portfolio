function initBackToTop() {
  const backToTopButton = document.getElementById("backToTop");
  if (!backToTopButton) return;

  const onScroll = () => {
    backToTopButton.classList.toggle("flex", window.pageYOffset > 300);
    backToTopButton.classList.toggle("hidden", window.pageYOffset <= 300);

    const progressBar = document.querySelector(".scroll-progress");
    if (progressBar) {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = `${(window.pageYOffset / documentHeight) * 100}%`;
    }
  };

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initFooterLinks() {
  document.querySelectorAll('.footer-link[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function updateCopyrightYear() {
  const copyrightElement = document.querySelector(".copyright");
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} Nitesh Kumar Verma. All rights reserved.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initBackToTop();
  initFooterLinks();
  updateCopyrightYear();
});