import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-600">404 - Page Not Found</h2>
            <p className="mb-4">The page you're looking for doesn't exist.</p>
            <Link to="/" className="text-blue-600 hover:underline">Go back to Home</Link>
        </div>
    )
}

export default NotFound