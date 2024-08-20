import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Share your Claude AI chat with one click</h2>
            <Link
                to="/chats/10"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                View Example Chat
            </Link>

        </div>
    )
}

export default Home