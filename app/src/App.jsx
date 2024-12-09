import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const ChatViewer = lazy(() => import('./components/ChatViewer'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-shareClaude-background flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center text-gray-400">
              <div className="w-12 h-12 border-4 border-shareClaude-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/c/:chatId" element={<ChatViewer />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App