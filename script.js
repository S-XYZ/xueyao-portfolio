/**
 * Shared Client Script for Compiled Website Static Export.
 * Handles interactive experiences including popup modals natively across all pages.
 */

// Helper to open a modal
window.openSiteModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
    modal.setAttribute('tabindex', '-1');
    modal.focus();
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
};

// Helper to close a modal
window.closeSiteModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore background scrolling
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Setup click handlers with event delegation
  document.body.addEventListener('click', (e) => {
    // 1. Check if clicking closest element with close attribute
    const closeBtn = e.target.closest('[data-modal-close]') || e.target.closest('[data-close-modal]') || e.target.closest('.site-modal-close');
    if (closeBtn) {
      const modalId = closeBtn.getAttribute('data-modal-close') || closeBtn.getAttribute('data-close-modal');
      if (modalId) {
        window.closeSiteModal(modalId);
      } else {
        const overlay = closeBtn.closest('.site-modal-overlay');
        if (overlay) {
          window.closeSiteModal(overlay.id);
        }
      }
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // 2. Check if clicking outside modal content (dimmed backdrop click)
    const overlay = e.target.closest('.site-modal-overlay');
    if (overlay && e.target === overlay) {
      window.closeSiteModal(overlay.id);
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // 3. Prevent clicks inside open modals from bubbling up to trigger card opens
    if (overlay) {
      return;
    }

    // 4. Check if clicking closest element with open action
    const trigger = e.target.closest('[data-modal-target]') || e.target.closest('[data-open-modal]');
    if (trigger) {
      const modalId = trigger.getAttribute('data-modal-target') || trigger.getAttribute('data-open-modal');
      if (modalId) {
        window.openSiteModal(modalId);
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }
  });

  // Handle Escape key to close open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const overlays = document.querySelectorAll('.site-modal-overlay');
      overlays.forEach(overlay => {
        if (overlay.style.display === 'flex') {
          window.closeSiteModal(overlay.id);
        }
      });
    }
  });
});
