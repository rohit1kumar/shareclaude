import { Chrome, Link2, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import thumbnail from '../assets/thumbnail.webp';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function Home() {
    return (
        <div className="min-h-screen text-gray-200 overflow-x-hidden">
            <main>
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-24 text-center">
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
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-shareClaude-accent text-white text-lg font-semibold hover:bg-shareClaude-accent/80"
                        >
                            <Chrome className="h-6 w-6 mr-2" />
                            Add to Chrome
                        </a>
                        <Link
                            to="/c/rhxw367ndulkfr24a5hssm5u"
                            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-shareClaude-accent text-shareClaude-accent text-lg font-semibold hover:bg-shareClaude-accent hover:text-white"
                        >
                            <Link2 className="h-6 w-6 mr-2" />
                            Get Share Link
                        </Link>
                    </div>
                </div>

                {/* YouTube Video */}
                <div className="max-w-4xl mx-auto my-8 sm:my-12 px-4 sm:px-8">
                    <div className="aspect-video overflow-hidden rounded-xl border border-gray-600 shadow-lg shadow-shareClaude-accent/50 hover:shadow-shareClaude-accent/80 transition-all duration-300">
                        <LiteYouTubeEmbed
                            id="ZXOdIlPfrNQ"
                            thumbnail={thumbnail}
                            title="ShareClaude - Chrome Extension for Sharing Claude Conversations"
                        />
                    </div>
                </div>

                {/* Feature Card */}
                <div className="py-8 sm:py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 rounded-lg bg-shareClaude-backgroundLight text-center">
                                <div className="h-12 w-12 bg-shareClaude-background rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Link2 className="h-6 w-6 text-shareClaude-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">One-Click Sharing</h3>
                                <p className="text-gray-400">Share your entire Claude conversation with a single click, maintaining all formatting and context.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-shareClaude-backgroundLight text-center">
                                <div className="h-12 w-12 bg-shareClaude-background rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Chrome className="h-6 w-6 text-shareClaude-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                                <p className="text-gray-400">Integrates perfectly with Claude.AI's interface, providing a native sharing experience.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-shareClaude-backgroundLight text-center">
                                <div className="h-12 w-12 bg-shareClaude-background rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Github className="h-6 w-6 text-shareClaude-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Open Source</h3>
                                <p className="text-gray-400">Fully Open-source, contribute to improve sharing. Now compatible with Microsoft Edge!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demo Chat */}
                <div id="demo" className="py-8 sm:py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8">
                        <div className="rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                            <div className="p-6 border-b border-gray-700">
                                <h2 className="text-2xl font-semibold">Sample Conversation</h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="h-6 w-6 min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-shareClaude-accent flex items-center justify-center text-white font-semibold text-lg">C</div>
                                        <div className="ml-4 bg-shareClaude-claudeChat rounded-lg p-4 max-w-[66%]">
                                            <p>
                                                Hello! How can I assist you today?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start justify-end">
                                        <div className="mr-4 bg-shareClaude-userChat rounded-lg p-4 max-w-[66%]">
                                            <p>
                                                Can you help me understand quantum computing?
                                            </p>
                                        </div>
                                        <div className="h-6 w-6 min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-lg">U</div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="h-6 w-6 min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-shareClaude-accent flex items-center justify-center text-white font-semibold text-lg">C</div>
                                        <div className="ml-4 bg-shareClaude-claudeChat rounded-lg p-4 max-w-[66%]">
                                            <p>
                                                Quantum computing uses qubits, which can be in multiple states at once (superposition) and can be entangled with other qubits.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
