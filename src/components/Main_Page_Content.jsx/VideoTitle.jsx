import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-semibold'>{title}</h1>
      <p className='my-4 text-lg w-1/3'>{overview}</p>
      <div className='mb-4'>
        <button className='bg-gray-500 text-white text-lg p-2 px-8 rounded-sm bg-opacity-80'>
          ▶️ Play
        </button>

        <button className='mx-2 bg-gray-500 text-white text-lg p-2 px-8 rounded-sm bg-opacity-80'>Info More</button>
      </div>
    </div>
  )
}

export default VideoTitle