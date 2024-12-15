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
        <div className={`flex items-start ${isUser ? 'flex-row-reverse' : ''} break-words whitespace-pre-wrap`}>
            <ChatMessageAvatar isUser={isUser} />
            <div
                className={`mx-4 rounded-lg p-4 max-w-[70%] overflow-hidden ${isUser ? 'bg-shareClaude-userChat' : 'bg-shareClaude-claudeChat'
                    }`}
            >
                <MarkdownRenderer
                    className="prose prose-sm max-w-none text-gray-200"
                    content={chat.message}
                    isHuman={isUser}
                />
            </div>
        </div>
    );
}

export default memo(ChatMessage);
