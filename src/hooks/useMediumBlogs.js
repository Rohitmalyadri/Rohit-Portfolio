import { useState, useEffect } from 'react';
import { fetchRecentBlogs } from '@/services/blogService';

/**
 * Custom hook to fetch and manage Medium blog articles.
 * 
 * @param {number} [limit=3]
 * @returns {{ blogs: Array<any>, loading: boolean, error: string | null }}
 */
export const useMediumBlogs = (limit = 3) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      setLoading(true);
      const result = await fetchRecentBlogs(limit);

      if (isMounted) {
        if (result.success) {
          setBlogs(result.blogs);
          setError(null);
        } else {
          setBlogs([]);
          setError(result.error);
        }
        setLoading(false);
      }
    };

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, [limit]);

  return { blogs, loading, error };
};

