import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { typescript, javascript, python, json, bash, jsx, markup as html, sql } from 'react-syntax-highlighter/dist/esm/languages/prism'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'
import classNames from 'classnames';

SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('html', html)
SyntaxHighlighter.registerLanguage('sql', sql)

const CodeBlock = ({ node, inline, className, children, isHuman, title, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');

    if (!inline && match) {
        const language = match ? match[1].toLowerCase() : 'text';
        return (
            <div className="my-4 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 text-xs text-gray-200">
                    <span>{title || language}</span>
                </div>
                <SyntaxHighlighter
                    style={dracula}
                    language={language}
                    PreTag="div"
                    showLineNumbers={true}
                    customStyle={{
                        margin: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                    }}
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            </div>
        );
    }
    // if no language is specified, use text
    return (
        <code
            className={classNames(
                "bg-gray-700 text-gray-100 rounded px-1.5 py-0.5 text-sm",
                { "text-white": isHuman }
            )}
            {...props}
        >
            {children}
        </code>
    );
};

export default CodeBlock;