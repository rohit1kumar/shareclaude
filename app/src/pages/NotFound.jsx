import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-shareClaude-userChat rounded-lg text-center">
            <p className="text-xl font-bold mb-4 text-red-600">404 - Page Not Found</p>
            <Link to="/" className="text-shareClaude-accent hover:text-shareClaude-accent/80 hover:underline">
                Go back to Home
            </Link>
        </div>
    )
}

export default NotFound