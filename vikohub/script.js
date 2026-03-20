// ============================================
// Navbar: Sticky scroll shadow + hamburger
// ============================================
const navbar = document.querySelector('.navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');

// Hamburger mobile menu
hamburgerBtn.addEventListener('click', () => {
  let mobileMenu = document.querySelector('.navbar__mobile-menu');
  if (!mobileMenu) {
    mobileMenu = document.createElement('div');
    mobileMenu.className = 'navbar__mobile-menu';
    // Clone nav links
    const navLinks = document.querySelectorAll('.navbar__nav a');
    navLinks.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent;
      mobileMenu.appendChild(a);
    });
    const ctaClone = document.querySelector('.navbar__cta').cloneNode(true);
    mobileMenu.appendChild(ctaClone);
    navbar.appendChild(mobileMenu);
  }
  mobileMenu.classList.toggle('is-open');
});

// Scroll: add background shade when scrolled past hero
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(20,20,20,0.98)';
  } else {
    navbar.style.background = '#1E1E1E';
  }
});

// ============================================
// Smooth scroll for all anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================
// Play button modals (video placeholder)
// ============================================
document.querySelectorAll('.btn--play, .transform__play').forEach(btn => {
  btn.addEventListener('click', () => {
    // Placeholder: alert for now — replace with actual video modal
    alert('Video playback: Replace with modal or embed.');
  });
});
