export default function Features() {
    return (
        <>
            <div id="features" className="py-12 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2
                            className="text-base text-primary-light dark:text-primary-dark font-semibold tracking-wide uppercase"
                        >
                            Features
                        </h2>
                        <p
                            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                        >
                            Powerful Bitcoin Analysis Tools
                        </p>
                        <p
                            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto"
                        >
                            Everything you need for comprehensive Bitcoin
                            transaction analysis.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div
                            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            <div
                                className="feature-card bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg transition-all duration-300 ease-in-out"
                            >
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center">
                                        <div
                                            className="flex-shrink-0 bg-primary-light dark:bg-primary-dark rounded-md p-3"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <h3
                                                className="text-lg font-medium text-gray-900 dark:text-white"
                                            >
                                                Transaction Tracing
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p
                                            className="text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            Follow the flow of funds through the
                                            Bitcoin network with visual transaction
                                            paths and detailed input/output
                                            analysis.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="feature-card bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg transition-all duration-300 ease-in-out"
                            >
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center">
                                        <div
                                            className="flex-shrink-0 bg-primary-light dark:bg-primary-dark rounded-md p-3"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <h3
                                                className="text-lg font-medium text-gray-900 dark:text-white"
                                            >
                                                Coin Age Analysis
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p
                                            className="text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            Determine how long coins have been held
                                            in specific addresses to identify
                                            patterns and potential laundering
                                            techniques.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="feature-card bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg transition-all duration-300 ease-in-out"
                            >
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center">
                                        <div
                                            className="flex-shrink-0 bg-primary-light dark:bg-primary-dark rounded-md p-3"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <h3
                                                className="text-lg font-medium text-gray-900 dark:text-white"
                                            >
                                                Relationship Mapping
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p
                                            className="text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            Visualize direct and indirect
                                            relationships between Bitcoin addresses
                                            to uncover hidden connections and
                                            clusters.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="feature-card bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg transition-all duration-300 ease-in-out"
                            >
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center">
                                        <div
                                            className="flex-shrink-0 bg-primary-light dark:bg-primary-dark rounded-md p-3"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <h3
                                                className="text-lg font-medium text-gray-900 dark:text-white"
                                            >
                                                Wallet Forensics
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p
                                            className="text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            Analyze wallet behavior patterns,
                                            transaction frequency, and amounts to
                                            build comprehensive profiles.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="feature-card bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg transition-all duration-300 ease-in-out"
                            >
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center">
                                        <div
                                            className="flex-shrink-0 bg-primary-light dark:bg-primary-dark rounded-md p-3"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <h3
                                                className="text-lg font-medium text-gray-900 dark:text-white"
                                            >
                                                Privacy Focused
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p
                                            className="text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            Your data never leaves your
                                            infrastructure. All analysis is
                                            performed locally against your own
                                            Bitcoin node.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="feature-card bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg transition-all duration-300 ease-in-out"
                            >
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center">
                                        <div
                                            className="flex-shrink-0 bg-primary-light dark:bg-primary-dark rounded-md p-3"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <h3
                                                className="text-lg font-medium text-gray-900 dark:text-white"
                                            >
                                                Customizable
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p
                                            className="text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            Open-source means you can extend and
                                            customize the tool to fit your specific
                                            investigative needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}