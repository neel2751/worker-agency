'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  unread?: number;
}

const SAMPLE_CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    name: 'Support Team',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=support',
    lastMessage: 'How can we help you today?',
    unread: 1,
  },
  {
    id: '2',
    name: 'Project Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pm',
    lastMessage: 'Great work on the last project!',
  },
];

const SAMPLE_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'Hi! How can we help you?',
    sender: 'bot',
    timestamp: '2:30 PM',
  },
  {
    id: '2',
    text: 'I have a question about my application.',
    sender: 'user',
    timestamp: '2:31 PM',
  },
  {
    id: '3',
    text: 'Of course! Please tell us more.',
    sender: 'bot',
    timestamp: '2:32 PM',
  },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: String(messages.length + 1),
        text: inputValue,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: String(messages.length + 2),
          text: 'Thanks for your message! Our team will get back to you soon.',
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 500);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-500 hover:bg-brand-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      className={cn(
        'fixed z-50 bg-background border border-border rounded-lg shadow-2xl flex flex-col transition-all',
        isMobile
          ? isMinimized
            ? 'bottom-6 right-6 w-80 h-16'
            : 'bottom-0 right-0 top-0 w-full sm:bottom-6 sm:right-6 sm:top-auto sm:w-96 sm:h-96 rounded-lg'
          : isMinimized
          ? 'bottom-6 right-6 w-80 h-16'
          : 'bottom-6 right-6 w-96 h-96'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/30 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-t-lg shrink-0">
        <h3 className="font-semibold">Chat Support</h3>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 hover:bg-white/20 rounded transition-colors"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            <Minus size={16} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded transition-colors"
            title="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Conversation List or Messages */}
          <div className="flex-1 overflow-hidden flex">
            {/* Sidebar (hidden on mobile when in message view) */}
            <div className="w-24 border-r border-border/30 overflow-y-auto hidden sm:flex flex-col gap-2 p-2">
              {SAMPLE_CONVERSATIONS.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv.id)}
                  className={cn(
                    'relative w-full aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity',
                    selectedConversation === conv.id && 'ring-2 ring-brand-500'
                  )}
                >
                  <Image
                    src={conv.avatar}
                    alt={conv.name}
                    fill
                    className="object-cover"
                  />
                  {conv.unread && (
                    <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {conv.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="flex-1 flex flex-col bg-background">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex',
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        'max-w-xs px-3 py-2 rounded-lg text-sm',
                        message.sender === 'user'
                          ? 'bg-brand-500 text-white'
                          : 'bg-muted text-foreground'
                      )}
                    >
                      <p>{message.text}</p>
                      <p className={cn(
                        'text-xs mt-1',
                        message.sender === 'user'
                          ? 'text-white/70'
                          : 'text-foreground/60'
                      )}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-border/30 p-3 bg-muted/30">
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="text-sm"
                  />
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    className="bg-brand-500 hover:bg-brand-600 text-white shrink-0"
                  >
                    <Send size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}