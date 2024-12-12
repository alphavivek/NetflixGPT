import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-semibold'>{title}</h1>
      <p className='my-4 text-lg w-1/3'>{overview}</p>
      <div className='mb-4'>
        <button className='bg-white text-black text-lg p-2 px-8 rounded-md font-semibold hover:bg-opacity-80'>
          ▶️ Play
        </button>

        <button className='mx-4 bg-gray-500 text-white text-lg p-2 px-8 rounded-md font-medium bg-opacity-70 hover:bg-opacity-95'>ⓘ Info More</button>
      </div>
    </div>
  )
}

export default VideoTitle;