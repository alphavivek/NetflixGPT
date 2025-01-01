import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] p-9 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-semibold mb-2'>{title}</h1>
      <p className='hidden md:inline-block my-4 text-lg w-1/3'>{overview}</p>
      <div className='mb-4 '>
        <button className='bg-white text-black text-lg px-2 p-1 md:p-2 md:px-8 rounded-md font-semibold hover:bg-opacity-80 transform transition duration-300 hover:scale-110 hover:shadow-xl'>
          ▶️ Play
        </button>

        <button className='hidden md:inline-block mx-4 bg-gray-500 text-white text-lg p-2 px-8 rounded-md font-medium bg-opacity-70 hover:bg-opacity-95 transform transition duration-300 hover:scale-110 hover:shadow-xl'>ⓘ Info More</button>
      </div>
    </div>
  )
}

export default VideoTitle;