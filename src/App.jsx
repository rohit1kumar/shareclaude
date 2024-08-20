import React from 'react'
import './index.css'
import ChatViewer from './components/ChatViewer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-8 text-gray-800'>Claude Chats</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c/:chatId" element={<ChatViewer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App