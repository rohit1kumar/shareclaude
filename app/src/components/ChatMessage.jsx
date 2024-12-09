import { memo } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ChatMessageAvatar = memo(({ isUser }) => (
    <div
        className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-semibold ${isUser ? 'bg-gray-700' : 'bg-shareClaude-accent'
            }`}
    >
        {isUser ? 'U' : 'C'}
    </div>
));

const CodeRenderer = {
    code({ inline, className, children, ...props }) {
        if (inline) {
            return (
                <code
                    className="bg-shareClaude-codeBox rounded px-1 py-0.5 text-sm text-gray-200"
                    {...props}
                >
                    {children}
                </code>
            );
        }

        return (
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                className="rounded-md text-sm overflow-x-auto bg-shareClaude-codeBox"
                {...props}
            >
                {String(children).trim()}
            </SyntaxHighlighter>
        );
    }
};

function ChatMessage({ chat }) {
    const isUser = chat.source === 'user';

    return (
        <div className={`flex items-start ${isUser ? 'flex-row-reverse' : ''}`}>
            <ChatMessageAvatar isUser={isUser} />
            <div
                className={`mx-4 rounded-lg p-4 max-w-3xl ${isUser ? 'bg-shareClaude-userChat' : 'bg-shareClaude-claudeChat'
                    }`}
            >
                <Markdown
                    className="prose prose-sm max-w-none text-gray-200 break-words"
                    components={CodeRenderer}
                >
                    {chat.message}
                </Markdown>
            </div>
        </div>
    );
}

export default memo(ChatMessage);
