import React, { useEffect, useState } from 'react';

export const RotatingText = ({
  messages,
  className = '',
  highlightClassName = '',
}) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = messages[index];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 900);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % messages.length);
          setTyping(true);
        }, 200);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index, messages]);

  return (
    <span className={className} aria-live="polite">
      <span className={highlightClassName}>{displayed}</span>
      <span
        className="inline-block w-2 h-5 bg-gradient-to-r from-blue-500 to-purple-500 align-middle animate-pulse ml-0.5 rounded-sm"
        style={{ verticalAlign: 'middle' }}
      ></span>
    </span>
  );
};