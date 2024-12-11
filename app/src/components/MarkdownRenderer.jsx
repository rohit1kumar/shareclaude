import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const MarkdownRenderer = ({ content, isHuman }) => {
    const parseAntArtifact = (text) => {
        const artifactRegex = /<antArtifact[^>]*language="([^"]*)"[^>]*>([\s\S]*?)<\/antArtifact>/;
        const match = text.match(artifactRegex);

        if (match) {
            return {
                language: match[1],
                code: match[2].trim()
            };
        }
        return null;
    };

    const parts = content.split(/(<antArtifact.*?<\/antArtifact>)/s);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('<antArtifact')) {
                    const artifact = parseAntArtifact(part);
                    return artifact ? (
                        <CodeBlock
                            key={index}
                            className={`language-${artifact.language}`}
                            isHuman={isHuman}
                        >
                            {artifact.code}
                        </CodeBlock>
                    ) : null;
                }

                return (
                    <ReactMarkdown
                        key={index}
                        className="prose prose-sm max-w-none text-gray-200"
                        components={{
                            code: (props) => <CodeBlock {...props} isHuman={isHuman} />,
                            ol: ({ children }) => (
                                <ol className="list-decimal list-outside ml-6 my-2 text-gray-200">
                                    {children}
                                </ol>
                            ),
                            li: ({ children }) => (
                                <li className="pl-1 marker:text-gray-500 text-gray-200">{children}</li>
                            ),
                            p: ({ children }) => (
                                <p className="my-1.5 leading-relaxed text-gray-200">{children}</p>
                            ),
                            h1: ({ children }) => (
                                <h1 className="text-2xl font-bold my-4 text-gray-200">{children}</h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-xl font-semibold my-3 text-gray-200">{children}</h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-lg font-semibold my-2 text-gray-200">{children}</h3>
                            )
                        }}
                    >
                        {part}
                    </ReactMarkdown>
                );
            })}
        </>
    );
};

export default MarkdownRenderer;