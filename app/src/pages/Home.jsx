import React from 'react'
import { Link } from 'react-router-dom'
import videoThumbnail from '../assets/video-thumbnail.jpg'

function Home() {
    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-shareClaude-background rounded-lg text-center">
            <p className="text-xl sm:text-2xl font-semibold mb-6 text-gray-200">
                Chrome Extension to share Claude chats with one click
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
            <div className="aspect-video overflow-hidden rounded-lg border border-gray-600 shadow-lg shadow-shareClaude-accent/30 hover:shadow-shareClaude-accent/50 transition-all duration-300">
                <video
                    controls
                    disablepictureinpicture
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    src="https://i.imgur.com/NRAM7Lf.mp4"
                    className="w-full h-full"
                    type="video/mp4"
                    poster={videoThumbnail}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div >
    )
}

export default Home