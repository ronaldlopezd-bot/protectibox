
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles } from 'lucide-react';
import { askGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await askGemini(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button - Updated with User's 3D Logo */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-[100] p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all group overflow-hidden"
          title="Hablar con el Asesor"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <img 
            src="https://protectibox.com/wp-content/uploads/2026/02/Logo_principal-removebg-preview-mejorado.png" 
            alt="AI Assistant" 
            className="relative z-10 w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 animate-pulse" />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-8 z-[101] flex flex-col w-full md:w-[400px] md:max-h-[650px] bg-slate-900/95 backdrop-blur-2xl border border-white/10 md:rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-500">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/20">
                <img 
                  src="https://protectibox.com/wp-content/uploads/2026/02/Logo_principal-removebg-preview-mejorado.png" 
                  alt="Avatar" 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-montserrat">
                  Protecti<span className="text-blue-400">Box</span> AI <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </h3>
                <p className="text-[10px] text-blue-400/70 uppercase tracking-[0.2em] font-black">Soporte Inteligente</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-xl hover:bg-white/10 text-slate-400 transition-all hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.length === 0 && (
              <div className="text-center py-12 px-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/20">
                  <img 
                    src="https://protectibox.com/wp-content/uploads/2026/02/Logo_principal-removebg-preview-mejorado.png" 
                    alt="Logo" 
                    className="w-10 h-10 object-contain opacity-80"
                  />
                </div>
                <h4 className="text-white font-bold mb-3">¿Cómo puedo ayudarte?</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Soy el asistente oficial de ProtectiBox. Pregúntame sobre nuestra seguridad familiar o automatización empresarial.
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
              >
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-900/20' 
                    : 'bg-white/5 text-slate-200 rounded-bl-none border border-white/10'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-3xl rounded-bl-none border border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-6 border-t border-white/5 bg-white/5">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregunta sobre ProtectiBox..."
                className="w-full bg-slate-800/50 border border-white/10 rounded-[1.5rem] py-4 pl-6 pr-14 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all placeholder-slate-600"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2.5 top-2 p-2.5 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 transition-all shadow-lg active:scale-90"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Assistant;
