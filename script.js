// Set current year
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Filter pills functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterPills = document.querySelectorAll('.filters .pill');
  
  filterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});

// Color dot selection
document.addEventListener('DOMContentLoaded', () => {
  const colorDots = document.querySelectorAll('.color-dot');
  
  colorDots.forEach(dot => {
    dot.addEventListener('click', function(e) {
      e.preventDefault();
      // Remove active from siblings
      const siblings = this.parentElement.querySelectorAll('.color-dot');
      siblings.forEach(s => s.classList.remove('active'));
      // Add active to clicked
      this.classList.add('active');
    });
  });
});

// Gold glow effect
(function() {
  const buttonSelectors = [
    'button',
    'a[class*="btn"]',
    '.icon-btn',
    '.pill',
    '.category-pill',
    '.btn-outline',
    '.btn-ghost-ethos',
    '.color-dot'
  ].join(',');

  const imageSelectors = [
    '.product-media img',
    '.recent-media img',
    '.gift-thumb img',
    '.test-thumb img',
    '.collection-item img',
    '.promo',
    '.ethos-image img',
    '.future-image img'
  ].join(',');

  function uniq(arr) {
    return Array.from(new Set(arr));
  }

  function addListeners(elements) {
    elements.forEach(el => {
      if (!el.classList.contains('gold-glow-transition')) {
        el.classList.add('gold-glow-transition');
      }

      el.addEventListener('mouseenter', () => el.classList.add('gold-glow'));
      el.addEventListener('mouseleave', () => el.classList.remove('gold-glow'));
      el.addEventListener('focus', () => el.classList.add('gold-glow'), true);
      el.addEventListener('blur', () => el.classList.remove('gold-glow'), true);

      el.addEventListener('touchstart', () => {
        el.classList.add('gold-glow');
        setTimeout(() => el.classList.remove('gold-glow'), 700);
      }, { passive: true });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btnEls = Array.from(document.querySelectorAll(buttonSelectors));
    const imgEls = Array.from(document.querySelectorAll(imageSelectors));
    const allElements = uniq([...btnEls, ...imgEls]);
    addListeners(allElements);
  });
})();

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});