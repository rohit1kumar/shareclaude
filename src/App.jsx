import React from 'react';
import './index.css';
import Chat from './Chat';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Claude Chat</h1>
      <Chat />
    </div>
  );
}

export default App;
