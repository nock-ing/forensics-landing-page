export default function HeroSection() {
    return (
        <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div
                    className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
                >
                    <main
                        className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
                    >
                        <div className="sm:text-center lg:text-left">
                            <h1
                                className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                            >
                                <span className="block">Bitcoin Forensics</span>
                                <span
                                    className="block text-primary-light dark:text-primary-dark"
                                >For Investigators</span
                                >
                            </h1>
                            <p
                                className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                            >
                                Open-source tool for tracing Bitcoin
                                transactions with full data sovereignty. Built
                                with FastAPI and Next.js, powered by your own
                                Bitcoin node.
                            </p>
                            <div
                                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                            >
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="#docs"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-light dark:text-primary-dark bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        Read the Docs
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}