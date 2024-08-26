import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-shareClaude-background rounded-lg text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-200">Share your Claude chats with one click</h2>
            <Link
                to="/c/rhxw367ndulkfr24a5hssm5u"
                className="px-4 py-2 bg-shareClaude-accent text-white rounded-lg hover:bg-shareClaude-accent/80 focus:outline-none focus:ring-2 focus:ring-shareClaude-accent transition duration-300 whitespace-nowrap"
            >
                View a chat
            </Link>
        </div>
    )
}

export default Home