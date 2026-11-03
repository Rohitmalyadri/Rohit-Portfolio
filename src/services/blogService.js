/**
 * Blog Service - Medium RSS Feed Integration
 * 
 * Interacts with RSS2JSON API to fetch public Medium articles.
 * Includes timeout guards, input validation, and resilient error recovery.
 */

const MEDIUM_FEED_URL = 'https://medium.com/feed/@rohitmalyadri19';
const RSS2JSON_ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_FEED_URL)}`;
const FETCH_TIMEOUT_MS = 6000;

/**
 * Fetches recent articles from Medium feed.
 * 
 * @param {number} [limit=3] Maximum number of articles to return
 * @returns {Promise<{ success: boolean, blogs: Array<any>, error: string | null }>}
 */
export const fetchRecentBlogs = async (limit = 3) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(RSS2JSON_ENDPOINT, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Feed request returned status ${response.status}`);
    }

    const data = await response.json();

    if (data?.status === 'ok' && Array.isArray(data?.items)) {
      return {
        success: true,
        blogs: data.items.slice(0, limit),
        error: null,
      };
    }

    return {
      success: false,
      blogs: [],
      error: 'Feed returned unexpected format or status.',
    };
  } catch (err) {
    const isAborted = err.name === 'AbortError';
    const message = isAborted ? 'Medium feed request timed out.' : err.message;

    if (import.meta.env.DEV) {
      console.warn('[blogService] Falling back gracefully:', message);
    }

    return {
      success: false,
      blogs: [],
      error: message,
    };
  } finally {
    clearTimeout(timeoutId);
  }
};

