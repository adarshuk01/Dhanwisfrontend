 
 document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    
    // Toggle menu visibility
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('hidden');
      
      // Optional: Change hamburger icon to X when menu is open
      if (menu.classList.contains('hidden')) {
        menuBtn.innerHTML = '☰';
      } else {
        menuBtn.innerHTML = '×';
      }
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(event) {
      if (!menu.classList.contains('hidden') && window.innerWidth < 768) {
        if (!menu.contains(event.target) && event.target !== menuBtn) {
          menu.classList.add('hidden');
          menuBtn.innerHTML = '☰';
        }
      }
    });
    
    // Close menu when a link is clicked (for single page applications)
    const navLinks = menu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
          menu.classList.add('hidden');
          menuBtn.innerHTML = '☰';
        }
      });
    });
  });
 
 
const sections = document.querySelectorAll('section');
let observer;

function createObserver() {
  // If observer already exists, disconnect it to avoid duplicates
  if (observer) observer.disconnect();

  // Choose threshold based on viewport width
  const threshold = window.innerWidth <= 768 ? 0.2 : 0.4;

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold });

  // Observe all sections again
  sections.forEach(section => observer.observe(section));
}

// Initial call to create observer
createObserver();

// Debounce resize handler to prevent excessive calls
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    createObserver();
  }, 200); // adjust delay as needed
});



   const navbar = document.getElementById("navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scroll Down
      navbar.classList.add("-translate-y-full");
    } else {
      // Scroll Up
      navbar.classList.remove("-translate-y-full");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });