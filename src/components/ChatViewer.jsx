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
                const response = await fetch(`https://claude-share.roht.workers.dev/chats/${chatId}`);
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
    if (error) return <p className="text-center text-red-600">Error: {error}</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">{chatData?.title}</h2>
            <div className="space-y-6">
                {chatData?.content.map((chat, index) => (
                    <ChatMessage key={index} chat={chat} />
                ))}
            </div>
        </div>
    );
}

export default ChatViewer;
