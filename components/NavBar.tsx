import Image from "next/image";

export default function NavBar() {

  return (
    <nav
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image src={"/nock.ing.png"} alt={"Nock.ing Logo showing text saying nock.ing"} width={136} height={32} />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#features"
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >Features</a
              >
              <a
                href="#how-it-works"
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >How It Works</a
              >
              <a
                href="#demo"
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >Demo</a
              >
              <a
                href="#docs"
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >Documentation</a
              >
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              id="theme-toggle"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 8 8 0 018-8zm.464 8.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm-1.95 2.536a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="https://github.com/nock-ing/nock.ing-forensics"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
