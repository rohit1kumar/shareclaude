function DemoChat() {
    return (
        <div id="demo" className="py-16 bg-shareClaude-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-shareClaude-userChat rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                    <div className="p-6 border-b border-gray-700">
                        <h2 className="text-2xl font-semibold">Sample Conversation</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-shareClaude-accent flex items-center justify-center text-white font-semibold">C</div>
                                <div className="ml-4 bg-shareClaude-claudeChat rounded-lg p-4 max-w-3xl">
                                    <p>Hello! How can I assist you today?</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end">
                                <div className="mr-4 bg-shareClaude-codeBox rounded-lg p-4 max-w-3xl">
                                    <p>Can you help me understand quantum computing?</p>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">U</div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-shareClaude-accent flex items-center justify-center text-white font-semibold">C</div>
                                <div className="ml-4 bg-shareClaude-claudeChat rounded-lg p-4 max-w-3xl">
                                    <p>Quantum computing is a fascinating field that leverages quantum mechanics to perform computations...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DemoChat;