import { memo } from 'react'
import Markdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('javascript', javascript)

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
        <div className={`flex items-start ${isUser ? 'flex-row-reverse' : ''}`}>
            <ChatMessageAvatar isUser={isUser} />
            <div
                className={`mx-4 rounded-lg p-4 max-w-[70%] ${isUser ? 'bg-shareClaude-userChat' : 'bg-shareClaude-claudeChat'}`}
            >
                <Markdown
                    className="prose prose-sm max-w-none text-gray-200 break-words"
                    components={{
                        code({ className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    language={"javascript"}
                                    style={dracula}
                                    className="rounded-md text-sm overflow-x-auto bg-shareClaude-codeBox"
                                    {...props}
                                >
                                    {String(children).trim()}
                                </SyntaxHighlighter>
                            )
                                : (
                                    <code
                                        className="bg-shareClaude-codeBox rounded px-1 py-0.5 text-sm text-gray-200"
                                        {...props}
                                    >
                                        {children}
                                    </code>
                                );
                        }
                    }}
                >
                    {chat.message}
                </Markdown>
            </div>
        </div>
    );
}

export default memo(ChatMessage);
