import { Chrome, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="border-t border-gray-700 py-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 space-y-4 sm:space-y-0">
                <div className="flex space-x-6">
                    <a href="https://chromewebstore.google.com/detail/pcpjdbnjhgofgjgegodlnebdnmiddmaa" target="_blank">
                        <Chrome className="h-5 w-5 text-gray-400 hover:text-gray-200" />
                    </a>
                    <a href="https://github.com/rohit1kumar/shareclaude" target="_blank">
                        <Github className="h-5 w-5 text-gray-400 hover:text-gray-200" />
                    </a>
                    <a href="https://twitter.com/roh1tkumar" target="_blank">
                        <Twitter className="h-5 w-5 text-gray-400 hover:text-gray-200" />
                    </a>
                </div>
                <Link
                    to="/privacy-policy"
                    className="text-sm text-gray-400 hover:text-gray-200 hover:underline"
                >
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
