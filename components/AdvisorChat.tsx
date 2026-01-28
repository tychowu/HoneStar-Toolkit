
import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../constants';
import { askAdvisor } from '../services/gemini';

const AdvisorChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: '你好！我是星火家族的招募小助手。有什么我可以帮你的吗？' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat, isOpen]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;
    
    const userMsg = message;
    setMessage('');
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askAdvisor(userMsg);
    setChat(prev => [...prev, { role: 'model', text: response || '无法连接到 AI 顾问。' }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] ${isOpen ? 'inset-0 md:inset-auto md:bottom-6 md:right-6' : ''}`}>
      {isOpen ? (
        <div className="bg-white w-full h-full md:w-[400px] md:h-[500px] md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white safe-top">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-red-600 rounded-lg">
                <Icons.Bot className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm md:text-base">星火招募 AI 顾问</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 hide-scrollbar">
            {chat.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] md:text-sm ${
                  m.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none shadow-md shadow-red-100' 
                    : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2 safe-bottom">
            <input 
              type="text" 
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="问问细节..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors active:scale-95"
            >
              <Icons.ChevronRight className="w-5 h-5 rotate-270" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all animate-subtle-float"
        >
          <Icons.MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default AdvisorChat;
