function PrivacyPolicy() {
    return (
        <div className="min-h-screen text-gray-200 flex items-center justify-center px-4 py-16 sm:py-24">
            <div className="max-w-3xl border border-gray-700 rounded-lg p-8 sm:p-12 text-center">
                <h1 className="text-xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-gray-300">
                    We only collect the content of your Claude AI conversations to generate shareable links.
                    No analytics or tracking tools are used, and no additional data is collected. The extension is open source for transparency. You can review the code to see how it works.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
