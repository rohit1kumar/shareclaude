function DemoChat() {
    return (
        <div id="demo" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    );
}

export default DemoChat;