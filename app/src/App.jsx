import React, { Suspense, lazy } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const ChatViewer = lazy(() => import('./components/ChatViewer'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
        <Link to="/">
          <h1 className='text-3xl font-bold mb-8 text-gray-800'>Claude Chats</h1>
        </Link>
        <Suspense fallback={<div className='text-center text-gray-600'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c/:chatId" element={<ChatViewer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App