import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-shareClaude-userChat rounded-lg">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-200 text-center">
                Privacy Policy
            </h1>
            <div className="text-left text-gray-300 space-y-4">
                <p className="text-justify">
                    We collect only the content of your Claude AI conversations to generate shareable links.
                    We do not use analytics software or collect any other data beyond what is needed for this
                    functionality. For transparency, the extension's open-source code is available for review.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
