import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage'
import { useParams } from 'react-router-dom';

function ChatViewer() {
    const [chatData, setChatData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { chatId } = useParams();

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch(`/api/chats/${chatId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                document.title = data?.title ?? 'Chats - ShareClaude';
                setChatData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChatData();
    }, [chatId]);

    if (loading) return <p className="text-center text-gray-400">Loading...</p>;
    if (error) return <p className="text-center text-red-600">Error: {error}</p>;

    return (
        <div className="w-full max-w-2xl mx-auto p-4 bg-shareClaude-background rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-200">{chatData?.title}</h2>
            <div className="space-y-4">
                {chatData?.content.map((chat, index) => (
                    <ChatMessage key={index} chat={chat} />
                ))}
            </div>
        </div>
    );
}

export default ChatViewer;
