import { Chrome, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import DemoChat from '../components/DemoChat';

function Home() {
    return (
        <div className="min-h-screen bg-shareClaude-background text-gray-200">
            <Header />

            <main>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                            Share Your Claude Chats
                            <br />
                            <span className="text-shareClaude-accent">With One Click</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            Instantly share your Claude.AI conversations with anyone. A simple Chrome extension
                            that makes collaboration effortless.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://chromewebstore.google.com/detail/pcpjdbnjhgofgjgegodlnebdnmiddmaa"
                                target="_blank"
                                // rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 rounded-lg bg-shareClaude-accent text-white hover:bg-shareClaude-accent/80 transition-colors"
                            >
                                <Chrome className="h-5 w-5 mr-2" />
                                Add to Chrome
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                            <button
                                onClick={() => {
                                    const demoSection = document.getElementById('demo');
                                    demoSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-shareClaude-accent text-shareClaude-accent hover:bg-shareClaude-accent hover:text-white transition-colors"
                            >
                                View Sample Chat
                            </button>
                        </div>
                    </div>
                </div>

                <FeatureCard />
                <DemoChat />
            </main>

            <Footer />
        </div>
    );
}

export default Home;