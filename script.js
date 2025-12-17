// ============================================
// KILANGI JEWELLERY - ANIMATED EXPERIENCE
// ============================================

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// ============================================
// ANIMATED HEADER ON SCROLL
// ============================================
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    header.style.padding = '10px 0';
  } else {
    header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.04)';
    header.style.padding = '20px 0';
  }
  
  // Hide header on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 200) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
}, { passive: true });

// Add smooth transition to header
if (header) {
  header.style.transition = 'all 0.3s ease';
}

// ============================================
// CATEGORY FILTER WITH ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const filterPills = document.querySelectorAll('.filters .pill');
  
  filterPills.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all pills
      filterPills.forEach(b => {
        b.classList.remove('active');
        b.style.transform = 'scale(1)';
      });
      
      // Add active class and animate
      this.classList.add('active');
      this.style.transform = 'scale(1.05)';
      
      // Bounce back
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
      
      // Animate product grid (fade and slide)
      const productGrid = document.querySelector('.product-grid');
      if (productGrid) {
        productGrid.style.opacity = '0';
        productGrid.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          productGrid.style.opacity = '1';
          productGrid.style.transform = 'translateY(0)';
        }, 100);
      }
    });
  });
});

// ============================================
// CATEGORY PILLS ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const categoryPills = document.querySelectorAll('.category-pill');
  
  categoryPills.forEach((pill, index) => {
    // Stagger animation on load
    pill.style.opacity = '0';
    pill.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      pill.style.transition = 'all 0.4s ease';
      pill.style.opacity = '1';
      pill.style.transform = 'translateY(0)';
    }, 100 * index);
    
    // Hover animation
    pill.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.03)';
      this.style.boxShadow = '0 6px 20px rgba(44, 95, 93, 0.2)';
    });
    
    pill.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });
});

// ============================================
// PRODUCT CARDS HOVER ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    const img = card.querySelector('.product-media img');
    
    card.addEventListener('mouseenter', function() {
      if (img) {
        img.style.transform = 'scale(1.08)';
        img.style.transition = 'transform 0.5s ease';
      }
      this.style.transform = 'translateY(-8px)';
      this.style.transition = 'transform 0.3s ease';
      this.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
    });
    
    card.addEventListener('mouseleave', function() {
      if (img) {
        img.style.transform = 'scale(1)';
      }
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
});

// ============================================
// COLOR DOT SELECTION WITH ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const colorDots = document.querySelectorAll('.color-dot');
  
  colorDots.forEach(dot => {
    dot.style.transition = 'all 0.3s ease';
    
    dot.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active from siblings
      const siblings = this.parentElement.querySelectorAll('.color-dot');
      siblings.forEach(s => {
        s.classList.remove('active');
        s.style.transform = 'scale(1)';
      });
      
      // Add active with animation
      this.classList.add('active');
      this.style.transform = 'scale(1.2) rotate(360deg)';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 300);
    });
    
    // Hover effect
    dot.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        this.style.transform = 'scale(1.1)';
      }
    });
    
    dot.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.transform = 'scale(1)';
      }
    });
  });
});

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const scrollReveal = () => {
  const reveals = document.querySelectorAll('.product-card, .recent-card, .collection-item, .gift-occasion-card');
  
  reveals.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.product-card, .recent-card, .collection-item, .gift-occasion-card');
  
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
  });
  
  window.addEventListener('scroll', scrollReveal, { passive: true });
  scrollReveal(); // Initial check
});

// ============================================
// SEARCH BAR ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search input');
  const searchForm = document.querySelector('.search');
  const searchBtn = document.querySelector('.search button');
  
  if (searchInput && searchForm) {
    searchInput.addEventListener('focus', () => {
      searchForm.style.transform = 'scale(1.02)';
      searchForm.style.boxShadow = '0 6px 25px rgba(44, 95, 93, 0.2)';
      
      if (searchBtn) {
        searchBtn.style.transform = 'rotate(90deg)';
      }
    });
    
    searchInput.addEventListener('blur', () => {
      searchForm.style.transform = 'scale(1)';
      searchForm.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
      
      if (searchBtn) {
        searchBtn.style.transform = 'rotate(0deg)';
      }
    });
    
    // Typing animation
    let typingTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(typingTimer);
      searchForm.style.borderColor = '#2c5f5d';
      
      typingTimer = setTimeout(() => {
        searchForm.style.borderColor = 'transparent';
      }, 1000);
    });
  }
  
  // Add transitions
  if (searchForm) {
    searchForm.style.transition = 'all 0.3s ease';
  }
  if (searchBtn) {
    searchBtn.style.transition = 'transform 0.3s ease';
  }
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-cta, .btn-cta-secondary, .btn-outline, .btn-ghost-ethos');
  
  buttons.forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// ============================================
// ICON BUTTONS ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const iconBtns = document.querySelectorAll('.icon-btn');
  
  iconBtns.forEach(btn => {
    btn.style.transition = 'transform 0.3s ease';
    
    btn.addEventListener('click', function(e) {
      // Heart beat animation
      this.style.animation = 'heartbeat 0.5s ease';
      
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });
    
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.15) rotate(5deg)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });
});

// ============================================
// COLLECTION ITEMS HOVER ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const collectionItems = document.querySelectorAll('.collection-item');
  
  collectionItems.forEach(item => {
    const img = item.querySelector('img');
    const label = item.querySelector('.collection-label');
    
    item.addEventListener('mouseenter', function() {
      if (img) {
        img.style.transform = 'scale(1.1) rotate(2deg)';
        img.style.transition = 'transform 0.4s ease';
      }
      if (label) {
        label.style.transform = 'translateY(-5px)';
        label.style.color = '#2c5f5d';
        label.style.transition = 'all 0.3s ease';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      if (img) {
        img.style.transform = 'scale(1) rotate(0deg)';
      }
      if (label) {
        label.style.transform = 'translateY(0)';
        label.style.color = '';
      }
    });
  });
});

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.4;
      
      if (scrolled <= window.innerHeight) {
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    }, { passive: true });
  }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
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

// ============================================
// TESTIMONIAL CARDS ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const testCards = document.querySelectorAll('.test-card');
  
  testCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.transition = 'all 0.4s ease';
      this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });
});

// ============================================
// NUMBER COUNTER ANIMATION (for stats)
// ============================================
const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
};

// ============================================
// ADD CSS ANIMATIONS
// ============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    10% { transform: scale(1.15); }
    20% { transform: scale(1); }
    30% { transform: scale(1.15); }
    40% { transform: scale(1); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  
  /* Smooth transitions for product grid */
  .product-grid {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  /* Image zoom on hover */
  .product-media img,
  .recent-media img,
  .gift-thumb img {
    transition: transform 0.5s ease;
  }
  
  /* Logo subtle float animation */
  .logo-img {
    animation: float 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener('load', () => {
  // Add stagger animation to all sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animation = `fadeInUp 0.8s ease ${index * 0.1}s both`;
  });
});

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log(
  '%c✨ Welcome to Kilangi Jewellery ✨',
  'font-size: 24px; font-weight: bold; color: #2c5f5d; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);'
);
console.log(
  '%cExperience timeless elegance with every scroll 💎',
  'font-size: 14px; color: #6e6b68; font-style: italic;'
);