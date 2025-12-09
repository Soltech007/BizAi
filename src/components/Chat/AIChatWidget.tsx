"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { INDUSTRY_CONFIG } from "@/config/industry";
import { BotIcon, PhoneCall, Send, X } from "lucide-react";

export default function AIChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([
    { from: "bot", text: "👋 Hi! I’m your AI Assistant." },
  ]);

  
  const industry = pathname?.split("/")[2] || null;
  const config = industry ? INDUSTRY_CONFIG[industry] : null;

  if (!config) return null;

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `🤖 This is *${config.label}* assistant. Your message: "${input}".`,
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-[999]"
      >
        <BotIcon size={26} />
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl border overflow-hidden flex flex-col z-[999] animate-[slideUp_0.35s_ease-out]">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-white">
            <span className="font-semibold text-sm flex items-center gap-2">
              <BotIcon size={18} /> {config.label} — AI Assistant
            </span>
            <X
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
              size={20}
            />
          </div>

          {/* ⭐ INDUSTRY-WISE CALLING NUMBER SECTION */}
          <div className="p-3 border-b bg-white flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">AI Calling Agent</p>
              <p className="text-lg font-bold text-primary">{config.phone}</p>
            </div>

            {/* Click-to-call button */}
            <a
              href={`tel:${config.phone}`}
              className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition"
              title="Call AI Agent"
            >
              <PhoneCall size={20} />
            </a>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-muted/30">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-xl max-w-[80%] text-sm ${
                  msg.from === "user"
                    ? "bg-primary text-white ml-auto"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              className="flex-1 px-3 py-2 border rounded-xl text-sm outline-none"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="bg-primary text-white p-2 rounded-xl"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
