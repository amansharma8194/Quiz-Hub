import React from 'react'

const Loading = () => {
  return (
    <div className="w-full mt-10 flex align-middle place-content-center flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-800 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-gray-800 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-gray-800 animate-bounce [animation-delay:.7s]"></div>
  </div>
  )
}

export default Loading
