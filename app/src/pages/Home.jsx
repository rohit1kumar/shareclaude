import React from 'react'
import { Link } from 'react-router-dom'
import thumbnail from '../assets/thumbnail.webp'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function Home() {
    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-shareClaude-background rounded-lg text-center">
            <p className="text-lg sm:text-xl font-semibold mb-6 text-gray-200">
                Chrome Extension to Share Claude Chats with One Click
            </p>
            <div className="mb-6 flex justify-center gap-4 items-center">
                <Link
                    to="https://github.com/rohit1kumar/shareclaude?tab=readme-ov-file#shareclaude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto max-w-xs px-4 py-2 bg-shareClaude-userChat text-white rounded-lg hover:bg-shareClaude-accent/80 whitespace-nowrap"
                >
                    How to Use
                </Link>

                <Link
                    to="/c/rhxw367ndulkfr24a5hssm5u"
                    className="w-auto max-w-xs px-4 py-2 bg-shareClaude-claudeChat text-white rounded-lg hover:bg-shareClaude-accent/80 whitespace-nowrap"
                >
                    View a Chat
                </Link>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border border-gray-600 shadow-lg shadow-shareClaude-accent/50 hover:shadow-shareClaude-accent/80 transition-all duration-300">
                <LiteYouTubeEmbed
                    id="OHkNa85A_fg"
                    // poster="default"
                    thumbnail={thumbnail}
                    title="ShareClaude - Chrome Extension for Sharing Claude Conversations"
                />
            </div>
        </div >
    )
}

export default Home