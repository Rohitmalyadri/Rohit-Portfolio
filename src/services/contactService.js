/**
 * Contact Service - Formspree Integration & Form Validation
 * 
 * Includes client-side input validation, honeypot spam protection,
 * request throttling / abuse prevention, and resilient error handling.
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqaeerll';
const SUBMISSION_COOLDOWN_MS = 5000;
let lastSubmissionTimestamp = 0;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates contact form fields.
 * 
 * @param {{ name: string, email: string, feedback: string }} data
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export const validateContactForm = (data) => {
  const errors = {};

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const feedback = (data.feedback || '').trim();

  if (!name || name.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  } else if (name.length > 100) {
    errors.name = 'Name cannot exceed 100 characters.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!feedback || feedback.length < 10) {
    errors.feedback = 'Please provide a message with at least 10 characters.';
  } else if (feedback.length > 3000) {
    errors.feedback = 'Message cannot exceed 3000 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Submits contact form data to Formspree.
 * 
 * @param {{ name: string, email: string, feedback: string, _gotcha?: string }} formData
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export const submitContactForm = async (formData) => {
  // Honeypot spam check - if bots fill the invisible _gotcha field, silently drop
  if (formData._gotcha) {
    return { ok: true };
  }

  // Rate limiting / abuse throttle
  const now = Date.now();
  if (now - lastSubmissionTimestamp < SUBMISSION_COOLDOWN_MS) {
    return {
      ok: false,
      error: 'Please wait a few seconds before sending another message.',
    };
  }

  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    feedback: formData.feedback.trim(),
  };

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      lastSubmissionTimestamp = Date.now();
      return { ok: true };
    }

    const data = await response.json().catch(() => null);
    const errorMessage = data?.errors?.[0]?.message || 'Submission failed. Please try again.';
    return { ok: false, error: errorMessage };
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[contactService] Network error submitting form:', err);
    }
    return {
      ok: false,
      error: 'Network connection error. Please check your connection or reach out via direct email.',
    };
  }
};
