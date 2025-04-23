import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-black py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl w-70 sm:w-100 left-5 sm:left-0"></div>
        <div className="relative px-4 py-10 bg-gray-800 w-70 sm:w-100 shadow-lg rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center text-white mb-8">
                  Counter App
                </h1>
                
                <div className="text-center">
                  <span className="text-5xl font-bold text-cyan-500 block mb-8">
                    {count}
                  </span>
                  
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setCount(prev => prev - 1)}
                      className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                      disabled={count <= 0}
                    >
                      -
                    </button>
                    
                    <button
                      onClick={() => setCount(0)}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
                      disabled={count === 0}
                    >
                      Reset
                    </button>
                    
                    <button
                      onClick={() => setCount(prev => prev + 1)}
                      className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <p className="text-center mt-8 text-gray-600">
                  Made for just PWA test !!!
                </p>
                
                {count > 10 && (
                  <p className="text-center text-yellow-500 font-bold animate-bounce">
                    You've reached <br /> double digits!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
