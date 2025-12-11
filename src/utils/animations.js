/**
 * Scroll Animation Utilities
 * Provides smooth scroll behavior and reveal animations
 */

// Initialize scroll reveal animations
export const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
};

// Smooth scroll to element
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Add parallax effect to element
export const addParallaxEffect = (element, speed = 0.5) => {
  if (!element) return;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const elementOffset = element.offsetTop;
    const elementHeight = element.offsetHeight;

    if (scrolled + window.innerHeight > elementOffset && scrolled < elementOffset + elementHeight) {
      const yPos = -(scrolled - elementOffset) * speed;
      element.style.transform = `translateY(${yPos}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// Staggered animation for child elements
export const staggerAnimation = (parentElement, delay = 100) => {
  if (!parentElement) return;

  const children = parentElement.children;
  Array.from(children).forEach((child, index) => {
    child.style.animationDelay = `${index * delay}ms`;
    child.classList.add('reveal');
  });
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Add hover tilt effect
export const addTiltEffect = (element, maxTilt = 15) => {
  if (!element) return;

  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const tiltX = (y / rect.height) * maxTilt;
    const tiltY = -(x / rect.width) * maxTilt;
    
    element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Animate number counter
export const animateCounter = (element, target, duration = 2000) => {
  if (!element) return;

  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

export default {
  initScrollReveal,
  smoothScrollTo,
  addParallaxEffect,
  staggerAnimation,
  isInViewport,
  addTiltEffect,
  animateCounter
};
