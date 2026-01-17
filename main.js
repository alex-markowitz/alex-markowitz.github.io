/**
 * Alexander Markowitz Portfolio - Main JavaScript
 * Lightweight, accessible, and performant
 */

(function () {
  'use strict';

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuBtn || !mobileMenu) return;

    const menuIcon = menuBtn.querySelector('.menu-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');

    function toggleMenu() {
      const isOpen = !mobileMenu.classList.contains('hidden');

      if (isOpen) {
        // Close menu
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      } else {
        // Open menu
        mobileMenu.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
        if (menuIcon) menuIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      }
    }

    function closeMenu() {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (menuIcon) menuIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }

    // Toggle on button click
    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a nav link
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        closeMenu();
        menuBtn.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden') &&
          !mobileMenu.contains(e.target) &&
          !menuBtn.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // ==========================================================================
  // Scroll Spy - Active Navigation
  // ==========================================================================
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    // Use IntersectionObserver for better performance
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // ==========================================================================
  // Copy Email to Clipboard
  // ==========================================================================
  function initCopyEmail() {
    // Support both old and new button IDs
    const copyBtns = document.querySelectorAll('#copy-email, #copy-email-btn');

    copyBtns.forEach(copyBtn => {
      const feedbackId = copyBtn.id === 'copy-email-btn' ? 'copy-email-feedback' : 'copy-feedback';
      const feedback = document.getElementById(feedbackId);

      copyBtn.addEventListener('click', async () => {
        const email = copyBtn.dataset.email;

        try {
          await navigator.clipboard.writeText(email);
          showCopyFeedback(copyBtn, feedback);
        } catch (err) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();

          try {
            document.execCommand('copy');
            showCopyFeedback(copyBtn, feedback);
          } catch (e) {
            console.error('Failed to copy email:', e);
          }

          document.body.removeChild(textArea);
        }
      });
    });

    function showCopyFeedback(btn, feedback) {
      if (feedback) {
        feedback.style.opacity = '1';
        setTimeout(() => {
          feedback.style.opacity = '0';
        }, 2000);
      }

      btn.setAttribute('aria-label', 'Email copied!');
      setTimeout(() => {
        btn.setAttribute('aria-label', 'Copy email to clipboard');
      }, 2000);
    }
  }

  // ==========================================================================
  // Smooth Scroll with Offset for Fixed Header
  // ==========================================================================
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const headerHeight = 80; // Account for fixed header

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL without scrolling
        history.pushState(null, '', targetId);
      });
    });
  }

  // ==========================================================================
  // Animate Elements on Scroll (Using IntersectionObserver)
  // ==========================================================================
  function initScrollAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const animatedElements = document.querySelectorAll('.project-card, .publication-item, .skill-category, .timeline-item');

    if (animatedElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  // ==========================================================================
  // Initialize Everything on DOM Ready
  // ==========================================================================
  function init() {
    initMobileMenu();
    initScrollSpy();
    initCopyEmail();
    initSmoothScroll();
    initScrollAnimations();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
