

export default function Navbar() {
    return (
        <nav className="nav fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-indigo-600 text-2xl font-bold">Estatery</span>
              </div>
              <div className="hidden md:flex md:ml-8 space-x-8">
                <a href="#" className="text-gray-900 px-3 py-2 text-sm font-medium">Rent</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Buy</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Sell</a>
                <div className="relative group">
                  <button className="text-gray-500 group-hover:text-gray-900 px-3 py-2 text-sm font-medium inline-flex items-center">
                    Manage Property
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-500 group-hover:text-gray-900 px-3 py-2 text-sm font-medium inline-flex items-center">
                    Resources
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 px-4 py-2 text-sm font-medium hover:text-gray-900">Login</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }