import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import {
  WELCOME_MESSAGE,
  QUICK_SUGGESTIONS,
  RESPONSES,
  KEYWORD_MAP,
  FALLBACK_RESPONSE,
} from '@/data/chatbotData';

// -------------------------------------------
// Keyword Matching Engine
// -------------------------------------------
const getResponse = (input) => {
  const normalized = input.toLowerCase().trim();
  for (const { keywords, intent } of KEYWORD_MAP) {
    if (keywords.some((kw) => normalized.includes(kw))) {
      return RESPONSES[intent]?.text || FALLBACK_RESPONSE;
    }
  }
  return FALLBACK_RESPONSE;
};

// -------------------------------------------
// Render markdown-lite (bold + bullets)
// -------------------------------------------
const renderText = (text) => {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // bold: **text**
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
    );
    return (
      <span key={i} className="block">
        {rendered}
      </span>
    );
  });
};

// -------------------------------------------
// Single Message Bubble
// -------------------------------------------
const MessageBubble = ({ message }) => {
  const isBot = message.role === 'bot';
  return (
    <div
      className={`flex gap-2.5 items-end mb-3 ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
          isBot
            ? 'bg-white dark:bg-slate-800 text-foreground rounded-tl-sm border border-border/50'
            : 'bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-br-sm'
        }`}
      >
        {renderText(message.text)}
      </div>
      {!isBot && (
        <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
    </div>
  );
};

// -------------------------------------------
// Typing Indicator
// -------------------------------------------
const TypingIndicator = () => (
  <div className="flex gap-2.5 items-end mb-3 animate-fade-in">
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
      <Bot className="w-4 h-4 text-white" />
    </div>
    <div className="bg-white dark:bg-slate-800 border border-border/50 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
      <div className="flex gap-1 items-center">
        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </div>
);

// -------------------------------------------
// Main Chatbot Component
// -------------------------------------------
export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 0, role: 'bot', text: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setHasNotification(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    (text) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMsg = { id: Date.now(), role: 'user', text: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsTyping(true);

      // Simulate thinking delay (600–1000ms)
      const delay = 600 + Math.random() * 400;
      setTimeout(() => {
        const responseText = getResponse(trimmed);
        const botMsg = { id: Date.now() + 1, role: 'bot', text: responseText };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, delay);
    },
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[420px] transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-[520px] sm:h-[540px] rounded-2xl overflow-hidden shadow-anti-gravity dark:shadow-anti-gravity-dark border border-border/50 bg-muted/80 dark:bg-slate-900/80 backdrop-blur-xl">
          
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-blue-600 to-purple-600 shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm leading-tight">Ask Me About Rohit 👋</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/70 text-xs">Online · Usually responds instantly</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-0 scroll-smooth">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 2 && !isTyping && (
            <div className="px-4 pb-3 flex flex-wrap gap-2 shrink-0">
              {QUICK_SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSuggestion(s)}
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors font-medium"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-border/50 bg-background/50 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Rohit..."
              className="flex-1 bg-muted/60 dark:bg-slate-800 rounded-full px-4 py-2.5 text-sm outline-none border border-transparent focus:border-primary/50 focus:bg-background transition-all placeholder:text-muted-foreground"
              disabled={isTyping}
              aria-label="Chat message input"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100 shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-glow hover:shadow-anti-gravity flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-all" />
        ) : (
          <MessageCircle className="w-6 h-6 transition-all" />
        )}

        {/* Notification badge */}
        {hasNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold animate-bounce">
            1
          </span>
        )}
      </button>
    </>
  );
};

export default Chatbot;
