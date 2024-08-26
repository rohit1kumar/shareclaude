import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-shareClaude-background rounded-lg text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-200">
                <span className="block">Chrome Extension to share</span>
                <span className="block">your Claude chats</span>
                <span className="block">with one click</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Link
                    to="https://github.com/rohit1kumar/shareclaude?tab=readme-ov-file#how-to-use"
                    target="_blank"
                    className="w-auto max-w-xs px-4 py-2 bg-shareClaude-userChat text-white rounded-lg hover:bg-shareClaude-accent/80 whitespace-nowrap"
                >
                    how to use
                </Link>

                <Link
                    to="/c/rhxw367ndulkfr24a5hssm5u"
                    className="w-auto max-w-xs px-4 py-2 bg-shareClaude-claudeChat text-white rounded-lg hover:bg-shareClaude-accent/80 whitespace-nowrap"
                >
                    view a chat
                </Link>
            </div>
        </div>
    )
}

export default Home
