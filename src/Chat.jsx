import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

function ChatRenderer() {
    const [chatData, setChatData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch('https://claude-share.roht.workers.dev/chats/9');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setChatData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChatData();
    }, []);

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{chatData?.title}</h2>
            <div className="space-y-6">
                {chatData?.content.map((message, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow-sm ${message.source === 'user' ? 'bg-blue-100' : 'bg-purple-100'
                            }`}
                    >
                        <strong className="block text-gray-700 mb-2">
                            {message.source === 'user' ? 'User:' : 'Claude:'}
                        </strong>
                        <ReactMarkdown
                            className="prose prose-sm max-w-none text-gray-700"
                            remarkPlugins={[remarkGfm, remarkBreaks]}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    return !inline ? (
                                        <pre className="bg-gray-200 p-2 rounded-md overflow-auto">
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        </pre>
                                    ) : (
                                        <code className="bg-gray-200 rounded px-1 py-0.5" {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {message.message}
                        </ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatRenderer;
