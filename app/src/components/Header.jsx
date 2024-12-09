import { Github, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="border-b border-gray-700">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <Share2 className="h-6 w-6 text-shareClaude-accent" />
                    <span className="text-xl font-semibold text-gray-200">ShareClaude</span>
                </Link>
                <a
                    href="https://github.com/rohit1kumar/shareclaude"
                    target="_blank"
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors"
                >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                </a>
            </nav>
        </header>
    );
}

export default Header;