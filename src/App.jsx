import React from 'react';
import './index.css';
import ChatViewer from './components/ChatViewer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Claude Chats</h1>
      <ChatViewer />
    </div>
  );
}

export default App;
