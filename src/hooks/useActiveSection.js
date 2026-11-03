import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section using IntersectionObserver instead of
 * layout-thrashing scroll event listeners.
 * 
 * @param {string[]} sectionIds List of HTML element IDs to track
 * @param {string} [defaultSection='about'] Initial active section
 * @returns {string} Current active section ID
 */
export const useActiveSection = (sectionIds, defaultSection = 'about') => {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions = {
      root: null,
      // Focus on elements in the top-to-middle region of viewport
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
};

