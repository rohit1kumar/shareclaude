import { Github, Link2, Chrome } from 'lucide-react';

function FeatureCard() {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-lg bg-shareClaude-backgroundLight">
                        <div className="h-12 w-12 bg-shareClaude-background rounded-lg flex items-center justify-center mb-4">
                            <Link2 className="h-6 w-6 text-shareClaude-accent" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">One-Click Sharing</h3>
                        <p className="text-gray-400">Share your entire Claude conversation with a single click, maintaining all formatting and context.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-shareClaude-backgroundLight">
                        <div className="h-12 w-12 bg-shareClaude-background rounded-lg flex items-center justify-center mb-4">
                            <Chrome className="h-6 w-6 text-shareClaude-accent" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                        <p className="text-gray-400">Integrates perfectly with Claude.AI's interface, providing a native sharing experience.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-shareClaude-backgroundLight">
                        <div className="h-12 w-12 bg-shareClaude-background rounded-lg flex items-center justify-center mb-4">
                            <Github className="h-6 w-6 text-shareClaude-accent" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Open Source</h3>
                        <p className="text-gray-400">Fully open-source and community-driven. Contribute and help make sharing even better.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;