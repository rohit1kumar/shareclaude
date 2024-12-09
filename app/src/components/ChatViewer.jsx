import { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage'
import { useParams } from 'react-router-dom';

function ChatViewer() {
    const [chatData, setChatData] = useState(null);
    const [error, setError] = useState(null);
    const { chatId } = useParams();

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const apiURL = "https://shareclaude.pages.dev/api/chats";
                const response = await fetch(`${apiURL}/${chatId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                document.title = data?.title ?? 'Chats - ShareClaude';
                setChatData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            }
        };

        fetchChatData();
    }, [chatId]);

    if (error) return (
        <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-red-600">
            Error: {error}
        </div>
    );


    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
                    <div className="p-6 border-b border-gray-700">
                        <h2 className="text-xl font-semibold text-gray-200 text-center">
                            {chatData?.title}
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            {chatData ? (
                                chatData.content.map((chat, index) => (
                                    <ChatMessage key={index} chat={chat} />
                                ))
                            ) : (
                                <div className="flex justify-center py-8">
                                    <div className="w-10 h-10 border-4 border-shareClaude-accent border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ChatViewer;
