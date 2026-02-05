/* ============================================
   PortGael - Minimal JavaScript
   Mobile menu & basic interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mobileNav.classList.toggle('is-open');
      const icon = mobileMenuBtn.querySelector('.icon');
      
      if (icon) {
        icon.textContent = isOpen ? 'close' : 'menu';
      }
      
      // Update aria-expanded
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });
  }
  
  // File Upload Preview
  const fileUploadAreas = document.querySelectorAll('.file-upload');
  
  fileUploadAreas.forEach(function(area) {
    const input = area.querySelector('input[type="file"]');
    const textEl = area.querySelector('.file-upload__text');
    
    if (input && textEl) {
      const originalText = textEl.textContent;
      
      input.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
          textEl.textContent = this.files[0].name;
          area.classList.add('file-selected');
        } else {
          textEl.textContent = originalText;
          area.classList.remove('file-selected');
        }
      });
      
      // Allow clicking anywhere in the area
      area.addEventListener('click', function() {
        input.click();
      });
      
      // Drag and drop
      area.addEventListener('dragover', function(e) {
        e.preventDefault();
        area.classList.add('drag-over');
      });
      
      area.addEventListener('dragleave', function() {
        area.classList.remove('drag-over');
      });
      
      area.addEventListener('drop', function(e) {
        e.preventDefault();
        area.classList.remove('drag-over');
        
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          input.files = e.dataTransfer.files;
          textEl.textContent = e.dataTransfer.files[0].name;
          area.classList.add('file-selected');
        }
      });
    }
  });
  
  // Form Submission Handler (no backend - just UI feedback)
  const forms = document.querySelectorAll('form[data-form]');
  
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }
      
      // Simulate submission (replace with actual backend logic later)
      setTimeout(function() {
        if (submitBtn) {
          submitBtn.textContent = 'Sent Successfully!';
          submitBtn.classList.add('btn--success');
          
          setTimeout(function() {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn--success');
            form.reset();
            
            // Reset file upload text
            const fileText = form.querySelector('.file-upload__text');
            if (fileText) {
              fileText.textContent = 'Upload CV (PDF or Word)';
            }
          }, 2000);
        }
      }, 1000);
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Active nav link highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');

    // Check if this link matches current page
    if (href === currentPath ||
        (currentPath.includes(href) && href !== '/' && href !== 'index.html')) {
      link.classList.add('active');
    }

    // Handle index page
    if ((currentPath === '/' || currentPath.endsWith('index.html')) &&
        (href === '/' || href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Testimonials infinite scroll - duplicate cards for seamless loop
  const track = document.querySelector('.testimonials__track');
  if (track) {
    const cards = track.innerHTML;
    track.innerHTML = cards + cards;
  }
  
});
