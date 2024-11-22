import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';

const Home = lazy(() => import('./pages/Home'));
const ChatViewer = lazy(() => import('./components/ChatViewer'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-shareClaude-background flex flex-col items-center justify-center p-4">
        <Link to="/">
          <div className="flex items-center space-x-2 mb-8">
            <Share2 className="h-6 w-6 text-shareClaude-accent" />
            <h1 className="text-3xl font-bold text-shareClaude-accent">ShareClaude</h1>
          </div>
        </Link>
        <Suspense fallback={<div className='text-center text-gray-400'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c/:chatId" element={<ChatViewer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App