
// Initialize ScrollReveal for smooth animations
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuBtn.querySelector('i').textContent = 
        navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }
  // Configure ScrollReveal
  ScrollReveal().reveal('.reveal', { 
    duration: 1000,
    distance: '50px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'bottom',
    interval: 200
  });
  
  // Add interactive elements behavior
  const interactiveElements = document.querySelectorAll('.btn, img, video');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = element.classList.contains('btn') ? 
        'translateY(-5px)' : 'scale(1.02)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add some subtle bounce effect when clicking buttons
    if (element.classList.contains('btn')) {
      element.addEventListener('click', function(e) {
        // Small bounce animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 100);
      });
    }
  });
  
  // Add a bounce effect to the header on page load
  const header = document.querySelector('header');
  if (header) {
    header.classList.add('animated');
    
    // Create a subtle parallax effect on scroll
    window.addEventListener('scroll', function() {
      const scrollPos = window.scrollY;
      header.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
    });
  }
});
