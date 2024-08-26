import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-shareClaude-background rounded-lg text-center">
            <p className="text-xl font-bold mb-4 text-red-600">404 - Page Not Found</p>
            <Link to="/" className="text-blue-600 hover:underline">Go back to Home</Link>
        </div>
    )
}

export default NotFound