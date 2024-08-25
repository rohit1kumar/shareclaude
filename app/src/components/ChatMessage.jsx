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
            className={`p-4 rounded-lg shadow-sm ${isUser ? 'bg-emerald-100' : 'bg-amber-100'}`}
        >
            <strong className="block text-indigo-700 mb-2">
                {isUser ? 'User:' : 'Claude:'}
            </strong>

            <Markdown
                className="prose prose-sm max-w-none text-gray-800"
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        return !inline ? (
                            <SyntaxHighlighter
                                language="javascript"
                                style={dracula}
                                className="rounded-md"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className="bg-gray-200 rounded px-1 py-0.5" {...props}>
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