"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";
import { getBotReply } from "@/lib/chatbot-data";

type Msg = { from: "bot" | "user"; text: string };

const SUGGESTIONS = [
  "Services kya hain?",
  "Website kitne mein?",
  "Kaise shuru karein?",
  "70% offer kya hai?",
];

export default function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [msgs, setMsgs]       = useState<Msg[]>([
    { from: "bot", text: "Hi! 👋 I'm RoyalBot. Ask me anything about RoyalFinity Technologies — services, pricing, team, or how to get started!" },
  ]);
  const [input, setInput]     = useState("");
  const [typing, setTyping]   = useState(false);
  const bottomRef             = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMsgs((prev) => [...prev, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((prev) => [...prev, { from: "bot", text: getBotReply(q) }]);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="chatbot-fab w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} color="#fff" /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {/* Robot chatbot SVG */}
                <svg viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                  {/* Antenna stem */}
                  <rect x="27" y="2" width="2" height="7" rx="1" fill="#1a3a6a"/>
                  {/* Antenna ball */}
                  <circle cx="28" cy="1.5" r="2.5" fill="#1a3a6a"/>
                  {/* Ear left */}
                  <rect x="5" y="20" width="5" height="10" rx="2.5" fill="#1a3a6a"/>
                  {/* Ear right */}
                  <rect x="46" y="20" width="5" height="10" rx="2.5" fill="#1a3a6a"/>
                  {/* Speech bubble body */}
                  <path d="M10 10 Q10 8 12 8 H44 Q46 8 46 10 V38 Q46 40 44 40 H32 L28 46 L24 40 H12 Q10 40 10 38 Z" fill="#cef0f8"/>
                  {/* Inner glow overlay */}
                  <path d="M12 10 H44 Q45 10 45 11 V20 Q30 14 11 20 V11 Q11 10 12 10Z" fill="white" opacity="0.35"/>
                  {/* Face visor */}
                  <rect x="16" y="18" width="24" height="14" rx="7" fill="#0d2147"/>
                  {/* Visor gloss */}
                  <rect x="17" y="19" width="10" height="4" rx="2" fill="white" opacity="0.12"/>
                  {/* Left eye glow */}
                  <circle cx="22" cy="25" r="4.5" fill="#00e5ff" opacity="0.25"/>
                  <circle cx="22" cy="25" r="3" fill="#00e5ff"/>
                  <circle cx="22" cy="25" r="1.5" fill="white"/>
                  {/* Right eye glow */}
                  <circle cx="34" cy="25" r="4.5" fill="#00e5ff" opacity="0.25"/>
                  <circle cx="34" cy="25" r="3" fill="#00e5ff"/>
                  <circle cx="34" cy="25" r="1.5" fill="white"/>
                </svg>
              </motion.span>
          }
        </AnimatePresence>
        {!open && <span className="chatbot-pulse" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 sm:bottom-28 left-4 sm:left-6 z-[998] w-72 sm:w-80 chatbot-window flex flex-col max-h-[70vh] sm:max-h-[420px]"
          >
            {/* Header */}
            <div className="chatbot-header px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-cyan/20 flex items-center justify-center">
                <Bot size={18} className="text-cyan" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground font-space">RoyalBot</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 chatbot-messages">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                    m.from === "user" ? "chatbot-bubble-user" : "chatbot-bubble-bot"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="chatbot-bubble-bot px-4 py-3 rounded-2xl flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/60 animate-bounce bounce-d0" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/60 animate-bounce bounce-d1" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/60 animate-bounce bounce-d2" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {msgs.length <= 1 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}
                    className="chatbot-suggestion text-xs px-2.5 py-1 rounded-full">
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="chatbot-input-area px-3 py-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 text-xs px-3 py-2.5 rounded-xl chatbot-input"
              />
              <button type="submit" disabled={!input.trim()} aria-label="Send message"
                className="w-9 h-9 rounded-xl chatbot-send flex items-center justify-center shrink-0 disabled:opacity-40 transition-opacity">
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
