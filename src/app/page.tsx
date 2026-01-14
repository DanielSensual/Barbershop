'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Banner = () => (
  <div className="w-full bg-gradient-to-br from-black via-blue-900 to-black py-20 flex flex-col items-center justify-center shadow-2xl animate-fade-in">
    <h1 className="text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-xl animate-text-pop">AIS | Ghost</h1>
    <h2 className="text-3xl font-light text-blue-300 mb-2 animate-fade-in">The Cinematic Universe</h2>
    <p className="text-xl text-gray-400 animate-fade-in">Where AI meets imagination and business.</p>
  </div>
);

interface Message {
  text: string;
  sender: 'user' | 'agent';
}

interface ChatWindowProps {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  isLoading: boolean;
}

const ChatWindow = ({ messages, input, setInput, handleSend, isLoading }: ChatWindowProps) => (
  <div className="w-full max-w-2xl mx-auto bg-black bg-opacity-70 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-blue-900 animate-fade-in">
    <div className="w-full h-80 overflow-y-auto mb-6 space-y-4">
      {messages.map((msg: Message, idx: number) => (
        <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`p-4 rounded-2xl max-w-md text-lg font-medium ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-blue-200'}`}>{msg.text}</div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start"><div className="bg-gray-800 p-4 rounded-2xl animate-pulse text-blue-300">Ghost is thinking...</div></div>
      )}
    </div>
    <div className="w-full flex">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        className="flex-1 p-4 rounded-l-2xl bg-gray-900 border border-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        placeholder="Type your message..."
        disabled={isLoading}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 px-8 py-4 rounded-r-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold text-lg"
        disabled={isLoading}
      >Send</button>
    </div>
  </div>
);

const FeaturesSection = () => (
  <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-black to-blue-900 flex flex-col items-center animate-fade-in">
    <h3 className="text-4xl font-bold text-white mb-6">Why Ghost?</h3>
    <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
      <div className="bg-black bg-opacity-60 rounded-xl p-8 shadow-lg w-72 text-center border border-blue-800">
        <h4 className="text-2xl font-semibold text-blue-400 mb-2">Cinematic AI</h4>
        <p className="text-gray-300">Experience AI with personality, drama, and flair. Not just answers—stories.</p>
      </div>
      <div className="bg-black bg-opacity-60 rounded-xl p-8 shadow-lg w-72 text-center border border-blue-800">
        <h4 className="text-2xl font-semibold text-blue-400 mb-2">Business Fusion</h4>
        <p className="text-gray-300">Integrate Ghost into your workflow for smarter, faster, and more creative results.</p>
      </div>
      <div className="bg-black bg-opacity-60 rounded-xl p-8 shadow-lg w-72 text-center border border-blue-800">
        <h4 className="text-2xl font-semibold text-blue-400 mb-2">Secure & Private</h4>
        <p className="text-gray-300">Your data is protected. Ghost is built for privacy and enterprise-grade security.</p>
      </div>
    </div>
  </section>
);

const BusinessSection = () => (
  <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 flex flex-col items-center animate-fade-in">
    <h3 className="text-3xl font-bold text-white mb-4">AI Services for Your Business</h3>
    <p className="text-lg text-gray-300 mb-6 max-w-2xl text-center">Unlock the power of Ghost AI for your enterprise. Custom solutions, consulting, and integration for the future of business.</p>
    <div className="flex space-x-8 mb-8">
      <a href="#" className="text-blue-400 hover:text-white font-semibold">FAQs</a>
      <a href="#" className="text-blue-400 hover:text-white font-semibold">Blog</a>
      <a href="#" className="text-blue-400 hover:text-white font-semibold">Contact</a>
    </div>
    <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition text-xl">Get AI for Your Business</button>
  </div>
);

const Footer = () => (
  <footer className="w-full border-t border-white/10 py-6 text-center text-xs text-gray-500">
    <Link href="/demos" className="text-blue-300 hover:text-white">
      Demo Sites
    </Link>
  </footer>
);

export default function Page() {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'agent' }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() && !isLoading) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setIsLoading(true);
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        });
        const data = await res.json();
        setMessages(prev => [...prev, { text: data.reply, sender: 'agent' }]);
      } catch {
        setMessages(prev => [...prev, { text: 'Ghost is unavailable.', sender: 'agent' }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <FeaturesSection />
      <div className="flex-1 flex flex-col items-center justify-center">
        <ChatWindow
          messages={messages}
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          isLoading={isLoading}
        />
      </div>
      <BusinessSection />
      <Footer />
    </div>
  );
}
