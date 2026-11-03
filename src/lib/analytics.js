/**
 * Centralized Google Analytics 4 (GA4) Utility
 * 
 * Configured Measurement ID: G-SN5BSQDCY2
 * Configurable via environment variable: VITE_GA_MEASUREMENT_ID
 * 
 * Strict Privacy Guidelines:
 * - NO personally identifiable information (PII) is ever sent.
 * - Form inputs, names, emails, and messages are explicitly filtered out.
 * - Safe error handling ensures application functionality even when analytics is blocked or offline.
 */

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-SN5BSQDCY2';

/**
 * Initializes GA4 dynamically if not already initialized via HTML script tag.
 * Ensures the Google tag is loaded only once and avoids duplicate initialization.
 */
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Prevent duplicate script injection
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
};

/**
 * Core event tracking function with privacy and safety guards.
 *
 * @param {string} eventName - Standardized event name
 * @param {Record<string, unknown>} [params={}] - Clean, non-PII parameters
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch (error) {
    // Fail silently in production so user interaction is never broken
    if (import.meta.env.DEV) {
      console.warn(`[GA4] Failed to track event "${eventName}":`, error);
    }
  }
};

/**
 * Track resume download interactions.
 * Triggers when the user downloads the resume from the Hero or Resume section.
 */
export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    file_name: 'Rohit_Malyadri_Resume.pdf',
  });
};

/**
 * Track project interactions (Demo or Source Code clicks).
 *
 * @param {string} projectName - Name of the project
 * @param {'live_demo' | 'repository'} destinationType - Type of link clicked
 */
export const trackProjectClick = (projectName, destinationType) => {
  trackEvent('project_click', {
    project_name: projectName,
    destination_type: destinationType,
  });
};

/**
 * Track GitHub profile or repository link clicks.
 *
 * @param {'profile' | 'repository'} destinationType - Whether pointing to profile or project repo
 * @param {string} [projectName] - Associated project name if applicable
 */
export const trackGithubClick = (destinationType = 'profile', projectName) => {
  trackEvent('github_click', {
    platform_name: 'GitHub',
    destination_type: destinationType,
    ...(projectName ? { project_name: projectName } : {}),
  });
};

/**
 * Track Medium article link clicks.
 *
 * @param {string} [articleTitle] - Title of the blog post clicked (or 'all_blogs' if index)
 */
export const trackMediumClick = (articleTitle) => {
  trackEvent('medium_click', {
    platform_name: 'Medium',
    ...(articleTitle ? { article_title: articleTitle } : {}),
  });
};

/**
 * Track successful contact form submissions.
 * Only called when Formspree returns response.ok.
 * Explicitly sends NO personal data (names, emails, or messages).
 */
export const trackContactSubmit = () => {
  trackEvent('contact_submit', {
    form_id: 'contact_form',
    status: 'success',
  });
};

/**
 * Track when the user actively opens the floating chatbot.
 * Triggered on user opening action, not on component render.
 */
export const trackChatbotOpen = () => {
  trackEvent('chatbot_open');
};

/**
 * Track LinkedIn profile clicks.
 */
export const trackLinkedinClick = () => {
  trackEvent('linkedin_click', {
    platform_name: 'LinkedIn',
  });
};

/**
 * Track coding platform profile clicks (LeetCode, CodeChef, HackerRank).
 *
 * @param {'LeetCode' | 'CodeChef' | 'HackerRank' | string} platformName
 */
export const trackCodingProfileClick = (platformName) => {
  trackEvent('coding_profile_click', {
    platform_name: platformName,
    destination_type: 'coding_profile',
  });
};

