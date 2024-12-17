import { memo } from 'react'
import MarkdownRenderer from './MarkdownRenderer';

const ChatMessageAvatar = memo(({ isUser }) => (
    <div
        className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-semibold ${isUser ? 'bg-gray-700' : 'bg-shareClaude-accent'}`}
    >
        {isUser ? 'U' : 'C'}
    </div>
));

function ChatMessage({ chat }) {
    const isUser = chat.source === 'user';

    return (
        <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
            <ChatMessageAvatar isUser={isUser} />
            <div
                className={`rounded-lg p-3 max-w-[70%] ${isUser ? 'bg-shareClaude-userChat' : 'bg-shareClaude-claudeChat'
                    }`}
            >
                <div className="break-words">
                    <MarkdownRenderer
                        content={chat.message}
                        isHuman={isUser}
                    />
                </div>
            </div>
        </div>
    );
}

export default memo(ChatMessage);
