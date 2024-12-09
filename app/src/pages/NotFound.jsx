import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center text-gray-200 bg-shareClaude-background">
            <div className="max-w-2xl text-center px-4 sm:px-6 lg:px-8">
                <p className="text-xl font-bold mb-4 text-red-600">404 - Page Not Found</p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-shareClaude-accent text-shareClaude-accent text-lg font-semibold hover:bg-shareClaude-accent hover:text-white transition-colors"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound