import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

// Initialize mermaid with dark theme config
mermaid.initialize({
    startOnLoad: true,
    theme: 'dark'
})

const MarkdownRenderer = ({ content, isHuman }) => {
    const mermaidRef = useRef(null);

    useEffect(() => {
        // Re-render all mermaid diagrams when content changes
        if (mermaidRef.current) {
            mermaid.init(undefined, '.mermaid');
        }
    }, [content]);

    const parseAntArtifact = (text) => {
        const identifierMatch = text.match(/identifier="([^"]*)"/);
        const typeMatch = text.match(/type="([^"]*)"/);
        const titleMatch = text.match(/title="([^"]*)"/);
        const languageMatch = text.match(/language="([^"]*)"/);

        // Extract content between opening and closing tags
        const contentMatch = text.match(/<antArtifact[^>]*>([\s\S]*?)<\/antArtifact>/);

        if (identifierMatch && typeMatch && titleMatch && contentMatch) {
            return {
                identifier: identifierMatch[1],
                type: typeMatch[1],
                title: titleMatch[1],
                language: languageMatch ? languageMatch[1] : null,
                content: contentMatch[1].trim()
            };
        }
        return null;
    };

    const renderArtifact = (artifact, index) => {
        switch (artifact.type) {
            case 'application/vnd.ant.mermaid':
                return (
                    <div key={index} className="my-4" ref={mermaidRef}>
                        <div className="bg-gray-800 px-4 py-2 text-xs text-gray-200">
                            {artifact.title}
                        </div>
                        <div className="bg-gray-900 p-4">
                            <pre className="mermaid">
                                {artifact.content}
                            </pre>
                        </div>
                    </div>
                );

            case 'application/vnd.ant.react':
                return (
                    <CodeBlock
                        key={index}
                        className="language-jsx"
                        isHuman={isHuman}
                        title={artifact.title}
                    >
                        {artifact.content}
                    </CodeBlock>
                );

            case 'text/html':
                return (
                    <CodeBlock
                        key={index}
                        className="language-html"
                        isHuman={isHuman}
                        title={artifact.title}
                    >
                        {artifact.content}
                    </CodeBlock>
                );

            case 'text/markdown':
                return (
                    <div key={index} className="my-4">
                        <div className="bg-gray-800 px-4 py-2 text-xs text-gray-200">
                            {artifact.title}
                        </div>
                        <div className="bg-gray-900 p-4">
                            {renderMarkdown(artifact.content)}
                        </div>
                    </div>
                );

            case 'application/vnd.ant.code':
                return (
                    <CodeBlock
                        key={index}
                        className={`language-${artifact.language || 'text'}`}
                        isHuman={isHuman}
                        title={artifact.title}
                    >
                        {artifact.content}
                    </CodeBlock>
                );

            default:
                return (
                    <CodeBlock
                        key={index}
                        className="language-text"
                        isHuman={isHuman}
                        title={artifact.title}
                    >
                        {artifact.content}
                    </CodeBlock>
                );
        }
    };

    const renderMarkdown = (content, index) => (
        <ReactMarkdown
            key={index}
            remarkPlugins={[remarkGfm]}
            className="prose prose-invert prose-sm max-w-none"
            components={{
                code: (props) => <CodeBlock {...props} isHuman={isHuman} />,
                p: ({ children }) => (
                    <p className="my-1.5 leading-relaxed text-gray-200">{children}</p>
                ),
                a: ({ children, href }) => (
                    <a href={href} className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                        {children}
                    </a>
                ),
                ul: ({ children, className }) => {
                    if (className === 'contains-task-list') {
                        return <ul className="list-none ml-2 my-2 text-gray-200">{children}</ul>;
                    }
                    return <ul className="list-disc list-outside ml-6 my-2 text-gray-200">{children}</ul>;
                },
                ol: ({ children }) => (
                    <ol className="list-decimal list-outside ml-6 my-2 text-gray-200">{children}</ol>
                ),
                li: ({ children, className }) => {
                    if (className === 'task-list-item') {
                        return <li className="flex items-center space-x-2 text-gray-200">{children}</li>;
                    }
                    return <li className="pl-1 marker:text-gray-500 text-gray-200">{children}</li>;
                },
                input: ({ checked }) => (
                    <input
                        type="checkbox"
                        checked={checked}
                        readOnly
                        className="mr-2 rounded border-gray-600 bg-gray-700 checked:bg-blue-500"
                    />
                ),
                blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-700 pl-4 my-2 text-gray-300 italic">
                        {children}
                    </blockquote>
                ),
                h1: ({ children }) => (
                    <h1 className="text-2xl font-bold my-4 text-gray-200">{children}</h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-xl font-semibold my-3 text-gray-200">{children}</h2>
                ),
                h3: ({ children }) => (
                    <h3 className="text-lg font-semibold my-2 text-gray-200">{children}</h3>
                ),
                table: ({ children }) => (
                    <div className="overflow-x-auto my-4">
                        <table className="min-w-full divide-y divide-gray-700 border border-gray-700">
                            {children}
                        </table>
                    </div>
                ),
                th: ({ children }) => (
                    <th className="px-4 py-2 bg-gray-800 text-gray-200 font-semibold text-left">
                        {children}
                    </th>
                ),
                td: ({ children }) => (
                    <td className="px-4 py-2 border-t border-gray-700 text-gray-300">
                        {children}
                    </td>
                ),
                hr: () => (
                    <hr className="my-4 border-gray-700" />
                ),
                del: ({ children }) => (
                    <del className="line-through text-gray-500">{children}</del>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );

    const parts = content.split(/(<antArtifact.*?<\/antArtifact>)/s);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('<antArtifact')) {
                    const artifact = parseAntArtifact(part);
                    return artifact ? renderArtifact(artifact, index) : null;
                }
                return renderMarkdown(part, index);
            })}
        </>
    );
};

export default MarkdownRenderer;