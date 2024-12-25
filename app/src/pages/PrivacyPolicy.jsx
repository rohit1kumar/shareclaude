function PrivacyPolicy() {
    return (
        <div className="min-h-screen text-gray-200 flex items-center justify-center px-4 py-16 sm:py-24">
            <div className="max-w-3xl border border-gray-700 rounded-lg p-8 sm:p-12 text-center">
                <h1 className="text-xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-gray-300">
                    We only collect the content of your Claude AI conversations to generate shareable URLs.
                    No analytics or tracking tools are used, and no additional data is collected. The extension is open source for transparency. You can review the code to see how it works.
                </p>
                <h1 className="text-xl font-bold mt-8 mb-6">How It Works</h1>
                <p className="text-gray-300 mb-4">
                    When you share a conversation, the extension saves it to ShareClaude's database (not Claude's). Each conversation is assigned a unique URL, similar to an unlisted YouTube video. This URL can be shared with others, but it won’t appear in search results on Google. Subsequent conversations are served from ShareClaude's database, not directly from Claude.
                </p>
                <p className="text-gray-300 italic">
                    Important: While the URL is private and not searchable, anyone with the URL can still view the conversation. Please avoid sharing sensitive or personal information.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
