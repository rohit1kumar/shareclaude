import { Share2, Github, Chrome, Twitter } from 'lucide-react';

function Footer() {
    return (
        <footer className="border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Share2 className="h-5 w-5 text-shareClaude-accent" />
                        <span className="text-gray-400">ShareClaude</span>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center space-x-6">
                        <a
                            href="https://chromewebstore.google.com/detail/pcpjdbnjhgofgjgegodlnebdnmiddmaa"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-200"
                        >
                            <Chrome className="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com/rohit1kumar/shareclaude"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-200"
                        >
                            <Github className="h-5 w-5" />
                        </a>

                        <a
                            href="https://twitter.com/roh1tkumar"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-200"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;