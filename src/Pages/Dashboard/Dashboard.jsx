import React, { useState } from 'react';
import { Plus, Search, MessageSquare, Send, Paperclip, Sparkles } from 'lucide-react';

const Dashboard = () => {
  const [inputValue, setInputValue] = useState('');
  const [conversations, setConversations] = useState([]);

  const suggestionCards = [
    "Ask your LearnGPT about PMP certification",
    "Ask your LearnGPT about immigration to Canada",
    "What projects should I be concerned about right now?"
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-72 bg-blue-600 text-white flex flex-col">
        {/* Logo and Header */}
        <div className="p-6 border-b border-blue-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xl font-semibold">LearnGPT</span>
          </div>
          
          {/* New Chat Button */}
          <button className="w-full flex items-center gap-3 bg-blue-500 hover:bg-blue-400 rounded-lg px-4 py-3 transition-colors">
            <Plus className="w-5 h-5" />
            <span className="font-medium">New Chat</span>
          </button>
        </div>

        {/* Search Chat */}
        <div className="p-6 border-b border-blue-500">
          <button className="w-full flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
            <span>Search Chat</span>
          </button>
        </div>

        {/* My Conversations */}
        <div className="flex-1 p-6">
          <h3 className="text-blue-200 font-medium mb-4">My Conversations</h3>
          {conversations.length === 0 ? (
            <p className="text-blue-300 text-sm">No conversations yet</p>
          ) : (
            <div className="space-y-2">
              {conversations.map((conv, index) => (
                <div key={index} className="text-blue-100 text-sm py-2 px-3 rounded-lg hover:bg-blue-500 cursor-pointer transition-colors">
                  {conv}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-sm text-gray-500">
            Remaining 3/3
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          {/* Main Prompt */}
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-lg text-blue-500 font-medium">
              Ask your LearnGPT about...
            </p>
          </div>

          {/* Suggestions */}
          <div className="w-full max-w-4xl mb-8">
            <h4 className="text-gray-700 font-medium mb-4">Suggestions on what to ask Our AI</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {suggestionCards.map((suggestion, index) => (
                <div 
                  key={index}
                  onClick={() => setInputValue(suggestion)}
                  className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <p className="text-gray-700 text-sm leading-relaxed">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="w-full max-w-4xl">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="flex items-center p-4">
                <input
                  type="text"
                  placeholder="Ask me anything about your projects"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
                <div className="flex items-center gap-3 ml-4">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => {
                      if (inputValue.trim()) {
                        setConversations([...conversations, inputValue]);
                        setInputValue('');
                      }
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;