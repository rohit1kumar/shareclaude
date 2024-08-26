import React from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ChatMessage({ index, chat }) {
    const isUser = chat.source === 'user'

    return (
        <div
            key={index}
            className={`p-3 sm:p-4 rounded-lg ${isUser ? 'bg-shareClaude-userChat' : 'bg-shareClaude-claudeChat'}`}
        >
            <strong className="block text-shareClaude-accent mb-2">
                {isUser ? 'User:' : 'Claude:'}
            </strong>

            <Markdown
                className="prose prose-sm max-w-none text-gray-200 break-words"
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        return !inline ? (
                            <SyntaxHighlighter
                                language="javascript"
                                style={dracula}
                                className="rounded-md text-sm overflow-x-auto bg-shareClaude-codeBox"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className="bg-shareClaude-codeBox rounded px-1 py-0.5 text-sm" {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {chat.message}
            </Markdown>
        </div>
    )
}

export default ChatMessage