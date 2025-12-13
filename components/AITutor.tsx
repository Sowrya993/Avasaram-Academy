import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Trash2, Sparkles, Zap, Code2, BookOpen, Bug } from 'lucide-react';
import { Button } from './Button';
import { chatWithTutor } from '../services/geminiService';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';

const SUGGESTIONS = [
  { icon: <Code2 className="w-4 h-4" />, text: "How do I start with Python?" },
  { icon: <Zap className="w-4 h-4" />, text: "Explain Neural Networks simply" },
  { icon: <BookOpen className="w-4 h-4" />, text: "What skills will I learn in Module 3?" },
  { icon: <Bug className="w-4 h-4" />, text: "Review my code for bugs & efficiency" }
];

// Blocked keywords for content filtering
const BLOCKED_KEYWORDS = [
  'sex', 'porn', 'xxx', 'nude', 'naked', 'adult', 'erotic', 'horny', 'fuck', 'shit', 'ass',
  'dick', 'penis', 'vagina', 'boob', 'breast', 'orgasm', 'masturbat', 'prostitut', 'escort',
  'kill', 'murder', 'suicide', 'bomb', 'terrorist', 'attack', 'weapon', 'drug', 'cocaine',
  'heroin', 'meth', 'weed', 'marijuana', 'hack someone', 'steal password', 'credit card',
  'illegal', 'pirate', 'torrent', 'crack software', 'bypass security'
];

const BLOCKED_RESPONSE = "I'm here to help you with Python, Data Science, Machine Learning, and AI-related queries only. Please ask questions related to our courses or programming topics. How can I assist you with your learning today?";

const containsBlockedContent = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return BLOCKED_KEYWORDS.some(keyword => lowerText.includes(keyword));
};

export const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm **Avasaram**. I'm here to mentor you in Python and AI. \n\nFeel free to ask me to explain a concept, review your code, or just help you get started.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll only within the messages container, not the whole page
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // Only scroll when AI responds (last message is from model), not when user sends
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === 'model') {
      // Small delay to ensure DOM has updated
      setTimeout(scrollToBottom, 100);
    }
  }, [messages]);

  const handleSendMessage = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Client-side content filtering
    if (containsBlockedContent(textToSend)) {
      const blockedMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: BLOCKED_RESPONSE,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, blockedMessage]);
      setIsLoading(false);
      return;
    }

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await chatWithTutor(userMessage.text, history);

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting right now. Please check your internet connection or try again later.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: 'welcome',
      role: 'model',
      text: "Chat cleared. Ready for a fresh start!",
      timestamp: new Date()
    }]);
  };

  return (
    <div className="h-[calc(100vh-5rem)] bg-stone-50 flex justify-center pt-6 pb-6 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-200 flex flex-col overflow-hidden">
        
        {/* Chat Header */}
        <div className="px-6 py-4 bg-white border-b border-stone-100 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-stone-900 p-2 rounded-xl shadow-lg text-white">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-serif">Mentorship Chat</h2>
              <div className="flex items-center text-xs text-emerald-600 font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Online & Ready to Help
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={clearChat} className="text-stone-400 hover:text-rose-500 hover:bg-rose-50">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages Area */}
        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-stone-50/30 scrollbar-hide">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-white border-stone-200' 
                  : 'bg-stone-900 border-stone-900'
              }`}>
                {msg.role === 'user' 
                  ? <User className="w-5 h-5 text-stone-600" /> 
                  : <Sparkles className="w-4 h-4 text-orange-400" />}
              </div>
              
              <div className={`flex flex-col max-w-[85%] md:max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center gap-2 mb-1 px-1">
                  <span className="text-xs font-bold text-stone-700">
                    {msg.role === 'user' ? 'You' : 'Avasaram AI'}
                  </span>
                  <span className="text-[10px] text-stone-400">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div
                  className={`px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-stone-800 text-white rounded-tr-none'
                      : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none'
                  }`}
                >
                  {msg.role === 'model' ? (
                     <div className="prose prose-stone prose-sm max-w-none">
                       <ReactMarkdown
                          components={{
                            code({node, inline, className, children, ...props}: any) {
                              return !inline ? (
                                <div className="bg-stone-100 rounded-lg p-4 my-3 overflow-x-auto border border-stone-200 text-stone-800">
                                  <code className="font-mono text-xs" {...props}>
                                    {children}
                                  </code>
                                </div>
                              ) : (
                                <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-800 font-mono text-xs border border-stone-200" {...props}>
                                  {children}
                                </code>
                              )
                            }
                          }}
                       >
                         {msg.text}
                       </ReactMarkdown>
                     </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {messages.length === 1 && !isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 max-w-2xl animate-fade-in pl-12">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(s.text)}
                  className="flex items-center p-3 bg-white border border-stone-200 rounded-xl text-left text-sm text-stone-600 hover:border-orange-300 hover:bg-orange-50/50 transition-all group shadow-sm"
                >
                  <div className="bg-stone-100 p-2 rounded-lg mr-3 text-stone-500 group-hover:bg-white group-hover:text-orange-500 transition-colors">
                    {s.icon}
                  </div>
                  <span className="font-medium">{s.text}</span>
                </button>
              ))}
            </div>
          )}

          {isLoading && (
            <div className="flex items-start gap-4 animate-pulse">
               <div className="w-9 h-9 rounded-full bg-stone-200 flex-shrink-0" />
               <div className="bg-white border border-stone-200 px-4 py-3 rounded-2xl rounded-tl-none flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
               </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-5 bg-white border-t border-stone-200">
          <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-stone-200 focus-within:border-stone-400 transition-all shadow-inner">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question or paste code here..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-stone-800 placeholder-stone-400 resize-none h-12 py-2.5 px-3 text-base"
              rows={1}
            />
            <Button 
              onClick={() => handleSendMessage()} 
              disabled={!input.trim() || isLoading}
              className="rounded-lg !p-3 shadow-sm"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <div className="text-center mt-3">
            <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
              AI-Assisted Educational Tool • Avasaram Academy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
