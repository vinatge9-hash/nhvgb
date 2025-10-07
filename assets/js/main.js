// Main.js: Interactivity and scroll animations (Intersection Observer)

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle (header)
  const mbBtn = document.getElementById('mobileMenuBtn');
  const mb = document.getElementById('mobileMenu');
  if (mbBtn && mb) {
    mbBtn.addEventListener('click', () => {
      const isHidden = mb.classList.contains('hidden');
      mb.classList.toggle('hidden', !isHidden);
    });
  }
  // Secondary mobile menu (for menu.html) if present
  const mbBtn2 = document.getElementById('mobileMenuBtn2');
  const mb2 = document.getElementById('mobileMenu2');
  if (mbBtn2 && mb2) {
    mbBtn2.addEventListener('click', () => {
      const isHidden = mb2.classList.contains('hidden');
      mb2.classList.toggle('hidden', !isHidden);
    });
  }

  // Intersection Observer for on-load/scroll animations
  const toAnimate = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 600ms cubic-bezier(.22,.61,.36,1), transform 600ms cubic-bezier(.22,.61,.36,1)';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obv.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  toAnimate.forEach(el => {
    // initialize
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    observer.observe(el);
  });

  // Newsletter signup toast helper
  window.showToast = function(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 300ms ease, transform 300ms ease';
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(-2px)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(0)';
      setTimeout(() => toast.classList.add('hidden'), 350);
    }, 2500);
  };

  // Simple subscribe button on index page and others
  const newsletterBtn = document.getElementById('newsletter-btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', () => showToast('Subscribed to newsletter!'));
  }

  // Background: add subtle parallax on hero if present (optional)
  const hero = document.getElementById('hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.05;
      hero.style.backgroundPosition = 'center ' + (-y) + 'px';
    });
  }
});
