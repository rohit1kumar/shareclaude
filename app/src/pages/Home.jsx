import { Chrome, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import DemoChat from '../components/DemoChat';

function Home() {
    return (
        <div className="min-h-screen text-gray-200">
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
                                className="inline-flex items-center px-6 py-3 rounded-lg bg-shareClaude-accent text-white text-lg font-semibold hover:bg-shareClaude-accent/80 transition-colors"
                            >
                                <Chrome className="h-6 w-6 mr-2" />
                                Add to Chrome
                            </a>
                            <Link
                                to="/c/rhxw367ndulkfr24a5hssm5u"
                                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-shareClaude-accent text-shareClaude-accent text-lg font-semibold hover:bg-shareClaude-accent hover:text-white transition-colors"
                            >
                                <Link2 className="h-6 w-6 mr-2" />
                                Get Share Link
                            </Link>
                        </div>
                    </div>
                </div>

                <FeatureCard />
                <DemoChat />
            </main>
        </div>
    );
}

export default Home;
